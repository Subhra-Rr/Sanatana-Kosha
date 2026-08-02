import React, { useState } from 'react';
import { GENEALOGY_DATA } from '../data/genealogy';
import { useApp } from '../context/AppContext';
import { History, GitBranch, BookOpen, ExternalLink } from 'lucide-react';

export const GenealogyPage: React.FC = () => {
  const { openTopicModal } = useApp();
  const [selectedLineage, setSelectedLineage] = useState<string>('Surya Vansha');

  const filteredNodes = GENEALOGY_DATA.filter(n => n.lineage === selectedLineage);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Title */}
      <div className="text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
          वंशानुचरितम् • Sacred Genealogies
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          Interactive dynasty family trees documenting the solar (Surya Vansha) and lunar (Chandra Vansha) lineages. Click any ruler or descendant to view detailed knowledge.
        </p>
      </div>

      {/* Dynasty Selector */}
      <div className="max-w-2xl mx-auto bg-amber-100/60 dark:bg-stone-900/80 border border-amber-800/20 rounded-2xl p-3.5 sm:p-4 shadow-xl backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-center gap-2 font-serif text-xs">
          {['Surya Vansha', 'Chandra Vansha'].map((lin) => (
            <button
              key={lin}
              onClick={() => setSelectedLineage(lin)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl transition-all min-h-[42px] flex items-center justify-center ${
                selectedLineage === lin
                  ? 'bg-amber-700 text-white font-bold shadow-md'
                  : 'bg-stone-200/60 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-300 dark:hover:bg-stone-700'
              }`}
            >
              {lin} (Dynasty Tree)
            </button>
          ))}
        </div>
      </div>

      {/* Lineage Tree Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNodes.map((node) => (
          <div
            key={node.id}
            onClick={() => openTopicModal(node.name)}
            className="p-6 rounded-2xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-3 flex flex-col justify-between hover:border-amber-600 transition-all cursor-pointer group hover:-translate-y-1"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between border-b border-amber-900/10 pb-2">
                <div>
                  <h3 className="font-serif text-xl font-bold text-amber-950 dark:text-amber-100 group-hover:text-amber-700 transition-colors flex items-center gap-1.5">
                    {node.name}
                    <ExternalLink className="w-3.5 h-3.5 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <span className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font">
                    ({node.sanskritName})
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-600/20 text-amber-900 dark:text-amber-200">
                  Gen {node.generation || '—'}
                </span>
              </div>

              {node.parents && node.parents.length > 0 && (
                <div className="text-[11px] text-amber-800 dark:text-amber-400 font-medium">
                  Parents:{' '}
                  {node.parents.map((parent, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={(e) => {
                        e.stopPropagation();
                        openTopicModal(parent);
                      }}
                      className="hover:underline font-bold mr-1"
                    >
                      {parent}{pIdx < node.parents.length - 1 ? ',' : ''}
                    </button>
                  ))}
                </div>
              )}

              {node.children && node.children.length > 0 && (
                <div className="text-[11px] text-amber-800 dark:text-amber-400 font-medium">
                  Children:{' '}
                  {node.children.map((child, cIdx) => (
                    <button
                      key={cIdx}
                      onClick={(e) => {
                        e.stopPropagation();
                        openTopicModal(child);
                      }}
                      className="hover:underline font-bold mr-1"
                    >
                      {child}{cIdx < node.children.length - 1 ? ',' : ''}
                    </button>
                  ))}
                </div>
              )}

              <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
                {node.summary}
              </p>
            </div>

            <div className="pt-2 border-t border-amber-900/10 text-[10px] text-stone-500 font-mono">
              Scripture Citation: {node.keyScriptureRef}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

