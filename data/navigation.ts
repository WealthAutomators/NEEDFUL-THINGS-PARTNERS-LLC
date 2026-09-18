import { NavLink } from "@/types";
import { categories } from "./categories";

export const navigationLinks: NavLink[] = [
  { label: "Shop", href: "/shop" },
  {
    label: "Collections",
    href: "/collections",
    children: [
      { label: "The Needful Edit", href: "/shop?collection=needful-edit" },
      { label: "Entertain & Gather", href: "/shop?collection=entertain" },
      { label: "Weekend Living", href: "/shop?collection=weekend" },
      { label: "Everyday", href: "/shop?collection=everyday" },
      { label: "New Arrivals", href: "/new-arrivals" },
    ],
  },
  {
    label: "Categories",
    href: "/categories",
    children: categories.map((c) => ({
      label: c.name,
      href: `/categories/${c.slug}`,
    })),
  },
  { label: "New Arrivals", href: "/new-arrivals" },
];

export const footerLinks = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "New Arrivals", href: "/new-arrivals" },
    { label: "Best Sellers", href: "/best-sellers" },
    { label: "The Needful Edit", href: "/shop?collection=needful-edit" },
  ],
  categories: categories.map((c) => ({
    label: c.name,
    href: `/categories/${c.slug}`,
  })),
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faq" },
    { label: "Track Order", href: "/track-order" },
  ],
  customerCare: [
    { label: "Returns", href: "/returns" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Account", href: "/profile" },
    { label: "Wishlist", href: "/wishlist" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export const paymentMethods = [
  { name: "Visa", icon: "/payments/visa.svg" },
  { name: "Mastercard", icon: "/payments/mastercard.svg" },
  { name: "Amex", icon: "/payments/amex.svg" },
  { name: "PayPal", icon: "/payments/paypal.svg" },
  { name: "Apple Pay", icon: "/payments/apple-pay.svg" },
];
