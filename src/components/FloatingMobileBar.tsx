import React from 'react';
import { Phone, ShoppingBag } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FloatingMobileBarProps {
  cartCount: number;
  onOpenOrder: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({
  cartCount,
  onOpenOrder,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-3 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 shadow-2xl safe-area-bottom">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {/* Call Button */}
        <a
          href={`tel:${RESTAURANT_INFO.phoneRaw}`}
          className="py-3 px-4 bg-zinc-900 border border-zinc-800 text-zinc-100 hover:text-white rounded-xl text-xs font-black tracking-wider uppercase flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md"
        >
          <Phone className="w-4 h-4 text-orange-400" />
          <span>Call Store</span>
        </a>

        {/* Order Now / Cart Button */}
        <button
          onClick={onOpenOrder}
          className="py-3 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl text-xs font-black tracking-wider uppercase flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-orange-600/30 cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Order Now</span>
          {cartCount > 0 && (
            <span className="bg-white text-orange-600 font-mono text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};
