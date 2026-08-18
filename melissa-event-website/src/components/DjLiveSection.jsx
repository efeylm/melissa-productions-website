import { Sparkles, ArrowRight, Disc, Volume2 } from 'lucide-react';

export default function DjLiveSection({ onSelectConcept }) {
  return (
    <section id="dj-live" className="py-24 md:py-32 relative bg-[#0c0e12] overflow-hidden">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTO3WXAN2MH4ICTuib0wm-Ht0IVQyBKi6ZcDy0f9SxA9x0k81lImaqR9WFAmnd7tmV6UR5Gx9Ui1k_UX0KLwLqf6_TuYKRZgrT4ScgmQrPbM-ui20IUJPdIUZrJQ-SxCm69MUHr8MaXg6YNiOKLuh5s0D0jHT0GvL7XxMqHnvOMUwjTjNY6hKI6RWhVU0efVBlW287eHbFWzZunIvRD0AHR7MGAiHNtCuWniuOSLvc5mIuwuzgwaI"
          alt="DJ ve Saksafon Sahne Performansı"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090c10] via-[#090c10]/85 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[500px]">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-secondary/30">
              <Disc className="w-3.5 h-3.5 text-secondary animate-spin" style={{ animationDuration: '4s' }} />
              <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
                DJ &amp; Canlı Enstrüman Füzyonu
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight">
              DJ Performansı, <span className="text-gradient">Canlı Müziğin</span> Enerjisiyle.
            </h2>

            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-2xl">
              Modern elektronik altyapıları ve kulüp ritimlerini, virtüöz saksafon ve perküsyon sololarıyla harmanlayarak davetlilerinize sıra dışı ve yüksek tempolu bir atmosfer sunuyoruz.
            </p>

            {/* Interactive Audio Visualizer Simulation */}
            <div className="p-4 rounded-2xl glass-panel-heavy border border-white/10 max-w-md flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-[#090c10]">
                  <Volume2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none">DJ + Sax + Percussion Live</p>
                  <p className="text-[11px] text-secondary mt-1">Canlı Sahne Miksi</p>
                </div>
              </div>

              {/* Equalizer Wave */}
              <div className="flex items-end gap-1 h-6 px-2">
                <span className="w-1 bg-primary rounded-full eq-bar-1" />
                <span className="w-1 bg-secondary rounded-full eq-bar-2" />
                <span className="w-1 bg-tertiary rounded-full eq-bar-3" />
                <span className="w-1 bg-primary rounded-full eq-bar-4" />
                <span className="w-1 bg-secondary rounded-full eq-bar-5" />
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onSelectConcept("DJ & Saksafon Live")}
                className="btn-gradient px-8 py-4 rounded-full text-white font-semibold text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2 shadow-2xl active:scale-95 transition-all cursor-pointer"
              >
                <span>DJ &amp; Saksafon Konsepti Oluştur</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/20 shadow-2xl p-2 group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTO3WXAN2MH4ICTuib0wm-Ht0IVQyBKi6ZcDy0f9SxA9x0k81lImaqR9WFAmnd7tmV6UR5Gx9Ui1k_UX0KLwLqf6_TuYKRZgrT4ScgmQrPbM-ui20IUJPdIUZrJQ-SxCm69MUHr8MaXg6YNiOKLuh5s0D0jHT0GvL7XxMqHnvOMUwjTjNY6hKI6RWhVU0efVBlW287eHbFWzZunIvRD0AHR7MGAiHNtCuWniuOSLvc5mIuwuzgwaI"
                alt="DJ Performance"
                className="rounded-2xl w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090c10]/80 via-transparent to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">After Party &amp; Kokteyl</span>
                <p className="text-sm font-semibold text-white mt-1">Lüks Düğünler, Festivaller ve Özel Kutlamalar</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
