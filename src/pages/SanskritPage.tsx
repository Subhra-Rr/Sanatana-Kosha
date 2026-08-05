import React, { useState } from 'react';
import { SANSKRIT_LESSONS_DATA } from '../data/sanskrit';
import { SANSKRIT_DICTIONARY_DATA } from '../data/sanskritDictionary';
import { MANUSCRIPTS_DATA } from '../data/manuscripts';
import { audioService } from '../services/audioService';
import { useApp } from '../context/AppContext';
import {
  Volume2,
  GraduationCap,
  BookOpen,
  Search,
  FileText,
  Sparkles,
  Bookmark,
  Layers,
  Award
} from 'lucide-react';

export const SanskritPage: React.FC = () => {
  const { openTopicModal } = useApp();
  const [activeTab, setActiveTab] = useState<'dictionary' | 'lessons' | 'manuscripts'>('dictionary');
  
  // Dictionary State
  const [dictQuery, setDictQuery] = useState('');
  const [selectedDictEntryId, setSelectedDictEntryId] = useState(SANSKRIT_DICTIONARY_DATA[0].id);

  // Lesson State
  const [selectedLessonIdx, setSelectedLessonIdx] = useState(0);

  // Manuscript State
  const [selectedScriptFilter, setSelectedScriptFilter] = useState<string>('All');

  const filteredDict = SANSKRIT_DICTIONARY_DATA.filter(entry => {
    const q = dictQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      entry.word.toLowerCase().includes(q) ||
      entry.sanskrit.includes(q) ||
      entry.transliteration.toLowerCase().includes(q) ||
      entry.englishMeaning.toLowerCase().includes(q) ||
      (entry.dhatu && entry.dhatu.toLowerCase().includes(q))
    );
  });

  const selectedDictEntry = SANSKRIT_DICTIONARY_DATA.find(e => e.id === selectedDictEntryId) || filteredDict[0] || SANSKRIT_DICTIONARY_DATA[0];

  const lesson = SANSKRIT_LESSONS_DATA[selectedLessonIdx];

  const filteredManuscripts = MANUSCRIPTS_DATA.filter(m => {
    if (selectedScriptFilter === 'All') return true;
    return m.scriptUsed === selectedScriptFilter || m.category === selectedScriptFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-fade-in">
      {/* Title Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-600/30 text-amber-800 dark:text-amber-300 text-xs font-serif font-semibold">
          <GraduationCap className="w-4 h-4 text-amber-600" />
          <span>Sanskrit Philology & Manuscript Treasury</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-amber-950 dark:text-amber-100 sanskrit-font">
          संस्कृतशिक्षाहबः तथा पाण्डुलिपिभाण्डारः
        </h1>
        <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base font-serif leading-relaxed">
          Interactive Paninian Sanskrit dictionary, root (Dhatu) grammar, Devanagari phonetics, and ancient codices & temple inscriptions.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 border-b border-amber-900/15 pb-4">
        <button
          onClick={() => setActiveTab('dictionary')}
          className={`px-5 py-2.5 rounded-2xl font-serif text-xs sm:text-sm font-semibold transition-all min-h-[42px] flex items-center gap-2 ${
            activeTab === 'dictionary'
              ? 'bg-amber-800 text-white shadow-lg border border-amber-600'
              : 'bg-amber-100/70 dark:bg-stone-900 text-stone-800 dark:text-stone-300 hover:bg-amber-200 border border-amber-800/15'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>Sanskrit Dictionary (शब्दकोषः)</span>
        </button>
        <button
          onClick={() => setActiveTab('manuscripts')}
          className={`px-5 py-2.5 rounded-2xl font-serif text-xs sm:text-sm font-semibold transition-all min-h-[42px] flex items-center gap-2 ${
            activeTab === 'manuscripts'
              ? 'bg-amber-800 text-white shadow-lg border border-amber-600'
              : 'bg-amber-100/70 dark:bg-stone-900 text-stone-800 dark:text-stone-300 hover:bg-amber-200 border border-amber-800/15'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Manuscript Codex (पाण्डुलिपयः)</span>
        </button>
        <button
          onClick={() => setActiveTab('lessons')}
          className={`px-5 py-2.5 rounded-2xl font-serif text-xs sm:text-sm font-semibold transition-all min-h-[42px] flex items-center gap-2 ${
            activeTab === 'lessons'
              ? 'bg-amber-800 text-white shadow-lg border border-amber-600'
              : 'bg-amber-100/70 dark:bg-stone-900 text-stone-800 dark:text-stone-300 hover:bg-amber-200 border border-amber-800/15'
          }`}
        >
          <GraduationCap className="w-4 h-4" />
          <span>Phonetics & Lessons</span>
        </button>
      </div>

      {/* Tab 1: Interactive Sanskrit Dictionary */}
      {activeTab === 'dictionary' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Search & Word List */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-amber-700 dark:text-amber-400" />
              <input
                type="text"
                value={dictQuery}
                onChange={(e) => setDictQuery(e.target.value)}
                placeholder="Search word, transliteration, root, or meaning..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 text-xs sm:text-sm outline-none focus:border-amber-600 font-serif"
              />
            </div>

            <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1 scrollbar-none">
              {filteredDict.map(entry => (
                <button
                  key={entry.id}
                  onClick={() => setSelectedDictEntryId(entry.id)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                    selectedDictEntry.id === entry.id
                      ? 'bg-amber-800 text-white border-amber-600 shadow-md'
                      : 'bg-amber-50/90 dark:bg-stone-900/90 text-stone-800 dark:text-stone-200 border-amber-800/15 hover:border-amber-600'
                  }`}
                >
                  <div>
                    <span className="font-serif text-lg font-bold sanskrit-font block">
                      {entry.sanskrit} ({entry.transliteration})
                    </span>
                    <span className="text-xs opacity-90 line-clamp-1 font-serif">
                      {entry.englishMeaning}
                    </span>
                  </div>
                  {entry.dhatu && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
                      Root: {entry.dhatu}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Detailed Entry View */}
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-900/15 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400">
                  {selectedDictEntry.grammar}
                </span>
                <h2 className="font-serif text-3xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font flex items-center gap-3 mt-0.5">
                  {selectedDictEntry.sanskrit}
                  <span className="text-lg font-normal text-amber-800 dark:text-amber-300">
                    ({selectedDictEntry.transliteration})
                  </span>
                </h2>
              </div>
              <button
                onClick={() => audioService.speakSanskrit(selectedDictEntry.sanskrit)}
                className="p-3 rounded-full bg-amber-700 text-white hover:bg-amber-600 transition-all shadow shrink-0 self-start sm:self-auto"
                title="Listen Pronunciation"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {/* Root Dhatu Info */}
            {selectedDictEntry.dhatu && (
              <div className="p-4 rounded-2xl bg-amber-200/50 dark:bg-stone-950/80 border border-amber-800/20 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-900 dark:text-amber-300 block">
                  Etymology & Root (Dhatu) Analysis
                </span>
                <p className="font-serif text-xs text-amber-950 dark:text-amber-100">
                  <strong className="font-mono">{selectedDictEntry.dhatu}</strong> — {selectedDictEntry.dhatuMeaning}
                </p>
                {selectedDictEntry.etymologyNotes && (
                  <p className="text-[11px] font-serif text-stone-600 dark:text-stone-400 italic">
                    {selectedDictEntry.etymologyNotes}
                  </p>
                )}
              </div>
            )}

            <div className="space-y-2">
              <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-amber-900 dark:text-amber-300">
                Core Meaning & Philosophical Context
              </h4>
              <p className="font-serif text-stone-800 dark:text-stone-200 text-sm leading-relaxed">
                {selectedDictEntry.detailedDefinition}
              </p>
            </div>

            {/* Example Scripture Verses */}
            {selectedDictEntry.exampleVerses.length > 0 && (
              <div className="space-y-3 pt-2 border-t border-amber-900/15">
                <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-amber-900 dark:text-amber-300">
                  Canonical Scripture Context Verses
                </h4>
                <div className="space-y-3">
                  {selectedDictEntry.exampleVerses.map((v, vIdx) => (
                    <div key={vIdx} className="p-4 rounded-xl bg-amber-100/60 dark:bg-stone-800/60 border border-amber-900/15 space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-amber-900 dark:text-amber-300 font-serif">
                        <span>{v.scripture} ({v.verseRef})</span>
                      </div>
                      <p className="font-serif font-bold text-xs text-amber-950 dark:text-amber-100 sanskrit-font">
                        "{v.sanskritText}"
                      </p>
                      <p className="text-xs font-serif italic text-stone-700 dark:text-stone-300">
                        "{v.translation}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Manuscript & Inscriptions Codex */}
      {activeTab === 'manuscripts' && (
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {['All', 'Brahmi', 'Sharada', 'Grantha', 'Palm-Leaf Manuscript', 'Temple Inscription', 'Copper Plate Grant'].map(filter => (
              <button
                key={filter}
                onClick={() => setSelectedScriptFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-serif font-semibold transition-all whitespace-nowrap ${
                  selectedScriptFilter === filter
                    ? 'bg-amber-800 text-white shadow'
                    : 'bg-amber-100/60 dark:bg-stone-900 text-stone-800 dark:text-stone-300 border border-amber-800/15'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredManuscripts.map(ms => (
              <div
                key={ms.id}
                className="p-6 rounded-3xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-amber-900/10 pb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400 px-2 py-0.5 rounded bg-amber-600/15">
                      {ms.category} • {ms.scriptUsed} Script
                    </span>
                    <span className="text-[11px] font-serif text-amber-900 dark:text-amber-300 font-bold">
                      {ms.estimatedCentury}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-amber-950 dark:text-amber-100">
                    {ms.title}
                  </h3>
                  <p className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font">
                    ({ms.sanskritTitle})
                  </p>

                  <p className="text-xs text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                    {ms.historicalSignificance}
                  </p>

                  <div className="p-4 rounded-xl bg-amber-200/40 dark:bg-stone-950/80 border border-amber-800/20 space-y-1">
                    <span className="text-[10px] font-bold uppercase text-amber-900 dark:text-amber-300 block">
                      Scripture Content Excerpt:
                    </span>
                    <p className="font-serif font-bold text-xs text-amber-950 dark:text-amber-100 sanskrit-font">
                      "{ms.contentExcerptSanskrit}"
                    </p>
                    <p className="text-[11px] font-serif italic text-stone-600 dark:text-stone-400">
                      "{ms.contentExcerptTranslation}"
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-amber-900/10 flex items-center justify-between text-[11px] text-amber-800 dark:text-amber-300 font-serif">
                  <span>Location: {ms.currentLocation}</span>
                  <span className="px-2 py-0.5 rounded bg-amber-600/15 font-bold">
                    {ms.preservationStatus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Lessons */}
      {activeTab === 'lessons' && (
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {SANSKRIT_LESSONS_DATA.map((l, idx) => (
              <button
                key={l.id}
                onClick={() => setSelectedLessonIdx(idx)}
                className={`px-5 py-2.5 rounded-xl font-serif text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  selectedLessonIdx === idx
                    ? 'bg-amber-700 text-white font-bold shadow-md'
                    : 'bg-amber-100/60 dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-amber-200'
                }`}
              >
                {l.title}
              </button>
            ))}
          </div>

          <div className="bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <div className="border-b border-amber-900/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400">
                LEVEL: {lesson.level} • CATEGORY: {lesson.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font mt-0.5">
                {lesson.title}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed font-serif">
              {lesson.content}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {lesson.examples.map((ex, idx) => (
                <div key={idx} className="p-4 bg-amber-100/60 dark:bg-stone-800/60 rounded-2xl border border-amber-900/15 space-y-2 flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="font-serif text-lg font-bold text-amber-950 dark:text-amber-100 sanskrit-font whitespace-pre-line block">
                      {ex.sanskrit}
                    </span>
                    <span className="text-xs text-amber-800 dark:text-amber-300 font-serif italic block">
                      {ex.transliteration}
                    </span>
                    <p className="text-xs text-stone-700 dark:text-stone-300 font-serif">
                      {ex.meaning}
                    </p>
                  </div>
                  <button
                    onClick={() => audioService.speakSanskrit(ex.sanskrit)}
                    className="p-2 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-200 hover:bg-amber-500/30 transition-colors"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
