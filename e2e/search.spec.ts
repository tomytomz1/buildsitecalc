import { test, expect } from "@playwright/test";
import { headerSearch, homeSearch } from "./helpers";

test.describe("Calculator search", () => {
  test("search finds concrete slab", async ({ page }) => {
    await page.goto("/en");
    const search = homeSearch(page);
    await search.fill("concrete");
    await expect(page.getByRole("link", { name: /Concrete Slab Calculator/i }).first()).toBeVisible();
  });

  test("search on calculators page finds concrete bags", async ({ page }) => {
    await page.goto("/en/calculators");
    const search = headerSearch(page);
    await search.fill("concrete bags");
    await expect(page.getByRole("link", { name: /Concrete Bags Calculator/i }).first()).toBeVisible();
  });
});
