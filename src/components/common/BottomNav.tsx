import React from 'react';
import { NavLink } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  Home,
  Layers,
  BookOpen,
  MapPin,
  Sparkles,
  Search,
  Bookmark
} from 'lucide-react';

export const BottomNav: React.FC = () => {
  const { setIsSearchOpen, setIsAiAssistantOpen, bookmarks } = useApp();

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Vedas', path: '/library/vedas', icon: Layers },
    { label: 'Gita', path: '/library/gita', icon: BookOpen },
    { label: 'Pilgrimage', path: '/geography', icon: MapPin },
    { label: 'Library', path: '/my-library', icon: Bookmark, badge: bookmarks.length > 0 ? bookmarks.length : undefined },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-xl border-t border-amber-900/30 px-2 pt-1 pb-[env(safe-area-inset-bottom,8px)] shadow-2xl transition-all"
    >
      <div className="flex items-center justify-around h-14 max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center min-w-[48px] min-h-[48px] px-2 py-1 rounded-xl transition-all relative ${
                  isActive
                    ? 'text-amber-300 font-semibold scale-105'
                    : 'text-stone-400 hover:text-stone-200 active:scale-95'
                }`
              }
            >
              <div className="relative">
                <Icon className="w-5 h-5" />
                {item.badge !== undefined && (
                  <span className="absolute -top-1 -right-2 bg-amber-600 text-white text-[9px] font-bold px-1 rounded-full min-w-[14px] text-center leading-tight">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-serif tracking-tight mt-0.5 whitespace-nowrap">
                {item.label}
              </span>
            </NavLink>
          );
        })}

        {/* Quick Search Tap Target */}
        <button
          onClick={() => setIsSearchOpen(true)}
          aria-label="Quick Search"
          className="flex flex-col items-center justify-center min-w-[48px] min-h-[48px] px-2 py-1 rounded-xl text-stone-400 hover:text-amber-300 active:scale-95 transition-all"
        >
          <Search className="w-5 h-5" />
          <span className="text-[10px] font-serif tracking-tight mt-0.5">Search</span>
        </button>

        {/* Quick AI Tap Target */}
        <button
          onClick={() => setIsAiAssistantOpen(true)}
          aria-label="Ask AI Assistant"
          className="flex flex-col items-center justify-center min-w-[48px] min-h-[48px] px-2 py-1 rounded-xl text-amber-400 hover:text-amber-300 active:scale-95 transition-all"
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="text-[10px] font-serif tracking-tight mt-0.5 font-bold">Ask AI</span>
        </button>
      </div>
    </nav>
  );
};
