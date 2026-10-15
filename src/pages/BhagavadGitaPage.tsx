import React, { useState } from 'react';
import { GITA_CHAPTERS_DATA } from '../data/bhagavadGita';
import { useApp } from '../context/AppContext';
import { Verse, SourceCitation } from '../types';
import { CitationBadge } from '../components/common/CitationBadge';
import { SacredVerseExperience } from '../components/spiritual/SacredVerseExperience';
import { BookOpen, Bookmark, Volume2, Share2, Layers, CheckCircle2, ExternalLink } from 'lucide-react';

export const BhagavadGitaPage: React.FC = () => {
  const { bookmarks, toggleBookmark, isBookmarked, playVerseAudio, openTopicModal } = useApp();
  const [selectedChapterNumber, setSelectedChapterNumber] = useState<number>(1);
  const [selectedVerseIndex, setSelectedVerseIndex] = useState<number>(0);


  const currentChapter = GITA_CHAPTERS_DATA.find(c => c.chapterNumber === selectedChapterNumber) || GITA_CHAPTERS_DATA[0];
  const currentVerse = currentChapter.featuredVerses[selectedVerseIndex] || currentChapter.featuredVerses[0];

  const handleToggleBm = () => {
    toggleBookmark({
      id: `gita-${currentChapter.chapterNumber}-${currentVerse.verseNumber}`,
      itemType: 'gita',
      itemId: `gita-${currentChapter.chapterNumber}-${currentVerse.verseNumber}`,
      title: `Bhagavad Gita ${currentChapter.chapterNumber}.${currentVerse.verseNumber}`,
      subtitle: currentVerse.sanskrit
    });
  };

  const isBm = isBookmarked(`gita-${currentChapter.chapterNumber}-${currentVerse.verseNumber}`);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Page Title */}
      <div className="text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
          श्रीमद्भगवद्गीता • The Divine Song of Sri Krishna
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          18 Chapters and 700 Verses delivering the essence of the Upanishads through Karma Yoga, Jnana Yoga, and Bhakti Yoga on the battlefield of Kurukshetra.
        </p>
      </div>

      {/* Mobile Chapter Selector (Visible on mobile/tablets < lg) */}
      <div className="lg:hidden bg-stone-900 border border-amber-800/30 rounded-2xl p-4 shadow-md space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-serif font-bold text-amber-200 text-xs uppercase tracking-wider">
            Select Chapter (अध्यायः)
          </span>
          <span className="text-xs text-amber-400 font-mono">
            Ch {selectedChapterNumber} of 18 • {currentChapter.versesCount} Verses
          </span>
        </div>
        <select
          value={selectedChapterNumber}
          onChange={(e) => {
            setSelectedChapterNumber(Number(e.target.value));
            setSelectedVerseIndex(0);
          }}
          className="w-full p-3 rounded-xl bg-stone-800 border border-amber-800/40 text-amber-100 font-serif text-sm focus:outline-none focus:border-amber-500 min-h-[48px]"
        >
          {GITA_CHAPTERS_DATA.map((ch) => (
            <option key={ch.chapterNumber} value={ch.chapterNumber}>
              Ch {ch.chapterNumber}: {ch.title} ({ch.sanskritTitle}) — {ch.versesCount} Verses
            </option>
          ))}
        </select>
        {/* Horizontal Chapter Quick-Jump Pills for smooth finger swiping */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {GITA_CHAPTERS_DATA.map((ch) => (
            <button
              key={ch.chapterNumber}
              onClick={() => {
                setSelectedChapterNumber(ch.chapterNumber);
                setSelectedVerseIndex(0);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-serif whitespace-nowrap min-h-[38px] flex items-center justify-center active:scale-95 transition-all ${
                selectedChapterNumber === ch.chapterNumber
                  ? 'bg-amber-700 text-white font-bold shadow'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              Ch {ch.chapterNumber}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Chapter List & Verse Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chapter Selection Column (Desktop only) */}
        <div className="hidden lg:block bg-stone-900 border border-amber-800/20 rounded-2xl p-4 shadow-md space-y-3 max-h-[75vh] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-amber-900/10 pb-2 px-2">
            <span className="font-serif font-bold text-amber-100 text-sm">
              अध्यायाः (18 Chapters)
            </span>
          </div>

          <div className="space-y-1.5">
            {GITA_CHAPTERS_DATA.map((ch) => (
              <button
                key={ch.chapterNumber}
                onClick={() => {
                  setSelectedChapterNumber(ch.chapterNumber);
                  setSelectedVerseIndex(0);
                }}
                className={`w-full text-left p-3.5 rounded-xl transition-all border flex items-center justify-between min-h-[48px] active:scale-98 ${
                  selectedChapterNumber === ch.chapterNumber
                    ? 'bg-amber-700 text-white font-bold border-amber-500 shadow-md'
                    : 'bg-stone-800/60 text-stone-200 border-amber-900/10 hover:bg-stone-700'
                }`}
              >
                <div>
                  <div className="font-serif text-xs sm:text-sm">
                    {ch.chapterNumber}. {ch.title}
                  </div>
                  <div className="text-[11px] opacity-80 sanskrit-font font-serif">
                    {ch.sanskritTitle}
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-100 shrink-0 ml-2">
                  {ch.versesCount} Verses
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Chapter & Verse Viewer Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Chapter Overview Card */}
          <div className="bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 rounded-2xl p-5 sm:p-6 shadow-md space-y-4">
            <div className="border-b border-amber-900/10 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="min-w-0">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                  CHAPTER {currentChapter.chapterNumber}
                </span>
                <h2
                  onClick={() => openTopicModal(`Bhagavad Gita Chapter ${currentChapter.chapterNumber}: ${currentChapter.title}`)}
                  className="font-serif text-xl sm:text-2xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font mt-0.5 hover:text-amber-700 cursor-pointer transition-colors flex items-center gap-1.5 break-words"
                >
                  <span>{currentChapter.title} ({currentChapter.sanskritTitle})</span>
                  <ExternalLink className="w-4 h-4 text-amber-600 shrink-0" />
                </h2>

                <p className="text-xs text-amber-900/80 dark:text-amber-300 font-serif break-words">
                  Meaning: {currentChapter.meaning}
                </p>
              </div>

              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-600/20 text-amber-900 dark:text-amber-200 shrink-0 self-start sm:self-auto whitespace-nowrap">
                {currentChapter.versesCount} Verses
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif leading-relaxed break-words">
              {currentChapter.summary}
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-amber-900/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 w-full mb-1">
                Core Yoga Themes (Click to read)
              </span>
              {currentChapter.keyThemes.map((theme, idx) => (
                <button
                  key={idx}
                  onClick={() => openTopicModal(theme)}
                  className="px-3 py-2 rounded-xl bg-amber-500/15 text-amber-900 dark:text-amber-200 hover:bg-amber-600 hover:text-white transition-all text-xs font-serif font-medium min-h-[44px] flex items-center active:scale-95 break-words"
                >
                  {theme}
                </button>
              ))}
            </div>

          </div>

          {/* Verse Selector Buttons */}
          <div className="bg-amber-50/50 dark:bg-stone-900 p-4 rounded-2xl border border-amber-800/20 flex items-center gap-2 overflow-x-auto">
            <span className="text-xs font-bold font-serif text-amber-950 dark:text-amber-100 whitespace-nowrap mr-2">
              Select Verse:
            </span>
            {currentChapter.featuredVerses.map((v, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedVerseIndex(idx)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap min-h-[44px] flex items-center justify-center ${
                  selectedVerseIndex === idx
                    ? 'bg-amber-700 text-white shadow-sm'
                    : 'bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-amber-200'
                }`}
              >
                BG {currentChapter.chapterNumber}.{v.verseNumber}
              </button>
            ))}
          </div>

          {/* Active Verse Detailed Showcase via SacredVerseExperience */}
          {currentVerse && (
            <SacredVerseExperience
              title={`Bhagavad Gita ${currentChapter.chapterNumber}.${currentVerse.verseNumber}`}
              subtitle={`Chapter ${currentChapter.chapterNumber}: ${currentChapter.title} (${currentChapter.sanskritTitle})`}
              sanskrit={currentVerse.sanskrit}
              transliteration={currentVerse.transliteration}
              translation={currentVerse.translation}
              significance={currentVerse.lifeLessons?.[0]}
              sourceScripture={`Mahabharata Bhishma Parva • Gita ${currentChapter.chapterNumber}.${currentVerse.verseNumber}`}
              wordByWord={currentVerse.wordByWord}
              onSpeak={() => playVerseAudio(currentVerse.sanskrit)}
              onBookmark={handleToggleBm}
              isBookmarked={isBm}
            />
          )}
        </div>
      </div>
    </div>
  );
};
