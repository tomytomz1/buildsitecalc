import { describe, expect, it } from "vitest";

import { areaReferenceRows, COMMON_ROOM_DIMENSIONS } from "@/lib/calculators/area-reference";

describe("room area references", () => {
  it("uses actual square footage derived from length and width", () => {
    expect(areaReferenceRows().map((row) => row.squareFeet)).toEqual([80, 120, 144, 180, 300]);
  });

  it("converts square feet to square meters using the exact conversion factor", () => {
    const room = areaReferenceRows().find((row) => row.dimensions === "12 × 12");
    expect(room?.squareMeters).toBeCloseTo(13.37803776, 8);
  });

  it("applies the illustrative ten percent allowance without early rounding", () => {
    const room = areaReferenceRows().find((row) => row.dimensions === "12 × 12");
    expect(room?.squareFeetWithTenPercentExtra).toBeCloseTo(158.4, 8);
  });

  it("does not include impossible room dimensions", () => {
    expect(COMMON_ROOM_DIMENSIONS.every((room) => room.lengthFt > 0 && room.widthFt > 0)).toBe(true);
  });
});
