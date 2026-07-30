import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { Diya } from './Diya';
import {
  Search,
  BookOpen,
  Volume2,
  Bell,
  Sparkles,
  Menu,
  X,
  Compass,
  Landmark,
  Calendar,
  Layers,
  GraduationCap,
  History,
  Bookmark,
  Moon,
  Sun,
  Palette
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    theme,
    setTheme,
    setIsSearchOpen,
    setIsAiAssistantOpen,
    isDroneActive,
    toggleDrone,
    playBell,
    playConch,
    bookmarks
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/', icon: BookOpen },
    { label: 'Library', path: '/library/vedas', icon: Layers },
    { label: 'Philosophies', path: '/philosophy', icon: Compass },
    { label: 'Acharyas', path: '/acharyas', icon: Landmark },
    { label: 'Temples & Maps', path: '/geography', icon: Landmark },
    { label: 'Festivals', path: '/festivals', icon: Calendar },
    { label: 'Sanskrit Hub', path: '/sanskrit', icon: GraduationCap },
    { label: 'Timelines', path: '/timelines', icon: History },
    { label: 'Genealogy', path: '/genealogy', icon: History }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-amber-50/90 dark:bg-stone-950/90 border-b border-amber-900/15 dark:border-amber-500/20 transition-colors">
      {/* Top Utility Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3 group">
          <Diya size="sm" />
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-amber-900 dark:text-amber-100 group-hover:text-amber-600 transition-colors sanskrit-font">
                सनातन कोष
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-semibold tracking-widest px-2 py-0.5 rounded border border-amber-700/30 text-amber-800 dark:text-amber-300 bg-amber-500/10">
                Treasury
              </span>
            </div>
            <span className="text-[10px] text-amber-800/80 dark:text-amber-300/80 font-medium tracking-wide">
              SANATANA KOSHA
            </span>
          </div>
        </Link>

        {/* Search Bar Trigger */}
        <button
          onClick={() => setIsSearchOpen(true)}
          className="hidden md:flex items-center gap-3 px-4 py-1.5 rounded-full border border-amber-800/20 dark:border-amber-500/30 bg-stone-100/80 dark:bg-stone-900/80 text-stone-600 dark:text-stone-300 hover:border-amber-600 transition-all text-xs w-64 lg:w-80 shadow-inner"
        >
          <Search className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
          <span className="flex-1 text-left font-serif">Search verses, acharyas, temples...</span>
          <kbd className="hidden lg:inline-block text-[10px] px-1.5 py-0.5 rounded bg-stone-200 dark:bg-stone-800 text-stone-500 border border-stone-300 dark:border-stone-700 font-mono">
            ⌘K
          </kbd>
        </button>

        {/* Audio & Theme Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Temple Bell */}
          <button
            onClick={playBell}
            title="Ring Temple Bell"
            className="p-2 rounded-full hover:bg-amber-500/10 text-amber-800 dark:text-amber-300 transition-colors"
          >
            <Bell className="w-4 h-4" />
          </button>

          {/* Tanpura Drone Toggle */}
          <button
            onClick={toggleDrone}
            title={isDroneActive ? 'Stop Tanpura Drone' : 'Start Tanpura Drone Hum'}
            className={`p-2 rounded-full transition-colors ${
              isDroneActive
                ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30 animate-pulse'
                : 'hover:bg-amber-500/10 text-amber-800 dark:text-amber-300'
            }`}
          >
            <Volume2 className="w-4 h-4" />
          </button>

          {/* Theme Selector */}
          <div className="relative group">
            <button
              title="Change Theme Mode"
              className="p-2 rounded-full hover:bg-amber-500/10 text-amber-800 dark:text-amber-300 transition-colors"
            >
              <Palette className="w-4 h-4" />
            </button>
            <div className="absolute right-0 mt-1 w-44 hidden group-hover:block bg-stone-100 dark:bg-stone-900 border border-amber-800/20 rounded-xl shadow-xl p-1.5 text-xs z-50">
              <button
                onClick={() => setTheme('sandstone')}
                className={`w-full text-left px-3 py-1.5 rounded flex items-center justify-between ${theme === 'sandstone' ? 'bg-amber-500/20 font-bold' : 'hover:bg-stone-200 dark:hover:bg-stone-800'}`}
              >
                <span>Sandstone Temple</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E8D7C0] border border-stone-400" />
              </button>
              <button
                onClick={() => setTheme('lamp-night')}
                className={`w-full text-left px-3 py-1.5 rounded flex items-center justify-between ${theme === 'lamp-night' ? 'bg-amber-500/20 font-bold' : 'hover:bg-stone-200 dark:hover:bg-stone-800'}`}
              >
                <span>Oil Lamp Night</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#120D0A] border border-amber-500" />
              </button>
              <button
                onClick={() => setTheme('copper-gold')}
                className={`w-full text-left px-3 py-1.5 rounded flex items-center justify-between ${theme === 'copper-gold' ? 'bg-amber-500/20 font-bold' : 'hover:bg-stone-200 dark:hover:bg-stone-800'}`}
              >
                <span>Copper Gold</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#B87333]" />
              </button>
              <button
                onClick={() => setTheme('morning')}
                className={`w-full text-left px-3 py-1.5 rounded flex items-center justify-between ${theme === 'morning' ? 'bg-amber-500/20 font-bold' : 'hover:bg-stone-200 dark:hover:bg-stone-800'}`}
              >
                <span>Temple Morning</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFFDF9] border border-amber-400" />
              </button>
            </div>
          </div>

          {/* Personal Library / Bookmarks */}
          <Link
            to="/my-library"
            title="My Personal Library"
            className="p-2 rounded-full hover:bg-amber-500/10 text-amber-800 dark:text-amber-300 relative transition-colors"
          >
            <Bookmark className="w-4 h-4" />
            {bookmarks.length > 0 && (
              <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-amber-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                {bookmarks.length}
              </span>
            )}
          </Link>

          {/* AI Spiritual Assistant Trigger */}
          <button
            onClick={() => setIsAiAssistantOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-700 to-amber-900 text-amber-100 hover:from-amber-600 hover:to-amber-800 text-xs font-medium shadow-md transition-all border border-amber-400/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="hidden sm:inline">Ask Knowledge AI</span>
          </button>

          {/* Mobile Search Button */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="md:hidden p-2 rounded-full text-amber-800 dark:text-amber-300 hover:bg-amber-500/10"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-amber-800 dark:text-amber-300 hover:bg-amber-500/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Primary Navigation Desktop Bar */}
      <nav className="hidden lg:block border-t border-amber-900/10 dark:border-amber-500/10 bg-amber-100/40 dark:bg-stone-900/40">
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
                      ? 'bg-amber-600/20 text-amber-900 dark:text-amber-200 border border-amber-600/30'
                      : 'text-stone-700 dark:text-stone-300 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-500/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 opacity-80" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <button
            onClick={playConch}
            className="text-[11px] font-serif text-amber-800 dark:text-amber-300 hover:underline flex items-center gap-1"
          >
            <span>🪔 Sound Conch</span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-amber-50 dark:bg-stone-950 border-b border-amber-900/20 p-4 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-stone-800 dark:text-stone-200 hover:bg-amber-500/10"
              >
                <Icon className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
