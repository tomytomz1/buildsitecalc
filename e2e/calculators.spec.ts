import { test, expect } from "@playwright/test";
import {
  clickCalculate,
  lengthInput,
  waitForCalculatorReady,
  widthInput,
} from "./helpers";

test.describe("Calculator workflows", () => {
  test("concrete slab calculate shows volume result", async ({ page }) => {
    await page.goto("/en/calculators/concrete-slab");
    await clickCalculate(page);
    await expect(page.getByText(/Concrete to order \(yd³\)/i)).toBeVisible();
    await expect(page.getByText("1.36 yd³", { exact: true })).toBeVisible();
  });

  test("paint calculate shows gallons", async ({ page }) => {
    await page.goto("/en/calculators/paint");
    await clickCalculate(page);
    await expect(page.getByText(/Gallons to purchase/i)).toBeVisible();
  });

  test("project budget calculate shows grand total", async ({ page }) => {
    await page.goto("/en/calculators/project-budget");
    await clickCalculate(page);
    await expect(page.getByText(/Total project budget/i)).toBeVisible();
  });

  test("validation errors show for invalid input", async ({ page }) => {
    await page.goto("/en/calculators/concrete-slab");
    await waitForCalculatorReady(page);
    await lengthInput(page).fill("0");
    await clickCalculate(page);
    await expect(page.getByText(/greater than zero/i)).toBeVisible();
  });

  test("URL state restores values after reload", async ({ page }) => {
    test.setTimeout(60_000);
    await page.goto(
      "/en/calculators/concrete-slab?length=20&width=15&thickness=6&wastePercent=5",
      { waitUntil: "domcontentloaded" },
    );
    await waitForCalculatorReady(page);
    await expect(lengthInput(page)).toHaveValue("20", { timeout: 10_000 });
    await expect(widthInput(page)).toHaveValue("15");
    await page.reload({ waitUntil: "domcontentloaded" });
    await waitForCalculatorReady(page);
    await expect(lengthInput(page)).toHaveValue("20", { timeout: 10_000 });
    await expect(widthInput(page)).toHaveValue("15");
  });
});
