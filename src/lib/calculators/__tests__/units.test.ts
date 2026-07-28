import { describe, expect, it } from "vitest";
import {
  applyWaste,
  convertArea,
  convertLength,
  convertMass,
  convertVolume,
  fromCubicMeters,
  fromKilograms,
  fromMeters,
  fromSquareMeters,
  marginFromMarkup,
  markupFromMargin,
  priceFromMarkup,
  toCubicMeters,
  toKilograms,
  toMeters,
  toSquareMeters,
} from "@/lib/calculators";

describe("convertLength", () => {
  it("converts feet to meters and back", () => {
    expect(convertLength(10, "ft", "m")).toBeCloseTo(3.048, 4);
    expect(convertLength(3.048, "m", "ft")).toBeCloseTo(10, 4);
  });

  it("converts inches to feet", () => {
    expect(convertLength(12, "in", "ft")).toBeCloseTo(1, 6);
  });

  it("converts yards to feet", () => {
    expect(convertLength(1, "yd", "ft")).toBeCloseTo(3, 6);
  });

  it("converts via toMeters/fromMeters helpers", () => {
    expect(fromMeters(toMeters(100, "cm"), "m")).toBeCloseTo(1, 6);
  });
});

describe("convertArea", () => {
  it("converts square feet to square meters", () => {
    expect(convertArea(10, "ft2", "m2")).toBeCloseTo(0.929, 3);
    expect(fromSquareMeters(toSquareMeters(1, "m2"), "ft2")).toBeCloseTo(10.7639, 3);
  });

  it("converts square yards to square feet", () => {
    expect(convertArea(1, "yd2", "ft2")).toBeCloseTo(9, 4);
  });
});

describe("convertVolume", () => {
  it("converts cubic yards to cubic meters", () => {
    expect(convertVolume(1, "yd3", "m3")).toBeCloseTo(0.7646, 3);
    expect(fromCubicMeters(toCubicMeters(27, "ft3"), "yd3")).toBeCloseTo(1, 4);
  });

  it("converts gallons to liters via m3", () => {
    expect(convertVolume(1, "gal", "L")).toBeCloseTo(3.785, 3);
  });
});

describe("convertMass", () => {
  it("converts pounds to kilograms", () => {
    expect(convertMass(1, "lb", "kg")).toBeCloseTo(0.4536, 4);
    expect(fromKilograms(toKilograms(1000, "kg"), "tonne")).toBeCloseTo(1, 6);
  });

  it("converts US tons to pounds", () => {
    expect(convertMass(1, "ton", "lb")).toBeCloseTo(2000, 0);
  });
});

describe("applyWaste", () => {
  it("adds waste percentage", () => {
    expect(applyWaste(100, 10)).toBeCloseTo(110, 6);
    expect(applyWaste(1.23, 10)).toBeCloseTo(1.353, 3);
  });

  it("returns base quantity when waste is zero", () => {
    expect(applyWaste(50, 0)).toBeCloseTo(50, 6);
  });
});

describe("markup and margin", () => {
  it("converts markup to margin and back", () => {
    const markup = 25;
    const margin = marginFromMarkup(markup);
    expect(margin).toBeCloseTo(20, 4);
    expect(markupFromMargin(margin)).toBeCloseTo(markup, 4);
  });

  it("computes selling price from markup", () => {
    expect(priceFromMarkup(1000, 25)).toBeCloseTo(1250, 4);
  });

  it("returns infinity for 100% margin target", () => {
    expect(markupFromMargin(100)).toBe(Number.POSITIVE_INFINITY);
  });
});
