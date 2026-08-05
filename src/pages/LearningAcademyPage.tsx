import React, { useState } from 'react';
import { LEARNING_ACADEMY_COURSES, AcademyCourse, AcademyLesson, AcademyQuizQuestion } from '../data/learningAcademy';
import { GraduationCap, BookOpen, CheckCircle, Award, Play, Sparkles, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const LearningAcademyPage: React.FC = () => {
  const { playVerseAudio } = useApp();
  const [selectedCourseId, setSelectedCourseId] = useState(LEARNING_ACADEMY_COURSES[0].id);
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({});

  const activeCourse = LEARNING_ACADEMY_COURSES.find(c => c.id === selectedCourseId) || LEARNING_ACADEMY_COURSES[0];
  const activeLesson = activeCourse.lessons[activeLessonIndex] || activeCourse.lessons[0];

  const handleOptionSelect = (questionId: string, optionIdx: number) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleCheckQuiz = (questionId: string) => {
    setQuizSubmitted(prev => ({ ...prev, [questionId]: true }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-600/30 text-amber-800 dark:text-amber-300 text-xs font-serif font-semibold">
          <GraduationCap className="w-4 h-4 text-amber-600" />
          <span>Sanatana Kosha Learning Academy</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-amber-950 dark:text-amber-100 sanskrit-font">
          विद्या गुरुकुलम्
        </h1>
        <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base font-serif leading-relaxed">
          Structured learning pathways, authentic scriptural lessons, and interactive knowledge quizzes.
        </p>
      </div>

      {/* Course Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {LEARNING_ACADEMY_COURSES.map(course => (
          <button
            key={course.id}
            onClick={() => {
              setSelectedCourseId(course.id);
              setActiveLessonIndex(0);
            }}
            className={`p-5 rounded-2xl text-left border transition-all flex flex-col justify-between space-y-3 ${
              selectedCourseId === course.id
                ? 'bg-amber-800 text-white border-amber-600 shadow-xl ring-2 ring-amber-500/50'
                : 'bg-amber-50/90 dark:bg-stone-900 text-stone-800 dark:text-stone-200 border-amber-800/20 hover:border-amber-600'
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-1">
                <span className={`px-2 py-0.5 rounded font-bold uppercase text-[10px] ${
                  selectedCourseId === course.id ? 'bg-amber-600 text-white' : 'bg-amber-500/20 text-amber-900 dark:text-amber-300'
                }`}>
                  {course.category}
                </span>
                <span className="opacity-80 font-mono text-[11px]">{course.estimatedDuration}</span>
              </div>
              <h3 className="font-serif text-lg font-bold mt-1">{course.courseTitle}</h3>
              <span className="text-xs opacity-80 sanskrit-font">({course.sanskritTitle})</span>
              <p className="text-xs opacity-90 font-serif mt-2 line-clamp-2">{course.description}</p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-current/10 text-xs font-serif">
              <span>{course.lessons.length} Lessons</span>
              <span className="font-bold flex items-center gap-1">
                Start Course <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Course Active Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left: Lessons Navigation Sidebar */}
        <div className="lg:col-span-1 bg-amber-100/60 dark:bg-stone-900/80 rounded-2xl border border-amber-800/20 p-4 space-y-3 h-fit">
          <h4 className="font-serif font-bold text-sm text-amber-950 dark:text-amber-200 uppercase tracking-widest border-b border-amber-900/15 pb-2">
            Course Curriculum
          </h4>
          <div className="space-y-1.5">
            {activeCourse.lessons.map((lesson, idx) => (
              <button
                key={lesson.id}
                onClick={() => setActiveLessonIndex(idx)}
                className={`w-full p-3 rounded-xl text-left text-xs font-serif transition-all flex items-center gap-2.5 ${
                  activeLessonIndex === idx
                    ? 'bg-amber-700 text-white font-bold shadow-md'
                    : 'bg-stone-200/60 dark:bg-stone-800/80 text-stone-800 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  activeLessonIndex === idx ? 'bg-amber-900 text-amber-200' : 'bg-amber-500/20 text-amber-800 dark:text-amber-300'
                }`}>
                  {idx + 1}
                </span>
                <span className="flex-1 truncate">{lesson.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Active Lesson & Quiz Container */}
        <div className="lg:col-span-3 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-xl space-y-6">
            <div className="border-b border-amber-900/15 pb-4 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                Lesson {activeLesson.lessonNumber} of {activeCourse.lessons.length}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-950 dark:text-amber-100">
                {activeLesson.title}
              </h2>
              {activeLesson.sanskritTitle && (
                <p className="text-xs text-amber-800 dark:text-amber-300 sanskrit-font font-serif">
                  ({activeLesson.sanskritTitle})
                </p>
              )}
            </div>

            <p className="text-stone-800 dark:text-stone-200 font-serif text-sm sm:text-base leading-relaxed">
              {activeLesson.summary}
            </p>

            {/* Key Insights List */}
            <div className="space-y-2">
              <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-amber-900 dark:text-amber-300">
                Key Lesson Insights
              </h4>
              <ul className="space-y-2">
                {activeLesson.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-serif text-stone-700 dark:text-stone-300">
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Optional Sanskrit Shloka Box */}
            {activeLesson.sanskritShloka && (
              <div className="p-5 rounded-2xl bg-amber-200/50 dark:bg-stone-950/80 border border-amber-800/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-900 dark:text-amber-300">
                    Sacred Verse Study
                  </span>
                  <button
                    onClick={() => playVerseAudio(activeLesson.sanskritShloka!.text)}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-700 text-white text-xs font-serif font-medium shadow hover:bg-amber-600"
                  >
                    <Play className="w-3.5 h-3.5" /> Listen Audio
                  </button>
                </div>
                <p className="font-serif text-sm sm:text-base font-bold text-amber-950 dark:text-amber-100 sanskrit-font leading-relaxed">
                  {activeLesson.sanskritShloka.text}
                </p>
                <p className="text-xs font-serif italic text-stone-700 dark:text-stone-300">
                  Translation: "{activeLesson.sanskritShloka.translation}"
                </p>
              </div>
            )}

            {/* Interactive Lesson Quiz */}
            {activeLesson.quiz.length > 0 && (
              <div className="pt-6 border-t border-amber-900/15 space-y-6">
                <div className="flex items-center gap-2 font-serif font-bold text-lg text-amber-950 dark:text-amber-200">
                  <Award className="w-5 h-5 text-amber-600" />
                  <span>Knowledge Check Quiz</span>
                </div>

                {activeLesson.quiz.map((q, qIdx) => {
                  const isSubmitted = quizSubmitted[q.id];
                  const selected = userAnswers[q.id];
                  const isCorrect = selected === q.correctAnswer;

                  return (
                    <div key={q.id} className="p-5 rounded-2xl bg-amber-100/50 dark:bg-stone-800/50 border border-amber-800/15 space-y-4">
                      <p className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100">
                        {qIdx + 1}. {q.questionText}
                      </p>

                      {q.sanskritSnippet && (
                        <p className="p-3 rounded-xl bg-amber-200/60 dark:bg-stone-900 text-amber-950 dark:text-amber-200 font-serif font-bold text-xs sanskrit-font">
                          "{q.sanskritSnippet}"
                        </p>
                      )}

                      {q.options && (
                        <div className="space-y-2">
                          {q.options.map((opt, optIdx) => (
                            <button
                              key={optIdx}
                              onClick={() => !isSubmitted && handleOptionSelect(q.id, optIdx)}
                              className={`w-full p-3 rounded-xl text-left text-xs font-serif transition-all border ${
                                selected === optIdx
                                  ? 'bg-amber-700 text-white font-bold border-amber-600'
                                  : 'bg-stone-100 dark:bg-stone-900 text-stone-800 dark:text-stone-200 border-amber-800/10 hover:border-amber-600'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}

                      {!isSubmitted ? (
                        <button
                          onClick={() => handleCheckQuiz(q.id)}
                          disabled={selected === undefined}
                          className="px-4 py-2 rounded-xl bg-amber-800 text-white text-xs font-serif font-bold disabled:opacity-50 hover:bg-amber-700"
                        >
                          Check Answer
                        </button>
                      ) : (
                        <div className={`p-3 rounded-xl text-xs font-serif space-y-1 ${
                          isCorrect ? 'bg-emerald-500/20 text-emerald-900 dark:text-emerald-200 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-900 dark:text-rose-200 border border-rose-500/30'
                        }`}>
                          <p className="font-bold">
                            {isCorrect ? '✓ Correct Answer!' : '✗ Not quite right.'}
                          </p>
                          <p className="opacity-90">{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
