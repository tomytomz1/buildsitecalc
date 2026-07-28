import { describe, expect, it } from "vitest";
import {
  calculateConcreteSlab,
  calculateDeckBoard,
  calculateFenceMaterial,
  calculateHvacBtu,
  calculateInsulation,
  calculatePaint,
  calculateRoofingShingle,
  calculateStair,
  calculateTopsoil,
  deckBoardDefaultInputs,
  fenceMaterialDefaultInputs,
  insulationDefaultInputs,
  paintDefaultInputs,
  roofingShingleDefaultInputs,
  stairDefaultInputs,
  topsoilDefaultInputs,
} from "@/lib/calculators";
import { expectClose, expectFail, expectOk, fieldValue } from "./helpers";

describe("independent math audit regressions", () => {
  it("concrete slab metric path matches SI volume with waste", () => {
    const result = calculateConcreteSlab({
      length: 3,
      width: 3,
      thickness: 10,
      lengthUnit: "m",
      widthUnit: "m",
      thicknessUnit: "cm",
      wastePercent: 0,
    });
    expectOk(result);
    expectClose(fieldValue(result, "volumeM3", "secondary") as number, 0.9, 2);
  });

  it("paint default room yields 2.00 gal purchase quantity", () => {
    const result = calculatePaint(paintDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "gallons")).toBe(2);
    expectClose(fieldValue(result, "gallonsExact") as number, 1.89, 2);
  });

  it("roofing pitch path yields ~13.91 squares and 42 bundles", () => {
    const result = calculateRoofingShingle(roofingShingleDefaultInputs);
    expectOk(result);
    expectClose(fieldValue(result, "squares") as number, 13.91, 2);
    expect(fieldValue(result, "bundles")).toBe(42);
  });

  it("fence pickets use inch width/gap independent of fence feet", () => {
    const result = calculateFenceMaterial(fenceMaterialDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "pickets")).toBe(214);
  });

  it("deck boards use inch board width/gap independent of deck feet", () => {
    const result = calculateDeckBoard(deckBoardDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "boardsNeeded")).toBe(58);
  });

  it("insulation defaults to 48 in batt length -> 110 batts", () => {
    const result = calculateInsulation(insulationDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "battsNeeded")).toBe(110);
  });

  it("HVAC BTU default room -> 6000 BTU/h and Manual J disclaimer", () => {
    const result = calculateHvacBtu({
      length: 20,
      width: 15,
      height: 8,
      lengthUnit: "ft",
      btuPerSqFt: 20,
      climateFactor: 1,
      insulationFactor: 1,
      sunFactor: 1,
    });
    expectOk(result);
    expect(fieldValue(result, "estimatedBtu")).toBe(6000);
    expect(String(result.meta?.manualJDisclaimer)).toMatch(/Manual J/i);
  });

  it("stair geometry includes code disclaimer", () => {
    const result = calculateStair(stairDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "numberOfRisers")).toBe(16);
    expect(String(result.meta?.disclaimer)).toMatch(/building code/i);
  });

  it("rejects NaN waste on topsoil", () => {
    expectFail(calculateTopsoil({ ...topsoilDefaultInputs, wastePercent: Number.NaN }));
  });
});