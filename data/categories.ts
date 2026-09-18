import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    slug: "home",
    name: "Home",
    image: "/categories/home.jpg",
    description: "Soft furnishings, lighting, and considered objects for living rooms and bedrooms.",
    productCount: 0,
  },
  {
    id: "2",
    slug: "kitchen",
    name: "Kitchen",
    image: "/categories/kitchen.jpg",
    description: "Tableware, cookware, and serving pieces for everyday meals and gatherings.",
    productCount: 0,
  },
  {
    id: "3",
    slug: "workspace",
    name: "Workspace",
    image: "/categories/workspace.jpg",
    description: "Desk tools and writing objects that keep a modern workspace calm and useful.",
    productCount: 0,
  },
  {
    id: "4",
    slug: "travel",
    name: "Travel",
    image: "/categories/travel.jpg",
    description: "Bags, carry goods, and compact essentials for day trips and longer weekends.",
    productCount: 0,
  },
  {
    id: "5",
    slug: "outdoor",
    name: "Outdoor",
    image: "/categories/outdoor.jpg",
    description: "Refined pieces for patios, gardens, picnics, and unhurried outdoor living.",
    productCount: 0,
  },
  {
    id: "6",
    slug: "apparel",
    name: "Apparel",
    image: "/categories/apparel.jpg",
    description: "Easy, well-cut clothing for everyday wear at home and in town.",
    productCount: 0,
  },
  {
    id: "7",
    slug: "accessories",
    name: "Accessories",
    image: "/categories/accessories.jpg",
    description: "Leather goods, eyewear, and small personal objects worth carrying daily.",
    productCount: 0,
  },
  {
    id: "8",
    slug: "personal",
    name: "Personal",
    image: "/categories/personal.jpg",
    description: "Bath, grooming, and quiet home fragrance for a more considered daily ritual.",
    productCount: 0,
  },
  {
    id: "9",
    slug: "fitness-wellness",
    name: "Wellness",
    image: "/categories/fitness-wellness.jpg",
    description: "Simple movement and recovery tools that belong in a well-lived home.",
    productCount: 0,
  },
  {
    id: "10",
    slug: "gifts",
    name: "Gifts",
    image: "/categories/gifts.jpg",
    description: "Edited presents for hosts, readers, and people who appreciate useful beautiful things.",
    productCount: 0,
  },
  {
    id: "11",
    slug: "technology",
    name: "Technology",
    image: "/categories/technology.jpg",
    description: "A small edit of analog-minded devices that earn a place on the shelf.",
    productCount: 0,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function syncCategoryCounts(
  counts: Record<string, number>
): void {
  categories.forEach((category) => {
    category.productCount = counts[category.slug] ?? 0;
  });
}
