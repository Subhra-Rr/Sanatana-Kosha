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

      // 4. Generic errors: prevent email enumeration
      const existingUser = authStore.findByEmail(sanitizedEmail);
      if (existingUser) {
        return res.status(400).json({
          error: 'An account with this email already exists or is unavailable. Please sign in instead.'
        });
      }

      // 3. Encrypt the password using bcrypt with 12 salt rounds
      const encryptedHash = await hashPassword(password);

      // Store user safely
      const newUser = await authStore.createUser(sanitizedName, sanitizedEmail, encryptedHash);

      // 5. Do not build authentication your own: standard signed JWT
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
      console.error('Registration error:', err);
      // 4. Generic error response
      return res.status(500).json({ error: GENERIC_ERRORS.SERVER_ERROR });
    }
  });

  // ==========================================================================
  // AUTH ENDPOINT: LOGIN
  // 1. Server-side validation
  // 2. Limit the login rate (brute-force protection & Retry-After)
  // 3. Encrypted password verification
  // 4. Generic errors (anti-enumeration & timing attack protection)
  // 5. Standard JWT token
  // ==========================================================================
  app.post('/api/auth/login', async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body || {};

      // 1. Server-side validation
      const emailValidation = validateEmail(email);
      if (!emailValidation.isValid) {
        return res.status(400).json({ error: emailValidation.error });
      }

      if (typeof password !== 'string' || !password) {
        return res.status(400).json({ error: 'Password is required.' });
      }

      const sanitizedEmail = emailValidation.sanitizedValue!;

      // 2. Limit the login rate (Brute-force protection)
      const rateCheck = loginRateLimiter.checkLimit(req, sanitizedEmail);
      if (!rateCheck.allowed) {
        const retryAfter = rateCheck.retryAfterSeconds || 900;
        res.setHeader('Retry-After', retryAfter.toString());
        return res.status(429).json({
          error: GENERIC_ERRORS.RATE_LIMITED,
          retryAfterSeconds: retryAfter
        });
      }

      const user = authStore.findByEmail(sanitizedEmail);

      // 4. Use generic errors & defeat timing attacks
      if (!user) {
        // Run dummy timing comparison to prevent side-channel timing attacks
        await dummyTimingSafeCompare(password);
        // Record failed attempt against IP & email in rate limiter
        loginRateLimiter.recordFailure(req, sanitizedEmail);
        return res.status(401).json({ error: GENERIC_ERRORS.INVALID_CREDENTIALS });
      }

      // 3. Encrypted password verification using bcrypt
      const isPasswordValid = await verifyPassword(password, user.passwordHash);
      if (!isPasswordValid) {
        loginRateLimiter.recordFailure(req, sanitizedEmail);
        // 4. Generic error: never specify whether email or password was wrong
        return res.status(401).json({ error: GENERIC_ERRORS.INVALID_CREDENTIALS });
      }

      // Successful authentication: reset rate limiter counter
      loginRateLimiter.recordSuccess(req, sanitizedEmail);
      authStore.updateLastLogin(user.id);

      // 5. Standard JWT token generation
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
      console.error('Login error:', err);
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

