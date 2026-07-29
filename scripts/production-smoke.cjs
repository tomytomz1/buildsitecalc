/**
 * Production smoke test for BuildSiteCalc.
 * Usage:
 *   node scripts/production-smoke.cjs
 *   BASE_URL=https://buildsitecalc.com node scripts/production-smoke.cjs
 *   BASE_URL=https://your-preview.vercel.app node scripts/production-smoke.cjs
 *
 * Against a local production build:
 *   npm run build && npm run start
 *   BASE_URL=http://127.0.0.1:3000 node scripts/production-smoke.cjs
 */
const BASE = (process.env.BASE_URL || "http://127.0.0.1:3000").replace(/\/$/, "");

const checks = [];

function record(name, ok, detail) {
  checks.push({ name, ok, detail: detail || "" });
  const mark = ok ? "PASS" : "FAIL";
  console.log(`${mark}  ${name}${detail ? ` — ${detail}` : ""}`);
}

async function fetchText(path, opts = {}) {
  const res = await fetch(BASE + path, {
    redirect: opts.redirect || "follow",
    headers: { "user-agent": "BuildSiteCalc-smoke/1.0" },
  });
  const text = await res.text();
  return { res, text, finalUrl: res.url };
}

function assertNoBadBrand(text, label) {
  const bad =
    /ProjectCalc Hub|projectcalchub\.com|Build Site Calc|ProjectCalc(?!ulator)/i.test(
      text,
    );
  record(`${label}: no old branding`, !bad, bad ? "found old brand string" : "");
  record(
    `${label}: no localhost`,
    !/localhost|127\.0\.0\.1/i.test(text),
    /localhost|127\.0\.0\.1/i.test(text) ? "localhost found" : "",
  );
}

function assertCanonical(text, label) {
  const match = text.match(
    /rel=["']canonical["'][^>]*href=["']([^"']+)["']|href=["']([^"']+)["'][^>]*rel=["']canonical["']/i,
  );
  const href = match ? match[1] || match[2] : "";
  const ok =
    Boolean(href) &&
    href.includes("buildsitecalc.com") &&
    !/localhost|127\.0\.0\.1/i.test(href);
  record(`${label}: canonical uses buildsitecalc.com`, ok, href || "missing");
}

(async () => {
  console.log(`Smoke testing ${BASE}\n`);

  // Root redirect
  {
    const res = await fetch(BASE + "/", { redirect: "manual" });
    const loc = res.headers.get("location") || "";
    const ok = [301, 302, 307, 308].includes(res.status) && /\/en\/?$|\/en\b/.test(loc);
    record("GET / redirects to /en", ok, `status=${res.status} loc=${loc}`);
  }

  // /en and /es
  for (const locale of ["en", "es"]) {
    const { res, text } = await fetchText(`/${locale}`);
    record(`GET /${locale}`, res.status === 200, `status=${res.status}`);
    assertNoBadBrand(text, `/${locale}`);
    assertCanonical(text, `/${locale}`);
    if (locale === "en") {
      record("/en contains BuildSiteCalc", /BuildSiteCalc/.test(text), "");
    }
  }

  // Language switch (hreflang / locale links)
  {
    const { text } = await fetchText("/en");
    const hasEs =
      /hreflang=["']es["']/i.test(text) ||
      /href=["'][^"']*\/es["']/i.test(text) ||
      text.includes("/es");
    record("Language switch affordance EN→ES", hasEs, "");
    const { text: esText } = await fetchText("/es");
    const hasEn =
      /hreflang=["']en["']/i.test(esText) ||
      /href=["'][^"']*\/en["']/i.test(esText) ||
      esText.includes("/en");
    record("Language switch affordance ES→EN", hasEn, "");
  }

  // Material calc (paint)
  {
    const { res, text } = await fetchText("/en/calculators/paint");
    record("Material calc /en/calculators/paint", res.status === 200);
    assertNoBadBrand(text, "paint");
    assertCanonical(text, "paint");
    record(
      "paint has calculator UI / structured data",
      /Calculate|coverage|WebApplication|FAQPage/i.test(text),
      "",
    );
  }

  // Measurement calc (stair)
  {
    const { res, text } = await fetchText("/en/calculators/stair");
    record("Measurement calc /en/calculators/stair", res.status === 200);
    assertNoBadBrand(text, "stair");
    assertCanonical(text, "stair");
  }

  // Cost calc (project-budget)
  {
    const { res, text } = await fetchText("/en/calculators/project-budget");
    record("Cost calc /en/calculators/project-budget", res.status === 200);
    assertNoBadBrand(text, "project-budget");
    assertCanonical(text, "project-budget");
  }

  // sitemap
  {
    const { res, text } = await fetchText("/sitemap.xml");
    record("sitemap.xml 200", res.status === 200);
    record("sitemap uses buildsitecalc.com", text.includes("buildsitecalc.com"), "");
    record(
      "sitemap has no localhost / old brand",
      !/localhost|projectcalchub/i.test(text),
      "",
    );
  }

  // robots
  {
    const { res, text } = await fetchText("/robots.txt");
    record("robots.txt 200", res.status === 200);
    record(
      "robots points at sitemap",
      /sitemap:\s*https:\/\/buildsitecalc\.com\/sitemap\.xml/i.test(text),
      text.slice(0, 120),
    );
  }

  // ads.txt safe without publisher ID
  {
    const { res, text } = await fetchText("/ads.txt");
    record("ads.txt 200", res.status === 200);
    record(
      "ads.txt has no placeholder publisher",
      !/pub-0000000000000000/.test(text),
      "",
    );
    // Empty or comment-only is OK when publisher unset
    const hasFakeGoogleLine =
      /google\.com,\s*pub-/i.test(text) && /pub-0000000000000000/.test(text);
    record("ads.txt safe without publisher ID", !hasFakeGoogleLine, "");
  }

  // Soft console-error check via HTML (runtime console needs browser; HTML must not embed error banners)
  {
    const { text } = await fetchText("/en");
    record(
      "no embedded application error banner",
      !/Something went wrong|Application error|Hydration failed/i.test(text),
      "",
    );
  }

  const failed = checks.filter((c) => !c.ok);
  console.log(`\nSummary: ${checks.length - failed.length}/${checks.length} passed`);
  if (failed.length) {
    console.error("Failures:");
    for (const f of failed) {
      console.error(` - ${f.name}${f.detail ? `: ${f.detail}` : ""}`);
    }
    process.exit(1);
  }
  console.log("All smoke checks passed.");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
