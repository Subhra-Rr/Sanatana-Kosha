import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

// ============================================================================
// SECURITY IMPLEMENTATION 1: SERVER-SIDE VALIDATION
// ============================================================================

/**
 * Strict RFC 5322 regex for email validation.
 * Rejects mailboxes with invalid characters, invalid domains, or lengths exceeding 254 characters.
 */
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  sanitizedValue?: string;
}

/**
 * Validates and sanitizes email address on the server side.
 */
export function validateEmail(email: unknown): ValidationResult {
  if (typeof email !== 'string') {
    return { isValid: false, error: 'Email must be a valid text string.' };
  }

  const trimmed = email.trim().toLowerCase();

  if (!trimmed) {
    return { isValid: false, error: 'Email address is required.' };
  }

  if (trimmed.length > 254) {
    return { isValid: false, error: 'Email address cannot exceed 254 characters.' };
  }

  if (!EMAIL_REGEX.test(trimmed)) {
    return { isValid: false, error: 'Please provide a valid email format.' };
  }

  return { isValid: true, sanitizedValue: trimmed };
}

/**
 * Validates password on the server side with length boundaries to prevent DoS attacks.
 * Max length 128 protects bcrypt against CPU-exhaustion algorithm-complexity attacks.
 */
export function validatePassword(password: unknown): ValidationResult {
  if (typeof password !== 'string') {
    return { isValid: false, error: 'Password must be a valid text string.' };
  }

  if (password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters long.' };
  }

  if (password.length > 128) {
    return { isValid: false, error: 'Password length cannot exceed 128 characters.' };
  }

  // Must contain at least one letter and at least one digit or symbol
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasDigitOrSymbol = /[\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

  if (!hasLetter || !hasDigitOrSymbol) {
    return { isValid: false, error: 'Password must include both letters and numbers or symbols.' };
  }

  return { isValid: true, sanitizedValue: password };
}

/**
 * Validates display name on registration.
 */
export function validateName(name: unknown): ValidationResult {
  if (typeof name !== 'string') {
    return { isValid: false, error: 'Name must be a valid text string.' };
  }

  const trimmed = name.trim();

  if (trimmed.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters long.' };
  }

  if (trimmed.length > 50) {
    return { isValid: false, error: 'Name cannot exceed 50 characters.' };
  }

  // Sanitize potential HTML/script tags
  const sanitized = trimmed.replace(/[<>]/g, '');

  return { isValid: true, sanitizedValue: sanitized };
}

/**
 * Validates prompt input for AI endpoints.
 */
export function validatePrompt(prompt: unknown): ValidationResult {
  if (typeof prompt !== 'string') {
    return { isValid: false, error: 'Prompt must be a string.' };
  }

  const trimmed = prompt.trim();

  if (!trimmed) {
    return { isValid: false, error: 'Prompt cannot be empty.' };
  }

  if (trimmed.length > 3000) {
    return { isValid: false, error: 'Prompt exceeds maximum permitted length (3000 characters).' };
  }

  return { isValid: true, sanitizedValue: trimmed };
}

// ============================================================================
// SECURITY IMPLEMENTATION 2: LIMIT THE LOGIN RATE (BRUTE-FORCE MITIGATION)
// ============================================================================

interface RateLimitRecord {
  failedAttempts: number;
  firstAttemptTime: number;
  lastAttemptTime: number;
  lockedUntil?: number;
}

/**
 * Memory-efficient sliding-window rate limiter for authentication endpoints.
 * Limits failed attempts per IP address and per email to stop credential stuffing and brute-forcing.
 */
class LoginRateLimiter {
  private ipRecords: Map<string, RateLimitRecord> = new Map();
  private emailRecords: Map<string, RateLimitRecord> = new Map();

  private readonly maxFailedAttempts = 5;
  private readonly windowMs = 15 * 60 * 1000; // 15 minutes window
  private readonly lockoutDurationMs = 15 * 60 * 1000; // 15 minutes lockout

  constructor() {
    // Periodically evict expired records to prevent unbounded memory growth
    setInterval(() => this.cleanup(), 10 * 60 * 1000);
  }

  private getKey(req: Request, email?: string): { ipKey: string; emailKey?: string } {
    const forwarded = req.headers['x-forwarded-for'];
    const ip = typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : req.socket.remoteAddress || '127.0.0.1';
    return {
      ipKey: `ip:${ip}`,
      emailKey: email ? `email:${email.toLowerCase().trim()}` : undefined
    };
  }

  /**
   * Checks if an incoming login attempt is allowed.
   * Returns { allowed: true } or { allowed: false, retryAfterSeconds: number }.
   */
  public checkLimit(req: Request, email?: string): { allowed: boolean; retryAfterSeconds?: number } {
    const { ipKey, emailKey } = this.getKey(req, email);
    const now = Date.now();

    for (const key of [ipKey, emailKey].filter(Boolean) as string[]) {
      const store = key.startsWith('ip:') ? this.ipRecords : this.emailRecords;
      const record = store.get(key);

      if (record) {
        // If currently locked out
        if (record.lockedUntil && record.lockedUntil > now) {
          const retryAfterSeconds = Math.ceil((record.lockedUntil - now) / 1000);
          return { allowed: false, retryAfterSeconds };
        }

        // Check if current sliding window has exceeded max attempts
        if (now - record.firstAttemptTime < this.windowMs && record.failedAttempts >= this.maxFailedAttempts) {
          record.lockedUntil = now + this.lockoutDurationMs;
          const retryAfterSeconds = Math.ceil(this.lockoutDurationMs / 1000);
          return { allowed: false, retryAfterSeconds };
        }
      }
    }

    return { allowed: true };
  }

  /**
   * Records a failed login attempt for the IP and account.
   */
  public recordFailure(req: Request, email?: string): void {
    const { ipKey, emailKey } = this.getKey(req, email);
    const now = Date.now();

    for (const key of [ipKey, emailKey].filter(Boolean) as string[]) {
      const store = key.startsWith('ip:') ? this.ipRecords : this.emailRecords;
      const record = store.get(key);

      if (!record || now - record.firstAttemptTime > this.windowMs) {
        store.set(key, {
          failedAttempts: 1,
          firstAttemptTime: now,
          lastAttemptTime: now
        });
      } else {
        record.failedAttempts += 1;
        record.lastAttemptTime = now;
        if (record.failedAttempts >= this.maxFailedAttempts) {
          record.lockedUntil = now + this.lockoutDurationMs;
        }
      }
    }
  }

  /**
   * Resets failed attempts upon successful authentication.
   */
  public recordSuccess(req: Request, email?: string): void {
    const { ipKey, emailKey } = this.getKey(req, email);
    this.ipRecords.delete(ipKey);
    if (emailKey) {
      this.emailRecords.delete(emailKey);
    }
  }

  private cleanup(): void {
    const now = Date.now();
    for (const [key, record] of this.ipRecords.entries()) {
      if ((record.lockedUntil && record.lockedUntil < now) || now - record.lastAttemptTime > this.windowMs) {
        this.ipRecords.delete(key);
      }
    }
    for (const [key, record] of this.emailRecords.entries()) {
      if ((record.lockedUntil && record.lockedUntil < now) || now - record.lastAttemptTime > this.windowMs) {
        this.emailRecords.delete(key);
      }
    }
  }
}

export const loginRateLimiter = new LoginRateLimiter();

// ============================================================================
// SECURITY IMPLEMENTATION 3: ENCRYPT THE PASSWORD (BCRYPT SALTED HASHING)
// ============================================================================

const BCRYPT_SALT_ROUNDS = 12;

/**
 * Encrypts a password using bcrypt with 12 rounds of cryptographic salt.
 * Ensures passwords are never stored in plain text or reversible formats.
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(BCRYPT_SALT_ROUNDS);
  return bcrypt.hash(password, salt);
}

/**
 * Securely verifies a candidate password against an encrypted hash.
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Pre-computed dummy hash used to eliminate timing side-channel attacks.
 * If a user does not exist, comparing against this hash ensures constant-time response,
 * preventing attackers from inferring account existence based on response duration.
 */
const DUMMY_HASH = '$2a$12$e8Y5M6H5Vq8sYq5Gj9Gf0eWp6K5X7Z8A9B0C1D2E3F4G5H6I7J8K9';

export async function dummyTimingSafeCompare(password: string): Promise<void> {
  try {
    await bcrypt.compare(password, DUMMY_HASH);
  } catch {
    // Ignore dummy comparison result
  }
}

// ============================================================================
// SECURITY IMPLEMENTATION 4: USE GENERIC ERRORS
// ============================================================================

/**
 * OWASP-compliant generic error messages.
 * Never leak whether an email exists, account status, or internal validation failures.
 */
export const GENERIC_ERRORS = {
  INVALID_CREDENTIALS: 'Invalid email or password.',
  RATE_LIMITED: 'Too many login attempts. Please try again later.',
  UNAUTHORIZED: 'Authentication required. Please sign in.',
  INVALID_REGISTRATION: 'Unable to process registration with the provided details.',
  SERVER_ERROR: 'An unexpected error occurred. Please try again later.'
} as const;

// ============================================================================
// SECURITY IMPLEMENTATION 5: DO NOT BUILD AUTHENTICATION YOUR OWN
// ============================================================================

/**
 * Standard, battle-tested JWT (RFC 7519) authentication architecture.
 * Uses HMAC-SHA256 with strong entropy key and standard claims (sub, email, iat, exp).
 */
const JWT_SECRET: string = process.env.JWT_SECRET || (() => {
  // If not specified in environment, generate high-entropy crypto secret
  return crypto.randomBytes(32).toString('hex');
})();

export interface TokenPayload {
  sub: string;
  email: string;
  name: string;
}

export function generateAuthToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
    issuer: 'sanatana-kosha-auth'
  });
}

export function verifyAuthToken(token: string): TokenPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET, {
      algorithms: ['HS256'],
      issuer: 'sanatana-kosha-auth'
    }) as TokenPayload;
    return decoded;
  } catch {
    return null;
  }
}

/**
 * Express middleware to authenticate and authorize requests via standard Bearer token.
 */
export function requireAuth(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: GENERIC_ERRORS.UNAUTHORIZED });
    return;
  }

  const token = authHeader.split(' ')[1];
  const payload = verifyAuthToken(token);

  if (!payload) {
    res.status(401).json({ error: GENERIC_ERRORS.UNAUTHORIZED });
    return;
  }

  // Attach authenticated user identity to request
  (req as Request & { user?: TokenPayload }).user = payload;
  next();
}
