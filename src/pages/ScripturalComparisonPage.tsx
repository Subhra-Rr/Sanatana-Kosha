import React, { useState } from 'react';
import { SCRIPTURAL_COMPARISON_DATA } from '../data/scripturalComparison';
import { CitationBadge } from '../components/common/CitationBadge';
import { Layers, BookOpen, Compass, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

export const ScripturalComparisonPage: React.FC = () => {
  const [selectedConceptId, setSelectedConceptId] = useState(SCRIPTURAL_COMPARISON_DATA[0].conceptId);

  const activeConcept = SCRIPTURAL_COMPARISON_DATA.find(c => c.conceptId === selectedConceptId) || SCRIPTURAL_COMPARISON_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-fade-in">
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-600/30 text-amber-800 dark:text-amber-300 text-xs font-serif font-semibold">
          <Layers className="w-3.5 h-3.5 text-amber-600" />
          <span>Cross-Scriptural Comparative Analysis</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-amber-950 dark:text-amber-100 sanskrit-font">
          शास्त्र तुलना मीमांसा
        </h1>
        <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base font-serif leading-relaxed">
          Compare core philosophical pillars across the Vedas, Upanishads, Bhagavad Gita, Puranas, and the Six Darshanas side-by-side.
        </p>
      </div>

      {/* Concept Selector Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {SCRIPTURAL_COMPARISON_DATA.map(concept => (
          <button
            key={concept.conceptId}
            onClick={() => setSelectedConceptId(concept.conceptId)}
            className={`px-5 py-2.5 rounded-2xl font-serif text-xs sm:text-sm font-semibold transition-all whitespace-nowrap min-h-[42px] flex items-center gap-2 ${
              selectedConceptId === concept.conceptId
                ? 'bg-amber-800 text-white shadow-lg border border-amber-600'
                : 'bg-amber-100/70 dark:bg-stone-900 text-stone-800 dark:text-stone-300 hover:bg-amber-200 dark:hover:bg-stone-800 border border-amber-800/15'
            }`}
          >
            <span>{concept.conceptName}</span>
            <span className="text-[10px] opacity-80 sanskrit-font">({concept.sanskritName})</span>
          </button>
        ))}
      </div>

      {/* Overview Banner */}
      <div className="p-6 rounded-3xl bg-amber-100/80 dark:bg-stone-900/90 border border-amber-800/20 dark:border-amber-500/20 shadow-xl space-y-3">
        <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-serif font-bold text-lg sm:text-xl">
          <Sparkles className="w-5 h-5 text-amber-600" />
          <span>Core Question: {activeConcept.coreQuestion}</span>
        </div>
        <p className="text-stone-700 dark:text-stone-300 text-sm font-serif leading-relaxed">
          {activeConcept.summaryOverview}
        </p>
      </div>

      {/* Grid Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeConcept.textComparisons.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-4 flex flex-col justify-between hover:border-amber-600 transition-all hover:-translate-y-1"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-amber-900/10 pb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400 px-2 py-0.5 rounded bg-amber-600/15">
                  {item.scriptureCategory}
                </span>
                <span className="text-xs font-serif text-stone-500 dark:text-stone-400 font-medium">
                  {item.keyTextName}
                </span>
              </div>

              <p className="text-stone-800 dark:text-stone-200 text-xs sm:text-sm font-serif leading-relaxed">
                {item.viewpointSummary}
              </p>

              {/* Quote Block */}
              <div className="p-4 rounded-xl bg-amber-200/50 dark:bg-stone-950/80 border border-amber-800/20 space-y-2">
                <p className="font-serif text-xs text-amber-950 dark:text-amber-100 font-bold sanskrit-font leading-relaxed">
                  "{item.representativeQuote.sanskrit}"
                </p>
                <p className="text-stone-700 dark:text-stone-300 text-[11px] font-serif italic">
                  "{item.representativeQuote.translation}"
                </p>
                <div className="pt-1 text-right">
                  <span className="text-[10px] font-mono text-amber-800 dark:text-amber-400">
                    — {item.representativeQuote.reference}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] text-amber-800 dark:text-amber-300 font-serif border-t border-amber-900/10">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" /> Standard Canonical Citation
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
