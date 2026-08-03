"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import type { Locale } from "@/config/site";
import { SavedEstimatesNavLink } from "@/components/estimates/SavedEstimatesNavLink";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SearchBox, type SearchCalculator } from "./SearchBox";
import { cn } from "@/lib/utils";

export type HeaderNavLink = {
  href: string;
  label: string;
};

export type HeaderProps = {
  locale: Locale;
  labels: {
    home?: string;
    calculators: string;
    categories: string;
    projects?: string;
    search: string;
    openMenu?: string;
    closeMenu?: string;
  };
  categoryLinks?: HeaderNavLink[];
  searchHref?: string;
  calculators?: SearchCalculator[];
  onSearch?: (query: string) => SearchCalculator[];
  showInlineSearch?: boolean;
  className?: string;
};

export function Header({
  locale,
  labels,
  categoryLinks = [],
  searchHref,
  calculators,
  onSearch,
  showInlineSearch = false,
  className,
}: HeaderProps) {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target as Node)
      ) {
        setCategoriesOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const resolvedSearchHref = searchHref ?? `/${locale}/search`;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80",
        className,
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Logo locale={locale} />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          <Link
            href={`/${locale}`}
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
          >
            {labels.home ?? "Home"}
          </Link>
          <Link
            href={`/${locale}/calculators`}
            className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
          >
            {labels.calculators}
          </Link>

          {categoryLinks.length > 0 ? (
            <div ref={categoriesRef} className="relative">
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                aria-expanded={categoriesOpen}
                aria-haspopup="true"
                onClick={() => setCategoriesOpen((open) => !open)}
              >
                {labels.categories}
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    categoriesOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
              {categoriesOpen ? (
                <ul
                  role="menu"
                  className="absolute top-full left-0 z-50 mt-1 min-w-[14rem] rounded-md border border-slate-200 bg-white py-1 shadow-lg"
                >
                  {categoryLinks.map((link) => (
                    <li key={link.href} role="none">
                      <Link
                        href={link.href}
                        role="menuitem"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none focus-visible:ring-inset"
                        onClick={() => setCategoriesOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : (
            <Link
              href={`/${locale}/categories`}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              {labels.categories}
            </Link>
          )}

          {labels.projects ? (
            <Link
              href={`/${locale}/projects`}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
            >
              {labels.projects}
            </Link>
          ) : null}

          <SavedEstimatesNavLink locale={locale} />
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {showInlineSearch ? (
            <div className="hidden lg:block">
              <SearchBox
                locale={locale}
                placeholder={labels.search}
                calculators={calculators}
                onSearch={onSearch}
              />
            </div>
          ) : null}

          <Link
            href={resolvedSearchHref}
            className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none lg:hidden"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only sm:not-sr-only">{labels.search}</span>
          </Link>

          <LanguageSwitcher locale={locale} />

          <button
            type="button"
            className="inline-flex rounded-md p-2 text-slate-700 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">
              {mobileOpen
                ? (labels.closeMenu ?? "Close menu")
                : (labels.openMenu ?? "Open menu")}
            </span>
            <span aria-hidden="true" className="text-lg leading-none">
              {mobileOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-slate-200 px-4 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1">
            <li>
              <Link
                href={`/${locale}`}
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
                onClick={() => setMobileOpen(false)}
              >
                {labels.home ?? "Home"}
              </Link>
            </li>
            <li>
              <Link
                href={`/${locale}/calculators`}
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
                onClick={() => setMobileOpen(false)}
              >
                {labels.calculators}
              </Link>
            </li>
            {categoryLinks.length > 0 ? (
              categoryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))
            ) : (
              <li>
                <Link
                  href={`/${locale}/categories`}
                  className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {labels.categories}
                </Link>
              </li>
            )}
            {labels.projects ? (
              <li>
                <Link
                  href={`/${locale}/projects`}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {labels.projects}
                </Link>
              </li>
            ) : null}
            <li>
              <SavedEstimatesNavLink
                locale={locale}
                className="block"
                onNavigate={() => setMobileOpen(false)}
              />
            </li>
            <li>
              <Link
                href={resolvedSearchHref}
                className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                onClick={() => setMobileOpen(false)}
              >
                {labels.search}
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
