import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Diya } from './Diya';
import {
  Search,
  BookOpen,
  Bookmark,
  Sparkles,
  Menu,
  X,
  Compass,
  Landmark,
  MapPin,
  Calendar,
  Layers,
  GraduationCap,
  History,
  GitBranch,
  Cpu,
  FileSpreadsheet,
  User,
  LogOut,
  ShieldCheck
} from 'lucide-react';

export const Header: React.FC = () => {
  const { setIsSearchOpen, setIsAiAssistantOpen, currentUser, openAuthModal, logout } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/', icon: BookOpen },
    { label: 'My Library', path: '/my-library', icon: Bookmark },
    { label: 'Vedic Library', path: '/library/vedas', icon: Layers },
    { label: 'Acharyas & Parampara', path: '/acharyas', icon: Landmark },
    { label: 'Sacred Geography & Maps', path: '/geography', icon: MapPin },
    { label: 'Philosophies', path: '/philosophy', icon: Compass },
    { label: 'Festivals & Panchang', path: '/festivals', icon: Calendar },
    { label: 'Timelines', path: '/timelines', icon: History },
    { label: 'Genealogy', path: '/genealogy', icon: GitBranch }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-stone-950/90 border-b border-amber-500/20 transition-colors">
      {/* Top Utility Bar */}
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-1.5 sm:gap-4">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
          <div className="relative flex items-center justify-center shrink-0">
            {/* Luminous Pulsing Saffron/Amber Divine Aura Halo */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/40 via-yellow-400/40 to-orange-500/40 blur-md opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 animate-pulse" />
            <img
              src="/favicon.svg"
              alt="Sanatana Kosha Glowing Sacred AUM Emblem"
              className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-xl shadow-[0_0_15px_rgba(245,158,11,0.55)] border border-amber-400/50 group-hover:border-amber-300 transition-all duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-amber-100 group-hover:text-amber-400 transition-colors sanskrit-font truncate">
                सनातन कोष
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-semibold tracking-widest px-2 py-0.5 rounded border border-amber-700/30 text-amber-300 bg-amber-500/10 shrink-0">
                Treasury
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] text-amber-300/80 font-medium tracking-wide truncate">
              SANATANA KOSHA
            </span>
          </div>
        </Link>

        {/* Search Bar Trigger */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="hidden md:flex items-center gap-3 px-4 py-1.5 rounded-full border border-amber-500/30 bg-stone-900/80 text-stone-300 hover:border-amber-600 transition-all text-xs w-60 lg:w-80 shadow-inner"
        >
          <Search className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="flex-1 text-left font-serif truncate">Search verses, acharyas, temples...</span>
          <kbd className="hidden lg:inline-block text-[10px] px-1.5 py-0.5 rounded bg-stone-800 text-stone-400 border border-stone-700 font-mono">
            ⌘K
          </kbd>
        </button>

        {/* Utility Controls */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* AI Universal Knowledge Assistant Trigger */}
          <button
            onClick={() => setIsAiAssistantOpen(true)}
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-amber-700 to-amber-900 text-amber-100 hover:from-amber-600 hover:to-amber-800 text-xs font-medium shadow-md transition-all border border-amber-400/30 active:scale-95 min-h-[44px] min-w-[44px] justify-center"
            title="Ask AI Assistant (Spirituality, Philosophy, Sciences & Beyond)"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="hidden sm:inline">Ask AI</span>
          </button>

          {/* User Account / Sign In Control */}
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full bg-amber-950/80 hover:bg-amber-900/80 border border-amber-500/40 text-amber-200 text-xs font-serif font-medium transition-all min-h-[44px] min-w-[44px] justify-center"
                title={`Signed in as ${currentUser.name}`}
              >
                <div className="w-6 h-6 rounded-full bg-amber-700/60 text-amber-200 flex items-center justify-center text-[11px] font-bold">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <span className="hidden sm:inline max-w-[90px] truncate">{currentUser.name.split(' ')[0]}</span>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-stone-900/95 border border-amber-800/40 rounded-2xl p-3 shadow-2xl backdrop-blur-md z-50 text-xs space-y-2 animate-fade-in">
                  <div className="border-b border-amber-900/30 pb-2">
                    <p className="font-serif font-bold text-amber-200 truncate">{currentUser.name}</p>
                    <p className="text-[10px] text-stone-400 truncate">{currentUser.email}</p>
                    <div className="mt-1 flex items-center gap-1 text-[9px] text-emerald-400 font-mono">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Encrypted Session Active</span>
                    </div>
                  </div>
                  <Link
                    to="/my-library"
                    onClick={() => setUserMenuOpen(false)}
                    className="flex items-center gap-2 p-2.5 rounded-xl text-stone-300 hover:bg-amber-900/30 hover:text-amber-200 transition-colors min-h-[44px]"
                  >
                    <Bookmark className="w-4 h-4 text-amber-400" />
                    <span>My Library & Notes</span>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setUserMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2 p-2.5 rounded-xl text-red-300 hover:bg-red-950/40 transition-colors text-left font-serif min-h-[44px]"
                  >
                    <LogOut className="w-4 h-4 text-red-400" />
                    <span>Sign Out (निर्गमनम्)</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={openAuthModal}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-full bg-stone-900 hover:bg-stone-800 border border-amber-600/40 text-amber-300 text-xs font-serif font-semibold transition-all min-h-[44px] min-w-[44px] justify-center active:scale-95 shadow-sm"
              title="Sign in or create account"
            >
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Sign In</span>
            </button>
          )}

          {/* Mobile Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
            className="md:hidden p-2 rounded-full text-amber-300 hover:bg-amber-500/10 active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-full text-amber-300 hover:bg-amber-500/10 active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Primary Navigation Desktop Bar */}
      <nav className="hidden lg:block border-t border-amber-500/10 bg-stone-900/40">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-medium transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-600/20 text-amber-200 border border-amber-600/30'
                      : 'text-stone-300 hover:text-amber-300 hover:bg-amber-500/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 opacity-80" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-950/98 backdrop-blur-lg border-b border-amber-900/30 p-4 space-y-1 animate-fade-in shadow-xl max-h-[85vh] overflow-y-auto">
          {/* Mobile Drawer Brand Header */}
          <div className="flex items-center gap-3 pb-3 mb-3 border-b border-amber-500/20">
            <div className="relative flex items-center justify-center shrink-0">
              <div className="absolute -inset-1 rounded-xl bg-amber-500/40 blur-sm animate-pulse" />
              <img
                src="/favicon.svg"
                alt="Sanatana Kosha Glowing AUM"
                className="relative z-10 w-9 h-9 rounded-xl border border-amber-400/60 shadow-[0_0_12px_rgba(245,158,11,0.6)]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="font-serif text-base font-bold text-amber-100 sanskrit-font leading-tight">
                सनातन कोष
              </div>
              <div className="text-[10px] text-amber-400/80 font-medium tracking-wider">
                THE ETERNAL KNOWLEDGE TREASURY
              </div>
            </div>
          </div>

          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all min-h-[48px] ${
                  isActive
                    ? 'bg-amber-700 text-white font-semibold shadow-sm'
                    : 'text-stone-200 hover:bg-amber-500/10 active:bg-amber-500/20'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-200' : 'text-amber-400'}`} />
                <span>{link.label}</span>
              </Link>
            );
          })}

          {/* Mobile Auth Account Action */}
          <div className="pt-3 mt-3 border-t border-amber-900/30">
            {currentUser ? (
              <div className="space-y-2 p-3 rounded-xl bg-amber-950/40 border border-amber-800/30">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-serif font-bold text-amber-200">{currentUser.name}</span>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Secure JWT
                  </span>
                </div>
                <p className="text-[10px] text-stone-400 truncate">{currentUser.email}</p>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-red-950/60 border border-red-800/40 text-red-300 text-xs font-serif font-semibold flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  openAuthModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 px-4 rounded-xl bg-amber-700 text-white font-serif font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-98 min-h-[48px]"
              >
                <User className="w-4 h-4" />
                <span>Sign In / Register Account</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
