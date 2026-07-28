import { parseFraction } from "./fractions";
import { fail, ok, type CalcOutput } from "./types";
import {
  applyWaste,
  CONCRETE_BAG_VOLUMES_FT3,
  fromCubicMeters,
  toCubicMeters,
  toMeters,
  type LengthUnit,
  type VolumeUnit,
} from "./units";
import { round } from "../utils";

export interface ConcreteBagsInputs {
  /** Direct volume entry mode */
  volume?: number | string;
  volumeUnit?: VolumeUnit;
  /** Dimension entry mode */
  length?: number | string;
  width?: number | string;
  thickness?: number | string;
  lengthUnit?: LengthUnit;
  widthUnit?: LengthUnit;
  thicknessUnit?: LengthUnit;
  bagSize: 40 | 60 | 80;
  wastePercent?: number;
}

export const defaultInputs: ConcreteBagsInputs = {
  length: 10,
  width: 10,
  thickness: 4,
  lengthUnit: "ft",
  widthUnit: "ft",
  thicknessUnit: "in",
  bagSize: 60,
  wastePercent: 10,
};

function parsePositive(value: number | string): number | null {
  const parsed =
    typeof value === "number" ? value : parseFraction(value);
  if (parsed === null || !Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}

function resolveVolumeFt3(inputs: ConcreteBagsInputs): number | null {
  if (inputs.volume !== undefined && inputs.volume !== "") {
    const volume = parsePositive(inputs.volume);
    if (volume === null) return null;
    const unit = inputs.volumeUnit ?? "ft3";
    return fromCubicMeters(toCubicMeters(volume, unit), "ft3");
  }

  const length = parsePositive(inputs.length ?? "");
  const width = parsePositive(inputs.width ?? "");
  const thickness = parsePositive(inputs.thickness ?? "");

  if (length === null || width === null || thickness === null) return null;

  const lengthM = toMeters(length, inputs.lengthUnit ?? "ft");
  const widthM = toMeters(width, inputs.widthUnit ?? "ft");
  const thicknessM = toMeters(thickness, inputs.thicknessUnit ?? "in");

  const volumeM3 = lengthM * widthM * thicknessM;
  return fromCubicMeters(volumeM3, "ft3");
}

export function calculate(inputs: ConcreteBagsInputs): CalcOutput<ConcreteBagsInputs> {
  const wastePercent = inputs.wastePercent ?? 0;

  if (!CONCRETE_BAG_VOLUMES_FT3[inputs.bagSize]) {
    return fail({ bagSize: "invalid" });
  }
  if (!Number.isFinite(wastePercent) || wastePercent < 0) {
    return fail({ wastePercent: "positive" });
  }

  const hasVolume = inputs.volume !== undefined && inputs.volume !== "";
  const hasDimensions =
    inputs.length !== undefined &&
    inputs.width !== undefined &&
    inputs.thickness !== undefined;

  if (!hasVolume && !hasDimensions) {
    return fail({ volume: "required" });
  }

  const volumeFt3 = resolveVolumeFt3(inputs);
  if (volumeFt3 === null) {
    if (hasVolume) return fail({ volume: "positive" });
    return fail({ length: "positive" });
  }

  const volumeFt3WithWaste = applyWaste(volumeFt3, wastePercent);
  const bagVolumeFt3 = CONCRETE_BAG_VOLUMES_FT3[inputs.bagSize];
  const bagsNeeded = Math.ceil(volumeFt3WithWaste / bagVolumeFt3);

  const volumeM3 = toCubicMeters(volumeFt3WithWaste, "ft3");
  const volumeYd3 = fromCubicMeters(volumeM3, "yd3");

  return ok(
    inputs,
    [
      {
        key: "bagsNeeded",
        value: bagsNeeded,
        unit: "bags",
        primary: true,
        format: "integer",
      },
      {
        key: "volumeFt3",
        value: round(volumeFt3WithWaste, 2),
        unit: "ft³",
        format: "number",
      },
    ],
    [
      {
        key: "volumeYd3",
        value: round(volumeYd3, 2),
        unit: "yd³",
        format: "number",
      },
      {
        key: "volumeM3",
        value: round(volumeM3, 2),
        unit: "m³",
        format: "number",
      },
      {
        key: "bagVolumeFt3",
        value: bagVolumeFt3,
        unit: "ft³/bag",
        format: "number",
      },
    ],
    { bagSize: inputs.bagSize, wastePercent },
  );
}
