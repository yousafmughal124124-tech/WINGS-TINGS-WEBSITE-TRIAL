import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenOrder: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOrder }) => {
  return (
    <footer className="bg-[#070709] border-t border-zinc-900 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href="#hero"
              className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight uppercase block"
            >
              🍗 Wings &amp; Tingz
            </a>

            <p className="text-orange-400 font-semibold text-sm">
              “{RESTAURANT_INFO.tagline}”
            </p>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Modern American chicken-wing culture engineered with Lahore’s legendary spice obsession. Extra napkins guaranteed.
            </p>

            {/* Experiences list */}
            <div className="text-xs font-mono text-zinc-300 font-bold tracking-wider pt-2">
              Dine-In <span className="text-zinc-600">|</span> Take-Out <span className="text-zinc-600">|</span> Catering <span className="text-zinc-600">|</span> Events
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#main-chick" className="hover:text-white transition-colors">The Main Chick</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Menu &amp; Combos</a>
              </li>
              <li>
                <a href="#sauces" className="hover:text-white transition-colors">Sauce It Up</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a>
              </li>
              <li>
                <button
                  onClick={onOpenOrder}
                  className="text-orange-400 font-bold hover:underline cursor-pointer"
                >
                  Order Pickup / Delivery
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Contact Info */}
          <div className="lg:col-span-4 space-y-3 text-xs">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Store &amp; Contact
            </h3>

            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
              <span>{RESTAURANT_INFO.address}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-orange-500 shrink-0" />
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="text-white hover:text-orange-400 font-mono"
              >
                {RESTAURANT_INFO.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-orange-500 shrink-0" />
              <span className="font-mono">{RESTAURANT_INFO.hours}</span>
            </div>

            {/* Socials */}
            <div className="pt-3 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-zinc-400 font-mono">@wings.tingz</span>
            </div>
          </div>
        </div>

        {/* Quiet copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} Wings &amp; Tingz. All rights reserved. Al-Rehman Garden Phase 2, Lahore.</p>
          <p className="font-mono text-[11px]">Home of the Main Chick &amp; Side Ting™</p>
        </div>
      </div>
    </footer>
  );
};
