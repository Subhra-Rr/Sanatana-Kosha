import React from 'react';
import { Link } from 'react-router-dom';
import { Diya } from './Diya';
import { BookOpen, Heart, Shield, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-amber-900/20 bg-gradient-to-b from-amber-100/60 to-amber-200/40 dark:from-stone-950 dark:to-stone-900 text-stone-800 dark:text-stone-200 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1: Logo & Vision */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Diya size="sm" />
            <span className="font-serif text-xl font-bold text-amber-900 dark:text-amber-100 sanskrit-font">
              सनातन कोष
            </span>
          </div>
          <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-serif">
            Sanatana Kosha is a world-class digital knowledge platform dedicated to preserving, organizing, and presenting the vast knowledge systems of Sanatana Dharma with academic integrity, factual precision, and respectful representation.
          </p>
          <div className="text-[11px] text-amber-800 dark:text-amber-400 font-serif italic">
            "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः"
          </div>
        </div>

        {/* Col 2: Knowledge Sections */}
        <div>
          <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-amber-900 dark:text-amber-200 mb-3 border-b border-amber-900/10 pb-1">
            Knowledge Modules
          </h4>
          <ul className="space-y-1.5 text-xs">
            <li><Link to="/library/vedas" className="hover:text-amber-600 transition-colors">The Four Vedas</Link></li>
            <li><Link to="/library/vedangas" className="hover:text-amber-600 transition-colors">Six Vedangas</Link></li>
            <li><Link to="/library/upanishads" className="hover:text-amber-600 transition-colors">108 Upanishads</Link></li>
            <li><Link to="/library/gita" className="hover:text-amber-600 transition-colors">Bhagavad Gita (18 Ch)</Link></li>
            <li><Link to="/library/epics" className="hover:text-amber-600 transition-colors">Ramayana & Mahabharata</Link></li>
            <li><Link to="/library/puranas" className="hover:text-amber-600 transition-colors">Mahapuranas</Link></li>
          </ul>
        </div>

        {/* Col 3: Philosophical Systems & Geography */}
        <div>
          <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-amber-900 dark:text-amber-200 mb-3 border-b border-amber-900/10 pb-1">
            Heritage & Schools
          </h4>
          <ul className="space-y-1.5 text-xs">
            <li><Link to="/philosophy" className="hover:text-amber-600 transition-colors">6 Classical Darshanas</Link></li>
            <li><Link to="/philosophy" className="hover:text-amber-600 transition-colors">Vedanta & Debates</Link></li>
            <li><Link to="/acharyas" className="hover:text-amber-600 transition-colors">Acharyas & 4 Peethas</Link></li>
            <li><Link to="/geography" className="hover:text-amber-600 transition-colors">Sacred Map & Temples</Link></li>
            <li><Link to="/festivals" className="hover:text-amber-600 transition-colors">Hindu Calendar & Panchang</Link></li>
            <li><Link to="/timelines" className="hover:text-amber-600 transition-colors">Historical Timelines</Link></li>
          </ul>
        </div>

        {/* Col 4: Integrity & Copyright */}
        <div className="space-y-3 text-xs">
          <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-amber-900 dark:text-amber-200 mb-3 border-b border-amber-900/10 pb-1">
            Academic & Public Interest
          </h4>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-[11px]">
            All images reference public domain archives (Wikimedia Commons, Museum Collections, Government Cultural Archives). No copyrighted Google Images are scraped or embedded.
          </p>
          <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-800/10 text-[11px] font-serif text-amber-900 dark:text-amber-200">
            <span className="font-bold">Neutrality & Respect:</span> Primary scriptures, commentaries, and traditions are clearly distinguished without sectarian bias.
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-amber-900/15 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
        <p>© {new Date().getFullYear()} Sanatana Kosha — The Eternal Knowledge Treasury. Built for lifelong learning and preservation.</p>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Shield className="w-3.5 h-3.5 text-amber-600" /> Public Knowledge Vault</span>
          <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5 text-amber-600" /> Offline PWA Ready</span>
        </div>
      </div>
    </footer>
  );
};
