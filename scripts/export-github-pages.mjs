import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "docs");
const response = await fetch("http://localhost:3000/");

if (!response.ok) {
  throw new Error(`Could not render the homepage: ${response.status}`);
}

const css = (await readFile(path.join(root, "app/globals.css"), "utf8"))
  .replace(/^@import\s+["']tailwindcss["'];?\s*/m, "");
const cssVersion = createHash("sha256").update(css).digest("hex").slice(0, 10);

let html = await response.text();
html = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
  .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
  .replace(/<link rel="stylesheet" href="\/app\/globals\.css"[^>]*>/i, `<link rel="stylesheet" href="./style.css?v=${cssVersion}">`)
  .replace(/\sdata-rsc-css-href="[^"]*"/g, "")
  .replace(/\sdata-precedence="[^"]*"/g, "")
  .replace(/(src|srcset|href)="\/(?!\/|#)/gi, '$1="./')
  .replace("</body>", '<script src="./carousel.js" defer></script></body>');

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, "public"), output, { recursive: true });
await writeFile(path.join(output, "index.html"), html);
await writeFile(path.join(output, "style.css"), css);
await writeFile(path.join(output, ".nojekyll"), "");

console.log(`GitHub Pages export written to ${output}`);
