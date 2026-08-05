import React, { useState } from 'react';
import { X, Search, BookOpen, Copy, Check, Filter, Bookmark, Sparkles, FileText } from 'lucide-react';
import { VEDAS_DATA } from '../../data/vedas';
import { UPANISHADS_DATA } from '../../data/upanishads';

interface ResearchCitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResearchCitationModal: React.FC<ResearchCitationModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [citationFormat, setCitationFormat] = useState<'BibTeX' | 'APA' | 'MLA' | 'Chicago'>('BibTeX');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  // Search through Vedas & Upanishads for matching verses
  const results: any[] = [];

  VEDAS_DATA.forEach(veda => {
    veda.verses?.forEach(v => {
      if (
        !searchQuery ||
        v.sanskrit.includes(searchQuery) ||
        v.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.keyConcepts?.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()))
      ) {
        results.push({
          source: veda.title,
          ref: v.verseNumber,
          sanskrit: v.sanskrit,
          transliteration: v.transliteration,
          translation: v.translation,
          commentary: v.commentaries?.[0]?.text
        });
      }
    });
  });

  UPANISHADS_DATA.forEach(upanishad => {
    if (
      !searchQuery ||
      upanishad.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      upanishad.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      upanishad.mahavakya?.sanskrit.includes(searchQuery)
    ) {
      results.push({
        source: `${upanishad.name} Upanishad`,
        ref: upanishad.associatedVeda,
        sanskrit: upanishad.mahavakya?.sanskrit || upanishad.sanskritName,
        transliteration: upanishad.mahavakya?.transliteration || upanishad.name,
        translation: upanishad.mahavakya?.translation || upanishad.summary,
        commentary: upanishad.mahavakya?.meaning
      });
    }
  });

  const getCitationString = (item: any, format: string) => {
    switch (format) {
      case 'BibTeX':
        return `@inreference{sanatana_kosha_${item.ref.replace(/[^a-zA-Z0-0]/g, '_')},\n  title = {${item.source} - ${item.ref}},\n  booktitle = {Sanatana Kosha Scriptural Archive},\n  year = {2025},\n  url = {https://sanatana-kosha.onrender.com/}\n}`;
      case 'APA':
        return `Sanatana Kosha. (2025). ${item.source}, Verse ${item.ref}. Digital Treasury of Vedic Knowledge. Retrieved from https://sanatana-kosha.onrender.com/`;
      case 'MLA':
        return `"${item.source}, ${item.ref}." Sanatana Kosha: Digital Treasury of Vedic Knowledge, 2025, https://sanatana-kosha.onrender.com/.`;
      case 'Chicago':
        return `Sanatana Kosha, "${item.source}, ${item.ref}," Digital Treasury of Vedic Knowledge, 2025, https://sanatana-kosha.onrender.com/.`;
      default:
        return item.ref;
    }
  };

  const handleCopyCitation = (item: any, index: number) => {
    const text = getCitationString(item, citationFormat);
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-4xl max-h-[90vh] bg-stone-900 border border-amber-500/30 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-stone-100">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-amber-900/15 flex items-center justify-between bg-stone-950/80">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif font-bold text-lg text-amber-100">
              Academic Research & Citation Exporter
            </h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-amber-500/20 text-stone-400 hover:text-stone-200">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar & Citation Format Bar */}
        <div className="p-4 border-b border-amber-900/10 space-y-3 bg-stone-900/50">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-amber-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across all Vedic Mantras, Suktas, and Commentaries..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-stone-800 border border-amber-800/20 text-xs sm:text-sm outline-none focus:border-amber-600 font-serif text-amber-100 placeholder:text-stone-400"
              />
            </div>

            <div className="flex items-center gap-1 self-stretch sm:self-auto">
              <span className="text-xs font-serif font-bold text-amber-300 mr-1">Format:</span>
              {(['BibTeX', 'APA', 'MLA', 'Chicago'] as const).map(fmt => (
                <button
                  key={fmt}
                  onClick={() => setCitationFormat(fmt)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    citationFormat === fmt
                      ? 'bg-amber-700 text-white shadow'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="text-xs font-serif text-stone-400 flex items-center justify-between">
            <span>Showing {Math.min(results.length, 25)} Research Results</span>
            <span>Copy citation in {citationFormat} format</span>
          </div>

          {results.slice(0, 25).map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-stone-950 border border-amber-800/20 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between border-b border-amber-900/20 pb-2">
                <span className="text-xs font-bold text-amber-300 font-serif">
                  {item.source} • {item.ref}
                </span>
                <button
                  onClick={() => handleCopyCitation(item, idx)}
                  className="flex items-center gap-1 px-3 py-1 rounded-xl bg-amber-700 text-white text-xs font-serif font-semibold hover:bg-amber-600 shadow"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy {citationFormat}
                    </>
                  )}
                </button>
              </div>

              <p className="font-serif font-bold text-sm text-amber-100 sanskrit-font">
                "{item.sanskrit}"
              </p>
              <p className="text-xs font-serif italic text-stone-300">
                "{item.translation}"
              </p>

              {item.commentary && (
                <div className="p-3 rounded-xl bg-stone-900 text-[11px] font-serif text-stone-400 border border-amber-900/10">
                  <strong>Commentary Note:</strong> {item.commentary}
                </div>
              )}

              {/* Citation Preview String */}
              <pre className="p-2.5 rounded-xl bg-stone-900 font-mono text-[10px] text-stone-300 border border-stone-800 overflow-x-auto whitespace-pre-wrap">
                {getCitationString(item, citationFormat)}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
