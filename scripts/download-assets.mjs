// Usage: npm run assets
// Downloads every image in src/assets.js to public/assets and rewrites
// src/assets.js to point at the local copies (so they never expire).
import fs from "node:fs/promises";
import { A } from "../src/assets.js";

await fs.mkdir("public/assets", { recursive: true });
const local = {};
for (const [key, url] of Object.entries(A)) {
  if (!url.startsWith("http")) { local[key] = url; continue; }
  const ext = url.split(".").pop().split("?")[0];
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${key}: ${res.status} (URL expired? re-export from Figma)`);
  await fs.writeFile(`public/assets/${key}.${ext}`, Buffer.from(await res.arrayBuffer()));
  local[key] = `/assets/${key}.${ext}`;
  console.log("saved", key);
}
const body = Object.entries(local).map(([k, v]) => `  ${k}: ${JSON.stringify(v)},`).join("\n");
await fs.writeFile("src/assets.js", `export const A = {\n${body}\n};\n`);
console.log("Done. src/assets.js now uses local files.");
