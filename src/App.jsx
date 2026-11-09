import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import PopularLinks from './components/PopularLinks';
import FeatureHighlight from './components/FeatureHighlight';
import PricingSection from './components/PricingSection';
import TestimonialSection from './components/TestimonialSection';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import QrModal from './components/QrModal';
import AuthModal from './components/AuthModal';
import { initialPopularLinks } from './data/mockData';

export default function App() {
  const [links, setLinks] = useState(initialPopularLinks);
  const [selectedQrLink, setSelectedQrLink] = useState(null);
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'login' });

  const handleAddLink = (newLink) => {
    setLinks((prev) => [newLink, ...prev]);
  };

  const handleAuthOpen = (mode = 'login') => {
    setAuthModal({ isOpen: true, mode });
  };

  const handleAuthClose = () => {
    setAuthModal({ isOpen: false, mode: 'login' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfcff] text-slate-800 font-sans selection:bg-[#5842ed] selection:text-white">
    
      <Navbar onAuthClick={handleAuthOpen} />

      
      <main className="flex-1">
        
        <HeroSection onAddLink={handleAddLink} onAuthClick={handleAuthOpen} />

      
        <StatsSection />

       
        <PopularLinks links={links} onSelectQr={(link) => setSelectedQrLink(link)} />

       
        <FeatureHighlight />

        {/* 6. Pricing Section */}
        <PricingSection onPlanSelect={() => handleAuthOpen('signup')} />

        {/* 7. Testimonials Section */}
        <TestimonialSection />

        {/* 8. Why Choose Our Platform Grid */}
        <WhyChooseUs />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Interactive Modal: QR Code */}
      {selectedQrLink && (
        <QrModal
          link={selectedQrLink}
          onClose={() => setSelectedQrLink(null)}
        />
      )}

      {/* Interactive Modal: Authentication */}
      {authModal.isOpen && (
        <AuthModal
          initialMode={authModal.mode}
          onClose={handleAuthClose}
        />
      )}
    </div>
  );
}
