import React, { useState } from 'react';
import { ACHARYAS_DATA } from '../data/acharyas';
import { SHANKARACHARYA_PEETHAS_DATA } from '../data/peethas';
import { SAINTS_DATA } from '../data/saints';
import { useApp } from '../context/AppContext';
import { Landmark, Compass, BookOpen, MapPin, ExternalLink } from 'lucide-react';

export const AcharyasPage: React.FC = () => {
  const { openTopicModal } = useApp();
  const [activeTab, setActiveTab] = useState<'acharyas' | 'peethas' | 'saints'>('acharyas');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Title */}
      <div className="text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
          आचार्याः सन्तश्च • Great Acharyas & Sacred Mathas
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          The venerable teachers, commentators, and Bhakti saints who protected, revitalized, and spread Sanatana Dharma. Click any card or work to explore in-depth knowledge.
        </p>
      </div>

      {/* Tabs */}
      <div className="max-w-3xl mx-auto bg-amber-100/60 dark:bg-stone-900/80 border border-amber-800/20 rounded-2xl p-3.5 sm:p-4 shadow-xl backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-serif">
          <button
            onClick={() => setActiveTab('acharyas')}
            className={`px-3.5 sm:px-5 py-2.5 rounded-xl transition-all min-h-[42px] flex items-center justify-center ${
              activeTab === 'acharyas'
                ? 'bg-amber-700 text-white font-bold shadow-md'
                : 'bg-stone-200/60 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            Great Acharyas
          </button>
          <button
            onClick={() => setActiveTab('peethas')}
            className={`px-3.5 sm:px-5 py-2.5 rounded-xl transition-all min-h-[42px] flex items-center justify-center ${
              activeTab === 'peethas'
                ? 'bg-amber-700 text-white font-bold shadow-md'
                : 'bg-stone-200/60 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            4 Shankaracharya Peethas
          </button>
          <button
            onClick={() => setActiveTab('saints')}
            className={`px-3.5 sm:px-5 py-2.5 rounded-xl transition-all min-h-[42px] flex items-center justify-center ${
              activeTab === 'saints'
                ? 'bg-amber-700 text-white font-bold shadow-md'
                : 'bg-stone-200/60 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            Bhakti Saints & Mystics
          </button>
        </div>
      </div>

      {/* Acharyas View */}
      {activeTab === 'acharyas' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACHARYAS_DATA.map((a) => (
            <div
              key={a.id}
              onClick={() => openTopicModal(a.name)}
              className="p-4 sm:p-6 rounded-2xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-4 hover:border-amber-600 transition-all cursor-pointer group hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-900/10 pb-3">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-950 dark:text-amber-100 group-hover:text-amber-700 transition-colors flex items-center gap-1.5">
                    {a.name}
                    <ExternalLink className="w-4 h-4 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </h3>
                  <span className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font">
                    ({a.sanskritName})
                  </span>
                </div>
                <span className="self-start sm:self-auto text-xs px-2.5 py-1 rounded-lg bg-amber-600/20 text-amber-900 dark:text-amber-200 font-bold whitespace-normal leading-snug">
                  {a.period}
                </span>
              </div>

              <div className="text-xs font-semibold text-amber-800 dark:text-amber-400">
                Philosophy: {a.tradition} • Birthplace: {a.birthPlace}
              </div>

              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
                {a.biography}
              </p>

              <div className="space-y-1 pt-2 border-t border-amber-900/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                  Major Literary Works (Click to read)
                </span>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {a.majorWorks.map((w, idx) => (
                    <button
                      key={idx}
                      onClick={(evt) => {
                        evt.stopPropagation();
                        openTopicModal(w);
                      }}
                      className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-900 dark:text-amber-200 hover:bg-amber-600 hover:text-white transition-colors text-left font-medium"
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Peethas View */}
      {activeTab === 'peethas' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SHANKARACHARYA_PEETHAS_DATA.map((p) => (
            <div
              key={p.id}
              onClick={() => openTopicModal(p.name)}
              className="p-4 sm:p-6 rounded-2xl bg-amber-50 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-4 hover:border-amber-600 transition-all cursor-pointer group hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-900/10 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400">
                    {p.cardinalDirection} MATHA
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-amber-950 dark:text-amber-100 group-hover:text-amber-700 transition-colors flex items-center gap-1.5">
                    {p.name}
                    <ExternalLink className="w-3.5 h-3.5 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-xs text-amber-800 dark:text-amber-300 font-serif self-start sm:self-auto">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>{p.location}, {p.state}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs bg-amber-500/10 p-3 rounded-xl">
                <div>
                  <span className="text-stone-500 block text-[10px]">ASSOCIATED VEDA</span>
                  <span className="font-bold text-amber-950 dark:text-amber-100">{p.associatedVeda}</span>
                </div>
                <div>
                  <span className="text-stone-500 block text-[10px]">FIRST ACHARYA</span>
                  <span className="font-bold text-amber-950 dark:text-amber-100">{p.firstHead || p.firstAcharya}</span>
                </div>
              </div>

              <div className="p-3 bg-stone-100 dark:bg-stone-800 rounded-xl space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-900 dark:text-amber-300">
                  MAHAVAKYA: {p.associatedMahavakya}
                </span>
                <p className="text-xs text-stone-700 dark:text-stone-300 font-serif italic">
                  "{p.mahavakyaMeaning || 'Absolute non-dual identity of Self and Reality'}"
                </p>
              </div>

              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
                {p.history}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Saints View */}
      {activeTab === 'saints' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAINTS_DATA.map((s) => (
            <div
              key={s.id}
              onClick={() => openTopicModal(s.name)}
              className="p-4 sm:p-6 rounded-2xl bg-amber-50 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-3 flex flex-col justify-between hover:border-amber-600 transition-all cursor-pointer group hover:-translate-y-1"
            >
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-900/10 pb-2">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-amber-950 dark:text-amber-100 group-hover:text-amber-700 transition-colors flex items-center gap-1.5">
                      {s.name}
                      <ExternalLink className="w-3.5 h-3.5 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </h3>
                    <span className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font">
                      ({s.sanskritName})
                    </span>
                  </div>
                  <span className="self-start sm:self-auto text-xs px-2.5 py-1 rounded-lg bg-amber-600/20 text-amber-900 dark:text-amber-200 font-bold whitespace-normal leading-snug">
                    {s.period}
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-amber-800 dark:text-amber-400">
                  Region: {s.region} • Movement: {s.traditionOrMovement}
                </div>

                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
                  {s.bio}
                </p>
              </div>

              {s.famousQuoteOrAbhang && (
                <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20 text-xs font-serif text-center space-y-1">
                  <p className="font-bold text-amber-950 dark:text-amber-100 whitespace-pre-line">
                    {s.famousQuoteOrAbhang.sanskritOrVernacular}
                  </p>
                  <p className="text-[11px] text-stone-600 dark:text-stone-300 italic">
                    "{s.famousQuoteOrAbhang.translation}"
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

