import { expect, test } from "@playwright/test";
import { clickCalculate, waitForCalculatorReady } from "./helpers";

test.describe("High-risk calculator disclaimers and units", () => {
  test("stair page surfaces building-code disclaimer after calculate", async ({
    page,
  }) => {
    await page.goto("/en/calculators/stair");
    await waitForCalculatorReady(page);
    await clickCalculate(page);
    await expect(
      page.getByRole("note").filter({ hasText: /building code/i }),
    ).toBeVisible();
  });

  test("HVAC page surfaces Manual J disclaimer after calculate", async ({ page }) => {
    await page.goto("/en/calculators/hvac-btu");
    await waitForCalculatorReady(page);
    await clickCalculate(page);
    await expect(page.getByRole("note").filter({ hasText: /Manual J/i })).toBeVisible();
  });

  test("fence calculator yields practical picket count for default inputs", async ({
    page,
  }) => {
    await page.goto("/en/calculators/fence-material");
    await waitForCalculatorReady(page);
    await clickCalculate(page);
    await expect(page.getByText("214 pickets")).toBeVisible();
  });

  test("Spanish concrete slab route loads and calculates", async ({ page }) => {
    await page.goto("/es/calculators/losa-de-concreto");
    await waitForCalculatorReady(page);
    await clickCalculate(page, "es");
    await expect(page.locator("aside").getByText(/yd/i).first()).toBeVisible();
  });
});
