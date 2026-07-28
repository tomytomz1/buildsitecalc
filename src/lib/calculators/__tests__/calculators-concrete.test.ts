import { describe, expect, it } from "vitest";
import {
  applyWaste,
  calculateConcreteBags,
  calculateConcreteSlab,
  concreteBagsDefaultInputs,
  concreteSlabDefaultInputs,
} from "@/lib/calculators";
import { expectClose, expectFail, expectOk, fieldValue } from "./helpers";

const slabInputs = {
  length: 10,
  width: 10,
  thickness: 4,
  lengthUnit: "ft" as const,
  widthUnit: "ft" as const,
  thicknessUnit: "in" as const,
  wastePercent: 0,
};

describe("calculateConcreteSlab", () => {
  it("computes ~1.23 yd³ for 10×10 ft slab, 4 in thick (before waste)", () => {
    const result = calculateConcreteSlab(slabInputs);
    expectOk(result);
    expectClose(fieldValue(result, "baseVolumeYd3", "secondary") as number, 1.23, 2);
  });

  it("applies 10% waste to reach ~1.36 yd³", () => {
    const result = calculateConcreteSlab({ ...slabInputs, wastePercent: 10 });
    expectOk(result);
    expectClose(fieldValue(result, "volumeYd3") as number, 1.36, 2);
  });

  it("matches default inputs principal path", () => {
    const result = calculateConcreteSlab(concreteSlabDefaultInputs);
    expectOk(result);
    expectClose(fieldValue(result, "volumeYd3") as number, 1.36, 2);
  });

  it("rejects zero thickness", () => {
    expectFail(calculateConcreteSlab({ ...slabInputs, thickness: 0 }));
  });

  it("rejects negative waste", () => {
    expectFail(calculateConcreteSlab({ ...slabInputs, wastePercent: -5 }));
  });

  it("allows zero waste", () => {
    const result = calculateConcreteSlab({ ...slabInputs, wastePercent: 0 });
    expectOk(result);
    expectClose(fieldValue(result, "volumeYd3") as number, 1.23, 2);
  });

  it("handles high waste factor", () => {
    const result = calculateConcreteSlab({ ...slabInputs, wastePercent: 50 });
    expectOk(result);
    const base = fieldValue(result, "baseVolumeYd3", "secondary") as number;
    expectClose(fieldValue(result, "volumeYd3") as number, applyWaste(base, 50), 1);
  });
});

describe("calculateConcreteBags", () => {
  it("computes bag count from known volume", () => {
    const result = calculateConcreteBags({
      volume: 3,
      volumeUnit: "ft3",
      bagSize: 80,
      wastePercent: 0,
    });
    expectOk(result);
    expect(fieldValue(result, "bagsNeeded")).toBe(5);
  });

  it("computes bags from dimensions (10×10 ft, 4 in, 60 lb bags, 10% waste)", () => {
    const result = calculateConcreteBags(concreteBagsDefaultInputs);
    expectOk(result);
    const bags = fieldValue(result, "bagsNeeded") as number;
    expect(bags).toBeGreaterThan(0);
    expect(bags).toBe(82);
  });

  it("rejects missing volume and dimensions", () => {
    expectFail(
      calculateConcreteBags({
        bagSize: 60,
      }),
    );
  });
});
