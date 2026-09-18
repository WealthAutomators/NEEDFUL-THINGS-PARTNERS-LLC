/**
 * Copies semantically matched assets from the shared product library
 * into public/products/. Does not modify the library.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const LIBRARY = path.join(
  process.env.HOME,
  "Documents/Ecommerce-Product-Library"
);
const DEST = path.join(ROOT, "public/products");

export const PRODUCT_ASSETS = {
  "haven-linen-bedding": ["asset_111"],
  "stillwater-knit-throw": ["asset_109"],
  "oakridge-side-table": ["asset_120"],
  "arcada-floor-lamp": ["asset_094"],
  "solenne-table-lamp": ["asset_098", "asset_099"],
  "roundel-wall-mirror": ["asset_116"],
  "fieldstone-area-rug": ["asset_121"],
  "riverstone-ceramic-vase": ["asset_100", "asset_101"],
  "linen-lounge-cushions": ["asset_112", "asset_113"],
  "seagrass-storage-basket": ["asset_122", "asset_123"],
  "stoneware-dinner-plates": ["asset_137", "asset_138"],
  "everyday-ceramic-mugs": ["asset_125", "asset_126"],
  "satin-flatware-set": ["asset_128"],
  "gathering-serving-bowl": ["asset_135"],
  "walnut-serving-board": ["asset_142", "asset_143"],
  "hearthstone-tea-kettle": ["asset_139"],
  "conical-burr-coffee-grinder": ["asset_127"],
  "stemware-wine-glasses": ["asset_141"],
  "pour-over-coffee-set": ["asset_086"],
  "larder-glass-jars": ["asset_130", "asset_131"],
  "adjustable-led-desk-lamp": ["asset_045"],
  "hardcover-linen-notebook": ["asset_146", "asset_147"],
  "studio-fountain-pen": ["asset_145"],
  "aluminum-laptop-stand": ["asset_148"],
  "weekly-linen-planner": ["asset_154"],
  "canvas-daypack": ["asset_189"],
  "weekender-duffel": ["asset_183"],
  "travel-backpack": ["asset_198", "asset_199"],
  "leather-document-cover": ["asset_194"],
  "insulated-travel-tumbler": ["asset_132"],
  "wicker-picnic-basket": ["asset_174"],
  "outdoor-picnic-blanket": ["asset_175", "asset_176"],
  "garden-watering-can": ["asset_179"],
  "canvas-hammock": ["asset_159", "asset_160"],
  "patio-fire-bowl": ["asset_166"],
  "cotton-crew-tee": ["asset_027", "asset_028"],
  "merino-knit-sweater": ["asset_036", "asset_037"],
  "casual-overshirt": ["asset_024"],
  "everyday-sneakers": ["asset_040", "asset_041"],
  "cotton-trousers": ["asset_026"],
  "folded-leather-wallet": ["asset_010", "asset_011"],
  "polarized-everyday-sunglasses": ["asset_016", "asset_017"],
  "wool-winter-scarf": ["asset_019"],
  "leather-everyday-belt": ["asset_009"],
  "minimal-wristwatch": ["asset_020", "asset_021"],
  "stonewashed-bath-towels": ["asset_078"],
  "travel-grooming-kit": ["asset_082"],
  "botanical-soap-set": ["asset_090"],
  "quiet-reed-diffuser": ["asset_115"],
  "alignment-yoga-mat": ["asset_076", "asset_077"],
  "recovery-foam-roller": ["asset_068"],
  "everyday-sports-bottle": ["asset_072"],
  "cork-yoga-block": ["asset_075"],
  "linen-gift-box": ["asset_080", "asset_081"],
  "afternoon-tea-set": ["asset_091"],
  "amber-scented-candle": ["asset_088", "asset_089"],
  "pocket-e-reader": ["asset_049"],
  "instant-film-camera": ["asset_050"],
  "walnut-record-turntable": ["asset_057"],
  "woven-entry-doormat": ["asset_105"],
  "entry-coat-hooks": ["asset_102"],
  "brass-taper-holders": ["asset_095"],
  "quiet-wall-clock": ["asset_114"],
  "ceramic-plant-pot": ["asset_096", "asset_097"],
};

const CATEGORY_ASSETS = {
  home: "asset_111",
  kitchen: "asset_142",
  workspace: "asset_146",
  travel: "asset_189",
  outdoor: "asset_175",
  apparel: "asset_024",
  accessories: "asset_016",
  personal: "asset_078",
  "fitness-wellness": "asset_076",
  gifts: "asset_080",
  technology: "asset_049",
};

function loadLibrary() {
  const file = path.join(LIBRARY, "data/products.json");
  const json = JSON.parse(fs.readFileSync(file, "utf8"));
  return Object.fromEntries(json.products.map((p) => [p.id, p]));
}

function copyAsset(asset, destFile) {
  const src = path.join(LIBRARY, asset.path);
  if (!fs.existsSync(src)) {
    throw new Error(`Missing library file: ${src}`);
  }
  fs.copyFileSync(src, destFile);
  return src;
}

export function syncLibraryImages() {
  const byId = loadLibrary();
  fs.mkdirSync(DEST, { recursive: true });
  fs.mkdirSync(path.join(ROOT, "public/categories"), { recursive: true });

  const used = new Set();
  const report = [];

  for (const [slug, ids] of Object.entries(PRODUCT_ASSETS)) {
    ids.forEach((id, index) => {
      const asset = byId[id];
      if (!asset) throw new Error(`Unknown asset ${id} for ${slug}`);
      if (used.has(id) && index === 0) {
        throw new Error(`Primary asset ${id} reused for ${slug}`);
      }
      used.add(id);
      const dest = path.join(DEST, `${slug}-${index + 1}.jpg`);
      copyAsset(asset, dest);
      report.push({
        slug,
        id,
        name: asset.name,
        type: asset.productType,
        dest: path.basename(dest),
      });
    });
  }

  for (const [slug, id] of Object.entries(CATEGORY_ASSETS)) {
    const asset = byId[id];
    if (!asset) throw new Error(`Unknown category asset ${id}`);
    const dest = path.join(ROOT, "public/categories", `${slug}.jpg`);
    copyAsset(asset, dest);
  }

  return { report, used: used.size };
}

const isMain = process.argv[1] === fileURLToPath(import.meta.url);
if (isMain) {
  const { report, used } = syncLibraryImages();
  console.log(`Copied ${report.length} product images from ${used} unique assets.`);
  report.forEach((row) => {
    console.log(`${row.slug} <- ${row.id} ${row.name} (${row.type}) -> ${row.dest}`);
  });
}
