import { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, Sparkles, Send, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export default function ContactSection({ onOpenQuote }) {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleQuickContact = (e) => {
    e.preventDefault();
    setSent(true);

    const text = `Merhaba Melissa Productions,\n\nİletişim Formundan Mesaj:\n- *İsim:* ${formState.name}\n- *Telefon:* ${formState.phone}\n- *Mesaj:* ${formState.message}`;
    const url = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(url, '_blank');
    }, 400);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-[#090c10] overflow-hidden">
      {/* Central Ambient Glow */}
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Spotlight Box */}
        <div className="glass-panel-heavy rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/20 shadow-2xl mb-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
              Unutulmaz Performanslar İçin
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-6">
            Bir Sonraki Etkinliğinizi <br className="hidden sm:inline" />
            <span className="text-gradient">Birlikte Tasarlayalım.</span>
          </h2>

          <p className="text-on-surface-variant text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Açılış, tören, bando şovu veya özel davet orkestrası... Detayları konuşmak ve size özel bir teklif oluşturmak için hemen iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Merhaba, etkinlik ve performans hizmetleriniz için teklif almak istiyorum.')}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto btn-gradient px-8 py-4 rounded-full text-white font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(96,1,209,0.6)] active:scale-95 transition-all"
            >
              <MessageSquare className="w-5 h-5 fill-white/20" />
              <span>WhatsApp ile Hızlı Teklif Al</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-8 py-4 rounded-full btn-glass text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Contact Info & Fast Message Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <h3 className="font-display font-bold text-2xl text-white mb-6">
              İletişim &amp; Hizmet Noktaları
            </h3>

            <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Hizmet Bölgelerimiz</h4>
                <p className="text-xs text-on-surface-variant mt-1">
                  Bursa • İstanbul • Marmara Bölgesi • İzmir &amp; Turizm Merkezleri
                </p>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Telefon &amp; WhatsApp Hattı</h4>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
                  className="text-xs text-primary hover:underline mt-1 block font-semibold"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-white/10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">E-Posta</h4>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-xs text-on-surface-variant hover:text-white mt-1 block"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Box */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/15 text-left">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2">
              Bize Mesaj Gönderin
            </h3>
            <p className="text-xs sm:text-sm text-on-surface-variant mb-6">
              Aklınızdaki organizasyonu kısaca özetleyin, sizinle derhal iletişime geçelim.
            </p>

            {sent ? (
              <div className="p-6 rounded-2xl bg-primary/10 border border-primary/30 text-center space-y-2">
                <CheckCircle className="w-8 h-8 text-primary mx-auto" />
                <p className="text-sm font-bold text-white">Mesajınız WhatsApp'a Yönlendirildi</p>
                <p className="text-xs text-on-surface-variant">Temsilcimiz en kısa sürede dönüş yapacaktır.</p>
              </div>
            ) : (
              <form onSubmit={handleQuickContact} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-on-surface mb-1">
                      Adınız Soyadınız
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Adınız..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-on-surface mb-1">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="05XX XXX XX XX"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-on-surface mb-1">
                    Organizasyon Detayları / Notunuz
                  </label>
                  <textarea
                    rows="3"
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tarih, şehir, talep edilen bando/orkestra konsepti..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gradient w-full py-3.5 rounded-xl text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Mesajı Gönder (WhatsApp)</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
