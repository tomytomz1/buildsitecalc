/**
 * Notify IndexNow after a successful Vercel production deployment.
 * Key is public by design. Only successful sends advance the sitemap snapshot.
 */
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const SITE = "https://buildsitecalc.com";
const HOST = "buildsitecalc.com";
const KEY = "292f126a14eab46ad83ae0ec1c12a039";
const KEY_URL = `${SITE}/${KEY}.txt`;
const CACHE_FILE = ".indexnow/last-sitemap.json";
const API_URL = "https://api.indexnow.org/indexnow";

export function parseSitemap(xml) {
  const entries = new Map();
  for (const [, block] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = /<loc>([^<]+)<\/loc>/.exec(block)?.[1]?.replace(/&amp;/g, "&");
    const lastmod = /<lastmod>([^<]+)<\/lastmod>/.exec(block)?.[1] ?? "";
    if (!loc) continue;
    const url = new URL(loc);
    if (url.origin !== SITE || !/^\/(en|es)(\/|$)/.test(url.pathname))
      throw new Error(`Unexpected sitemap URL: ${loc}`);
    entries.set(url.href, lastmod);
  }
  if (!entries.size) throw new Error("Empty sitemap; refusing to save snapshot");
  return entries;
}

export function getDifferences(previous, current) {
  if (!previous) return new Set(current.keys()); // one-time initial submission
  const changed = new Set();
  for (const [url, modified] of current)
    if (!previous.has(url) || previous.get(url) !== modified) changed.add(url);
  // Removed pages must also be notified (404/410 on the live website).
  for (const url of previous.keys()) if (!current.has(url)) changed.add(url);
  return changed;
}

export function impactedByFiles(files, urls) {
  const changed = new Set();
  for (const file of files) {
    if (/^(docs\/|e2e\/|\.github\/|README\.md$|BUILD_REPORT\.md$|LAUNCH_AUDIT\.md$|VERCEL_DEPLOYMENT\.md$)/.test(file))
      continue;
    const localized = /^scripts\/i18n-data\/(en|es)-(calculators|pages|workflows)\.mjs$/.exec(file);
    if (localized) {
      const [, locale, kind] = localized;
      const subpath = kind === "calculators" ? "calculators/" : kind === "workflows" ? "projects/" : "";
      for (const url of urls)
        if (new URL(url).pathname.startsWith(`/${locale}/${subpath}`)) changed.add(url);
      continue;
    }
    if (/^scripts\/|^package-lock\.json$|^package\.json$|^\.prettierrc|^\.gitignore$/.test(file)) continue;
    // Shared source code, styles, metadata, and public assets can change all pages.
    if (/^(src\/|public\/|next\.config\.|postcss\.config\.)/.test(file))
      for (const url of urls) changed.add(url);
  }
  return changed;
}

async function fetchText(url) {
  const res = await fetch(url, { signal: AbortSignal.timeout(20000), cache: "no-store" });
  if (!res.ok) throw new Error(`GET ${url} returned HTTP ${res.status}`);
  return res.text();
}

async function waitForKey() {
  for (let attempt = 1; attempt <= 12; attempt++) {
    try {
      if ((await fetchText(KEY_URL)).trim() === KEY) return;
    } catch (err) {
      console.log(`Key check attempt ${attempt}/12: ${err.message}`);
    }
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
  throw new Error(`IndexNow verification file not live at ${KEY_URL}`);
}

function changedFilesFromGit() {
  try {
    return execFileSync("git", ["diff", "--name-only", "HEAD^", "HEAD"], { encoding: "utf8" })
      .split("\n").filter(Boolean);
  } catch (err) {
    console.warn("File-level diff unavailable:", err.message);
    return [];
  }
}

async function submitBatch(urlList) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_URL, urlList }),
      signal: AbortSignal.timeout(30000),
    });
    const body = (await response.text()).slice(0, 300);
    if ([200, 202].includes(response.status)) {
      console.log(`IndexNow accepted ${urlList.length} URLs (HTTP ${response.status})`);
      return;
    }
    if ((response.status === 429 || response.status >= 500) && attempt < 3) {
      await new Promise(resolve => setTimeout(resolve, attempt * 3000));
      continue;
    }
    throw new Error(`IndexNow rejected request: HTTP ${response.status} ${body}`);
  }
}

export async function main() {
  await waitForKey();
  const current = parseSitemap(await fetchText(`${SITE}/sitemap.xml`));
  let previous = null;
  try {
    const snapshot = JSON.parse(await readFile(CACHE_FILE, "utf8"));
    if (snapshot.site !== SITE || typeof snapshot.entries !== "object") throw new Error("Bad snapshot");
    previous = new Map(Object.entries(snapshot.entries));
  } catch (err) {
    if (err.code !== "ENOENT") console.warn("Previous sitemap unavailable:", err.message);
  }
  const knownUrls = new Set([...current.keys(), ...(previous?.keys() ?? [])]);
  const changed = getDifferences(previous, current);
  if (previous)
    for (const url of impactedByFiles(changedFilesFromGit(), knownUrls)) changed.add(url);
  console.log(`Current sitemap: ${current.size} URLs; previous: ${previous?.size ?? "none"}; notifying: ${changed.size}`);
  const urls = [...changed].sort();
  for (let i = 0; i < urls.length; i += 10000)
    await submitBatch(urls.slice(i, i + 10000));
  await mkdir(path.dirname(CACHE_FILE), { recursive: true });
  await writeFile(CACHE_FILE, JSON.stringify({
    site: SITE, entries: Object.fromEntries(current), updatedAt: new Date().toISOString()
  }, null, 2) + "\n");
  console.log("IndexNow run completed successfully");
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url))
  main().catch(err => { console.error(err); process.exitCode = 1; });
