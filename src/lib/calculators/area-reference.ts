/**
 * Common room dimensions for the already-existing area and flooring calculators.
 * Exact ft² calculations; metric conversion uses 1 ft² = 0.09290304 m².
 * The 10% factor is an illustrative allowance, not a material recommendation.
 */
export const COMMON_ROOM_DIMENSIONS = [
  { lengthFt: 8, widthFt: 10 },
  { lengthFt: 10, widthFt: 12 },
  { lengthFt: 12, widthFt: 12 },
  { lengthFt: 12, widthFt: 15 },
  { lengthFt: 15, widthFt: 20 },
] as const;

export function areaReferenceRows() {
  return COMMON_ROOM_DIMENSIONS.map(({ lengthFt, widthFt }) => {
    const squareFeet = lengthFt * widthFt;

    return {
      dimensions: `${lengthFt} × ${widthFt}`,
      squareFeet,
      squareMeters: squareFeet * 0.09290304,
      squareFeetWithTenPercentExtra: squareFeet * 1.1,
    };
  });
}
