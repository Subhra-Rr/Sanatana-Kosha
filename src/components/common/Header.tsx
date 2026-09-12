import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Diya } from './Diya';
import { ResearchCitationModal } from './ResearchCitationModal';
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
  const [isCitationModalOpen, setIsCitationModalOpen] = useState(false);
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <Diya size="sm" />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-amber-100 group-hover:text-amber-400 transition-colors sanskrit-font">
                सनातन कोष
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-semibold tracking-widest px-2 py-0.5 rounded border border-amber-700/30 text-amber-300 bg-amber-500/10">
                Treasury
              </span>
            </div>
            <span className="text-[10px] text-amber-300/80 font-medium tracking-wide">
              SANATANA KOSHA
            </span>
          </div>
        </Link>

        {/* Search Bar Trigger */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="hidden md:flex items-center gap-3 px-4 py-1.5 rounded-full border border-amber-500/30 bg-stone-900/80 text-stone-300 hover:border-amber-600 transition-all text-xs w-64 lg:w-80 shadow-inner"
        >
          <Search className="w-3.5 h-3.5 text-amber-400" />
          <span className="flex-1 text-left font-serif">Search verses, acharyas, temples...</span>
          <kbd className="hidden lg:inline-block text-[10px] px-1.5 py-0.5 rounded bg-stone-800 text-stone-400 border border-stone-700 font-mono">
            ⌘K
          </kbd>
        </button>

        {/* Utility Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Research & Citation Trigger */}
          <button
            onClick={() => setIsCitationModalOpen(true)}
            className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-800 text-amber-200 border border-amber-700/30 text-xs font-serif font-semibold hover:bg-stone-700 transition-all"
            title="Academic Research & Citation Exporter"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Research Mode</span>
          </button>

          {/* AI Spiritual Assistant Trigger */}
          <button
            onClick={() => setIsAiAssistantOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-gradient-to-r from-amber-700 to-amber-900 text-amber-100 hover:from-amber-600 hover:to-amber-800 text-xs font-medium shadow-md transition-all border border-amber-400/30 active:scale-95 min-h-[44px]"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="inline">Ask AI</span>
          </button>

          {/* User Account / Sign In Control */}
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-amber-950/80 hover:bg-amber-900/80 border border-amber-500/40 text-amber-200 text-xs font-serif font-medium transition-all min-h-[40px]"
                title={`Signed in as ${currentUser.name}`}
              >
                <div className="w-5 h-5 rounded-full bg-amber-700/60 text-amber-200 flex items-center justify-center text-[10px] font-bold">
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
                    className="flex items-center gap-2 p-2 rounded-xl text-stone-300 hover:bg-amber-900/30 hover:text-amber-200 transition-colors"
                  >
                    <Bookmark className="w-3.5 h-3.5 text-amber-400" />
                    <span>My Library & Notes</span>
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setUserMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2 p-2 rounded-xl text-red-300 hover:bg-red-950/40 transition-colors text-left font-serif"
                  >
                    <LogOut className="w-3.5 h-3.5 text-red-400" />
                    <span>Sign Out (निर्गमनम्)</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={openAuthModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 border border-amber-600/40 text-amber-300 text-xs font-serif font-semibold transition-all min-h-[40px] active:scale-95 shadow-sm"
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
            <Search className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-full text-amber-300 hover:bg-amber-500/10 active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Primary Navigation Desktop Bar */}
      <nav className="hidden lg:block border-t border-amber-500/10 bg-stone-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
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
        <div className="lg:hidden bg-stone-950/98 backdrop-blur-lg border-b border-amber-900/30 p-4 space-y-1 animate-fade-in shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-amber-500/10">
            <span className="text-xs font-serif font-bold text-amber-300 uppercase tracking-widest">
              Navigation Treasury
            </span>
            <button
              onClick={() => {
                setIsCitationModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="text-xs font-serif text-amber-300 font-bold flex items-center gap-1"
            >
              <BookOpen className="w-3 h-3" /> Research Mode
            </button>
          </div>

          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
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
              <div className="space-y-2 p-2 rounded-xl bg-amber-950/40 border border-amber-800/30">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-serif font-bold text-amber-200">{currentUser.name}</span>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> Secure JWT
                  </span>
                </div>
                <p className="text-[10px] text-stone-400 truncate">{currentUser.email}</p>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2 px-3 rounded-lg bg-red-950/60 border border-red-800/40 text-red-300 text-xs font-serif font-semibold flex items-center justify-center gap-2"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  openAuthModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 px-4 rounded-xl bg-amber-700 text-white font-serif font-bold text-xs flex items-center justify-center gap-2 shadow-md active:scale-98 min-h-[44px]"
              >
                <User className="w-4 h-4" />
                <span>Sign In / Register Account</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* Research Citation Exporter Modal */}
      <ResearchCitationModal
        isOpen={isCitationModalOpen}
        onClose={() => setIsCitationModalOpen(false)}
      />
    </header>
  );
};
