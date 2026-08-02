import React, { useState } from 'react';
import { TEMPLES_DATA } from '../data/temples';
import { useApp } from '../context/AppContext';
import { MapPin, Compass, ExternalLink, Bookmark, Sparkles } from 'lucide-react';

export const TemplesGeographyPage: React.FC = () => {
  const { openTopicModal, toggleBookmark, isBookmarked } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTempleId, setSelectedTempleId] = useState<string>(TEMPLES_DATA[0].id);

  const filteredTemples = TEMPLES_DATA.filter(t =>
    selectedCategory === 'all' || t.category.toLowerCase().includes(selectedCategory)
  );

  const activeTemple = TEMPLES_DATA.find(t => t.id === selectedTempleId) || TEMPLES_DATA[0];

  const templeBmId = `temple-${activeTemple.id}`;
  const isSaved = isBookmarked(templeBmId) || isBookmarked(activeTemple.id);

  const handleToggleTempleBookmark = () => {
    toggleBookmark({
      id: templeBmId,
      itemId: templeBmId,
      itemType: 'temple',
      title: activeTemple.name,
      subtitle: `${activeTemple.location}, ${activeTemple.state} • Deity: ${activeTemple.deity}`
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 sm:space-y-10 overflow-x-hidden">
      {/* Title */}
      <div className="text-center space-y-3 px-2">
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font leading-tight">
          पुण्यभूमिः • Sacred Geography & Temples
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          Explore the sacred pilgrimage landscape of Bharatvarsha — 12 Jyotirlingas, 51 Shakti Peethas, Char Dham, and ancient temples. Click any site or festival to view detailed knowledge or save to your library.
        </p>
      </div>

      {/* Filter Category Bar */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap border-b border-amber-900/15 pb-4 text-xs font-serif px-1">
        {['all', 'char dham', 'jyotirlinga', 'shakti peetha', 'ancient temple'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 sm:px-4 py-2 rounded-xl capitalize transition-all min-h-[44px] flex items-center justify-center ${
              selectedCategory === cat
                ? 'bg-amber-700 text-white font-bold shadow-md'
                : 'bg-amber-100/60 dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-amber-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Interactive Map & Detail View Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Temples List / Map Pins Selector */}
        <div className="bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 rounded-2xl p-3 sm:p-4 shadow-md space-y-3 max-h-[50vh] lg:max-h-[75vh] overflow-y-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5 p-2 sticky top-0 bg-amber-50/95 dark:bg-stone-900 z-10">
            <Compass className="w-4 h-4 text-amber-600" /> Sacred Sites ({filteredTemples.length})
          </span>

          <div className="space-y-2">
            {filteredTemples.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTempleId(t.id)}
                className={`w-full text-left p-3 rounded-xl transition-all border flex items-center justify-between gap-2 min-h-[48px] ${
                  selectedTempleId === t.id
                    ? 'bg-amber-700 text-white font-bold border-amber-500 shadow-md'
                    : 'bg-stone-100 dark:bg-stone-800/60 text-stone-800 dark:text-stone-200 border-amber-900/10 hover:bg-amber-200'
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="font-serif text-xs sm:text-sm font-bold truncate">
                    {t.name}
                  </div>
                  <div className="text-[11px] opacity-80 flex items-center gap-1 font-sans truncate">
                    <MapPin className="w-3 h-3 flex-shrink-0" /> {t.location}, {t.state}
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-stone-900 dark:text-amber-100 font-medium flex-shrink-0">
                  {t.category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Temple Detailed Showcase */}
        {activeTemple && (
          <div className="lg:col-span-2 bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 rounded-2xl p-4 sm:p-8 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-amber-900/15 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400 block">
                  {activeTemple.category} • {activeTemple.architecturalStyle} Architecture
                </span>
                <h2
                  onClick={() => openTopicModal(activeTemple.name)}
                  className="font-serif text-2xl sm:text-3xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-2 flex-wrap"
                >
                  <span>{activeTemple.name}</span>
                  <ExternalLink className="w-5 h-5 text-amber-600 flex-shrink-0" />
                </h2>
                <p className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font">
                  {activeTemple.sanskritName}
                </p>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3">
                <button
                  onClick={handleToggleTempleBookmark}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm min-h-[40px] ${
                    isSaved
                      ? 'bg-amber-700 text-white font-bold shadow-md'
                      : 'bg-amber-500/15 hover:bg-amber-500/25 text-amber-900 dark:text-amber-200 border border-amber-800/20'
                  }`}
                  title={isSaved ? 'Bookmarked' : 'Save Temple'}
                >
                  <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current text-amber-200' : ''}`} />
                  <span>{isSaved ? 'Bookmarked' : 'Save Temple'}</span>
                </button>

                <div className="text-right text-xs">
                  <span className="font-bold text-amber-900 dark:text-amber-200 block">
                    {activeTemple.location}, {activeTemple.state}
                  </span>
                  {activeTemple.coordinates && (
                    <span className="text-[10px] text-stone-500 font-mono hidden sm:inline-block">
                      Lat: {activeTemple.coordinates.lat}° N, Lng: {activeTemple.coordinates.lng}° E
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-amber-500/10 p-4 rounded-xl">
              <div>
                <span className="text-stone-500 block text-[10px] uppercase font-bold">PRESIDING DEITY</span>
                <button
                  onClick={() => openTopicModal(activeTemple.deity)}
                  className="font-bold text-amber-950 dark:text-amber-100 hover:text-amber-700 underline text-left flex items-center gap-1 mt-0.5"
                >
                  <Sparkles className="w-3 h-3 text-amber-600 flex-shrink-0" />
                  <span>{activeTemple.deity}</span>
                </button>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px] uppercase font-bold">HISTORICAL PERIOD</span>
                <span className="font-bold text-amber-950 dark:text-amber-100 block mt-0.5">{activeTemple.historicalPeriod}</span>
              </div>
            </div>

            <div className="space-y-4 font-serif text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
              <div>
                <span className="font-bold text-amber-900 dark:text-amber-300 block mb-1 text-xs uppercase tracking-wider">
                  Scriptural Significance:
                </span>
                <p className="break-words">{activeTemple.scripturalSignificance}</p>
              </div>

              {activeTemple.architectureDetails && (
                <div>
                  <span className="font-bold text-amber-900 dark:text-amber-300 block mb-1 text-xs uppercase tracking-wider">
                    Architectural Features:
                  </span>
                  <p className="break-words">{activeTemple.architectureDetails}</p>
                </div>
              )}

              {activeTemple.legend && (
                <div>
                  <span className="font-bold text-amber-900 dark:text-amber-300 block mb-1 text-xs uppercase tracking-wider">
                    Sacred Legend:
                  </span>
                  <p className="break-words">{activeTemple.legend}</p>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-amber-900/10 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block">
                Major Annual Festivals Celebrated (Click to read)
              </span>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {activeTemple.festivalsCelebrated.map((f, idx) => (
                  <button
                    key={idx}
                    onClick={() => openTopicModal(f)}
                    className="px-2.5 py-1.5 rounded-lg bg-amber-500/15 text-amber-900 dark:text-amber-200 hover:bg-amber-600 hover:text-white transition-colors text-left font-medium min-h-[36px]"
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


