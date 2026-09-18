/**
 * Downloads editorial lifestyle photography for homepage slots.
 * Product images come from the shared library, not this script.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC = path.join(__dirname, "..", "public");

const DOWNLOADS = [
  { file: "hero/hero-1.jpg", id: "photo-1600210492486-724fe5c67fb0", w: 2000, h: 1200 },
  { file: "banners/featured.jpg", id: "photo-1616486338812-3dadae4b4ace", w: 1600, h: 1200 },
  { file: "banners/about.jpg", id: "photo-1600585154340-be6161a56a0c", w: 1400, h: 1800 },
  { file: "banners/secondary.jpg", id: "photo-1556912173-46c336c7fd55", w: 1800, h: 1100 },
  { file: "lifestyle/needful-edit.jpg", id: "photo-1586023492125-27b2c045efd7", w: 1400, h: 1800 },
  { file: "lifestyle/everyday-living.jpg", id: "photo-1600566753190-17f0baa2a6c3", w: 1600, h: 1200 },
  { file: "lifestyle/entertain.jpg", id: "photo-1600585152220-90363fe30d40", w: 1600, h: 2000 },
  { file: "lifestyle/weekend.jpg", id: "photo-1600585154526-990dced4db0d", w: 2000, h: 900 },
  { file: "lifestyle/shop-home.jpg", id: "photo-1618221195710-dd6b41faaea6", w: 1200, h: 1500 },
  { file: "lifestyle/shop-kitchen.jpg", id: "photo-1556909114-f6e7ad7d3136", w: 1200, h: 1500 },
  { file: "lifestyle/shop-everyday.jpg", id: "photo-1600607687644-c7171b42498f", w: 1200, h: 1500 },
  { file: "lifestyle/shop-workspace.jpg", id: "photo-1486312338219-ce68d2c6f44d", w: 1200, h: 1500 },
  { file: "lifestyle/shop-travel.jpg", id: "photo-1553062407-98eeb64c6a31", w: 1200, h: 1500 },
  { file: "lifestyle/shop-outdoor.jpg", id: "photo-1441974231531-c6227db76b6e", w: 1200, h: 1500 },
  { file: "lifestyle/shop-personal.jpg", id: "photo-1600566752355-35792bedcfea", w: 1200, h: 1500 },
  { file: "lifestyle/shop-gifts.jpg", id: "photo-1472851294608-062f824d29cc", w: 1200, h: 1500 },
];

async function download(item) {
  const dest = path.join(PUBLIC, item.file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  if (fs.existsSync(dest) && fs.statSync(dest).size > 8000) {
    console.log(`SKIP ${item.file}`);
    return;
  }
  const url = `https://images.unsplash.com/${item.id}?auto=format&fit=crop&w=${item.w}&h=${item.h}&q=80`;
  const res = await fetch(url, {
    headers: { "User-Agent": "NeedfulThingsPartnersLLC/1.0 (lifestyle-images)" },
  });
  if (!res.ok) throw new Error(`${item.file} failed: ${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 8000) throw new Error(`${item.file} too small (${buf.length})`);
  fs.writeFileSync(dest, buf);
  console.log(`OK ${item.file} (${Math.round(buf.length / 1024)}kb)`);
}

for (const item of DOWNLOADS) {
  await download(item);
}
