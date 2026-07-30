import React, { useState } from 'react';
import { HISTORICAL_TIMELINE_DATA } from '../data/timelines';
import { useApp } from '../context/AppContext';
import { History, Tag, Clock, ExternalLink } from 'lucide-react';

export const TimelinesPage: React.FC = () => {
  const { openTopicModal } = useApp();
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredEvents = HISTORICAL_TIMELINE_DATA.filter(e =>
    filterCategory === 'all' || e.category.toLowerCase() === filterCategory.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Title */}
      <div className="text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
          कालक्रमराजी • Historical Timeline
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          Chronological progression of Sanatana Dharma across 5000+ years. Click any era event or key figure to explore detailed knowledge.
        </p>
      </div>

      {/* Filter Category */}
      <div className="flex items-center justify-center gap-2 border-b border-amber-900/15 pb-4 text-xs font-serif">
        {['all', 'scripture', 'philosophy', 'temple', 'acharya'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-4 py-2 rounded-xl capitalize transition-colors ${
              filterCategory === cat
                ? 'bg-amber-700 text-white font-bold shadow-md'
                : 'bg-amber-100/60 dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-amber-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Timeline List View */}
      <div className="relative border-l-2 border-amber-800/30 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8">
        {filteredEvents.map((evt) => (
          <div key={evt.id} className="relative group">
            {/* Timeline Circle Bullet */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-600 border-2 border-amber-100 shadow-md group-hover:scale-125 transition-transform" />

            <div
              onClick={() => openTopicModal(evt.title)}
              className="p-6 rounded-2xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-3 hover:border-amber-600 transition-all cursor-pointer group hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-900/10 pb-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400">
                    {evt.category} ERA
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-amber-950 dark:text-amber-100 mt-0.5 group-hover:text-amber-700 transition-colors flex items-center gap-1.5">
                    {evt.title}
                    <ExternalLink className="w-4 h-4 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-600/20 text-amber-900 dark:text-amber-200 self-start sm:self-auto">
                  {evt.yearBCEorCE}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
                {evt.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-1.5 text-xs">
                {evt.keyFigures.map((fig, fIdx) => (
                  <button
                    key={fIdx}
                    onClick={(e) => {
                      e.stopPropagation();
                      openTopicModal(fig);
                    }}
                    className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-900 dark:text-amber-200 hover:bg-amber-600 hover:text-white transition-colors text-left font-medium"
                  >
                    {fig}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

