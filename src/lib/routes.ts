import type { Locale } from "@/config/site";
import {
  getAllCalculators,
  getAllCategories,
  getCalculatorById,
  getCategoryBySlug,
  type CalculatorRegistryEntry,
  type CategoryDefinition,
} from "@/lib/calculators/registry";
import type { CalculatorCategoryId, CalculatorId } from "@/lib/calculators/types";

export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\//, "");
  return clean ? `/${locale}/${clean}` : `/${locale}`;
}

export function categoryPath(locale: Locale, category: CategoryDefinition): string {
  const slug = locale === "es" ? category.slugEs : category.slugEn;
  return localePath(locale, `categories/${slug}`);
}

export function calculatorPath(locale: Locale, calc: CalculatorRegistryEntry): string {
  const slug = locale === "es" ? calc.slugEs : calc.slugEn;
  return localePath(locale, `calculators/${slug}`);
}

export function calculatorPathById(locale: Locale, id: CalculatorId): string {
  const calc = getCalculatorById(id);
  if (!calc) return localePath(locale, "calculators");
  return calculatorPath(locale, calc);
}

export function categoryPathById(locale: Locale, id: CalculatorCategoryId): string {
  const category = getAllCategories().find((c) => c.id === id);
  if (!category) return localePath(locale, "calculators");
  return categoryPath(locale, category);
}

export function switchLocalePath(currentPath: string, targetLocale: Locale): string {
  const parts = currentPath.split("/").filter(Boolean);
  if (parts.length === 0) return `/${targetLocale}`;

  const currentLocale = parts[0] === "es" ? "es" : "en";
  if (currentLocale === targetLocale)
    return currentPath.startsWith("/") ? currentPath : `/${currentPath}`;

  const rest = parts.slice(1);
  if (rest.length === 0) return `/${targetLocale}`;

  // Map calculator slugs across locales
  if (rest[0] === "calculators" && rest[1]) {
    const calc = getAllCalculators().find(
      (c) => (currentLocale === "es" ? c.slugEs : c.slugEn) === rest[1],
    );
    if (calc) {
      return calculatorPath(targetLocale, calc);
    }
  }

  // Map category slugs
  if (rest[0] === "categories" && rest[1]) {
    const cat = getCategoryBySlug(currentLocale, rest[1]);
    if (cat) {
      return categoryPath(targetLocale, cat);
    }
  }

  // Static pages share the same slug
  return `/${targetLocale}/${rest.join("/")}`;
}

export const STATIC_PAGE_SLUGS = [
  "about",
  "methodology",
  "glossary",
  "contact",
  "privacy",
  "terms",
  "disclaimer",
  "accessibility",
  "cookies",
] as const;

export type StaticPageSlug = (typeof STATIC_PAGE_SLUGS)[number];
