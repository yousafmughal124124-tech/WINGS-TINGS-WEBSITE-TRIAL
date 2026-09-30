import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  // Live opening hours status (Pakistan is UTC+5, opens 13:00 to 00:00 midnight)
  const now = new Date();
  // Get current PKT hour:
  const pktHour = (now.getUTCHours() + 5) % 24;
  const isOpen = pktHour >= 13 || pktHour === 0;

  return (
    <section id="location" className="py-24 bg-[#0d0d12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Location Card & Contact */}
          <div className="lg:col-span-5 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between shadow-2xl">
            <div>
              {/* Live Status Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isOpen ? 'bg-emerald-400' : 'bg-amber-400'} opacity-75`} />
                    <span className={`relative inline-flex rounded-full h-3 w-3 ${isOpen ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                  </span>
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isOpen ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {isOpen ? 'Open Now' : 'Opens at 1:00 PM'}
                  </span>
                </div>
                <span className="text-xs font-mono text-zinc-400">Closes at 12 AM Midnight</span>
              </div>

              <h2 className="font-display text-3xl font-black text-white uppercase tracking-tight mb-2">
                Wings &amp; Tingz
              </h2>
              <p className="text-xs font-mono text-orange-400 uppercase tracking-widest mb-6">
                Lahore Flagship Store
              </p>

              {/* Address details */}
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex items-start gap-3 text-zinc-300">
                  <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Address</strong>
                    <span className="text-zinc-400 leading-relaxed text-xs sm:text-sm">
                      Plaza No. 12, Joyland Commercial, Al-Rehman Garden Phase 2, Near Saggian Pull, Lahore
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-zinc-300">
                  <Phone className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Phone &amp; WhatsApp</strong>
                    <a
                      href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                      className="text-orange-400 hover:underline font-mono text-sm"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-zinc-300">
                  <Clock className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-semibold">Store Timings</strong>
                    <span className="text-zinc-400 text-xs sm:text-sm font-mono">
                      {RESTAURANT_INFO.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-zinc-900 space-y-3">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-black text-xs tracking-wider uppercase rounded-xl shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions in Google Maps</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full py-3.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 rounded-xl font-bold text-xs tracking-wide uppercase flex items-center justify-center gap-2 transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call Now: {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Map / Landmark Visual Guide */}
          <div className="lg:col-span-7 bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden relative min-h-[380px] flex flex-col justify-between">
            {/* Visual Storefront & Map Graphic */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src="/src/assets/images/restaurant_vibe_interior_1790783490194.jpg"
                alt="Wings & Tingz Restaurant Dine-in at Al-Rehman Garden Phase 2 Lahore"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

              {/* Pin Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-zinc-900/90 backdrop-blur-md border border-white/10 p-3.5 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-600 flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Joyland Commercial Hub</div>
                  <div className="text-[11px] text-zinc-400">Easy parking &amp; quick access from Saggian Pull</div>
                </div>
              </div>
            </div>

            {/* Quick Route Guide in Lahore */}
            <div className="p-6 sm:p-8 bg-zinc-950">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-3">
                Quick Lahore Route Guide:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800">
                  <div className="font-bold text-orange-400 mb-1">From Saggian Pull</div>
                  <p className="text-zinc-400 text-[11px]">Drive 2 mins straight towards Al-Rehman Garden Phase 2 entrance.</p>
                </div>
                <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800">
                  <div className="font-bold text-orange-400 mb-1">From Mall Road</div>
                  <p className="text-zinc-400 text-[11px]">Take Bund Road to Saggian interchange, 12 mins drive.</p>
                </div>
                <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800">
                  <div className="font-bold text-orange-400 mb-1">From Ring Road</div>
                  <p className="text-zinc-400 text-[11px]">Exit at Shahdara/Saggian for swift bypass connection.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
