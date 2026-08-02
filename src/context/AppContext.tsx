import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeMode, UserBookmark, UserReadingProgress } from '../types';
import { storageService } from '../services/storageService';
import { audioService } from '../services/audioService';
import { TopicKnowledgeItem } from '../data/topicKnowledge';

interface AppContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isAiAssistantOpen: boolean;
  setIsAiAssistantOpen: (open: boolean) => void;
  activeTopicModal: string | TopicKnowledgeItem | null;
  openTopicModal: (topic: string | TopicKnowledgeItem) => void;
  closeTopicModal: () => void;
  isDroneActive: boolean;
  toggleDrone: () => void;
  playBell: () => void;
  playConch: () => void;
  playVerseAudio: (text: string) => void;
  bookmarks: UserBookmark[];
  toggleBookmark: (item: Omit<UserBookmark, 'timestamp'>) => Promise<void>;
  isBookmarked: (itemId: string) => boolean;
  readingProgress: Record<string, UserReadingProgress>;
  updateReadingProgress: (itemId: string, verseIndex: number, percentage: number) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>('lamp-night');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [activeTopicModal, setActiveTopicModal] = useState<string | TopicKnowledgeItem | null>(null);
  const [isDroneActive, setIsDroneActive] = useState(false);
  const [bookmarks, setBookmarks] = useState<UserBookmark[]>([]);
  const [readingProgress, setReadingProgress] = useState<Record<string, UserReadingProgress>>({});

  useEffect(() => {
    // Apply default Oil Lamp Theme attributes and dark mode class
    document.documentElement.className = `theme-${theme} ${theme === 'lamp-night' || theme === 'copper-gold' ? 'dark' : ''}`;
    document.documentElement.setAttribute('data-theme', theme);

    // Load initial storage data
    storageService.getBookmarks().then(setBookmarks);
    storageService.getReadingProgress().then(setReadingProgress);

    // Keyboard shortcut for Cmd+K / Ctrl+K
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    document.documentElement.className = `theme-${newTheme} ${newTheme === 'lamp-night' || newTheme === 'copper-gold' ? 'dark' : ''}`;
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const openTopicModal = (topic: string | TopicKnowledgeItem) => {
    setActiveTopicModal(topic);
  };

  const closeTopicModal = () => {
    setActiveTopicModal(null);
  };

  const toggleDrone = () => {
    const active = audioService.toggleTanpuraDrone();
    setIsDroneActive(active);
  };

  const playBell = () => {
    audioService.playTempleBell();
  };

  const playConch = () => {
    audioService.playConchSound();
  };

  const playVerseAudio = (text: string) => {
    audioService.speakSanskrit(text);
  };

  const toggleBookmark = async (item: Omit<UserBookmark, 'timestamp'>) => {
    const exists = bookmarks.some(b => b.itemId === item.itemId);
    if (exists) {
      const updated = await storageService.removeBookmark(item.itemId);
      setBookmarks(updated);
    } else {
      const updated = await storageService.addBookmark(item);
      setBookmarks(updated);
    }
  };

  const isBookmarked = (itemId: string) => {
    return bookmarks.some(b => b.itemId === itemId || b.id === itemId);
  };

  const updateReadingProgress = async (itemId: string, verseIndex: number, percentage: number) => {
    await storageService.saveReadingProgress(itemId, verseIndex, percentage);
    const updated = await storageService.getReadingProgress();
    setReadingProgress(updated);
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        isSearchOpen,
        setIsSearchOpen,
        isAiAssistantOpen,
        setIsAiAssistantOpen,
        activeTopicModal,
        openTopicModal,
        closeTopicModal,
        isDroneActive,
        toggleDrone,
        playBell,
        playConch,
        playVerseAudio,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        readingProgress,
        updateReadingProgress
      }}
    >
      <div className={`theme-${theme} min-h-screen text-stone-900 dark:text-stone-100 transition-colors duration-300 font-sans`}>
        {children}
      </div>
    </AppContext.Provider>
  );
};


export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
