import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, MessageCircle, Phone, CheckCircle, Truck, Store } from 'lucide-react';
import { CartItem, CustomerDetails, OrderType } from '../types/cart';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQuantity: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  initialOrderType?: OrderType;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  initialOrderType = 'delivery',
}) => {
  const [orderType, setOrderType] = useState<OrderType>(initialOrderType);
  const [customer, setCustomer] = useState<CustomerDetails>({
    name: '',
    phone: '',
    orderType: initialOrderType,
    address: '',
    notes: '',
  });
  const [orderSubmitted, setOrderSubmitted] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => {
    const extraDipPrice = item.extraDip ? 80 : 0;
    return acc + (item.item.price + extraDipPrice) * item.quantity;
  }, 0);

  const deliveryFee = orderType === 'delivery' ? 120 : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleCheckoutWhatsApp = () => {
    if (!customer.name.trim() || !customer.phone.trim()) {
      alert('Please enter your Name and Phone Number to place your order.');
      return;
    }
    if (orderType === 'delivery' && !customer.address.trim()) {
      alert('Please enter your Delivery Address in Lahore (e.g. House #, Block, Al-Rehman Garden Phase 2).');
      return;
    }

    const orderRef = `WT-${Math.floor(1000 + Math.random() * 9000)}`;

    const itemsSummary = cartItems
      .map(
        (ci) =>
          `• ${ci.quantity}x ${ci.item.name} (Sauce: ${ci.selectedSauce}, Heat: Lvl ${ci.spiceLevel}${ci.extraDip ? ', +Extra Ranch Dip' : ''}) - Rs. ${(
            (ci.item.price + (ci.extraDip ? 80 : 0)) *
            ci.quantity
          ).toLocaleString()}${ci.specialInstructions ? `\n   Note: "${ci.specialInstructions}"` : ''}`
      )
      .join('\n');

    const message = `🍗 *NEW ORDER: ${RESTAURANT_INFO.name}*
*Order Ref:* ${orderRef}
-------------------------------
👤 *Name:* ${customer.name}
📞 *Phone:* ${customer.phone}
🛵 *Type:* ${orderType.toUpperCase()}
📍 *Address:* ${orderType === 'delivery' ? customer.address : 'Pickup at Counter (Al-Rehman Garden Phase 2)'}
${customer.notes ? `📝 *Notes:* ${customer.notes}\n` : ''}
*Items Ordered:*
${itemsSummary}

-------------------------------
Subtotal: Rs. ${subtotal.toLocaleString()}
Delivery Fee: Rs. ${deliveryFee.toLocaleString()}
*Total Amount:* *Rs. ${grandTotal.toLocaleString()}*
Payment: Cash on Delivery / Counter

_Home of the Main Chick & Side Ting™_`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923002931947?text=${encoded}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setOrderSubmitted(orderRef);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-zinc-950 border-l border-zinc-800 h-full flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="p-5 border-b border-zinc-900 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-orange-600/20 text-orange-500 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-display text-lg font-black text-white uppercase tracking-tight">
                Your Food Bag
              </h2>
              <span className="text-[11px] text-zinc-400 font-mono">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white bg-zinc-900 rounded-xl transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {orderSubmitted ? (
            <div className="text-center py-12 px-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-black text-white uppercase">
                Order Received!
              </h3>
              <p className="text-xs font-mono text-orange-400">Order Ref #{orderSubmitted}</p>
              <p className="text-xs text-zinc-300 leading-relaxed max-w-xs mx-auto">
                Your order is sent to our kitchen via WhatsApp. Our team will verify and prepare your hot wings right away!
              </p>
              <div className="pt-4 space-y-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                  className="w-full py-3 bg-zinc-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 border border-zinc-800"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>Call to Confirm: {RESTAURANT_INFO.phone}</span>
                </a>
                <button
                  onClick={() => {
                    setOrderSubmitted(null);
                    onClearCart();
                    onClose();
                  }}
                  className="w-full py-3 text-xs font-bold text-zinc-400 hover:text-white"
                >
                  Close &amp; Order More
                </button>
              </div>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-600 flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-display text-lg font-black text-white uppercase">
                Your Bag Is Empty
              </h3>
              <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                Add some crispy Peri Peri wings, cheesy fries or a combo box to get this feast started.
              </p>
            </div>
          ) : (
            <>
              {/* Order Type Toggle: Pickup vs Delivery */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-zinc-900 rounded-2xl border border-zinc-800">
                <button
                  type="button"
                  onClick={() => setOrderType('delivery')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    orderType === 'delivery'
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Truck className="w-4 h-4" />
                  <span>Delivery</span>
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('pickup')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    orderType === 'pickup'
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Store className="w-4 h-4" />
                  <span>Pickup</span>
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 block">
                  Items in Bag:
                </span>
                {cartItems.map((cartItem) => {
                  const itemPrice = (cartItem.item.price + (cartItem.extraDip ? 80 : 0)) * cartItem.quantity;
                  return (
                    <div
                      key={cartItem.cartItemId}
                      className="p-3.5 bg-zinc-900/80 border border-zinc-800/80 rounded-2xl flex items-start justify-between gap-3"
                    >
                      <div className="flex-1">
                        <h4 className="text-xs font-bold text-white mb-1">
                          {cartItem.item.name}
                        </h4>
                        <div className="text-[11px] text-zinc-400 space-y-0.5 font-mono">
                          <div>Flavor: <span className="text-orange-400 font-semibold">{cartItem.selectedSauce}</span></div>
                          {cartItem.extraDip && <div className="text-zinc-400">+ Extra Garlic Ranch Dip</div>}
                          {cartItem.specialInstructions && (
                            <div className="text-zinc-400 italic">"{cartItem.specialInstructions}"</div>
                          )}
                        </div>
                        <div className="text-xs font-mono font-bold text-white mt-2 tabular-nums">
                          Rs. {itemPrice.toLocaleString()}
                        </div>
                      </div>

                      {/* Quantity Controls & Remove */}
                      <div className="flex flex-col items-end justify-between self-stretch">
                        <button
                          onClick={() => onRemoveItem(cartItem.cartItemId)}
                          className="p-1 text-zinc-600 hover:text-red-400 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center bg-zinc-950 border border-zinc-800 rounded-lg p-0.5 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(cartItem.cartItemId, cartItem.quantity - 1)}
                            className="p-1 text-zinc-400 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-xs font-bold px-2 text-white">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(cartItem.cartItemId, cartItem.quantity + 1)}
                            className="p-1 text-zinc-400 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Customer Information Form */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400 block">
                  Customer &amp; Delivery Details:
                </span>

                <div>
                  <input
                    type="text"
                    placeholder="Your Full Name *"
                    value={customer.name}
                    onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number (e.g. 0300 1234567) *"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 font-mono"
                  />
                </div>

                {orderType === 'delivery' && (
                  <div>
                    <textarea
                      rows={2}
                      placeholder="Delivery Address in Lahore (House, Street, Block, Phase 2, Landmark) *"
                      value={customer.address}
                      onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                      className="w-full px-3.5 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                    />
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    placeholder="Order notes (e.g. Ring bell, extra cutlery)"
                    value={customer.notes}
                    onChange={(e) => setCustomer({ ...customer, notes: e.target.value })}
                    className="w-full px-3.5 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer with Totals & WhatsApp Send Button */}
        {!orderSubmitted && cartItems.length > 0 && (
          <div className="p-5 bg-zinc-950 border-t border-zinc-900 shrink-0 space-y-3">
            <div className="space-y-1.5 text-xs text-zinc-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-mono text-zinc-200">Rs. {subtotal.toLocaleString()}</span>
              </div>
              {orderType === 'delivery' && (
                <div className="flex justify-between">
                  <span>Lahore Delivery Fee</span>
                  <span className="font-mono text-zinc-200">Rs. {deliveryFee.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-zinc-900">
                <span>Total (Cash on Delivery)</span>
                <span className="font-mono text-base text-orange-400">
                  Rs. {grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs tracking-wider uppercase rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Confirm Order Via WhatsApp</span>
            </button>

            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="w-full py-2.5 text-center text-xs font-bold text-zinc-400 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400" />
              <span>Or Call Direct: {RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
