import { describe, expect, it } from "vitest";
import {
  calculateDumpsterSize,
  calculateHvacBtu,
  calculateInsulation,
  calculateMovingTruckSize,
  dumpsterSizeDefaultInputs,
  hvacBtuDefaultInputs,
  insulationDefaultInputs,
  movingTruckSizeDefaultInputs,
} from "@/lib/calculators";
import { expectFail, expectOk, fieldValue } from "./helpers";

describe("calculateInsulation", () => {
  it("computes batts for insulated area", () => {
    const result = calculateInsulation(insulationDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "battsNeeded") as number).toBeGreaterThan(0);
  });
});

describe("calculateHvacBtu", () => {
  it("estimates BTU and tonnage from room size", () => {
    const result = calculateHvacBtu(hvacBtuDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "estimatedBtu")).toBe(6000);
    expect(fieldValue(result, "tonnage") as number).toBeCloseTo(0.5, 2);
  });

  it("includes Manual J disclaimer in meta", () => {
    const result = calculateHvacBtu(hvacBtuDefaultInputs);
    expectOk(result);
    expect(String(result.meta?.manualJDisclaimer)).toContain("Manual J");
  });

  it("rejects zero room dimensions", () => {
    expectFail(calculateHvacBtu({ ...hvacBtuDefaultInputs, length: 0 }));
  });
});

describe("calculateMovingTruckSize", () => {
  it("recommends truck from bedroom count", () => {
    const result = calculateMovingTruckSize(movingTruckSizeDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "recommendedTruck")).toBe("15 ft truck");
    expect(fieldValue(result, "estimatedVolumeFt3", "secondary")).toBe(800);
  });

  it("uses cubic feet when provided", () => {
    const result = calculateMovingTruckSize({ cubicFeet: 350 });
    expectOk(result);
    expect(fieldValue(result, "recommendedTruck")).toBe("10 ft truck");
  });
});

describe("calculateDumpsterSize", () => {
  it("recommends dumpster for kitchen remodel preset", () => {
    const result = calculateDumpsterSize(dumpsterSizeDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "recommendedSizeYd3")).toBe(10);
  });

  it("requires cubic yards for custom project", () => {
    expectFail(calculateDumpsterSize({ projectType: "custom" }));
  });

  it("recommends larger dumpster for high custom volume", () => {
    const result = calculateDumpsterSize({ projectType: "custom", cubicYards: 25 });
    expectOk(result);
    expect(fieldValue(result, "recommendedSizeYd3")).toBe(30);
  });
});
