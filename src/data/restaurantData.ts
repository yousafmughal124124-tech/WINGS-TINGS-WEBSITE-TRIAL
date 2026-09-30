export interface MenuItem {
  id: string;
  name: string;
  category: 'wings' | 'fries' | 'sides' | 'drinks' | 'combos';
  price: number; // in PKR
  description: string;
  image: string;
  badge?: string;
  spiceLevel?: 1 | 2 | 3 | 4 | 5;
  popular?: boolean;
  isMainChick?: boolean;
  defaultSauce?: string;
}

export interface Sauce {
  id: string;
  name: string;
  emoji: string;
  heatLevel: number; // 1-5
  tagline: string;
  description: string;
  color: string;
  accentColor: string;
  pairsWith: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  tag?: string;
}

export const RESTAURANT_INFO = {
  name: "Wings & Tingz",
  tagline: "Home of the Main Chick & Side Ting™",
  headline: "WINGS SO GOOD, YOU’LL NEED EXTRA NAPKINS.",
  subheadline: "Crispy. Saucy. Loaded. Welcome to Wings & Tingz — home of the Main Chick & Side Ting™.",
  phone: "0300 293 1947",
  phoneRaw: "+923002931947",
  whatsapp: "+923002931947",
  address: "Plaza No. 12, Joyland Commercial, Al-Rehman Garden Phase 2, Near Saggian Pull, Lahore",
  city: "Lahore, Punjab, Pakistan",
  rating: 4.8,
  totalReviews: 112,
  hours: "1:00 PM – 12:00 AM Midnight (Daily)",
  instagram: "@wings.tingz",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+No.+12+Joyland+Commercial+Al-Rehman+Garden+Phase+2+Lahore",
};

export const SAUCES: Sauce[] = [
  {
    id: "peri-peri",
    name: "Peri Peri",
    emoji: "🔥",
    heatLevel: 4,
    tagline: "Fiery, Zesty & Addictive",
    description: "Charred African bird's eye chilies blended with roasted garlic, freshly squeezed lemon juice, and aromatic herbs. Sharp, spicy, and unforgettable.",
    color: "#e83307",
    accentColor: "#ff5722",
    pairsWith: "Signature Peri Peri Wings & Seasoned French Fries"
  },
  {
    id: "ranch",
    name: "House Ranch",
    emoji: "🥛",
    heatLevel: 1,
    tagline: "Cool, Creamy & Garlic Herb",
    description: "Thick homemade buttermilk ranch churned with garden chives, fresh cracked black pepper, fresh dill, and garlic goodness.",
    color: "#38bdf8",
    accentColor: "#0284c7",
    pairsWith: "Spicy Wings & Golden Mozzarella Sticks"
  },
  {
    id: "spicy-ghost",
    name: "Spicy Ghost",
    emoji: "🌶️",
    heatLevel: 5,
    tagline: "Slow-Burn Heat with a Sweet Kick",
    description: "Not for the faint of heart. Smoked ghost pepper and habanero reduction balanced with dark brown cane sugar and apple cider vinegar.",
    color: "#b91c1c",
    accentColor: "#dc2626",
    pairsWith: "Loaded Tingz Wings & Chilled Mint Margarita"
  },
  {
    id: "cheesy",
    name: "Cheesy Drizzle",
    emoji: "🧀",
    heatLevel: 1,
    tagline: "Molten Golden Cheddar Velvet",
    description: "Rich, velvety melted sharp cheddar cheese sauce cooked to silky perfection with subtle black pepper warmth.",
    color: "#f59e0b",
    accentColor: "#d97706",
    pairsWith: "Cheesy Loaded Fries & Popcorn Bites"
  },
  {
    id: "signature",
    name: "Signature Sweet 'N' Fire",
    emoji: "🍯",
    heatLevel: 3,
    tagline: "The Secret House Ting That Started It All",
    description: "Our world-famous secret glaze: dark honey, toasted sesame seeds, caramelized garlic, soy glaze, and crushed chili flakes.",
    color: "#ea580c",
    accentColor: "#c2410c",
    pairsWith: "Main Chick Wings & Onion Rings"
  }
];

export const MAIN_CHICK_ITEMS: MenuItem[] = [
  {
    id: "peri-peri-wings",
    name: "Peri Peri Wings",
    category: "wings",
    price: 795,
    description: "6 crispy double-fried jumbo wings tossed in our fiery, zesty Peri Peri chili sauce with a hint of lemon flame.",
    image: "/src/assets/images/peri_peri_saucy_wings_1790783443885.jpg",
    badge: "Bestseller",
    spiceLevel: 4,
    popular: true,
    isMainChick: true,
    defaultSauce: "Peri Peri"
  },
  {
    id: "ranch-wings",
    name: "Ranch Wings",
    category: "wings",
    price: 795,
    description: "6 crispy wings coated in our thick signature herb buttermilk ranch with fresh dill and cracked pepper.",
    image: "/src/assets/images/hero_wings_platter_1790783425803.jpg",
    badge: "Customer Favorite",
    spiceLevel: 1,
    popular: true,
    isMainChick: true,
    defaultSauce: "House Ranch"
  },
  {
    id: "signature-wings",
    name: "Signature Tingz Wings",
    category: "wings",
    price: 845,
    description: "Tossed in our sweet & fiery house glaze, finished with roasted sesame seeds, scallions, and roasted garlic crisps.",
    image: "/src/assets/images/peri_peri_saucy_wings_1790783443885.jpg",
    badge: "Must Try",
    spiceLevel: 3,
    popular: true,
    isMainChick: true,
    defaultSauce: "Signature Sweet 'N' Fire"
  },
  {
    id: "loaded-wings",
    name: "Loaded Cheesy Wings",
    category: "wings",
    price: 895,
    description: "Jumbo crispy wings piled high, drenched in warm melted cheddar cheese sauce, pickled jalapeño slices, and spicy mayo.",
    image: "/src/assets/images/loaded_cheesy_fries_1790783461016.jpg",
    badge: "Indulgent",
    spiceLevel: 2,
    popular: true,
    isMainChick: true,
    defaultSauce: "Cheesy Drizzle"
  }
];

export const ALL_MENU_ITEMS: MenuItem[] = [
  ...MAIN_CHICK_ITEMS,
  {
    id: "smoky-bbq-wings",
    name: "Smoky Chipotle BBQ Wings",
    category: "wings",
    price: 795,
    description: "6 wings glazed with slow-simmered smoky hickory barbecue sauce with a gentle molasses undertone.",
    image: "/src/assets/images/hero_wings_platter_1790783425803.jpg",
    spiceLevel: 2,
    defaultSauce: "Smoky BBQ"
  },
  {
    id: "ghost-fire-wings",
    name: "Ghost Fire Tingz (Extreme)",
    category: "wings",
    price: 845,
    description: "Ultra spicy wings doused in ghost pepper sauce. Order extra drinks and napkins!",
    image: "/src/assets/images/peri_peri_saucy_wings_1790783443885.jpg",
    badge: "Extra Hot",
    spiceLevel: 5,
    defaultSauce: "Spicy Ghost"
  },
  // FRIES
  {
    id: "plain-fries-mayo",
    name: "Plain Fries with Mayo",
    category: "fries",
    price: 295,
    description: "Crispy salted golden skin-on potato fries served with a creamy garlic mayo dip.",
    image: "/src/assets/images/loaded_cheesy_fries_1790783461016.jpg",
    spiceLevel: 1,
    popular: true
  },
  {
    id: "cheesy-fries",
    name: "Cheesy Fries",
    category: "fries",
    price: 445,
    description: "Golden crinkle-cut fries blanketed with our warm melted cheddar cheese sauce.",
    image: "/src/assets/images/loaded_cheesy_fries_1790783461016.jpg",
    badge: "Popular Side",
    spiceLevel: 1,
    popular: true
  },
  {
    id: "loaded-tingz-fries",
    name: "Loaded Tingz Fries",
    category: "fries",
    price: 595,
    description: "Crispy fries loaded with spiced minced chicken, melted cheddar, jalapeños, and signature Tingz sauce.",
    image: "/src/assets/images/loaded_cheesy_fries_1790783461016.jpg",
    badge: "Chef's Special",
    spiceLevel: 3,
    popular: true
  },
  // SIDES
  {
    id: "golden-onion-rings",
    name: "Crispy Golden Onion Rings",
    category: "sides",
    price: 380,
    description: "Thick hand-cut sweet onion rings in a light, crunchy seasoned panko batter with garlic herb dip.",
    image: "/src/assets/images/crispy_popcorn_onionrings_1790783476170.jpg",
    badge: "Crispy",
    spiceLevel: 1,
    popular: true
  },
  {
    id: "popcorn-chicken",
    name: "Popcorn Chicken Bites",
    category: "sides",
    price: 495,
    description: "Tender, bite-sized 100% chicken breast chunks marinated in buttermilk and fried to golden perfection.",
    image: "/src/assets/images/crispy_popcorn_onionrings_1790783476170.jpg",
    badge: "Snack Favorite",
    spiceLevel: 2,
    popular: true
  },
  {
    id: "mozzarella-sticks",
    name: "Golden Mozzarella Sticks",
    category: "sides",
    price: 460,
    description: "4 stretchy molten mozzarella sticks with Italian herb crumb and zesty marinara dip.",
    image: "/src/assets/images/crispy_popcorn_onionrings_1790783476170.jpg",
    spiceLevel: 1
  },
  // COMBOS
  {
    id: "main-chick-solo-box",
    name: "Main Chick Solo Box",
    category: "combos",
    price: 995,
    description: "6 Jumbo Wings in your flavor choice + Medium Crispy Fries + 1 Dip + Chilled 345ml Drink.",
    image: "/src/assets/images/hero_wings_platter_1790783425803.jpg",
    badge: "Great Value",
    spiceLevel: 3,
    popular: true
  },
  {
    id: "duo-tingz-combo",
    name: "The Duo Tingz Combo",
    category: "combos",
    price: 1495,
    description: "10 Wings (split into 2 flavors) + Cheesy Loaded Fries + 2 Signature Dips + 2 Chilled Drinks.",
    image: "/src/assets/images/hero_wings_platter_1790783425803.jpg",
    badge: "Perfect for 2",
    spiceLevel: 3,
    popular: true
  },
  {
    id: "the-squad-box",
    name: "The Squad Ting Box (Party Pack)",
    category: "combos",
    price: 2850,
    description: "20 Jumbo Wings (choose up to 3 flavors) + Large Cheesy Fries + Popcorn Chicken + 4 Dips + 1.5L Beverage.",
    image: "/src/assets/images/hero_wings_platter_1790783425803.jpg",
    badge: "Feast Size",
    spiceLevel: 3,
    popular: true
  },
  // DRINKS
  {
    id: "mint-margarita",
    name: "Fresh Mint Margarita",
    category: "drinks",
    price: 240,
    description: "Crushed ice, fresh garden mint, lemon twist, black salt, and sparkling citrus soda. Essential for wing heat!",
    image: "/src/assets/images/hero_wings_platter_1790783425803.jpg",
    popular: true
  },
  {
    id: "chilled-soda",
    name: "Chilled Soft Drinks (345ml)",
    category: "drinks",
    price: 120,
    description: "Ice-cold Coca-Cola, Sprite, Fanta, or Pakola can.",
    image: "/src/assets/images/hero_wings_platter_1790783425803.jpg"
  },
  {
    id: "lemon-fresh-lime",
    name: "Sparkling Fresh Lime",
    category: "drinks",
    price: 190,
    description: "Freshly squeezed Lahore lemons with club soda and sweet-sour salt seasoning.",
    image: "/src/assets/images/hero_wings_platter_1790783425803.jpg"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Hamza Tariq",
    rating: 5,
    date: "2 weeks ago",
    text: "Very good food and clean environment. Cooperative staff. 10/10 service. The Peri Peri wings are the real deal in Al-Rehman Garden!",
    verified: true,
    tag: "Dine-in"
  },
  {
    id: "rev-2",
    author: "Zeeshan Ali",
    rating: 5,
    date: "1 month ago",
    text: "Excellent food, fresh wings and great taste. Sauce clings to the chicken without turning the batter soggy. Huge portion sizes for the price.",
    verified: true,
    tag: "Takeaway"
  },
  {
    id: "rev-3",
    author: "Bilal Ahmed",
    rating: 5,
    date: "3 weeks ago",
    text: "Outstanding food and customer service. We especially enjoyed the wings, onion rings and popcorn chicken. Joyland commercial spot is vibrant and easy to find.",
    verified: true,
    tag: "Delivery"
  },
  {
    id: "rev-4",
    author: "Ayesha Malik",
    rating: 5,
    date: "Just recently",
    text: "The Ranch Wings paired with Cheesy Fries are incredible! My whole family is hooked. Finally didn't have to drive all the way to Gulberg for top-tier chicken wings.",
    verified: true,
    tag: "Family Order"
  },
  {
    id: "rev-5",
    author: "Usman Raza",
    rating: 5,
    date: "A month ago",
    text: "Best wings near Saggian Pull Lahore hands down. 4.8 rating is well deserved. The staff gave extra napkins without even asking lol.",
    verified: true,
    tag: "Regular Customer"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "Signature Saucy Glazed Wings",
    category: "Main Chick",
    image: "/src/assets/images/peri_peri_saucy_wings_1790783443885.jpg",
    span: "col-span-12 md:col-span-7 aspect-[16/10]"
  },
  {
    id: "g2",
    title: "Melted Cheesy Loaded Fries",
    category: "Side Ting",
    image: "/src/assets/images/loaded_cheesy_fries_1790783461016.jpg",
    span: "col-span-12 md:col-span-5 aspect-square"
  },
  {
    id: "g3",
    title: "Crispy Popcorn & Hand-Cut Onion Rings",
    category: "Crunch Time",
    image: "/src/assets/images/crispy_popcorn_onionrings_1790783476170.jpg",
    span: "col-span-12 md:col-span-5 aspect-square"
  },
  {
    id: "g4",
    title: "Late Night Dine-In Vibes at Joyland",
    category: "Storefront",
    image: "/src/assets/images/restaurant_vibe_interior_1790783490194.jpg",
    span: "col-span-12 md:col-span-7 aspect-[16/10]"
  },
  {
    id: "g5",
    title: "The Ultimate Wings & Tingz Feast",
    category: "Platter",
    image: "/src/assets/images/hero_wings_platter_1790783425803.jpg",
    span: "col-span-12 aspect-[21/9]"
  }
];
