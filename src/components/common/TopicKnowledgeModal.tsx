import React from 'react';
import { useApp } from '../../context/AppContext';
import { getTopicKnowledge, TopicKnowledgeItem } from '../../data/topicKnowledge';
import {
  X,
  BookOpen,
  Volume2,
  Sparkles,
  Bookmark,
  Compass,
  CheckCircle2,
  Share2,
  ArrowRight
} from 'lucide-react';

export const TopicKnowledgeModal: React.FC = () => {
  const {
    activeTopicModal,
    closeTopicModal,
    openTopicModal,
    playVerseAudio,
    toggleBookmark,
    isBookmarked,
    setIsAiAssistantOpen
  } = useApp();

  if (!activeTopicModal) return null;

  const item: TopicKnowledgeItem = typeof activeTopicModal === 'string'
    ? getTopicKnowledge(activeTopicModal)
    : activeTopicModal;

  const bmId = `topic-${item.id}`;
  const isSaved = isBookmarked(bmId);

  const handleToggleBookmark = () => {
    toggleBookmark({
      id: bmId,
      itemId: bmId,
      itemType: 'veda',
      title: item.title,
      subtitle: item.category
    });
  };

  const handleAskAi = () => {
    closeTopicModal();
    setIsAiAssistantOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/75 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div
        className="relative w-full max-w-3xl my-6 bg-stone-900 border border-amber-800/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-5 bg-gradient-to-r from-amber-900 via-amber-950 to-stone-900 text-amber-100 flex items-start justify-between border-b border-amber-700/30 gap-3">
          <div className="space-y-1 min-w-0 flex-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300/90 px-2 py-0.5 rounded bg-amber-800/40 border border-amber-600/30 inline-block">
              {item.category}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-50 sanskrit-font leading-snug">
              {item.title}
            </h2>
            {item.sanskritTitle && (
              <p className="text-xs text-amber-200/90 font-serif sanskrit-font">
                {item.sanskritTitle}
              </p>
            )}
          </div>

          <button
            onClick={closeTopicModal}
            className="p-2.5 rounded-lg text-amber-200/80 hover:text-white hover:bg-amber-800/50 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-stone-200 font-serif text-sm">
          {/* Origin / Scriptural Text Badge */}
          {item.originOrText && (
            <div className="text-xs font-semibold text-amber-300 flex items-center gap-2 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/15">
              <BookOpen className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>Scriptural Origin / Reference: {item.originOrText}</span>
            </div>
          )}

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="font-serif text-base font-bold text-amber-100 border-b border-amber-900/30 pb-1">
              Knowledge Overview
            </h3>
            <p className="leading-relaxed text-stone-300">
              {item.overview}
            </p>
          </div>

          {/* Key Principles / Insights */}
          {item.keyPrinciples && item.keyPrinciples.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="font-serif text-base font-bold text-amber-100 border-b border-amber-900/30 pb-1">
                Core Principles & Insights
              </h3>
              <ul className="space-y-2">
                {item.keyPrinciples.map((principle, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mantra or Shloka Card */}
          {item.mantraOrShloka && (
            <div className="p-4 sm:p-5 rounded-2xl bg-stone-950/80 border border-amber-800/25 space-y-3 shadow-inner">
              <div className="flex items-center justify-between border-b border-amber-900/20 pb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" /> Key Shloka / Mantra
                </span>
                <button
                  onClick={() => playVerseAudio(item.mantraOrShloka!.sanskrit)}
                  className="px-3 py-1 rounded-lg bg-amber-700 text-white hover:bg-amber-800 text-xs font-medium flex items-center gap-1.5 shadow-sm transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5" /> Recite Sanskrit
                </button>
              </div>

              <div className="text-center space-y-2 py-2">
                <p className="font-serif text-base sm:text-lg font-bold text-amber-100 sanskrit-font leading-relaxed whitespace-pre-line">
                  {item.mantraOrShloka.sanskrit}
                </p>
                <p className="text-xs text-amber-300 italic">
                  {item.mantraOrShloka.transliteration}
                </p>
              </div>

              <div className="pt-2 border-t border-amber-900/20 text-xs text-stone-300 leading-relaxed">
                <span className="font-bold text-amber-200">Meaning: </span>
                "{item.mantraOrShloka.translation}"
              </div>
            </div>
          )}

          {/* Spiritual Significance & Application */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {item.spiritualSignificance && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/15 space-y-1">
                <span className="text-xs font-bold text-amber-300 block uppercase tracking-wider">
                  Spiritual Significance
                </span>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {item.spiritualSignificance}
                </p>
              </div>
            )}

            {item.practicalApplication && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/15 space-y-1">
                <span className="text-xs font-bold text-amber-300 block uppercase tracking-wider">
                  Sadhana & Application
                </span>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {item.practicalApplication}
                </p>
              </div>
            )}
          </div>

          {/* Related Topics Links */}
          {item.relatedTopics && item.relatedTopics.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-amber-900/20">
              <span className="text-xs font-bold text-amber-400 block uppercase tracking-wider">
                Explore Related Topics
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {item.relatedTopics.map((rel, rIdx) => (
                  <button
                    key={rIdx}
                    onClick={() => openTopicModal(rel)}
                    className="px-3.5 py-2.5 rounded-xl bg-stone-800 text-stone-200 hover:bg-stone-700 transition-colors flex items-center gap-1 font-medium min-h-[44px] active:scale-95"
                  >
                    <span>{rel}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-stone-950/70 border-t border-amber-900/30 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleToggleBookmark}
            className={`px-4 py-2.5 min-h-[44px] rounded-xl text-xs font-medium flex items-center gap-1.5 transition-colors active:scale-95 ${
              isSaved
                ? 'bg-amber-700 text-white font-bold shadow-sm'
                : 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-200'
            }`}
          >
            <Bookmark className="w-4 h-4" />
            <span>{isSaved ? 'Saved in My Library' : 'Bookmark Topic'}</span>
          </button>

          <button
            onClick={handleAskAi}
            className="px-5 py-2.5 min-h-[44px] rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 hover:from-amber-800 hover:to-amber-950 text-xs font-semibold shadow-md flex items-center gap-2 transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Inquire further with AI Assistant</span>
          </button>
        </div>
      </div>
    </div>
  );
};
