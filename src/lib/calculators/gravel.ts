import { parseFraction } from "./fractions";
import { fail, ok, type CalcOutput } from "./types";
import {
  applyWaste,
  fromCubicMeters,
  fromKilograms,
  GRAVEL_DENSITIES_KG_M3,
  toMeters,
  toSquareMeters,
  type AreaUnit,
  type LengthUnit,
} from "./units";
import { round } from "../utils";

export type GravelDensityKey = keyof typeof GRAVEL_DENSITIES_KG_M3;

export interface GravelInputs {
  area: number | string;
  areaUnit?: AreaUnit;
  depth: number | string;
  depthUnit: LengthUnit;
  densityKey?: GravelDensityKey;
  customDensityKgM3?: number | string;
  wastePercent?: number;
}

export const defaultInputs: GravelInputs = {
  area: 100,
  areaUnit: "ft2",
  depth: 4,
  depthUnit: "in",
  densityKey: "crushed",
  wastePercent: 10,
};

function parsePositive(value: number | string): number | null {
  const parsed = typeof value === "number" ? value : parseFraction(value);
  if (parsed === null || !Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}

function resolveDensityKgM3(inputs: GravelInputs): number | null {
  if (inputs.customDensityKgM3 !== undefined && inputs.customDensityKgM3 !== "") {
    const custom = parsePositive(inputs.customDensityKgM3);
    if (custom === null) return null;
    return custom;
  }

  const key = inputs.densityKey ?? "crushed";
  const density = GRAVEL_DENSITIES_KG_M3[key];
  if (!density) return null;
  return density;
}

export function calculate(inputs: GravelInputs): CalcOutput<GravelInputs> {
  const area = parsePositive(inputs.area);
  const depth = parsePositive(inputs.depth);
  const wastePercent = inputs.wastePercent ?? 0;

  if (area === null) return fail({ area: "positive" });
  if (depth === null) return fail({ depth: "positive" });
  if (!Number.isFinite(wastePercent) || wastePercent < 0) {
    return fail({ wastePercent: "positive" });
  }

  const densityKgM3 = resolveDensityKgM3(inputs);
  if (densityKgM3 === null) {
    if (inputs.customDensityKgM3 !== undefined && inputs.customDensityKgM3 !== "") {
      return fail({ customDensityKgM3: "positive" });
    }
    return fail({ densityKey: "invalid" });
  }

  const areaM2 = toSquareMeters(area, inputs.areaUnit ?? "ft2");
  const depthM = toMeters(depth, inputs.depthUnit);
  const volumeM3 = areaM2 * depthM;

  const volumeM3WithWaste = applyWaste(volumeM3, wastePercent);
  const volumeYd3 = fromCubicMeters(volumeM3WithWaste, "yd3");
  const massKg = volumeM3WithWaste * densityKgM3;
  const tons = fromKilograms(massKg, "ton");

  const densitySource =
    inputs.customDensityKgM3 !== undefined && inputs.customDensityKgM3 !== ""
      ? "custom"
      : (inputs.densityKey ?? "crushed");

  return ok(
    inputs,
    [
      {
        key: "tons",
        value: round(tons, 2),
        unit: "tons",
        primary: true,
        format: "number",
      },
      {
        key: "volumeYd3",
        value: round(volumeYd3, 2),
        unit: "yd³",
        format: "number",
      },
    ],
    [
      {
        key: "volumeM3",
        value: round(volumeM3WithWaste, 2),
        unit: "m³",
        format: "number",
      },
      {
        key: "massKg",
        value: round(massKg, 2),
        unit: "kg",
        format: "number",
      },
      {
        key: "densityKgM3",
        value: densityKgM3,
        unit: "kg/m³",
        format: "number",
      },
    ],
    {
      densityKgM3,
      densitySource,
      densityKey: inputs.densityKey,
      wastePercent,
      disclosure:
        "Bulk density varies by material and compaction. Values shown are typical estimates.",
    },
  );
}
