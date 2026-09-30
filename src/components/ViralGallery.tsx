import React, { useState } from 'react';
import { Camera, Instagram, Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';

export const ViralGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-[#0d0d12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-red-500 mb-3 flex items-center justify-center gap-2">
            <Camera className="w-4 h-4 text-red-500" />
            <span>Feast Your Eyes</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-4">
            Warning: This Will Make <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-400">You Hungry</span>.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Fresh out of the fryer, drenched in sauce, and served sizzling. Tag us in your food snaps in Lahore!
          </p>
        </div>

        {/* Masonry / Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item.image)}
              className={`${item.span} relative rounded-3xl overflow-hidden group bg-zinc-950 border border-zinc-800/80 cursor-pointer shadow-xl`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-108"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Scrim Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-black text-white">{item.title}</h3>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Follow on Instagram CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-pink-500/50 rounded-2xl text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl hover:shadow-pink-500/10 group"
          >
            <Instagram className="w-4 h-4 text-pink-500 group-hover:scale-110 transition-transform" />
            <span>Follow {RESTAURANT_INFO.instagram}</span>
            <span className="text-zinc-500">·</span>
            <span className="text-zinc-400 font-mono text-[11px]">Daily Wing Drops</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in"
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-3 text-white bg-zinc-900 border border-zinc-700 rounded-full hover:bg-zinc-800"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={activeImage}
            alt="Enlarged food view"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl border border-white/10"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </section>
  );
};
