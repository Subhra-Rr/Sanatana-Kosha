import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { hashPassword } from './security';

export interface StoredUser {
  id: string;
  email: string;
  name: string;
  passwordHash: string;
  createdAt: string;
  lastLoginAt: string;
  savedBookmarks?: Array<{
    id: string;
    title: string;
    itemType?: string;
    timestamp?: number;
  }>;
  personalNotes?: Record<string, string>;
}

class AuthStore {
  private users: Map<string, StoredUser> = new Map();
  private filePath: string;
  private isInitialized = false;

  constructor() {
    const dataDir = path.join(process.cwd(), 'data');
    this.filePath = path.join(dataDir, 'users.json');
  }

  private loadFromDisk(): void {
    try {
      if (fs.existsSync(this.filePath)) {
        const raw = fs.readFileSync(this.filePath, 'utf-8');
        if (raw.trim()) {
          const parsed: StoredUser[] = JSON.parse(raw);
          for (const u of parsed) {
            if (u && u.email) {
              this.users.set(u.email.toLowerCase().trim(), u);
            }
          }
        }
      }
    } catch (err) {
      console.warn('AuthStore loadFromDisk warning:', err);
    }
  }

  public async init(): Promise<void> {
    if (this.isInitialized) {
      this.loadFromDisk();
      return;
    }

    try {
      const dataDir = path.dirname(this.filePath);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      if (fs.existsSync(this.filePath)) {
        this.loadFromDisk();
      } else {
        // Seed an initial demo seeker account with pre-encrypted password
        const demoEmail = 'seeker@sanatanakosha.org';
        const demoPassword = 'Dharma#2026Safe';
        const encryptedPassword = await hashPassword(demoPassword);
        const demoUser: StoredUser = {
          id: 'user-' + crypto.randomUUID(),
          email: demoEmail,
          name: 'Sadhaka (Seeker)',
          passwordHash: encryptedPassword,
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString(),
          savedBookmarks: [],
          personalNotes: {}
        };
        this.users.set(demoEmail, demoUser);
        this.persist();
      }
    } catch (err) {
      console.warn('AuthStore init warning:', err);
    } finally {
      this.isInitialized = true;
    }
  }

  private persist(): void {
    try {
      const dataDir = path.dirname(this.filePath);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const array = Array.from(this.users.values());
      fs.writeFileSync(this.filePath, JSON.stringify(array, null, 2), 'utf-8');
    } catch (err) {
      console.error('Failed to persist users to disk:', err);
    }
  }

  public findByEmail(email: string): StoredUser | undefined {
    if (!email) return undefined;
    const cleanEmail = email.toLowerCase().trim();
    // Always check memory first, reload from disk if missing
    let user = this.users.get(cleanEmail);
    if (!user) {
      this.loadFromDisk();
      user = this.users.get(cleanEmail);
    }
    return user;
  }

  public findById(id: string): StoredUser | undefined {
    for (const u of this.users.values()) {
      if (u.id === id) return u;
    }
    this.loadFromDisk();
    for (const u of this.users.values()) {
      if (u.id === id) return u;
    }
    return undefined;
  }

  public async createUser(name: string, email: string, passwordHash: string): Promise<StoredUser> {
    await this.init();
    const normalizedEmail = email.toLowerCase().trim();
    const newUser: StoredUser = {
      id: 'user-' + crypto.randomUUID(),
      name: name.trim(),
      email: normalizedEmail,
      passwordHash,
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
      savedBookmarks: [],
      personalNotes: {}
    };

    this.users.set(normalizedEmail, newUser);
    this.persist();
    return newUser;
  }

  // In-memory cache of active password reset codes: email -> { code, expiresAt }
  private resetCodes: Map<string, { code: string; expiresAt: number }> = new Map();

  public createPasswordResetCode(email: string): { code: string; expiresAt: number } | null {
    if (!email) return null;
    const cleanEmail = email.toLowerCase().trim();
    const user = this.findByEmail(cleanEmail);
    if (!user) return null;

    // Generate secure 6-digit numeric recovery code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 15 * 60 * 1000; // 15 minutes validity
    this.resetCodes.set(cleanEmail, { code, expiresAt });
    console.log(`[Server:AuthStore] Generated recovery code for ${cleanEmail}: ${code} (expires in 15 mins)`);
    return { code, expiresAt };
  }

  public verifyResetCode(email: string, code: string): boolean {
    if (!email || !code) return false;
    const cleanEmail = email.toLowerCase().trim();
    const record = this.resetCodes.get(cleanEmail);
    if (!record) {
      console.warn(`[Server:AuthStore] No recovery code found for ${cleanEmail}`);
      return false;
    }
    if (Date.now() > record.expiresAt) {
      this.resetCodes.delete(cleanEmail);
      console.warn(`[Server:AuthStore] Recovery code for ${cleanEmail} has expired`);
      return false;
    }
    const isValid = record.code.trim() === code.trim();
    console.log(`[Server:AuthStore] Code validation for ${cleanEmail}: ${isValid ? 'VALID' : 'INVALID'}`);
    return isValid;
  }

  public updatePassword(email: string, newPasswordHash: string): boolean {
    if (!email || !newPasswordHash) return false;
    const cleanEmail = email.toLowerCase().trim();
    const user = this.findByEmail(cleanEmail);
    if (!user) {
      console.warn(`[Server:AuthStore] Cannot update password: User ${cleanEmail} not found`);
      return false;
    }

    user.passwordHash = newPasswordHash;
    user.lastLoginAt = new Date().toISOString();
    this.resetCodes.delete(cleanEmail);
    this.persist();
    console.log(`[Server:AuthStore] Successfully updated password for user ${cleanEmail} (id: ${user.id})`);
    return true;
  }

  public updateLastLogin(id: string): void {
    const user = this.findById(id);
    if (user) {
      user.lastLoginAt = new Date().toISOString();
      this.persist();
    }
  }

  public updateUserData(id: string, bookmarks?: StoredUser['savedBookmarks'], notes?: Record<string, string>): void {
    const user = this.findById(id);
    if (user) {
      if (bookmarks) user.savedBookmarks = bookmarks;
      if (notes) user.personalNotes = { ...user.personalNotes, ...notes };
      this.persist();
    }
  }
}

export const authStore = new AuthStore();

