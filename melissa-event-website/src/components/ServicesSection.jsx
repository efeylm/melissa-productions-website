import { SERVICES } from '../data/content';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-surface-container-lowest">
      {/* Background Glow */}
      <div className="glow-orb w-[600px] h-[600px] bg-secondary/5 top-10 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-primary/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
              Kapsamlı Sahne &amp; Prodüksiyon
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-on-surface-variant text-base sm:text-lg">
            Açılışlardan görkemli galalara, her detayı özenle kurgulanmış profesyonel müzik ve sahne performansları.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-white/10 hover:border-primary/40 group relative"
            >
              {/* Card Image Banner */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d2023] via-[#1d2023]/60 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-primary/20 text-primary border border-primary/30 backdrop-blur-md">
                    {service.badge}
                  </span>
                </div>

                {/* Category Pill */}
                <div className="absolute bottom-3 left-6">
                  <span className="text-xs font-medium text-secondary tracking-wider uppercase">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-[#090c10] transition-colors">
                      <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-8 border-t border-white/10 pt-4">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-on-surface/90">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-3 px-4 rounded-xl glass-panel text-xs font-semibold uppercase tracking-wider text-white hover:text-primary hover:border-primary/40 flex items-center justify-center gap-2 group-hover:bg-white/10 transition-all cursor-pointer"
                >
                  <span>Teklif Al &amp; Detay İncele</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
