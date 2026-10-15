import React, { useState } from 'react';
import { Volume2, Bookmark, ChevronLeft, ChevronRight, BookOpen, Sparkles, Copy, Check } from 'lucide-react';
import { audioService } from '../../services/audioService';
import { useReducedMotion } from '../../utils/spiritualMotion';

export interface StotraStanza {
  stanzaNumber: number;
  sanskrit: string;
  transliteration?: string;
  translation: string;
  meter?: string;
}

export interface StotraData {
  id: string;
  title: string;
  sanskritTitle: string;
  authorOrAttribution?: string;
  tradition?: string;
  compositionType?: 'Stotra' | 'Ashtaka' | 'Stuti' | 'Kavacha' | 'Namavali' | 'Sahasranama';
  overview: string;
  stanzas: StotraStanza[];
}

interface StotraViewerProps {
  stotra: StotraData;
  onBookmark?: (id: string, title: string) => void;
  isBookmarked?: boolean;
  className?: string;
}

export const StotraViewer: React.FC<StotraViewerProps> = ({
  stotra,
  onBookmark,
  isBookmarked = false,
  className = ''
}) => {
  const isReduced = useReducedMotion();
  const [currentStanzaIdx, setCurrentStanzaIdx] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'stanza' | 'full'>('stanza');

  const currentStanza = stotra.stanzas[currentStanzaIdx] || stotra.stanzas[0];

  const handleSpeak = (text: string) => {
    audioService.speakSanskrit(text);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`bg-stone-900/90 border border-amber-800/25 rounded-3xl p-5 sm:p-7 shadow-xl space-y-6 ${className}`}>
      {/* Stotra Title & Attribution Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-900/15 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 font-serif">
              {stotra.compositionType || 'Stotra'} • {stotra.tradition || 'Classical Devotional Sanskrit'}
            </span>
            {stotra.authorOrAttribution && (
              <span className="text-[10px] text-stone-400 font-serif">
                • Attribution: {stotra.authorOrAttribution}
              </span>
            )}
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-100 sanskrit-font mt-0.5">
            {stotra.title} ({stotra.sanskritTitle})
          </h3>
        </div>

        {/* View Mode Toggle & Actions */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-stone-950/70 p-1 rounded-xl border border-amber-900/20 text-xs font-serif">
            <button
              onClick={() => setViewMode('stanza')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                viewMode === 'stanza' ? 'bg-amber-700 text-white font-bold' : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Stanza by Stanza
            </button>
            <button
              onClick={() => setViewMode('full')}
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                viewMode === 'full' ? 'bg-amber-700 text-white font-bold' : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Continuous Text
            </button>
          </div>

          {onBookmark && (
            <button
              onClick={() => onBookmark(stotra.id, stotra.title)}
              className="p-2 rounded-xl bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-amber-200 transition-colors"
              title="Bookmark Stotra"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current text-amber-400' : ''}`} />
            </button>
          )}
        </div>
      </div>

      <p className="text-xs sm:text-sm text-stone-300 font-serif leading-relaxed">
        {stotra.overview}
      </p>

      {/* Mode 1: Stanza by Stanza View */}
      {viewMode === 'stanza' && currentStanza && (
        <div className="space-y-4">
          {/* Stanza Card */}
          <div className="p-6 sm:p-8 bg-gradient-to-b from-stone-950/70 to-stone-900 rounded-2xl border border-amber-800/25 space-y-4 text-center shadow-inner relative">
            <div className="flex items-center justify-between text-xs font-serif text-amber-400/90 border-b border-amber-900/15 pb-2">
              <span className="font-bold">Stanza {currentStanza.stanzaNumber} of {stotra.stanzas.length}</span>
              {currentStanza.meter && (
                <span className="text-[11px] text-stone-400 font-mono">Meter: {currentStanza.meter}</span>
              )}
            </div>

            {/* Sanskrit Text */}
            <p className={`font-serif text-xl sm:text-2xl font-bold text-amber-100 sanskrit-font leading-relaxed whitespace-pre-line ${
              !isReduced ? 'animate-sacred-reveal' : ''
            }`}>
              {currentStanza.sanskrit}
            </p>

            {currentStanza.transliteration && (
              <p className="text-xs sm:text-sm text-amber-300/80 italic font-serif">
                {currentStanza.transliteration}
              </p>
            )}

            {/* Stanza English Translation */}
            <div className="pt-3 border-t border-amber-900/15 text-left text-xs sm:text-sm font-serif text-stone-200 italic leading-relaxed">
              "{currentStanza.translation}"
            </div>

            {/* Quick Stanza Actions */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => handleSpeak(currentStanza.sanskrit)}
                className="px-3 py-1.5 rounded-xl bg-amber-500/15 text-amber-200 hover:bg-amber-500/25 text-xs font-serif flex items-center gap-1.5 transition-colors border border-amber-500/20"
              >
                <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Recite Stanza</span>
              </button>

              <button
                onClick={() => handleCopy(`${currentStanza.sanskrit}\n\n${currentStanza.translation}`)}
                className="p-1.5 rounded-xl bg-stone-800 text-stone-300 hover:bg-stone-700 transition-colors"
                title="Copy Stanza"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Stepper Navigation */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setCurrentStanzaIdx(p => Math.max(0, p - 1))}
              disabled={currentStanzaIdx === 0}
              className="px-4 py-2 rounded-xl bg-stone-800 disabled:opacity-40 text-stone-200 text-xs font-serif font-medium flex items-center gap-1 hover:bg-stone-700 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Stanza</span>
            </button>

            {/* Indicator dots */}
            <div className="flex items-center gap-1 overflow-x-auto max-w-[200px] px-2">
              {stotra.stanzas.map((s, idx) => (
                <button
                  key={s.stanzaNumber}
                  onClick={() => setCurrentStanzaIdx(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentStanzaIdx === idx ? 'bg-amber-400 w-4' : 'bg-stone-700 hover:bg-stone-500'
                  }`}
                  title={`Stanza ${s.stanzaNumber}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentStanzaIdx(p => Math.min(stotra.stanzas.length - 1, p + 1))}
              disabled={currentStanzaIdx === stotra.stanzas.length - 1}
              className="px-4 py-2 rounded-xl bg-stone-800 disabled:opacity-40 text-stone-200 text-xs font-serif font-medium flex items-center gap-1 hover:bg-stone-700 transition-colors"
            >
              <span>Next Stanza</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Mode 2: Continuous Text View */}
      {viewMode === 'full' && (
        <div className="space-y-6">
          {stotra.stanzas.map((s) => (
            <div key={s.stanzaNumber} className="p-4 rounded-xl bg-stone-950/50 border border-amber-900/15 space-y-2">
              <div className="flex items-center justify-between text-xs text-amber-400/80 font-serif">
                <span>Stanza {s.stanzaNumber}</span>
                {s.meter && <span className="text-[10px] text-stone-400 font-mono">Meter: {s.meter}</span>}
              </div>
              <p className="font-serif text-lg font-bold text-amber-100 sanskrit-font whitespace-pre-line leading-relaxed">
                {s.sanskrit}
              </p>
              <p className="text-xs text-stone-300 font-serif italic">
                "{s.translation}"
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
