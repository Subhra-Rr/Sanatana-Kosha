import React, { useState } from 'react';
import { TEMPLES_DATA } from '../data/temples';
import { SACRED_GEOGRAPHY_ROUTES_DATA } from '../data/sacredGeographyRoutes';
import { useApp } from '../context/AppContext';
import { MapPin, Compass, ExternalLink, Bookmark, Sparkles, Navigation, Globe } from 'lucide-react';

export const TemplesGeographyPage: React.FC = () => {
  const { openTopicModal, toggleBookmark, isBookmarked } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTempleId, setSelectedTempleId] = useState<string>(TEMPLES_DATA[0].id);
  const [activeRouteCategory, setActiveRouteCategory] = useState<'all' | 'Sapta Puri' | 'Ramayana Yatra' | 'Ancient University'>('all');

  const filteredTemples = TEMPLES_DATA.filter(t =>
    selectedCategory === 'all' || t.category.toLowerCase().includes(selectedCategory)
  );

  const filteredRoutes = SACRED_GEOGRAPHY_ROUTES_DATA.filter(r =>
    activeRouteCategory === 'all' || r.routeCategory === activeRouteCategory
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
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 sm:space-y-10 overflow-x-hidden animate-fade-in">
      {/* Title */}
      <div className="text-center space-y-3 px-2">
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font leading-tight">
          पुण्यभूमिः • Sacred Geography & Heritage
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          The sacred pilgrimage landscape of Bharatvarsha — 12 Jyotirlingas, 51 Shakti Peethas, Char Dham, 7 Mokshada Puris, Ramayana Yatra, and Ancient Universities.
        </p>
      </div>

      {/* Filter Category Bar */}
      <div className="max-w-3xl mx-auto bg-amber-100/60 dark:bg-stone-900/80 border border-amber-800/20 rounded-2xl p-3.5 sm:p-4 shadow-xl backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs font-serif">
          {['all', 'char dham', 'jyotirlinga', 'shakti peetha', 'ancient temple'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 sm:px-4 py-2.5 rounded-xl capitalize transition-all min-h-[44px] flex items-center justify-center font-semibold active:scale-95 ${
                selectedCategory === cat
                  ? 'bg-amber-700 text-white shadow-md'
                  : 'bg-stone-200/60 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-300 dark:hover:bg-stone-700'
              }`}
            >
              {cat === 'all' ? 'All Temples' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Temple Explorer & Details split view */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Temple List */}
        <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1 scrollbar-none">
          {filteredTemples.map(t => (
            <button
              key={t.id}
              onClick={() => setSelectedTempleId(t.id)}
              className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                selectedTempleId === t.id
                  ? 'bg-amber-800 text-white border-amber-600 shadow-md'
                  : 'bg-amber-50/90 dark:bg-stone-900/90 text-stone-800 dark:text-stone-200 border-amber-800/15 hover:border-amber-600'
              }`}
            >
              <div>
                <span className="font-serif text-base font-bold block">
                  {t.name}
                </span>
                <span className="text-xs opacity-90 font-serif flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                  {t.location}, {t.state}
                </span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono shrink-0">
                {t.category}
              </span>
            </button>
          ))}
        </div>

        {/* Temple Active Details Card */}
        <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-900/15 pb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400">
                {activeTemple.category} • DEITY: {activeTemple.deity}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-950 dark:text-amber-100 flex items-center gap-2 mt-0.5">
                {activeTemple.name}
              </h2>
              <p className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font">
                ({activeTemple.sanskritName})
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleTempleBookmark}
                className={`p-2.5 rounded-full border transition-all min-w-[44px] min-h-[44px] flex items-center justify-center ${
                  isSaved ? 'bg-amber-700 text-white border-amber-600' : 'bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-amber-800/20'
                }`}
                title="Save Temple to Library"
              >
                <Bookmark className="w-4 h-4" />
              </button>
              <button
                onClick={() => openTopicModal(activeTemple.name)}
                className="px-4 py-2.5 rounded-xl bg-amber-800 text-white text-xs font-serif font-bold shadow hover:bg-amber-700 min-h-[44px] flex items-center justify-center active:scale-95"
              >
                Explore Details
              </button>
            </div>
          </div>

          <div className="space-y-3 text-xs sm:text-sm font-serif text-stone-800 dark:text-stone-200">
            <p className="leading-relaxed">
              <strong>Scriptural Significance:</strong> {activeTemple.scripturalSignificance}
            </p>
            <p className="leading-relaxed">
              <strong>Architectural Features:</strong> {activeTemple.architectureDetails}
            </p>
            <p className="leading-relaxed">
              <strong>Sacred Legend:</strong> {activeTemple.legend}
            </p>
          </div>

          {activeTemple.festivalsCelebrated.length > 0 && (
            <div className="pt-2 border-t border-amber-900/10">
              <span className="text-[10px] font-bold uppercase text-amber-800 dark:text-amber-400 block mb-1">
                Major Celebrated Festivals:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeTemple.festivalsCelebrated.map((f, fIdx) => (
                  <span key={fIdx} className="px-2.5 py-1 rounded-lg bg-amber-600/15 text-amber-950 dark:text-amber-200 text-xs font-serif font-semibold">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sacred Routes & Ancient Universities Section */}
      <div className="pt-8 border-t border-amber-900/15 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-serif font-bold text-xl text-amber-950 dark:text-amber-200">
              <Navigation className="w-5 h-5 text-amber-600" />
              <span>Sacred Routes, Sapta Puris & Ancient Learning Hubs</span>
            </div>
            <p className="text-xs font-serif text-stone-600 dark:text-stone-400">
              Historical pilgrimage networks connecting sacred cities and ancient universities across Bharatvarsha.
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none px-1 max-w-full">
            {['all', 'Sapta Puri', 'Ramayana Yatra', 'Ancient University'].map(rCat => (
              <button
                key={rCat}
                onClick={() => setActiveRouteCategory(rCat as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all shrink-0 min-h-[44px] flex items-center justify-center active:scale-95 ${
                  activeRouteCategory === rCat
                    ? 'bg-amber-800 text-white shadow'
                    : 'bg-amber-100/60 dark:bg-stone-900 text-stone-800 dark:text-stone-300 border border-amber-800/15'
                }`}
              >
                {rCat === 'all' ? 'All Routes' : rCat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRoutes.map(item => (
            <div
              key={item.id}
              className="p-5 rounded-3xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-3 hover:border-amber-600 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 border-b border-amber-900/10 pb-2.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400 px-2 py-1 rounded bg-amber-600/15 inline-block max-w-full break-words self-start leading-tight">
                  {item.routeCategory}
                </span>
                <span className="text-xs font-serif text-stone-500 dark:text-stone-400 font-medium shrink-0">
                  {item.modernLocation}, {item.stateOrCountry}
                </span>
              </div>

              <div>
                <h4 className="font-serif text-lg font-bold text-amber-950 dark:text-amber-100 break-words">
                  {item.name}
                </h4>
                <p className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font break-words">
                  ({item.sanskritName})
                </p>
              </div>

              <p className="text-xs font-serif text-stone-700 dark:text-stone-300 leading-relaxed break-words">
                {item.significance}
              </p>

              <div className="p-3 rounded-xl bg-amber-200/40 dark:bg-stone-950/80 border border-amber-800/20 text-[11px] font-serif">
                <strong className="text-amber-950 dark:text-amber-300 block mb-0.5">Scripture Event:</strong>
                <span className="text-stone-700 dark:text-stone-300 italic break-words">{item.keyScriptureEvent}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
