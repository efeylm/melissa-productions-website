import { SITE_CONFIG } from '../data/content';
import whatsappIcon from '../assets/whatsapp-whats-app-svgrepo-com.svg';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Merhaba Melissa Productions, etkinlik organizasyonu ve bando/orkestra kiralama hakkında bilgi almak istiyorum.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip text */}
      <div className="hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl glass-panel-heavy border border-white/20 text-xs font-semibold text-white shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        WhatsApp Teklif Hattı 💬
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="relative flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="WhatsApp ile iletişime geçin"
      >
        {/* Pulse glow effect */}
        <span className="absolute inset-1 rounded-full bg-[#25D366]/30 blur-md animate-ping -z-10" />

        {/* Authentic WhatsApp Speech Bubble Icon */}
        <img
          src={whatsappIcon}
          alt="WhatsApp Teklif Hattı"
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain filter drop-shadow-[0_4px_20px_rgba(37,211,102,0.65)] hover:drop-shadow-[0_0_30px_rgba(37,211,102,0.9)] transition-all"
        />
      </a>
    </div>
  );
}
