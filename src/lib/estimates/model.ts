/**
 * Saved estimates: the data model.
 *
 * A saved estimate is a snapshot, not a live document. It stores the localized
 * label/value pairs that were on screen at save time *and* the URL query that
 * produced them, because those two things answer different questions: the
 * snapshot prints without re-running anything, and the query re-opens the
 * calculator with the same inputs even if the engine's formatting changes.
 *
 * Everything here is pure so it can be tested without a DOM. Anything that
 * touches `localStorage` lives in `store.ts`.
 */

export type EstimateLine = {
  label: string;
  value: string;
};

export type SavedEstimate = {
  /** Derived from calculator + inputs, so re-saving the same numbers updates. */
  id: string;
  calculatorId: string;
  locale: "en" | "es";
  title: string;
  /** Calculator path without the query, e.g. `/en/calculators/paint`. */
  href: string;
  /** Serialized inputs, no leading `?`. Empty when defaults were used. */
  query: string;
  savedAt: string;
  inputs: EstimateLine[];
  results: EstimateLine[];
};

export type SavedEstimateInput = Omit<SavedEstimate, "id" | "savedAt"> & {
  savedAt?: string;
};

/** Keeps the localStorage payload bounded; oldest entries fall off the end. */
export const MAX_SAVED_ESTIMATES = 20;

const MAX_LINES = 40;
const MAX_LABEL_CHARS = 120;
const MAX_VALUE_CHARS = 120;
const MAX_QUERY_CHARS = 2000;

function trimTo(value: string, max: number): string {
  const trimmed = value.trim();
  return trimmed.length > max ? trimmed.slice(0, max) : trimmed;
}

function normalizeLines(value: unknown): EstimateLine[] {
  if (!Array.isArray(value)) return [];

  const lines: EstimateLine[] = [];
  for (const entry of value) {
    if (!entry || typeof entry !== "object") continue;
    const { label, value: raw } = entry as { label?: unknown; value?: unknown };
    if (typeof label !== "string" || typeof raw !== "string") continue;
    const cleanLabel = trimTo(label, MAX_LABEL_CHARS);
    const cleanValue = trimTo(raw, MAX_VALUE_CHARS);
    if (!cleanLabel || !cleanValue) continue;
    lines.push({ label: cleanLabel, value: cleanValue });
    if (lines.length >= MAX_LINES) break;
  }
  return lines;
}

/**
 * Stable identity for an estimate: the same calculator with the same inputs is
 * the same estimate. Saving twice updates the snapshot instead of filling the
 * list with near-duplicates, which is what a user pressing Save after a small
 * correction actually means.
 */
export function estimateId(calculatorId: string, query: string): string {
  return `${calculatorId}:${query}`;
}

/** Path that restores the calculator with the saved inputs. */
export function estimateHref(estimate: SavedEstimate): string {
  return estimate.query ? `${estimate.href}?${estimate.query}` : estimate.href;
}

/** The one number worth showing in a list row. */
export function estimateHeadline(estimate: SavedEstimate): EstimateLine | null {
  return estimate.results[0] ?? null;
}

/**
 * Validates one entry read back from storage. Returns null rather than throwing
 * because a single corrupt entry must not lose the rest of the list.
 */
export function normalizeEstimate(value: unknown): SavedEstimate | null {
  if (!value || typeof value !== "object") return null;

  const raw = value as Record<string, unknown>;
  const calculatorId =
    typeof raw.calculatorId === "string" ? raw.calculatorId.trim() : "";
  const title = typeof raw.title === "string" ? trimTo(raw.title, MAX_LABEL_CHARS) : "";
  const href = typeof raw.href === "string" ? raw.href.trim() : "";
  if (!calculatorId || !title || !href.startsWith("/")) return null;

  const locale = raw.locale === "es" ? "es" : "en";
  const query =
    typeof raw.query === "string"
      ? trimTo(raw.query.replace(/^\?/, ""), MAX_QUERY_CHARS)
      : "";
  const savedAt =
    typeof raw.savedAt === "string" && !Number.isNaN(Date.parse(raw.savedAt))
      ? raw.savedAt
      : new Date(0).toISOString();
  const results = normalizeLines(raw.results);
  if (results.length === 0) return null;

  return {
    id: typeof raw.id === "string" && raw.id ? raw.id : estimateId(calculatorId, query),
    calculatorId,
    locale,
    title,
    href,
    query,
    savedAt,
    inputs: normalizeLines(raw.inputs),
    results,
  };
}

/** Builds a storable estimate from what a calculator page knows. */
export function createEstimate(input: SavedEstimateInput): SavedEstimate | null {
  return normalizeEstimate({
    ...input,
    id: estimateId(input.calculatorId, input.query.replace(/^\?/, "")),
    savedAt: input.savedAt ?? new Date().toISOString(),
  });
}

export function parseEstimates(raw: string | null): SavedEstimate[] {
  if (!raw) return [];

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return [];
  }
  if (!Array.isArray(parsed)) return [];

  const seen = new Set<string>();
  const list: SavedEstimate[] = [];
  for (const entry of parsed) {
    const estimate = normalizeEstimate(entry);
    if (!estimate || seen.has(estimate.id)) continue;
    seen.add(estimate.id);
    list.push(estimate);
    if (list.length >= MAX_SAVED_ESTIMATES) break;
  }
  return list;
}

export function serializeEstimates(list: SavedEstimate[]): string {
  return JSON.stringify(list.slice(0, MAX_SAVED_ESTIMATES));
}

/** Newest first, one entry per id, capped. */
export function upsertEstimate(
  list: SavedEstimate[],
  estimate: SavedEstimate,
): SavedEstimate[] {
  const rest = list.filter((entry) => entry.id !== estimate.id);
  return [estimate, ...rest].slice(0, MAX_SAVED_ESTIMATES);
}

export function removeEstimate(list: SavedEstimate[], id: string): SavedEstimate[] {
  return list.filter((entry) => entry.id !== id);
}

export function findEstimate(
  list: SavedEstimate[],
  id: string | null | undefined,
): SavedEstimate | null {
  if (!id) return null;
  return list.find((entry) => entry.id === id) ?? null;
}
