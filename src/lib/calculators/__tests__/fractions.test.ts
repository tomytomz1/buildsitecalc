import { describe, expect, it } from "vitest";
import { parseFraction, toFractionString } from "@/lib/calculators";

describe("parseFraction", () => {
  it("parses mixed numbers with space", () => {
    expect(parseFraction("10 1/2")).toBeCloseTo(10.5, 6);
  });

  it("parses simple fractions", () => {
    expect(parseFraction("3/4")).toBeCloseTo(0.75, 6);
  });

  it("parses decimals", () => {
    expect(parseFraction("12.5")).toBeCloseTo(12.5, 6);
  });

  it("parses hyphen mixed numbers", () => {
    expect(parseFraction("10-1/2")).toBeCloseTo(10.5, 6);
  });

  it("parses numeric input", () => {
    expect(parseFraction(8)).toBe(8);
  });

  it("returns null for invalid input", () => {
    expect(parseFraction("")).toBeNull();
    expect(parseFraction("abc")).toBeNull();
    expect(parseFraction("1/0")).toBeNull();
    expect(parseFraction(NaN)).toBeNull();
  });
});

describe("toFractionString", () => {
  it("formats whole numbers", () => {
    expect(toFractionString(10)).toBe("10");
  });

  it("formats mixed fractions", () => {
    expect(toFractionString(10.5)).toBe("10 1/2");
  });
});
