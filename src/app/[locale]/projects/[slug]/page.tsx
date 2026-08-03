import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { absoluteUrl, isLocale, type Locale } from "@/config/site";
import { AdPlaceholder } from "@/components/layout/AdPlaceholder";
import { Breadcrumbs } from "@/components/calculator/Breadcrumbs";
import { FaqAccordion } from "@/components/calculator/FaqAccordion";
import { WorkflowSteps } from "@/components/workflow/WorkflowSteps";
import { getCalculatorById } from "@/lib/calculators/registry";
import { getDictionary } from "@/lib/i18n";
import {
  breadcrumbJsonLd,
  buildPageMetadata,
  faqJsonLd,
  howToJsonLd,
  itemListJsonLd,
  JsonLd,
} from "@/lib/seo";
import { calculatorPath, localePath, workflowPath } from "@/lib/routes";
import { workflowLabel } from "@/lib/workflows/labels";
import { getAllWorkflows, getWorkflowBySlug } from "@/lib/workflows/registry";

export async function generateStaticParams() {
  const locales: Locale[] = ["en", "es"];

  return locales.flatMap((locale) =>
    getAllWorkflows().map((workflow) => ({
      locale,
      slug: locale === "es" ? workflow.slugEs : workflow.slugEn,
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

  const workflow = getWorkflowBySlug(localeParam, slug);
  if (!workflow) return {};

  const content = getDictionary(localeParam).workflows[workflow.id];

  return buildPageMetadata({
    locale: localeParam,
    title: content.metaTitle,
    description: content.metaDescription,
    pathWithoutLocale: `projects/${slug}`,
    // Workflow slugs are localized like calculator slugs, so each hreflang
    // target has to be the translated path rather than this locale's.
    pathsByLocale: {
      en: `projects/${workflow.slugEn}`,
      es: `projects/${workflow.slugEs}`,
    },
    ogType: "article",
  });
}

export default async function WorkflowPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) notFound();

  const locale: Locale = localeParam;
  const workflow = getWorkflowBySlug(locale, slug);
  if (!workflow) notFound();

  const dict = getDictionary(locale);
  const content = dict.workflows[workflow.id];
  const href = workflowPath(locale, workflow);
  const indexTitle = workflowLabel(locale, "indexTitle");
  const others = getAllWorkflows().filter((entry) => entry.id !== workflow.id);

  const stepsForJsonLd = workflow.steps
    .map((step) => {
      const calc = getCalculatorById(step.calculatorId);
      if (!calc) return null;
      return {
        name: dict.calculators[step.calculatorId].title,
        text: locale === "es" ? step.purposeEs : step.purposeEn,
        url: absoluteUrl(calculatorPath(locale, calc)),
      };
    })
    .filter((step): step is NonNullable<typeof step> => step !== null);

  const breadcrumbItems = [
    { label: dict.common.nav.home, href: localePath(locale) },
    { label: indexTitle, href: localePath(locale, "projects") },
    { label: content.title },
  ];

  return (
    <>
      <JsonLd
        data={[
          howToJsonLd({
            name: content.title,
            description: content.metaDescription,
            url: absoluteUrl(href),
            locale,
            steps: stepsForJsonLd,
            dateModified: content.lastUpdated,
          }),
          itemListJsonLd(
            workflowLabel(locale, "steps"),
            stepsForJsonLd.map((step) => ({ name: step.name, url: step.url })),
          ),
          faqJsonLd(content.faqs),
          breadcrumbJsonLd([
            { name: dict.common.nav.home, url: absoluteUrl(localePath(locale)) },
            { name: indexTitle, url: absoluteUrl(localePath(locale, "projects")) },
            { name: content.title, url: absoluteUrl(href) },
          ]),
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
        </header>

        <div className="space-y-10">
          <section className="space-y-4">
            {content.intro.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              {workflowLabel(locale, "steps")}
            </h2>
            <WorkflowSteps
              workflow={workflow}
              locale={locale}
              dict={dict}
              stepLabel={workflowLabel(locale, "step")}
            />
          </section>

          <section className="space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold text-slate-900">
              {workflowLabel(locale, "outcome")}
            </h2>
            <p className="text-sm leading-relaxed text-slate-700">{content.outcome}</p>
          </section>

          <FaqAccordion
            title={workflowLabel(locale, "faqs")}
            items={content.faqs.map((faq) => ({
              question: faq.question,
              answer: faq.answer,
            }))}
          />

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-slate-900">
              {workflowLabel(locale, "otherWorkflows")}
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {others.map((entry) => (
                <li key={entry.id}>
                  <Link
                    href={workflowPath(locale, entry)}
                    className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-amber-300 hover:bg-amber-50/30 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                  >
                    <span className="font-medium text-slate-900">
                      {dict.workflows[entry.id].title}
                    </span>
                    <span className="mt-1 text-sm text-slate-600">
                      {dict.workflows[entry.id].shortDescription}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {content.lastUpdated ? (
            <p className="text-xs text-slate-500">
              {`${workflowLabel(locale, "lastUpdated")}: ${content.lastUpdated}`}
            </p>
          ) : null}

          <AdPlaceholder
            slot={`workflow-${workflow.id}`}
            format="horizontal"
            className="no-print"
          />
        </div>
      </article>
    </>
  );
}
