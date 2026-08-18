import { useState, useEffect } from 'react';
import { X, Send, Sparkles, Phone, MessageSquare, CheckCircle, Calendar, MapPin, Users } from 'lucide-react';
import { SITE_CONFIG, SERVICES } from '../data/content';
import emblemGold from '../assets/01-amblem-BUYUK-altin-seffaf.svg';
import whatsappIcon from '../assets/whatsapp-whats-app-svgrepo-com.svg';

export default function QuoteModal({ isOpen, onClose, preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService || 'Ayyıldız Bandosu',
    city: 'Bursa',
    date: '',
    guests: '100-300 Kişi',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      setSubmitted(false);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Format WhatsApp Message
    const message = `Merhaba Melissa Productions,\n\n*Hızlı Teklif Talebi:*\n- *Ad / Kurum:* ${formData.name}\n- *Telefon:* ${formData.phone}\n- *Hizmet / Konsept:* ${formData.service}\n- *Şehir / Bölge:* ${formData.city}\n- *Etkinlik Tarihi:* ${formData.date || 'Belirtilmedi'}\n- *Katılımcı Sayısı:* ${formData.guests}\n- *Ek Notlar:* ${formData.notes || 'Yok'}\n\nDetaylı teklif ve müsaitlik durumu hakkında bilgi almak istiyorum.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-3xl overflow-hidden glass-panel-heavy border border-white/20 shadow-2xl p-6 sm:p-8 my-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full glass-panel text-on-surface-variant hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-2 border border-primary/30">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-display font-bold text-2xl text-white">
              Teklif Talebiniz Hazırlandı!
            </h3>
            <p className="text-sm text-on-surface-variant max-w-md mx-auto">
              Talebiniz WhatsApp üzerinden yetkili temsilcimize aktarılıyor. Sayfa açılmadıysa aşağıdaki butona basabilirsiniz.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent('Merhaba, az önce web sitenizden teklif formu oluşturdum.')}`}
                target="_blank"
                rel="noreferrer"
                className="btn-gradient px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-white inline-flex items-center justify-center gap-2"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
                <span>WhatsApp'ta Aç</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full btn-glass text-xs font-semibold uppercase tracking-wider text-white"
              >
                Kapat
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6 text-left">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={emblemGold}
                  alt="Melissa Logo"
                  className="h-8 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(242,206,120,0.5)]"
                />
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-primary/20">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span className="text-[11px] font-semibold text-secondary uppercase tracking-widest">
                    Hızlı Teklif &amp; Konsept Planlama
                  </span>
                </div>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Etkinliğinizi Birlikte Tasarlayalım
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                Etkinlik detaylarınızı belirtin, dakikalar içinde size özel konsept ve fiyat teklifimizi WhatsApp hattınıza iletelim.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-on-surface mb-1">
                    Ad Soyad / Kurum Adı *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Örn: Ahmet Yılmaz / ABC Holding"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder:text-on-surface-variant/50 text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-on-surface mb-1">
                    Telefon Numarası *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="05XX XXX XX XX"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder:text-on-surface-variant/50 text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-medium text-on-surface mb-1">
                  İlgilendiğiniz Hizmet / Konsept *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1d2023] border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="Ayyıldız Bandosu (Tören & Kurumsal)">Ayyıldız Bandosu (Tören &amp; Kurumsal)</option>
                  <option value="Bando Fenomeno (Düğün & Eğlence)">Bando Fenomeno (Düğün &amp; Eğlence)</option>
                  <option value="Kurumsal Açılış & Lansman Bandosu">Kurumsal Açılış &amp; Lansman Bandosu</option>
                  <option value="Latin Orkestrası">Latin Orkestrası</option>
                  <option value="Davet & Düğün Orkestrası">Davet &amp; Düğün Orkestrası</option>
                  <option value="Dünya Müzikleri Orkestrası">Dünya Müzikleri Orkestrası</option>
                  <option value="DJ + Saksafon & Perküsyon Live">DJ + Saksafon &amp; Perküsyon Live</option>
                  <option value="Solo Saksafon / Elektro Keman Şovu">Solo Saksafon / Elektro Keman Şovu</option>
                  <option value="Trio / Quartet Karşılama Ekibi">Trio / Quartet Karşılama Ekibi</option>
                  <option value="Anahtar Teslim Sahne / Ses & Işık">Anahtar Teslim Sahne / Ses &amp; Işık</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* City */}
                <div>
                  <label className="block text-xs font-medium text-on-surface mb-1">
                    Şehir / Bölge
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#1d2023] border border-white/15 text-white text-xs focus:outline-none focus:border-primary"
                  >
                    <option value="Bursa">Bursa</option>
                    <option value="İstanbul">İstanbul</option>
                    <option value="Kocaeli / Yalova">Kocaeli / Yalova</option>
                    <option value="Balıkesir / Çanakkale">Balıkesir / Çanakkale</option>
                    <option value="İzmir / Ege Bölgesi">İzmir / Ege Bölgesi</option>
                    <option value="Diğer Şehir">Diğer Şehir</option>
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-medium text-on-surface mb-1">
                    Tarih
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/15 text-white text-xs focus:outline-none focus:border-primary"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs font-medium text-on-surface mb-1">
                    Katılımcı Sayısı
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#1d2023] border border-white/15 text-white text-xs focus:outline-none focus:border-primary"
                  >
                    <option value="50-100 Kişi">50-100 Kişi</option>
                    <option value="100-300 Kişi">100-300 Kişi</option>
                    <option value="300-500 Kişi">300-500 Kişi</option>
                    <option value="500+ Kişi (Geniş Katılım)">500+ Kişi</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-medium text-on-surface mb-1">
                  Özel İstekler / Mekan Detayları
                </label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Etkinlik yeri, saat aralığı, özel şarkı veya sahne isteklerinizi belirtebilirsiniz..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder:text-on-surface-variant/50 text-xs focus:outline-none focus:border-primary"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full btn-gradient py-3.5 rounded-xl text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl active:scale-95 transition-all cursor-pointer mt-2"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-4 h-4 object-contain" />
                <span>WhatsApp ile Teklif İste</span>
              </button>

              <p className="text-[11px] text-center text-on-surface-variant/70">
                🔒 Bilgileriniz gizli tutulur ve yalnızca tekliflendirme amacıyla kullanılır.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
