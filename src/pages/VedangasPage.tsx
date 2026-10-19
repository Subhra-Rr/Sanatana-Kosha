import React from 'react';
import { VEDANGAS_DATA } from '../data/vedangas';
import { useApp } from '../context/AppContext';
import { BookOpen, ExternalLink, Sparkles } from 'lucide-react';

const VEDANGA_LIMB_MAP: Record<string, { limb: string; organ: string }> = {
  shiksha: { limb: 'Nose of Veda', organ: 'घ्राणम्' },
  vyakarana: { limb: 'Mouth of Veda', organ: 'मुखम्' },
  nirukta: { limb: 'Ears of Veda', organ: 'श्रोत्रम्' },
  kalpa: { limb: 'Hands of Veda', organ: 'करौ' },
  chandas: { limb: 'Feet of Veda', organ: 'पादौ' },
  jyotisha: { limb: 'Eyes of Veda', organ: 'चक्षुः' }
};

export const VedangasPage: React.FC = () => {
  const { openTopicModal } = useApp();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 sm:space-y-10 animate-fade-in">
      {/* Title Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-600/30 text-amber-300 text-xs font-serif font-semibold">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Veda-Angani • Auxiliary Vedic Sciences</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-amber-100 sanskrit-font">
          षडङ्गानि • The Six Limbs of the Veda
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-stone-300 font-serif leading-relaxed">
          Auxiliary disciplines required to correctly recite, interpret, preserve, and apply the mantras of the Vedas. Click any Vedanga or treatise to explore in-depth knowledge.
        </p>
      </div>

      {/* Fully Responsive Vedanga Cards Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {VEDANGAS_DATA.map((v) => {
          const limbInfo = VEDANGA_LIMB_MAP[v.id];

          return (
            <div
              key={v.id}
              onClick={() => openTopicModal(v.name)}
              className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-stone-900/90 border border-amber-800/20 shadow-xl space-y-4 flex flex-col justify-between hover:border-amber-600 transition-all hover:-translate-y-1 cursor-pointer group min-w-0 overflow-hidden"
            >
              <div className="space-y-3 min-w-0">
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-amber-900/15 pb-3 min-w-0">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors flex items-center gap-1.5 break-words">
                        <span>{v.name}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </h3>
                      <span className="text-sm font-serif text-amber-300 sanskrit-font">
                        ({v.sanskritName})
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-amber-400/90 mt-1 flex items-center gap-1.5 flex-wrap">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{v.meaning}</span>
                    </div>
                  </div>

                  {limbInfo && (
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-600/30 text-amber-300 shrink-0 self-start sm:self-auto shadow-sm whitespace-nowrap">
                      {limbInfo.limb} • {limbInfo.organ}
                    </span>
                  )}
                </div>

                {/* Scope & Purpose Box: Fully Responsive wrapping text */}
                <div className="p-3 rounded-xl bg-stone-950/70 border border-amber-800/20 text-xs text-stone-300 leading-relaxed font-serif min-w-0">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block mb-1">
                    Function & Scope
                  </span>
                  <p className="text-stone-300 break-words">{v.purpose}</p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-serif break-words">
                  {v.description}
                </p>

                {/* Key Texts & Treatises */}
                <div className="space-y-1.5 pt-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                    Key Texts & Treatises (Click to read)
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs">
                    {v.keyTexts.map((text, tIdx) => (
                      <button
                        key={tIdx}
                        onClick={(e) => {
                          e.stopPropagation();
                          openTopicModal(text);
                        }}
                        className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-500/15 border border-amber-800/25 text-amber-200 hover:bg-amber-600 hover:text-white transition-all text-xs font-serif font-medium active:scale-95 text-left break-words min-h-[38px] flex items-center"
                      >
                        {text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

                {/* Importance Footer */}
              <div className="pt-3 border-t border-amber-900/15 text-xs text-stone-300 font-serif leading-relaxed min-w-0">
                <span className="font-bold text-amber-300 font-sans">Importance:</span>{' '}
                <span className="italic">{v.importance || v.importanceInVedicRecitation}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
