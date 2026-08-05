import React, { useState } from 'react';
import { TEMPLE_ARCHITECTURE_STYLES, ANCIENT_KNOWLEDGE_SYSTEMS } from '../data/knowledgeSystems';
import { Landmark, Compass, BookOpen, Sparkles, Cpu, ShieldCheck } from 'lucide-react';

export const KnowledgeSystemsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'sciences'>('architecture');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-600/30 text-amber-800 dark:text-amber-300 text-xs font-serif font-semibold">
          <Landmark className="w-4 h-4 text-amber-600" />
          <span>Architecture & Ancient Scientific Knowledge</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-amber-950 dark:text-amber-100 sanskrit-font">
          वास्तुज्ञानम् भारतीयान्वेषणं च
        </h1>
        <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base font-serif leading-relaxed">
          Explore the architectural principles of classical Indian temples alongside historically documented ancient knowledge systems in Medicine, Mathematics, Aesthetics, and Statecraft.
        </p>
      </div>

      {/* Primary Tab Controls */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-amber-900/15 pb-4">
        <button
          onClick={() => setActiveTab('architecture')}
          className={`px-4 sm:px-5 py-2.5 rounded-2xl font-serif text-xs sm:text-sm font-semibold transition-all min-h-[44px] flex items-center justify-center gap-2 active:scale-95 ${
            activeTab === 'architecture'
              ? 'bg-amber-800 text-white shadow-lg border border-amber-600'
              : 'bg-amber-100/70 dark:bg-stone-900 text-stone-800 dark:text-stone-300 hover:bg-amber-200 border border-amber-800/15'
          }`}
        >
          <Landmark className="w-4 h-4 shrink-0" />
          <span>Temple Architecture (वास्तुशास्त्र)</span>
        </button>
        <button
          onClick={() => setActiveTab('sciences')}
          className={`px-4 sm:px-5 py-2.5 rounded-2xl font-serif text-xs sm:text-sm font-semibold transition-all min-h-[44px] flex items-center justify-center gap-2 active:scale-95 ${
            activeTab === 'sciences'
              ? 'bg-amber-800 text-white shadow-lg border border-amber-600'
              : 'bg-amber-100/70 dark:bg-stone-900 text-stone-800 dark:text-stone-300 hover:bg-amber-200 border border-amber-800/15'
          }`}
        >
          <Cpu className="w-4 h-4 shrink-0" />
          <span>Knowledge Systems (विज्ञानम्)</span>
        </button>
      </div>

      {/* Content View 1: Temple Architecture */}
      {activeTab === 'architecture' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEMPLE_ARCHITECTURE_STYLES.map(style => (
              <div
                key={style.id}
                className="p-6 rounded-3xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="border-b border-amber-900/10 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400">
                      {style.geographicalRegion}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-amber-950 dark:text-amber-100">
                      {style.styleName}
                    </h3>
                    <p className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font">
                      ({style.sanskritName})
                    </p>
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-1.5">
                    <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-amber-900 dark:text-amber-300">
                      Key Architectural Characteristics
                    </h4>
                    <ul className="space-y-1">
                      {style.keyFeatures.map((f, fIdx) => (
                        <li key={fIdx} className="text-xs font-serif text-stone-700 dark:text-stone-300 flex items-start gap-1.5">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Defining Structures */}
                  <div className="space-y-2 pt-2 border-t border-amber-900/10">
                    {style.definingStructures.map((struct, sIdx) => (
                      <div key={sIdx} className="p-3 rounded-xl bg-amber-200/40 dark:bg-stone-950/80 space-y-0.5">
                        <p className="font-serif font-bold text-xs text-amber-950 dark:text-amber-200">
                          {struct.name} ({struct.sanskritName})
                        </p>
                        <p className="text-[11px] font-serif text-stone-600 dark:text-stone-400">
                          {struct.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-amber-900/10">
                  <span className="text-[10px] font-bold uppercase text-amber-800 dark:text-amber-400 block mb-1">
                    Notable Temple Monuments:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {style.famousExamples.map((ex, exIdx) => (
                      <span key={exIdx} className="px-2 py-0.5 rounded bg-amber-600/15 text-amber-950 dark:text-amber-200 text-[10px] font-serif font-semibold">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Content View 2: Ancient Knowledge Systems */}
      {activeTab === 'sciences' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ANCIENT_KNOWLEDGE_SYSTEMS.map(ks => (
            <div
              key={ks.id}
              className="p-6 rounded-3xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-amber-900/10 pb-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400">
                      {ks.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-amber-950 dark:text-amber-100">
                      {ks.systemName}
                    </h3>
                    <p className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font">
                      ({ks.sanskritName})
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-serif text-stone-700 dark:text-stone-300 leading-relaxed">
                  {ks.historicalImpact}
                </p>

                {/* Core Principles */}
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-amber-900 dark:text-amber-300">
                    Core Foundational Doctrines
                  </h4>
                  <ul className="space-y-1">
                    {ks.corePrinciples.map((p, pIdx) => (
                      <li key={pIdx} className="text-xs font-serif text-stone-700 dark:text-stone-300 flex items-start gap-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pioneers & Texts */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-amber-900/10 text-xs">
                  <div>
                    <span className="font-bold text-amber-900 dark:text-amber-300 block mb-0.5">Foundational Texts:</span>
                    <p className="font-serif text-stone-600 dark:text-stone-400">{ks.foundationalTexts.join(', ')}</p>
                  </div>
                  <div>
                    <span className="font-bold text-amber-900 dark:text-amber-300 block mb-0.5">Legendary Pioneers:</span>
                    <p className="font-serif text-stone-600 dark:text-stone-400">{ks.legendaryPioneers.join(', ')}</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-amber-900/10 flex items-center justify-between text-[11px] text-amber-800 dark:text-amber-300 font-serif">
                <span>Ref: {ks.scriptureReferences.join(', ')}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
