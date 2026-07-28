import { test, expect } from "@playwright/test";

test.describe("Accessibility navigation", () => {
  test("skip link receives keyboard focus", async ({ page }) => {
    await page.goto("/en");
    await page.keyboard.press("Tab");
    const skipLink = page.getByRole("link", { name: "Skip to main content" });
    await expect(skipLink).toBeFocused();
  });

  test("main nav links are reachable", async ({ page }) => {
    await page.goto("/en");
    await expect(page.getByRole("link", { name: "Calculators" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Home" }).first()).toBeVisible();
  });

  test("locale 404 page shows not found content", async ({ page }) => {
    await page.goto("/en/does-not-exist-page");
    await expect(page.getByRole("heading", { name: /not found|no encontrada/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Back to home|Volver al inicio/i })).toBeVisible();
  });
});
