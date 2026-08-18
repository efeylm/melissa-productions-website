import { TESTIMONIALS } from '../data/content';
import { Star, Sparkles, Building2, Landmark, Hotel, ShoppingBag, HeartHandshake } from 'lucide-react';

export default function TestimonialsSection() {
  const clientTypes = [
    { name: "Kurumsal Şirketler & Fabrikalar", icon: Building2 },
    { name: "Belediyeler & Resmi Kurumlar", icon: Landmark },
    { name: "5 Yıldızlı Oteller & Tatil Köyleri", icon: Hotel },
    { name: "AVM'ler & Yaşam Merkezleri", icon: ShoppingBag },
    { name: "Düğün & Özel Davet Sahipleri", icon: HeartHandshake },
  ];

  return (
    <section className="py-24 md:py-32 relative bg-[#090c10]">
      {/* Glow */}
      <div className="glow-orb w-[600px] h-[600px] bg-secondary/5 top-1/3 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-secondary/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-secondary" />
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
              Referanslar &amp; Yorumlar
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            Müşterilerimizin Deneyimleri
          </h2>
          <p className="text-on-surface-variant text-base sm:text-lg">
            Prestijli organizasyonlara imza attığımız iş ortaklarımızın ve davet sahiplerinin geri bildirimleri.
          </p>
        </div>

        {/* Client Categories Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-16">
          {clientTypes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-3.5 rounded-2xl flex items-center gap-2.5 border border-white/10 hover:border-primary/30 transition-all text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-white/90 leading-tight">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Testimonials 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 relative group"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base text-on-surface/90 italic leading-relaxed mb-6">
                  "{t.content}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-[#090c10] font-bold text-base shadow-md">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white">{t.name}</h4>
                  <p className="text-xs text-on-surface-variant">
                    {t.role} • <span className="text-secondary font-medium">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
