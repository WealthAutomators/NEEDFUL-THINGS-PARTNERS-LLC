import { Feature, HeroSlide, PromoBanner } from "@/types";

export const utilityBarMessage =
  "An edited collection of useful, beautiful things for modern everyday living.";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-campaign.jpg",
    headline: "Things Worth Having",
    alt: "Sunlit contemporary living room with a round wood table, leather sofa, gallery wall, and indoor plants",
    description:
      "A carefully edited collection of objects for the home, the table, the desk, and the weekend — chosen because they are useful, well made, and a pleasure to live with.",
    ctaText: "Shop the Edit",
    ctaLink: "/shop",
    secondaryCtaText: "The Needful Edit",
    secondaryCtaLink: "/shop?collection=needful-edit",
  },
];

export const shopLifestyle = [
  {
    slug: "home",
    label: "Home",
    href: "/categories/home",
    image: "/lifestyle/shop-home.jpg",
    caption: "Rooms that feel finished, not decorated.",
  },
  {
    slug: "kitchen",
    label: "Kitchen",
    href: "/categories/kitchen",
    image: "/lifestyle/shop-kitchen.jpg",
    caption: "Pieces for cooking, serving, and staying at the table.",
  },
  {
    slug: "everyday",
    label: "Everyday",
    href: "/shop?collection=everyday",
    image: "/lifestyle/shop-everyday.jpg",
    caption: "The objects you reach for without thinking.",
  },
  {
    slug: "workspace",
    label: "Workspace",
    href: "/categories/workspace",
    image: "/lifestyle/shop-workspace.jpg",
    caption: "A calmer desk, fewer but better tools.",
  },
  {
    slug: "travel",
    label: "Travel",
    href: "/categories/travel",
    image: "/lifestyle/shop-travel.jpg",
    caption: "Carry goods for day trips and longer weekends.",
  },
  {
    slug: "outdoor",
    label: "Outdoor",
    href: "/categories/outdoor",
    image: "/lifestyle/shop-outdoor.jpg",
    caption: "Patio, garden, picnic — living outside, quietly.",
  },
  {
    slug: "personal",
    label: "Personal",
    href: "/categories/personal",
    image: "/lifestyle/shop-personal.jpg",
    caption: "Bath, grooming, and daily ritual.",
  },
  {
    slug: "gifts",
    label: "Gifts",
    href: "/categories/gifts",
    image: "/lifestyle/shop-gifts.jpg",
    caption: "Presents that feel chosen, not last-minute.",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: "Considered Shipping",
    description: "Free standard shipping on orders over $75, typically 3–5 business days.",
  },
  {
    id: "2",
    icon: "shield",
    title: "Secure Checkout",
    description: "Encrypted demo checkout with the payment methods you already use.",
  },
  {
    id: "3",
    icon: "rotate",
    title: "Thirty-Day Returns",
    description: "Send back unused pieces in original condition within 30 days.",
  },
  {
    id: "4",
    icon: "headphones",
    title: "Human Support",
    description: "Write us Monday–Friday. We answer most notes within one business day.",
  },
  {
    id: "5",
    icon: "star",
    title: "Edited, Not Endless",
    description: "Every object is chosen for usefulness, materials, and how it lives in a home.",
  },
];

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "haven-linen-bedding",
  "hearthstone-tea-kettle",
  "satin-flatware-set",
  "solenne-table-lamp",
  "stonewashed-bath-towels",
  "everyday-sneakers",
] as const;

export const homepageBestsellerSlugs = [
  "everyday-ceramic-mugs",
  "stonewashed-bath-towels",
  "conical-burr-coffee-grinder",
  "folded-leather-wallet",
  "alignment-yoga-mat",
  "haven-linen-bedding",
  "amber-scented-candle",
  "insulated-travel-tumbler",
] as const;

export const homepageFeaturedSlugs = [
  "haven-linen-bedding",
  "oakridge-side-table",
  "riverstone-ceramic-vase",
  "walnut-serving-board",
  "arcada-floor-lamp",
  "stoneware-dinner-plates",
  "merino-knit-sweater",
  "canvas-daypack",
] as const;

export const featuredHeroSlug = "haven-linen-bedding";

export const homepageNewArrivalSlugs = [
  "solenne-table-lamp",
  "weekender-duffel",
  "merino-knit-sweater",
  "patio-fire-bowl",
  "weekly-linen-planner",
  "instant-film-camera",
  "afternoon-tea-set",
  "linen-gift-box",
] as const;

export const needfulEditSlugs = [
  "haven-linen-bedding",
  "walnut-serving-board",
  "everyday-ceramic-mugs",
  "arcada-floor-lamp",
  "folded-leather-wallet",
  "outdoor-picnic-blanket",
  "merino-knit-sweater",
  "studio-fountain-pen",
] as const;

export const entertainSlugs = [
  "stemware-wine-glasses",
  "gathering-serving-bowl",
  "walnut-serving-board",
  "stoneware-dinner-plates",
  "hearthstone-tea-kettle",
  "amber-scented-candle",
  "satin-flatware-set",
  "afternoon-tea-set",
] as const;

export const weekendSlugs = [
  "wicker-picnic-basket",
  "outdoor-picnic-blanket",
  "canvas-hammock",
  "garden-watering-can",
  "patio-fire-bowl",
  "canvas-daypack",
  "insulated-travel-tumbler",
] as const;

export const everydayLivingSlugs = [
  "stillwater-knit-throw",
  "linen-lounge-cushions",
  "seagrass-storage-basket",
  "woven-entry-doormat",
  "entry-coat-hooks",
  "everyday-ceramic-mugs",
] as const;

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "Bring the table in from the garden",
  description:
    "Serving boards, stemware, candles, and the quiet extras that make a weeknight meal feel like you meant it.",
  buttonText: "Shop Entertain & Gather",
  buttonLink: "/shop?collection=entertain",
  image: "/banners/secondary.jpg",
};

export const aboutSection = {
  title: "Useful things, chosen with care.",
  description:
    "NEEDFUL THINGS PARTNERS LLC began with a simple idea: most homes do not need more stuff. They need a smaller number of objects that are beautiful, practical, and worth keeping. From Nolensville, Tennessee, we edit a contemporary collection for modern everyday life.",
  checklist: [
    "Edited across home, kitchen, workspace, travel, and personal care",
    "Materials and forms chosen to last, not to trend",
    "Packaged and shipped with the same care we take in selecting",
    "A shop that feels considered rather than crowded",
  ],
  buttonText: "Read Our Story",
  buttonLink: "/about",
  image: "/banners/about.jpg",
};

export const featuredCollection = {
  title: "Featured Collection",
  description: "A short list of pieces we would put in a well-lived modern house this season.",
  bannerImage: "/banners/featured.jpg",
  categorySlug: "home",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Home", slug: "home" },
  { label: "Kitchen", slug: "kitchen" },
  { label: "Apparel", slug: "apparel" },
  { label: "Travel", slug: "travel" },
];

export const newsletter = {
  title: "Notes from the shop",
  description: "New arrivals, considered gifts, and a few things worth having — sent occasionally, never noisily.",
  placeholder: "Email address",
  buttonText: "Join the list",
};

export const everydayEditorial = {
  title: "Everyday living, made more handsome",
  description:
    "Throws, baskets, hooks, and the small domestic objects that keep a house running with a little more grace. Practical first. Beautiful because it has to live in the room.",
  image: "/lifestyle/everyday-living.jpg",
  ctaText: "Shop Everyday",
  ctaLink: "/shop?collection=everyday",
};

export const entertainEditorial = {
  title: "Entertain & Gather",
  description:
    "Plates, boards, glasses, and serving pieces for the kind of table where people stay a little longer. Kitchen tools that look at home when the meal is still going.",
  image: "/lifestyle/entertain.jpg",
  ctaText: "Shop the table",
  ctaLink: "/shop?collection=entertain",
};

export const weekendEditorial = {
  title: "Weekend, outdoors",
  description:
    "Picnic blankets, a watering can, a hammock, a fire table. Pieces for the patio and the day trip — lifestyle, not survival.",
  image: "/lifestyle/weekend.jpg",
  ctaText: "Shop Weekend Living",
  ctaLink: "/shop?collection=weekend",
};

export const needfulEditCopy = {
  kicker: "The Needful Edit",
  title: "What belongs in a well-lived modern life",
  description:
    "These are the pieces we would keep: a better bed linen, a walnut board, a mug you actually like, a lamp that makes a room feel finished. Not more things. The right ones.",
  image: "/lifestyle/needful-edit.jpg",
};

export const promoStrip = {
  title: "Free shipping on orders over $75",
  description: "An edited shop, packed with care, sent across the country.",
  buttonText: "Start shopping",
  buttonLink: "/shop",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];
