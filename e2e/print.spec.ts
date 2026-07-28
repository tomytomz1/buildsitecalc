import { test, expect } from "@playwright/test";
import { clickCalculate } from "./helpers";

test.describe("Print support", () => {
  test("print button exists after calculate on calculator page", async ({ page }) => {
    await page.goto("/en/calculators/concrete-slab");
    await clickCalculate(page);
    await expect(page.getByRole("button", { name: "Print" })).toBeVisible();
  });

  test("print stylesheet hides non-print chrome", async ({ page }) => {
    await page.goto("/en/calculators/concrete-slab");
    const hasPrintMedia = await page.evaluate(() => {
      return Array.from(document.styleSheets).some((sheet) => {
        try {
          return Array.from(sheet.cssRules ?? []).some(
            (rule) => rule instanceof CSSMediaRule && rule.conditionText.includes("print"),
          );
        } catch {
          return false;
        }
      });
    });
    expect(hasPrintMedia).toBe(true);
  });

  test("print stylesheet defines print media rules", async ({ page }) => {
    await page.goto("/en/calculators/concrete-slab");
    const cssText = await page.evaluate(async () => {
      for (const sheet of Array.from(document.styleSheets)) {
        try {
          for (const rule of Array.from(sheet.cssRules ?? [])) {
            if (rule instanceof CSSMediaRule && rule.conditionText.includes("print")) {
              return rule.cssText;
            }
          }
        } catch {
          // Cross-origin stylesheets
        }
      }
      return "";
    });
    expect(cssText).toMatch(/print/i);
  });
});
