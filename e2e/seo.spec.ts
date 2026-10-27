import { test, expect } from "@playwright/test";

test.describe("SEO metadata", () => {

  test("server HTML declares Spanish on the original response, without hydration", async ({ request }) => {
    for (const route of [
      "/es/calculators/pies-cuadrados",
      "/es/calculators/pisos",
      "/es/calculators/tejas-asfalticas",
      "/es/calculators/pintura",
    ]) {
      const response = await request.get(route);
      expect(response.status(), route).toBe(200);
      const html = await response.text();
      expect(html).toMatch(/<html\\b[^>]*lang="es"/);
    }
  });

  test("English calculator and Spanish embed HTML declare the correct language", async ({ request }) => {
    const english = await request.get("/en/calculators/square-footage");
    expect(english.status()).toBe(200);
    expect(await english.text()).toMatch(/<html\\b[^>]*lang="en"/);

    const spanishEmbed = await request.get("/embed/es/pies-cuadrados");
    expect(spanishEmbed.status()).toBe(200);
    expect(await spanishEmbed.text()).toMatch(/<html\\b[^>]*lang="es"/);
    expect(await (await request.get("/sitemap.xml")).text()).toContain("sitemap");
  });
  test("home has canonical and hreflang alternates", async ({ page }) => {
    await page.goto("/en");
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute("href", /buildsitecalc\.com\/en$/);

    await expect(page.locator('link[hreflang="en"]')).toHaveAttribute(
      "href",
      /buildsitecalc\.com\/en$/,
    );
    await expect(page.locator('link[hreflang="es"]')).toHaveAttribute(
      "href",
      /buildsitecalc\.com\/es$/,
    );
    await expect(page.locator('link[hreflang="x-default"]')).toHaveAttribute(
      "href",
      /buildsitecalc\.com\/en$/,
    );
  });

  test("calculator page has canonical and hreflang", async ({ page }) => {
    await page.goto("/en/calculators/concrete-slab");
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute(
      "href",
      /buildsitecalc\.com\/en\/calculators\/concrete-slab$/,
    );
    await expect(page.locator('link[hreflang="en"]')).toHaveAttribute(
      "href",
      /buildsitecalc\.com\/en\/calculators\/concrete-slab$/,
    );
    await expect(page.locator('link[hreflang="es"]')).toHaveAttribute(
      "href",
      /buildsitecalc\.com\/es\/calculators\/losa-de-concreto$/,
    );
    await expect(page.locator('link[hreflang="x-default"]')).toHaveAttribute(
      "href",
      /buildsitecalc\.com\/en\/calculators\/concrete-slab$/,
    );
  });

  // Region-qualified hreflang only matches searchers in that region, which
  // would exclude the Latin American Spanish and non-US English audiences that
  // make up most of this site's traffic.
  test("hreflang is language-only, never region-qualified", async ({ page }) => {
    await page.goto("/en/calculators/paint");
    await expect(page.locator('link[hreflang="en-US"]')).toHaveCount(0);
    await expect(page.locator('link[hreflang="es-ES"]')).toHaveCount(0);
  });

  test("locale redirects are permanent", async ({ request }) => {
    const root = await request.get("/", { maxRedirects: 0 });
    expect(root.status()).toBe(308);

    const unprefixed = await request.get("/calculators/paint", { maxRedirects: 0 });
    expect(unprefixed.status()).toBe(308);
  });

  test("sitemap lastmod is content-derived, not build-time", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.status()).toBe(200);
    const xml = await response.text();

    const lastmods = [...xml.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map((m) => m[1]);
    expect(lastmods.length).toBeGreaterThan(0);

    // Build-time dates would all be identical and would carry a wall-clock
    // time; content dates are per-page and land on UTC midnight.
    expect(new Set(lastmods).size).toBeGreaterThan(1);
    for (const value of lastmods) {
      expect(value).toMatch(/T00:00:00/);
    }
  });

  test("sitemap advertises language-only hreflang", async ({ request }) => {
    const xml = await (await request.get("/sitemap.xml")).text();
    expect(xml).toContain('hreflang="en"');
    expect(xml).toContain('hreflang="es"');
    expect(xml).not.toContain('hreflang="en-US"');
    expect(xml).not.toContain('hreflang="es-ES"');
  });
});
