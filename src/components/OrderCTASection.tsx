import React from 'react';
import { ShoppingBag, Truck, Flame, Sparkles } from 'lucide-react';

interface OrderCTASectionProps {
  onOrderPickup: () => void;
  onOrderDelivery: () => void;
}

export const OrderCTASection: React.FC<OrderCTASectionProps> = ({
  onOrderPickup,
  onOrderDelivery,
}) => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0a0d] via-[#120a0a] to-[#0a0a0d]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-96 bg-gradient-to-r from-red-600/20 via-orange-600/20 to-amber-500/20 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-orange-500/30 text-xs font-mono font-bold text-orange-400 mb-6 uppercase tracking-wider">
          <Flame className="w-4 h-4 text-orange-500" />
          <span>Craving Alert</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-none mb-6">
          Your Wings Are <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-amber-400">
            Waiting
          </span>.
        </h2>

        <p className="text-xl sm:text-2xl text-zinc-300 font-medium mb-10 max-w-xl mx-auto">
          Don't just think about it. Get the Tingz.
        </p>

        {/* Visually Dominant Buttons: ORDER PICKUP and ORDER DELIVERY */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-lg mx-auto">
          <button
            onClick={onOrderPickup}
            className="w-full sm:w-1/2 py-5 px-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-black text-sm tracking-wider uppercase rounded-2xl shadow-2xl shadow-orange-600/40 hover:shadow-orange-600/60 transition-all flex items-center justify-center gap-3 cursor-pointer group active:scale-95"
          >
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Order Pickup</span>
          </button>

          <button
            onClick={onOrderDelivery}
            className="w-full sm:w-1/2 py-5 px-6 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 hover:text-white border-2 border-zinc-700 hover:border-orange-500 font-black text-sm tracking-wider uppercase rounded-2xl transition-all shadow-xl hover:shadow-black flex items-center justify-center gap-3 cursor-pointer group active:scale-95"
          >
            <Truck className="w-5 h-5 text-orange-400 group-hover:scale-110 transition-transform" />
            <span>Order Delivery</span>
          </button>
        </div>

        {/* Local trust footnote */}
        <div className="mt-8 text-xs text-zinc-400 font-mono">
          Fast delivery in Al-Rehman Garden Phase 2 &amp; surroundings · Cash on Delivery available
        </div>
      </div>
    </section>
  );
};
