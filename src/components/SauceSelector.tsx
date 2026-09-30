import React, { useState } from 'react';
import { Flame, Sparkles, Plus, Check } from 'lucide-react';
import { SAUCES, Sauce, MenuItem } from '../data/restaurantData';

interface SauceSelectorProps {
  onQuickOrderSauce: (sauceName: string) => void;
}

export const SauceSelector: React.FC<SauceSelectorProps> = ({ onQuickOrderSauce }) => {
  const [selectedSauce, setSelectedSauce] = useState<Sauce>(SAUCES[0]);

  return (
    <section id="sauces" className="py-24 bg-[#0a0a0d] relative overflow-hidden">
      {/* Dynamic ambient color background matching active sauce */}
      <div
        className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full blur-[160px] pointer-events-none transition-colors duration-700 opacity-20"
        style={{ backgroundColor: selectedSauce.color }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500 mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>Interactive Flavor Bar</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-4">
            How Saucy Are You?
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Click to taste test our house-crafted glazes, creamy churns, and molten drizzles.
          </p>
        </div>

        {/* Clickable Sauce Tabs / Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {SAUCES.map((sauce) => {
            const isSelected = selectedSauce.id === sauce.id;
            return (
              <button
                key={sauce.id}
                onClick={() => setSelectedSauce(sauce)}
                className={`px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-2.5 whitespace-nowrap border ${
                  isSelected
                    ? 'bg-zinc-800 text-white shadow-xl shadow-black border-orange-500 scale-105'
                    : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700 hover:bg-zinc-800'
                }`}
                style={{
                  boxShadow: isSelected ? `0 10px 25px -5px ${sauce.color}40` : undefined
                }}
              >
                <span className="text-base">{sauce.emoji}</span>
                <span>{sauce.name}</span>
                {isSelected && <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />}
              </button>
            );
          })}
        </div>

        {/* Active Sauce Display Card */}
        <div className="max-w-4xl mx-auto bg-zinc-950/90 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Sauce Visual / Skillet Wings Image */}
            <div className="md:col-span-5 relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <img
                  src={
                    selectedSauce.id === 'cheesy'
                      ? '/src/assets/images/loaded_cheesy_fries_1790783461016.jpg'
                      : selectedSauce.id === 'ranch'
                      ? '/src/assets/images/crispy_popcorn_onionrings_1790783476170.jpg'
                      : '/src/assets/images/peri_peri_saucy_wings_1790783443885.jpg'
                  }
                  alt={`${selectedSauce.name} wings at Wings and Tingz`}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs font-bold text-white flex items-center gap-1.5">
                  <span>{selectedSauce.emoji}</span>
                  <span>{selectedSauce.tagline}</span>
                </div>
              </div>
            </div>

            {/* Sauce Details */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-400">
                    House Recipe Sauce
                  </span>
                  
                  {/* Heat Level Meter */}
                  <div className="flex items-center gap-1.5 bg-zinc-900 px-3 py-1 rounded-xl border border-zinc-800">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase">Heat:</span>
                    <div className="flex items-center gap-1 text-red-500">
                      {[...Array(5)].map((_, i) => (
                        <Flame
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < selectedSauce.heatLevel
                              ? 'text-red-500 fill-red-500'
                              : 'text-zinc-700'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight uppercase mb-3 flex items-center gap-3">
                  <span>{selectedSauce.name}</span>
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {selectedSauce.description}
                </p>

                {/* Best Pairing Recommendation */}
                <div className="bg-zinc-900/80 border border-zinc-800/80 rounded-2xl p-4 text-xs">
                  <span className="font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                    Recommended Food Pairing:
                  </span>
                  <span className="font-semibold text-orange-400 text-sm">
                    {selectedSauce.pairsWith}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onQuickOrderSauce(selectedSauce.name)}
                  className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-black text-xs tracking-wider uppercase rounded-xl shadow-lg shadow-orange-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Plus className="w-4 h-4" />
                  <span>Order Wings with {selectedSauce.name}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
