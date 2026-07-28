import { describe, expect, it } from "vitest";
import {
  calculateFlooring,
  calculateRoofingShingle,
  calculateTile,
  flooringDefaultInputs,
  roofingShingleDefaultInputs,
  tileDefaultInputs,
} from "@/lib/calculators";
import { expectFail, expectOk, fieldValue } from "./helpers";

describe("calculateFlooring", () => {
  it("computes area with waste for 12×10 ft room", () => {
    const result = calculateFlooring(flooringDefaultInputs);
    expectOk(result);
    expect((fieldValue(result, "areaWithWasteFt2") as number)).toBeCloseTo(132, 0);
    expect(fieldValue(result, "packsNeeded")).toBe(7);
  });

  it("rejects missing area and dimensions", () => {
    expectFail(calculateFlooring({ wastePercent: 10 }));
  });
});

describe("calculateTile", () => {
  it("computes tile count for 10×8 ft area with 12×12 tiles", () => {
    const result = calculateTile(tileDefaultInputs);
    expectOk(result);
    expect((fieldValue(result, "tilesNeeded") as number)).toBeGreaterThan(0);
  });

  it("rejects zero tile dimensions", () => {
    expectFail(calculateTile({ ...tileDefaultInputs, tileLength: 0 }));
  });
});

describe("calculateRoofingShingle", () => {
  it("computes squares and bundles from footprint and pitch", () => {
    const result = calculateRoofingShingle(roofingShingleDefaultInputs);
    expectOk(result);
    expect((fieldValue(result, "squares") as number)).toBeGreaterThan(0);
    expect((fieldValue(result, "bundles") as number)).toBeGreaterThan(0);
  });

  it("accepts direct roof area without pitch", () => {
    const result = calculateRoofingShingle({
      roofArea: 1500,
      roofAreaUnit: "ft2",
      wastePercent: 10,
      bundlesPerSquare: 3,
    });
    expectOk(result);
    expect((fieldValue(result, "squares") as number)).toBeCloseTo(16.5, 0);
  });
});
