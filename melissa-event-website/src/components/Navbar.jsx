import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import logoYatayGala from '../assets/11-yatay-gala-lacivert.svg';
import whatsappIcon from '../assets/whatsapp-whats-app-svgrepo-com.svg';

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Ana Sayfa', href: '#hero' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'Bandolarımız', href: '#bands' },
    { name: 'Orkestralarımız', href: '#orchestras' },
    { name: 'DJ & Live', href: '#dj-live' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'İletişim', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#090c10]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-2.5 sm:py-3'
            : 'bg-[#090c10]/75 lg:bg-transparent backdrop-blur-xl lg:backdrop-blur-none border-b border-white/10 lg:border-transparent py-3 sm:py-5 shadow-lg lg:shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#hero"
            className="flex items-center group focus:outline-none"
          >
            <img
              src={logoYatayGala}
              alt="Melissa Production & Organization"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain rounded-xl border border-white/10 shadow-lg group-hover:scale-105 group-hover:border-primary/40 transition-all duration-300 filter drop-shadow-[0_0_12px_rgba(242,206,120,0.3)]"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'text-primary bg-primary/10 border border-primary/20'
                        : 'text-on-surface/75 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex btn-gradient px-5 py-2.5 rounded-full text-white font-medium text-xs tracking-wider uppercase items-center gap-2 cursor-pointer shadow-lg active:scale-95 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Teklif Al</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 border border-white/20 text-white hover:border-primary/50 focus:outline-none cursor-pointer flex items-center justify-center"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Drawer */}
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#0e1116] border-l border-white/15 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300">
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                <img
                  src={logoYatayGala}
                  alt="Melissa Production & Organization"
                  className="h-10 w-auto object-contain rounded-xl border border-white/10 filter drop-shadow-[0_0_10px_rgba(242,206,120,0.4)]"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-white/10 border border-white/15 text-white hover:text-primary focus:outline-none cursor-pointer"
                  aria-label="Menüyü Kapat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ul className="space-y-1.5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-2.5 rounded-xl text-sm font-semibold tracking-wide text-on-surface hover:text-primary hover:bg-white/5 transition-all"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10 mt-6">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full btn-gradient py-3.5 rounded-xl text-white font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Hemen Teklif Al</span>
              </button>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=Merhaba,%20etkinlik%20organizasyonu%20hakkında%20bilgi%20almak%20istiyorum.`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl glass-panel text-center text-xs font-medium text-secondary hover:text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
                <span>WhatsApp Doğrudan Destek</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
