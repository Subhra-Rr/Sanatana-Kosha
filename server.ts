import express, { Request, Response } from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import {
  validateEmail,
  validatePassword,
  validateName,
  validatePrompt,
  loginRateLimiter,
  hashPassword,
  verifyPassword,
  dummyTimingSafeCompare,
  generateAuthToken,
  requireAuth,
  GENERIC_ERRORS,
  TokenPayload
} from './server/security';
import { authStore } from './server/authStore';

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  // Configure reverse proxy trust for container environments
  app.set('trust proxy', 1);

  // Initialize auth store
  await authStore.init();

  // Basic security and parsing middlewares
  app.use(express.json({ limit: '500kb' }));
  app.use(express.static(path.join(process.cwd(), 'public')));

  // Standard Security Headers
  app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  // ==========================================================================
  // AUTH ENDPOINT: REGISTER
  // 1. Server-side validation
  // 3. Encrypt password (bcrypt 12 rounds)
  // 4. Generic errors
  // 5. Standard JWT token
  // ==========================================================================
  app.post('/api/auth/register', async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body || {};

      // 1. Server-side validation
      const nameValidation = validateName(name);
      if (!nameValidation.isValid) {
        return res.status(400).json({ error: nameValidation.error });
      }

      const emailValidation = validateEmail(email);
      if (!emailValidation.isValid) {
        return res.status(400).json({ error: emailValidation.error });
      }

      const passwordValidation = validatePassword(password);
      if (!passwordValidation.isValid) {
        return res.status(400).json({ error: passwordValidation.error });
      }

      const sanitizedEmail = emailValidation.sanitizedValue!;
      const sanitizedName = nameValidation.sanitizedValue!;

      console.log(`[Server:Auth] Registration attempt for email: "${sanitizedEmail}", name: "${sanitizedName}"`);

      // Check if user already exists
      const existingUser = authStore.findByEmail(sanitizedEmail);
      if (existingUser) {
        console.warn(`[Server:Auth] Registration rejected: User already exists for "${sanitizedEmail}"`);
        return res.status(409).json({
          error: `An account with email "${sanitizedEmail}" already exists. Please sign in instead.`,
          code: 'USER_ALREADY_EXISTS',
          email: sanitizedEmail
        });
      }

      // Encrypt password using bcrypt with 12 salt rounds
      const encryptedHash = await hashPassword(password);

      // Store user safely and persist immediately
      const newUser = await authStore.createUser(sanitizedName, sanitizedEmail, encryptedHash);
      console.log(`[Server:Auth] Account created successfully for "${sanitizedEmail}" (User ID: ${newUser.id})`);

      // Standard signed JWT
      const token = generateAuthToken({
        sub: newUser.id,
        email: newUser.email,
        name: newUser.name
      });

      return res.status(201).json({
        message: 'Account registered successfully.',
        token,
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email
        }
      });
    } catch (err) {
      console.error('[Server:Auth] Registration error:', err);
      return res.status(500).json({ error: GENERIC_ERRORS.SERVER_ERROR });
    }
  });

  // ==========================================================================
  // AUTH ENDPOINT: LOGIN
  // Provides clear, contextual error messaging (USER_NOT_FOUND vs INCORRECT_PASSWORD)
  // ==========================================================================
  app.post('/api/auth/login', async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body || {};

      // 1. Server-side validation
      const emailValidation = validateEmail(email);
      if (!emailValidation.isValid) {
        console.warn(`[Server:Auth] Login rejected: Invalid email format (${email})`);
        return res.status(400).json({ error: emailValidation.error, code: 'INVALID_EMAIL' });
      }

      if (typeof password !== 'string' || !password) {
        return res.status(400).json({ error: 'Password is required.', code: 'MISSING_PASSWORD' });
      }

      const sanitizedEmail = emailValidation.sanitizedValue!;
      console.log(`[Server:Auth] Login attempt for email: "${sanitizedEmail}"`);

      // 2. Limit the login rate (Brute-force protection)
      const rateCheck = loginRateLimiter.checkLimit(req, sanitizedEmail);
      if (!rateCheck.allowed) {
        const retryAfter = rateCheck.retryAfterSeconds || 180;
        res.setHeader('Retry-After', retryAfter.toString());
        console.warn(`[Server:Auth] Login blocked by rate limiter for "${sanitizedEmail}". Retry after: ${retryAfter}s`);
        return res.status(429).json({
          error: `Too many sign-in attempts. Please wait ${retryAfter} seconds before trying again.`,
          code: 'RATE_LIMITED',
          retryAfterSeconds: retryAfter
        });
      }

      const user = authStore.findByEmail(sanitizedEmail);

      // Contextual check: Account existence
      if (!user) {
        console.warn(`[Server:Auth] Login failed: No user found with email "${sanitizedEmail}"`);
        await dummyTimingSafeCompare(password);
        loginRateLimiter.recordFailure(req, sanitizedEmail);
        return res.status(404).json({
          error: `No account found with email "${sanitizedEmail}". Please verify your email or create a new account.`,
          code: 'USER_NOT_FOUND',
          email: sanitizedEmail
        });
      }

      console.log(`[Server:Auth] Account found for "${sanitizedEmail}" (User: ${user.name}, ID: ${user.id}). Verifying password...`);

      // Robust password verification with trimmed fallback
      let isPasswordValid = await verifyPassword(password, user.passwordHash);
      if (!isPasswordValid && typeof password === 'string' && password !== password.trim()) {
        isPasswordValid = await verifyPassword(password.trim(), user.passwordHash);
      }

      if (!isPasswordValid) {
        console.warn(`[Server:Auth] Login failed: Incorrect password for user "${sanitizedEmail}"`);
        loginRateLimiter.recordFailure(req, sanitizedEmail);
        return res.status(401).json({
          error: 'Incorrect password for this account. Please verify your password or use "Forgot Password" to reset it.',
          code: 'INCORRECT_PASSWORD',
          email: sanitizedEmail
        });
      }

      // Successful authentication: reset rate limiter counter
      console.log(`[Server:Auth] Login SUCCESS for "${sanitizedEmail}" (${user.name})`);
      loginRateLimiter.recordSuccess(req, sanitizedEmail);
      authStore.updateLastLogin(user.id);

      // Standard JWT token generation
      const token = generateAuthToken({
        sub: user.id,
        email: user.email,
        name: user.name
      });

      return res.json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          lastLoginAt: user.lastLoginAt,
          savedBookmarks: user.savedBookmarks || [],
          personalNotes: user.personalNotes || {}
        }
      });
    } catch (err) {
      console.error('[Server:Auth] Login error:', err);
      return res.status(500).json({ error: GENERIC_ERRORS.SERVER_ERROR });
    }
  });

  // ==========================================================================
  // AUTH ENDPOINT: FORGOT PASSWORD (REQUEST RECOVERY CODE)
  // ==========================================================================
  app.post('/api/auth/forgot-password', async (req: Request, res: Response) => {
    try {
      const { email } = req.body || {};
      const emailValidation = validateEmail(email);
      if (!emailValidation.isValid) {
        return res.status(400).json({ error: emailValidation.error, code: 'INVALID_EMAIL' });
      }

      const sanitizedEmail = emailValidation.sanitizedValue!;
      console.log(`[Server:Auth] Password recovery requested for: "${sanitizedEmail}"`);

      const user = authStore.findByEmail(sanitizedEmail);
      if (!user) {
        console.warn(`[Server:Auth] Password recovery failed: User "${sanitizedEmail}" not found`);
        return res.status(404).json({
          error: `No account found with email "${sanitizedEmail}". Please check your email or register.`,
          code: 'USER_NOT_FOUND',
          email: sanitizedEmail
        });
      }

      const resetData = authStore.createPasswordResetCode(sanitizedEmail);
      if (!resetData) {
        return res.status(500).json({ error: 'Unable to generate password recovery code.' });
      }

      console.log(`[Server:Auth] Generated recovery code for "${sanitizedEmail}": [ ${resetData.code} ]`);

      return res.json({
        success: true,
        message: `Recovery code generated for ${sanitizedEmail}.`,
        recoveryCode: resetData.code,
        expiresInMinutes: 15,
        email: sanitizedEmail
      });
    } catch (err) {
      console.error('[Server:Auth] Forgot password error:', err);
      return res.status(500).json({ error: GENERIC_ERRORS.SERVER_ERROR });
    }
  });

  // ==========================================================================
  // AUTH ENDPOINT: RESET PASSWORD (VERIFY CODE & UPDATE PASSWORD)
  // ==========================================================================
  app.post('/api/auth/reset-password', async (req: Request, res: Response) => {
    try {
      const { email, code, newPassword } = req.body || {};
      const emailValidation = validateEmail(email);
      if (!emailValidation.isValid) {
        return res.status(400).json({ error: emailValidation.error, code: 'INVALID_EMAIL' });
      }

      const sanitizedEmail = emailValidation.sanitizedValue!;

      if (typeof code !== 'string' || !code.trim()) {
        return res.status(400).json({ error: 'Recovery code is required.', code: 'MISSING_CODE' });
      }

      const passwordValidation = validatePassword(newPassword);
      if (!passwordValidation.isValid) {
        return res.status(400).json({ error: passwordValidation.error, code: 'INVALID_PASSWORD' });
      }

      const isCodeValid = authStore.verifyResetCode(sanitizedEmail, code);
      if (!isCodeValid) {
        console.warn(`[Server:Auth] Invalid or expired recovery code submitted for "${sanitizedEmail}"`);
        return res.status(400).json({
          error: 'The recovery code is invalid or has expired (valid for 15 minutes). Please request a new code.',
          code: 'INVALID_RESET_CODE'
        });
      }

      const newHash = await hashPassword(passwordValidation.sanitizedValue!);
      const updated = authStore.updatePassword(sanitizedEmail, newHash);
      if (!updated) {
        return res.status(500).json({ error: 'Failed to update account password.', code: 'UPDATE_FAILED' });
      }

      // Reset any login failure limits
      loginRateLimiter.recordSuccess(req, sanitizedEmail);
      loginRateLimiter.resetEmailAttempts(sanitizedEmail);

      const user = authStore.findByEmail(sanitizedEmail)!;
      console.log(`[Server:Auth] Password successfully updated for user "${sanitizedEmail}"`);

      // Generate fresh token
      const token = generateAuthToken({
        sub: user.id,
        email: user.email,
        name: user.name
      });

      return res.json({
        success: true,
        message: 'Password reset successfully! You are now securely signed in.',
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt,
          lastLoginAt: user.lastLoginAt,
          savedBookmarks: user.savedBookmarks || [],
          personalNotes: user.personalNotes || {}
        }
      });
    } catch (err) {
      console.error('[Server:Auth] Reset password error:', err);
      return res.status(500).json({ error: GENERIC_ERRORS.SERVER_ERROR });
    }
  });

  // ==========================================================================
  // AUTH ENDPOINT: GET CURRENT USER (PROTECTED)
  // ==========================================================================
  app.get('/api/auth/me', requireAuth, (req: Request, res: Response) => {
    const userPayload = (req as Request & { user?: TokenPayload }).user;
    if (!userPayload) {
      return res.status(401).json({ error: GENERIC_ERRORS.UNAUTHORIZED });
    }

    const user = authStore.findById(userPayload.sub);
    if (!user) {
      return res.status(401).json({ error: GENERIC_ERRORS.UNAUTHORIZED });
    }

    return res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        lastLoginAt: user.lastLoginAt,
        savedBookmarks: user.savedBookmarks || [],
        personalNotes: user.personalNotes || {}
      }
    });
  });

  // ==========================================================================
  // AUTH ENDPOINT: SYNC USER LIBRARY (PROTECTED)
  // ==========================================================================
  app.post('/api/auth/sync-library', requireAuth, (req: Request, res: Response) => {
    const userPayload = (req as Request & { user?: TokenPayload }).user;
    if (!userPayload) {
      return res.status(401).json({ error: GENERIC_ERRORS.UNAUTHORIZED });
    }

    const { bookmarks, notes } = req.body || {};
    authStore.updateUserData(userPayload.sub, Array.isArray(bookmarks) ? bookmarks : undefined, notes);

    return res.json({
      success: true,
      message: 'Library state synced to secure account.'
    });
  });

  // ==========================================================================
  // API Route for AI Spiritual Assistant with Gemini
  // 1. Server-side validation on prompt
  // ==========================================================================
  app.post('/api/ai-assistant', async (req, res) => {
    try {
      const { prompt } = req.body || {};

      // 1. Server-side validation
      const promptValidation = validatePrompt(prompt);
      if (!promptValidation.isValid) {
        return res.status(400).json({ error: promptValidation.error });
      }

      const sanitizedPrompt = promptValidation.sanitizedValue!;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY environment variable is missing.' });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const systemInstruction = `You are the Sanatana Kosha AI Knowledge Assistant, an expert scholar in Hindu scriptures, Sanskrit philology, Vedas, Upanishads, Bhagavad Gita, Puranas, 6 Classical Darshanas, and traditional Acharya commentaries (Shankara, Ramanuja, Madhva, etc.).

When answering ANY user query:
1. ALWAYS provide a complete, articulate, reverent, and scholarly explanation FIRST. Act like an experienced traditional teacher combined with a modern scholar.
2. Structure your response clearly:
   - Direct & Comprehensive Explanation: Thoroughly explain the spiritual, philosophical, and historical aspects of the question.
   - Sacred Sanskrit Verse(s) or Mantra(s): Include authentic Devanagari Sanskrit text, IAST Transliteration, and accurate Translation/Word-by-word meaning whenever relevant.
   - Philosophical & Practical Significance: Detail how this applies to inner transformation, meditation, daily life, or spiritual practice.
   - Traditional Viewpoints: Mention traditional interpretations (Advaita, Vishishtadvaita, Dvaita, Shaiva, etc.) where applicable.
3. CITATIONS & REFERENCES: Only AFTER giving the full detailed explanation above, clearly list the primary scripture names, chapter numbers, and verse references supporting your answer at the very end.

Never return only citations or brief bullet stubs. Always deliver a rich, comprehensive, illuminating answer first.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: sanitizedPrompt,
        config: {
          systemInstruction
        }
      });

      const reply = response.text || 'No response generated.';
      
      // Extract citations if present or supply formatted list
      const citationMatches = reply.match(/(?:Source|Reference|Citation|Scripture)s?:?[\s\S]*/i);
      let citations = ['Bhagavad Gita', 'Principal Upanishads', 'Vedic Samhitas'];
      if (citationMatches) {
        citations = citationMatches[0]
          .split('\n')
          .filter(line => line.trim().length > 0 && !line.toLowerCase().includes('citation'))
          .map(line => line.replace(/^[-*•\d.]+\s*/, '').trim())
          .slice(0, 5);
      }

      res.json({
        reply,
        citations
      });
    } catch (err: unknown) {
      console.error('Gemini API Error:', err);
      res.status(500).json({ error: 'Failed to process spiritual knowledge query.' });
    }
  });

  // Health check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', platform: 'Sanatana Kosha', securityLevel: 'hardened' });
  });

  // Vite middleware in dev mode
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

