export type ShopVariant = {
  id: string;
  label: string;
  price: number;
};

export type ShopProduct = {
  id: string;
  name: string;
  category: string;
  size: string;
  price: number;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  variants?: ShopVariant[];
  safetyNote?: string;
};

export const shopProducts: ShopProduct[] = [
  {
    id: "glass-cleaner",
    name: "Glass Cleaner",
    category: "Glass & surfaces",
    size: "500 ml · Pack of 1",
    price: 99,
    description: "A spray cleaner for glass, windows and mirrors.",
    image: "/products/glass-cleaner-single.jpg",
    imageAlt: "DrCleanX Glass Cleaner spray bottle, 500 ml",
    badge: "500 ml",
  },
  {
    id: "toilet-cleaner",
    name: "Toilet Cleaner",
    category: "Bathroom care",
    size: "500 ml · Pack of 1",
    price: 109,
    description: "A toilet bowl cleaner for everyday bathroom routines.",
    image: "/products/toilet-cleaner.webp",
    imageAlt: "DrCleanX Toilet Cleaner bottle, 500 ml",
    badge: "500 ml",
  },
  {
    id: "dishwash-gel",
    name: "Citrus Dishwash Gel",
    category: "Kitchen care",
    size: "250 ml · Pack of 1",
    price: 79,
    description: "Citrus-scented dishwash gel for everyday dishes.",
    image: "/products/dishwash-gel.jpg",
    imageAlt: "DrCleanX Citrus Dishwash Gel bottle, 250 ml",
    badge: "250 ml",
  },
  {
    id: "floor-cleaner",
    name: "Triple Action Floor Cleaner",
    category: "Floor care",
    size: "500 ml · Pack of 1",
    price: 89,
    description: "For floors and washable surfaces around the home.",
    image: "/products/floor-cleaner.jpg",
    imageAlt: "DrCleanX Triple Action Floor Cleaner bottle",
    badge: "500 ml",
  },
  {
    id: "naphthalene-balls",
    name: "Naphthalene Balls",
    category: "Wardrobe & freshness",
    size: "200 g · Pack of 1",
    price: 120,
    description: "A wardrobe and storage essential. Follow the pack directions and precautions.",
    image: "/products/naphthalene-balls.jpg",
    imageAlt: "DrCleanX Naphthalene Balls pack",
    badge: "Size options",
    variants: [
      { id: "200g", label: "200 g · Pack of 1", price: 120 },
      { id: "300g", label: "300 g · Pack of 1", price: 149 },
      { id: "400g", label: "400 g · Pack of 1", price: 200 },
      { id: "1kg", label: "1 kg · Pack of 1", price: 350 },
    ],
    safetyNote: "Keep away from children and pets. Avoid direct contact and follow the label directions.",
  },
  {
    id: "scented-balls",
    name: "Scented Freshener Balls",
    category: "Wardrobe & freshness",
    size: "Lidded jar · Pack of 1",
    price: 99,
    description: "A fragranced ball jar for wardrobe and home freshness.",
    image: "/products/scented-balls.jpg",
    imageAlt: "Jar of DrCleanX scented freshener balls",
    badge: "Freshness",
    safetyNote: "Keep sealed and out of reach of children. Use only as directed on the pack.",
  },
  {
    id: "toilet-cubes",
    name: "Toilet Cubes",
    category: "Bathroom care",
    size: "300 g · Pack of 1",
    price: 99,
    description: "Freshening cubes for toilet and urinal care.",
    image: "/products/toilet-cubes.jpg",
    imageAlt: "DrCleanX Toilet Cubes box, 300 g",
    badge: "300 g",
  },
  {
    id: "toilet-brush-set",
    name: "Toilet Brush Set",
    category: "Cleaning tools",
    size: "Pack of 2 brushes",
    price: 129,
    description: "Two long-handle brushes for bathroom cleaning tasks.",
    image: "/products/toilet-brush-set.jpg",
    imageAlt: "Two blue toilet cleaning brushes",
    badge: "Pack of 2",
  },
  {
    id: "bleaching-powder",
    name: "Bleaching Powder",
    category: "Household utility",
    size: "1 kg · Pack of 1",
    price: 99,
    description: "A 1 kg pack of bleaching powder. Use only as directed on the label.",
    image: "/products/bleaching-powder.jpg",
    imageAlt: "DrCleanX Bleaching Powder pack, 1 kg",
    badge: "1 kg",
    safetyNote: "Use with care, keep away from children, and never mix with acids or other cleaners.",
  },
  {
    id: "caustic-soda",
    name: "Caustic Soda Flakes",
    category: "Household utility",
    size: "1 kg · Pack of 1",
    price: 149,
    description: "Sodium hydroxide flakes in a 1 kg pack. Follow the product label.",
    image: "/products/caustic-soda.jpg",
    imageAlt: "AP Enterprise Caustic Soda Flakes bag, 1 kg",
    badge: "Use with care",
    safetyNote: "Corrosive material. Avoid skin and eye contact, use appropriate protective gear, and keep away from children.",
  },
  {
    id: "glass-toilet-duo",
    name: "Glass + Toilet Cleaner Duo",
    category: "Bundles",
    size: "2 × 500 ml",
    price: 189,
    description: "One glass cleaner and one toilet cleaner for two everyday cleaning jobs.",
    image: "/products/glass-toilet-pair.jpg",
    imageAlt: "DrCleanX Glass Cleaner and Toilet Cleaner two-bottle set",
    badge: "2-piece set",
  },
  {
    id: "home-care-trio",
    name: "Everyday Cleaning Trio",
    category: "Bundles",
    size: "2 × 500 ml + 1 × 250 ml",
    price: 249,
    description: "A three-product set for glass, bathroom and kitchen care.",
    image: "/products/home-care-trio.jpg",
    imageAlt: "DrCleanX Glass Cleaner, Toilet Cleaner and Dishwash Gel combo",
    badge: "Pack of 3",
  },
];
