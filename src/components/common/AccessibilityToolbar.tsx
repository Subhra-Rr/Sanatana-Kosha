import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Eye,
  Type,
  Sun,
  Moon,
  Volume2,
  Keyboard,
  X,
  Sparkles,
  Sliders
} from 'lucide-react';

export const AccessibilityToolbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('normal');
  const [isDyslexicFont, setIsDyslexicFont] = useState(false);

  useEffect(() => {
    // Apply font sizing class to body
    const body = document.body;
    body.classList.remove('text-size-normal', 'text-size-large', 'text-size-xl', 'font-dyslexic-active');
    
    if (fontSize === 'large') body.classList.add('text-size-large');
    if (fontSize === 'xl') body.classList.add('text-size-xl');
    if (isDyslexicFont) body.classList.add('font-dyslexic-active');
  }, [fontSize, isDyslexicFont]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility & Usability Options"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-stone-800 text-amber-300 hover:bg-stone-700 shadow-xl border border-amber-600/30 backdrop-blur-md transition-all active:scale-95 text-xs font-semibold"
      >
        <Sliders className="w-4 h-4 text-amber-400 animate-pulse" />
        <span className="hidden sm:inline">Accessibility</span>
      </button>

      {/* Floating Control Panel */}
      {isOpen && (
        <div className="w-80 sm:w-96 max-w-[calc(100vw-2.5rem)] p-4 rounded-2xl bg-stone-900/98 border border-amber-500/30 shadow-2xl backdrop-blur-xl text-amber-100 space-y-4 animate-fade-in text-xs">
          <div className="flex items-center justify-between border-b border-amber-900/30 pb-2">
            <div className="flex items-center gap-2 font-serif font-bold text-amber-200">
              <Eye className="w-4 h-4 text-amber-400" />
              <span>Accessibility & Viewing Options</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-amber-500/20 text-stone-400 hover:text-amber-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Font Size Scaling */}
          <div className="space-y-1.5">
            <label className="font-semibold text-stone-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5"><Type className="w-3.5 h-3.5 text-amber-400" /> Text Scale</span>
              <span className="text-[10px] uppercase text-amber-400 font-bold">{fontSize}</span>
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                onClick={() => setFontSize('normal')}
                className={`py-1.5 rounded-lg border text-xs font-serif ${
                  fontSize === 'normal'
                    ? 'bg-amber-700 text-white font-bold border-amber-600'
                    : 'bg-stone-800 text-stone-300 border-transparent hover:bg-stone-700'
                }`}
              >
                Normal A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`py-1.5 rounded-lg border text-sm font-serif ${
                  fontSize === 'large'
                    ? 'bg-amber-700 text-white font-bold border-amber-600'
                    : 'bg-stone-800 text-stone-300 border-transparent hover:bg-stone-700'
                }`}
              >
                Large A+
              </button>
              <button
                onClick={() => setFontSize('xl')}
                className={`py-1.5 rounded-lg border text-base font-serif ${
                  fontSize === 'xl'
                    ? 'bg-amber-700 text-white font-bold border-amber-600'
                    : 'bg-stone-800 text-stone-300 border-transparent hover:bg-stone-700'
                }`}
              >
                Huge A++
              </button>
            </div>
          </div>

          {/* Dyslexia Friendly Toggle */}
          <div className="flex items-center justify-between py-1 border-t border-amber-900/20 pt-2">
            <div>
              <p className="font-semibold text-stone-200">Dyslexia-Friendly Font</p>
              <p className="text-[10px] text-stone-400">High-legibility sans typeface</p>
            </div>
            <button
              onClick={() => setIsDyslexicFont(!isDyslexicFont)}
              className={`w-11 h-6 rounded-full transition-colors relative ${
                isDyslexicFont ? 'bg-amber-600' : 'bg-stone-700'
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                  isDyslexicFont ? 'transform translate-x-5' : ''
                }`}
              />
            </button>
          </div>

          {/* Keyboard Shortcuts Info */}
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-600/20 text-[11px] space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-amber-300">
              <Keyboard className="w-3.5 h-3.5" /> Quick Keyboard Navigation
            </div>
            <p className="text-stone-400">
              Press <kbd className="px-1 py-0.5 rounded bg-stone-800 font-mono text-[10px] text-amber-300">⌘K</kbd> or <kbd className="px-1 py-0.5 rounded bg-stone-800 font-mono text-[10px] text-amber-300">Ctrl+K</kbd> anywhere for Smart Semantic Search.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
