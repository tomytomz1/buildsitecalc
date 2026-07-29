import { round } from "@/lib/utils";
import {
  applyWaste,
  fromCubicMeters,
  toMeters,
  toSquareMeters,
  type AreaUnit,
  type LengthUnit,
} from "./units";
import { fail, ok, type CalcOutput } from "./types";

export interface TopsoilInputs {
  area: number;
  areaUnit: AreaUnit;
  depth: number;
  depthUnit: LengthUnit;
  wastePercent: number;
}

export const defaultInputs: TopsoilInputs = {
  area: 500,
  areaUnit: "ft2",
  depth: 4,
  depthUnit: "in",
  wastePercent: 10,
};

function positive(value: number, key: string, errors: Record<string, string>): void {
  if (!Number.isFinite(value)) {
    errors[key] = "required";
  } else if (value <= 0) {
    errors[key] = "positive";
  }
}

export function calculate(inputs: TopsoilInputs): CalcOutput<TopsoilInputs> {
  const errors: Record<string, string> = {};

  positive(inputs.area, "area", errors);
  positive(inputs.depth, "depth", errors);

  if (!Number.isFinite(inputs.wastePercent) || inputs.wastePercent < 0) {
    errors.wastePercent = "invalid";
  }

  if (Object.keys(errors).length > 0) {
    return fail(errors);
  }

  const areaM2 = toSquareMeters(inputs.area, inputs.areaUnit);
  const depthM = toMeters(inputs.depth, inputs.depthUnit);
  const volumeM3 = applyWaste(areaM2 * depthM, inputs.wastePercent);
  const volumeYd3 = fromCubicMeters(volumeM3, "yd3");
  const volumeFt3 = fromCubicMeters(volumeM3, "ft3");

  return ok(
    inputs,
    [
      {
        key: "volumeYd3",
        value: round(volumeYd3, 2),
        unit: "yd³",
        primary: true,
        format: "number",
      },
      {
        key: "volumeM3",
        value: round(volumeM3, 2),
        unit: "m³",
        primary: true,
        format: "number",
      },
    ],
    [
      { key: "volumeFt3", value: round(volumeFt3, 2), unit: "ft³", format: "number" },
      { key: "areaM2", value: round(areaM2, 2), unit: "m²", format: "number" },
      { key: "depthM", value: round(depthM, 4), unit: "m", format: "number" },
    ],
  );
}
