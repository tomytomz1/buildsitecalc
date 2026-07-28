/**
 * Base-unit conversion strategy:
 * - Length → meters
 * - Area → square meters
 * - Volume → cubic meters
 * - Mass → kilograms
 * - Temperature difference → Kelvin (same as °C delta)
 */

export type LengthUnit = "ft" | "in" | "yd" | "m" | "cm" | "mm";
export type AreaUnit = "ft2" | "yd2" | "m2" | "in2";
export type VolumeUnit = "ft3" | "yd3" | "m3" | "L" | "gal";
export type MassUnit = "lb" | "kg" | "ton" | "tonne";

const LENGTH_TO_M: Record<LengthUnit, number> = {
  ft: 0.3048,
  in: 0.0254,
  yd: 0.9144,
  m: 1,
  cm: 0.01,
  mm: 0.001,
};

const AREA_TO_M2: Record<AreaUnit, number> = {
  ft2: 0.09290304,
  yd2: 0.83612736,
  m2: 1,
  in2: 0.00064516,
};

const VOLUME_TO_M3: Record<VolumeUnit, number> = {
  ft3: 0.028316846592,
  yd3: 0.764554857984,
  m3: 1,
  L: 0.001,
  gal: 0.003785411784,
};

const MASS_TO_KG: Record<MassUnit, number> = {
  lb: 0.45359237,
  kg: 1,
  ton: 907.18474, // US short ton
  tonne: 1000, // metric tonne
};

export function toMeters(value: number, unit: LengthUnit): number {
  return value * LENGTH_TO_M[unit];
}

export function fromMeters(meters: number, unit: LengthUnit): number {
  return meters / LENGTH_TO_M[unit];
}

export function convertLength(
  value: number,
  from: LengthUnit,
  to: LengthUnit,
): number {
  return fromMeters(toMeters(value, from), to);
}

export function toSquareMeters(value: number, unit: AreaUnit): number {
  return value * AREA_TO_M2[unit];
}

export function fromSquareMeters(m2: number, unit: AreaUnit): number {
  return m2 / AREA_TO_M2[unit];
}

export function convertArea(value: number, from: AreaUnit, to: AreaUnit): number {
  return fromSquareMeters(toSquareMeters(value, from), to);
}

export function toCubicMeters(value: number, unit: VolumeUnit): number {
  return value * VOLUME_TO_M3[unit];
}

export function fromCubicMeters(m3: number, unit: VolumeUnit): number {
  return m3 / VOLUME_TO_M3[unit];
}

export function convertVolume(
  value: number,
  from: VolumeUnit,
  to: VolumeUnit,
): number {
  return fromCubicMeters(toCubicMeters(value, from), to);
}

export function toKilograms(value: number, unit: MassUnit): number {
  return value * MASS_TO_KG[unit];
}

export function fromKilograms(kg: number, unit: MassUnit): number {
  return kg / MASS_TO_KG[unit];
}

export function convertMass(value: number, from: MassUnit, to: MassUnit): number {
  return fromKilograms(toKilograms(value, from), to);
}

/** Apply waste/contingency percent to a quantity. */
export function applyWaste(quantity: number, wastePercent: number): number {
  return quantity * (1 + wastePercent / 100);
}

/** Convert markup % on cost to selling price. */
export function priceFromMarkup(cost: number, markupPercent: number): number {
  return cost * (1 + markupPercent / 100);
}

/** Convert desired margin % of selling price to markup % on cost. */
export function markupFromMargin(marginPercent: number): number {
  if (marginPercent >= 100) return Number.POSITIVE_INFINITY;
  return (marginPercent / (100 - marginPercent)) * 100;
}

/** Convert markup % on cost to margin % of selling price. */
export function marginFromMarkup(markupPercent: number): number {
  return (markupPercent / (100 + markupPercent)) * 100;
}

export const CONCRETE_BAG_VOLUMES_FT3: Record<40 | 60 | 80, number> = {
  40: 0.3,
  60: 0.45,
  80: 0.6,
};

/** Typical gravel bulk densities (kg/m³) — disclose to users. */
export const GRAVEL_DENSITIES_KG_M3 = {
  loose: 1520,
  compacted: 1760,
  crushed: 1600,
} as const;
