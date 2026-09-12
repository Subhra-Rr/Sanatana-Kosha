export interface AuthUser {
  id: string;
  name: string;
  email: string;
  createdAt?: string;
  lastLoginAt?: string;
  savedBookmarks?: Array<{
    id: string;
    title: string;
    itemType?: string;
    timestamp?: number;
  }>;
  personalNotes?: Record<string, string>;
}

export interface AuthResponse {
  user?: AuthUser;
  token?: string;
  error?: string;
  retryAfterSeconds?: number;
}

const TOKEN_STORAGE_KEY = 'sanatana_kosha_auth_token';
const USER_STORAGE_KEY = 'sanatana_kosha_auth_user';

class AuthService {
  private currentToken: string | null = null;
  private currentUser: AuthUser | null = null;

  constructor() {
    this.currentToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    const storedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (storedUser) {
      try {
        this.currentUser = JSON.parse(storedUser);
      } catch {
        this.currentUser = null;
      }
    }
  }

  public getToken(): string | null {
    return this.currentToken;
  }

  public getUser(): AuthUser | null {
    return this.currentUser;
  }

  public isAuthenticated(): boolean {
    return !!this.currentToken;
  }

  public async register(name: string, email: string, password: string): Promise<AuthResponse> {
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        return {
          error: data.error || 'Registration failed. Please try again.'
        };
      }

      this.saveSession(data.token, data.user);
      return { user: data.user, token: data.token };
    } catch {
      return { error: 'Unable to connect to server. Please check your network connection.' };
    }
  }

  public async login(email: string, password: string): Promise<AuthResponse> {
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.status === 429) {
        return {
          error: data.error || 'Too many login attempts. Please try again later.',
          retryAfterSeconds: data.retryAfterSeconds || 900
        };
      }

      if (!res.ok) {
        return {
          error: data.error || 'Invalid email or password.'
        };
      }

      this.saveSession(data.token, data.user);
      return { user: data.user, token: data.token };
    } catch {
      return { error: 'Unable to reach the server. Please try again later.' };
    }
  }

  public async checkSession(): Promise<AuthUser | null> {
    if (!this.currentToken) return null;

    try {
      const res = await fetch('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${this.currentToken}`
        }
      });

      if (!res.ok) {
        this.logout();
        return null;
      }

      const data = await res.json();
      this.currentUser = data.user;
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data.user));
      return data.user;
    } catch {
      return this.currentUser;
    }
  }

  public async syncLibrary(bookmarks: unknown[], notes: Record<string, string>): Promise<boolean> {
    if (!this.currentToken) return false;

    try {
      const res = await fetch('/api/auth/sync-library', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.currentToken}`
        },
        body: JSON.stringify({ bookmarks, notes })
      });

      return res.ok;
    } catch {
      return false;
    }
  }

  public logout(): void {
    this.currentToken = null;
    this.currentUser = null;
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
  }

  private saveSession(token: string, user: AuthUser): void {
    this.currentToken = token;
    this.currentUser = user;
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  }
}

export const authService = new AuthService();
