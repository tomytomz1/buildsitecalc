import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { absoluteUrl, isLocale, type Locale } from "@/config/site";
import { getCalculatorById } from "@/lib/calculators/registry";
import { getDictionary } from "@/lib/i18n";
import { breadcrumbJsonLd, buildPageMetadata, itemListJsonLd, JsonLd } from "@/lib/seo";
import { calculatorPath, localePath, workflowPath } from "@/lib/routes";
import { workflowLabel } from "@/lib/workflows/labels";
import { getAllWorkflows } from "@/lib/workflows/registry";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) return {};

  return buildPageMetadata({
    locale: localeParam,
    title: workflowLabel(localeParam, "indexTitle"),
    description: workflowLabel(localeParam, "indexDescription"),
    pathWithoutLocale: "projects",
  });
}

export default async function ProjectsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const dict = getDictionary(locale);
  const workflows = getAllWorkflows();
  const title = workflowLabel(locale, "indexTitle");
  const description = workflowLabel(locale, "indexDescription");

  return (
    <>
      <JsonLd
        data={[
          itemListJsonLd(
            title,
            workflows.map((workflow) => ({
              name: dict.workflows[workflow.id].title,
              url: absoluteUrl(workflowPath(locale, workflow)),
            })),
          ),
          breadcrumbJsonLd([
            { name: dict.common.nav.home, url: absoluteUrl(localePath(locale)) },
            { name: title, url: absoluteUrl(localePath(locale, "projects")) },
          ]),
        ]}
      />

      <div className="animate-fade-up mx-auto max-w-6xl px-4 py-8">
        <nav className="mb-4 text-sm">
          <Link href={localePath(locale)} className="text-slate-600 hover:text-amber-700">
            {dict.common.nav.home}
          </Link>
          <span className="mx-2 text-slate-400">/</span>
          <span className="font-medium text-slate-900">{title}</span>
        </nav>

        <header className="max-w-3xl">
          <h1 className="font-display text-3xl font-bold text-slate-900">{title}</h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {workflows.map((workflow) => {
            const content = dict.workflows[workflow.id];

            return (
              <li
                key={workflow.id}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <h2 className="font-display text-lg font-semibold text-slate-900">
                  <Link
                    href={workflowPath(locale, workflow)}
                    className="hover:text-amber-700 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                  >
                    {content.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {content.shortDescription}
                </p>
                <p className="mt-3 text-xs font-medium tracking-wide text-slate-500 uppercase">
                  {`${workflow.steps.length} ${workflowLabel(locale, "stepCount")}`}
                </p>
                <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                  {workflow.steps.map((step) => {
                    const calc = getCalculatorById(step.calculatorId);
                    if (!calc) return null;

                    return (
                      <li key={step.calculatorId} className="text-sm">
                        <Link
                          href={calculatorPath(locale, calc)}
                          className="text-slate-700 underline-offset-2 hover:text-amber-700 hover:underline focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                        >
                          {dict.calculators[step.calculatorId].title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
