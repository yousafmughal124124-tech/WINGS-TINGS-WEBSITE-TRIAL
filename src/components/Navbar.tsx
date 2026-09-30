import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOrderNow: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOrderNow }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Main Chick', href: '#main-chick' },
    { label: 'Menu', href: '#menu' },
    { label: 'Sauces', href: '#sauces' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#0d0d12]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
            : 'bg-gradient-to-b from-[#0d0d12]/90 via-[#0d0d12]/60 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white hover:text-orange-500 transition-colors uppercase whitespace-nowrap group flex items-center gap-2"
          >
            <span className="text-orange-500 group-hover:scale-110 transition-transform inline-block">🍗</span>
            <span>Wings &amp; Tingz</span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wide text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-orange-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            {/* Bag button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-zinc-200 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 rounded-xl transition-all cursor-pointer flex items-center gap-2 px-3"
              aria-label="View shopping bag"
            >
              <ShoppingBag className="w-5 h-5 text-orange-400" />
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">Bag</span>
              {cartCount > 0 && (
                <span className="bg-orange-600 text-white font-mono text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary Order Now Button */}
            <button
              onClick={onOrderNow}
              className="px-5 py-2.5 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white text-xs font-black tracking-wider uppercase rounded-xl shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all cursor-pointer whitespace-nowrap active:scale-95"
            >
              Order Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-300 hover:text-white bg-zinc-900 border border-white/10 rounded-xl transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-[#0b0b0f]/98 backdrop-blur-xl p-6 border-b border-zinc-800 animate-in fade-in duration-200">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
              <span className="font-display text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2">
                <span className="text-orange-500">🍗</span> Wings &amp; Tingz
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-bold text-zinc-200 hover:text-orange-500 transition-colors py-2 border-b border-zinc-900 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-zinc-600 text-sm">→</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-zinc-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOrderNow();
              }}
              className="w-full py-3.5 bg-gradient-to-r from-orange-600 to-red-600 text-white font-black text-sm tracking-wider uppercase rounded-xl shadow-lg shadow-orange-600/40 text-center"
            >
              Order Online Now
            </button>
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="w-full py-3 bg-zinc-900 border border-zinc-800 text-zinc-200 font-bold text-sm tracking-wide rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call: {RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
