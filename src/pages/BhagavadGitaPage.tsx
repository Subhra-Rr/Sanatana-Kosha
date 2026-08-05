import React, { useState } from 'react';
import { GITA_CHAPTERS_DATA } from '../data/bhagavadGita';
import { useApp } from '../context/AppContext';
import { Verse, SourceCitation } from '../types';
import { CitationBadge } from '../components/common/CitationBadge';
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Page Title */}
      <div className="text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
          श्रीमद्भगवद्गीता • The Divine Song of Sri Krishna
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          18 Chapters and 700 Verses delivering the essence of the Upanishads through Karma Yoga, Jnana Yoga, and Bhakti Yoga on the battlefield of Kurukshetra.
        </p>
      </div>

      {/* Main Grid: Chapter List & Verse Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chapter Selection Column */}
        <div className="bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 rounded-2xl p-4 shadow-md space-y-3 max-h-[75vh] overflow-y-auto">
          <div className="flex items-center justify-between border-b border-amber-900/10 pb-2 px-2">
            <span className="font-serif font-bold text-amber-950 dark:text-amber-100 text-sm">
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
                    : 'bg-stone-100 dark:bg-stone-800/60 text-stone-800 dark:text-stone-200 border-amber-900/10 hover:bg-amber-200'
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
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-stone-900 dark:text-amber-100 shrink-0 ml-2">
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

          {/* Active Verse Detailed Showcase Card */}
          {currentVerse && (
            <div className="bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              {/* Verse Header Actions */}
              <div className="flex items-center justify-between border-b border-amber-900/10 pb-4">
                <span className="font-serif text-sm font-bold text-amber-900 dark:text-amber-300">
                  VERSE {currentChapter.chapterNumber}.{currentVerse.verseNumber}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => playVerseAudio(currentVerse.sanskrit)}
                    className="p-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 dark:text-amber-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <Volume2 className="w-4 h-4" /> Recite Sanskrit
                  </button>
                  <button
                    onClick={handleToggleBm}
                    className={`p-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors ${
                      isBm
                        ? 'bg-amber-700 text-white font-bold'
                        : 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-900 dark:text-amber-200'
                    }`}
                  >
                    <Bookmark className="w-4 h-4" /> {isBm ? 'Saved' : 'Bookmark'}
                  </button>
                </div>
              </div>

              {/* Sanskrit Verse Text */}
              <div className="p-6 bg-amber-100/50 dark:bg-stone-800/80 rounded-2xl border border-amber-900/15 text-center space-y-3">
                <p className="font-serif text-xl sm:text-2xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font leading-relaxed whitespace-pre-line">
                  {currentVerse.sanskrit}
                </p>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif italic">
                  {currentVerse.transliteration}
                </p>
              </div>

              {/* Word by Word Analysis */}
              {currentVerse.wordByWord && currentVerse.wordByWord.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                    Word-by-Word Sanskrit Analysis (Padachheda & Anvaya)
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {currentVerse.wordByWord.map((wbw, idx) => (
                      <div key={idx} className="p-2 bg-stone-100 dark:bg-stone-800/50 rounded-xl border border-amber-900/10 text-xs space-y-0.5">
                        <span className="font-bold text-amber-950 dark:text-amber-100 block sanskrit-font">{wbw.sanskrit}</span>
                        <span className="text-stone-600 dark:text-stone-300 block">{wbw.meaning}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Translation */}
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                  English Translation
                </span>
                <p className="text-sm sm:text-base font-serif text-stone-900 dark:text-stone-100 leading-relaxed p-4 bg-amber-500/5 rounded-xl border border-amber-500/10">
                  "{currentVerse.translation}"
                </p>
              </div>

              {/* Life Lessons & Practical Application */}
              {currentVerse.lifeLessons && currentVerse.lifeLessons.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-amber-900/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                    Practical Life Lessons & Mindfulness
                  </span>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-stone-700 dark:text-stone-300 font-serif">
                    {currentVerse.lifeLessons.map((lesson, idx) => (
                      <li key={idx}>{lesson}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
