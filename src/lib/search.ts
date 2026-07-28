import type { Locale } from "@/config/site";
import {
  searchCalculators,
  type CalculatorRegistryEntry,
  type RegistryLocale,
} from "./calculators/registry";

export type SearchResult = CalculatorRegistryEntry;

function toRegistryLocale(locale: Locale): RegistryLocale {
  return locale;
}

/**
 * Client-side calculator search for UI components (header, homepage, directory).
 * Matches calculator ids, locale slugs, and synonym/misspelling search terms.
 */
export function search(query: string, locale: Locale): SearchResult[] {
  return searchCalculators(query, toRegistryLocale(locale));
}

export { searchCalculators };
