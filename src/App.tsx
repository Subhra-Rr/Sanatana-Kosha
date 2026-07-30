import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { SearchModal } from './components/common/SearchModal';
import { SpiritualAssistantModal } from './components/ai/SpiritualAssistantModal';
import { TopicKnowledgeModal } from './components/common/TopicKnowledgeModal';

import { HomePage } from './pages/HomePage';
import { VedasPage } from './pages/VedasPage';
import { VedangasPage } from './pages/VedangasPage';
import { UpanishadsPage } from './pages/UpanishadsPage';
import { BhagavadGitaPage } from './pages/BhagavadGitaPage';
import { EpicsPage } from './pages/EpicsPage';
import { PuranasPage } from './pages/PuranasPage';
import { DarshanasPage } from './pages/DarshanasPage';
import { AcharyasPage } from './pages/AcharyasPage';
import { TemplesGeographyPage } from './pages/TemplesGeographyPage';
import { FestivalsPage } from './pages/FestivalsPage';
import { SanskritPage } from './pages/SanskritPage';
import { TimelinesPage } from './pages/TimelinesPage';
import { GenealogyPage } from './pages/GenealogyPage';
import { MyLibraryPage } from './pages/MyLibraryPage';

export default function App() {
  return (
    <Router>
      <AppProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
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
              <Route path="/sanskrit" element={<SanskritPage />} />
              <Route path="/timelines" element={<TimelinesPage />} />
              <Route path="/genealogy" element={<GenealogyPage />} />
              <Route path="/my-library" element={<MyLibraryPage />} />
            </Routes>
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

