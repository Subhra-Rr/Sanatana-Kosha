import React, { useState } from 'react';
import { SANSKRIT_LESSONS_DATA } from '../data/sanskrit';
import { audioService } from '../services/audioService';
import { useApp } from '../context/AppContext';
import { Volume2, GraduationCap, CheckCircle2, RefreshCw, Sparkles } from 'lucide-react';

export const SanskritPage: React.FC = () => {
  const { openTopicModal } = useApp();
  const [selectedLessonIdx, setSelectedLessonIdx] = useState(0);
  const [practiceAnswer, setPracticeAnswer] = useState('');
  const [quizScore, setQuizScore] = useState<number | null>(null);

  const lesson = SANSKRIT_LESSONS_DATA[selectedLessonIdx];

  const handleSpeak = (text: string) => {
    audioService.speakSanskrit(text);
  };


  const handleCheckQuiz = () => {
    if (practiceAnswer.toLowerCase().trim() === 'a' || practiceAnswer.toLowerCase().trim() === 'vowel') {
      setQuizScore(100);
    } else {
      setQuizScore(0);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Title */}
      <div className="text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
          संस्कृतशिक्षाहबः • Sanskrit Learning Hub
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          Master Devanagari phonetics, vowel/consonant grids, Paninian grammar principles, Subhashita gems, and verse recitations.
        </p>
      </div>

      {/* Lesson Selector Tabs */}
      <div className="flex items-center justify-center gap-2 border-b border-amber-900/15 pb-4">
        {SANSKRIT_LESSONS_DATA.map((l, idx) => (
          <button
            key={l.id}
            onClick={() => setSelectedLessonIdx(idx)}
            className={`px-5 py-2.5 rounded-xl font-serif text-sm transition-all ${
              selectedLessonIdx === idx
                ? 'bg-amber-700 text-white font-bold shadow-md'
                : 'bg-amber-100/60 dark:bg-stone-900 text-stone-800 dark:text-stone-200 hover:bg-amber-200'
            }`}
          >
            {l.title}
          </button>
        ))}
      </div>

      {/* Active Lesson Content */}
      <div className="bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="border-b border-amber-900/10 pb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400">
            LEVEL: {lesson.level} • CATEGORY: {lesson.category}
          </span>
          <h2 className="font-serif text-3xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font mt-0.5">
            {lesson.title}
          </h2>
        </div>

        <p className="text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed font-serif">
          {lesson.content}
        </p>

        {/* Examples Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {lesson.examples.map((ex, idx) => (
            <div key={idx} className="p-4 bg-amber-100/60 dark:bg-stone-800/60 rounded-2xl border border-amber-900/15 space-y-2 flex items-start justify-between">
              <div className="space-y-1">
                <span className="font-serif text-xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font whitespace-pre-line block">
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
                onClick={() => handleSpeak(ex.sanskrit)}
                className="p-2 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-200 hover:bg-amber-500/30 transition-colors"
                title="Pronounce Sound"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Practice Quiz Section */}
      <div className="bg-gradient-to-br from-amber-100/80 to-amber-200/50 dark:from-stone-900 dark:to-stone-950 border border-amber-800/30 rounded-2xl p-6 shadow-md space-y-4">
        <div className="border-b border-amber-900/10 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-amber-600" /> Interactive Sanskrit Drill
          </span>
          <h3 className="font-serif text-lg font-bold text-amber-950 dark:text-amber-100 mt-1">
            Question: What is the articulation place of the letter "अ" (Short a)?
          </h3>
        </div>

        <div className="space-y-2 text-xs">
          <p className="text-stone-700 dark:text-stone-300 font-serif">
            Is it A) Kanthya (Throat/Guttural) or B) Oshthya (Lips/Labial)? Type "A" or "Kanthya":
          </p>
          <div className="flex items-center gap-2 max-w-md">
            <input
              type="text"
              value={practiceAnswer}
              onChange={(e) => setPracticeAnswer(e.target.value)}
              placeholder="Your answer..."
              className="flex-1 bg-stone-100 dark:bg-stone-800 border border-amber-900/20 rounded-xl px-3 py-2 text-xs outline-none"
            />
            <button
              onClick={handleCheckQuiz}
              className="px-4 py-2 rounded-xl bg-amber-700 text-white font-serif font-bold hover:bg-amber-800 text-xs"
            >
              Verify
            </button>
          </div>

          {quizScore !== null && (
            <div className={`p-3 rounded-xl text-xs font-bold ${quizScore === 100 ? 'bg-emerald-500/20 text-emerald-900 dark:text-emerald-200' : 'bg-rose-500/20 text-rose-900 dark:text-rose-200'}`}>
              {quizScore === 100 ? 'Correct! "अ" is indeed Kanthya (Guttural sound from throat).' : 'Incorrect. Try again! "अ" originates from Kanthya (Throat).'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
