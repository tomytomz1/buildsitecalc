const fs = require("fs");
const path = require("path");

const BASE = process.env.BASE_URL || "http://127.0.0.1:3000";
const STATIC = [
  "about",
  "methodology",
  "glossary",
  "contact",
  "privacy",
  "terms",
  "disclaimer",
  "accessibility",
  "cookies",
];
const CAT_EN = [
  "concrete-masonry",
  "painting-walls",
  "flooring-tile",
  "roofing",
  "landscaping",
  "fencing-decking",
  "measurements",
  "heating-insulation",
  "moving-cleanup",
  "project-costs",
];
const CAT_ES = [
  "concreto-y-mamposteria",
  "pintura-y-paredes",
  "pisos-y-azulejos",
  "techos",
  "jardineria",
  "cercas-y-decks",
  "mediciones",
  "calefaccion-y-aislamiento",
  "mudanza-y-limpieza",
  "costos-de-proyecto",
];
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

function routesFor(locale, cats, calcs) {
  const r = [`/${locale}`, `/${locale}/calculators`];
  for (const s of STATIC) r.push(`/${locale}/${s}`);
  for (const c of cats) r.push(`/${locale}/categories/${c}`);
  for (const c of calcs) r.push(`/${locale}/calculators/${c}`);
  return r;
}

const routes = [
  "/",
  "/robots.txt",
  "/sitemap.xml",
  "/ads.txt",
  "/en/this-page-does-not-exist-404",
  ...routesFor("en", CAT_EN, CALC_EN),
  ...routesFor("es", CAT_ES, CALC_ES),
];

async function check(route) {
  const url = BASE + route;
  const started = Date.now();
  try {
    const res = await fetch(url, { redirect: "manual" });
    const text = await res.text();
    const loc = res.headers.get("location");
    const issues = [];
    if (route === "/") {
      if (![301, 302, 307, 308].includes(res.status)) issues.push("root should redirect");
      if (!loc || !loc.includes("/en")) issues.push("root redirect not to /en");
    } else if (route.includes("does-not-exist")) {
      if (res.status !== 404) issues.push(`expected 404 got ${res.status}`);
    } else if (
      route === "/robots.txt" ||
      route === "/sitemap.xml" ||
      route === "/ads.txt"
    ) {
      if (res.status !== 200) issues.push(`status ${res.status}`);
      if (route === "/sitemap.xml" && text.includes("projectcalchub"))
        issues.push("old brand in sitemap");
      if (route === "/sitemap.xml" && !text.includes("buildsitecalc.com"))
        issues.push("missing domain in sitemap");
      if (route === "/ads.txt" && /pub-0000000000000000/.test(text))
        issues.push("placeholder ads publisher");
    } else {
      if (res.status !== 200) issues.push(`status ${res.status}`);
      if (!text || text.trim().length < 50) issues.push("blank/thin body");
      if (
        /ProjectCalc|projectcalchub|Build Site Calc|BuildSite Calc/i.test(text) &&
        !/BuildSiteCalc/.test(text)
      ) {
        // allow BuildSiteCalc
      }
      if (/ProjectCalc Hub|projectcalchub\.com|Build Site Calc/i.test(text))
        issues.push("old brand string");
      if (/BuildSite Calc/.test(text)) issues.push("spaced brand BuildSite Calc");
      if (/Something went wrong|Application error|Hydration failed/i.test(text))
        issues.push("error text");
      if (route.startsWith("/es/") || route === "/es") {
        if (
          !/lang=["']es|hreflang=["']es|lang=es/i.test(text) &&
          !text.includes("es_ES") &&
          !text.includes('lang="es"')
        ) {
          // soft check
        }
      }
      if (route.includes("/calculators/") && !route.endsWith("/calculators")) {
        if (
          !/application\/ld\+json/i.test(text) &&
          !text.includes("FAQPage") &&
          !text.includes("WebApplication")
        ) {
          issues.push("missing structured data hint");
        }
      }
    }
    return {
      route,
      status: res.status,
      location: loc,
      ms: Date.now() - started,
      ok: issues.length === 0,
      issues,
      bytes: text.length,
    };
  } catch (e) {
    return {
      route,
      status: 0,
      ms: Date.now() - started,
      ok: false,
      issues: [String(e.message || e)],
      bytes: 0,
    };
  }
}

(async () => {
  const results = [];
  for (const route of routes) {
    results.push(await check(route));
  }
  const summary = {
    base: BASE,
    total: results.length,
    ok: results.filter((r) => r.ok).length,
    failed: results.filter((r) => !r.ok).length,
    enPages: results.filter((r) => r.route === "/en" || r.route.startsWith("/en/"))
      .length,
    esPages: results.filter((r) => r.route === "/es" || r.route.startsWith("/es/"))
      .length,
    generatedAt: new Date().toISOString(),
    failures: results.filter((r) => !r.ok),
    results,
  };
  fs.mkdirSync("audit", { recursive: true });
  fs.writeFileSync("audit/route-audit.json", JSON.stringify(summary, null, 2));
  console.log(
    JSON.stringify(
      {
        total: summary.total,
        ok: summary.ok,
        failed: summary.failed,
        enPages: summary.enPages,
        esPages: summary.esPages,
        failures: summary.failures.map((f) => ({
          route: f.route,
          status: f.status,
          issues: f.issues,
        })),
      },
      null,
      2,
    ),
  );
})();
