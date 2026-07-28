import { parseFraction } from "./fractions";
import { fail, ok, type CalcOutput } from "./types";
import { fromCubicMeters, toMeters, type LengthUnit } from "./units";
import { round } from "../utils";

export interface RoomVolumeInputs {
  length: number | string;
  width: number | string;
  height: number | string;
  lengthUnit: LengthUnit;
  widthUnit: LengthUnit;
  heightUnit: LengthUnit;
}

export const defaultInputs: RoomVolumeInputs = {
  length: 12,
  width: 10,
  height: 8,
  lengthUnit: "ft",
  widthUnit: "ft",
  heightUnit: "ft",
};

function parsePositive(value: number | string): number | null {
  const parsed =
    typeof value === "number" ? value : parseFraction(value);
  if (parsed === null || !Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}

export function calculate(inputs: RoomVolumeInputs): CalcOutput<RoomVolumeInputs> {
  const length = parsePositive(inputs.length);
  const width = parsePositive(inputs.width);
  const height = parsePositive(inputs.height);

  if (length === null) return fail({ length: "positive" });
  if (width === null) return fail({ width: "positive" });
  if (height === null) return fail({ height: "positive" });

  const lengthM = toMeters(length, inputs.lengthUnit);
  const widthM = toMeters(width, inputs.widthUnit);
  const heightM = toMeters(height, inputs.heightUnit);

  const volumeM3 = lengthM * widthM * heightM;
  const volumeFt3 = fromCubicMeters(volumeM3, "ft3");

  return ok(
    inputs,
    [
      {
        key: "volumeFt3",
        value: round(volumeFt3, 2),
        unit: "ft³",
        primary: true,
        format: "number",
      },
      {
        key: "volumeM3",
        value: round(volumeM3, 2),
        unit: "m³",
        format: "number",
      },
    ],
    [],
  );
}
