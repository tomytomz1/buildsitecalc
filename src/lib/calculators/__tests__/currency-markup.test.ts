import { describe, expect, it } from "vitest";
import {
  calculateLaborMarkup,
  laborMarkupDefaultInputs,
  marginFromMarkup,
  markupFromMargin,
  priceFromMarkup,
} from "@/lib/calculators";
import { expectClose, expectOk, fieldValue } from "./helpers";

describe("markup/margin inverse relationship", () => {
  const cases = [5, 10, 15, 20, 25, 33.33, 50];

  for (const markup of cases) {
    it(`round-trips ${markup}% markup`, () => {
      const margin = marginFromMarkup(markup);
      expect(markupFromMargin(margin)).toBeCloseTo(markup, 2);
    });
  }

  it("price from markup matches labor calculator in markup mode", () => {
    const jobCost = 1000;
    const markup = 25;
    const expectedPrice = priceFromMarkup(jobCost, markup);

    const result = calculateLaborMarkup({
      ...laborMarkupDefaultInputs,
      jobCost,
      mode: "markup",
      percent: markup,
    });

    expectOk(result);
    expectClose(fieldValue(result, "sellingPrice") as number, expectedPrice, 2);
    expectClose(fieldValue(result, "effectiveMargin", "secondary") as number, marginFromMarkup(markup), 2);
  });

  it("margin mode derives equivalent markup", () => {
    const result = calculateLaborMarkup({
      jobCost: 800,
      mode: "margin",
      percent: 20,
    });

    expectOk(result);
    expectClose(fieldValue(result, "effectiveMarkup", "secondary") as number, markupFromMargin(20), 2);
    expectClose(fieldValue(result, "sellingPrice") as number, 1000, 2);
  });
});

describe("calculateLaborMarkup validation", () => {
  it("rejects zero job cost", () => {
    const result = calculateLaborMarkup({ jobCost: 0, mode: "markup", percent: 25 });
    expect(result.ok).toBe(false);
  });

  it("rejects margin at or above 100%", () => {
    const result = calculateLaborMarkup({ jobCost: 100, mode: "margin", percent: 100 });
    expect(result.ok).toBe(false);
  });
});
