import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("English home loads", async ({ page }) => {
    await page.goto("/en");
    await expect(
      page.getByRole("heading", {
        name: "Home improvement calculators that show their math",
      }),
    ).toBeVisible();
  });

  test("Spanish home loads", async ({ page }) => {
    await page.goto("/es");
    await expect(
      page.getByRole("heading", {
        name: "Calculadoras de mejoras del hogar con fórmulas visibles",
      }),
    ).toBeVisible();
  });

  test("language switch works", async ({ page }) => {
    await page.goto("/en");
    await expect(
      page.getByRole("heading", {
        name: "Home improvement calculators that show their math",
      }),
    ).toBeVisible();
    await page.getByRole("link", { name: /Switch to Español/i }).click();
    await expect(page).toHaveURL(/\/es\/?$/);
    await expect(
      page.getByRole("heading", {
        name: "Calculadoras de mejoras del hogar con fórmulas visibles",
      }),
    ).toBeVisible();
  });
});
