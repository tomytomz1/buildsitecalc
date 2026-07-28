const { chromium, devices } = require("@playwright/test");
const fs = require("fs");
const path = require("path");

const BASE = process.env.BASE_URL || "http://127.0.0.1:3000";
const OUT = path.join("audit", "screenshots");
fs.mkdirSync(OUT, { recursive: true });

const viewports = [
  { name: "mobile", width: 375, height: 812 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

const pages = [
  { key: "en-home", path: "/en" },
  { key: "es-home", path: "/es" },
  { key: "directory", path: "/en/calculators" },
  { key: "category", path: "/en/categories/concrete-masonry" },
  { key: "concrete-slab", path: "/en/calculators/concrete-slab" },
  { key: "paint", path: "/en/calculators/paint" },
  { key: "roofing", path: "/en/calculators/roofing-shingle" },
  { key: "stair", path: "/en/calculators/stair" },
  { key: "hvac-btu", path: "/en/calculators/hvac-btu" },
  { key: "material-cost", path: "/en/calculators/material-cost" },
  { key: "project-budget", path: "/en/calculators/project-budget" },
  { key: "privacy", path: "/en/privacy" },
  { key: "404", path: "/en/this-page-does-not-exist-404" },
];

(async () => {
  const browser = await chromium.launch();
  const issues = [];
  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await context.newPage();
    page.on("pageerror", (err) => issues.push({ type: "pageerror", message: err.message, vp: vp.name }));
    page.on("console", (msg) => {
      if (msg.type() === "error") issues.push({ type: "console", message: msg.text(), vp: vp.name });
    });
    for (const p of pages) {
      const res = await page.goto(BASE + p.path, { waitUntil: "networkidle", timeout: 60000 });
      await page.waitForTimeout(400);
      const file = path.join(OUT, `${p.key}-${vp.name}.png`);
      await page.screenshot({ path: file, fullPage: true });
      const bodyText = await page.locator("body").innerText();
      if (!bodyText || bodyText.trim().length < 20) {
        issues.push({ type: "blank", page: p.key, vp: vp.name });
      }
      if (bodyText.includes("BuildSite Calc") || /ProjectCalc Hub/i.test(bodyText)) {
        issues.push({ type: "brand", page: p.key, vp: vp.name });
      }
      console.log("shot", p.key, vp.name, res && res.status());
    }
    await context.close();
  }
  await browser.close();
  fs.writeFileSync(path.join("audit", "visual-qa.json"), JSON.stringify({ issues, count: viewports.length * pages.length }, null, 2));
  console.log(JSON.stringify({ screenshots: viewports.length * pages.length, issues }, null, 2));
})();