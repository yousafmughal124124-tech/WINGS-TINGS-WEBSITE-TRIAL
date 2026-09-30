import React, { useState } from 'react';
import { X, Flame, Plus, Minus, Check } from 'lucide-react';
import { MenuItem, SAUCES } from '../data/restaurantData';
import { CartItem } from '../types/cart';

interface ItemCustomizerModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (cartItem: CartItem) => void;
}

export const ItemCustomizerModal: React.FC<ItemCustomizerModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedSauce, setSelectedSauce] = useState(
    item.defaultSauce || 'Peri Peri'
  );
  const [spiceLevel, setSpiceLevel] = useState<number>(item.spiceLevel || 3);
  const [extraDip, setExtraDip] = useState(false);
  const [notes, setNotes] = useState('');

  const extraDipPrice = 80;
  const totalPrice = (item.price + (extraDip ? extraDipPrice : 0)) * quantity;

  const handleAdd = () => {
    const newItem: CartItem = {
      cartItemId: `${item.id}-${Date.now()}`,
      item,
      quantity,
      selectedSauce,
      spiceLevel,
      extraDip,
      specialInstructions: notes.trim() ? notes.trim() : undefined,
    };
    onAddToCart(newItem);
    onClose();
  };

  const isWingsOrCustomizable = item.category === 'wings' || item.category === 'combos';

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div
        className="w-full sm:max-w-lg bg-zinc-950 border border-zinc-800 rounded-t-3xl sm:rounded-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-900 shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/70 hover:bg-black text-white rounded-full transition-colors cursor-pointer border border-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="font-display text-2xl font-black text-white uppercase tracking-tight">
              {item.name}
            </h2>
            <p className="text-xs text-zinc-300 font-mono">
              Rs. {item.price.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          <p className="text-xs text-zinc-400 leading-relaxed">
            {item.description}
          </p>

          {/* Flavor/Sauce Selection (if wings or combos) */}
          {isWingsOrCustomizable && (
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-white mb-2.5">
                Choose Toss / Dipping Sauce:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {SAUCES.map((sauce) => (
                  <button
                    key={sauce.id}
                    type="button"
                    onClick={() => setSelectedSauce(sauce.name)}
                    className={`p-2.5 rounded-xl border text-left flex items-center justify-between text-xs font-bold transition-all cursor-pointer ${
                      selectedSauce === sauce.name
                        ? 'bg-zinc-900 border-orange-500 text-white shadow-md'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <span>{sauce.emoji}</span>
                      <span>{sauce.name}</span>
                    </span>
                    {selectedSauce === sauce.name && (
                      <Check className="w-3.5 h-3.5 text-orange-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Spice level adjustment */}
          {isWingsOrCustomizable && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                  Spice Heat Level:
                </label>
                <span className="text-xs font-mono text-orange-400 font-bold">
                  {spiceLevel === 1
                    ? 'Mild'
                    : spiceLevel === 2
                    ? 'Medium'
                    : spiceLevel === 3
                    ? 'Hot'
                    : spiceLevel === 4
                    ? 'Fiery (Peri Peri)'
                    : 'Ghost Fire (Extreme)'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setSpiceLevel(lvl)}
                    className={`flex-1 py-2 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer flex items-center justify-center gap-1 ${
                      spiceLevel >= lvl
                        ? 'bg-red-600/20 border-red-500 text-red-400'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    <Flame className={`w-3.5 h-3.5 ${spiceLevel >= lvl ? 'fill-red-500 text-red-500' : 'text-zinc-600'}`} />
                    <span>{lvl}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Optional Extra Ranch / Garlic Dip */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setExtraDip(!extraDip)}
              className={`w-full p-3 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                extraDip
                  ? 'bg-zinc-900 border-orange-500 text-white'
                  : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🥣</span>
                <div>
                  <div className="font-bold text-xs">Add Extra House Garlic Ranch Dip</div>
                  <div className="text-[11px] text-zinc-500">Creamy side dip cup (+Rs. 80)</div>
                </div>
              </div>
              <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${extraDip ? 'bg-orange-600 border-orange-500 text-white' : 'border-zinc-700'}`}>
                {extraDip && <Check className="w-3.5 h-3.5" />}
              </div>
            </button>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
              Special Instructions (Optional):
            </label>
            <input
              type="text"
              placeholder="e.g. Extra napkins, well done wings, sauce on side"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-zinc-950 border-t border-zinc-900 flex items-center gap-4 shrink-0">
          {/* Quantity selector */}
          <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-xl p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="font-mono font-bold text-xs text-white px-3 tabular-nums">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Increase quantity"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add to Cart button */}
          <button
            onClick={handleAdd}
            className="flex-1 py-3.5 px-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-black text-xs tracking-wider uppercase rounded-xl shadow-lg shadow-orange-600/30 transition-all cursor-pointer flex items-center justify-between"
          >
            <span>Add To Bag</span>
            <span className="font-mono tabular-nums">Rs. {totalPrice.toLocaleString()}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
