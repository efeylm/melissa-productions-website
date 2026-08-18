import { Play, ArrowDown, Sparkles, Music2, ShieldCheck, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../data/content';
import logoYatayGala from '../assets/11-yatay-gala-lacivert.svg';

export default function Hero({ onOpenShowreel, onOpenQuote }) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Lighting & Glow Orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-primary/10 top-1/4 -left-32" />
      <div className="glow-orb w-[600px] h-[600px] bg-secondary/10 bottom-10 -right-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Brand Horizontal Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative group max-w-[280px] sm:max-w-[360px]">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
            <img
              src={logoYatayGala}
              alt="Melissa Production & Organization"
              className="relative w-full h-auto rounded-2xl border border-white/15 shadow-2xl filter drop-shadow-[0_0_25px_rgba(242,206,120,0.35)] group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-primary/20 mb-8 animate-fade-in shadow-xl backdrop-blur-xl">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-xs font-semibold text-secondary tracking-widest uppercase">
            Bursa • İstanbul • Marmara Bölgesi • Sahne Sanatları
          </span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
        </div>

        {/* Main Title with Cinematic Typography */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.08] max-w-5xl mb-8 drop-shadow-2xl">
          Etkinlikleri <span className="text-gradient">Performansa</span> Dönüştürüyoruz.
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-on-surface-variant max-w-3xl mb-10 leading-relaxed font-normal">
          Kurumsal açılışlardan görkemli tören bandolarına, seçkin davet orkestralarından DJ &amp; Saksafon sahne şovlarına kadar unutulmaz anlar tasarlıyoruz.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <a
            href="#services"
            className="w-full sm:w-auto btn-gradient px-8 py-4 rounded-full text-white font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xl active:scale-95 transition-all"
          >
            <Music2 className="w-4 h-4" />
            <span>Hizmetleri Keşfet</span>
          </a>

          <button
            onClick={onOpenShowreel}
            className="w-full sm:w-auto px-8 py-4 rounded-full btn-glass text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3.5 h-3.5 text-primary fill-primary ml-0.5" />
            </div>
            <span>Showreel İzle</span>
          </button>
        </div>

        {/* Highlight Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl w-full">
          <div className="glass-card p-3 sm:p-4 rounded-2xl flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-xl">military_tech</span>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">Ayyıldız Bandosu</p>
              <p className="text-[11px] text-on-surface-variant">Tören &amp; Protokol</p>
            </div>
          </div>

          <div className="glass-card p-3 sm:p-4 rounded-2xl flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-secondary text-xl">celebration</span>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">Bando Fenomeno</p>
              <p className="text-[11px] text-on-surface-variant">Düğün &amp; Şov</p>
            </div>
          </div>

          <div className="glass-card p-3 sm:p-4 rounded-2xl flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-tertiary text-xl">music_note</span>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">Canlı Orkestralar</p>
              <p className="text-[11px] text-on-surface-variant">Latin &amp; Davet</p>
            </div>
          </div>

          <div className="glass-card p-3 sm:p-4 rounded-2xl flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-primary-container/20 border border-primary-container/30 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary text-xl">graphic_eq</span>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">DJ + Saksafon</p>
              <p className="text-[11px] text-on-surface-variant">Live Sound</p>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-14 animate-bounce hidden sm:block">
          <a
            href="#about"
            className="text-on-surface-variant/60 hover:text-primary transition-colors flex flex-col items-center gap-1 text-xs"
          >
            <span className="tracking-widest uppercase text-[10px]">Aşağı Kaydır</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
