import React, { useState } from 'react';
import { ACHARYAS_DATA } from '../data/acharyas';
import { SHANKARACHARYA_PEETHAS_DATA } from '../data/peethas';
import { SAINTS_DATA } from '../data/saints';
import { GURU_PARAMPARA_DATA } from '../data/guruParampara';
import { useApp } from '../context/AppContext';
import { Landmark, Compass, BookOpen, MapPin, ExternalLink, GitMerge, User, Sparkles } from 'lucide-react';

export const AcharyasPage: React.FC = () => {
  const { openTopicModal } = useApp();
  const [activeTab, setActiveTab] = useState<'acharyas' | 'parampara' | 'peethas' | 'saints'>('acharyas');
  const [selectedLineageId, setSelectedLineageId] = useState(GURU_PARAMPARA_DATA[0].id);

  const activeLineage = GURU_PARAMPARA_DATA.find(l => l.id === selectedLineageId) || GURU_PARAMPARA_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fade-in">
      {/* Title */}
      <div className="text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
          आचार्याः गुरुपरम्परा च • Acharyas & Lineages
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          The venerable masters, commentaries, four Shankaracharya Peethas, Bhakti mystics, and unbroken Guru Parampara lineages.
        </p>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto bg-amber-100/60 dark:bg-stone-900/80 border border-amber-800/20 rounded-2xl p-2.5 sm:p-3 shadow-xl backdrop-blur-sm">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-xs sm:text-sm font-serif">
          <button
            onClick={() => setActiveTab('acharyas')}
            className={`px-3 py-2.5 rounded-xl transition-all min-h-[44px] flex items-center justify-center font-semibold active:scale-95 ${
              activeTab === 'acharyas'
                ? 'bg-amber-700 text-white shadow-md'
                : 'bg-stone-200/60 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-300'
            }`}
          >
            Great Acharyas
          </button>
          <button
            onClick={() => setActiveTab('parampara')}
            className={`px-3 py-2.5 rounded-xl transition-all min-h-[44px] flex items-center justify-center font-semibold active:scale-95 ${
              activeTab === 'parampara'
                ? 'bg-amber-700 text-white shadow-md'
                : 'bg-stone-200/60 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-300'
            }`}
          >
            Guru Parampara Tree
          </button>
          <button
            onClick={() => setActiveTab('peethas')}
            className={`px-3 py-2.5 rounded-xl transition-all min-h-[44px] flex items-center justify-center font-semibold active:scale-95 ${
              activeTab === 'peethas'
                ? 'bg-amber-700 text-white shadow-md'
                : 'bg-stone-200/60 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-300'
            }`}
          >
            4 Mathas
          </button>
          <button
            onClick={() => setActiveTab('saints')}
            className={`px-3 py-2.5 rounded-xl transition-all min-h-[44px] flex items-center justify-center font-semibold active:scale-95 ${
              activeTab === 'saints'
                ? 'bg-amber-700 text-white shadow-md'
                : 'bg-stone-200/60 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-300'
            }`}
          >
            Bhakti Saints
          </button>
        </div>
      </div>

      {/* Acharyas Grid View */}
      {activeTab === 'acharyas' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHARYAS_DATA.map(a => (
            <div
              key={a.id}
              onClick={() => openTopicModal(a.name)}
              className="cursor-pointer p-6 rounded-3xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-xl space-y-4 hover:border-amber-600 transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 border-b border-amber-900/10 pb-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400 px-2 py-1 rounded bg-amber-600/15 max-w-full break-words inline-block leading-tight self-start">
                    {a.tradition}
                  </span>
                  <span className="text-xs font-serif text-stone-500 dark:text-stone-400 font-medium shrink-0">
                    {a.period}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-amber-950 dark:text-amber-100">
                    {a.name}
                  </h3>
                  <p className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font">
                    ({a.sanskritName})
                  </p>
                </div>

                <p className="text-xs text-stone-700 dark:text-stone-300 font-serif leading-relaxed line-clamp-3">
                  {a.biography}
                </p>

                <div className="p-3 rounded-xl bg-amber-200/40 dark:bg-stone-950/80 border border-amber-800/20 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-amber-900 dark:text-amber-300 block">
                    Key Canonical Works:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {a.majorWorks.map((w, wIdx) => (
                      <span key={wIdx} className="px-2 py-0.5 rounded bg-amber-600/15 text-amber-950 dark:text-amber-200 text-[10px] font-serif font-semibold">
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-amber-900/10 flex items-center justify-between text-xs text-amber-800 dark:text-amber-300 font-serif font-semibold">
                <span>View Full Biography & Works</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Interactive Guru Parampara Lineage Tree */}
      {activeTab === 'parampara' && (
        <div className="space-y-6">
          {/* Lineage Selector */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-1 max-w-full">
            {GURU_PARAMPARA_DATA.map(lin => (
              <button
                key={lin.id}
                onClick={() => setSelectedLineageId(lin.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-serif font-bold transition-all whitespace-nowrap shrink-0 min-h-[44px] flex items-center justify-center active:scale-95 ${
                  selectedLineageId === lin.id
                    ? 'bg-amber-800 text-white shadow-lg border border-amber-600'
                    : 'bg-amber-100/70 dark:bg-stone-900 text-stone-800 dark:text-stone-300 hover:bg-amber-200 border border-amber-800/15'
                }`}
              >
                {lin.lineageName}
              </button>
            ))}
          </div>

          {/* Lineage Overview Banner */}
          <div className="p-5 sm:p-6 rounded-3xl bg-amber-100/80 dark:bg-stone-900/90 border border-amber-800/20 shadow-xl space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3">
              <h2 className="font-serif text-2xl font-bold text-amber-950 dark:text-amber-100 break-words">
                {activeLineage.lineageName}
              </h2>
              <span className="text-xs font-serif text-amber-800 dark:text-amber-300 font-bold sanskrit-font shrink-0">
                ({activeLineage.sanskritLineageName})
              </span>
            </div>
            <p className="text-xs sm:text-sm font-serif text-stone-700 dark:text-stone-300 leading-relaxed">
              {activeLineage.description}
            </p>
            {activeLineage.foundationalMantra && (
              <p className="p-3 rounded-xl bg-amber-200/50 dark:bg-stone-950/80 font-serif text-xs font-bold text-amber-950 dark:text-amber-200 sanskrit-font break-words">
                "{activeLineage.foundationalMantra}"
              </p>
            )}
          </div>

          {/* Vertical Unbroken Lineage Chain */}
          <div className="relative pl-6 sm:pl-10 space-y-6 border-l-2 border-amber-600/40 dark:border-amber-500/40 ml-4 sm:ml-8">
            {activeLineage.nodes.map((node, nIdx) => (
              <div key={node.id} className="relative group">
                {/* Node Bullet Marker */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-amber-700 text-white border-2 border-amber-400 flex items-center justify-center text-[10px] font-bold shadow">
                  {nIdx + 1}
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-3 hover:border-amber-600 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 border-b border-amber-900/10 pb-2">
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400 px-2 py-0.5 rounded bg-amber-600/15 inline-block max-w-full break-words self-start">
                        {node.role}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-amber-950 dark:text-amber-100 mt-0.5 break-words">
                        {node.name}
                      </h3>
                      <p className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font break-words">
                        ({node.sanskritName})
                      </p>
                    </div>
                    <span className="text-xs font-mono text-stone-500 dark:text-stone-400 shrink-0">
                      {node.period} {node.location && `• ${node.location}`}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase text-amber-900 dark:text-amber-300 block">
                      Key Lineage Contributions:
                    </span>
                    <ul className="space-y-1">
                      {node.keyContributions.map((kc, kcIdx) => (
                        <li key={kcIdx} className="text-xs font-serif text-stone-700 dark:text-stone-300 flex items-start gap-1.5">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>{kc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {node.quoteOrMantra && (
                    <p className="p-2.5 rounded-xl bg-amber-200/40 dark:bg-stone-950/80 font-serif text-xs italic font-bold text-amber-950 dark:text-amber-200">
                      "{node.quoteOrMantra}"
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Shankaracharya Peethas View */}
      {activeTab === 'peethas' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SHANKARACHARYA_PEETHAS_DATA.map(p => (
            <div
              key={p.id}
              className="p-5 sm:p-6 rounded-3xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-xl space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 border-b border-amber-900/10 pb-2.5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400 bg-amber-600/15 px-2 py-1 rounded max-w-full break-words leading-tight inline-block self-start">
                  {p.cardinalDirection} PEETHAM • {p.associatedVeda}
                </span>
                <span className="text-xs font-mono text-stone-500 dark:text-stone-400 shrink-0">
                  {p.location}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-amber-950 dark:text-amber-100 break-words">
                {p.name}
              </h3>

              <p className="text-xs text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                {p.history}
              </p>

              <div className="p-4 rounded-xl bg-amber-200/40 dark:bg-stone-950/80 border border-amber-800/20 space-y-1">
                <span className="text-[10px] font-bold uppercase text-amber-900 dark:text-amber-300 block">
                  Associated Mahavakya (Great Proclamation):
                </span>
                <p className="font-serif font-bold text-xs text-amber-950 dark:text-amber-100 sanskrit-font break-words">
                  "{p.associatedMahavakya}"
                </p>
                {p.mahavakyaMeaning && (
                  <p className="text-[11px] font-serif italic text-stone-600 dark:text-stone-400 break-words">
                    "{p.mahavakyaMeaning}"
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bhakti Saints View */}
      {activeTab === 'saints' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAINTS_DATA.map(s => (
            <div
              key={s.id}
              onClick={() => openTopicModal(s.name)}
              className="cursor-pointer p-5 sm:p-6 rounded-3xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-xl space-y-4 hover:border-amber-600 transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 border-b border-amber-900/10 pb-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400 px-2 py-1 rounded bg-amber-600/15 max-w-full break-words leading-tight inline-block self-start">
                    {s.region} • {s.traditionOrMovement}
                  </span>
                  <span className="text-xs font-serif text-stone-500 dark:text-stone-400 font-medium shrink-0">
                    {s.period}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-amber-950 dark:text-amber-100 break-words">
                  {s.name}
                </h3>

                <p className="text-xs text-stone-700 dark:text-stone-300 font-serif leading-relaxed line-clamp-3">
                  {s.bio}
                </p>

                <div className="p-3 rounded-xl bg-amber-200/40 dark:bg-stone-950/80 border border-amber-800/20 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-amber-900 dark:text-amber-300 block">
                    Famous Devotional Verse:
                  </span>
                  <p className="font-serif italic text-xs text-amber-950 dark:text-amber-100 break-words">
                    "{s.famousQuoteOrAbhang.sanskritOrVernacular}"
                  </p>
                  <p className="text-[11px] font-serif text-stone-600 dark:text-stone-400 break-words">
                    "{s.famousQuoteOrAbhang.translation}"
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-amber-900/10 flex items-center justify-between text-xs text-amber-800 dark:text-amber-300 font-serif font-semibold">
                <span>Explore Saint History</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
