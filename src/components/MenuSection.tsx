import React, { useState, useMemo } from 'react';
import { Search, Flame, Plus, Check, Utensils } from 'lucide-react';
import { ALL_MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
}

type MenuCategory = 'all' | 'wings' | 'fries' | 'sides' | 'drinks' | 'combos';

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllItems, setShowAllItems] = useState(false);

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: 'All Tingz' },
    { id: 'wings', label: 'Wings' },
    { id: 'fries', label: 'Fries' },
    { id: 'sides', label: 'Sides' },
    { id: 'combos', label: 'Combos' },
    { id: 'drinks', label: 'Drinks' },
  ];

  const filteredItems = useMemo(() => {
    return ALL_MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Initial display limit if not expanded
  const displayedItems = showAllItems ? filteredItems : filteredItems.slice(0, 8);

  return (
    <section id="menu" className="py-24 bg-[#0d0d12] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500 mb-3 flex items-center justify-center gap-2">
            <Utensils className="w-4 h-4 text-orange-500" />
            <span>Craving Guaranteed</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-4">
            No Boring Bites Allowed.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            From our double-fried signature wings to loaded melted cheese fries and feast combos, everything is made fresh to order in Al-Rehman Garden Phase 2.
          </p>
        </div>

        {/* Category Filters Bar & Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Functional interactive category tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-950/80 border border-zinc-800 rounded-2xl overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search wings, fries, combos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-950 border border-zinc-800/80 hover:border-zinc-700 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black"
            >
              {/* Product Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />

                {item.badge && (
                  <div className="absolute top-2.5 right-2.5 bg-orange-600/90 backdrop-blur-sm text-white font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded-md">
                    {item.badge}
                  </div>
                )}

                {item.spiceLevel && item.spiceLevel > 1 && (
                  <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-sm px-2 py-0.5 rounded-md flex items-center gap-0.5 text-red-500 text-[10px]">
                    <Flame className="w-3 h-3 fill-red-500" />
                    <span className="font-mono font-bold text-white text-[9px]">Lvl {item.spiceLevel}</span>
                  </div>
                )}
              </div>

              {/* Product Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <h3 className="font-bold text-sm text-white group-hover:text-orange-400 transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Price & Add Action */}
                <div className="pt-3 border-t border-zinc-900 flex items-center justify-between">
                  <div className="font-mono text-base font-bold text-white tabular-nums">
                    Rs. {item.price.toLocaleString()}
                  </div>

                  <button
                    onClick={() => onSelectItem(item)}
                    className="p-2 bg-zinc-900 hover:bg-orange-600 text-zinc-300 hover:text-white border border-zinc-800 hover:border-orange-500 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 px-3 active:scale-95 text-xs font-bold"
                    aria-label={`Order ${item.name}`}
                  >
                    <Plus className="w-3.5 h-3.5 text-orange-400" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if search has no results */}
        {displayedItems.length === 0 && (
          <div className="text-center py-16 bg-zinc-950 rounded-3xl border border-zinc-800">
            <p className="text-zinc-400 font-medium mb-3">No delicious bites match your search "{searchQuery}"</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-xs font-bold text-orange-500 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Toggle / View Full Menu CTA Button */}
        {filteredItems.length > 8 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAllItems(!showAllItems)}
              className="px-8 py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-orange-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-orange-600/10 cursor-pointer"
            >
              {showAllItems ? 'Show Less Items' : `View Full Menu (${filteredItems.length} items)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
