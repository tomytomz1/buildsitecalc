import { round } from "@/lib/utils";
import { fail, ok, type CalcOutput } from "./types";

export interface MovingTruckSizeInputs {
  /** Number of bedrooms — used when cubicFeet is not provided. */
  bedrooms?: number;
  /** Total inventory volume in cubic feet — overrides bedroom estimate when provided. */
  cubicFeet?: number;
}

export const defaultInputs: MovingTruckSizeInputs = {
  bedrooms: 2,
};

/** Truck tiers ordered smallest to largest. */
const TRUCK_TIERS = [
  { key: "cargoVan", label: "Cargo van", volumeFt3: 300 },
  { key: "10ft", label: "10 ft truck", volumeFt3: 400 },
  { key: "15ft", label: "15 ft truck", volumeFt3: 800 },
  { key: "20ft", label: "20 ft truck", volumeFt3: 1000 },
  { key: "26ft", label: "26 ft truck", volumeFt3: 1500 },
] as const;

/** Rough cubic feet per bedroom for household goods. */
const CU_FT_PER_BEDROOM = 400;

function positive(value: number, key: string, errors: Record<string, string>): void {
  if (!Number.isFinite(value)) {
    errors[key] = "required";
  } else if (value <= 0) {
    errors[key] = "positive";
  }
}

function recommendTruck(volumeFt3: number) {
  for (const tier of TRUCK_TIERS) {
    if (volumeFt3 <= tier.volumeFt3) {
      return tier;
    }
  }
  return TRUCK_TIERS[TRUCK_TIERS.length - 1];
}

export function calculate(
  inputs: MovingTruckSizeInputs,
): CalcOutput<MovingTruckSizeInputs> {
  const errors: Record<string, string> = {};

  const hasCubicFeet = Number.isFinite(inputs.cubicFeet) && inputs.cubicFeet! > 0;
  const hasBedrooms = Number.isFinite(inputs.bedrooms) && inputs.bedrooms! > 0;

  if (!hasCubicFeet && !hasBedrooms) {
    errors.bedrooms = "required";
  }

  if (hasCubicFeet) {
    positive(inputs.cubicFeet!, "cubicFeet", errors);
  }

  if (hasBedrooms && !hasCubicFeet) {
    positive(inputs.bedrooms!, "bedrooms", errors);
  }

  if (Object.keys(errors).length > 0) {
    return fail(errors);
  }

  const estimatedVolumeFt3 = hasCubicFeet
    ? inputs.cubicFeet!
    : inputs.bedrooms! * CU_FT_PER_BEDROOM;

  const recommended = recommendTruck(estimatedVolumeFt3);

  return ok(
    inputs,
    [
      {
        key: "recommendedTruck",
        value: recommended.label,
        primary: true,
      },
      {
        key: "recommendedVolumeFt3",
        value: recommended.volumeFt3,
        unit: "ft³",
        primary: true,
        format: "integer",
      },
    ],
    [
      {
        key: "estimatedVolumeFt3",
        value: round(estimatedVolumeFt3, 0),
        unit: "ft³",
        format: "integer",
      },
      {
        key: "estimatedVolumeM3",
        value: round(estimatedVolumeFt3 * 0.028316846592, 2),
        unit: "m³",
        format: "number",
      },
    ],
    {
      source: hasCubicFeet ? "inventory" : "bedroomEstimate",
      tiers: TRUCK_TIERS.map((t) => ({ label: t.label, volumeFt3: t.volumeFt3 })),
    },
  );
}
