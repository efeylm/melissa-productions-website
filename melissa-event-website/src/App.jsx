import { useState } from 'react';
import BackgroundShader from './components/BackgroundShader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import BandsSection from './components/BandsSection';
import OrchestrasSection from './components/OrchestrasSection';
import DjLiveSection from './components/DjLiveSection';
import ShowcaseGallery from './components/ShowcaseGallery';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import QuoteModal from './components/QuoteModal';
import ShowreelModal from './components/ShowreelModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [showreelModalOpen, setShowreelModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('');

  const handleOpenQuote = (serviceName = '') => {
    setSelectedServiceForQuote(serviceName);
    setQuoteModalOpen(true);
  };

  const handleOpenShowreel = () => {
    setShowreelModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#090c10] text-[#e1e2e7] selection:bg-[#2563eb] selection:text-white overflow-x-hidden w-full">
      {/* Interactive WebGL Shader Canvas Background */}
      <BackgroundShader />

      {/* Fixed Navigation Bar */}
      <Navbar onOpenQuote={() => handleOpenQuote('Genel Teklif Talebi')} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenShowreel={handleOpenShowreel}
          onOpenQuote={() => handleOpenQuote('Genel Teklif Talebi')}
        />

        <AboutSection onOpenQuote={() => handleOpenQuote('Kurumsal Etkinlik')} />

        <ServicesSection onSelectService={(service) => handleOpenQuote(service)} />

        <BandsSection onSelectBand={(band) => handleOpenQuote(band)} />

        <OrchestrasSection onSelectOrchestra={(orch) => handleOpenQuote(orch)} />

        <DjLiveSection onSelectConcept={(concept) => handleOpenQuote(concept)} />

        <ShowcaseGallery />

        <TestimonialsSection />

        <FaqSection />

        <ContactSection onOpenQuote={() => handleOpenQuote('İletişim Formu')} />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Quote Planning Wizard Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedService={selectedServiceForQuote}
      />

      {/* Showreel Video Modal */}
      <ShowreelModal
        isOpen={showreelModalOpen}
        onClose={() => setShowreelModalOpen(false)}
        onOpenQuote={() => handleOpenQuote('Showreel Sonrası Teklif')}
      />
    </div>
  );
}
