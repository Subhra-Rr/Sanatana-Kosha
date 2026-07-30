import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { storageService } from '../services/storageService';
import { Bookmark, BookOpen, Trash2, Clock, CheckCircle2, ExternalLink } from 'lucide-react';

export const MyLibraryPage: React.FC = () => {
  const { bookmarks, toggleBookmark, readingProgress, openTopicModal } = useApp();
  const [personalNotes, setPersonalNotes] = useState<Record<string, string>>({});


  useEffect(() => {
    // Load personal study notes for bookmarked items
    const loadNotes = async () => {
      const map: Record<string, string> = {};
      for (const b of bookmarks) {
        const note = await storageService.getNote(b.itemId);
        if (note) map[b.itemId] = note;
      }
      setPersonalNotes(map);
    };
    loadNotes();
  }, [bookmarks]);

  const handleSaveNote = async (itemId: string, noteText: string) => {
    await storageService.saveNote(itemId, noteText);
    setPersonalNotes(prev => ({ ...prev, [itemId]: noteText }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
          मम पुस्तकालयम् • My Personal Library
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          Your personal offline-ready repository for bookmarked verses, reading progress, study reflections, and research notes stored locally in IndexedDB.
        </p>
      </div>

      {/* Bookmarks & Reading Progress */}
      <div className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-amber-950 dark:text-amber-100 flex items-center gap-2 border-b border-amber-900/15 pb-3">
          <Bookmark className="w-5 h-5 text-amber-600" /> Bookmarked Verses & Articles ({bookmarks.length})
        </h2>

        {bookmarks.length === 0 ? (
          <div className="text-center py-12 bg-amber-50/50 dark:bg-stone-900 rounded-2xl border border-amber-900/15 space-y-2">
            <Bookmark className="w-8 h-8 text-amber-600/40 mx-auto" />
            <p className="text-sm font-serif text-stone-600 dark:text-stone-400">
              You haven't bookmarked any verses yet. Click the bookmark icon on any Gita verse or Upanishadic mantra to save it here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookmarks.map((bm) => (
              <div
                key={bm.itemId}
                className="p-6 rounded-2xl bg-amber-50 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-amber-900/10 pb-2">
                    <button
                      onClick={() => openTopicModal(bm.title)}
                      className="font-serif font-bold text-amber-950 dark:text-amber-100 text-base hover:text-amber-700 transition-colors flex items-center gap-1.5 text-left"
                    >
                      <span>{bm.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-amber-600" />
                    </button>

                    <button
                      onClick={() => toggleBookmark(bm)}
                      className="p-1.5 rounded-full text-rose-600 hover:bg-rose-500/10"
                      title="Remove Bookmark"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-stone-700 dark:text-stone-300 font-serif leading-relaxed">
                    {bm.subtitle}
                  </p>

                  {/* Personal Note Area */}
                  <div className="space-y-1.5 pt-2 border-t border-amber-900/10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                      Personal Study Note
                    </span>
                    <textarea
                      value={personalNotes[bm.itemId] || ''}
                      onChange={(e) => setPersonalNotes({ ...personalNotes, [bm.itemId]: e.target.value })}
                      onBlur={(e) => handleSaveNote(bm.itemId, e.target.value)}
                      placeholder="Add personal reflections or study notes..."
                      className="w-full p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 border border-amber-900/20 text-xs font-serif outline-none h-20 resize-none text-stone-900 dark:text-stone-100"
                    />
                  </div>
                </div>

                <div className="text-[10px] text-stone-500 font-serif pt-2 border-t border-amber-900/10 flex items-center justify-between">
                  <span>Saved on: {new Date(bm.timestamp).toLocaleDateString()}</span>
                  <span className="text-amber-800 dark:text-amber-400 font-bold capitalize">{bm.itemType}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
