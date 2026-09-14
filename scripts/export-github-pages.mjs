import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "docs");
const origin = process.env.PAGES_RENDER_ORIGIN || "http://localhost:3000";

const css = `${await readFile(path.join(root, "app/globals.css"), "utf8")}\n${await readFile(path.join(root, "app/tarifs/tarifs.css"), "utf8")}\n${await readFile(path.join(root, "app/user/user.css"), "utf8")}`
  .replace(/^@import\s+["']tailwindcss["'];?\s*/m, "");
const cssVersion = createHash("sha256").update(css).digest("hex").slice(0, 10);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, "public"), output, { recursive: true });
await writeFile(path.join(output, "style.css"), css);
await writeFile(path.join(output, ".nojekyll"), "");

for (const route of ["/", "/tarifs", "/user"]) {
  const response = await fetch(`${origin}${route}`);
  if (!response.ok) throw new Error(`Could not render ${route}: ${response.status}`);
  const nested = route !== "/";
  const prefix = nested ? "../" : "./";
  let html = await response.text();
  html = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*>/gi, "")
    .replace(/<link\b[^>]*rel=["']stylesheet["'][^>]*href=["']\/app\/[^"']+\.css["'][^>]*>/gi, "")
    .replace(/\sdata-rsc-css-href="[^"]*"/g, "")
    .replace(/\sdata-precedence="[^"]*"/g, "")
    .replace(/(src|srcset|href)="\/(?!\/|#)/gi, `$1="${prefix}`)
    .replace("</head>", `<link rel="stylesheet" href="${prefix}style.css?v=${cssVersion}"></head>`);
  if (!nested) html = html.replace("</body>", '<script src="./metrika.js" defer></script><script src="./carousel.js" defer></script></body>');
  const destination = nested ? path.join(output, route.slice(1)) : output;
  await mkdir(destination, { recursive: true });
  await writeFile(path.join(destination, "index.html"), html);
}

console.log(`GitHub Pages export written to ${output}`);
