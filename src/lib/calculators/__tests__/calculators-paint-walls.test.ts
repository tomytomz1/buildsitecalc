import { describe, expect, it } from "vitest";
import {
  calculateDrywall,
  calculatePaint,
  calculateWallpaper,
  drywallDefaultInputs,
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

describe("calculateDrywall", () => {
  it("computes sheet count for 12×10 ft room", () => {
    const result = calculateDrywall(drywallDefaultInputs);
    expectOk(result);
    const sheets = fieldValue(result, "sheetsNeeded") as number;
    expect(sheets).toBeGreaterThan(0);
    expect(sheets).toBe(5);
  });

  it("rejects negative waste", () => {
    expectFail(calculateDrywall({ ...drywallDefaultInputs, wastePercent: -1 }));
  });
});

describe("calculateWallpaper", () => {
  it("computes rolls from perimeter and height", () => {
    const result = calculateWallpaper(wallpaperDefaultInputs);
    expectOk(result);
    expect((fieldValue(result, "rollsNeeded") as number)).toBeGreaterThan(0);
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
