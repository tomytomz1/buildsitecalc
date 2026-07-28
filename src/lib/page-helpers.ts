import type { SearchCalculator } from "@/components/layout/SearchBox";
import type { CalculatorLabels } from "@/components/calculator/forms/types";
import type { Locale } from "@/config/site";
import {
  getAllCalculators,
  getAllCategories,
  type CalculatorRegistryEntry,
  type CategoryDefinition,
} from "@/lib/calculators/registry";
import type { CalculatorId } from "@/lib/calculators/types";
import type { Dictionary } from "@/lib/i18n/types";
import { calculatorPath, categoryPath } from "@/lib/routes";
import { search } from "@/lib/search";

export function buildCategoryLinks(
  locale: Locale,
  dict: Dictionary,
): { href: string; label: string }[] {
  return getAllCategories().map((category) => ({
    href: categoryPath(locale, category),
    label: dict.categories[category.id].title,
  }));
}

export function buildSearchCalculators(
  locale: Locale,
  dict: Dictionary,
): SearchCalculator[] {
  return getAllCalculators().map((calc) => ({
    id: calc.id,
    title: dict.calculators[calc.id].title,
    href: calculatorPath(locale, calc),
    category: dict.categories[calc.categoryId].title,
  }));
}

export function searchCalculatorsForUi(
  query: string,
  locale: Locale,
  lookup: Map<string, SearchCalculator>,
): SearchCalculator[] {
  return search(query, locale)
    .map((entry) => lookup.get(entry.id))
    .filter((item): item is SearchCalculator => item !== undefined);
}

export function getCategoryTitle(
  locale: Locale,
  dict: Dictionary,
  category: CategoryDefinition,
): string {
  return dict.categories[category.id].title;
}

export function getCalculatorSlug(
  locale: Locale,
  calc: CalculatorRegistryEntry,
): string {
  return locale === "es" ? calc.slugEs : calc.slugEn;
}

export function buildCalculatorLabels(
  dict: Dictionary,
  calculatorId: CalculatorId,
): CalculatorLabels {
  const calc = dict.calculators[calculatorId];
  const { common } = dict;

  return {
    inputs: { ...common.inputLabels, ...calc.inputLabels },
    results: { ...common.resultLabels, ...calc.resultLabels },
    errors: common.errors,
    ui: {
      calculate: common.buttons.calculate,
      reset: common.buttons.reset,
      results: common.labels.results,
      print: common.buttons.print,
      copyResults: common.buttons.copy,
      copyLink: common.buttons.copyLink,
      share: common.buttons.share,
    },
  };
}

export function parseWorkedExampleSteps(body: string): string[] {
  const trimmed = body.trim();
  if (!trimmed) return [];

  const byNewline = trimmed
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (byNewline.length > 1) {
    return byNewline;
  }

  return [trimmed];
}
