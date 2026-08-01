export type KnowledgeCategory = 'root' | 'scripture' | 'acharya' | 'concept' | 'darshana' | 'tradition' | 'commentary';

export interface KnowledgeNode {
  id: string;
  title: string;
  sanskritTitle?: string;
  category: KnowledgeCategory;
  summary: string;
  historicalPeriod?: string;
  keyTeachings?: string[];
  associatedVerse?: {
    sanskrit: string;
    translation: string;
    source?: string;
  };
  children?: KnowledgeNode[];
  relatedNodeIds?: string[];
}
