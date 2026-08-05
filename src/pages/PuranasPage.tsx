import React, { useState } from 'react';
import { PURANAS_DATA } from '../data/puranas';
import { useApp } from '../context/AppContext';
import { BookOpen, Layers, ExternalLink } from 'lucide-react';

export const PuranasPage: React.FC = () => {
  const { openTopicModal } = useApp();
  const [filterType, setFilterType] = useState<string>('all');

  const filteredPuranas = PURANAS_DATA.filter(p =>
    filterType === 'all' || p.dominantDeity.toLowerCase().includes(filterType) || p.type.toLowerCase().includes(filterType)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Title */}
      <div className="text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
          अष्टादशपुराणानि • The 18 Mahapuranas
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          The encyclopedic repositories of cosmic creation (Sarga), recreation (Pratisarga), divine genealogies (Vamsha), cosmic time cycles (Manvantara), and historical biographies. Click any Purana or topic to explore in-depth knowledge.
        </p>
      </div>

      {/* Classification Filters */}
      <div className="max-w-3xl mx-auto bg-amber-100/60 dark:bg-stone-900/80 border border-amber-800/20 rounded-2xl p-3.5 sm:p-4 shadow-xl backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs font-serif">
          {['all', 'vishnu', 'shiva', 'brahma', 'shakti'].map((f) => (
            <button
              key={f}
              onClick={() => setFilterType(f)}
              className={`px-3.5 sm:px-4 py-2 rounded-xl capitalize transition-colors min-h-[40px] flex items-center justify-center ${
                filterType === f
                  ? 'bg-amber-700 text-white font-bold shadow-md'
                  : 'bg-stone-200/60 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-300 dark:hover:bg-stone-700'
              }`}
            >
              {f === 'all' ? 'All 18 Mahapuranas' : `${f} Group`}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPuranas.map((p) => (
          <div
            key={p.id}
            onClick={() => openTopicModal(p.name)}
            className="p-6 rounded-2xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-4 flex flex-col justify-between hover:border-amber-600 transition-all hover:-translate-y-1 cursor-pointer group"
          >
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 border-b border-amber-900/10 pb-2.5">
                <div className="min-w-0">
                  <h3 className="font-serif text-xl font-bold text-amber-950 dark:text-amber-100 group-hover:text-amber-700 transition-colors flex items-center gap-1.5 break-words">
                    <span>{p.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </h3>
                  <span className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font block break-words">
                    ({p.sanskritName})
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-600/20 text-amber-900 dark:text-amber-200 shrink-0 self-start sm:self-auto whitespace-nowrap">
                  {p.traditionalVerseCount.toLocaleString()} Verses
                </span>
              </div>

              <div className="text-[11px] font-semibold text-amber-800 dark:text-amber-400 break-words">
                Primary Deity: {p.dominantDeity}
              </div>

              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-serif break-words">
                {p.synopsis}
              </p>

              <div className="space-y-1 pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block">
                  Key Topics & Stories (Click to read)
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {p.keyTopics.map((topic, tIdx) => (
                    <button
                      key={tIdx}
                      onClick={(e) => {
                        e.stopPropagation();
                        openTopicModal(topic);
                      }}
                      className="px-3 py-2 rounded-xl bg-amber-500/15 text-amber-900 dark:text-amber-200 hover:bg-amber-600 hover:text-white transition-all text-left min-h-[44px] flex items-center font-medium active:scale-95 break-words"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

