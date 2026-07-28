import { test, expect } from "@playwright/test";

test.describe("SEO metadata", () => {
  test("home has canonical and hreflang alternates", async ({ page }) => {
    await page.goto("/en");
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute("href", /projectcalchub\.com\/en$/);

    await expect(page.locator('link[hreflang="en"]')).toHaveAttribute(
      "href",
      /projectcalchub\.com\/en$/,
    );
    await expect(page.locator('link[hreflang="es"]')).toHaveAttribute(
      "href",
      /projectcalchub\.com\/es$/,
    );
    await expect(page.locator('link[hreflang="x-default"]')).toHaveAttribute(
      "href",
      /projectcalchub\.com\/en$/,
    );
  });

  test("calculator page has canonical and hreflang", async ({ page }) => {
    await page.goto("/en/calculators/concrete-slab");
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute(
      "href",
      /projectcalchub\.com\/en\/calculators\/concrete-slab$/,
    );
    await expect(page.locator('link[hreflang="es"]')).toHaveAttribute(
      "href",
      /projectcalchub\.com\/es\/calculators\/concrete-slab$/,
    );
  });
});
