import { ORCHESTRAS } from '../data/content';
import { Music, Sparkles, ArrowRight } from 'lucide-react';

export default function OrchestrasSection({ onSelectOrchestra }) {
  return (
    <section id="orchestras" className="py-24 md:py-32 relative bg-surface-container-lowest/80">
      {/* Background Glow */}
      <div className="glow-orb w-[600px] h-[600px] bg-tertiary/5 top-1/2 left-0 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-primary/20 mb-4">
            <Music className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
              Usta Müzisyen Kadroları
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
            Orkestralarımız
          </h2>
          <p className="text-on-surface-variant text-base sm:text-lg">
            Gala gecelerinden büyüleyici düğünlere, konsepte ve müzik zevkinize özel canlı orkestra projeleri.
          </p>
        </div>

        {/* 3 Orchestras Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ORCHESTRAS.map((orch) => (
            <div
              key={orch.id}
              className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between border border-white/10 hover:border-primary/40 group relative transition-all duration-400"
            >
              {/* Image banner */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={orch.image}
                  alt={orch.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d2023] via-[#1d2023]/40 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#090c10]/80 text-secondary border border-secondary/30 backdrop-blur-md">
                    Canlı Orkestra
                  </span>
                </div>

                <div className="absolute bottom-3 left-6 right-6">
                  <p className="text-xs font-medium text-primary tracking-wide">
                    {orch.genre}
                  </p>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-primary transition-colors">
                    {orch.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                    {orch.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {orch.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/5 text-on-surface-variant border border-white/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectOrchestra(orch.title)}
                  className="w-full py-3.5 px-4 rounded-xl btn-glass text-xs font-semibold uppercase tracking-wider text-white hover:text-primary hover:border-primary/40 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>{orch.title} Teklifi Al</span>
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
