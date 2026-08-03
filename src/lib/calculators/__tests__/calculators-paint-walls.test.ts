import { describe, expect, it } from "vitest";
import {
  calculateDrywall,
  calculatePaint,
  calculateWallpaper,
  drywallDefaultInputs,
  paintCoverageForGallons,
  paintDefaultInputs,
  wallpaperDefaultInputs,
} from "@/lib/calculators";
import { expectFail, expectOk, fieldValue } from "./helpers";

describe("calculatePaint", () => {
  it("estimates gallons from room dimensions", () => {
    const result = calculatePaint(paintDefaultInputs);
    expectOk(result);
    const gallons = fieldValue(result, "gallons") as number;
    expect(gallons).toBeGreaterThan(0);
    expect(gallons).toBe(2);
  });

  it("computes from direct wall area", () => {
    const result = calculatePaint({
      wallArea: 400,
      wallAreaUnit: "ft2",
      coats: 1,
      coverageRate: 350,
      wastePercent: 0,
    });
    expectOk(result);
    expect(fieldValue(result, "gallons")).toBe(1.25);
  });

  it("rejects zero coats", () => {
    expectFail(calculatePaint({ ...paintDefaultInputs, coats: 0 }));
  });
});

describe("paintCoverageForGallons", () => {
  it("answers how many square feet one gallon covers", () => {
    const result = paintCoverageForGallons({ gallons: 1 });
    expect(result?.areaFt2).toBe(350);
  });

  it("answers how many square feet 5 gallons covers", () => {
    expect(paintCoverageForGallons({ gallons: 5 })?.areaFt2).toBe(1750);
  });

  it("halves coverage for a second coat", () => {
    expect(paintCoverageForGallons({ gallons: 5, coats: 2 })?.areaFt2).toBe(875);
  });

  it("scales quart and pint containers", () => {
    expect(paintCoverageForGallons({ gallons: 0.25 })?.areaFt2).toBe(87.5);
    expect(paintCoverageForGallons({ gallons: 0.125 })?.areaFt2).toBe(43.8);
  });

  it("honours a non-default coverage rate", () => {
    expect(paintCoverageForGallons({ gallons: 1, coverageRate: 400 })?.areaFt2).toBe(400);
    // Stucco and masonry are the low end of the published spread rates.
    expect(paintCoverageForGallons({ gallons: 1, coverageRate: 175 })?.areaFt2).toBe(175);
  });

  it("accepts a metric coverage rate", () => {
    const result = paintCoverageForGallons({
      gallons: 1,
      coverageRate: 32,
      coverageRateUnit: "m2",
    });
    expect(result?.areaM2).toBe(32);
  });

  it("reduces coverage by the waste allowance", () => {
    // 350 / 1.10 = 318.18
    expect(paintCoverageForGallons({ gallons: 1, wastePercent: 10 })?.areaFt2).toBe(
      318.2,
    );
  });

  it("rejects non-positive and non-finite input", () => {
    expect(paintCoverageForGallons({ gallons: 0 })).toBeNull();
    expect(paintCoverageForGallons({ gallons: -1 })).toBeNull();
    expect(paintCoverageForGallons({ gallons: Number.NaN })).toBeNull();
    expect(paintCoverageForGallons({ gallons: 1, coats: 0 })).toBeNull();
    expect(paintCoverageForGallons({ gallons: 1, coverageRate: 0 })).toBeNull();
    expect(paintCoverageForGallons({ gallons: 1, wastePercent: -5 })).toBeNull();
  });

  // The two directions have to stay algebraically consistent, otherwise the
  // page would show a coverage figure that contradicts its own calculator.
  it("inverts the forward calculation exactly", () => {
    const wallArea = 400;
    const coats = 2;
    const coverageRate = 350;

    const forward = calculatePaint({
      wallArea,
      wallAreaUnit: "ft2",
      coats,
      coverageRate,
      wastePercent: 0,
    });
    expectOk(forward);
    const gallonsExact = fieldValue(forward, "gallonsExact") as number;

    const back = paintCoverageForGallons({ gallons: gallonsExact, coats, coverageRate });

    // `gallonsExact` is published rounded to 2 decimals, which caps round-trip
    // precision at 0.005 gal x 350 / 2 coats = 0.875 ft². Anything beyond that
    // is a genuine algebra mismatch, not display rounding.
    expect(Math.abs((back?.areaFt2 ?? 0) - wallArea)).toBeLessThan(0.9);
  });
});

describe("calculateDrywall", () => {
  it("computes sheet count for 352 ft² wall/ceiling area", () => {
    const result = calculateDrywall(drywallDefaultInputs);
    expectOk(result);
    const sheets = fieldValue(result, "sheetsNeeded") as number;
    expect(sheets).toBe(13);
  });

  it("rejects negative waste", () => {
    expectFail(calculateDrywall({ ...drywallDefaultInputs, wastePercent: -1 }));
  });
});

describe("calculateWallpaper", () => {
  it("computes rolls from perimeter and height", () => {
    const result = calculateWallpaper(wallpaperDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "rollsNeeded") as number).toBeGreaterThan(0);
  });

  it("requires perimeter or walls", () => {
    expectFail(
      calculateWallpaper({
        ...wallpaperDefaultInputs,
        wallPerimeter: undefined,
        walls: undefined,
      }),
    );
  });
});
