import { SITE_CONFIG } from '../data/content';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface-container-lowest border-t border-white/10 pt-16 pb-12 relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#090c10] rounded-[10px] flex items-center justify-center">
                  <span className="font-display font-black text-xl text-primary">M</span>
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white tracking-tight block">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-[10px] text-secondary font-medium tracking-widest uppercase">
                  Sahne &amp; Gösteri Sanatları
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-sm">
              Bursa, İstanbul ve tüm Marmara Bölgesi'nde kurumsal etkinlikler, resmi törenler, bando şovları ve seçkin orkestra prodüksiyonları.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-on-surface-variant hover:text-white hover:border-primary/40 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={SITE_CONFIG.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl glass-panel flex items-center justify-center text-on-surface-variant hover:text-white hover:border-primary/40 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-secondary">
              Sayfalar
            </h4>
            <ul className="space-y-2 text-xs text-on-surface-variant">
              <li><a href="#hero" className="hover:text-primary transition-colors">Ana Sayfa</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Hakkımızda</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Hizmetlerimiz</a></li>
              <li><a href="#bands" className="hover:text-primary transition-colors">Bandolarımız</a></li>
              <li><a href="#orchestras" className="hover:text-primary transition-colors">Orkestralarımız</a></li>
              <li><a href="#gallery" className="hover:text-primary transition-colors">Galeri</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-secondary">
              Performanslar
            </h4>
            <ul className="space-y-2 text-xs text-on-surface-variant">
              <li><a href="#bands" className="hover:text-primary transition-colors">Ayyıldız Bandosu</a></li>
              <li><a href="#bands" className="hover:text-primary transition-colors">Bando Fenomeno</a></li>
              <li><a href="#orchestras" className="hover:text-primary transition-colors">Latin Orkestrası</a></li>
              <li><a href="#orchestras" className="hover:text-primary transition-colors">Davet Orkestrası</a></li>
              <li><a href="#dj-live" className="hover:text-primary transition-colors">DJ &amp; Saksafon Live</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Trio Karşılama</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-secondary">
              Hızlı İletişim
            </h4>
            <ul className="space-y-2 text-xs text-on-surface-variant">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`} className="hover:text-white font-medium">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-secondary" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-tertiary" />
                <span>{SITE_CONFIG.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant/70">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. Tüm Hakları Saklıdır.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-secondary transition-colors">KVKK Aydınlatma Metni</a>
            <a href="#" className="hover:text-secondary transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-secondary transition-colors">Kullanım Koşulları</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl glass-panel text-on-surface-variant hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            aria-label="Yukarı Çık"
          >
            <span className="text-[10px] uppercase font-semibold">Yukarı</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
