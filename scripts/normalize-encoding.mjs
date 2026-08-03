/**
 * Rewrites any UTF-16 source file as UTF-8.
 * Run: node scripts/normalize-encoding.mjs [path ...]
 *
 * With no arguments it sweeps the tracked source and docs trees. Explicit paths
 * may be files or directories, including paths outside the repo.
 *
 * Some Windows editors save files containing non-ASCII characters as UTF-16LE
 * with no BOM. Node, tsc and vitest all read source as UTF-8, so such a file
 * fails to parse with a misleading "Invalid or unexpected token" on line 1.
 * Accented Spanish copy makes this a recurring hazard here.
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "fs";
import { extname, join, dirname, isAbsolute, relative } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const ROOTS = ["src", "scripts", "e2e", "docs"];
const EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".mjs",
  ".cjs",
  ".js",
  ".json",
  ".css",
  ".md",
]);

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* walk(full);
    else if (EXTENSIONS.has(extname(name))) yield full;
  }
}

/** UTF-16LE text is recognisable by the zero byte after each ASCII character. */
function isUtf16le(buffer) {
  if (buffer.length < 4) return false;
  if (buffer[0] === 0xff && buffer[1] === 0xfe) return true;
  return buffer[1] === 0 && buffer[3] === 0;
}

function* targets(paths) {
  if (paths.length === 0) {
    for (const dir of ROOTS) yield* walk(join(root, dir));
    return;
  }
  for (const path of paths) {
    const full = isAbsolute(path) ? path : join(process.cwd(), path);
    if (statSync(full).isDirectory()) yield* walk(full);
    else yield full;
  }
}

let converted = 0;

for (const file of targets(process.argv.slice(2))) {
  const buffer = readFileSync(file);
  if (!isUtf16le(buffer)) continue;
  const text = buffer.toString("utf16le").replace(/^\uFEFF/, "");
  writeFileSync(file, text, "utf8");
  const label = relative(root, file);
  console.log(`converted ${label.startsWith("..") ? file : label}`);
  converted++;
}

console.log(converted === 0 ? "All files are UTF-8." : `Converted ${converted} file(s).`);
