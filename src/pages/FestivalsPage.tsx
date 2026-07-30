import React from 'react';
import { FESTIVALS_DATA } from '../data/festivals';
import { useApp } from '../context/AppContext';
import { Calendar, Sun, CheckCircle2, ExternalLink } from 'lucide-react';

export const FestivalsPage: React.FC = () => {
  const { openTopicModal } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Title */}
      <div className="text-center space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
          पर्वोत्सव-पञ्चाङ्गम् • Festivals & Vratas
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-serif max-w-2xl mx-auto leading-relaxed">
          Sacred celebrations calculated via the ancient luni-solar Hindu calendar (Panchang). Click any festival card to explore detailed knowledge.
        </p>
      </div>

      {/* Festivals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FESTIVALS_DATA.map((f) => (
          <div
            key={f.id}
            onClick={() => openTopicModal(f.name)}
            className="p-6 rounded-2xl bg-amber-50/90 dark:bg-stone-900 border border-amber-800/20 shadow-md space-y-4 flex flex-col justify-between hover:border-amber-600 transition-all hover:-translate-y-1 cursor-pointer group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-amber-900/10 pb-2">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-amber-950 dark:text-amber-100 group-hover:text-amber-700 transition-colors flex items-center gap-1.5">
                    {f.name}
                    <ExternalLink className="w-3.5 h-3.5 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <span className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font">
                    ({f.sanskritName})
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-600/20 text-amber-900 dark:text-amber-200">
                  {f.lunarMonth}
                </span>
              </div>

              <div className="text-xs font-semibold text-amber-800 dark:text-amber-400">
                Tithi: {f.tithi} • Deity: {f.deityAssociated}
              </div>

              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
                {f.significance}
              </p>

              <div className="space-y-1 pt-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                  Rituals & Observances
                </span>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-stone-600 dark:text-stone-300 font-serif">
                  {f.ritualsAndObservances.map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-amber-900/10 text-xs text-stone-600 dark:text-stone-400 font-serif italic">
              <span className="font-bold font-sans not-italic text-amber-900 dark:text-amber-300">Scriptural Origin:</span> {f.scripturalOrigin}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

