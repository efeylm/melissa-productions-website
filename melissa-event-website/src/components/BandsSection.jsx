import { BANDS } from '../data/content';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function BandsSection({ onSelectBand }) {
  return (
    <section id="bands" className="py-24 md:py-32 relative bg-[#090c10] overflow-hidden">
      {/* Dynamic Glow Accents */}
      <div className="glow-orb w-[700px] h-[700px] bg-primary/10 top-0 right-0" />
      <div className="glow-orb w-[500px] h-[500px] bg-secondary/10 bottom-0 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-secondary/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
                Özel Konsept Gösteri Ekipleri
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Bandolarımız
            </h2>
            <p className="text-on-surface-variant text-base sm:text-lg mt-3">
              Farklı konseptler, özel kostümler ve güçlü sahne enerjisiyle organizasyonunuza damga vuran bando kadrolarımız.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">
              2 Ana Bando Konsepti
            </span>
          </div>
        </div>

        {/* 2 Featured Bands Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {BANDS.map((band, idx) => (
            <div
              key={band.id}
              className="glass-panel-heavy rounded-3xl overflow-hidden border border-white/15 hover:border-primary/40 transition-all duration-500 flex flex-col group shadow-2xl"
            >
              {/* Band Hero Image with Overlay */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={band.image}
                  alt={band.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111417] via-[#111417]/50 to-transparent" />

                {/* Subtitle & Tagline Chips */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#090c10]/80 text-primary border border-primary/30 backdrop-blur-md">
                    {band.subtitle}
                  </span>
                </div>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-widest block mb-1">
                    {band.tagline}
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                    {band.name}
                  </h3>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {band.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                  <p className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    {idx === 0 ? <ShieldCheck className="w-4 h-4 text-primary" /> : <Zap className="w-4 h-4 text-secondary" />}
                    Öne Çıkan Özellikler:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {band.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2 text-xs text-on-surface/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For Note */}
                <div className="text-xs text-on-surface-variant/80 border-t border-white/10 pt-4">
                  <strong className="text-white font-medium">Kullanım Alanları: </strong>
                  {band.idealFor}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectBand(band.name)}
                  className="w-full btn-gradient py-4 px-6 rounded-2xl text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl active:scale-95 transition-all cursor-pointer"
                >
                  <span>{band.name} Teklifi Al</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
