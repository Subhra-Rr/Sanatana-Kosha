import React, { useState } from 'react';
import { RAMAYANA_SECTIONS, MAHABHARATA_SECTIONS, MAJOR_EPIC_CHARACTERS } from '../data/epics';
import { useApp } from '../context/AppContext';
import { BookOpen, User, MapPin, Shield, Layers, ExternalLink } from 'lucide-react';

export const EpicsPage: React.FC = () => {
  const { openTopicModal } = useApp();
  const [activeTab, setActiveTab] = useState<'ramayana' | 'mahabharata' | 'characters'>('ramayana');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Title */}
      <div className="text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
          इतिहासः • Ramayana & Mahabharata
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          The two timeless Itihasa epics preserving the ideal life of Sri Rama, the ethical complexity of the Kurukshetra war, and lessons on Dharma. Click any card or event to explore in-depth knowledge.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-2 border-b border-amber-900/15 pb-4">
        <button
          onClick={() => setActiveTab('ramayana')}
          className={`px-5 py-2.5 rounded-xl font-serif text-sm transition-all ${
            activeTab === 'ramayana'
              ? 'bg-amber-700 text-white font-bold shadow-md'
              : 'bg-amber-100/60 dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-amber-200'
          }`}
        >
          Valmiki Ramayana (7 Kandas)
        </button>
        <button
          onClick={() => setActiveTab('mahabharata')}
          className={`px-5 py-2.5 rounded-xl font-serif text-sm transition-all ${
            activeTab === 'mahabharata'
              ? 'bg-amber-700 text-white font-bold shadow-md'
              : 'bg-amber-100/60 dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-amber-200'
          }`}
        >
          Mahabharata (18 Parvas)
        </button>
        <button
          onClick={() => setActiveTab('characters')}
          className={`px-5 py-2.5 rounded-xl font-serif text-sm transition-all ${
            activeTab === 'characters'
              ? 'bg-amber-700 text-white font-bold shadow-md'
              : 'bg-amber-100/60 dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-amber-200'
          }`}
        >
          Epic Personalities & Figures
        </button>
      </div>

      {/* Ramayana View */}
      {activeTab === 'ramayana' && (
        <div className="space-y-6">
          <div className="p-6 bg-amber-100/50 dark:bg-stone-900 border border-amber-800/20 rounded-2xl space-y-2">
            <h2 className="font-serif text-2xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
              श्रीमद्वाल्मीकीयरामायणम् • The Journey of Sri Rama
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
              Composed by Adi Kavi Maharshi Valmiki in 24,000 verses across 7 Kandas (books), Ramayana presents Maryada Purushottama Sri Rama as the living embodiment of righteousness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RAMAYANA_SECTIONS.map((kanda) => (
              <div
                key={kanda.id}
                onClick={() => openTopicModal(kanda.sectionName)}
                className="p-6 rounded-2xl bg-amber-50 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-3 flex flex-col justify-between hover:border-amber-600 transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-amber-900/10 pb-2">
                    <span className="font-serif text-lg font-bold text-amber-950 dark:text-amber-100 group-hover:text-amber-700 transition-colors flex items-center gap-1">
                      {kanda.sectionName}
                      <ExternalLink className="w-3.5 h-3.5 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <span className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font">
                      ({kanda.sanskritName})
                    </span>
                  </div>

                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
                    {kanda.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-900/10 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                    Key Events & Milestones (Click to read)
                  </span>
                  <div className="flex flex-wrap gap-1 text-[11px]">
                    {kanda.keyEvents.map((e, idx) => (
                      <button
                        key={idx}
                        onClick={(evt) => {
                          evt.stopPropagation();
                          openTopicModal(e);
                        }}
                        className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-900 dark:text-amber-200 hover:bg-amber-600 hover:text-white transition-colors text-left"
                      >
                        • {e}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mahabharata View */}
      {activeTab === 'mahabharata' && (
        <div className="space-y-6">
          <div className="p-6 bg-amber-100/50 dark:bg-stone-900 border border-amber-800/20 rounded-2xl space-y-2">
            <h2 className="font-serif text-2xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
              महाभारतम् • The Great Epic of Bharat
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
              Composed by Maharshi Veda Vyasa containing 100,000 verses across 18 Parvas (books), Mahabharata contains the Bhagavad Gita, Sanatsujatiya, Anugita, and Vishnu Sahasranama.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MAHABHARATA_SECTIONS.map((parva) => (
              <div
                key={parva.id}
                onClick={() => openTopicModal(parva.sectionName)}
                className="p-6 rounded-2xl bg-amber-50 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-3 flex flex-col justify-between hover:border-amber-600 transition-all hover:-translate-y-1 cursor-pointer group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-amber-900/10 pb-2">
                    <span className="font-serif text-lg font-bold text-amber-950 dark:text-amber-100 group-hover:text-amber-700 transition-colors flex items-center gap-1">
                      {parva.sectionName}
                      <ExternalLink className="w-3.5 h-3.5 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <span className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font">
                      ({parva.sanskritName})
                    </span>
                  </div>

                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
                    {parva.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-900/10 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                    Notable Episodes (Click to read)
                  </span>
                  <div className="flex flex-wrap gap-1 text-[11px]">
                    {parva.keyEvents.map((e, idx) => (
                      <button
                        key={idx}
                        onClick={(evt) => {
                          evt.stopPropagation();
                          openTopicModal(e);
                        }}
                        className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-900 dark:text-amber-200 hover:bg-amber-600 hover:text-white transition-colors text-left"
                      >
                        • {e}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Epic Characters View */}
      {activeTab === 'characters' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MAJOR_EPIC_CHARACTERS.map((char) => (
            <div
              key={char.id}
              onClick={() => openTopicModal(char.name)}
              className="p-6 rounded-2xl bg-amber-50 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-3 flex flex-col justify-between hover:border-amber-600 transition-all hover:-translate-y-1 cursor-pointer group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-amber-900/10 pb-2">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-amber-950 dark:text-amber-100 group-hover:text-amber-700 transition-colors flex items-center gap-1.5">
                      {char.name}
                      <ExternalLink className="w-3.5 h-3.5 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <span className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font">
                      ({char.sanskritName})
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-600/20 text-amber-900 dark:text-amber-200 font-medium">
                    {char.epic}
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-amber-800 dark:text-amber-400">
                  Lineage: {char.lineage}
                </div>

                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
                  {char.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-amber-900/10 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                  Key Qualities
                </span>
                <div className="flex flex-wrap gap-1 text-[11px]">
                  {char.keyQualities.map((q, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-900 dark:text-amber-200">
                      {q}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

