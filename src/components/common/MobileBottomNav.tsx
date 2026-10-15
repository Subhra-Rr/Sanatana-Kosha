import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Home, BookOpen, Search, Sparkles, Bookmark } from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const { setIsSearchOpen, setIsAiAssistantOpen } = useApp();

  const isHome = location.pathname === '/';
  const isGita = location.pathname.startsWith('/library');
  const isLibrary = location.pathname === '/my-library';

  return (
    <nav
      aria-label="Mobile Navigation Dock"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-stone-950/95 backdrop-blur-lg border-t border-amber-900/40 shadow-[0_-8px_25px_rgba(0,0,0,0.6)]"
      style={{
        paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 6px)',
        paddingLeft: 'env(safe-area-inset-left, 0px)',
        paddingRight: 'env(safe-area-inset-right, 0px)'
      }}
    >
      <div className="w-full max-w-md mx-auto px-2 py-1 flex items-center justify-around">
        {/* Home */}
        <Link
          to="/"
          className={`flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl transition-all min-h-[48px] active:scale-95 ${
            isHome
              ? 'text-amber-400 font-bold'
              : 'text-stone-400 hover:text-amber-300'
          }`}
          title="Sanatana Kosha Home"
        >
          <Home className={`w-5 h-5 ${isHome ? 'text-amber-400' : 'text-stone-400'}`} />
          <span className="text-[10px] font-serif tracking-tight mt-0.5">Home</span>
        </Link>

        {/* Scriptures / Gita */}
        <Link
          to="/library/gita"
          className={`flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl transition-all min-h-[48px] active:scale-95 ${
            isGita
              ? 'text-amber-400 font-bold'
              : 'text-stone-400 hover:text-amber-300'
          }`}
          title="Sacred Scriptures & Gita"
        >
          <BookOpen className={`w-5 h-5 ${isGita ? 'text-amber-400' : 'text-stone-400'}`} />
          <span className="text-[10px] font-serif tracking-tight mt-0.5">Scriptures</span>
        </Link>

        {/* Global Search */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl text-stone-400 hover:text-amber-300 transition-all min-h-[48px] active:scale-95"
          title="Instant Search"
        >
          <div className="p-1.5 rounded-full bg-amber-500/10 border border-amber-600/30">
            <Search className="w-4 h-4 text-amber-400" />
          </div>
          <span className="text-[10px] font-serif tracking-tight mt-0.5">Search</span>
        </button>

        {/* AI Assistant */}
        <button
          onClick={() => setIsAiAssistantOpen(true)}
          className="flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl text-stone-400 hover:text-amber-300 transition-all min-h-[48px] active:scale-95"
          title="AI Spiritual Assistant"
        >
          <div className="p-1.5 rounded-full bg-gradient-to-r from-amber-700/80 to-amber-900/80 border border-amber-400/30 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-200 animate-spin" style={{ animationDuration: '8s' }} />
          </div>
          <span className="text-[10px] font-serif tracking-tight mt-0.5">Ask AI</span>
        </button>

        {/* My Library */}
        <Link
          to="/my-library"
          className={`flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-xl transition-all min-h-[48px] active:scale-95 ${
            isLibrary
              ? 'text-amber-400 font-bold'
              : 'text-stone-400 hover:text-amber-300'
          }`}
          title="My Library & Bookmarks"
        >
          <Bookmark className={`w-5 h-5 ${isLibrary ? 'text-amber-400 fill-current' : 'text-stone-400'}`} />
          <span className="text-[10px] font-serif tracking-tight mt-0.5">My Library</span>
        </Link>
      </div>
    </nav>
  );
};
