import { parseFraction } from "./fractions";
import { fail, ok, type CalcOutput, type CalcResultField } from "./types";
import {
  applyWaste,
  fromCubicMeters,
  fromSquareMeters,
  toMeters,
  toSquareMeters,
  type AreaUnit,
  type LengthUnit,
} from "./units";
import { round } from "../utils";

export interface MulchInputs {
  area: number | string;
  areaUnit?: AreaUnit;
  depth: number | string;
  depthUnit: LengthUnit;
  wastePercent?: number;
  /** Volume per bag in ft³ — when provided, calculates bags needed */
  bagVolumeFt3?: number | string;
}

export const defaultInputs: MulchInputs = {
  area: 200,
  areaUnit: "ft2",
  depth: 3,
  depthUnit: "in",
  wastePercent: 10,
  bagVolumeFt3: 2,
};

function parsePositive(value: number | string): number | null {
  const parsed = typeof value === "number" ? value : parseFraction(value);
  if (parsed === null || !Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}

export function calculate(inputs: MulchInputs): CalcOutput<MulchInputs> {
  const area = parsePositive(inputs.area);
  const depth = parsePositive(inputs.depth);
  const wastePercent = inputs.wastePercent ?? 0;

  if (area === null) return fail({ area: "positive" });
  if (depth === null) return fail({ depth: "positive" });
  if (!Number.isFinite(wastePercent) || wastePercent < 0) {
    return fail({ wastePercent: "positive" });
  }

  const areaM2 = toSquareMeters(area, inputs.areaUnit ?? "ft2");
  const depthM = toMeters(depth, inputs.depthUnit);
  const volumeM3 = areaM2 * depthM;

  const volumeM3WithWaste = applyWaste(volumeM3, wastePercent);
  const volumeYd3 = fromCubicMeters(volumeM3WithWaste, "yd3");
  const volumeFt3 = fromCubicMeters(volumeM3WithWaste, "ft3");

  const primary: CalcResultField[] = [
    {
      key: "volumeYd3",
      value: round(volumeYd3, 2),
      unit: "yd³",
      primary: true,
      format: "number",
    },
    {
      key: "volumeM3",
      value: round(volumeM3WithWaste, 2),
      unit: "m³",
      format: "number",
    },
  ];

  const secondary: CalcResultField[] = [
    {
      key: "volumeFt3",
      value: round(volumeFt3, 2),
      unit: "ft³",
      format: "number",
    },
    {
      key: "areaFt2",
      value: round(fromSquareMeters(areaM2, "ft2"), 2),
      unit: "ft²",
      format: "number",
    },
  ];

  let bagsNeeded: number | undefined;
  if (inputs.bagVolumeFt3 !== undefined && inputs.bagVolumeFt3 !== "") {
    const bagVolume = parsePositive(inputs.bagVolumeFt3);
    if (bagVolume === null) return fail({ bagVolumeFt3: "positive" });

    bagsNeeded = Math.ceil(volumeFt3 / bagVolume);
    primary.push({
      key: "bagsNeeded",
      value: bagsNeeded,
      unit: "bags",
      format: "integer",
    });
  }

  return ok(inputs, primary, secondary, { wastePercent, bagsNeeded });
}
