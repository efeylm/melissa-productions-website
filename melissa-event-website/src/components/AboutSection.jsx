import { Award, Users, Music, CheckCircle2, Globe, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';

export default function AboutSection({ onOpenQuote }) {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-surface-container-lowest/60">
      {/* Subtle Glow */}
      <div className="glow-orb w-[450px] h-[450px] bg-primary/5 top-1/3 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Storytelling & Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image with Glass Border */}
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-2xl aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
                  alt="Melissa Production Sahne Performansı"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090c10] via-transparent to-transparent opacity-80" />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel-heavy border border-white/20 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shrink-0 shadow-lg">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xl font-display font-bold text-white leading-none">10+ Yıl</p>
                      <p className="text-xs text-on-surface-variant mt-1">Sektörel Liderlik &amp; Sahne Deneyimi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Glow Accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-secondary/20 mb-4">
                <Sparkles className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs font-semibold text-secondary uppercase tracking-widest">
                  Hakkımızda &amp; Vizyonumuz
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                Sanat ve Estetiği <span className="text-gradient">Yüksek Kaliteyle</span> Sahneye Taşıyoruz.
              </h2>
            </div>

            <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed">
              <strong className="text-white font-semibold">{SITE_CONFIG.name}</strong>, organizasyon dünyasında sıradanlıktan uzaklaşarak etkinlikleri büyüleyici birer sahne performansına dönüştürmek amacıyla kurulmuştur.
            </p>

            <p className="text-on-surface-variant text-sm sm:text-base leading-relaxed">
              Vizyoner yaklaşımımız, inovatif konseptlerimiz ve uluslararası standartlardaki müzisyen kadromuzla; kurumsal şirketlerin açılışlarından belediye törenlerine, lüks düğünlerden prestijli festivallere kadar geniş bir yelpazede hizmet sunuyoruz. Bursa ve İstanbul başta olmak üzere tüm Marmara ve turistik bölgelerde unutulmaz anlara imza atıyoruz.
            </p>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl glass-panel border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">İnovatif Konseptler</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">Etkinliğinizin temasına özel tasarlanan müzikal kurgular.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl glass-panel border border-white/10">
                <Globe className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Geniş Hizmet Ağı</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">Bursa, İstanbul, Marmara ve tüm Türkiye çapında performans.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl glass-panel border border-white/10">
                <Music className="w-5 h-5 text-tertiary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Usta Sanatçı Kadrosu</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">Konservatuvar mezunu, sahne disiplinine sahip 60+ müzisyen.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl glass-panel border border-white/10">
                <Users className="w-5 h-5 text-primary-container shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Anahtar Teslim Çözümler</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">Bando, orkestra, ses/ışık sistemleri ve teknik koordinasyon.</p>
                </div>
              </div>
            </div>

            {/* Quick Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {SITE_CONFIG.stats.map((stat, idx) => (
                <div key={idx} className="text-left">
                  <p className="font-display font-black text-2xl sm:text-3xl text-gradient">
                    {stat.value}
                  </p>
                  <p className="text-xs text-on-surface-variant font-medium mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
