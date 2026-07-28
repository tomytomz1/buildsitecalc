import { describe, expect, it } from "vitest";
import {
  calculateDeckBoard,
  calculateFenceMaterial,
  calculateStair,
  deckBoardDefaultInputs,
  fenceMaterialDefaultInputs,
  stairDefaultInputs,
} from "@/lib/calculators";
import { expectFail, expectOk, fieldValue } from "./helpers";

describe("calculateFenceMaterial", () => {
  it("computes posts, rails, and pickets for 100 ft fence", () => {
    const result = calculateFenceMaterial(fenceMaterialDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "posts")).toBe(14);
    expect(fieldValue(result, "rails")).toBe(39);
    expect(fieldValue(result, "pickets")).toBe(18);
  });

  it("rejects zero fence length", () => {
    expectFail(calculateFenceMaterial({ ...fenceMaterialDefaultInputs, fenceLength: 0 }));
  });
});

describe("calculateDeckBoard", () => {
  it("computes boards needed for 16×12 ft deck", () => {
    const result = calculateDeckBoard(deckBoardDefaultInputs);
    expectOk(result);
    expect((fieldValue(result, "boardsNeeded") as number)).toBeGreaterThan(0);
    expect((fieldValue(result, "deckAreaFt2") as number)).toBeCloseTo(192, 0);
  });
});

describe("calculateStair", () => {
  it("computes risers, treads, and run", () => {
    const result = calculateStair(stairDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "numberOfRisers")).toBe(16);
    expect(fieldValue(result, "numberOfTreads")).toBe(15);
    expect((fieldValue(result, "actualRiserHeight") as number)).toBeCloseTo(6.75, 2);
    expect((fieldValue(result, "totalRun") as number)).toBeCloseTo(150, 0);
  });

  it("includes building code disclaimer in meta", () => {
    const result = calculateStair(stairDefaultInputs);
    expectOk(result);
    expect(String(result.meta?.disclaimer)).toContain("building code");
  });

  it("rejects negative rise", () => {
    expectFail(calculateStair({ ...stairDefaultInputs, totalRise: -1 }));
  });
});
