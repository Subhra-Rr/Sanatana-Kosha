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
  code?: string;
  retryAfterSeconds?: number;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message?: string;
  recoveryCode?: string;
  error?: string;
  code?: string;
}

const TOKEN_STORAGE_KEY = 'sanatana_kosha_auth_token';
const USER_STORAGE_KEY = 'sanatana_kosha_auth_user';

type AuthListener = (user: AuthUser | null) => void;

class AuthService {
  private currentToken: string | null = null;
  private currentUser: AuthUser | null = null;
  private listeners: Set<AuthListener> = new Set();

  constructor() {
    this.restoreSessionFromStorage();

    // Cross-tab / multi-window session synchronization
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (event) => {
        if (event.key === TOKEN_STORAGE_KEY || event.key === USER_STORAGE_KEY) {
          console.log('[AuthService] Detected auth storage update from another window/tab');
          this.restoreSessionFromStorage();
          this.notifyListeners();
        }
      });
    }
  }

  private restoreSessionFromStorage(): void {
    try {
      this.currentToken = localStorage.getItem(TOKEN_STORAGE_KEY);
      const storedUser = localStorage.getItem(USER_STORAGE_KEY);
      if (storedUser) {
        this.currentUser = JSON.parse(storedUser);
        console.log('[AuthService] Restored cached session for:', this.currentUser?.email);
      } else {
        this.currentUser = null;
      }
    } catch (err) {
      console.warn('[AuthService] Error parsing cached user session:', err);
      this.currentUser = null;
    }
  }

  public subscribe(listener: AuthListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notifyListeners(): void {
    for (const listener of this.listeners) {
      try {
        listener(this.currentUser);
      } catch (err) {
        console.error('[AuthService] Listener notification error:', err);
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
    return !!this.currentToken && !!this.currentUser;
  }

  public async register(name: string, email: string, password: string): Promise<AuthResponse> {
    const cleanEmail = email.trim().toLowerCase();
    const cleanName = name.trim();
    console.log(`[AuthService] Initiating account registration for: "${cleanEmail}" (Name: "${cleanName}")`);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: cleanName, email: cleanEmail, password })
      });

      const data = await res.json();
      console.log(`[AuthService] Registration response status ${res.status}:`, data);

      if (!res.ok) {
        return {
          error: data.error || 'Registration failed. Please try again.',
          code: data.code || 'REGISTRATION_FAILED'
        };
      }

      this.saveSession(data.token, data.user);
      console.log('[AuthService] User registration succeeded and session saved for:', data.user.email);
      return { user: data.user, token: data.token };
    } catch (err) {
      console.error('[AuthService] Network error during registration:', err);
      return {
        error: 'Unable to connect to the server. Please check your connection and retry.',
        code: 'NETWORK_ERROR'
      };
    }
  }

  public async login(email: string, password: string): Promise<AuthResponse> {
    const cleanEmail = email.trim().toLowerCase();
    console.log(`[AuthService] Initiating login for: "${cleanEmail}"`);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: cleanEmail, password })
      });

      const data = await res.json();
      console.log(`[AuthService] Login response status ${res.status} for "${cleanEmail}":`, data);

      if (res.status === 429) {
        return {
          error: data.error || 'Too many sign-in attempts. Please wait before retrying.',
          code: 'RATE_LIMITED',
          retryAfterSeconds: data.retryAfterSeconds || 180
        };
      }

      if (!res.ok) {
        return {
          error: data.error || 'Invalid credentials.',
          code: data.code || (res.status === 404 ? 'USER_NOT_FOUND' : 'INCORRECT_PASSWORD')
        };
      }

      this.saveSession(data.token, data.user);
      console.log(`[AuthService] Login SUCCESS: User session saved for "${data.user.email}" (ID: ${data.user.id})`);
      return { user: data.user, token: data.token };
    } catch (err) {
      console.error('[AuthService] Network error during login:', err);
      return {
        error: 'Unable to connect to the authentication server. Please check your network and retry.',
        code: 'NETWORK_ERROR'
      };
    }
  }

  public async forgotPassword(email: string): Promise<ForgotPasswordResponse> {
    const cleanEmail = email.trim().toLowerCase();
    console.log(`[AuthService] Requesting password recovery code for: "${cleanEmail}"`);

    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: cleanEmail })
      });

      const data = await res.json();
      console.log(`[AuthService] Forgot password response (${res.status}):`, data);

      if (!res.ok) {
        return {
          success: false,
          error: data.error || 'Failed to generate recovery code.',
          code: data.code || 'RECOVERY_FAILED'
        };
      }

      return {
        success: true,
        message: data.message,
        recoveryCode: data.recoveryCode
      };
    } catch (err) {
      console.error('[AuthService] Network error during forgot password:', err);
      return {
        success: false,
        error: 'Unable to contact the server. Please check your connection and retry.',
        code: 'NETWORK_ERROR'
      };
    }
  }

  public async resetPassword(email: string, code: string, newPassword: string): Promise<AuthResponse> {
    const cleanEmail = email.trim().toLowerCase();
    const cleanCode = code.trim();
    console.log(`[AuthService] Submitting password reset for: "${cleanEmail}"`);

    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: cleanEmail, code: cleanCode, newPassword })
      });

      const data = await res.json();
      console.log(`[AuthService] Reset password response (${res.status}):`, data);

      if (!res.ok) {
        return {
          error: data.error || 'Failed to reset password.',
          code: data.code || 'RESET_FAILED'
        };
      }

      if (data.token && data.user) {
        this.saveSession(data.token, data.user);
        console.log('[AuthService] Password reset successful, session established for:', data.user.email);
      }

      return {
        user: data.user,
        token: data.token
      };
    } catch (err) {
      console.error('[AuthService] Network error during password reset:', err);
      return {
        error: 'Unable to contact the server. Please check your connection and retry.',
        code: 'NETWORK_ERROR'
      };
    }
  }

  public async checkSession(): Promise<AuthUser | null> {
    if (!this.currentToken) {
      console.log('[AuthService] checkSession: No stored JWT token found.');
      return null;
    }

    console.log('[AuthService] checkSession: Verifying session token with /api/auth/me...');
    try {
      const res = await fetch('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${this.currentToken}`
        }
      });

      console.log('[AuthService] checkSession response status:', res.status);

      // ONLY invalidate local session if server explicitly returned 401 Unauthorized
      if (res.status === 401) {
        console.warn('[AuthService] Session token rejected (401 Unauthorized). Clearing session.');
        this.logout();
        return null;
      }

      // If server returned another error (e.g. 500, 502, 503 during restart), DO NOT wipe cached user
      if (!res.ok) {
        console.warn('[AuthService] Non-401 server response during session check. Retaining cached user.');
        return this.currentUser;
      }

      const data = await res.json();
      if (data && data.user) {
        this.currentUser = data.user;
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data.user));
        console.log('[AuthService] Session verified successfully for:', data.user.email);
        this.notifyListeners();
        return data.user;
      }

      return this.currentUser;
    } catch (err) {
      console.warn('[AuthService] Network failure during session check. Retaining cached user offline:', err);
      // Retain offline session to prevent sudden logouts on temporary network blips
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
    console.log('[AuthService] Logging out user:', this.currentUser?.email || 'Unknown');
    this.currentToken = null;
    this.currentUser = null;
    try {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      localStorage.removeItem(USER_STORAGE_KEY);
    } catch (err) {
      console.warn('[AuthService] Could not clear localStorage:', err);
    }
    this.notifyListeners();
  }

  private saveSession(token: string, user: AuthUser): void {
    this.currentToken = token;
    this.currentUser = user;
    try {
      localStorage.setItem(TOKEN_STORAGE_KEY, token);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } catch (err) {
      console.warn('[AuthService] Could not persist session to localStorage:', err);
    }
    this.notifyListeners();
  }
}

export const authService = new AuthService();
