import React from 'react';
import { VEDANGAS_DATA } from '../data/vedangas';
import { useApp } from '../context/AppContext';
import { BookOpen, Layers, ExternalLink } from 'lucide-react';

export const VedangasPage: React.FC = () => {
  const { openTopicModal } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Title Header */}
      <div className="text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
          षडङ्गानि • The Six Limbs of the Veda
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          Auxiliary disciplines required to correctly recite, interpret, preserve, and apply the mantras of the Vedas. Click any Vedanga or text to explore in-depth knowledge.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {VEDANGAS_DATA.map((v) => (
          <div
            key={v.id}
            onClick={() => openTopicModal(v.name)}
            className="p-6 rounded-2xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-4 flex flex-col justify-between hover:border-amber-600 transition-all hover:-translate-y-1 cursor-pointer group"
          >
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 border-b border-amber-900/10 pb-2.5">
                <div className="min-w-0">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-950 dark:text-amber-100 group-hover:text-amber-700 transition-colors flex items-center gap-1.5 break-words">
                    <span>{v.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </h3>
                  <span className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font block break-words">
                    ({v.sanskritName})
                  </span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-amber-600/20 text-amber-900 dark:text-amber-200 font-bold shrink-0 self-start sm:self-auto whitespace-nowrap">
                  {v.purpose}
                </span>
              </div>

              <div className="text-xs font-semibold text-amber-800 dark:text-amber-400 break-words">
                Meaning: {v.meaning}
              </div>

              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-serif break-words">
                {v.description}
              </p>

              <div className="space-y-1 pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block">
                  Key Texts & Treatises (Click to read)
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {v.keyTexts.map((text, tIdx) => (
                    <button
                      key={tIdx}
                      onClick={(e) => {
                        e.stopPropagation();
                        openTopicModal(text);
                      }}
                      className="px-3 py-2 rounded-xl bg-amber-500/15 text-amber-900 dark:text-amber-200 hover:bg-amber-600 hover:text-white transition-all text-left min-h-[44px] flex items-center font-medium active:scale-95 break-words"
                    >
                      {text}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-amber-900/10 text-xs text-stone-600 dark:text-stone-400 font-serif italic break-words">
              <span className="font-bold font-sans not-italic text-amber-900 dark:text-amber-300">Importance:</span> {v.importance || v.importanceInVedicRecitation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

