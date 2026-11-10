import { useState } from "react";
import AuthModal from "./components/AuthModal";
import FeatureHighlight from "./components/FeatureHighlight";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PopularLinks from "./components/PopularLinks";
import PricingSection from "./components/PricingSection";
import QrModal from "./components/QrModal";
import StatsSection from "./components/StatsSection";
import TestimonialSection from "./components/TestimonialSection";
import WhyChooseUs from "./components/WhyChooseUs";
import { initialPopularLinks } from "./data/mockData";

export default function App() {
  const [links, setLinks] = useState(initialPopularLinks);
  const [selectedQrLink, setSelectedQrLink] = useState(null);
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: "login" });

  const handleAddLink = (newLink) => {
    setLinks((prev) => [newLink, ...prev]);
  };

  const handleAuthOpen = (mode = "login") => {
    setAuthModal({ isOpen: true, mode });
  };

  const handleAuthClose = () => {
    setAuthModal({ isOpen: false, mode: "login" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfcff] text-slate-800 font-sans selection:bg-[#5842ed] selection:text-white">
      <Navbar onAuthClick={handleAuthOpen} />

      <main className="flex-1">
        <HeroSection onAddLink={handleAddLink} onAuthClick={handleAuthOpen} />

        <StatsSection />

        <PopularLinks
          links={links}
          onSelectQr={(link) => setSelectedQrLink(link)}
        />

        <FeatureHighlight />

        <PricingSection onPlanSelect={() => handleAuthOpen("signup")} />

        <TestimonialSection />

        <WhyChooseUs />
      </main>

      <Footer />

      {selectedQrLink && (
        <QrModal
          link={selectedQrLink}
          onClose={() => setSelectedQrLink(null)}
        />
      )}

      {authModal.isOpen && (
        <AuthModal initialMode={authModal.mode} onClose={handleAuthClose} />
      )}
    </div>
  );
}
