import React, { useState } from 'react';
import { DARSHANAS_DATA } from '../data/darshanas';
import { DEBATE_TOPICS_DATA } from '../data/debates';
import { useApp } from '../context/AppContext';
import { Compass, Scale, BookOpen, Layers, ExternalLink } from 'lucide-react';

export const DarshanasPage: React.FC = () => {
  const { openTopicModal } = useApp();
  const [activeTab, setActiveTab] = useState<'darshanas' | 'debates'>('darshanas');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Title */}
      <div className="text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
          षड्दर्शनम् • Philosophical Systems & Debates
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          The six classical Astika schools of Hindu philosophy examining Pramana (epistemology), Metaphysics, Ethics, and Moksha. Click any school or debate to explore in-depth knowledge.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2 border-b border-amber-900/15 pb-4">
        <button
          onClick={() => setActiveTab('darshanas')}
          className={`px-5 py-3 min-h-[44px] rounded-xl font-serif text-sm transition-all flex items-center justify-center font-semibold active:scale-95 ${
            activeTab === 'darshanas'
              ? 'bg-amber-700 text-white shadow-md'
              : 'bg-amber-100/60 dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-amber-200'
          }`}
        >
          6 Classical Darshanas & Vedanta
        </button>
        <button
          onClick={() => setActiveTab('debates')}
          className={`px-5 py-3 min-h-[44px] rounded-xl font-serif text-sm transition-all flex items-center justify-center font-semibold active:scale-95 ${
            activeTab === 'debates'
              ? 'bg-amber-700 text-white shadow-md'
              : 'bg-amber-100/60 dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-amber-200'
          }`}
        >
          Historic Shastrartha Debates
        </button>
      </div>

      {activeTab === 'darshanas' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DARSHANAS_DATA.map((d) => (
            <div
              key={d.id}
              onClick={() => openTopicModal(d.name)}
              className="p-5 sm:p-6 rounded-2xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-4 flex flex-col justify-between hover:border-amber-600 transition-all hover:-translate-y-1 cursor-pointer group"
            >
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-amber-900/10 pb-2.5">
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-950 dark:text-amber-100 group-hover:text-amber-700 transition-colors flex items-center gap-1.5 break-words">
                      <span>{d.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </h3>
                    <span className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font block break-words">
                      ({d.sanskritName})
                    </span>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-600/20 text-amber-900 dark:text-amber-200 shrink-0 self-start sm:self-auto whitespace-nowrap">
                    {d.type}
                  </span>
                </div>

                <div className="text-xs font-semibold text-amber-800 dark:text-amber-400 break-words">
                  Founder / Rishi: {d.founderOrKeyRishi} • Sutra: {d.foundationalSutraText || d.foundationalText}
                </div>

                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-serif break-words">
                  {d.centralPremise}
                </p>

                {d.pramanasAccepted && d.pramanasAccepted.length > 0 && (
                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block">
                      Epistemological Means of Knowledge (Pramanas)
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {d.pramanasAccepted.map((pramana, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={(evt) => {
                            evt.stopPropagation();
                            openTopicModal(pramana);
                          }}
                          className="px-3 py-2 rounded-xl bg-amber-500/15 text-amber-900 dark:text-amber-200 hover:bg-amber-600 hover:text-white transition-all text-left min-h-[44px] flex items-center font-medium active:scale-95 break-words"
                        >
                          {pramana}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-amber-900/10 text-xs text-stone-600 dark:text-stone-400 font-serif italic break-words">
                <span className="font-bold font-sans not-italic text-amber-900 dark:text-amber-300">View on Moksha:</span> {d.viewOnMoksha}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'debates' && (
        <div className="space-y-6">
          <div className="p-5 sm:p-6 bg-amber-100/50 dark:bg-stone-900 border border-amber-800/20 rounded-2xl space-y-2">
            <h2 className="font-serif text-2xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
              शास्त्रार्थः • Historic Philosophical Debates
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
              In Sanatana Dharma, truth is arrived at through rigorous respectful philosophical debate (Shastrartha) governed by standard rules of logic, textual citation, and neutral synthesis. Click any debate or school view to explore deep scriptural details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEBATE_TOPICS_DATA.map((deb) => (
              <div
                key={deb.id}
                onClick={() => openTopicModal(deb.topic)}
                className="p-5 sm:p-6 rounded-2xl bg-amber-50 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-4 flex flex-col justify-between hover:border-amber-600 transition-all cursor-pointer group"
              >
                <div className="space-y-3">
                  <div className="border-b border-amber-900/10 pb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400 block mb-0.5 break-words">
                      TOPIC: {deb.sanskritTerm}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-amber-950 dark:text-amber-100 mt-0.5 group-hover:text-amber-700 transition-colors flex items-center justify-between gap-2 break-words">
                      <span>{deb.topic}</span>
                      <ExternalLink className="w-4 h-4 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </h3>
                    <p className="text-xs text-stone-600 dark:text-stone-300 mt-1.5 font-serif leading-relaxed break-words">
                      {deb.description}
                    </p>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    {deb.positions.map((pos, pIdx) => (
                      <div
                        key={pIdx}
                        onClick={(e) => {
                          e.stopPropagation();
                          openTopicModal(pos.schoolName);
                        }}
                        className="p-3.5 bg-amber-500/10 hover:bg-amber-500/20 rounded-xl border border-amber-500/15 transition-all cursor-pointer group/pos min-h-[44px]"
                      >
                        <div className="flex items-center justify-between gap-1 font-bold text-amber-900 dark:text-amber-200 group-hover/pos:text-amber-700">
                          <span className="break-words">{pos.schoolName}</span>
                          <ExternalLink className="w-3 h-3 text-amber-600 opacity-0 group-hover/pos:opacity-100 transition-opacity shrink-0" />
                        </div>
                        <p className="text-stone-700 dark:text-stone-300 mt-1 leading-relaxed break-words">
                          {pos.viewpoint}
                        </p>
                        {pos.keyVerses && pos.keyVerses.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-2 pt-1.5 border-t border-amber-800/10">
                            {pos.keyVerses.map((verse, vIdx) => (
                              <button
                                key={vIdx}
                                onClick={(evt) => {
                                  evt.stopPropagation();
                                  openTopicModal(verse);
                                }}
                                className="px-2.5 py-1 rounded-md bg-amber-600/15 text-[10px] font-semibold text-amber-950 dark:text-amber-200 hover:bg-amber-700 hover:text-white transition-colors min-h-[32px] flex items-center break-words"
                              >
                                {verse}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 bg-amber-500/10 rounded-xl border border-amber-500/20 text-xs text-stone-800 dark:text-stone-200 font-serif break-words">
                  <span className="font-bold text-amber-900 dark:text-amber-300">Synthesis:</span> {deb.neutralSynthesis}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

