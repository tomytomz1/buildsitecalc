import { parseFraction } from "./fractions";
import { fail, ok, type CalcOutput } from "./types";
import {
  applyWaste,
  fromCubicMeters,
  toMeters,
  type LengthUnit,
} from "./units";
import { round } from "../utils";

export interface ConcreteSlabInputs {
  length: number | string;
  width: number | string;
  thickness: number | string;
  lengthUnit: LengthUnit;
  widthUnit: LengthUnit;
  thicknessUnit: LengthUnit;
  wastePercent?: number;
}

export const defaultInputs: ConcreteSlabInputs = {
  length: 10,
  width: 10,
  thickness: 4,
  lengthUnit: "ft",
  widthUnit: "ft",
  thicknessUnit: "in",
  wastePercent: 10,
};

function parsePositive(value: number | string): number | null {
  const parsed =
    typeof value === "number" ? value : parseFraction(value);
  if (parsed === null || !Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}

export function calculate(inputs: ConcreteSlabInputs): CalcOutput<ConcreteSlabInputs> {
  const length = parsePositive(inputs.length);
  const width = parsePositive(inputs.width);
  const thickness = parsePositive(inputs.thickness);
  const wastePercent = inputs.wastePercent ?? 0;

  if (length === null) return fail({ length: "positive" });
  if (width === null) return fail({ width: "positive" });
  if (thickness === null) return fail({ thickness: "positive" });
  if (!Number.isFinite(wastePercent) || wastePercent < 0) {
    return fail({ wastePercent: "positive" });
  }

  const lengthM = toMeters(length, inputs.lengthUnit);
  const widthM = toMeters(width, inputs.widthUnit);
  const thicknessM = toMeters(thickness, inputs.thicknessUnit);

  const volumeM3 = lengthM * widthM * thicknessM;
  const volumeFt3 = fromCubicMeters(volumeM3, "ft3");
  const volumeYd3 = fromCubicMeters(volumeM3, "yd3");

  const volumeYd3WithWaste = applyWaste(volumeYd3, wastePercent);
  const volumeM3WithWaste = applyWaste(volumeM3, wastePercent);
  const volumeFt3WithWaste = applyWaste(volumeFt3, wastePercent);

  return ok(
    inputs,
    [
      {
        key: "volumeYd3",
        value: round(volumeYd3WithWaste, 2),
        unit: "yd³",
        primary: true,
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
        key: "volumeFt3",
        value: round(volumeFt3WithWaste, 2),
        unit: "ft³",
        format: "number",
      },
      {
        key: "baseVolumeYd3",
        value: round(volumeYd3, 2),
        unit: "yd³",
        format: "number",
      },
    ],
    { wastePercent },
  );
}
