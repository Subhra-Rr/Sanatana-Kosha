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

  public async init(): Promise<void> {
    if (this.isInitialized) return;

    try {
      const dataDir = path.dirname(this.filePath);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      if (fs.existsSync(this.filePath)) {
        const raw = fs.readFileSync(this.filePath, 'utf-8');
        const parsed: StoredUser[] = JSON.parse(raw);
        for (const u of parsed) {
          this.users.set(u.email.toLowerCase(), u);
        }
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
    return this.users.get(email.toLowerCase().trim());
  }

  public findById(id: string): StoredUser | undefined {
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
      name,
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
