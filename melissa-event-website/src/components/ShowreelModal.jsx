import { useEffect } from 'react';
import { X, Sparkles, Volume2, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export default function ShowreelModal({ isOpen, onClose, onOpenQuote }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-3xl overflow-hidden glass-panel-heavy border border-white/20 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-display font-bold text-sm sm:text-base text-white">
              Melissa Production Showreel 2026
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full glass-panel text-on-surface-variant hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Visual Simulation Container */}
        <div className="relative aspect-video w-full bg-[#05070a] overflow-hidden group">
          {/* Showcase Video Poster / Animated Player Element */}
          <img
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80"
            alt="Melissa Productions Showreel"
            className="w-full h-full object-cover opacity-80"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-transparent to-[#090c10]/60" />

          {/* Central Performance Visual Highlight */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-2xl mb-4 border border-white/30 animate-pulse">
              <Volume2 className="w-8 h-8 text-[#090c10]" />
            </div>
            <h3 className="font-display font-bold text-xl sm:text-3xl text-white tracking-tight">
              Ayyıldız Bandosu • Bando Fenomeno • Canlı Orkestralar
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-lg mt-2">
              Bursa, İstanbul ve tüm Marmara'da 500'ün üzerinde kurumsal etkinlik, açılış ve lüks düğün performansı.
            </p>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="p-5 sm:p-6 bg-[#111417]/80 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-on-surface-variant text-center sm:text-left">
            Etkinliğiniz için uygun performans kadrosunu belirlemek üzere hemen iletişime geçin.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="w-full sm:w-auto btn-gradient py-3 px-6 rounded-xl text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Etkinliğin İçin Teklif Al</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
