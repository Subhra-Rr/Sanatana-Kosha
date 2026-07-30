import React, { useState } from 'react';
import { VEDAS_DATA } from '../data/vedas';
import { useApp } from '../context/AppContext';
import { BookOpen, Bookmark, Volume2, ExternalLink } from 'lucide-react';

export const VedasPage: React.FC = () => {
  const { bookmarks, toggleBookmark, isBookmarked, playVerseAudio, openTopicModal } = useApp();
  const [selectedVedaId, setSelectedVedaId] = useState<string>(VEDAS_DATA[0].id);

  const selectedVeda = VEDAS_DATA.find(v => v.id === selectedVedaId) || VEDAS_DATA[0];

  const bmId = `veda-${selectedVeda.id}`;
  const isBm = isBookmarked(bmId);

  const handleToggleBm = () => {
    toggleBookmark({
      id: bmId,
      itemType: 'veda',
      itemId: bmId,
      title: selectedVeda.title,
      subtitle: selectedVeda.sanskritTitle
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Page Title */}
      <div className="text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
          चतुर्वेदाः • The Four Sacred Vedas
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          Apaurusheya (eternal primordial knowledge) revealed to ancient Rishis, categorized into Samhita, Brahmana, Aranyaka, and Upanishad. Click any theme or Sukta to read detailed knowledge.
        </p>
      </div>

      {/* Veda Selection Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap border-b border-amber-900/15 pb-4">
        {VEDAS_DATA.map((v) => (
          <button
            key={v.id}
            onClick={() => setSelectedVedaId(v.id)}
            className={`px-5 py-2.5 rounded-xl font-serif text-sm transition-all ${
              selectedVedaId === v.id
                ? 'bg-amber-700 text-white font-bold shadow-md'
                : 'bg-amber-100/60 dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-amber-200'
            }`}
          >
            {v.title} ({v.sanskritTitle})
          </button>
        ))}
      </div>

      {/* Active Veda Detailed Content Card */}
      <div className="bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-900/15 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400">
              PERIOD: {selectedVeda.historicalPeriod} • RISHI: {selectedVeda.authorOrRishi}
            </span>
            <h2
              onClick={() => openTopicModal(selectedVeda.title)}
              className="font-serif text-3xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font mt-0.5 hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-2"
            >
              {selectedVeda.title}
              <ExternalLink className="w-5 h-5 text-amber-600" />
            </h2>
            <p className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font">
              {selectedVeda.sanskritTitle}
            </p>
          </div>

          <button
            onClick={handleToggleBm}
            className={`p-2.5 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors self-start sm:self-auto ${
              isBm
                ? 'bg-amber-700 text-white font-bold shadow-sm'
                : 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 dark:text-amber-200'
            }`}
          >
            <Bookmark className="w-4 h-4" /> {isBm ? 'Saved to Library' : 'Bookmark Veda'}
          </button>
        </div>

        {/* Four Structural Divisions (Samhita, Brahmana, Aranyaka, Upanishad) */}
        {selectedVeda.structureSubdivisions && (
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold text-amber-950 dark:text-amber-100 border-b border-amber-900/10 pb-1">
              Four Structural Divisions (चतुर्भाग)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedVeda.structureSubdivisions.map((sub, idx) => (
                <div
                  key={idx}
                  onClick={() => openTopicModal(sub.name)}
                  className="p-4 bg-amber-100/50 dark:bg-stone-800/60 rounded-xl border border-amber-900/10 space-y-1 hover:border-amber-600 cursor-pointer transition-all group"
                >
                  <div className="font-serif font-bold text-amber-950 dark:text-amber-100 text-sm group-hover:text-amber-700 transition-colors flex items-center justify-between">
                    <span>{sub.name} ({sub.sanskritName})</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Summary & Philosophical Essence */}
        <div className="space-y-2">
          <h3 className="font-serif text-lg font-bold text-amber-950 dark:text-amber-100">
            Overview & Philosophical Essence
          </h3>
          <p className="text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed font-serif">
            {selectedVeda.overview}
          </p>
        </div>

        {/* Key Themes & Suktas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-amber-900/10">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block">
              Key Themes & Cosmic Dimensions (Click to read)
            </span>
            <div className="flex flex-wrap gap-1.5 text-xs font-serif">
              {selectedVeda.keyThemes.map((theme, idx) => (
                <button
                  key={idx}
                  onClick={() => openTopicModal(theme)}
                  className="px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-900 dark:text-amber-200 hover:bg-amber-600 hover:text-white transition-colors text-left font-medium"
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>

          {selectedVeda.majorSuktas && (
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block">
                Famous Hymns & Suktas (Click to read)
              </span>
              <div className="flex flex-wrap gap-1.5 text-xs font-serif">
                {selectedVeda.majorSuktas.map((sukta, idx) => (
                  <button
                    key={idx}
                    onClick={() => openTopicModal(sukta)}
                    className="px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-900 dark:text-amber-200 hover:bg-amber-600 hover:text-white transition-colors text-left font-medium"
                  >
                    {sukta}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
