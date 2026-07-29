"use client";

import { useCallback, useMemo } from "react";
import type { Locale } from "@/config/site";
import { searchCalculatorsForUi } from "@/lib/page-helpers";
import { SearchBox, type SearchCalculator } from "@/components/layout/SearchBox";

type HomeSearchProps = {
  locale: Locale;
  placeholder: string;
  calculators: SearchCalculator[];
};

export function HomeSearch({ locale, placeholder, calculators }: HomeSearchProps) {
  const lookup = useMemo(
    () => new Map(calculators.map((item) => [item.id, item])),
    [calculators],
  );

  const onSearch = useCallback(
    (query: string) => searchCalculatorsForUi(query, locale, lookup),
    [locale, lookup],
  );

  return (
    <SearchBox
      locale={locale}
      placeholder={placeholder}
      calculators={calculators}
      onSearch={onSearch}
      className="mx-auto max-w-xl"
    />
  );
}
