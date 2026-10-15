import React, { useState } from 'react';
import { Volume2, Bookmark, Copy, Check, Eye, EyeOff, Sparkles, ChevronRight, RotateCcw } from 'lucide-react';
import { Diya } from '../common/Diya';
import { useReducedMotion } from '../../utils/spiritualMotion';

export interface WordAnalysis {
  sanskrit: string;
  iast?: string;
  meaning: string;
  grammar?: string;
}

export interface SacredVerseProps {
  title?: string;
  subtitle?: string;
  sanskrit: string;
  transliteration?: string;
  translation: string;
  significance?: string;
  sourceScripture?: string;
  wordByWord?: WordAnalysis[];
  rishi?: string;
  devata?: string;
  chandas?: string;
  veda?: string;
  shakha?: string;
  onSpeak?: (text: string) => void;
  onBookmark?: () => void;
  isBookmarked?: boolean;
  className?: string;
}

export const SacredVerseExperience: React.FC<SacredVerseProps> = ({
  title,
  subtitle,
  sanskrit,
  transliteration,
  translation,
  significance,
  sourceScripture,
  wordByWord = [],
  rishi,
  devata,
  chandas,
  veda,
  shakha,
  onSpeak,
  onBookmark,
  isBookmarked = false,
  className = ''
}) => {
  const isReduced = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [activeWordIdx, setActiveWordIdx] = useState<number | null>(null);
  const [isContemplationMode, setIsContemplationMode] = useState(false);
  
  // Line-by-line reveal state
  const lines = sanskrit.split('\n').filter(l => l.trim().length > 0);
  const [revealedLineCount, setRevealedLineCount] = useState<number>(lines.length);
  const isProgressive = revealedLineCount < lines.length;

  const handleCopy = () => {
    const text = `${title ? `${title}\n` : ''}${sanskrit}\n\n${transliteration || ''}\n\n"${translation}"${sourceScripture ? `\n— ${sourceScripture}` : ''}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNextLine = () => {
    setRevealedLineCount(prev => Math.min(lines.length, prev + 1));
  };

  const handleResetReveal = () => {
    setRevealedLineCount(1);
  };

  const handleShowAll = () => {
    setRevealedLineCount(lines.length);
  };

  return (
    <div
      className={`relative transition-all duration-300 rounded-3xl border ${
        isContemplationMode
          ? 'bg-stone-950 border-amber-500/40 p-6 sm:p-10 shadow-[0_0_50px_rgba(245,158,11,0.08)]'
          : 'bg-stone-900/95 border-amber-800/25 p-5 sm:p-7 shadow-xl'
      } ${className}`}
    >
      {/* Top Bar: Title & Contemplation Mode Toggles */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-900/15 pb-4 mb-5">
        <div className="space-y-0.5 min-w-0">
          {subtitle && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/90 font-serif block">
              {subtitle}
            </span>
          )}
          {title && (
            <h3 className="font-serif text-lg sm:text-xl font-bold text-amber-100 flex items-center gap-2">
              <span>{title}</span>
            </h3>
          )}
        </div>

        {/* Action Toolbar */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap shrink-0">
          {/* Contemplation Mode Toggle */}
          <button
            onClick={() => setIsContemplationMode(!isContemplationMode)}
            title={isContemplationMode ? 'Exit Contemplation Mode' : 'Enter Quiet Contemplation Mode (ध्यान)'}
            className={`px-3 py-1.5 rounded-xl text-xs font-serif font-medium flex items-center gap-1.5 transition-colors ${
              isContemplationMode
                ? 'bg-amber-600 text-white font-bold'
                : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-amber-200'
            }`}
          >
            {isContemplationMode ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isContemplationMode ? 'Exit Quiet Mode' : 'Contemplation Mode'}</span>
          </button>

          {/* Line Reveal Progression Controls (Only when multiple lines) */}
          {lines.length > 1 && !isContemplationMode && (
            <button
              onClick={isProgressive ? handleShowAll : handleResetReveal}
              title={isProgressive ? 'Reveal All Verses' : 'Step-by-Step Pada Reveal'}
              className="px-2.5 py-1.5 rounded-xl bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-amber-200 text-xs font-serif transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden md:inline">{isProgressive ? 'Show All' : 'Step Reveal'}</span>
            </button>
          )}

          {/* Audio Recitation */}
          {onSpeak && (
            <button
              onClick={() => onSpeak(sanskrit)}
              title="Recite in sacred Sanskrit cadence"
              className="px-3 py-1.5 rounded-xl bg-amber-500/15 text-amber-200 hover:bg-amber-500/25 text-xs font-serif font-semibold flex items-center gap-1.5 transition-colors border border-amber-500/20"
            >
              <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Recite</span>
            </button>
          )}

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            title="Copy Sanskrit and Translation"
            className="p-1.5 rounded-xl bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-amber-200 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          {/* Bookmark Button */}
          {onBookmark && (
            <button
              onClick={onBookmark}
              title={isBookmarked ? 'Bookmarked' : 'Add to Sacred Bookmarks'}
              className="p-1.5 rounded-xl bg-stone-800/80 text-stone-300 hover:bg-stone-700 hover:text-amber-200 transition-colors"
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current text-amber-400' : ''}`} />
            </button>
          )}
        </div>
      </div>

      {/* Vedic Attributes (Rishi, Devata, Chandas, Veda) if available */}
      {!isContemplationMode && (rishi || devata || chandas || veda) && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-2xl bg-stone-950/50 border border-amber-900/20 text-xs font-serif mb-5">
          {rishi && (
            <div>
              <span className="text-[10px] text-amber-400 uppercase tracking-wider block font-semibold">Rishi (Seer)</span>
              <span className="text-stone-200 font-medium">{rishi}</span>
            </div>
          )}
          {devata && (
            <div>
              <span className="text-[10px] text-amber-400 uppercase tracking-wider block font-semibold">Devata (Deity)</span>
              <span className="text-stone-200 font-medium">{devata}</span>
            </div>
          )}
          {chandas && (
            <div>
              <span className="text-[10px] text-amber-400 uppercase tracking-wider block font-semibold">Chandas (Meter)</span>
              <span className="text-stone-200 font-medium">{chandas}</span>
            </div>
          )}
          {veda && (
            <div>
              <span className="text-[10px] text-amber-400 uppercase tracking-wider block font-semibold">Veda & Shakha</span>
              <span className="text-stone-200 font-medium">{veda} {shakha ? `(${shakha})` : ''}</span>
            </div>
          )}
        </div>
      )}

      {/* Main Sacred Devanagari Sanskrit Chamber */}
      <div className={`relative overflow-hidden rounded-2xl border transition-all duration-500 text-center ${
        isContemplationMode
          ? 'p-8 sm:p-12 bg-gradient-to-b from-stone-900/70 to-stone-950 border-amber-500/30 shadow-[0_0_30px_rgba(245,158,11,0.06)]'
          : 'p-6 sm:p-8 bg-gradient-to-b from-stone-850 to-stone-900 border-amber-800/25 shadow-inner'
      }`}>
        {/* Ambient Lamp Accent in Contemplation Mode */}
        {isContemplationMode && (
          <div className="flex justify-center mb-6">
            <Diya size="md" showAura={true} />
          </div>
        )}

        {/* Sanskrit Verses (Line-by-line / Pada display) */}
        <div className="space-y-3">
          {lines.slice(0, revealedLineCount).map((line, idx) => (
            <p
              key={idx}
              className={`font-serif font-bold text-amber-100 sanskrit-font leading-relaxed tracking-wide transition-all ${
                isContemplationMode
                  ? 'text-2xl sm:text-4xl text-amber-50 drop-shadow-[0_2px_10px_rgba(245,158,11,0.2)]'
                  : 'text-xl sm:text-2xl md:text-3xl'
              } ${!isReduced ? 'animate-sacred-reveal' : ''}`}
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Step-by-Step Advance Button when lines are partially revealed */}
        {isProgressive && (
          <div className="mt-4 flex items-center justify-center gap-2">
            <button
              onClick={handleNextLine}
              className="px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-600 text-white text-xs font-serif font-semibold shadow-md flex items-center gap-1.5 transition-all active:scale-95"
            >
              <span>Next Line ({revealedLineCount}/{lines.length})</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleResetReveal}
              title="Reset to first line"
              className="p-2 rounded-xl bg-stone-800 text-stone-300 hover:bg-stone-700 text-xs transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Roman Transliteration (IAST) */}
        {transliteration && (
          <p className="mt-4 text-xs sm:text-sm text-amber-300/90 italic font-serif leading-relaxed max-w-3xl mx-auto">
            {transliteration}
          </p>
        )}
      </div>

      {/* Word-by-Word Analysis (Padachheda & Anvaya) */}
      {!isContemplationMode && wordByWord && wordByWord.length > 0 && (
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 font-serif">
              Word-by-Word Analysis (पदच्छेद व अन्वय)
            </span>
            <span className="text-[10px] text-stone-400 font-serif">
              Click word to inspect Sanskrit root & meaning
            </span>
          </div>

          <div className="grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {wordByWord.map((wbw, idx) => {
              const isSelected = activeWordIdx === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveWordIdx(isSelected ? null : idx)}
                  className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between gap-1 ${
                    isSelected
                      ? 'bg-amber-700/30 border-amber-400 shadow-sm'
                      : 'bg-stone-950/60 border-amber-900/20 hover:border-amber-700/50'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-1 w-full">
                    <span className="font-serif font-bold text-amber-200 sanskrit-font text-xs sm:text-sm">
                      {wbw.sanskrit}
                    </span>
                    {wbw.iast && (
                      <span className="text-[10px] text-amber-400/80 italic font-mono">
                        {wbw.iast}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-stone-300 font-serif line-clamp-2 leading-tight">
                    {wbw.meaning}
                  </span>
                  {wbw.grammar && isSelected && (
                    <span className="text-[9px] text-amber-400 font-mono mt-0.5">
                      Grammar: {wbw.grammar}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Translation & Spiritual Significance */}
      <div className={`grid grid-cols-1 ${significance ? 'md:grid-cols-2' : ''} gap-4 mt-6 font-serif text-xs sm:text-sm`}>
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-800/20 space-y-1.5">
          <span className="font-bold text-amber-300 block uppercase tracking-wider text-[11px]">
            English Meaning
          </span>
          <p className="text-stone-200 leading-relaxed italic">
            "{translation}"
          </p>
        </div>

        {significance && (
          <div className="p-4 rounded-2xl bg-stone-950/60 border border-amber-900/20 space-y-1.5">
            <span className="font-bold text-amber-300 block uppercase tracking-wider text-[11px]">
              Spiritual Significance & Life Lesson
            </span>
            <p className="text-stone-300 leading-relaxed">
              {significance}
            </p>
          </div>
        )}
      </div>

      {/* Source Citation Footer */}
      {sourceScripture && (
        <div className="mt-4 pt-3 border-t border-amber-900/15 flex items-center justify-between text-[11px] text-amber-400/80 font-serif">
          <span>Source Citation</span>
          <span className="font-bold text-amber-300">{sourceScripture}</span>
        </div>
      )}
    </div>
  );
};
