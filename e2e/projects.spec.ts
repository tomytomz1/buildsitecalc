import { test, expect } from "@playwright/test";

const HUBS = [
  { en: "build-a-deck", es: "construir-un-deck" },
  { en: "repaint-a-room", es: "repintar-una-habitacion" },
  { en: "tile-a-bathroom", es: "enchapar-un-bano" },
  { en: "pour-a-concrete-driveway", es: "colar-una-entrada-de-concreto" },
];

test.describe("project workflow hubs", () => {
  test("index lists all four hubs", async ({ page }) => {
    await page.goto("/en/projects");
    await expect(page.locator("h1")).toHaveText("Project workflows");

    for (const hub of HUBS) {
      await expect(
        page.locator(`a[href="/en/projects/${hub.en}"]`).first(),
      ).toBeVisible();
    }
  });

  for (const hub of HUBS) {
    test(`${hub.en} renders in both locales and links 5+ calculators`, async ({
      page,
    }) => {
      for (const [locale, slug] of [
        ["en", hub.en],
        ["es", hub.es],
      ] as const) {
        await page.goto(`/${locale}/projects/${slug}`);
        await expect(page.locator("h1")).toBeVisible();

        // The sequence is the substance of the page, so the ordered list must
        // survive to the rendered HTML with every step resolved to a real link.
        const steps = page.locator(`ol li a[href^="/${locale}/calculators/"]`);
        expect(await steps.count()).toBeGreaterThanOrEqual(5);
      }
    });

    test(`${hub.en} pairs hreflang with the translated slug`, async ({ page }) => {
      await page.goto(`/en/projects/${hub.en}`);

      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        new RegExp(`buildsitecalc\\.com/en/projects/${hub.en}$`),
      );
      await expect(page.locator('link[hreflang="es"]')).toHaveAttribute(
        "href",
        new RegExp(`buildsitecalc\\.com/es/projects/${hub.es}$`),
      );
      await expect(page.locator('link[hreflang="en-US"]')).toHaveCount(0);
      await expect(page.locator('link[hreflang="es-ES"]')).toHaveCount(0);
    });
  }

  test("hub emits HowTo structured data with ordered steps", async ({ page }) => {
    await page.goto("/en/projects/build-a-deck");

    const blocks = await page
      .locator('script[type="application/ld+json"]')
      .allTextContents();
    const graphs = blocks.flatMap((block) => {
      const parsed = JSON.parse(block);
      return Array.isArray(parsed) ? parsed : [parsed];
    });

    const howTo = graphs.find((node) => node["@type"] === "HowTo");
    expect(howTo).toBeTruthy();
    expect(howTo.step.length).toBeGreaterThanOrEqual(5);
    expect(howTo.step.map((step: { position: number }) => step.position)).toEqual(
      howTo.step.map((_: unknown, index: number) => index + 1),
    );
    expect(graphs.some((node) => node["@type"] === "ItemList")).toBe(true);
  });

  test("language switcher maps hub slugs across locales", async ({ page }) => {
    await page.goto("/en/projects/tile-a-bathroom");
    await expect(
      page.locator('a[href="/es/projects/enchapar-un-bano"]').first(),
    ).toBeAttached();
  });

  test("calculator pages link back to the hubs that use them", async ({ page }) => {
    await page.goto("/en/calculators/paint");
    await expect(
      page.locator('a[href="/en/projects/repaint-a-room"]').first(),
    ).toBeVisible();
  });
});
