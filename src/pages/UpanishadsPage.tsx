import React, { useState } from 'react';
import { UPANISHADS_DATA } from '../data/upanishads';
import { useApp } from '../context/AppContext';
import { BookOpen, Search, Sparkles, Volume2, Bookmark, CheckCircle2, ExternalLink } from 'lucide-react';

export const UpanishadsPage: React.FC = () => {
  const { bookmarks, toggleBookmark, isBookmarked, playVerseAudio, openTopicModal } = useApp();
  const [selectedUpanishadId, setSelectedUpanishadId] = useState<string>(UPANISHADS_DATA[0].id);
  const [filterVeda, setFilterVeda] = useState<string>('all');


  const filteredUpanishads = UPANISHADS_DATA.filter(u =>
    filterVeda === 'all' || u.associatedVeda.toLowerCase() === filterVeda.toLowerCase()
  );

  const activeUpanishad = UPANISHADS_DATA.find(u => u.id === selectedUpanishadId) || UPANISHADS_DATA[0];

  const bmId = `upanishad-${activeUpanishad.id}`;
  const isBm = isBookmarked(bmId);

  const handleToggleBm = () => {
    toggleBookmark({
      id: bmId,
      itemType: 'upanishad',
      itemId: bmId,
      title: activeUpanishad.name,
      subtitle: activeUpanishad.sanskritName
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Title Header */}
      <div className="text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
          उपनिषदः • The Vedantic Upanishads
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          The philosophical culmination of the Vedas (Vedanta) exploring the non-dual identity of the individual self (Atman) and Supreme Ultimate Reality (Brahman).
        </p>
      </div>

      {/* Filter Tabs by Associated Veda */}
      <div className="max-w-3xl mx-auto bg-amber-100/60 dark:bg-stone-900/80 border border-amber-800/20 rounded-2xl p-3.5 sm:p-4 shadow-xl backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs font-serif">
          {['all', 'rigveda', 'yajurveda', 'samaveda', 'atharvaveda'].map((veda) => (
            <button
              key={veda}
              onClick={() => setFilterVeda(veda)}
              className={`px-3.5 sm:px-4 py-2.5 rounded-xl capitalize transition-colors min-h-[44px] flex items-center justify-center font-bold active:scale-95 ${
                filterVeda === veda
                  ? 'bg-amber-700 text-white shadow-md'
                  : 'bg-stone-200/60 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-300 dark:hover:bg-stone-700'
              }`}
            >
              {veda === 'all' ? 'All Upanishads' : veda}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* List Column */}
        <div className="bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 rounded-2xl p-4 shadow-md space-y-3 max-h-[75vh] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-amber-900/10 pb-2 px-2">
            <span className="font-serif font-bold text-amber-950 dark:text-amber-100 text-sm">
              Mukhya Upanishads ({filteredUpanishads.length})
            </span>
          </div>

          <div className="space-y-2">
            {filteredUpanishads.map((u) => (
              <button
                key={u.id}
                onClick={() => setSelectedUpanishadId(u.id)}
                className={`w-full text-left p-3.5 rounded-xl transition-all border flex items-center justify-between min-h-[48px] active:scale-98 ${
                  selectedUpanishadId === u.id
                    ? 'bg-amber-700 text-white font-bold border-amber-500 shadow-md'
                    : 'bg-stone-100 dark:bg-stone-800/60 text-stone-800 dark:text-stone-200 border-amber-900/10 hover:bg-amber-200'
                }`}
              >
                <div>
                  <div className="font-serif text-sm">{u.name}</div>
                  <div className="text-[11px] opacity-80 sanskrit-font font-serif">
                    {u.sanskritName}
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-stone-900 dark:text-amber-100 shrink-0 ml-2">
                  {u.associatedVeda}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Detail Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-900/15 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400">
                  ASSOCIATED VEDA: {activeUpanishad.associatedVeda}
                </span>
                <h2
                  onClick={() => openTopicModal(activeUpanishad.name)}
                  className="font-serif text-3xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font mt-0.5 hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-2"
                >
                  {activeUpanishad.name}
                  <ExternalLink className="w-5 h-5 text-amber-600" />
                </h2>

                <p className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font">
                  ({activeUpanishad.sanskritName})
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
                <Bookmark className="w-4 h-4" /> {isBm ? 'Saved to Library' : 'Bookmark Upanishad'}
              </button>
            </div>

            {/* Mahavakya Highlight Card if available */}
            {activeUpanishad.mahavakya && (
              <div className="p-6 bg-gradient-to-r from-amber-100/90 to-amber-200/50 dark:from-stone-800 dark:to-stone-900 border border-amber-800/20 rounded-2xl space-y-3 shadow-inner">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-900 dark:text-amber-400">
                  SACRED MAHAVAKYA (GREAT VEDANTIC DECLARATION)
                </span>
                <div className="text-xl sm:text-2xl font-serif font-bold text-amber-950 dark:text-amber-100 sanskrit-font flex items-center justify-between">
                  <span>{activeUpanishad.mahavakya.sanskrit}</span>
                  <button
                    onClick={() => playVerseAudio(activeUpanishad.mahavakya!.sanskrit)}
                    className="p-2 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-900 dark:text-amber-200"
                    title="Recite Mahavakya"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 font-serif italic">
                  Transliteration: {activeUpanishad.mahavakya.transliteration}
                </p>
                <p className="text-xs sm:text-sm font-bold text-amber-950 dark:text-amber-200 font-serif border-t border-amber-900/10 pt-2">
                  Meaning: "{activeUpanishad.mahavakya.translation}" — {activeUpanishad.mahavakya.meaning}
                </p>
              </div>
            )}

            {/* Overview & Teachings */}
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 block border-b border-amber-900/10 pb-1">
                Summary & Philosophical Essence
              </span>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
                {activeUpanishad.summary}
              </p>
            </div>

            {/* Central Dialogue if present */}
            {activeUpanishad.centralDialogue && (
              <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/20 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                  Famous Dialogue Frame
                </span>
                <p className="text-xs font-serif text-stone-800 dark:text-stone-200">
                  {activeUpanishad.centralDialogue}
                </p>
              </div>
            )}

            {/* Key Teachings Bullet Points */}
            <div className="space-y-2 pt-2 border-t border-amber-900/10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 block">
                Key Spiritual Teachings
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeUpanishad.keyTeachings.map((t, idx) => (
                  <div key={idx} className="p-3 bg-stone-100 dark:bg-stone-800/50 rounded-xl border border-amber-900/10 text-xs font-serif text-stone-800 dark:text-stone-200 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
