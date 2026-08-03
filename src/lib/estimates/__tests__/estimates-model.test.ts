import { describe, expect, it } from "vitest";
import { calculatePaint, paintDefaultInputs } from "@/lib/calculators";
import {
  buildInputsQuery,
  mergeInputsFromSearchParams,
} from "@/lib/calculators/url-state";
import {
  createEstimate,
  estimateHeadline,
  estimateHref,
  estimateId,
  findEstimate,
  MAX_SAVED_ESTIMATES,
  normalizeEstimate,
  parseEstimates,
  removeEstimate,
  serializeEstimates,
  upsertEstimate,
  type SavedEstimate,
} from "@/lib/estimates/model";
import { describeInputLines } from "@/lib/estimates/snapshot";

function sample(overrides: Partial<SavedEstimate> = {}): SavedEstimate {
  const estimate = createEstimate({
    calculatorId: "paint",
    locale: "en",
    title: "Paint calculator",
    href: "/en/calculators/paint",
    query: "length=20&width=15",
    inputs: [{ label: "Length", value: "20" }],
    results: [{ label: "Gallons needed", value: "2.5 gal" }],
    savedAt: "2026-08-03T12:00:00.000Z",
  });
  if (!estimate) throw new Error("sample estimate failed to normalize");
  return { ...estimate, ...overrides };
}

describe("saved estimate model", () => {
  it("derives a stable id from calculator and inputs", () => {
    const first = sample();
    const second = sample();
    expect(first.id).toBe(second.id);
    expect(first.id).toBe(estimateId("paint", "length=20&width=15"));
  });

  it("re-saving the same numbers updates in place instead of duplicating", () => {
    const original = sample();
    const updated = sample({
      results: [{ label: "Gallons needed", value: "3 gal" }],
      savedAt: "2026-08-04T12:00:00.000Z",
    });

    const list = upsertEstimate(upsertEstimate([], original), updated);

    expect(list).toHaveLength(1);
    expect(list[0].results[0].value).toBe("3 gal");
  });

  it("keeps the newest first and caps the list", () => {
    let list: SavedEstimate[] = [];
    for (let i = 0; i < MAX_SAVED_ESTIMATES + 5; i += 1) {
      list = upsertEstimate(list, sample({ id: `paint:${i}`, query: `length=${i}` }));
    }

    expect(list).toHaveLength(MAX_SAVED_ESTIMATES);
    expect(list[0].id).toBe(`paint:${MAX_SAVED_ESTIMATES + 4}`);
  });

  it("round-trips through storage serialization", () => {
    const list = [sample(), sample({ id: "tile:x", query: "tileWidth=12" })];
    const parsed = parseEstimates(serializeEstimates(list));

    expect(parsed).toHaveLength(2);
    expect(parsed[0]).toEqual(list[0]);
  });

  it("survives corrupt storage without losing valid entries", () => {
    const raw = JSON.stringify([
      sample(),
      null,
      "nonsense",
      { calculatorId: "paint" },
      { ...sample({ id: "no-results" }), results: [] },
    ]);

    expect(parseEstimates(raw)).toHaveLength(1);
    expect(parseEstimates("{not json")).toEqual([]);
    expect(parseEstimates(null)).toEqual([]);
  });

  it("drops entries that could not produce a usable sheet", () => {
    expect(normalizeEstimate({ ...sample(), href: "en/calculators/paint" })).toBeNull();
    expect(normalizeEstimate({ ...sample(), title: "   " })).toBeNull();
    expect(normalizeEstimate(undefined)).toBeNull();
  });

  it("normalizes a leading question mark out of the query", () => {
    const estimate = createEstimate({
      calculatorId: "mulch",
      locale: "es",
      title: "Mantillo",
      href: "/es/calculators/mantillo",
      query: "?area=100",
      inputs: [],
      results: [{ label: "Yardas cubicas", value: "1,2" }],
    });

    expect(estimate?.query).toBe("area=100");
    expect(estimate && estimateHref(estimate)).toBe("/es/calculators/mantillo?area=100");
  });

  it("removes and finds by id", () => {
    const list = [sample(), sample({ id: "tile:x" })];
    expect(removeEstimate(list, "tile:x")).toHaveLength(1);
    expect(findEstimate(list, "tile:x")?.id).toBe("tile:x");
    expect(findEstimate(list, null)).toBeNull();
  });

  it("uses the first result as the list headline", () => {
    expect(estimateHeadline(sample())?.value).toBe("2.5 gal");
    expect(estimateHeadline(sample({ results: [] }))).toBeNull();
  });
});

describe("saved estimate snapshot", () => {
  it("describes scalar inputs with localized labels and skips repeating inputs", () => {
    const inputs = {
      length: 20,
      width: 15,
      includeCeiling: true,
      lengthUnit: "ft",
      rooms: [{ length: 3 }],
      blank: "",
    };
    const defaults = {
      length: 0,
      width: 0,
      includeCeiling: false,
      lengthUnit: "ft",
      rooms: [],
      blank: "",
    };

    const lines = describeInputLines(
      inputs,
      defaults,
      { length: "Length", width: "Width", includeCeiling: "Include ceiling" },
      "en",
    );

    expect(lines).toEqual([
      { label: "Length", value: "20" },
      { label: "Width", value: "15" },
      { label: "Include ceiling", value: "Yes" },
      { label: "lengthUnit", value: "ft" },
    ]);
  });

  it("formats numbers and booleans in Spanish", () => {
    const lines = describeInputLines(
      { area: 1234.5, primer: false },
      { area: 0, primer: false },
      { area: "Area", primer: "Imprimante" },
      "es",
    );

    // es-ES uses a decimal comma and omits grouping below five digits.
    expect(lines[0].value).toBe("1234,5");
    expect(lines[1].value).toBe("No");
  });

  it("saves a query that restores the same inputs through the engine", () => {
    const inputs = { ...paintDefaultInputs, length: 24, width: 14 };
    const output = calculatePaint(inputs);
    expect(output.ok).toBe(true);
    if (!output.ok) return;

    const query = buildInputsQuery(
      output.inputs as unknown as Record<string, unknown>,
      paintDefaultInputs as unknown as Record<string, unknown>,
    );
    const restored = mergeInputsFromSearchParams(
      paintDefaultInputs as unknown as Record<string, unknown>,
      new URLSearchParams(query),
    );
    const rerun = calculatePaint(restored as unknown as typeof paintDefaultInputs);

    expect(rerun.ok).toBe(true);
    if (!rerun.ok) return;
    expect(rerun.primary).toEqual(output.primary);
  });
});
