import { describe, expect, it } from "vitest";
import {
  calculatePaint,
  calculateStair,
  convertPaintAreaInput,
  convertStairInputsOnUnitChange,
  paintDefaultInputs,
  preferredPaintAreaUnit,
  stairDefaultInputs,
} from "@/lib/calculators";
import { organizationJsonLd } from "@/lib/seo";
import {
  getConfiguredSocialLinks,
  isValidSocialUrl,
  siteConfig,
} from "@/config/site";
import { expectFail, expectOk, fieldValue } from "./helpers";
import { mergeInputsFromSearchParams } from "@/lib/calculators/url-state";

describe("paint metric consistency", () => {
  it("US customary default room matches known gallon estimate", () => {
    const result = calculatePaint(paintDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "gallons")).toBe(2);
    const wall = result.secondary.find((f) => f.key === "wallAreaFt2");
    expect(wall?.unit).toBe("ft²");
  });

  it("metric room dimensions yield same gallons as US equivalent", () => {
    const us = calculatePaint({
      length: 12,
      width: 10,
      height: 8,
      lengthUnit: "ft",
      widthUnit: "ft",
      heightUnit: "ft",
      doors: 1,
      windows: 2,
      coats: 2,
      coverageRate: 350,
      coverageRateUnit: "ft2",
      wastePercent: 0,
    });
    const metric = calculatePaint({
      length: 12 * 0.3048,
      width: 10 * 0.3048,
      height: 8 * 0.3048,
      lengthUnit: "m",
      widthUnit: "m",
      heightUnit: "m",
      doors: 1,
      windows: 2,
      coats: 2,
      coverageRate: 350 * 0.09290304,
      coverageRateUnit: "m2",
      wastePercent: 0,
    });
    expectOk(us);
    expectOk(metric);
    expect(fieldValue(us, "gallons")).toBe(fieldValue(metric, "gallons"));
    const metricWall = metric.secondary.find((f) => f.key === "wallAreaFt2");
    expect(metricWall?.unit).toBe("m²");
  });

  it("custom door/window openings honor area units", () => {
    const ft = calculatePaint({
      wallArea: 400,
      wallAreaUnit: "ft2",
      doorArea: 21,
      doorAreaUnit: "ft2",
      windowArea: 30,
      windowAreaUnit: "ft2",
      coats: 1,
      coverageRate: 350,
      coverageRateUnit: "ft2",
      wastePercent: 0,
    });
    const m2 = calculatePaint({
      wallArea: convertPaintAreaInput(400, "ft2", "m2"),
      wallAreaUnit: "m2",
      doorArea: convertPaintAreaInput(21, "ft2", "m2"),
      doorAreaUnit: "m2",
      windowArea: convertPaintAreaInput(30, "ft2", "m2"),
      windowAreaUnit: "m2",
      coats: 1,
      coverageRate: convertPaintAreaInput(350, "ft2", "m2"),
      coverageRateUnit: "m2",
      wastePercent: 0,
    });
    expectOk(ft);
    expectOk(m2);
    expect(fieldValue(ft, "gallons")).toBe(fieldValue(m2, "gallons"));
  });

  it("rejects invalid opening area", () => {
    expectFail(
      calculatePaint({
        ...paintDefaultInputs,
        doorArea: -1,
        doorAreaUnit: "ft2",
      }),
    );
  });

  it("unit switch helper preserves physical opening area", () => {
    const converted = convertPaintAreaInput(21, "ft2", "m2");
    expect(converted).toBeCloseTo(1.950964, 4);
    expect(convertPaintAreaInput(converted, "m2", "ft2")).toBeCloseTo(21, 3);
  });

  it("preferred display unit follows metric inputs", () => {
    expect(preferredPaintAreaUnit(paintDefaultInputs)).toBe("ft2");
    expect(
      preferredPaintAreaUnit({
        ...paintDefaultInputs,
        lengthUnit: "m",
        widthUnit: "m",
        heightUnit: "m",
      }),
    ).toBe("m2");
  });

  it("URL state restores coverage and opening units", () => {
    const params = new URLSearchParams(
      "length=3.66&width=3.05&height=2.44&lengthUnit=m&widthUnit=m&heightUnit=m&coverageRate=32.5&coverageRateUnit=m2&doorAreaUnit=m2&windowAreaUnit=m2&doors=1&windows=2&coats=2&wastePercent=10",
    );
    const merged = mergeInputsFromSearchParams(
      paintDefaultInputs as unknown as Record<string, unknown>,
      params,
    );
    expect(merged.lengthUnit).toBe("m");
    expect(merged.coverageRateUnit).toBe("m2");
    expect(merged.doorAreaUnit).toBe("m2");
    const result = calculatePaint(merged as unknown as typeof paintDefaultInputs);
    expectOk(result);
  });
});

describe("stair unit handling", () => {
  it("default inches geometry uses ceil risers and stringer length", () => {
    const result = calculateStair(stairDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "numberOfRisers")).toBe(16);
    expect(fieldValue(result, "numberOfTreads")).toBe(15);
    expect(fieldValue(result, "actualRiserHeight")).toBeCloseTo(6.75, 2);
    expect(fieldValue(result, "totalRun")).toBe(150);
    expect(fieldValue(result, "stringerLength", "secondary")).toBeCloseTo(
      184.88,
      1,
    );
    expect(result.primary.find((f) => f.key === "totalRun")?.unit).toBe("in");
  });

  it("feet inputs match inch physical meaning (never treat inches as feet)", () => {
    const inches = calculateStair({
      totalRise: 108,
      lengthUnit: "in",
      riserHeight: 7,
      treadDepth: 10,
    });
    const feet = calculateStair({
      totalRise: 9,
      lengthUnit: "ft",
      riserHeight: 7 / 12,
      treadDepth: 10 / 12,
    });
    expectOk(inches);
    expectOk(feet);
    expect(fieldValue(inches, "numberOfRisers")).toBe(
      fieldValue(feet, "numberOfRisers"),
    );
    expect(fieldValue(feet, "actualRiserHeight")).toBeCloseTo(6.75 / 12, 2);
  });

  it("unit switch preserves physical values", () => {
    const converted = convertStairInputsOnUnitChange(
      {
        totalRise: 108,
        lengthUnit: "in",
        riserHeight: 7,
        treadDepth: 10,
        stairWidth: 36,
      },
      "in",
      "ft",
    );
    expect(converted.lengthUnit).toBe("ft");
    expect(converted.totalRise).toBeCloseTo(9, 4);
    expect(converted.riserHeight).toBeCloseTo(7 / 12, 4);
    expect(converted.treadDepth).toBeCloseTo(10 / 12, 4);
    expect(converted.stairWidth).toBeCloseTo(3, 4);
  });

  it("metric mm path converts results to mm", () => {
    const result = calculateStair({
      totalRise: 2743.2, // 108 in
      lengthUnit: "mm",
      riserHeight: 177.8, // 7 in
      treadDepth: 254, // 10 in
    });
    expectOk(result);
    expect(fieldValue(result, "numberOfRisers")).toBe(16);
    expect(result.primary.find((f) => f.key === "actualRiserHeight")?.unit).toBe(
      "mm",
    );
  });

  it("URL state restores shared length unit", () => {
    const params = new URLSearchParams(
      "totalRise=9&lengthUnit=ft&riserHeight=0.5833&treadDepth=0.8333",
    );
    const merged = mergeInputsFromSearchParams(
      stairDefaultInputs as unknown as Record<string, unknown>,
      params,
    );
    expect(merged.lengthUnit).toBe("ft");
    expectOk(calculateStair(merged as unknown as typeof stairDefaultInputs));
  });
});

describe("social configuration safety", () => {
  it("rejects empty and invalid social URLs", () => {
    expect(isValidSocialUrl("")).toBe(false);
    expect(isValidSocialUrl("   ")).toBe(false);
    expect(isValidSocialUrl("not-a-url")).toBe(false);
    expect(isValidSocialUrl("https://example.com/buildsitecalc")).toBe(true);
  });

  it("omits empty social profiles from configured links and Organization JSON-LD", () => {
    expect(Object.values(siteConfig.social).every((v) => v === "")).toBe(true);
    expect(getConfiguredSocialLinks()).toEqual([]);
    const org = organizationJsonLd();
    expect(org).not.toHaveProperty("sameAs");
    expect(JSON.stringify(org)).not.toMatch(/""/);
  });
});
