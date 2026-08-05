import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { searchService, SearchResultItem } from '../../services/searchService';
import { storageService } from '../../services/storageService';
import { Link } from 'react-router-dom';
import { Search, X, BookOpen, Clock, ChevronRight, Tag } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useApp();
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    if (isSearchOpen) {
      storageService.getRecentSearches().then(setRecentSearches);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (query.trim()) {
      const res = searchService.search(query, categoryFilter);
      setResults(res);
    } else {
      setResults([]);
    }
  }, [query, categoryFilter]);

  if (!isSearchOpen) return null;

  const handleSelectResult = (q: string) => {
    storageService.addRecentSearch(q);
    setIsSearchOpen(false);
  };

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'veda', label: 'Vedas' },
    { id: 'upanishad', label: 'Upanishads' },
    { id: 'gita', label: 'Gita' },
    { id: 'epic', label: 'Epics' },
    { id: 'purana', label: 'Puranas' },
    { id: 'darshana', label: 'Philosophies' },
    { id: 'acharya', label: 'Acharyas' },
    { id: 'temple', label: 'Temples' },
    { id: 'festival', label: 'Festivals' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-stone-950/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-3xl bg-amber-50 dark:bg-stone-900 border border-amber-900/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Header */}
        <div className="p-4 border-b border-amber-900/15 flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Sanskrit words, verse numbers, chapters, Acharyas, temples, philosophical concepts..."
            className="flex-1 bg-transparent border-none outline-none text-stone-900 dark:text-stone-100 placeholder:text-stone-400 font-serif text-sm sm:text-base min-h-[44px]"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-2 text-stone-400 hover:text-stone-600 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs px-3 py-2 rounded-md bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-300 min-h-[44px] flex items-center justify-center font-medium active:scale-95"
          >
            Esc
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-4 py-2 border-b border-amber-900/10 bg-amber-100/50 dark:bg-stone-950/50 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoryFilter(cat.id)}
              className={`px-3.5 py-2 rounded-full whitespace-nowrap transition-colors min-h-[44px] flex items-center justify-center active:scale-95 ${
                categoryFilter === cat.id
                  ? 'bg-amber-600 text-white font-medium shadow-sm'
                  : 'bg-stone-200/60 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Results Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {query.trim() === '' ? (
            <div>
              {recentSearches.length > 0 && (
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-semibold text-amber-800 dark:text-amber-300 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Recent Searches
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => setQuery(s)}
                        className="text-xs px-3 py-1 rounded-lg bg-amber-500/10 text-stone-800 dark:text-stone-200 hover:bg-amber-500/20"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="text-center py-8 text-stone-500 text-xs font-serif space-y-1">
                <p className="font-semibold text-amber-900 dark:text-amber-200 text-sm">
                  Global Instant Search Engine
                </p>
                <p>Try searching: "Karma", "Rigveda 1.164.46", "Shankaracharya", "Gita 2.47", "Kashi", "Upanishads"</p>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-12 text-stone-500 text-sm">
              No results found matching "<span className="font-semibold">{query}</span>".
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-xs text-stone-500 mb-2">
                Found {results.length} results
              </div>
              {results.map((res) => (
                <Link
                  key={res.id}
                  to={res.linkUrl}
                  onClick={() => handleSelectResult(query)}
                  className="block p-3 rounded-xl bg-stone-100/80 dark:bg-stone-800/60 hover:bg-amber-500/15 border border-amber-900/10 dark:border-amber-500/10 transition-all group"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif font-bold text-amber-950 dark:text-amber-100 text-sm group-hover:text-amber-600 transition-colors">
                          {res.title}
                        </span>
                        {res.sanskritTitle && (
                          <span className="text-xs text-amber-800 dark:text-amber-300 font-serif opacity-80 sanskrit-font">
                            ({res.sanskritTitle})
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-amber-800/80 dark:text-amber-300/80 font-medium mt-0.5">
                        {res.subtitle}
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-amber-600/20 text-amber-900 dark:text-amber-200 font-medium whitespace-nowrap">
                      {res.categoryName}
                    </span>
                  </div>

                  <p className="text-xs text-stone-600 dark:text-stone-300 mt-1.5 line-clamp-2 leading-relaxed">
                    {res.snippet}
                  </p>

                  {res.tags && res.tags.length > 0 && (
                    <div className="flex items-center gap-1.5 mt-2 flex-wrap text-[10px] text-stone-500">
                      <Tag className="w-3 h-3 opacity-60" />
                      {res.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="bg-stone-200 dark:bg-stone-700/50 px-1.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
