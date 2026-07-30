import React, { useState } from 'react';
import { SourceCitation } from '../../types';
import { BookOpen, ExternalLink, Info } from 'lucide-react';

export const CitationBadge: React.FC<{ citations: SourceCitation[]; title?: string }> = ({ citations, title = 'Sources & References' }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!citations || citations.length === 0) return null;

  return (
    <div className="mt-6 pt-4 border-t border-amber-900/10 dark:border-amber-500/20 text-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300 hover:text-amber-600 font-medium transition-colors"
      >
        <BookOpen className="w-3.5 h-3.5" />
        <span>{title} ({citations.length})</span>
        <Info className="w-3 h-3 opacity-70" />
      </button>

      {isOpen && (
        <div className="mt-3 p-3 bg-stone-100 dark:bg-stone-900/80 rounded-lg border border-amber-800/20 space-y-2">
          {citations.map((c) => (
            <div key={c.id} className="p-2 bg-amber-500/5 rounded border border-amber-500/10 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-amber-900 dark:text-amber-200">{c.sourceName}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-800 dark:text-amber-300 capitalize">
                  {c.type}
                </span>
              </div>
              {c.sectionOrVerse && (
                <div className="text-stone-600 dark:text-stone-400">
                  <span className="font-medium">Section/Verse:</span> {c.sectionOrVerse}
                </div>
              )}
              {c.commentator && (
                <div className="text-stone-600 dark:text-stone-400 italic">
                  <span>Commentary:</span> {c.commentator}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
