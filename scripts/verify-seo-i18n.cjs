/**
 * Permanent SEO / i18n / OG / SSR verification against a running server.
 *
 * Usage:
 *   BASE_URL=http://127.0.0.1:3000 npm run verify:seo-i18n
 *   BASE_URL=https://buildsitecalc.com npm run verify:seo-i18n
 *
 * Exit code 1 on any failure. Point BASE_URL at a production build (`next start`)
 * or the live site — not required for unit tests.
 */
const BASE_URL = (process.env.BASE_URL || "http://127.0.0.1:3000").replace(/\/$/, "");

const CALC_EN = [
  "concrete-slab",
  "concrete-bags",
  "paint",
  "flooring",
  "tile",
  "drywall",
  "roofing-shingle",
  "mulch",
  "gravel",
  "topsoil",
  "fence-material",
  "deck-board",
  "stair",
  "wallpaper",
  "insulation",
  "hvac-btu",
  "moving-truck-size",
  "dumpster-size",
  "project-waste-factor",
  "board-foot",
  "square-footage",
  "room-volume",
  "labor-markup",
  "material-cost",
  "project-budget",
];
const CALC_ES = [
  "losa-de-concreto",
  "bolsas-de-concreto",
  "pintura",
  "pisos",
  "azulejos",
  "tablaroca",
  "tejas-asfalticas",
  "mantillo",
  "grava",
  "tierra-vegetal",
  "materiales-de-cerca",
  "tablas-de-deck",
  "escaleras",
  "papel-tapiz",
  "aislamiento",
  "btu-hvac",
  "tamano-camion-mudanza",
  "tamano-contenedor",
  "factor-de-desperdicio",
  "pie-tablero",
  "pies-cuadrados",
  "volumen-habitacion",
  "margen-mano-obra",
  "costo-materiales",
  "presupuesto-proyecto",
];

const KNOWN_CAMEL = [
  "densityLoose",
  "densityCompacted",
  "densityCrushed",
  "garageCleanout",
  "kitchenRemodel",
  "deckRemoval",
  "bathroomRemodel",
  "roofingShingles",
  "wholeHouseCleanout",
  "modeMarkup",
  "modeMargin",
];

/**
 * Visible English unit phrases that must not appear on Spanish calculator pages.
 * Intentionally full phrases (not bare abbreviations like ft² / ft / in) so Spanish
 * labels such as "Pies cuadrados (ft²)" are allowed.
 */
const EN_UNIT_PHRASES = [
  "Square feet",
  "Square yards",
  "Square meters",
  "Square inches",
  "Cubic feet",
  "Cubic yards",
  "Cubic meters",
  "Feet (ft)",
  "Inches (in)",
  "Yards (yd)",
  "Meters (m)",
  "Centimeters (cm)",
  "Millimeters (mm)",
  "Gallons (gal)",
  "Liters (L)",
  "Pounds (lb)",
  "Kilograms (kg)",
  "US tons",
  "Metric tonnes",
];

/** Spanish calculators that expose unit dropdowns (skip cost-only forms). */
const ES_UNIT_DROPDOWN_SLUGS = [
  "losa-de-concreto",
  "bolsas-de-concreto",
  "pintura",
  "pisos",
  "azulejos",
  "tablaroca",
  "tejas-asfalticas",
  "mantillo",
  "grava",
  "tierra-vegetal",
  "materiales-de-cerca",
  "tablas-de-deck",
  "escaleras",
  "papel-tapiz",
  "aislamiento",
  "pie-tablero",
  "pies-cuadrados",
  "volumen-habitacion",
];

async function fetchText(path) {
  const res = await fetch(BASE_URL + path, {
    redirect: "follow",
    headers: { "user-agent": "BuildSiteCalc-verify/1.0" },
  });
  const text = await res.text();
  return { res, text, status: res.status };
}

/** Visible page text only: drop scripts/styles/tags. Option value attrs are ignored. */
function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ");
}

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return m ? m[1] : "";
}

function extractAlts(html) {
  const out = [];
  const re = /<link[^>]*>/gi;
  let m;
  while ((m = re.exec(html))) {
    const tag = m[0];
    if (/rel=["']alternate["']/i.test(tag) || /hreflang=/i.test(tag)) {
      out.push(tag);
    }
  }
  return out;
}

function getAttr(tag, name) {
  const dq = tag.match(new RegExp(name + '="([^"]+)"', "i"));
  if (dq) return dq[1];
  const sq = tag.match(new RegExp(name + "='([^']+)'", "i"));
  return sq ? sq[1] : "";
}

function findEnglishUnitLeaks(vis) {
  return EN_UNIT_PHRASES.filter((phrase) => vis.includes(phrase));
}

(async () => {
  console.log("verify-seo-i18n against " + BASE_URL);
  const results = [];
  const fail = (name, detail) => {
    results.push({ ok: false });
    console.log("FAIL  " + name + " - " + detail);
  };
  const pass = (name, detail) => {
    results.push({ ok: true });
    console.log("PASS  " + name + (detail ? " - " + detail : ""));
  };

  // Language switcher: calculator + category (localized slugs)
  {
    const { text, status } = await fetchText("/en/calculators/concrete-slab");
    status === 200
      ? pass("concrete-slab EN 200")
      : fail("concrete-slab EN 200", "status=" + status);
    text.includes("/es/calculators/losa-de-concreto")
      ? pass("EN->ES switcher uses localized slug")
      : fail("EN->ES switcher", "missing losa-de-concreto");
    text.includes('href="/es/calculators/concrete-slab"')
      ? fail("EN->ES no English slug under /es", "found bad href")
      : pass("EN->ES does not link English slug under /es");

    const vis = visibleText(text);
    /1\.36/.test(vis)
      ? pass("SSR default results visible", "contains 1.36")
      : fail("SSR default results visible", "missing 1.36 in visible text");
    /Enter values and calculate to see results/i.test(vis)
      ? fail("SSR no empty placeholder", "English emptyResults still visible")
      : pass("SSR no empty placeholder");
  }

  {
    const { text, status } = await fetchText("/es/calculators/losa-de-concreto");
    status === 200
      ? pass("losa-de-concreto ES 200")
      : fail("losa ES 200", "status=" + status);
    text.includes("/en/calculators/concrete-slab")
      ? pass("ES->EN switcher uses localized slug")
      : fail("ES->EN switcher", "missing concrete-slab");
  }

  {
    const { text } = await fetchText("/en/categories/landscaping");
    text.includes("/es/categories/jardineria")
      ? pass("category EN->ES landscaping->jardineria")
      : fail("category EN->ES", "missing jardineria");
  }
  {
    const { text } = await fetchText("/es/categories/jardineria");
    text.includes("/en/categories/landscaping")
      ? pass("category ES->EN jardineria->landscaping")
      : fail("category ES->EN", "missing landscaping");
  }

  // Title, hreflang, og/twitter images
  {
    const { text } = await fetchText("/en/calculators/paint");
    const title = extractTitle(text);
    const count = (title.match(/BuildSiteCalc/g) || []).length;
    count === 1
      ? pass("title has BuildSiteCalc once", title)
      : fail("title BuildSiteCalc count", "count=" + count + " " + title);

    const hrefLangs = {};
    for (const tag of extractAlts(text)) {
      const hl = getAttr(tag, "hreflang");
      const href = getAttr(tag, "href");
      if (hl) hrefLangs[hl] = href;
    }
    for (const key of ["en-US", "es-ES", "x-default"]) {
      hrefLangs[key]
        ? pass("hreflang " + key, hrefLangs[key])
        : fail("hreflang " + key, "missing");
    }
    for (const [hl, href] of Object.entries(hrefLangs)) {
      const path = new URL(href).pathname;
      const { status } = await fetchText(path);
      status === 200
        ? pass("hreflang " + hl + " URL 200", path)
        : fail("hreflang " + hl + " URL", "status=" + status);
    }
    /og:image/i.test(text) ? pass("og:image present") : fail("og:image", "missing");
    /twitter:image/i.test(text)
      ? pass("twitter:image present")
      : fail("twitter:image", "missing");
  }

  for (const path of ["/en/categories", "/es/categories"]) {
    const { status } = await fetchText(path);
    status === 200 ? pass(path + " 200") : fail(path, "status=" + status);
  }

  // Dropdown labels (visible text only — value attrs OK)
  {
    const { text } = await fetchText("/en/calculators/gravel");
    const vis = visibleText(text);
    const leaks = ["densityLoose", "densityCompacted", "densityCrushed"].filter((k) =>
      vis.includes(k),
    );
    leaks.length
      ? fail("gravel EN labels", "visible raw keys: " + leaks.join(", "))
      : pass("gravel EN density labels human");
  }
  {
    const { text } = await fetchText("/es/calculators/grava");
    const vis = visibleText(text);
    const leaks = ["densityLoose", "densityCompacted", "densityCrushed"].filter((k) =>
      vis.includes(k),
    );
    leaks.length
      ? fail("grava ES labels", "visible raw keys: " + leaks.join(", "))
      : pass("grava ES no raw densityLoose");
    /Enter values and calculate to see results/i.test(vis)
      ? fail("grava ES emptyResults", "English empty string leaked")
      : pass("grava ES emptyResults not English");
  }

  {
    const { text } = await fetchText("/en/calculators/dumpster-size");
    const vis = visibleText(text);
    const leaks = ["garageCleanout", "kitchenRemodel", "deckRemoval"].filter((k) =>
      vis.includes(k),
    );
    leaks.length
      ? fail("dumpster EN labels", "visible raw keys: " + leaks.join(", "))
      : pass("dumpster EN project labels human");
  }

  // Spanish unit dropdowns: no visible English unit phrases
  {
    const unitLeaks = [];
    for (const slug of ES_UNIT_DROPDOWN_SLUGS) {
      const path = "/es/calculators/" + slug;
      const { text, status } = await fetchText(path);
      if (status !== 200) {
        fail("ES unit page " + slug, "status=" + status);
        continue;
      }
      const vis = visibleText(text);
      const hits = findEnglishUnitLeaks(vis);
      for (const phrase of hits) {
        unitLeaks.push(path + ': "' + phrase + '"');
      }
    }
    if (unitLeaks.length === 0) {
      pass(
        "ES unit labels localized",
        ES_UNIT_DROPDOWN_SLUGS.length + " calculator pages",
      );
    } else {
      fail("ES unit labels localized", unitLeaks.length + " English phrase hits");
      for (const l of unitLeaks.slice(0, 20)) console.log("  LEAK  " + l);
      if (unitLeaks.length > 20) {
        console.log("  ... and " + (unitLeaks.length - 20) + " more");
      }
    }
  }

  {
    const { text, status } = await fetchText("/sitemap.xml");
    status === 200 ? pass("sitemap.xml 200") : fail("sitemap.xml", "status=" + status);
    /xhtml:link/i.test(text)
      ? pass("sitemap xhtml:link alternates")
      : fail("sitemap xhtml:link", "missing");
    /\/en\/categories/.test(text)
      ? pass("sitemap includes /en/categories")
      : fail("sitemap /en/categories", "missing");
  }
  {
    const { text } = await fetchText("/robots.txt");
    /^Host:/im.test(text)
      ? fail("robots.txt Host", "Host line still present")
      : pass("robots.txt no Host line");
  }

  {
    const res = await fetch(BASE_URL + "/api/og?title=Test&locale=en");
    const ct = res.headers.get("content-type") || "";
    const buf = Buffer.from(await res.arrayBuffer());
    const isPng = buf.length > 8 && buf[0] === 0x89 && buf[1] === 0x50;
    res.status === 200 && /image\/png/i.test(ct) && isPng
      ? pass("OG route PNG", "bytes=" + buf.length)
      : fail("OG route PNG", "status=" + res.status + " ct=" + ct + " png=" + isPng);
  }

  // All 25 calculators x 2 locales — visible camelCase keys only
  const leaksFound = [];
  for (let i = 0; i < CALC_EN.length; i++) {
    for (const [locale, slug] of [
      ["en", CALC_EN[i]],
      ["es", CALC_ES[i]],
    ]) {
      const path = "/" + locale + "/calculators/" + slug;
      const { text } = await fetchText(path);
      const vis = visibleText(text);
      for (const key of KNOWN_CAMEL) {
        if (vis.includes(key)) leaksFound.push(path + ": " + key);
      }
    }
  }
  if (leaksFound.length === 0) pass("camelCase leak scan", "0 known key leaks");
  else {
    fail("camelCase leak scan", leaksFound.length + " hits");
    for (const l of leaksFound) console.log("  LEAK  " + l);
  }

  const failed = results.filter((r) => !r.ok).length;
  console.log(
    "\nSummary: " + (results.length - failed) + "/" + results.length + " passed",
  );
  if (failed) {
    console.error("verify-seo-i18n FAILED (" + failed + " checks). BASE_URL=" + BASE_URL);
    process.exit(1);
  }
  console.log("verify-seo-i18n OK");
})().catch((e) => {
  console.error("verify-seo-i18n error:", e.message || e);
  console.error("Is a server running at BASE_URL=" + BASE_URL + "?");
  process.exit(1);
});
