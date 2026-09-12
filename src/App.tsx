import React from 'react';
import { BureauProvider, useBureau } from './context/BureauContext';
import { MarqueeBanner } from './components/MarqueeBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EventsSection } from './components/EventsSection';
import { CommunityStories } from './components/CommunityStories';
import { Footer } from './components/Footer';

import { TinkerBotChat } from './components/TinkerBotChat';
import { CoconutDrop } from './components/CoconutDrop';
import { ToastNotification } from './components/ToastNotification';
import { ChairHistoryModal } from './components/ChairHistoryModal';
import { UselessProjectsModal } from './components/UselessProjectsModal';
import { ContactDistanceModal } from './components/ContactDistanceModal';
import { JoinModal } from './components/JoinModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { LoginRankModal } from './components/LoginRankModal';

function MainLayout() {
  const { brightMode } = useBureau();

  const brightClass = brightMode === 1 ? 'bright-mode-1' : brightMode === 2 ? 'bright-mode-2' : '';

  return (
    <div className={`min-h-screen relative overflow-x-hidden transition-all duration-300 ${brightClass}`}>
      {/* Top Slanted Marquee Banner */}
      <MarqueeBanner />

      {/* Main Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Section matching Screenshot 1 */}
        <HeroSection />

        {/* Events Registration Section matching Screenshot 2 & 4 JPEG Posters */}
        <EventsSection />

        {/* Community Stories matching Screenshot 3 */}
        <CommunityStories />
      </main>

      {/* Simplified Footer with FAQ */}
      <Footer />

      {/* Tanker AI Chatbot */}
      <TinkerBotChat />

      {/* Bouncing Coconuts Canvas */}
      <CoconutDrop />

      {/* Toast Notification */}
      <ToastNotification />

      {/* Gag Modals */}
      <ChairHistoryModal />
      <UselessProjectsModal />
      <ContactDistanceModal />
      <JoinModal />
      <PrivacyPolicyModal />
      <LoginRankModal />
    </div>
  );
}

export function App() {
  return (
    <BureauProvider>
      <MainLayout />
    </BureauProvider>
  );
}

export default App;
