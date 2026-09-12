import React, { useState, useEffect } from 'react';
import { X, Lock, Mail, User, ShieldCheck, AlertCircle, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { authService, AuthUser } from '../../services/authService';
import { Diya } from './Diya';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (user: AuthUser) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [lockoutTimer, setLockoutTimer] = useState<number | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (lockoutTimer && lockoutTimer > 0) {
      interval = setInterval(() => {
        setLockoutTimer((prev) => (prev && prev > 1 ? prev - 1 : null));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [lockoutTimer]);

  if (!isOpen) return null;

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError(null);
    setSuccessMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (lockoutTimer) {
      setError(`Login rate limit active. Please wait ${lockoutTimer} seconds before retrying.`);
      return;
    }

    if (mode === 'register' && password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      if (mode === 'login') {
        const res = await authService.login(email, password);
        if (res.error) {
          setError(res.error);
          if (res.retryAfterSeconds) {
            setLockoutTimer(res.retryAfterSeconds);
          }
        } else if (res.user) {
          setSuccessMessage('Welcome back to Sanatana Kosha.');
          setTimeout(() => {
            onSuccess?.(res.user!);
            onClose();
            resetForm();
          }, 800);
        }
      } else {
        const res = await authService.register(name, email, password);
        if (res.error) {
          setError(res.error);
        } else if (res.user) {
          setSuccessMessage('Account registered and secured successfully.');
          setTimeout(() => {
            onSuccess?.(res.user!);
            onClose();
            resetForm();
          }, 800);
        }
      }
    } catch {
      setError('A system error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFillDemo = () => {
    setMode('login');
    setEmail('seeker@sanatanakosha.org');
    setPassword('Dharma#2026Safe');
    setError(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-stone-900 border border-amber-800/40 rounded-3xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sacred Header Accent */}
        <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 p-6 border-b border-amber-800/30 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Diya size="sm" />
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold block">
                  SANATANA KOSHA IDENTITY
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-amber-100 sanskrit-font">
                  {mode === 'login' ? 'साधक प्रवेशः • Sign In' : 'नूतन पञ्जीकरणम् • Register'}
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-stone-400 hover:text-amber-200 hover:bg-stone-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Security Standards Tag */}
          <div className="mt-3 flex items-center gap-2 text-[10px] text-amber-300/80 font-serif">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Hardened Auth: Server Validation • Rate Limiting • Salted Bcrypt • Generic Errors</span>
          </div>
        </div>

        {/* Mode Toggle Tabs */}
        <div className="flex border-b border-amber-900/20 bg-stone-950/50 p-1">
          <button
            type="button"
            onClick={() => {
              setMode('login');
              setError(null);
            }}
            className={`flex-1 py-2.5 text-xs font-serif font-bold transition-all rounded-xl min-h-[40px] ${
              mode === 'login'
                ? 'bg-amber-700/80 text-amber-100 shadow-sm border border-amber-600/30'
                : 'text-stone-400 hover:text-amber-200'
            }`}
          >
            Sign In (प्रवेशः)
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('register');
              setError(null);
            }}
            className={`flex-1 py-2.5 text-xs font-serif font-bold transition-all rounded-xl min-h-[40px] ${
              mode === 'register'
                ? 'bg-amber-700/80 text-amber-100 shadow-sm border border-amber-600/30'
                : 'text-stone-400 hover:text-amber-200'
            }`}
          >
            Create Account (पञ्जीकरणम्)
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800/40 text-red-200 text-xs flex items-start gap-2.5 animate-fade-in">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">{error}</span>
            </div>
          )}

          {successMessage && (
            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-200 text-xs flex items-center gap-2.5 animate-fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {lockoutTimer && lockoutTimer > 0 && (
            <div className="p-3.5 rounded-xl bg-amber-950/50 border border-amber-700/40 text-amber-200 text-xs flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
              <span>
                Rate limit active: retry available in <strong>{lockoutTimer}s</strong>.
              </span>
            </div>
          )}

          {mode === 'register' && (
            <div className="space-y-1.5">
              <label className="block text-xs font-serif font-semibold text-stone-300">
                Full Name / साधक नाम
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Ananda Sharma"
                  className="w-full pl-9 pr-4 py-2.5 bg-stone-950/70 border border-amber-900/30 rounded-xl text-stone-200 text-xs sm:text-sm font-serif outline-none focus:border-amber-600 transition-colors"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="block text-xs font-serif font-semibold text-stone-300">
              Email Address / पत्रसंकेतः
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-9 pr-4 py-2.5 bg-stone-950/70 border border-amber-900/30 rounded-xl text-stone-200 text-xs sm:text-sm font-serif outline-none focus:border-amber-600 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-xs font-serif font-semibold text-stone-300">
              Password / कूटशब्दः
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={mode === 'register' ? 'Min 8 chars, letters & numbers' : 'Enter your password'}
                className="w-full pl-9 pr-4 py-2.5 bg-stone-950/70 border border-amber-900/30 rounded-xl text-stone-200 text-xs sm:text-sm font-serif outline-none focus:border-amber-600 transition-colors"
              />
            </div>
            {mode === 'register' && (
              <span className="text-[10px] text-stone-500 block">
                Must be at least 8 characters and include both letters and numbers/symbols.
              </span>
            )}
          </div>

          {mode === 'register' && (
            <div className="space-y-1.5">
              <label className="block text-xs font-serif font-semibold text-stone-300">
                Confirm Password / कूटशब्द पुष्टिकरण
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter your password"
                  className="w-full pl-9 pr-4 py-2.5 bg-stone-950/70 border border-amber-900/30 rounded-xl text-stone-200 text-xs sm:text-sm font-serif outline-none focus:border-amber-600 transition-colors"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading || Boolean(lockoutTimer && lockoutTimer > 0)}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 text-amber-100 font-serif font-bold text-xs sm:text-sm shadow-lg border border-amber-500/30 transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
          >
            {loading ? (
              <span>Authenticating securely...</span>
            ) : mode === 'login' ? (
              <>
                <span>Sign In Securely</span>
                <ArrowRight className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Register & Encrypt Credentials</span>
                <ShieldCheck className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Demo account quick filler */}
          {mode === 'login' && (
            <div className="pt-2 border-t border-amber-900/20 text-center">
              <button
                type="button"
                onClick={handleFillDemo}
                className="text-[11px] text-amber-400 hover:text-amber-300 underline font-serif transition-colors"
              >
                Fill Verified Seeker Demo Account (seeker@sanatanakosha.org)
              </button>
            </div>
          )}
        </form>

        {/* Security Architecture Guarantee Footer */}
        <div className="p-4 bg-stone-950 border-t border-amber-900/30 text-[10px] text-stone-400 leading-relaxed font-serif space-y-1">
          <p className="text-amber-300/90 font-semibold">Sanatana Kosha Defense-in-Depth Guarantee:</p>
          <ul className="list-disc list-inside space-y-0.5 text-stone-400">
            <li><strong>1. Server Validation:</strong> Strict payload format & length constraints.</li>
            <li><strong>2. Rate Limiting:</strong> 5-attempt brute force shield per IP & identity with 429 lockout.</li>
            <li><strong>3. Salted Encryption:</strong> Blowfish-based bcrypt hashing (12 rounds).</li>
            <li><strong>4. Generic Errors:</strong> Uniform messages to defeat user enumeration & timing leaks.</li>
            <li><strong>5. Standard Auth:</strong> RFC 7519 HMAC-SHA256 JWT tokens.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
