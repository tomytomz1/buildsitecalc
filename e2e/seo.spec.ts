import { test, expect } from "@playwright/test";

test.describe("SEO metadata", () => {
  test("home has canonical and hreflang alternates", async ({ page }) => {
    await page.goto("/en");
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute("href", /buildsitecalc\.com\/en$/);

    await expect(page.locator('link[hreflang="en-US"]')).toHaveAttribute(
      "href",
      /buildsitecalc\.com\/en$/,
    );
    await expect(page.locator('link[hreflang="es-ES"]')).toHaveAttribute(
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
    await expect(page.locator('link[hreflang="en-US"]')).toHaveAttribute(
      "href",
      /buildsitecalc\.com\/en\/calculators\/concrete-slab$/,
    );
    await expect(page.locator('link[hreflang="es-ES"]')).toHaveAttribute(
      "href",
      /buildsitecalc\.com\/es\/calculators\/losa-de-concreto$/,
    );
    await expect(page.locator('link[hreflang="x-default"]')).toHaveAttribute(
      "href",
      /buildsitecalc\.com\/en\/calculators\/concrete-slab$/,
    );
  });
});
