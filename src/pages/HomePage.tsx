import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { panchangService } from '../services/panchangService';
import { audioService } from '../services/audioService';
import { VEDAS_DATA } from '../data/vedas';
import { ACHARYAS_DATA } from '../data/acharyas';
import { Diya } from '../components/common/Diya';
import { CitationBadge } from '../components/common/CitationBadge';
import { DailyShloka } from '../components/home/DailyShloka';
import { KnowledgeGraph } from '../components/common/KnowledgeGraph';
import {
  BookOpen,
  Sparkles,
  Volume2,
  Calendar,
  Sun,
  Compass,
  Landmark,
  ChevronRight,
  Bookmark,
  Share2,
  CheckCircle2,
  Layers,
  GraduationCap
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { playBell, playConch, toggleBookmark, isBookmarked, openTopicModal } = useApp();
  const panchang = panchangService.getTodayPanchang();
  const dailyVerse = panchang.dailyShloka;

  const [activeVedaIdx, setActiveVedaIdx] = useState(0);
  const currentVeda = VEDAS_DATA[activeVedaIdx];

  const handleSpeakShloka = () => {
    audioService.speakSanskrit(dailyVerse.sanskrit);
  };

  const POPULAR_TOPICS = [
    'Rigveda', 'Yajurveda', 'Samaveda', 'Atharvaveda',
    'Shiksha', 'Kalpa', 'Vyakarana', 'Nirukta', 'Chandas', 'Jyotisha',
    'Isha Upanishad', 'Kena Upanishad', 'Katha Upanishad', 'Prashna Upanishad', 'Mundaka Upanishad', 'Mandukya Upanishad', 'Chandogya Upanishad', 'Brihadaranyaka Upanishad',
    'Nasoiya Sukta', 'Purusha Sukta', 'Sri Sukta', 'Gayatri Mantra', 'Maha Mrityunjaya Mantra',
    'Bhagavad Gita', 'Advaita Vedanta', 'Sankhya', 'Yoga Sutras of Patanjali', 'Nyaya', 'Vaisheshika', 'Mimamsa',
    'Vishnu Purana', 'Shiva Purana', 'Srimad Bhagavatam', 'Devi Bhagavata Purana',
    'Adi Shankaracharya', 'Ramanujacharya', 'Madhvacharya', 'Sringeri Sharada Peetham',
    '12 Jyotirlingas', '51 Shakti Peethas', 'Char Dham'
  ];


  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Ancient Temple Atmosphere */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 bg-mandala border-b border-amber-900/15 overflow-hidden">
        {/* Soft Ambient Light Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-amber-700/5 to-transparent pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center space-y-8 z-10">
          {/* Animated Diya Banner */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-800/20 text-amber-900 dark:text-amber-200 text-xs font-serif shadow-sm">
            <Diya size="sm" />
            <span>Sacred Knowledge Treasury • The Eternal Path</span>
            <Diya size="sm" />
          </div>

          {/* Main Title */}
          <div className="space-y-3">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-amber-950 dark:text-amber-100 sanskrit-font leading-tight">
              सनातन कोषः
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-amber-800/90 dark:text-amber-300/90 max-w-2xl mx-auto font-serif leading-relaxed">
              The world's most comprehensive digital platform for Hindu philosophy, Vedic literature, scriptures, traditions, sacred geography, and spiritual heritage.
            </p>
          </div>

          {/* Rotating Vedas Selector Card */}
          <div className="max-w-3xl mx-auto bg-amber-100/60 dark:bg-stone-900/80 border border-amber-800/20 rounded-2xl p-4 sm:p-6 shadow-xl backdrop-blur-sm text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-amber-900/10 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-amber-600" /> The Four Vedas (चतुर्वेदाः)
              </span>
              <div className="flex items-center gap-1.5 text-xs flex-wrap">
                {VEDAS_DATA.map((veda, idx) => (
                  <button
                    key={veda.id}
                    onClick={() => setActiveVedaIdx(idx)}
                    className={`px-3 py-1.5 rounded-lg font-serif transition-colors min-h-[38px] flex items-center justify-center ${
                      activeVedaIdx === idx
                        ? 'bg-amber-700 text-white font-bold shadow-sm'
                        : 'bg-stone-200/50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300'
                    }`}
                  >
                    {veda.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-950 dark:text-amber-100">
                  {currentVeda.title} ({currentVeda.sanskritTitle})
                </h3>
                <span className="text-xs text-amber-800 dark:text-amber-400 font-medium">
                  {currentVeda.versesCount.toLocaleString()} Verses • {currentVeda.sectionsCount} Sections
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
                {currentVeda.summary}
              </p>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex gap-2 text-[11px] text-amber-900 dark:text-amber-300 font-medium">
                  <span>Period: {currentVeda.historicalPeriod}</span>
                </div>
                <Link
                  to="/library/vedas"
                  className="text-xs font-semibold text-amber-700 dark:text-amber-300 hover:underline flex items-center gap-1"
                >
                  <span>Explore {currentVeda.title}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/library/gita"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 text-amber-50 hover:from-amber-800 hover:to-amber-950 font-serif font-semibold text-sm shadow-lg border border-amber-400/30 transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Bhagavad Gita</span>
            </Link>
            <button
              onClick={playConch}
              className="px-5 py-3 rounded-xl bg-amber-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-amber-800/20 hover:border-amber-600 font-serif font-medium text-sm transition-all flex items-center gap-2 shadow-sm"
            >
              <Volume2 className="w-4 h-4 text-amber-700" />
              <span>Sound Conch Shell</span>
            </button>
            <Link
              to="/geography"
              className="px-5 py-3 rounded-xl bg-amber-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-amber-800/20 hover:border-amber-600 font-serif font-medium text-sm transition-all flex items-center gap-2 shadow-sm"
            >
              <Compass className="w-4 h-4 text-amber-700" />
              <span>Sacred Geography Map</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Today's Panchang & Comprehensive Daily Shloka / Mantra Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Panchang Bar */}
        <div className="bg-amber-100/50 dark:bg-stone-900/80 border border-amber-800/20 rounded-2xl p-5 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5 text-amber-600" />
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 font-serif block">
                  Panchang Snapshot (पञ्चाङ्गम्)
                </span>
                <span className="text-xs font-semibold text-amber-800 dark:text-amber-400">
                  {panchang.dateString}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-serif">
              <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/10">
                <span className="text-stone-500 block text-[9px]">TITHI</span>
                <span className="font-bold text-amber-950 dark:text-amber-100">
                  {panchang.tithi.name} ({panchang.tithi.paksha})
                </span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/10">
                <span className="text-stone-500 block text-[9px]">NAKSHATRA</span>
                <span className="font-bold text-amber-950 dark:text-amber-100">
                  {panchang.nakshatra.name}
                </span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/10">
                <span className="text-stone-500 block text-[9px]">YOGA</span>
                <span className="font-bold text-amber-950 dark:text-amber-100">{panchang.yoga}</span>
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/10">
                <span className="text-stone-500 block text-[9px]">RAHUKAAL</span>
                <span className="font-bold text-amber-950 dark:text-amber-100">{panchang.rahukaal}</span>
              </div>
            </div>

            {panchang.festivalToday && (
              <div className="px-3 py-1.5 bg-gradient-to-r from-amber-600 to-amber-800 text-white rounded-xl text-xs font-serif font-bold text-center shadow-sm">
                {panchang.festivalToday}
              </div>
            )}
          </div>
        </div>

        {/* Daily Shloka & Gods-Goddesses Mantra Treasury Component */}
        <DailyShloka />
      </section>

      {/* Main Knowledge Hub Modules Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
            ज्ञानकोषविभागाः • Knowledge Sections
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-serif max-w-xl mx-auto">
            Explore primary scriptures, classical commentaries, philosophical systems, Acharyas, sacred temples, and Sanskrit learning tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'The Four Vedas',
              sanskrit: 'चतुर्वेदाः',
              desc: 'Rigveda, Yajurveda, Samaveda, Atharvaveda hymns, branches, and philosophy.',
              path: '/library/vedas',
              count: '10,552+ Mantras'
            },
            {
              title: '108 Upanishads',
              sanskrit: 'उपनिषदः',
              desc: 'Principal Upanishads, Mahavakya analysis, dialogues, and Non-dual wisdom.',
              path: '/library/upanishads',
              count: '108 Sacred Texts'
            },
            {
              title: 'Bhagavad Gita',
              sanskrit: 'श्रीमद्भगवद्गीता',
              desc: '18 Chapters, 700 verses, word-by-word meanings, Shankara & Ramanuja commentaries.',
              path: '/library/gita',
              count: '700 Verses'
            },
            {
              title: 'Epics (Ramayana & Mahabharata)',
              sanskrit: 'इतिहासः',
              desc: 'Valmiki, Ramcharitmanas, 18 Parvas, Yaksha Prashna, genealogies, and character profiles.',
              path: '/library/epics',
              count: 'Full Lineages'
            },
            {
              title: 'Mahapuranas & Upapuranas',
              sanskrit: 'पुराणानि',
              desc: '18 Mahapuranas, 18 Upapuranas, cosmological time cycles, and sacred legends.',
              path: '/library/puranas',
              count: '36 Puranas'
            },
            {
              title: '6 Classical Darshanas',
              sanskrit: 'षड्दर्शनानि',
              desc: 'Nyaya, Vaisheshika, Samkhya, Yoga, Purva Mimamsa, Vedanta & neutral comparative debates.',
              path: '/philosophy',
              count: '6 Systems'
            },
            {
              title: 'Acharyas & 4 Peethas',
              sanskrit: 'आचार्याः पीठानि च',
              desc: 'Adi Shankaracharya, Ramanujacharya, Madhvacharya, Chaitanya, Sringeri, Puri, Dwarka, Jyotirmath.',
              path: '/acharyas',
              count: '4 Mathas & Lineages'
            },
            {
              title: 'Sacred Geography & Temples',
              sanskrit: 'तीर्थानि मन्दिराणि च',
              desc: 'Interactive map, 12 Jyotirlingas, 51 Shakti Peethas, Char Dham, 108 Divya Desams.',
              path: '/geography',
              count: 'Interactive Maps'
            },
            {
              title: 'Sanskrit Learning Hub',
              sanskrit: 'संस्कृतशिक्षाहब',
              desc: 'Devanagari vowels, consonants, pronunciation rules, Subhashitas, and practice exercises.',
              path: '/sanskrit',
              count: 'Interactive Guide'
            }
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="group p-6 rounded-2xl bg-amber-50/80 dark:bg-stone-900/80 border border-amber-800/20 hover:border-amber-600 transition-all shadow-md hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg font-bold text-amber-950 dark:text-amber-100 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </span>
                  <span className="text-xs text-amber-800 dark:text-amber-300 font-serif sanskrit-font">
                    {item.sanskrit}
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-serif">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-amber-900/10 flex items-center justify-between text-xs text-amber-800 dark:text-amber-400 font-medium">
                <span>{item.count}</span>
                <span className="flex items-center gap-1 group-hover:underline">
                  Explore <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recursive Knowledge Graph Relationship Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <KnowledgeGraph />
      </section>

      {/* Interactive Popular Topics Knowledge Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="p-8 rounded-3xl bg-amber-100/60 dark:bg-stone-900 border border-amber-800/20 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-900/15 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-800 dark:text-amber-400">
                INTERACTIVE KNOWLEDGE BASE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-950 dark:text-amber-100 sanskrit-font">
                लोकप्रियविषयाः • Click Any Topic for Instant Knowledge
              </h2>
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-300 font-serif max-w-md">
              Select any topic below to open the Knowledge Modal containing Sanskrit verse recitations, commentary, summaries, and key insights.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-serif">
            {POPULAR_TOPICS.map((topic, idx) => (
              <button
                key={idx}
                onClick={() => openTopicModal(topic)}
                className="px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-600 hover:text-white text-amber-950 dark:text-amber-200 border border-amber-800/15 hover:border-amber-600 font-medium transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <span>{topic}</span>
                <Sparkles className="w-3 h-3 text-amber-600 hover:text-white" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

