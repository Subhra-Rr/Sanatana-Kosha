export type ThemeMode = 'sandstone' | 'lamp-night' | 'copper-gold' | 'morning';

export type ScriptureCategory = 
  | 'veda' 
  | 'vedanga' 
  | 'upanishad' 
  | 'gita' 
  | 'epic' 
  | 'purana' 
  | 'smriti' 
  | 'darshana' 
  | 'acharya' 
  | 'temple' 
  | 'festival' 
  | 'sanskrit';

export interface SourceCitation {
  id: string;
  sourceName: string;
  sectionOrVerse?: string;
  commentator?: string;
  historicalPeriod?: string;
  referenceUrl?: string;
  type: 'primary' | 'commentary' | 'academic' | 'manuscript' | 'archive';
}

export interface VerseCommentary {
  author: string;
  tradition: string;
  text: string;
}

export interface Verse {
  id: string;
  chapterNumber?: number;
  verseNumber: number | string;
  sanskrit: string;
  transliteration: string;
  wordByWord?: { sanskrit: string; english: string; meaning: string }[];
  translation: string;
  commentaries?: VerseCommentary[] | { shankara?: string; ramanuja?: string };
  audioUrl?: string;
  keyConcepts?: string[];
  lifeLessons?: string[];
  citations?: SourceCitation[];
}

export interface GitaChapter {
  chapterNumber: number;
  title: string;
  sanskritTitle: string;
  meaning: string;
  totalVerses: number;
  summary: string;
  keyThemes: string[];
  featuredVerses: Verse[];
}

export interface ScriptureItem {
  id: string;
  title: string;
  sanskritTitle: string;
  transliteration: string;
  category: ScriptureCategory;
  subcategory?: string;
  summary: string;
  historicalPeriod: string;
  associatedTraditions: string[];
  authorOrRishi?: string;
  overview: string;
  sectionsCount?: number;
  versesCount?: number;
  verses?: Verse[];
  keyThemes: string[];
  structureSubdivisions?: { name: string; sanskritName: string; description: string }[];
  majorSuktas?: string[];
  philosophicalSignificance: string;
  relatedScriptures?: string[];
  citations: SourceCitation[];
  imageUrl?: string;
  imageCaption?: string;
  imageSource?: string;
  lastReviewedDate?: string;
}

export interface VedangaItem {
  id: string;
  name: string;
  sanskritName: string;
  meaning: string;
  purpose: string;
  keyTexts: string[];
  associatedRishis: string[];
  description: string;
  importanceInVedicRecitation: string;
  importance?: string;
}

export interface UpanishadItem {
  id: string;
  name: string;
  sanskritName: string;
  associatedVeda: 'Rigveda' | 'Yajurveda' | 'Samaveda' | 'Atharvaveda';
  isPrincipal: boolean;
  mahavakya?: {
    sanskrit: string;
    transliteration: string;
    translation: string;
    meaning: string;
  };
  summary: string;
  keyTeachings: string[];
  centralDialogue?: string;
  versesCount: number;
  citations: SourceCitation[];
}

export interface EpicSection {
  id: string;
  epic: 'Ramayana' | 'Mahabharata';
  sectionName: string;
  sanskritName: string;
  summary: string;
  keyEvents: string[];
  importantCharacters: string[];
  geographicalLocations: string[];
  philosophicalLessons: string[];
}

export interface CharacterProfile {
  id: string;
  name: string;
  sanskritName: string;
  epic: 'Ramayana' | 'Mahabharata' | 'Purana';
  lineage: string;
  role: string;
  bio: string;
  keyQualities: string[];
  majorVersesOrDharmaLessons: string[];
  symbolism: string;
}

export interface PuranaItem {
  id: string;
  name: string;
  sanskritName: string;
  type: 'Mahapurana' | 'Upapurana';
  dominantDeity: 'Brahma' | 'Vishnu' | 'Shiva' | 'Shakti' | 'General';
  traditionalVerseCount: number;
  keyTopics: string[];
  synopsis: string;
  notableStories: string[];
  citations: SourceCitation[];
}

export interface PhilosophicalSchool {
  id: string;
  name: string;
  sanskritName: string;
  founderOrKeyRishi: string;
  foundationalText: string;
  foundationalSutraText?: string;
  type: 'Astika (Orthodox)' | 'Vedanta Sub-school' | 'Agamic/Tantric';
  centralPremise: string;
  viewOnBrahman: string;
  viewOnAtman: string;
  viewOnJagat: string;
  viewOnMoksha: string;
  pathOfSadhana: string;
  pramanasAccepted?: string[];
  keyScripturalCitations: string[];
  majorCommentators: string[];
}

export interface ScripturalDebateTopic {
  id: string;
  topic: string;
  sanskritTerm: string;
  description: string;
  positions: {
    schoolName: string;
    viewpoint: string;
    primaryArgument: string;
    keyVerses: string[];
  }[];
  neutralSynthesis: string;
}

export interface AcharyaItem {
  id: string;
  name: string;
  sanskritName: string;
  period: string;
  birthPlace: string;
  tradition: string;
  philosophicalSystem: string;
  biography: string;
  majorWorks: string[];
  keyTeachings: string[];
  travelMapPoints?: { name: string; lat: number; lng: number; description: string }[];
  citations: SourceCitation[];
  imageUrl?: string;
}

export interface ShankaracharyaPeetha {
  id: string;
  name: string;
  location: string;
  cardinalDirection: 'South' | 'East' | 'West' | 'North';
  state: string;
  associatedVeda: string;
  associatedMahavakya: string;
  firstAcharya: string;
  firstHead?: string;
  mahavakyaMeaning?: string;
  currentHead: string;
  history: string;
  coordinates: { lat: number; lng: number };
}

export interface SaintItem {
  id: string;
  name: string;
  sanskritName: string;
  period: string;
  region: string;
  traditionOrMovement: string;
  bio: string;
  compositionsOrWorks: string[];
  keyMessage: string;
  famousQuoteOrAbhang: {
    sanskritOrVernacular: string;
    translation: string;
  };
}

export interface TempleItem {
  id: string;
  name: string;
  sanskritName: string;
  category: 'Jyotirlinga' | 'Shakti Peetha' | 'Char Dham' | 'Divya Desam' | 'Sapta Puri' | 'Ancient Temple';
  deity: string;
  location: string;
  state: string;
  coordinates: { lat: number; lng: number };
  architecturalStyle: string;
  historicalPeriod: string;
  scripturalSignificance: string;
  architectureDetails: string;
  legend: string;
  festivalsCelebrated: string[];
  imageUrl?: string;
  imageSource?: string;
}

export interface FestivalItem {
  id: string;
  name: string;
  sanskritName: string;
  lunarMonth: string;
  tithi: string;
  deityAssociated: string;
  significance: string;
  scripturalOrigin: string;
  ritualsAndObservances: string[];
  regionOrGlobal: string;
}

export interface SanskritLesson {
  id: string;
  title: string;
  category: 'Alphabet' | 'Pronunciation' | 'Grammar' | 'Subhashita' | 'Chanting';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  content: string;
  examples: {
    sanskrit: string;
    transliteration: string;
    meaning: string;
    audioPronunciationText?: string;
  }[];
}

export interface HistoricalTimelineEvent {
  id: string;
  yearBCEorCE: string;
  title: string;
  category: 'Scripture' | 'Acharya' | 'Empire' | 'Temple' | 'Philosophy';
  description: string;
  keyFigures: string[];
  sourcesAndCitations: string[];
}

export interface GenealogyNode {
  id: string;
  name: string;
  sanskritName: string;
  lineage: 'Surya Vansha' | 'Chandra Vansha' | 'Rishi Gotra' | 'Guru-Shishya Parampara';
  generation?: number;
  parents?: string[];
  children?: string[];
  summary: string;
  keyScriptureRef: string;
}

export interface PanchangData {
  dateString: string;
  tithi: { name: string; paksha: 'Shukla' | 'Krishna'; percentage: number };
  nakshatra: { name: string; deity: string; rashi: string };
  yoga: string;
  karana: string;
  rahukaal: string;
  auspiciousTime: string;
  festivalToday?: string;
  dailyShloka: Verse;
}

export interface UserBookmark {
  id: string;
  itemType: ScriptureCategory;
  itemId: string;
  title: string;
  subtitle?: string;
  timestamp: number;
}

export interface UserReadingProgress {
  itemId: string;
  lastVerseIndex: number;
  percentageCompleted: number;
  updatedAt: number;
}
