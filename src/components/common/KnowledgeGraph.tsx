import React, { useState, useMemo } from 'react';
import { KnowledgeNode, KnowledgeCategory } from '../../types/knowledgeGraph';
import { KNOWLEDGE_GRAPH_DATA } from '../../data/knowledgeGraphData';
import { useApp } from '../../context/AppContext';
import { audioService } from '../../services/audioService';
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  Compass,
  Layers,
  FileText,
  ChevronRight,
  ChevronDown,
  Search,
  Filter,
  Maximize2,
  Minimize2,
  Volume2,
  X,
  Share2,
  Bookmark,
  Network
} from 'lucide-react';

// Color and Icon map for categories
const CATEGORY_CONFIG: Record<
  KnowledgeCategory,
  { label: string; bg: string; text: string; border: string; icon: React.FC<{ className?: string }> }
> = {
  root: {
    label: 'Root Tradition',
    bg: 'bg-purple-900/20 dark:bg-purple-950/40',
    text: 'text-purple-800 dark:text-purple-300',
    border: 'border-purple-600/40',
    icon: Network
  },
  scripture: {
    label: 'Scripture',
    bg: 'bg-amber-500/15 dark:bg-amber-900/30',
    text: 'text-amber-800 dark:text-amber-300',
    border: 'border-amber-600/40',
    icon: BookOpen
  },
  acharya: {
    label: 'Acharya',
    bg: 'bg-rose-500/15 dark:bg-rose-900/30',
    text: 'text-rose-800 dark:text-rose-300',
    border: 'border-rose-600/40',
    icon: GraduationCap
  },
  concept: {
    label: 'Philosophical Concept',
    bg: 'bg-emerald-500/15 dark:bg-emerald-900/30',
    text: 'text-emerald-800 dark:text-emerald-300',
    border: 'border-emerald-600/40',
    icon: Sparkles
  },
  darshana: {
    label: 'Darshana System',
    bg: 'bg-sky-500/15 dark:bg-sky-900/30',
    text: 'text-sky-800 dark:text-sky-300',
    border: 'border-sky-600/40',
    icon: Compass
  },
  tradition: {
    label: 'Tradition & Lineage',
    bg: 'bg-indigo-500/15 dark:bg-indigo-900/30',
    text: 'text-indigo-800 dark:text-indigo-300',
    border: 'border-indigo-600/40',
    icon: Layers
  },
  commentary: {
    label: 'Commentary (Bhashya)',
    bg: 'bg-orange-500/15 dark:bg-orange-900/30',
    text: 'text-orange-800 dark:text-orange-300',
    border: 'border-orange-600/40',
    icon: FileText
  }
};

// Recursive helper to collect all IDs in a node tree
const collectAllIds = (node: KnowledgeNode): string[] => {
  let ids = [node.id];
  if (node.children) {
    for (const child of node.children) {
      ids = ids.concat(collectAllIds(child));
    }
  }
  return ids;
};

// Check if node or its descendants match search/category filter
const nodeMatchesFilter = (
  node: KnowledgeNode,
  query: string,
  selectedCategory: string
): boolean => {
  const q = query.toLowerCase().trim();
  const categoryMatches =
    selectedCategory === 'all' || node.category === selectedCategory;

  const textMatches =
    !q ||
    node.title.toLowerCase().includes(q) ||
    (node.sanskritTitle && node.sanskritTitle.toLowerCase().includes(q)) ||
    node.summary.toLowerCase().includes(q) ||
    (node.keyTeachings &&
      node.keyTeachings.some((t) => t.toLowerCase().includes(q)));

  if (categoryMatches && textMatches) return true;

  if (node.children) {
    return node.children.some((child) =>
      nodeMatchesFilter(child, query, selectedCategory)
    );
  }

  return false;
};

interface KnowledgeNodeCardProps {
  node: KnowledgeNode;
  depth: number;
  expandedMap: Record<string, boolean>;
  onToggle: (id: string) => void;
  onSelect: (node: KnowledgeNode) => void;
  searchQuery: string;
  selectedCategory: string;
}

// RECURSIVE NODE CARD COMPONENT
const KnowledgeNodeCard: React.FC<KnowledgeNodeCardProps> = ({
  node,
  depth,
  expandedMap,
  onToggle,
  onSelect,
  searchQuery,
  selectedCategory
}) => {
  const { openTopicModal } = useApp();
  const config = CATEGORY_CONFIG[node.category] || CATEGORY_CONFIG.concept;
  const CategoryIcon = config.icon;

  const hasChildren = node.children && node.children.length > 0;
  const isExpanded = !!expandedMap[node.id];

  // Filter children based on active filters
  const visibleChildren = useMemo(() => {
    if (!node.children) return [];
    return node.children.filter((child) =>
      nodeMatchesFilter(child, searchQuery, selectedCategory)
    );
  }, [node.children, searchQuery, selectedCategory]);

  const matchesDirectly =
    (!searchQuery ||
      node.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (node.sanskritTitle &&
        node.sanskritTitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      node.summary.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedCategory === 'all' || node.category === selectedCategory);

  if (!matchesDirectly && visibleChildren.length === 0) {
    return null;
  }

  return (
    <div className="relative group/node w-full">
      {/* Indentation line connector for nested depth */}
      {depth > 0 && (
        <div
          className="absolute -left-3 top-0 bottom-0 w-0.5 bg-amber-800/20 dark:bg-amber-500/20 group-hover/node:bg-amber-500/50 transition-colors"
          style={{ left: `-${Math.min(depth * 12, 36)}px` }}
        />
      )}

      {/* Main Node Card */}
      <div
        className={`p-4 rounded-2xl border transition-all shadow-sm hover:shadow-md ${
          config.bg
        } ${config.border} hover:border-amber-500/60 ${
          depth === 0 ? 'bg-amber-100/90 dark:bg-stone-900 border-2' : ''
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Node Header & Title */}
          <div className="space-y-1.5 flex-1 cursor-pointer" onClick={() => onSelect(node)}>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase ${config.bg} ${config.text} border ${config.border}`}
              >
                <CategoryIcon className="w-3 h-3" />
                <span>{config.label}</span>
              </span>

              {node.historicalPeriod && (
                <span className="text-[10px] font-serif text-stone-500 dark:text-stone-400">
                  • {node.historicalPeriod}
                </span>
              )}
            </div>

            <div className="flex items-baseline gap-2">
              <h4 className="font-serif text-base sm:text-lg font-bold text-amber-950 dark:text-amber-100 hover:text-amber-600 transition-colors">
                {node.title}
              </h4>
              {node.sanskritTitle && (
                <span className="font-serif text-xs text-amber-800/80 dark:text-amber-300/80 sanskrit-font">
                  ({node.sanskritTitle})
                </span>
              )}
            </div>

            <p className="text-xs text-stone-700 dark:text-stone-300 font-serif leading-relaxed line-clamp-2">
              {node.summary}
            </p>
          </div>

          {/* Node Action Buttons */}
          <div className="flex items-center gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-amber-900/10 dark:border-amber-500/10 justify-between sm:justify-end">
            <button
              onClick={() => onSelect(node)}
              className="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-600 hover:text-white text-amber-900 dark:text-amber-200 border border-amber-800/20 text-xs font-serif font-medium transition-all flex items-center gap-1 active:scale-95"
            >
              <span>Details</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>

            {hasChildren && (
              <button
                onClick={() => onToggle(node.id)}
                aria-label={isExpanded ? 'Collapse sub-branches' : 'Expand sub-branches'}
                className="px-3 py-1.5 rounded-xl bg-amber-700 text-white hover:bg-amber-800 text-xs font-serif font-medium transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
              >
                <span>{isExpanded ? 'Hide' : 'Expand'}</span>
                <span className="px-1.5 py-0.2 bg-amber-900/40 rounded-md text-[10px] font-bold">
                  {visibleChildren.length}
                </span>
                {isExpanded ? (
                  <ChevronDown className="w-3.5 h-3.5" />
                ) : (
                  <ChevronRight className="w-3.5 h-3.5" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* RECURSIVE CHILDREN RENDER */}
      {hasChildren && isExpanded && (
        <div
          className="mt-3 space-y-3 pl-4 sm:pl-6 border-l-2 border-dashed border-amber-800/20 dark:border-amber-500/20"
        >
          {visibleChildren.map((childNode) => (
            <KnowledgeNodeCard
              key={childNode.id}
              node={childNode}
              depth={depth + 1}
              expandedMap={expandedMap}
              onToggle={onToggle}
              onSelect={onSelect}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// MASTER KNOWLEDGE GRAPH COMPONENT
export const KnowledgeGraph: React.FC = () => {
  const { openTopicModal, toggleBookmark, isBookmarked } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedNodeModal, setSelectedNodeModal] = useState<KnowledgeNode | null>(null);

  // Expanded nodes state
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({
    'sanatana-root': true,
    'branch-vedanta': true,
    'scripture-upanishads': true,
    'branch-epics-gita': true
  });

  const allNodeIds = useMemo(() => collectAllIds(KNOWLEDGE_GRAPH_DATA), []);

  const handleToggle = (id: string) => {
    setExpandedMap((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleExpandAll = () => {
    const nextMap: Record<string, boolean> = {};
    allNodeIds.forEach((id) => (nextMap[id] = true));
    setExpandedMap(nextMap);
  };

  const handleCollapseAll = () => {
    setExpandedMap({ 'sanatana-root': true });
  };

  const categories = [
    { id: 'all', label: 'All Relationship Nodes' },
    { id: 'scripture', label: 'Scriptures' },
    { id: 'acharya', label: 'Acharyas' },
    { id: 'concept', label: 'Concepts' },
    { id: 'darshana', label: 'Darshanas' },
    { id: 'tradition', label: 'Traditions' }
  ];

  return (
    <div className="p-3 sm:p-8 rounded-2xl sm:rounded-3xl bg-amber-100/50 dark:bg-stone-900 border border-amber-800/20 shadow-xl space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-900/15 pb-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-900 dark:text-amber-300 text-xs font-serif font-semibold border border-amber-800/15">
            <Network className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Sacred Knowledge Graph</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
            ज्ञानसम्बन्धलेख्यम् • Relationship & Concept Map
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl">
            Explore the interconnected web of Vedic scriptures, Upanishadic Mahavakyas, classical Acharyas, commentaries, and philosophical systems through a recursive relational card graph.
          </p>
        </div>

        {/* Global Expand/Collapse controls */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={handleExpandAll}
            className="px-3.5 py-2 rounded-xl bg-amber-700 text-white hover:bg-amber-800 text-xs font-serif font-medium transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Expand All</span>
          </button>
          <button
            onClick={handleCollapseAll}
            className="px-3.5 py-2 rounded-xl bg-amber-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-amber-800/20 text-xs font-serif font-medium hover:bg-amber-300 transition-all shadow-sm flex items-center gap-1.5 active:scale-95"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            <span>Collapse</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Panel */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* Search input */}
        <div className="md:col-span-5 relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search scripture, concept, Acharya, or Mahavakya..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-amber-50/80 dark:bg-stone-950 border border-amber-800/20 text-xs font-serif text-amber-950 dark:text-amber-100 focus:outline-none focus:border-amber-600"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="md:col-span-7 flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-2 rounded-xl text-xs font-serif font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-800 text-amber-50 font-semibold shadow-sm'
                  : 'bg-amber-50/80 dark:bg-stone-950 text-stone-700 dark:text-stone-300 border border-amber-800/15 hover:bg-amber-500/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Recursive Graph Display Tree */}
      <div className="p-4 sm:p-6 rounded-2xl bg-amber-50/60 dark:bg-stone-950/60 border border-amber-800/15 min-h-[400px]">
        <KnowledgeNodeCard
          node={KNOWLEDGE_GRAPH_DATA}
          depth={0}
          expandedMap={expandedMap}
          onToggle={handleToggle}
          onSelect={(node) => setSelectedNodeModal(node)}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
        />
      </div>

      {/* Detailed Modal for Selected Node */}
      {selectedNodeModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          <div className="bg-amber-50 dark:bg-stone-900 border border-amber-800/30 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedNodeModal(null)}
              className="absolute right-5 top-5 p-2 rounded-full text-stone-500 hover:bg-amber-500/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-amber-500/20 text-amber-900 dark:text-amber-200 border border-amber-800/20">
                  {CATEGORY_CONFIG[selectedNodeModal.category]?.label || selectedNodeModal.category}
                </span>
                {selectedNodeModal.historicalPeriod && (
                  <span className="text-xs font-serif text-stone-500">
                    • {selectedNodeModal.historicalPeriod}
                  </span>
                )}
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-950 dark:text-amber-100">
                {selectedNodeModal.title}
              </h3>
              {selectedNodeModal.sanskritTitle && (
                <p className="font-serif text-lg text-amber-800 dark:text-amber-300 sanskrit-font">
                  {selectedNodeModal.sanskritTitle}
                </p>
              )}
            </div>

            {/* Summary */}
            <div className="p-4 rounded-2xl bg-amber-100/60 dark:bg-stone-950 border border-amber-800/15">
              <p className="text-sm font-serif text-stone-800 dark:text-stone-200 leading-relaxed">
                {selectedNodeModal.summary}
              </p>
            </div>

            {/* Associated Verse / Shloka Quote */}
            {selectedNodeModal.associatedVerse && (
              <div className="p-4 rounded-2xl bg-amber-700/10 border border-amber-600/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 font-serif">
                    Sacred Quotation / Shloka
                  </span>
                  <button
                    onClick={() => audioService.speakSanskrit(selectedNodeModal.associatedVerse!.sanskrit)}
                    className="p-1.5 rounded-full hover:bg-amber-500/20 text-amber-700 dark:text-amber-300"
                    title="Pronounce Sanskrit"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                <p className="font-serif text-lg font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
                  {selectedNodeModal.associatedVerse.sanskrit}
                </p>
                <p className="text-xs font-serif italic text-stone-700 dark:text-stone-300">
                  "{selectedNodeModal.associatedVerse.translation}"
                </p>
                {selectedNodeModal.associatedVerse.source && (
                  <span className="text-[10px] text-amber-800 dark:text-amber-400 font-semibold block">
                    — Source: {selectedNodeModal.associatedVerse.source}
                  </span>
                )}
              </div>
            )}

            {/* Key Teachings */}
            {selectedNodeModal.keyTeachings && selectedNodeModal.keyTeachings.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-amber-900 dark:text-amber-300 font-serif">
                  Key Insights & Principles
                </h4>
                <ul className="space-y-2">
                  {selectedNodeModal.keyTeachings.map((teaching, idx) => (
                    <li
                      key={idx}
                      className="text-xs font-serif text-stone-700 dark:text-stone-300 flex items-start gap-2 bg-amber-50/50 dark:bg-stone-950/50 p-2.5 rounded-xl border border-amber-900/10"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{teaching}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Direct Connected Sub-Branches */}
            {selectedNodeModal.children && selectedNodeModal.children.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-widest text-amber-900 dark:text-amber-300 font-serif">
                  Direct Sub-Branches ({selectedNodeModal.children.length})
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedNodeModal.children.map((child) => (
                    <button
                      key={child.id}
                      onClick={() => setSelectedNodeModal(child)}
                      className="p-3 rounded-xl bg-amber-100/50 dark:bg-stone-950 border border-amber-800/15 hover:border-amber-600 text-left transition-all hover:shadow-md group"
                    >
                      <span className="text-xs font-bold font-serif text-amber-950 dark:text-amber-100 group-hover:text-amber-600 flex items-center justify-between">
                        <span>{child.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
                      </span>
                      <p className="text-[11px] font-serif text-stone-600 dark:text-stone-400 line-clamp-1 mt-1">
                        {child.summary}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Actions */}
            <div className="pt-4 border-t border-amber-900/10 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  setSelectedNodeModal(null);
                  openTopicModal(selectedNodeModal.title);
                }}
                className="px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-serif font-semibold shadow-md transition-all flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Full Topic Modal</span>
              </button>

              <button
                onClick={() => setSelectedNodeModal(null)}
                className="px-4 py-2 rounded-xl bg-amber-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 text-xs font-serif font-medium hover:bg-amber-300 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
