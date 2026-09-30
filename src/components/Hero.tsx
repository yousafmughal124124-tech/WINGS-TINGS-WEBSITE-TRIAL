import React from 'react';
import { Star, MapPin, ArrowRight, Flame, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOrderNow: () => void;
  onViewMenu: () => void;
  onGetDirections: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNow, onViewMenu, onGetDirections }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background glow and subtle ambient textures */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-red-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-amber-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Copy & CTAs */}
          <div className="lg:col-span-6 z-10 text-center lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/30 text-xs font-semibold text-zinc-300 mb-6 shadow-lg shadow-black/50">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white tracking-wide">4.8/5</span>
              <span className="text-zinc-500" aria-hidden="true">·</span>
              <span className="text-zinc-400">112 Google Reviews</span>
              <span className="text-zinc-500" aria-hidden="true">·</span>
              <span className="text-orange-400 font-medium">Al-Rehman Garden Phase 2</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tight uppercase leading-[0.95] mb-6 text-balance">
              Wings so good, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-amber-400">
                you’ll need
              </span>{' '}
              extra napkins.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              Crispy. Saucy. Loaded. Welcome to <span className="text-white font-semibold">Wings &amp; Tingz</span> — home of the <span className="text-orange-400 font-semibold">Main Chick &amp; Side Ting™</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOrderNow}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-black text-sm tracking-wider uppercase rounded-2xl shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewMenu}
                className="w-full sm:w-auto px-7 py-4 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 border border-white/15 font-bold text-sm tracking-wide rounded-2xl transition-all cursor-pointer hover:border-zinc-500 flex items-center justify-center gap-2"
              >
                <span>View Menu</span>
              </button>

              <button
                onClick={onGetDirections}
                className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 py-2 px-3 hover:bg-zinc-900/60 rounded-lg cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>Get Directions</span>
              </button>
            </div>

            {/* Quiet Quick Value Highlights */}
            <div className="mt-10 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-zinc-400 font-medium">
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-red-500" />
                <span>Double-Fried Crunch</span>
              </div>
              <span className="text-zinc-700" aria-hidden="true">•</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>5 Signature Sauces</span>
              </div>
              <span className="text-zinc-700" aria-hidden="true">•</span>
              <div>
                <span>Open till 12:00 AM Midnight</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with dramatic lighting, steam & floating sauce accents */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Glowing circular backdrop */}
            <div className="absolute w-[80%] aspect-square rounded-full bg-gradient-to-tr from-orange-600/20 via-red-600/10 to-amber-500/20 blur-3xl -z-10" />

            {/* Main Visual Container */}
            <div className="relative w-full max-w-lg lg:max-w-xl group">
              {/* Decorative border frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-600 via-red-600 to-amber-500 opacity-30 group-hover:opacity-60 blur-lg transition duration-500" />
              
              <div className="relative rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-2xl">
                <img
                  src="/src/assets/images/hero_wings_platter_1790783425803.jpg"
                  alt="Crispy saucy chicken wings platter with golden fries and creamy herb ranch dip at Wings and Tingz Lahore"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle scrim overlay for atmospheric depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none" />

                {/* Card Floater: Bestseller Tag */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between bg-zinc-950/85 backdrop-blur-md border border-white/15 p-3.5 rounded-2xl shadow-xl">
                  <div>
                    <div className="text-[11px] font-bold text-orange-400 uppercase tracking-widest">Freshly Tossed</div>
                    <div className="text-sm font-black text-white">Peri Peri &amp; Ranch Platter</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] text-zinc-400">Starting from</div>
                    <div className="text-base font-mono font-black text-white tabular-nums">Rs. 795</div>
                  </div>
                </div>
              </div>

              {/* Floating animated decorative spice/sauce badges */}
              <div className="absolute -top-4 -right-3 bg-red-600 text-white font-mono text-xs font-black uppercase px-3 py-1.5 rounded-xl shadow-lg border border-red-400/40 rotate-6 animate-float-slow">
                🔥 100% Crispy
              </div>

              <div className="absolute -bottom-3 -left-3 bg-zinc-900/90 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-xl border border-zinc-700 shadow-xl -rotate-3 animate-float-fast">
                ✨ Secret Recipe Glaze
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
