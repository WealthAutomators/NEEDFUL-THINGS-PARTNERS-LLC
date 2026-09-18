import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const colors = {
  primary: "#2C2A28",
  accent: "#6F7A62",
  light: "#F7F3EC",
  gray: "#D9CFC0",
  white: "#FFFFFF",
};

function createSvg(width, height, bg, label, sublabel = "", textColor = colors.primary) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="${bg}"/>
  <rect x="20" y="20" width="${width - 40}" height="${height - 40}" fill="none" stroke="${textColor}" stroke-width="1" opacity="0.15"/>
  <text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="Georgia, serif" font-size="${Math.min(width, height) * 0.06}" font-weight="600">${label}</text>
  ${sublabel ? `<text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-family="system-ui, sans-serif" font-size="${Math.min(width, height) * 0.035}" opacity="0.6">${sublabel}</text>` : ""}
</svg>`;
}

function createLogo() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="48" viewBox="0 0 280 48" fill="none">
  <text x="0" y="22" fill="#1C1B1A" font-family="Georgia, 'Times New Roman', serif" font-size="20" font-weight="600" letter-spacing="1.4">NEEDFUL THINGS</text>
  <text x="0" y="40" fill="#6F7A62" font-family="system-ui, sans-serif" font-size="9" font-weight="600" letter-spacing="3.4">PARTNERS LLC</text>
</svg>`;
}

function createPaymentIcon(name, color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="32" viewBox="0 0 48 32">
  <rect width="48" height="32" rx="4" fill="${colors.light}" stroke="${colors.gray}" stroke-width="1"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${color}" font-family="system-ui, sans-serif" font-size="8" font-weight="700">${name}</text>
  </svg>`;
}

const root = path.join(__dirname, "..", "public");

fs.mkdirSync(path.join(root, "logo"), { recursive: true });
fs.writeFileSync(path.join(root, "logo", "logo.svg"), createLogo());

const heroItems = [
  { name: "hero-1.svg", label: "Things Worth Having", sub: "Considered Everyday Living", bg: "#E8DFD0" },
];
fs.mkdirSync(path.join(root, "hero"), { recursive: true });
heroItems.forEach((item) => {
  fs.writeFileSync(path.join(root, "hero", item.name), createSvg(1400, 600, item.bg, item.label, item.sub));
});

const bannerItems = [
  { name: "promo-1.svg", label: "Things Worth Having", sub: "Shop the Edit", bg: colors.primary, textColor: colors.white },
  { name: "about.svg", label: "Useful Beautiful Things", sub: "NEEDFUL THINGS PARTNERS LLC", bg: "#E8DFD0" },
  { name: "featured.svg", label: "The Needful Edit", sub: "Considered Everyday Objects", bg: colors.primary, textColor: colors.white },
];
fs.mkdirSync(path.join(root, "banners"), { recursive: true });
bannerItems.forEach((item) => {
  fs.writeFileSync(
    path.join(root, "banners", item.name),
    createSvg(800, 600, item.bg, item.label, item.sub, item.textColor || colors.primary)
  );
});

const categoryItems = [
  { name: "electronics.svg", label: "Electronics" },
  { name: "home-kitchen.svg", label: "Home & Kitchen" },
  { name: "bathroom.svg", label: "Bathroom" },
  { name: "educational-toys.svg", label: "Educational Toys" },
  { name: "pet-supplies.svg", label: "Pet Supplies" },
  { name: "beauty.svg", label: "Beauty" },
  { name: "sports-outdoors.svg", label: "Sports" },
  { name: "office-supplies.svg", label: "Office" },
  { name: "fashion-accessories.svg", label: "Fashion" },
  { name: "baby-products.svg", label: "Baby" },
  { name: "toys-games.svg", label: "Toys & Games" },
  { name: "health-wellness.svg", label: "Health & Wellness" },
];
fs.mkdirSync(path.join(root, "categories"), { recursive: true });
categoryItems.forEach((item) => {
  fs.writeFileSync(path.join(root, "categories", item.name), createSvg(400, 300, colors.light, item.label));
});

fs.mkdirSync(path.join(root, "instagram"), { recursive: true });
for (let i = 1; i <= 6; i++) {
  fs.writeFileSync(path.join(root, "instagram", `${i}.svg`), createSvg(400, 400, colors.light, `Gallery ${i}`));
}

const payments = [
  { name: "visa.svg", label: "VISA", color: "#1A1F71" },
  { name: "mastercard.svg", label: "MC", color: "#EB001B" },
  { name: "amex.svg", label: "AMEX", color: "#006FCF" },
  { name: "paypal.svg", label: "PayPal", color: "#003087" },
  { name: "apple-pay.svg", label: "Pay", color: "#000000" },
];
fs.mkdirSync(path.join(root, "payments"), { recursive: true });
payments.forEach((p) => fs.writeFileSync(path.join(root, "payments", p.name), createPaymentIcon(p.label, p.color)));

const productsFile = fs.readFileSync(path.join(__dirname, "..", "data", "products.ts"), "utf8");
const slugMatches = [...productsFile.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);
const productColors = ["#F3E8FF", "#FEF3C7", "#FCE7F3", "#E0E7FF", "#D1FAE5", "#FEE2E2"];

fs.mkdirSync(path.join(root, "products"), { recursive: true });
slugMatches.forEach((slug, i) => {
  const label = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  for (let j = 1; j <= 2; j++) {
    fs.writeFileSync(
      path.join(root, "products", `${slug}-${j}.svg`),
      createSvg(600, 750, productColors[i % productColors.length], label, `View ${j}`)
    );
  }
});

console.log("Generated placeholder SVGs");
