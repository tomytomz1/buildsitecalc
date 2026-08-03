import { expect, test } from "@playwright/test";
import { clickCalculate, waitForCalculatorReady } from "./helpers";

/**
 * Acceptance for the retention workstream: a saved estimate survives a reload
 * and its sheet prints to one clean page.
 */
async function saveAnEstimate(page: import("@playwright/test").Page) {
  await page.goto("/en/calculators/paint");
  await waitForCalculatorReady(page);
  await page.locator('input[name="length"]').fill("24");
  await clickCalculate(page);
  await page.getByRole("button", { name: "Save estimate" }).click();
  await expect(page.getByRole("link", { name: "View saved estimates" })).toBeVisible();
}

test.describe("saved estimates", () => {
  test("an estimate survives a page reload", async ({ page }) => {
    await saveAnEstimate(page);

    await page.reload();
    await waitForCalculatorReady(page);

    const stored = await page.evaluate(() =>
      window.localStorage.getItem("bsc-estimates-v1"),
    );
    expect(stored).toContain("paint");

    // The header only offers the return path once something is saved.
    await expect(page.getByRole("link", { name: /Saved estimates/ })).toBeVisible();

    await page.goto("/en/my-estimates");
    await expect(page.getByRole("heading", { level: 2 })).toContainText(/paint/i);
    await expect(
      page.getByRole("link", { name: "Open with these numbers" }),
    ).toHaveAttribute("href", /\/en\/calculators\/paint\?.*length=24/);
  });

  test("reopening a saved estimate restores the numbers", async ({ page }) => {
    await saveAnEstimate(page);

    await page.goto("/en/my-estimates");
    await page.getByRole("link", { name: "Open with these numbers" }).click();
    await waitForCalculatorReady(page);

    await expect(page.locator('input[name="length"]')).toHaveValue("24");
  });

  test("the estimate sheet prints to a single clean page", async ({ page }) => {
    await saveAnEstimate(page);
    await page.goto("/en/my-estimates");
    await page.getByRole("button", { name: "Estimate sheet" }).click();

    await expect(page.getByRole("heading", { level: 2 })).toContainText(/paint/i);
    await expect(page.getByText(/Estimate only/i)).toBeVisible();

    await page.emulateMedia({ media: "print" });
    await expect(page.locator("header").first()).toBeHidden();
    await expect(page.locator("footer").first()).toBeHidden();
    await expect(page.getByRole("button", { name: "Print" })).toBeHidden();

    const pdf = await page.pdf({ format: "Letter" });
    const pageCount = (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) ?? []).length;
    expect(pageCount).toBe(1);

    await page.emulateMedia({ media: null });
  });

  test("deleting an estimate empties the list", async ({ page }) => {
    await saveAnEstimate(page);
    await page.goto("/en/my-estimates");

    await page.getByRole("button", { name: "Delete", exact: true }).click();
    await expect(page.getByText("Nothing saved yet")).toBeVisible();
  });

  test("the page is excluded from indexing in both locales", async ({ page }) => {
    for (const path of ["/en/my-estimates", "/es/my-estimates"]) {
      await page.goto(path);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        "content",
        /noindex/,
      );
    }

    await expect(
      page.getByRole("heading", { name: "Sus estimados guardados" }),
    ).toBeVisible();
  });
});
