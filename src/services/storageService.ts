import { get, set, del, keys } from 'idb-keyval';
import { UserBookmark, UserReadingProgress, ScriptureCategory } from '../types';

const BOOKMARKS_KEY = 'sanatana_kosha_bookmarks';
const PROGRESS_KEY = 'sanatana_kosha_progress';
const NOTES_KEY = 'sanatana_kosha_notes';
const RECENT_SEARCHES_KEY = 'sanatana_kosha_recent_searches';

export const storageService = {
  // Bookmarks
  async getBookmarks(): Promise<UserBookmark[]> {
    try {
      const data = await get<UserBookmark[]>(BOOKMARKS_KEY);
      return data || [];
    } catch {
      return [];
    }
  },

  async addBookmark(bookmark: Omit<UserBookmark, 'timestamp'>): Promise<UserBookmark[]> {
    const list = await this.getBookmarks();
    if (!list.some(b => b.itemId === bookmark.itemId)) {
      const newBookmark: UserBookmark = { ...bookmark, timestamp: Date.now() };
      const updated = [newBookmark, ...list];
      await set(BOOKMARKS_KEY, updated);
      return updated;
    }
    return list;
  },

  async removeBookmark(itemId: string): Promise<UserBookmark[]> {
    const list = await this.getBookmarks();
    const updated = list.filter(b => b.itemId !== itemId);
    await set(BOOKMARKS_KEY, updated);
    return updated;
  },

  async isBookmarked(itemId: string): Promise<boolean> {
    const list = await this.getBookmarks();
    return list.some(b => b.itemId === itemId);
  },

  // Reading Progress
  async getReadingProgress(): Promise<Record<string, UserReadingProgress>> {
    try {
      const data = await get<Record<string, UserReadingProgress>>(PROGRESS_KEY);
      return data || {};
    } catch {
      return {};
    }
  },

  async saveReadingProgress(itemId: string, lastVerseIndex: number, percentageCompleted: number) {
    const progressMap = await this.getReadingProgress();
    progressMap[itemId] = {
      itemId,
      lastVerseIndex,
      percentageCompleted,
      updatedAt: Date.now()
    };
    await set(PROGRESS_KEY, progressMap);
  },

  // Notes
  async saveNote(itemId: string, noteText: string) {
    const notes = (await get<Record<string, string>>(NOTES_KEY)) || {};
    notes[itemId] = noteText;
    await set(NOTES_KEY, notes);
  },

  async getNote(itemId: string): Promise<string> {
    const notes = (await get<Record<string, string>>(NOTES_KEY)) || {};
    return notes[itemId] || '';
  },

  // Recent Searches
  async getRecentSearches(): Promise<string[]> {
    try {
      const searches = await get<string[]>(RECENT_SEARCHES_KEY);
      return searches || [];
    } catch {
      return [];
    }
  },

  async addRecentSearch(query: string) {
    if (!query.trim()) return;
    const searches = await this.getRecentSearches();
    const filtered = searches.filter(s => s.toLowerCase() !== query.toLowerCase());
    const updated = [query.trim(), ...filtered].slice(0, 10);
    await set(RECENT_SEARCHES_KEY, updated);
  }
};
