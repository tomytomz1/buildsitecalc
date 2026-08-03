import type { CalculatorCategoryId, CalculatorId } from "@/lib/calculators/types";
import type { WorkflowId } from "@/lib/workflows/registry";

export type Locale = "en" | "es";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface WorkedExample {
  title: string;
  body: string;
}

export interface CalculatorDataTable {
  title: string;
  columns: string[];
  rows: string[][];
  note?: string;
}

export interface CalculatorReference {
  label: string;
  publisher: string;
  year: string;
  url: string;
}

export interface PageSection {
  heading?: string;
  paragraphs: string[];
}

/**
 * A single high-intent question answered directly on the calculator page.
 *
 * These target queries the page already receives impressions for but cannot
 * answer, because they ask for the reverse of what the calculator computes
 * (gallons to area rather than area to gallons), a unit conversion, or a code
 * constant. The question is rendered verbatim as an H2 so it matches how the
 * query is typed, and the answer must lead with the number before any
 * explanation.
 *
 * Every figure quoted here is asserted against the calculator engines in
 * `src/lib/i18n/__tests__/quick-answers.test.ts`, so content cannot drift away
 * from what the tools actually compute.
 */
export interface QuickAnswer {
  /** Verbatim target query, sentence-cased. Rendered as an H2. */
  question: string;
  /** Direct answer, number first. Supports `**bold**`. */
  answer: string;
  /** Optional reference table covering the variants of the question. */
  table?: CalculatorDataTable;
}

export interface StaticPage {
  title: string;
  metaDescription: string;
  sections: PageSection[];
}

export interface GlossaryPage extends StaticPage {
  terms: GlossaryTerm[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface CategoryContent {
  title: string;
  description: string;
}

export interface CalculatorContent {
  title: string;
  description: string;
  shortDescription: string;
  formula: string;
  assumptions: string[];
  workedExample: WorkedExample;
  quickAnswers?: QuickAnswer[];
  sections?: PageSection[];
  howToMeasure: string;
  commonMistakes: string[];
  faqs: FaqItem[];
  dataTables?: CalculatorDataTable[];
  references?: CalculatorReference[];
  lastUpdated?: string;
  resultLabels: Record<string, string>;
  inputLabels: Record<string, string>;
  metaTitle: string;
  metaDescription: string;
}

export interface CommonDictionary {
  nav: {
    calculators: string;
    categories: string;
    home: string;
  };
  buttons: {
    calculate: string;
    reset: string;
    copy: string;
    print: string;
    share: string;
    copyLink: string;
    search: string;
    language: string;
    skipToContent: string;
    learnMore: string;
  };
  labels: {
    results: string;
    primaryResults: string;
    secondaryResults: string;
    assumptions: string;
    formula: string;
    workedExample: string;
    howToMeasure: string;
    commonMistakes: string;
    faqs: string;
    related: string;
    advertisement: string;
    recentlyViewed: string;
    popular: string;
    allCalculators: string;
    categories: string;
    noResults: string;
  };
  errors: {
    required: string;
    positive: string;
    invalid: string;
  };
  resultLabels: Record<string, string>;
  inputLabels: Record<string, string>;
  /** Shared widget chrome: empty state, row controls, entry-mode options. */
  uiLabels: Record<string, string>;
}

export interface HomeDictionary {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  howEstimatesWork: {
    title: string;
    body: string;
  };
  categoriesTitle: string;
  popularTitle: string;
  recentlyTitle: string;
}

export interface PagesDictionary {
  about: StaticPage;
  methodology: StaticPage;
  glossary: GlossaryPage;
  contact: StaticPage;
  privacy: StaticPage;
  terms: StaticPage;
  disclaimer: StaticPage;
  accessibility: StaticPage;
  cookies: StaticPage;
}

export interface FooterDictionary {
  tagline: string;
  copyright: string;
  links: {
    about: string;
    methodology: string;
    glossary: string;
    contact: string;
    privacy: string;
    terms: string;
    disclaimer: string;
    accessibility: string;
    cookies: string;
  };
}

export interface Errors404Dictionary {
  title: string;
  description: string;
  backHome: string;
}

/**
 * Copy for a project workflow hub.
 *
 * The workflow's slug and its ordered steps live in
 * `src/lib/workflows/registry.ts` rather than here, because the internal link
 * graph consumes the step list directly and must not depend on the
 * presentation dictionaries. Everything a reader sees lives here.
 */
export interface WorkflowContent {
  title: string;
  shortDescription: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  outcome: string;
  faqs: FaqItem[];
  lastUpdated?: string;
}

export interface Dictionary {
  common: CommonDictionary;
  home: HomeDictionary;
  categories: Record<CalculatorCategoryId, CategoryContent>;
  calculators: Record<CalculatorId, CalculatorContent>;
  workflows: Record<WorkflowId, WorkflowContent>;
  pages: PagesDictionary;
  footer: FooterDictionary;
  errors404: Errors404Dictionary;
}
