import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// 👇 ESM-compatible __dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

// Paths
const basePath = join(__dirname, "../public/assets");
const folders = ["gifs", "stills"];

const allPaths = folders.flatMap((folder) => {
  const dir = join(basePath, folder);
  return fs.readdirSync(dir)
    .filter(file => /\.(gif|png|jpe?g)$/i.test(file))
    .map(file => `/assets/${folder}/${file}`);
});

fs.writeFileSync(
  join(__dirname, "../src/assetList.json"),
  JSON.stringify(allPaths, null, 2)
);

console.log(`✅ assetList.json created with ${allPaths.length} files`);