import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { panchangService } from '../../services/panchangService';
import { audioService } from '../../services/audioService';
import { MANTRAS_DATA } from '../../data/mantras';
import { Diya } from '../common/Diya';
import {
  Sparkles,
  Volume2,
  Bookmark,
  Copy,
  Check,
  Search,
  BookOpen,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface CustomShloka {
  title: string;
  sanskrit: string;
  transliteration: string;
  translation: string;
  significance: string;
  sourceScripture?: string;
}

export const DailyShloka: React.FC = () => {
  const { toggleBookmark, isBookmarked } = useApp();
  const panchang = panchangService.getTodayPanchang();
  const todayDefaultVerse = panchang.dailyShloka;

  // Tabs: 'daily' | 'mantras'
  const [activeTab, setActiveTab] = useState<'daily' | 'mantras'>('daily');

  // Featured Daily Shloka state
  const [currentShloka] = useState<CustomShloka>({
    title: `Verse ${todayDefaultVerse.verseNumber}`,
    sanskrit: todayDefaultVerse.sanskrit,
    transliteration: todayDefaultVerse.transliteration,
    translation: todayDefaultVerse.translation,
    significance: todayDefaultVerse.lifeLessons?.[0] || 'A sacred teaching from Bhagavad Gita / Vedic literature guiding righteous action and wisdom.',
    sourceScripture: 'Bhagavad Gita / Vedic Scriptures'
  });

  const [copied, setCopied] = useState(false);

  // Mantras tab state
  const [mantraCategory, setMantraCategory] = useState<string>('All');
  const [mantraSearch, setMantraSearch] = useState<string>('');
  const [expandedMantraId, setExpandedMantraId] = useState<string | null>(null);

  const handleSpeak = (text: string) => {
    audioService.speakSanskrit(text);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Filter mantras for Treasury tab
  const filteredMantras = MANTRAS_DATA.filter(m => {
    const matchesCat = mantraCategory === 'All' || m.category === mantraCategory;
    const matchesQuery =
      mantraSearch.trim() === '' ||
      m.deity.toLowerCase().includes(mantraSearch.toLowerCase()) ||
      m.title.toLowerCase().includes(mantraSearch.toLowerCase()) ||
      m.translation.toLowerCase().includes(mantraSearch.toLowerCase()) ||
      m.sanskrit.includes(mantraSearch);
    return matchesCat && matchesQuery;
  });

  return (
    <div className="bg-gradient-to-br from-amber-100/70 via-amber-50/50 to-stone-100 dark:from-stone-900 dark:via-stone-900/90 dark:to-stone-950 border border-amber-800/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-900/15 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 text-amber-900 dark:text-amber-200 text-xs font-serif font-semibold border border-amber-800/20">
            <Diya size="sm" />
            <span>दैनिकम् श्लोकम् मन्त्रकोषश्च • Daily Shloka & Mantra Treasury</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
            Divine Shlokas & Gods-Goddesses Mantra Explorer
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl">
            Explore authentic Sanskrit shlokas and sacred mantras of all Gods and Goddesses in Devanagari script with English translation, recitation audio, and AI spiritual insights.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 bg-amber-200/50 dark:bg-stone-800/80 p-1.5 rounded-2xl border border-amber-800/20 text-xs font-serif font-medium self-start md:self-auto">
          <button
            onClick={() => setActiveTab('daily')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'daily'
                ? 'bg-amber-700 text-white font-bold shadow-md'
                : 'text-stone-700 dark:text-stone-300 hover:bg-amber-500/20'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Daily Shloka</span>
          </button>
          <button
            onClick={() => setActiveTab('mantras')}
            className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'mantras'
                ? 'bg-amber-700 text-white font-bold shadow-md'
                : 'text-stone-700 dark:text-stone-300 hover:bg-amber-500/20'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Mantra Treasury</span>
          </button>
        </div>
      </div>

      {/* ================= TAB 1: DAILY SHLOKA ================= */}
      {activeTab === 'daily' && (
        <div className="space-y-6">
          <div className="bg-amber-50/90 dark:bg-stone-900/90 border border-amber-800/20 rounded-2xl p-6 sm:p-8 shadow-inner space-y-6 relative overflow-hidden">
            {/* Top Bar Controls */}
            <div className="flex items-center justify-between border-b border-amber-900/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 font-serif">
                  {currentShloka.title} • {panchang.dateString}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSpeak(currentShloka.sanskrit)}
                  title="Recite Shloka in Sanskrit"
                  className="px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-950 dark:text-amber-200 hover:bg-amber-500/30 font-serif text-xs font-semibold flex items-center gap-1.5 transition-all"
                >
                  <Volume2 className="w-3.5 h-3.5 text-amber-700 dark:text-amber-300" />
                  <span>Recite</span>
                </button>

                <button
                  onClick={() => handleCopy(`${currentShloka.sanskrit}\n\n${currentShloka.translation}`)}
                  title="Copy Shloka Text"
                  className="p-2 rounded-xl bg-amber-500/20 text-amber-950 dark:text-amber-200 hover:bg-amber-500/30 transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>

                <button
                  onClick={() =>
                    toggleBookmark({
                      id: `daily-shloka-${currentShloka.title}`,
                      itemId: `daily-shloka-${currentShloka.title}`,
                      itemType: 'gita',
                      title: currentShloka.title,
                      subtitle: currentShloka.translation
                    })
                  }
                  title="Bookmark Shloka"
                  className="p-2 rounded-xl bg-amber-500/20 text-amber-950 dark:text-amber-200 hover:bg-amber-500/30 transition-all"
                >
                  <Bookmark
                    className={`w-3.5 h-3.5 ${
                      isBookmarked(`daily-shloka-${currentShloka.title}`) ? 'fill-current text-amber-600' : ''
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Devanagari Sanskrit Display Box */}
            <div className="p-6 bg-gradient-to-br from-amber-100/60 to-amber-50/30 dark:from-stone-800/90 dark:to-stone-900/90 rounded-2xl border border-amber-800/25 text-center space-y-3 shadow-md">
              <p className="font-serif text-2xl sm:text-3xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font whitespace-pre-line leading-relaxed">
                {currentShloka.sanskrit}
              </p>

              {currentShloka.transliteration && (
                <p className="text-xs sm:text-sm text-amber-800/90 dark:text-amber-300/90 italic font-serif">
                  {currentShloka.transliteration}
                </p>
              )}
            </div>

            {/* Translation & Significance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 font-serif text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-800/15 space-y-1.5">
                <span className="font-bold text-amber-900 dark:text-amber-300 block uppercase tracking-wider text-[11px]">
                  ENGLISH TRANSLATION
                </span>
                <p className="text-stone-800 dark:text-stone-200 leading-relaxed italic">
                  "{currentShloka.translation}"
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-800/15 space-y-1.5">
                <span className="font-bold text-amber-900 dark:text-amber-300 block uppercase tracking-wider text-[11px]">
                  SPIRITUAL SIGNIFICANCE & LIFE LESSON
                </span>
                <p className="text-stone-800 dark:text-stone-200 leading-relaxed">
                  {currentShloka.significance}
                </p>
              </div>
            </div>

            {currentShloka.sourceScripture && (
              <div className="text-right text-[11px] text-amber-800 dark:text-amber-400 font-serif font-medium pt-2 border-t border-amber-900/10">
                Source: <span className="font-bold">{currentShloka.sourceScripture}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= TAB 2: GODS & GODDESSES MANTRA TREASURY ================= */}
      {activeTab === 'mantras' && (
        <div className="space-y-6">
          {/* Controls & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between bg-amber-50/80 dark:bg-stone-900/80 p-4 rounded-2xl border border-amber-800/20">
            {/* Category Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs font-serif">
              {['All', 'Shiva', 'Vishnu & Avatars', 'Devi & Shakti', 'Ganesha & Hanuman', 'Vedic & Solar', 'Health & Wisdom'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setMantraCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
                    mantraCategory === cat
                      ? 'bg-amber-700 text-white font-bold shadow-sm'
                      : 'bg-amber-200/40 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-amber-300/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-auto min-w-0 sm:min-w-[200px]">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={mantraSearch}
                onChange={e => setMantraSearch(e.target.value)}
                placeholder="Search deity or mantra..."
                className="w-full pl-8 pr-3 py-2 bg-white dark:bg-stone-800 border border-amber-800/20 rounded-xl text-xs text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-1 focus:ring-amber-600 min-h-[38px]"
              />
            </div>
          </div>

          {/* Mantra Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredMantras.map(m => {
              const isExpanded = expandedMantraId === m.id;
              return (
                <div
                  key={m.id}
                  className="bg-amber-50/90 dark:bg-stone-900/90 border border-amber-800/20 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    {/* Card Header */}
                    <div className="flex items-start justify-between border-b border-amber-900/10 pb-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 dark:text-amber-400 block font-serif">
                          {m.category} • {m.deitySanskrit}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-amber-950 dark:text-amber-100">
                          {m.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => handleSpeak(m.sanskrit)}
                          title="Recite Mantra"
                          className="p-1.5 rounded-lg bg-amber-500/20 text-amber-900 dark:text-amber-200 hover:bg-amber-500/30"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() =>
                            toggleBookmark({
                              id: m.id,
                              itemId: m.id,
                              itemType: 'gita',
                              title: m.title,
                              subtitle: m.translation
                            })
                          }
                          title="Bookmark Mantra"
                          className="p-1.5 rounded-lg bg-amber-500/20 text-amber-900 dark:text-amber-200 hover:bg-amber-500/30"
                        >
                          <Bookmark
                            className={`w-3.5 h-3.5 ${
                              isBookmarked(m.id) ? 'fill-current text-amber-600' : ''
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* Sanskrit Box */}
                    <div className="p-4 bg-gradient-to-br from-amber-100/70 to-amber-50/40 dark:from-stone-800 dark:to-stone-900 rounded-xl border border-amber-800/15 text-center space-y-1">
                      <p className="font-serif text-lg sm:text-xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font whitespace-pre-line leading-relaxed">
                        {m.sanskrit}
                      </p>
                      <p className="text-[11px] text-amber-800 dark:text-amber-300 italic font-serif">
                        {m.transliteration}
                      </p>
                    </div>

                    {/* Translation */}
                    <div className="text-xs font-serif text-stone-800 dark:text-stone-200 leading-relaxed">
                      <span className="font-bold text-amber-900 dark:text-amber-300">Meaning:</span> "{m.translation}"
                    </div>

                    {/* Collapsible Details */}
                    {isExpanded && (
                      <div className="space-y-2 pt-2 border-t border-amber-900/10 text-xs font-serif animate-fadeIn">
                        <div className="p-3 bg-amber-500/10 rounded-xl space-y-1">
                          <span className="font-bold text-amber-900 dark:text-amber-300 block">Significance:</span>
                          <p className="text-stone-700 dark:text-stone-300">{m.significance}</p>
                        </div>

                        <div className="p-3 bg-amber-500/10 rounded-xl space-y-1">
                          <span className="font-bold text-amber-900 dark:text-amber-300 block">Benefits & Best Time:</span>
                          <p className="text-stone-700 dark:text-stone-300">{m.chantingBenefits} {m.bestTime && `• Best Time: ${m.bestTime}`}</p>
                        </div>

                        {m.sourceScripture && (
                          <div className="text-right text-[10px] text-amber-800 dark:text-amber-400 font-medium">
                            Scripture Source: {m.sourceScripture}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Toggle Action */}
                  <div className="pt-3 border-t border-amber-900/10 flex items-center justify-between text-xs font-serif">
                    <button
                      onClick={() => setExpandedMantraId(isExpanded ? null : m.id)}
                      className="text-amber-800 dark:text-amber-300 font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Significance & Benefits'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
