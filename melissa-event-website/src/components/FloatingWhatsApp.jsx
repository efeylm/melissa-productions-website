import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Merhaba Melissa Productions, etkinlik organizasyonu ve bando/orkestra kiralama hakkında bilgi almak istiyorum.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip text */}
      <div className="hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl glass-panel-heavy border border-white/20 text-xs font-semibold text-white shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        WhatsApp Teklif Hattı 💬
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_0_35px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 relative"
        aria-label="WhatsApp ile iletişime geçin"
      >
        <MessageCircle className="w-7 h-7 fill-white/10" />

        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10" />
      </a>
    </div>
  );
}
