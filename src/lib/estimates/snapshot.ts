import type { Locale } from "@/config/site";
import { formatNumber } from "@/lib/utils";
import type { EstimateLine } from "./model";

/**
 * Turns engine inputs into printable label/value lines.
 *
 * Only scalar inputs are described. Repeating inputs (room lists, line items)
 * are arrays whose useful rendering is the form itself, and a one-page material
 * sheet is not the place to reproduce a table of them - the saved query string
 * still restores them exactly, so nothing is lost.
 *
 * Iteration follows the default-input key order rather than the live object's,
 * so two estimates for the same calculator always list fields in the same order.
 */
export function describeInputLines(
  inputs: Record<string, unknown>,
  defaults: Record<string, unknown>,
  inputLabels: Record<string, string>,
  locale: Locale,
): EstimateLine[] {
  const lines: EstimateLine[] = [];

  for (const key of Object.keys(defaults)) {
    const value = inputs[key];
    const formatted = formatInputValue(value, locale);
    if (formatted === null) continue;
    lines.push({ label: inputLabels[key] ?? key, value: formatted });
  }

  return lines;
}

function formatInputValue(value: unknown, locale: Locale): string | null {
  if (typeof value === "number") {
    return Number.isFinite(value) ? formatNumber(value, locale) : null;
  }

  if (typeof value === "boolean") {
    return value ? yesNo(locale).yes : yesNo(locale).no;
  }

  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed === "" ? null : trimmed;
  }

  return null;
}

function yesNo(locale: Locale): { yes: string; no: string } {
  return locale === "es" ? { yes: "Sí", no: "No" } : { yes: "Yes", no: "No" };
}
