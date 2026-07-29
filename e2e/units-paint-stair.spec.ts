import { test, expect } from "@playwright/test";
import { clickCalculate, waitForCalculatorReady } from "./helpers";

test.describe("Paint and stair unit handling", () => {
  test("paint metric openings and coverage units are available", async ({ page }) => {
    await page.goto("/en/calculators/paint");
    await waitForCalculatorReady(page);

    await expect(page.getByLabel(/door area unit/i)).toBeVisible();
    await expect(page.getByLabel(/window area unit/i)).toBeVisible();
    await expect(page.getByLabel(/coverage unit/i)).toBeVisible();

    await page
      .getByLabel(/^length unit$/i)
      .first()
      .selectOption("m");
    await page
      .getByLabel(/^width unit$/i)
      .first()
      .selectOption("m");
    await page
      .getByLabel(/^height unit$/i)
      .first()
      .selectOption("m");
    await page.locator('input[name="length"]').fill("3.66");
    await page.locator('input[name="width"]').fill("3.05");
    await page.locator('input[name="height"]').fill("2.44");
    await page.getByLabel(/coverage unit/i).selectOption("m2");
    await page.locator('input[name="coverageRate"]').fill("32.516");

    await clickCalculate(page);
    await expect(page.getByText(/Gallons to purchase/i)).toBeVisible();
    await expect(
      page.locator("aside dd.tabular-nums").filter({ hasText: /28\.01/ }),
    ).toBeVisible();

    const url = new URL(page.url());
    expect(url.searchParams.get("lengthUnit")).toBe("m");
    expect(url.searchParams.get("coverageRateUnit")).toBe("m2");

    await page.reload({ waitUntil: "domcontentloaded" });
    await waitForCalculatorReady(page);
    await expect(page.getByLabel(/^length unit$/i).first()).toHaveValue("m");
    await expect(page.getByLabel(/coverage unit/i)).toHaveValue("m2");
  });

  test("paint Spanish labels expose opening units", async ({ page }) => {
    await page.goto("/es/calculators/pintura");
    await waitForCalculatorReady(page);
    await expect(page.getByLabel(/unidad de área de puertas/i)).toBeVisible();
    await expect(page.getByLabel(/unidad de rendimiento/i)).toBeVisible();
    await clickCalculate(page, "es");
    await expect(page.getByText(/Galones a comprar/i)).toBeVisible();
  });

  test("stair shared unit converts and restores from URL", async ({ page }) => {
    await page.goto("/en/calculators/stair");
    await waitForCalculatorReady(page);

    await expect(page.getByText(/shared unit|never read as feet/i)).toBeVisible();

    const rise = page.locator('input[name="totalRise"]');
    await expect(rise).toHaveValue("108");

    await page.getByLabel(/length unit/i).selectOption("ft");
    await expect(rise).toHaveValue(/9/);

    await clickCalculate(page);
    await expect(page.getByText(/^Risers$/i)).toBeVisible();
    await expect(
      page.getByRole("term").filter({ hasText: /Stringer length/i }),
    ).toBeVisible();

    const url = new URL(page.url());
    expect(url.searchParams.get("lengthUnit")).toBe("ft");

    await page.reload({ waitUntil: "domcontentloaded" });
    await waitForCalculatorReady(page);
    await expect(page.getByLabel(/length unit/i)).toHaveValue("ft");
    await expect(page.locator('input[name="totalRise"]')).toHaveValue(/9/);
  });
});
