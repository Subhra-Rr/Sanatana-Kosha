import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { SearchModal } from './components/common/SearchModal';
import { SpiritualAssistantModal } from './components/ai/SpiritualAssistantModal';
import { TopicKnowledgeModal } from './components/common/TopicKnowledgeModal';
import { Sparkles } from 'lucide-react';

const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const VedasPage = lazy(() => import('./pages/VedasPage').then(m => ({ default: m.VedasPage })));
const VedangasPage = lazy(() => import('./pages/VedangasPage').then(m => ({ default: m.VedangasPage })));
const UpanishadsPage = lazy(() => import('./pages/UpanishadsPage').then(m => ({ default: m.UpanishadsPage })));
const BhagavadGitaPage = lazy(() => import('./pages/BhagavadGitaPage').then(m => ({ default: m.BhagavadGitaPage })));
const EpicsPage = lazy(() => import('./pages/EpicsPage').then(m => ({ default: m.EpicsPage })));
const PuranasPage = lazy(() => import('./pages/PuranasPage').then(m => ({ default: m.PuranasPage })));
const DarshanasPage = lazy(() => import('./pages/DarshanasPage').then(m => ({ default: m.DarshanasPage })));
const AcharyasPage = lazy(() => import('./pages/AcharyasPage').then(m => ({ default: m.AcharyasPage })));
const TemplesGeographyPage = lazy(() => import('./pages/TemplesGeographyPage').then(m => ({ default: m.TemplesGeographyPage })));
const FestivalsPage = lazy(() => import('./pages/FestivalsPage').then(m => ({ default: m.FestivalsPage })));
const TimelinesPage = lazy(() => import('./pages/TimelinesPage').then(m => ({ default: m.TimelinesPage })));
const GenealogyPage = lazy(() => import('./pages/GenealogyPage').then(m => ({ default: m.GenealogyPage })));
const MyLibraryPage = lazy(() => import('./pages/MyLibraryPage').then(m => ({ default: m.MyLibraryPage })));

const PageFallback: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3 p-8 text-amber-300">
    <Sparkles className="w-8 h-8 animate-spin text-amber-600" style={{ animationDuration: '3s' }} />
    <span className="font-serif text-sm font-medium tracking-wide">Loading Sacred Wisdom...</span>
  </div>
);

export default function App() {
  return (
    <Router>
      <AppProvider>
        <div className="flex flex-col min-h-screen bg-stone-950 text-amber-100 overflow-x-hidden">
          <Header />
          <main className="flex-1 w-full overflow-x-hidden">
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/library/vedas" element={<VedasPage />} />
                <Route path="/library/vedangas" element={<VedangasPage />} />
                <Route path="/library/upanishads" element={<UpanishadsPage />} />
                <Route path="/library/gita" element={<BhagavadGitaPage />} />
                <Route path="/library/epics" element={<EpicsPage />} />
                <Route path="/library/puranas" element={<PuranasPage />} />
                <Route path="/philosophy" element={<DarshanasPage />} />
                <Route path="/acharyas" element={<AcharyasPage />} />
                <Route path="/geography" element={<TemplesGeographyPage />} />
                <Route path="/festivals" element={<FestivalsPage />} />
                <Route path="/timelines" element={<TimelinesPage />} />
                <Route path="/genealogy" element={<GenealogyPage />} />
                <Route path="/my-library" element={<MyLibraryPage />} />
                <Route path="/library/my-library" element={<MyLibraryPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <SearchModal />
          <SpiritualAssistantModal />
          <TopicKnowledgeModal />
        </div>
      </AppProvider>
    </Router>
  );
}

