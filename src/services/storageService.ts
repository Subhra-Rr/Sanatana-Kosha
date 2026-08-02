import { get, set } from 'idb-keyval';
import { UserBookmark, UserReadingProgress } from '../types';

const BOOKMARKS_KEY = 'sanatana_kosha_bookmarks';
const PROGRESS_KEY = 'sanatana_kosha_progress';
const NOTES_KEY = 'sanatana_kosha_notes';
const RECENT_SEARCHES_KEY = 'sanatana_kosha_recent_searches';

// Helper for localStorage fallback
const getItemLs = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

const setItemLs = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage quota errors gracefully
  }
};

export const storageService = {
  // Bookmarks
  async getBookmarks(): Promise<UserBookmark[]> {
    try {
      const data = await get<UserBookmark[]>(BOOKMARKS_KEY);
      if (data && Array.isArray(data)) {
        setItemLs(BOOKMARKS_KEY, data);
        return data;
      }
    } catch {
      // Fallback to localStorage
    }
    return getItemLs<UserBookmark[]>(BOOKMARKS_KEY) || [];
  },

  async addBookmark(bookmark: Omit<UserBookmark, 'timestamp'>): Promise<UserBookmark[]> {
    const list = await this.getBookmarks();
    const cleanId = bookmark.itemId || bookmark.id;
    if (!list.some(b => b.itemId === cleanId || b.id === cleanId)) {
      const newBookmark: UserBookmark = {
        ...bookmark,
        id: cleanId,
        itemId: cleanId,
        timestamp: Date.now()
      };
      const updated = [newBookmark, ...list];
      setItemLs(BOOKMARKS_KEY, updated);
      try {
        await set(BOOKMARKS_KEY, updated);
      } catch {
        // idb failed, localStorage succeeded
      }
      return updated;
    }
    return list;
  },

  async removeBookmark(itemId: string): Promise<UserBookmark[]> {
    const list = await this.getBookmarks();
    const updated = list.filter(b => b.itemId !== itemId && b.id !== itemId);
    setItemLs(BOOKMARKS_KEY, updated);
    try {
      await set(BOOKMARKS_KEY, updated);
    } catch {
      // idb failed, localStorage succeeded
    }
    return updated;
  },

  async isBookmarked(itemId: string): Promise<boolean> {
    const list = await this.getBookmarks();
    return list.some(b => b.itemId === itemId || b.id === itemId);
  },

  // Reading Progress
  async getReadingProgress(): Promise<Record<string, UserReadingProgress>> {
    try {
      const data = await get<Record<string, UserReadingProgress>>(PROGRESS_KEY);
      if (data) {
        setItemLs(PROGRESS_KEY, data);
        return data;
      }
    } catch {
      // Fallback
    }
    return getItemLs<Record<string, UserReadingProgress>>(PROGRESS_KEY) || {};
  },

  async saveReadingProgress(itemId: string, lastVerseIndex: number, percentageCompleted: number) {
    const progressMap = await this.getReadingProgress();
    progressMap[itemId] = {
      itemId,
      lastVerseIndex,
      percentageCompleted,
      updatedAt: Date.now()
    };
    setItemLs(PROGRESS_KEY, progressMap);
    try {
      await set(PROGRESS_KEY, progressMap);
    } catch {
      // Fallback
    }
  },

  // Notes
  async saveNote(itemId: string, noteText: string) {
    let notes: Record<string, string> = {};
    try {
      notes = (await get<Record<string, string>>(NOTES_KEY)) || getItemLs<Record<string, string>>(NOTES_KEY) || {};
    } catch {
      notes = getItemLs<Record<string, string>>(NOTES_KEY) || {};
    }
    notes[itemId] = noteText;
    setItemLs(NOTES_KEY, notes);
    try {
      await set(NOTES_KEY, notes);
    } catch {
      // Fallback
    }
  },

  async getNote(itemId: string): Promise<string> {
    try {
      const notes = (await get<Record<string, string>>(NOTES_KEY)) || getItemLs<Record<string, string>>(NOTES_KEY) || {};
      return notes[itemId] || '';
    } catch {
      const notes = getItemLs<Record<string, string>>(NOTES_KEY) || {};
      return notes[itemId] || '';
    }
  },

  // Recent Searches
  async getRecentSearches(): Promise<string[]> {
    try {
      const searches = await get<string[]>(RECENT_SEARCHES_KEY);
      if (searches) return searches;
    } catch {
      // Fallback
    }
    return getItemLs<string[]>(RECENT_SEARCHES_KEY) || [];
  },

  async addRecentSearch(query: string) {
    if (!query.trim()) return;
    const searches = await this.getRecentSearches();
    const filtered = searches.filter(s => s.toLowerCase() !== query.toLowerCase());
    const updated = [query.trim(), ...filtered].slice(0, 10);
    setItemLs(RECENT_SEARCHES_KEY, updated);
    try {
      await set(RECENT_SEARCHES_KEY, updated);
    } catch {
      // Fallback
    }
  }
};

