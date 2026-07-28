"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale } from "@/config/site";
import { getDictionary } from "@/lib/i18n";

export function NotFoundContent() {
  const pathname = usePathname();
  const segment = pathname?.split("/").filter(Boolean)[0];
  const locale = segment && isLocale(segment) ? segment : "en";
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-20 text-center animate-fade-up">
      <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
        404
      </p>
      <h1 className="mt-2 font-display text-3xl font-bold text-slate-900">
        {dict.errors404.title}
      </h1>
      <p className="mt-3 text-slate-600">{dict.errors404.description}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href={`/${locale}`}
          className="rounded-md bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          {dict.errors404.backHome}
        </Link>
        <Link
          href={`/${locale}/calculators`}
          className="rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          {dict.common.labels.allCalculators}
        </Link>
      </div>
    </div>
  );
}
