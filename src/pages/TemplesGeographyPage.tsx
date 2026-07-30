import React, { useState } from 'react';
import { TEMPLES_DATA } from '../data/temples';
import { useApp } from '../context/AppContext';
import { MapPin, Compass, Landmark, Info, ExternalLink } from 'lucide-react';

export const TemplesGeographyPage: React.FC = () => {
  const { openTopicModal } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTempleId, setSelectedTempleId] = useState<string>(TEMPLES_DATA[0].id);

  const filteredTemples = TEMPLES_DATA.filter(t =>
    selectedCategory === 'all' || t.category.toLowerCase().includes(selectedCategory)
  );

  const activeTemple = TEMPLES_DATA.find(t => t.id === selectedTempleId) || TEMPLES_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Title */}
      <div className="text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
          पुण्यभूमिः • Sacred Geography & Temples
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          Explore the sacred pilgrimage landscape of Bharatvarsha — 12 Jyotirlingas, 51 Shakti Peethas, Char Dham, and ancient temples. Click any site or festival to view detailed knowledge.
        </p>
      </div>

      {/* Filter Category Bar */}
      <div className="flex items-center justify-center gap-2 flex-wrap border-b border-amber-900/15 pb-4 text-xs font-serif">
        {['all', 'char dham', 'jyotirlinga', 'shakti peetha', 'ancient temple'].map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl capitalize transition-colors ${
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Temples List / Map Pins Selector */}
        <div className="bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 rounded-2xl p-4 shadow-md space-y-3 max-h-[75vh] overflow-y-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5 p-2">
            <Compass className="w-4 h-4 text-amber-600" /> Sacred Sites ({filteredTemples.length})
          </span>

          <div className="space-y-2">
            {filteredTemples.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTempleId(t.id)}
                className={`w-full text-left p-3 rounded-xl transition-all border flex items-center justify-between ${
                  selectedTempleId === t.id
                    ? 'bg-amber-700 text-white font-bold border-amber-500 shadow-md'
                    : 'bg-stone-100 dark:bg-stone-800/60 text-stone-800 dark:text-stone-200 border-amber-900/10 hover:bg-amber-200'
                }`}
              >
                <div>
                  <div className="font-serif text-sm font-bold flex items-center gap-1">
                    <span>{t.name}</span>
                  </div>
                  <div className="text-[11px] opacity-80 flex items-center gap-1 font-sans">
                    <MapPin className="w-3 h-3" /> {t.location}, {t.state}
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-stone-900 dark:text-amber-100 font-medium">
                  {t.category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Temple Detailed Showcase */}
        {activeTemple && (
          <div className="lg:col-span-2 bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-900/15 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400">
                  {activeTemple.category} • {activeTemple.architecturalStyle} Architecture
                </span>
                <h2
                  onClick={() => openTopicModal(activeTemple.name)}
                  className="font-serif text-3xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font mt-0.5 hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-2"
                >
                  {activeTemple.name}
                  <ExternalLink className="w-5 h-5 text-amber-600" />
                </h2>
                <p className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font">
                  {activeTemple.sanskritName}
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs font-bold text-amber-900 dark:text-amber-200 block">
                  {activeTemple.location}, {activeTemple.state}
                </span>
                {activeTemple.coordinates && (
                  <span className="text-[10px] text-stone-500 font-mono">
                    Lat: {activeTemple.coordinates.lat}° N, Lng: {activeTemple.coordinates.lng}° E
                  </span>
                )}
              </div>
            </div>

            {/* Image if available */}
            {activeTemple.imageUrl && (
              <div className="relative rounded-2xl overflow-hidden border border-amber-800/20 max-h-72">
                <img
                  src={activeTemple.imageUrl}
                  alt={activeTemple.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                {activeTemple.imageSource && (
                  <span className="absolute bottom-2 right-2 text-[9px] bg-stone-950/80 text-stone-300 px-2 py-0.5 rounded">
                    Source: {activeTemple.imageSource}
                  </span>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-amber-500/10 p-4 rounded-xl">
              <div>
                <span className="text-stone-500 block text-[10px]">PRESIDING DEITY</span>
                <button
                  onClick={() => openTopicModal(activeTemple.deity)}
                  className="font-bold text-amber-950 dark:text-amber-100 hover:text-amber-700 underline text-left"
                >
                  {activeTemple.deity}
                </button>
              </div>
              <div>
                <span className="text-stone-500 block text-[10px]">HISTORICAL PERIOD</span>
                <span className="font-bold text-amber-950 dark:text-amber-100">{activeTemple.historicalPeriod}</span>
              </div>
            </div>

            <div className="space-y-3 font-serif text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
              <div>
                <span className="font-bold text-amber-900 dark:text-amber-300 block mb-1">Scriptural Significance:</span>
                <p>{activeTemple.scripturalSignificance}</p>
              </div>

              {activeTemple.architectureDetails && (
                <div>
                  <span className="font-bold text-amber-900 dark:text-amber-300 block mb-1">Architectural Features:</span>
                  <p>{activeTemple.architectureDetails}</p>
                </div>
              )}

              {activeTemple.legend && (
                <div>
                  <span className="font-bold text-amber-900 dark:text-amber-300 block mb-1">Sacred Legend:</span>
                  <p>{activeTemple.legend}</p>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-amber-900/10 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                Major Annual Festivals Celebrated (Click to read)
              </span>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {activeTemple.festivalsCelebrated.map((f, idx) => (
                  <button
                    key={idx}
                    onClick={() => openTopicModal(f)}
                    className="px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-900 dark:text-amber-200 hover:bg-amber-600 hover:text-white transition-colors text-left font-medium"
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

