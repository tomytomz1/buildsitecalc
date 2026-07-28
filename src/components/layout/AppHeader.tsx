"use client";

import { useCallback, useMemo } from "react";
import type { Locale } from "@/config/site";
import { searchCalculatorsForUi } from "@/lib/page-helpers";
import { Header, type HeaderNavLink, type HeaderProps } from "./Header";
import type { SearchCalculator } from "./SearchBox";

type AppHeaderProps = {
  locale: Locale;
  labels: HeaderProps["labels"];
  categoryLinks: HeaderNavLink[];
  searchCalculators: SearchCalculator[];
  searchHref?: string;
};

export function AppHeader({
  locale,
  labels,
  categoryLinks,
  searchCalculators,
  searchHref,
}: AppHeaderProps) {
  const lookup = useMemo(
    () => new Map(searchCalculators.map((item) => [item.id, item])),
    [searchCalculators],
  );

  const onSearch = useCallback(
    (query: string) => searchCalculatorsForUi(query, locale, lookup),
    [locale, lookup],
  );

  return (
    <Header
      locale={locale}
      labels={labels}
      categoryLinks={categoryLinks}
      searchHref={searchHref}
      calculators={searchCalculators}
      onSearch={onSearch}
      showInlineSearch
    />
  );
}
