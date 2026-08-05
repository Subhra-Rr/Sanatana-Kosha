import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { storageService } from '../services/storageService';
import { Bookmark, Trash2, ExternalLink, Sparkles, Filter, BookOpen } from 'lucide-react';

export const MyLibraryPage: React.FC = () => {
  const { bookmarks, toggleBookmark, openTopicModal } = useApp();
  const [personalNotes, setPersonalNotes] = useState<Record<string, string>>({});
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    // Load personal study notes for bookmarked items
    const loadNotes = async () => {
      const map: Record<string, string> = {};
      for (const b of bookmarks) {
        const id = b.itemId || b.id;
        const note = await storageService.getNote(id);
        if (note) map[id] = note;
      }
      setPersonalNotes(map);
    };
    loadNotes();
  }, [bookmarks]);

  const handleSaveNote = async (itemId: string, noteText: string) => {
    await storageService.saveNote(itemId, noteText);
    setPersonalNotes(prev => ({ ...prev, [itemId]: noteText }));
  };

  const filteredBookmarks = bookmarks.filter(bm => {
    const matchesCategory =
      selectedFilter === 'all' ||
      (bm.itemType && bm.itemType.toLowerCase().includes(selectedFilter.toLowerCase()));
    
    const matchesQuery =
      !searchQuery.trim() ||
      bm.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (bm.subtitle && bm.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 sm:space-y-10 overflow-x-hidden">
      {/* Header */}
      <div className="text-center space-y-3 px-2">
        <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font leading-tight">
          मम पुस्तकालयम् • My Personal Library
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          Your personal saved repository for bookmarked verses, sacred temples, Acharyas, study reflections, and research notes stored locally in IndexedDB & LocalStorage.
        </p>
      </div>

      {/* Filter & Search Controls */}
      <div className="bg-amber-50/80 dark:bg-stone-900 border border-amber-800/20 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 flex-wrap w-full sm:w-auto">
            {['all', 'gita', 'upanishad', 'veda', 'temple'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-serif uppercase tracking-wider transition-all min-h-[44px] flex items-center justify-center font-bold active:scale-95 ${
                  selectedFilter === cat
                    ? 'bg-amber-700 text-white shadow-md'
                    : 'bg-amber-100/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-amber-200'
                }`}
              >
                {cat === 'all' ? 'All Saved' : cat}
              </button>
            ))}
          </div>

          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search library items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-stone-800 border border-amber-900/20 text-xs font-serif outline-none focus:ring-2 focus:ring-amber-600/50 text-stone-900 dark:text-stone-100 min-h-[44px]"
            />
          </div>
        </div>
      </div>

      {/* Bookmarks Display */}
      <div className="space-y-6">
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-amber-950 dark:text-amber-100 flex items-center justify-between border-b border-amber-900/15 pb-3">
          <span className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <span>Saved Items ({filteredBookmarks.length})</span>
          </span>
          {bookmarks.length > 0 && (
            <span className="text-xs font-sans text-stone-500 font-normal">
              Total {bookmarks.length} item{bookmarks.length === 1 ? '' : 's'}
            </span>
          )}
        </h2>

        {filteredBookmarks.length === 0 ? (
          <div className="text-center py-12 px-4 bg-amber-50/50 dark:bg-stone-900 rounded-2xl border border-amber-900/15 space-y-3">
            <Bookmark className="w-10 h-10 text-amber-600/40 mx-auto" />
            <p className="text-sm font-serif text-stone-600 dark:text-stone-400 max-w-md mx-auto">
              {bookmarks.length === 0
                ? "You haven't bookmarked any items yet. Click the bookmark button on any verse, temple, or article to save it here for quick access."
                : "No saved items found matching your search filter."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filteredBookmarks.map((bm) => {
              const bmKey = bm.itemId || bm.id;
              return (
                <div
                  key={bmKey}
                  className="p-4 sm:p-6 rounded-2xl bg-amber-50 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2 border-b border-amber-900/10 pb-3">
                      <button
                        onClick={() => openTopicModal(bm.title)}
                        className="font-serif font-bold text-amber-950 dark:text-amber-100 text-base hover:text-amber-700 transition-colors flex items-center gap-1.5 text-left leading-snug group"
                      >
                        <span className="group-hover:underline">{bm.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                      </button>

                      <button
                        onClick={() => toggleBookmark(bm)}
                        className="p-2.5 rounded-xl text-rose-600 hover:bg-rose-500/10 transition-colors flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center active:scale-95"
                        title="Remove Bookmark"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {bm.subtitle && (
                      <p className="text-xs text-stone-700 dark:text-stone-300 font-serif leading-relaxed break-words">
                        {bm.subtitle}
                      </p>
                    )}

                    {/* Personal Note Area */}
                    <div className="space-y-1.5 pt-2 border-t border-amber-900/10">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block">
                        Personal Reflection / Note
                      </span>
                      <textarea
                        value={personalNotes[bmKey] || ''}
                        onChange={(e) => setPersonalNotes({ ...personalNotes, [bmKey]: e.target.value })}
                        onBlur={(e) => handleSaveNote(bmKey, e.target.value)}
                        placeholder="Type personal reflections or study notes..."
                        className="w-full p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 border border-amber-900/20 text-xs font-serif outline-none h-20 resize-none text-stone-900 dark:text-stone-100 focus:ring-1 focus:ring-amber-600"
                      />
                    </div>
                  </div>

                  <div className="text-[10px] text-stone-500 font-serif pt-2 border-t border-amber-900/10 flex items-center justify-between">
                    <span>Saved: {new Date(bm.timestamp || Date.now()).toLocaleDateString()}</span>
                    <span className="text-amber-800 dark:text-amber-400 font-bold uppercase bg-amber-500/10 px-2 py-0.5 rounded">
                      {bm.itemType || 'Bookmark'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

