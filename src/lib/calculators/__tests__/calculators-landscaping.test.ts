import { describe, expect, it } from "vitest";
import {
  calculateGravel,
  calculateMulch,
  calculateTopsoil,
  GRAVEL_DENSITIES_KG_M3,
  gravelDefaultInputs,
  mulchDefaultInputs,
  topsoilDefaultInputs,
} from "@/lib/calculators";
import { expectFail, expectOk, fieldValue } from "./helpers";

describe("calculateMulch", () => {
  it("computes cubic yards for bed area and depth", () => {
    const result = calculateMulch(mulchDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "volumeYd3") as number).toBeGreaterThan(0);
    expect(fieldValue(result, "bagsNeeded")).toBeGreaterThan(0);
  });

  it("rejects zero depth", () => {
    expectFail(calculateMulch({ ...mulchDefaultInputs, depth: 0 }));
  });
});

describe("calculateGravel", () => {
  it("computes tons with density disclosure in meta", () => {
    const result = calculateGravel(gravelDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "tons") as number).toBeGreaterThan(0);
    expect(result.meta?.disclosure).toContain("Bulk density");
    expect(result.meta?.densityKgM3).toBe(GRAVEL_DENSITIES_KG_M3.crushed);
  });

  it("supports custom density", () => {
    const result = calculateGravel({
      ...gravelDefaultInputs,
      customDensityKgM3: 1700,
      densityKey: undefined,
    });
    expectOk(result);
    expect(result.meta?.densitySource).toBe("custom");
  });
});

describe("calculateTopsoil", () => {
  it("computes volume for area and depth", () => {
    const result = calculateTopsoil(topsoilDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "volumeYd3") as number).toBeGreaterThan(0);
  });

  it("rejects negative area", () => {
    expectFail(calculateTopsoil({ ...topsoilDefaultInputs, area: -10 }));
  });
});
