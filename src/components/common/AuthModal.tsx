import React, { useState, useEffect } from 'react';
import {
  X,
  Lock,
  Mail,
  User,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Eye,
  EyeOff,
  KeyRound,
  UserX,
  UserCheck,
  ArrowLeft,
  Copy,
  Check
} from 'lucide-react';
import { authService, AuthUser } from '../../services/authService';
import { Diya } from './Diya';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (user: AuthUser) => void;
}

type AuthMode = 'login' | 'register' | 'forgot' | 'reset';

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [recoveryCode, setRecoveryCode] = useState('');
  const [generatedCodeHint, setGeneratedCodeHint] = useState<string | null>(null);
  const [codeCopied, setCodeCopied] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorCode, setErrorCode] = useState<string | null>(null);
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
    setRecoveryCode('');
    setGeneratedCodeHint(null);
    setCodeCopied(false);
    setError(null);
    setErrorCode(null);
    setSuccessMessage(null);
    setMode('login');
  };

  const handleCopyCode = (code: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCodeCopied(true);
      setTimeout(() => setCodeCopied(false), 2000);
    }
  };

  // 1. Submit Login or Register
  const handleLoginOrRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setErrorCode(null);
    setSuccessMessage(null);

    if (lockoutTimer) {
      setError(`Login rate limit active. Please wait ${lockoutTimer} seconds before retrying.`);
      setErrorCode('RATE_LIMITED');
      return;
    }

    if (mode === 'register' && password !== confirmPassword) {
      setError('Passwords do not match. Please re-enter identical passwords.');
      setErrorCode('PASSWORD_MISMATCH');
      return;
    }

    setLoading(true);

    try {
      const cleanEmail = email.trim().toLowerCase();

      if (mode === 'login') {
        console.log('[AuthModal] Submitting login form for:', cleanEmail);
        const res = await authService.login(cleanEmail, password);

        if (res.error) {
          setError(res.error);
          setErrorCode(res.code || 'LOGIN_FAILED');
          if (res.retryAfterSeconds) {
            setLockoutTimer(res.retryAfterSeconds);
          }
        } else if (res.user) {
          setSuccessMessage(`Welcome back, ${res.user.name || 'Seeker'}! Authenticated successfully.`);
          setTimeout(() => {
            onSuccess?.(res.user!);
            onClose();
            resetForm();
          }, 800);
        }
      } else if (mode === 'register') {
        console.log('[AuthModal] Submitting registration form for:', cleanEmail);
        const res = await authService.register(name.trim(), cleanEmail, password);

        if (res.error) {
          setError(res.error);
          setErrorCode(res.code || 'REGISTRATION_FAILED');
        } else if (res.user) {
          setSuccessMessage('Account registered and secured! You are now signed in.');
          setTimeout(() => {
            onSuccess?.(res.user!);
            onClose();
            resetForm();
          }, 800);
        }
      }
    } catch (err) {
      console.error('[AuthModal] Error during submit:', err);
      setError('A system error occurred. Please try again.');
      setErrorCode('SYSTEM_ERROR');
    } finally {
      setLoading(false);
    }
  };

  // 2. Request Recovery Code (Forgot Password)
  const handleRequestRecoveryCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setErrorCode(null);
    setSuccessMessage(null);

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) {
      setError('Please enter your account email address.');
      setErrorCode('MISSING_EMAIL');
      return;
    }

    setLoading(true);
    try {
      console.log('[AuthModal] Requesting recovery code for:', cleanEmail);
      const res = await authService.forgotPassword(cleanEmail);

      if (!res.success) {
        setError(res.error || 'Account not found or recovery unavailable.');
        setErrorCode(res.code || 'RECOVERY_FAILED');
      } else {
        const code = res.recoveryCode || '';
        setGeneratedCodeHint(code);
        setRecoveryCode(code); // Pre-fill for seamless demonstration
        setSuccessMessage('Recovery code generated successfully! Enter your new password below.');
        setMode('reset');
      }
    } catch (err) {
      console.error('[AuthModal] Forgot password error:', err);
      setError('Failed to process recovery request. Please try again.');
      setErrorCode('SYSTEM_ERROR');
    } finally {
      setLoading(false);
    }
  };

  // 3. Submit New Password Reset
  const handleResetPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setErrorCode(null);
    setSuccessMessage(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please re-enter identical passwords.');
      setErrorCode('PASSWORD_MISMATCH');
      return;
    }

    if (!recoveryCode.trim()) {
      setError('Please enter the 6-digit recovery code.');
      setErrorCode('MISSING_CODE');
      return;
    }

    setLoading(true);
    try {
      const cleanEmail = email.trim().toLowerCase();
      console.log('[AuthModal] Submitting password reset for:', cleanEmail);
      const res = await authService.resetPassword(cleanEmail, recoveryCode.trim(), password);

      if (res.error) {
        setError(res.error);
        setErrorCode(res.code || 'RESET_FAILED');
      } else if (res.user) {
        setSuccessMessage('Password reset successfully! You are now securely signed in.');
        setTimeout(() => {
          onSuccess?.(res.user!);
          onClose();
          resetForm();
        }, 1000);
      }
    } catch (err) {
      console.error('[AuthModal] Reset password error:', err);
      setError('Failed to update password. Please check your recovery code and try again.');
      setErrorCode('SYSTEM_ERROR');
    } finally {
      setLoading(false);
    }
  };

  const handleFillDemo = () => {
    setMode('login');
    setEmail('seeker@sanatanakosha.org');
    setPassword('Dharma#2026Safe');
    setError(null);
    setErrorCode(null);
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
        <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 p-5 sm:p-6 border-b border-amber-800/30 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Diya size="sm" />
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold block">
                  SANATANA KOSHA IDENTITY
                </span>
                <h2 className="font-serif text-lg sm:text-2xl font-bold text-amber-100 sanskrit-font">
                  {mode === 'login' && 'साधक प्रवेशः • Sign In'}
                  {mode === 'register' && 'नूतन पञ्जीकरणम् • Register'}
                  {mode === 'forgot' && 'कूटशब्द पुनरुद्धारः • Forgot Password'}
                  {mode === 'reset' && 'नूतन कूटशब्दः • Reset Password'}
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
            <span>Hardened Auth • Salted Bcrypt • Contextual Feedback • Instant Recovery</span>
          </div>
        </div>

        {/* Mode Toggle Tabs (Shown during Login / Register) */}
        {(mode === 'login' || mode === 'register') && (
          <div className="flex border-b border-amber-900/20 bg-stone-950/50 p-1">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setError(null);
                setErrorCode(null);
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
                setErrorCode(null);
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
        )}

        {/* Back navigation when in recovery flows */}
        {(mode === 'forgot' || mode === 'reset') && (
          <div className="px-6 pt-4 flex items-center justify-between border-b border-amber-900/20 pb-3">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setError(null);
                setErrorCode(null);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-serif text-amber-400 hover:text-amber-300 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Sign In</span>
            </button>
            <span className="text-[11px] text-stone-400 font-serif">
              {mode === 'forgot' ? 'Step 1 of 2' : 'Step 2 of 2'}
            </span>
          </div>
        )}

        {/* Contextual Error & Success Notices */}
        <div className="px-6 pt-4">
          {error && (
            <div className="p-3.5 rounded-xl bg-red-950/50 border border-red-800/50 text-red-200 text-xs space-y-2 animate-fade-in">
              <div className="flex items-start gap-2.5">
                {errorCode === 'USER_NOT_FOUND' ? (
                  <UserX className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                ) : errorCode === 'INCORRECT_PASSWORD' ? (
                  <KeyRound className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                ) : errorCode === 'USER_ALREADY_EXISTS' ? (
                  <UserCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                ) : errorCode === 'RATE_LIMITED' ? (
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 animate-pulse" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                )}
                <div className="flex-1 leading-relaxed">{error}</div>
              </div>

              {/* Actionable contextual shortcuts */}
              {errorCode === 'USER_NOT_FOUND' && mode === 'login' && (
                <div className="pt-2 border-t border-red-900/30 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setMode('register');
                      setError(null);
                      setErrorCode(null);
                    }}
                    className="inline-flex items-center gap-1 text-[11px] font-serif font-bold text-amber-300 hover:text-amber-200 underline"
                  >
                    <span>Create an account with {email || 'this email'} →</span>
                  </button>
                </div>
              )}

              {errorCode === 'INCORRECT_PASSWORD' && mode === 'login' && (
                <div className="pt-2 border-t border-red-900/30 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setMode('forgot');
                      setError(null);
                      setErrorCode(null);
                    }}
                    className="inline-flex items-center gap-1 text-[11px] font-serif font-bold text-amber-300 hover:text-amber-200 underline"
                  >
                    <span>Forgot password? Reset it now →</span>
                  </button>
                </div>
              )}

              {errorCode === 'USER_ALREADY_EXISTS' && mode === 'register' && (
                <div className="pt-2 border-t border-red-900/30 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setMode('login');
                      setError(null);
                      setErrorCode(null);
                    }}
                    className="inline-flex items-center gap-1 text-[11px] font-serif font-bold text-amber-300 hover:text-amber-200 underline"
                  >
                    <span>Sign in with this account →</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {successMessage && (
            <div className="p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-800/50 text-emerald-200 text-xs flex items-center gap-2.5 animate-fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {lockoutTimer && lockoutTimer > 0 && (
            <div className="p-3.5 rounded-xl bg-amber-950/50 border border-amber-700/40 text-amber-200 text-xs flex items-center gap-2.5 mt-2">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
              <span>
                Rate limit active: retry available in <strong>{lockoutTimer}s</strong>.
              </span>
            </div>
          )}
        </div>

        {/* FLOW 1 & 2: LOGIN OR REGISTER FORM */}
        {(mode === 'login' || mode === 'register') && (
          <form onSubmit={handleLoginOrRegister} className="p-6 space-y-4">
            {mode === 'register' && (
              <div className="space-y-1.5">
                <label className="block text-xs font-serif font-semibold text-stone-300">
                  Full Name / साधक नाम
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500 pointer-events-none" />
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g., Subhradeet Sabat"
                    className="w-full pl-9 pr-4 py-3 bg-stone-950/70 border border-amber-900/30 rounded-xl text-stone-200 text-base font-serif outline-none focus:border-amber-600 transition-colors min-h-[48px]"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="block text-xs font-serif font-semibold text-stone-300">
                Email Address / पत्रसंकेतः
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500 pointer-events-none" />
                <input
                  type="email"
                  required
                  autoComplete="email"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-9 pr-4 py-3 bg-stone-950/70 border border-amber-900/30 rounded-xl text-stone-200 text-base font-serif outline-none focus:border-amber-600 transition-colors min-h-[48px]"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-serif font-semibold text-stone-300">
                  Password / कूटशब्दः
                </label>
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={() => {
                      setMode('forgot');
                      setError(null);
                      setErrorCode(null);
                    }}
                    className="text-[11px] font-serif text-amber-400 hover:text-amber-300 underline transition-colors"
                  >
                    Forgot password?
                  </button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete={mode === 'register' ? 'new-password' : 'current-password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === 'register' ? 'Min 8 chars, letters & numbers' : 'Enter your password'}
                  className="w-full pl-9 pr-12 py-3 bg-stone-950/70 border border-amber-900/30 rounded-xl text-stone-200 text-base font-serif outline-none focus:border-amber-600 transition-colors min-h-[48px]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 text-stone-400 hover:text-amber-200 transition-colors rounded-lg min-h-[40px] min-w-[40px] flex items-center justify-center"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {mode === 'register' && (
                <span className="text-[10px] text-stone-500 block">
                  Must be at least 8 characters and include both letters and numbers.
                </span>
              )}
            </div>

            {mode === 'register' && (
              <div className="space-y-1.5">
                <label className="block text-xs font-serif font-semibold text-stone-300">
                  Confirm Password / कूटशब्द पुष्टिकरण
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500 pointer-events-none" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    autoComplete="new-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter your password"
                    className="w-full pl-9 pr-12 py-3 bg-stone-950/70 border border-amber-900/30 rounded-xl text-stone-200 text-base font-serif outline-none focus:border-amber-600 transition-colors min-h-[48px]"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || Boolean(lockoutTimer && lockoutTimer > 0)}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 text-amber-100 font-serif font-bold text-sm shadow-lg border border-amber-500/30 transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
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
        )}

        {/* FLOW 3: FORGOT PASSWORD (REQUEST RECOVERY CODE) */}
        {mode === 'forgot' && (
          <form onSubmit={handleRequestRecoveryCode} className="p-6 space-y-4">
            <div className="p-3 bg-amber-950/30 border border-amber-900/40 rounded-xl text-xs text-amber-200/90 font-serif leading-relaxed">
              Enter your account's registered email address below. A 6-digit recovery code will be generated to safely reset your password.
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-serif font-semibold text-stone-300">
                Registered Email Address / पञ्जीकृत पत्रसंकेतः
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500 pointer-events-none" />
                <input
                  type="email"
                  required
                  autoComplete="email"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-9 pr-4 py-3 bg-stone-950/70 border border-amber-900/30 rounded-xl text-stone-200 text-base font-serif outline-none focus:border-amber-600 transition-colors min-h-[48px]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 text-amber-100 font-serif font-bold text-sm shadow-lg border border-amber-500/30 transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50 min-h-[48px]"
            >
              {loading ? (
                <span>Generating recovery code...</span>
              ) : (
                <>
                  <span>Request Recovery Code</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}

        {/* FLOW 4: RESET PASSWORD (ENTER CODE & NEW PASSWORD) */}
        {mode === 'reset' && (
          <form onSubmit={handleResetPasswordSubmit} className="p-6 space-y-4">
            {generatedCodeHint && (
              <div className="p-3.5 bg-amber-900/30 border border-amber-600/40 rounded-xl text-xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-amber-300 font-serif font-semibold">Your 6-Digit Recovery Code:</span>
                  <button
                    type="button"
                    onClick={() => handleCopyCode(generatedCodeHint)}
                    className="inline-flex items-center gap-1 text-[11px] text-amber-300 hover:text-amber-100 transition-colors"
                  >
                    {codeCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="font-mono text-xl tracking-widest text-amber-100 font-bold bg-stone-950/80 px-3 py-1.5 rounded-lg text-center border border-amber-900/40">
                  {generatedCodeHint}
                </div>
                <span className="text-[10px] text-stone-400 block text-center">
                  Valid for 15 minutes. Automatically pre-filled below for quick reset.
                </span>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="block text-xs font-serif font-semibold text-stone-300">
                Recovery Code (6 digits) / उद्धार कूटः
              </label>
              <input
                type="text"
                required
                maxLength={6}
                value={recoveryCode}
                onChange={(e) => setRecoveryCode(e.target.value.replace(/\D/g, ''))}
                placeholder="123456"
                className="w-full px-4 py-3 bg-stone-950/70 border border-amber-900/30 rounded-xl text-stone-200 text-lg font-mono tracking-widest text-center outline-none focus:border-amber-600 transition-colors min-h-[48px]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-serif font-semibold text-stone-300">
                New Password / नूतन कूटशब्दः
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min 8 chars, letters & numbers"
                  className="w-full pl-9 pr-12 py-3 bg-stone-950/70 border border-amber-900/30 rounded-xl text-stone-200 text-base font-serif outline-none focus:border-amber-600 transition-colors min-h-[48px]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 text-stone-400 hover:text-amber-200 transition-colors rounded-lg min-h-[40px] min-w-[40px] flex items-center justify-center"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-serif font-semibold text-stone-300">
                Confirm New Password / कूटशब्द पुष्टिकरण
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter your new password"
                  className="w-full pl-9 pr-12 py-3 bg-stone-950/70 border border-amber-900/30 rounded-xl text-stone-200 text-base font-serif outline-none focus:border-amber-600 transition-colors min-h-[48px]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-700 to-amber-900 hover:from-emerald-600 hover:to-amber-800 text-amber-100 font-serif font-bold text-sm shadow-lg border border-emerald-500/30 transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50 min-h-[48px]"
            >
              {loading ? (
                <span>Resetting and authenticating...</span>
              ) : (
                <>
                  <span>Save New Password & Sign In</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                </>
              )}
            </button>
          </form>
        )}

        {/* Defense-in-Depth Guarantee Footer */}
        <div className="p-4 bg-stone-950 border-t border-amber-900/30 text-[10px] text-stone-400 leading-relaxed font-serif space-y-1">
          <p className="text-amber-300/90 font-semibold">Sanatana Kosha Identity & Recovery Safeguards:</p>
          <ul className="list-disc list-inside space-y-0.5 text-stone-400">
            <li><strong>Contextual Feedback:</strong> Clear distinction between account existence and credential errors.</li>
            <li><strong>Password Recovery:</strong> Time-bounded 6-digit cryptographic recovery flow.</li>
            <li><strong>Session Persistence:</strong> Persistent JWT architecture resilient across tab and browser reloads.</li>
            <li><strong>Salted Encryption:</strong> Blowfish-based bcrypt hashing (12 rounds of cryptographic salt).</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
