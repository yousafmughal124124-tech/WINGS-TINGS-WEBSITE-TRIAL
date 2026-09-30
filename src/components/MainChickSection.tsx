import React from 'react';
import { Flame, Plus, ArrowUpRight } from 'lucide-react';
import { MAIN_CHICK_ITEMS, MenuItem } from '../data/restaurantData';

interface MainChickSectionProps {
  onSelectProduct: (item: MenuItem) => void;
}

export const MainChickSection: React.FC<MainChickSectionProps> = ({ onSelectProduct }) => {
  return (
    <section id="main-chick" className="py-24 relative overflow-hidden bg-[#0d0d12]">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500 mb-3 flex items-center justify-center gap-2">
            <Flame className="w-4 h-4 text-orange-500" />
            <span>The Signature Lineup</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-6">
            Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Main Chick</span>.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed text-balance">
            Fresh, crispy wings tossed in bold flavors made for serious cravings. Whether you like it spicy, creamy, tangy or loaded with cheese, there’s a Tingz for everyone.
          </p>
        </div>

        {/* 4 Large Interactive Wing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MAIN_CHICK_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative bg-zinc-950 rounded-3xl border border-zinc-800/80 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-orange-950/30 hover:-translate-y-1.5"
            >
              {/* Image Container with scrim and zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                <img
                  src={item.image}
                  alt={`${item.name} at Wings and Tingz Lahore`}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Visual Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />

                {/* Subtle Flavor Note on Image */}
                <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-xl text-[11px] font-bold text-orange-400">
                  {item.defaultSauce}
                </div>

                {item.badge && (
                  <div className="absolute top-3 right-3 bg-red-600/90 backdrop-blur-sm text-white font-mono text-[10px] font-black uppercase px-2 py-0.5 rounded-lg tracking-wider">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-black text-white group-hover:text-orange-400 transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-5 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Row: Price & Order This Action */}
                <div className="pt-4 border-t border-zinc-900 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-400 block">Price</span>
                    <span className="text-lg font-mono font-bold text-white tabular-nums">
                      Rs. {item.price.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectProduct(item)}
                    className="px-4 py-2.5 bg-zinc-900 hover:bg-orange-600 text-white hover:text-white border border-zinc-700 hover:border-orange-500 rounded-xl text-xs font-black tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer shadow-md active:scale-95 group/btn"
                  >
                    <span>Order This</span>
                    <Plus className="w-3.5 h-3.5 text-orange-400 group-hover/btn:text-white transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-zinc-400 font-mono">
            All Main Chick wings are fried to order · Served with wet wipes &amp; extra napkins
          </p>
        </div>
      </div>
    </section>
  );
};
