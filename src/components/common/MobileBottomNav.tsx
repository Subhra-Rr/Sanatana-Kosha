import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import {
  BookOpen,
  Layers,
  Landmark,
  MapPin,
  Sparkles,
  Search
} from 'lucide-react';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const { setIsAiAssistantOpen, setIsSearchOpen } = useApp();

  const navItems = [
    { label: 'Home', path: '/', icon: BookOpen },
    { label: 'Library', path: '/library/vedas', icon: Layers },
    { label: 'Map', path: '/geography', icon: MapPin },
    { label: 'Acharyas', path: '/acharyas', icon: Landmark },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-lg border-t border-amber-900/30 px-2 py-1.5 pb-safe shadow-2xl">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-1 px-3 min-w-[56px] min-h-[48px] rounded-xl transition-all active:scale-95 ${
                isActive
                  ? 'text-amber-400 font-bold bg-amber-500/10'
                  : 'text-stone-400 hover:text-amber-200'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
              <span className="text-[10px] mt-0.5 tracking-tight font-serif">{item.label}</span>
            </Link>
          );
        })}

        {/* Quick Search Trigger */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="flex flex-col items-center justify-center py-1 px-3 min-w-[56px] min-h-[48px] rounded-xl text-stone-400 hover:text-amber-200 active:scale-95 transition-all"
        >
          <Search className="w-5 h-5 text-amber-500" />
          <span className="text-[10px] mt-0.5 tracking-tight font-serif">Search</span>
        </button>

        {/* Ask AI Trigger */}
        <button
          onClick={() => setIsAiAssistantOpen(true)}
          className="flex flex-col items-center justify-center py-1 px-3 min-w-[56px] min-h-[48px] rounded-xl text-amber-300 font-medium active:scale-95 transition-all bg-gradient-to-r from-amber-700/40 to-amber-900/40 border border-amber-500/30"
        >
          <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
          <span className="text-[10px] mt-0.5 tracking-tight font-serif font-bold text-amber-200">Ask AI</span>
        </button>
      </div>
    </nav>
  );
};
