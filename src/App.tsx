/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MainChickSection } from './components/MainChickSection';
import { SauceSelector } from './components/SauceSelector';
import { MenuSection } from './components/MenuSection';
import { SocialProofSection } from './components/SocialProofSection';
import { ViralGallery } from './components/ViralGallery';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { OrderCTASection } from './components/OrderCTASection';
import { Footer } from './components/Footer';
import { ItemCustomizerModal } from './components/ItemCustomizerModal';
import { CartDrawer } from './components/CartDrawer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { MenuItem, MAIN_CHICK_ITEMS, ALL_MENU_ITEMS, RESTAURANT_INFO } from './data/restaurantData';
import { CartItem, OrderType } from './types/cart';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('wt_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [orderType, setOrderType] = useState<OrderType>('delivery');

  useEffect(() => {
    try {
      localStorage.setItem('wt_cart', JSON.stringify(cartItems));
    } catch {
      // Ignore local storage error
    }
  }, [cartItems]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (newItem: CartItem) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (ci) =>
          ci.item.id === newItem.item.id &&
          ci.selectedSauce === newItem.selectedSauce &&
          ci.spiceLevel === newItem.spiceLevel &&
          ci.extraDip === newItem.extraDip &&
          ci.specialInstructions === newItem.specialInstructions
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, newItem];
    });

    // Provide visual feedback by opening cart drawer
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((ci) =>
        ci.cartItemId === cartItemId ? { ...ci, quantity: newQuantity } : ci
      )
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOrderNow = () => {
    // Scroll to menu or open main chick
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetDirections = () => {
    const locEl = document.getElementById('location');
    if (locEl) {
      locEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickOrderSauce = (sauceName: string) => {
    // Find matching signature wing or default to Peri Peri wings
    const targetItem =
      MAIN_CHICK_ITEMS.find((item) =>
        item.defaultSauce?.toLowerCase().includes(sauceName.toLowerCase())
      ) || MAIN_CHICK_ITEMS[0];

    setCustomizingItem({
      ...targetItem,
      defaultSauce: sauceName,
    });
  };

  const handleOrderPickup = () => {
    setOrderType('pickup');
    if (cartItems.length > 0) {
      setIsCartOpen(true);
    } else {
      handleOrderNow();
    }
  };

  const handleOrderDelivery = () => {
    setOrderType('delivery');
    if (cartItems.length > 0) {
      setIsCartOpen(true);
    } else {
      handleOrderNow();
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0e] text-[#f4f4f6] selection:bg-orange-600 selection:text-white pb-20 lg:pb-0">
      {/* Sticky Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOrderNow={handleOrderNow}
      />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onOrderNow={handleOrderNow}
          onViewMenu={handleViewMenu}
          onGetDirections={handleGetDirections}
        />

        {/* 2. "The Main Chick" Section */}
        <MainChickSection
          onSelectProduct={(item) => setCustomizingItem(item)}
        />

        {/* 3. "Sauce It Up" Interactive Section */}
        <SauceSelector
          onQuickOrderSauce={handleQuickOrderSauce}
        />

        {/* 4. Menu Highlights & Category Filter Grid */}
        <MenuSection
          onSelectItem={(item) => setCustomizingItem(item)}
        />

        {/* 5. Customer Reviews & Social Proof */}
        <SocialProofSection />

        {/* 6. Viral Food Gallery */}
        <ViralGallery />

        {/* 7. About Brand Section */}
        <AboutSection />

        {/* 8. Location & Store Timings Card */}
        <LocationSection />

        {/* 9. Conversion Order CTA Section */}
        <OrderCTASection
          onOrderPickup={handleOrderPickup}
          onOrderDelivery={handleOrderDelivery}
        />
      </main>

      {/* Footer */}
      <Footer onOpenOrder={() => setIsCartOpen(true)} />

      {/* Item Customizer Modal */}
      <ItemCustomizerModal
        item={customizingItem}
        onClose={() => setCustomizingItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart & Checkout Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        initialOrderType={orderType}
      />

      {/* Sticky Mobile Order & Call Floating Bar */}
      <FloatingMobileBar
        cartCount={totalCartCount}
        onOpenOrder={() => (cartItems.length > 0 ? setIsCartOpen(true) : handleOrderNow())}
      />
    </div>
  );
}
