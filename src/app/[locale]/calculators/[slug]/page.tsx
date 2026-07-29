import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { absoluteUrl, isLocale, type Locale } from "@/config/site";
import { AdPlaceholder } from "@/components/layout/AdPlaceholder";
import { AssumptionsList } from "@/components/calculator/AssumptionsList";
import { Breadcrumbs } from "@/components/calculator/Breadcrumbs";
import { CalculatorPageClient } from "@/components/calculator/CalculatorPageClient";
import { CalculatorDataTables } from "@/components/calculator/CalculatorDataTables";
import { CalculatorReferences } from "@/components/calculator/CalculatorReferences";
import { CalculatorSections } from "@/components/calculator/CalculatorSections";
import { RoomDiagram, SlabDiagram, StairDiagram } from "@/components/calculator/Diagrams";
import { CommonMistakes } from "@/components/calculator/CommonMistakes";
import { FaqAccordion } from "@/components/calculator/FaqAccordion";
import { FormulaBlock } from "@/components/calculator/FormulaBlock";
import { RelatedCalculators } from "@/components/calculator/RelatedCalculators";
import { WorkedExample } from "@/components/calculator/WorkedExample";
import { getDictionary } from "@/lib/i18n";
import {
  getAllCalculators,
  getAllCategories,
  getCalculatorBySlug,
  getRelatedCalculators,
} from "@/lib/calculators/registry";
import { getCalculatorEngine } from "@/lib/calculators/engine";
import type { CalcSuccess } from "@/lib/calculators/types";
import {
  buildCalculatorLabels,
  getCalculatorSlug,
  parseWorkedExampleSteps,
} from "@/lib/page-helpers";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  JsonLd,
  webApplicationJsonLd,
} from "@/lib/seo";
import { calculatorPath, categoryPath, localePath } from "@/lib/routes";

export async function generateStaticParams() {
  const locales: Locale[] = ["en", "es"];

  return locales.flatMap((locale) =>
    getAllCalculators().map((calc) => ({
      locale,
      slug: getCalculatorSlug(locale, calc),
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};

  const calc = getCalculatorBySlug(localeParam, slug);
  if (!calc) return {};

  const content = getDictionary(localeParam).calculators[calc.id];

  return buildPageMetadata({
    locale: localeParam,
    title: content.metaTitle,
    description: content.metaDescription,
    pathWithoutLocale: `calculators/${slug}`,
    // Calculator slugs are localized, so hreflang must point at the
    // translated slug rather than reusing this locale's.
    pathsByLocale: {
      en: `calculators/${calc.slugEn}`,
      es: `calculators/${calc.slugEs}`,
    },
  });
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const calc = getCalculatorBySlug(locale, slug);
  if (!calc) notFound();

  const dict = getDictionary(locale);
  const content = dict.calculators[calc.id];
  const categoryEntry = getAllCategories().find((entry) => entry.id === calc.categoryId);

  if (!categoryEntry) notFound();
  const categoryTitle = dict.categories[calc.categoryId].title;
  const href = calculatorPath(locale, calc);
  const labels = buildCalculatorLabels(dict, calc.id);
  const related = getRelatedCalculators(calc.id);
  const exampleSteps = parseWorkedExampleSteps(content.workedExample.body);

  // Server-compute the default result so crawlers see numbers in the HTML
  // (not the empty-state placeholder). Client hydrates with the same payload.
  const engine = getCalculatorEngine(calc.id);
  const defaultOutput = engine.calculate(engine.defaultInputs);
  const initialResult: CalcSuccess | null = defaultOutput.ok ? defaultOutput : null;

  const breadcrumbItems = [
    {
      label: dict.common.nav.home,
      href: localePath(locale),
    },
    {
      label: dict.common.labels.allCalculators,
      href: localePath(locale, "calculators"),
    },
    {
      label: categoryTitle,
      href: categoryPath(locale, categoryEntry),
    },
    {
      label: content.title,
    },
  ];

  const breadcrumbLd = breadcrumbJsonLd([
    { name: dict.common.nav.home, url: absoluteUrl(localePath(locale)) },
    {
      name: dict.common.labels.allCalculators,
      url: absoluteUrl(localePath(locale, "calculators")),
    },
    {
      name: categoryTitle,
      url: absoluteUrl(categoryPath(locale, categoryEntry)),
    },
    { name: content.title, url: absoluteUrl(href) },
  ]);

  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(content.faqs),
          webApplicationJsonLd({
            name: content.title,
            description: content.metaDescription,
            url: absoluteUrl(href),
            locale,
            dateModified: content.lastUpdated,
          }),
          breadcrumbLd,
        ]}
      />

      <article className="animate-fade-up mx-auto max-w-3xl px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />

        <header className="mb-8">
          <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {content.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            {content.description}
          </p>
          {calc.id === "concrete-slab" ? (
            <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4">
              <SlabDiagram
                title={
                  locale === "es"
                    ? "Diagrama de losa de concreto mostrando largo, ancho y espesor"
                    : "Concrete slab diagram showing length, width, and thickness"
                }
              />
            </div>
          ) : null}
          {calc.id === "stair" ? (
            <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4">
              <StairDiagram
                title={
                  locale === "es"
                    ? "Diagrama de escalera con huella y contrapaso"
                    : "Stair diagram showing rise and run"
                }
              />
            </div>
          ) : null}
          {calc.id === "room-volume" || calc.id === "square-footage" ? (
            <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4">
              <RoomDiagram
                title={
                  locale === "es"
                    ? "Diagrama de habitación con largo, ancho y alto"
                    : "Room diagram showing length, width, and height"
                }
              />
            </div>
          ) : null}
        </header>

        <CalculatorPageClient
          calculatorId={calc.id}
          locale={locale}
          title={content.title}
          href={href}
          labels={labels}
          initialResult={initialResult}
          className="mb-10"
        />

        <div className="space-y-10">
          <AssumptionsList
            title={dict.common.labels.assumptions}
            items={content.assumptions}
          />

          <FormulaBlock formula={content.formula} label={dict.common.labels.formula} />

          {exampleSteps.length > 0 ? (
            <WorkedExample title={content.workedExample.title} steps={exampleSteps} />
          ) : null}

          <CalculatorSections sections={content.sections ?? []} />

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              {dict.common.labels.howToMeasure}
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">
              {content.howToMeasure}
            </p>
          </section>

          <CalculatorDataTables tables={content.dataTables ?? []} />

          <CommonMistakes
            title={dict.common.labels.commonMistakes}
            items={content.commonMistakes}
          />

          <FaqAccordion
            title={dict.common.labels.faqs}
            items={content.faqs.map((faq) => ({
              question: faq.question,
              answer: faq.answer,
            }))}
          />

          <CalculatorReferences
            title={locale === "es" ? "Fuentes y referencias" : "Sources and references"}
            updatedLabel={locale === "es" ? "Última actualización" : "Last updated"}
            lastUpdated={content.lastUpdated}
            references={content.references ?? []}
            locale={locale}
          />

          <RelatedCalculators
            title={dict.common.labels.related}
            items={related.map((relatedCalc) => ({
              href: calculatorPath(locale, relatedCalc),
              title: dict.calculators[relatedCalc.id].title,
              description: dict.calculators[relatedCalc.id].shortDescription,
            }))}
          />

          <AdPlaceholder
            slot={`calc-${calc.id}`}
            format="horizontal"
            className="no-print"
          />
        </div>
      </article>
    </>
  );
}
