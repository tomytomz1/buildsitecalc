import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

/** Wait for calculator client hydration. */
export async function waitForCalculatorReady(page: Page): Promise<void> {
  await expect(page.getByRole("button", { name: /^Calculate$|^Calcular$/ })).toBeEnabled();
  await page.evaluate(
    () =>
      new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      }),
  );
}

export async function clickCalculate(page: Page, locale: "en" | "es" = "en"): Promise<void> {
  await waitForCalculatorReady(page);
  const label = locale === "es" ? "Calcular" : "Calculate";
  await page.locator("form").getByRole("button", { name: label }).click();
}

export function lengthInput(page: Page) {
  return page.getByRole("textbox", { name: "Length", exact: true });
}

export function widthInput(page: Page) {
  return page.getByRole("textbox", { name: "Width", exact: true });
}

export function headerSearch(page: Page) {
  return page.getByRole("combobox", { name: "Search" });
}

export function homeSearch(page: Page) {
  return page.getByRole("combobox", { name: /Search calculators/i });
}
