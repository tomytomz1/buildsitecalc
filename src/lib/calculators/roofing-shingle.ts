import { parseFraction } from "./fractions";
import { fail, ok, type CalcOutput } from "./types";
import {
  applyWaste,
  fromSquareMeters,
  toMeters,
  toSquareMeters,
  type AreaUnit,
  type LengthUnit,
} from "./units";
import { round } from "../utils";

export interface RoofingShingleInputs {
  roofArea?: number | string;
  roofAreaUnit?: AreaUnit;
  length?: number | string;
  width?: number | string;
  lengthUnit?: LengthUnit;
  widthUnit?: LengthUnit;
  /** Direct pitch multiplier (e.g. 1.054 for 4/12) */
  pitchFactor?: number | string;
  /** Rise and run for pitch calculation */
  pitchRise?: number | string;
  pitchRun?: number | string;
  wastePercent?: number;
  bundlesPerSquare?: number;
}

export const defaultInputs: RoofingShingleInputs = {
  length: 40,
  width: 30,
  lengthUnit: "ft",
  widthUnit: "ft",
  pitchRise: 4,
  pitchRun: 12,
  wastePercent: 10,
  bundlesPerSquare: 3,
};

const SQ_FT_PER_SQUARE = 100;

function parsePositive(value: number | string): number | null {
  const parsed = typeof value === "number" ? value : parseFraction(value);
  if (parsed === null || !Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}

function resolvePitchFactor(inputs: RoofingShingleInputs): number | null {
  if (inputs.pitchFactor !== undefined && inputs.pitchFactor !== "") {
    const factor = parsePositive(inputs.pitchFactor);
    if (factor === null) return null;
    return factor;
  }

  const rise = parsePositive(inputs.pitchRise ?? "");
  const run = parsePositive(inputs.pitchRun ?? "");
  if (rise === null || run === null) return null;

  return Math.sqrt(1 + (rise / run) ** 2);
}

function resolveFootprintAreaFt2(inputs: RoofingShingleInputs): number | null {
  if (inputs.roofArea !== undefined && inputs.roofArea !== "") {
    const area = parsePositive(inputs.roofArea);
    if (area === null) return null;
    const unit = inputs.roofAreaUnit ?? "ft2";
    return fromSquareMeters(toSquareMeters(area, unit), "ft2");
  }

  const length = parsePositive(inputs.length ?? "");
  const width = parsePositive(inputs.width ?? "");
  if (length === null || width === null) return null;

  const lengthM = toMeters(length, inputs.lengthUnit ?? "ft");
  const widthM = toMeters(width, inputs.widthUnit ?? "ft");
  return fromSquareMeters(lengthM * widthM, "ft2");
}

export function calculate(
  inputs: RoofingShingleInputs,
): CalcOutput<RoofingShingleInputs> {
  const wastePercent = inputs.wastePercent ?? 10;
  const bundlesPerSquare = inputs.bundlesPerSquare ?? 3;

  if (!Number.isFinite(wastePercent) || wastePercent < 0) {
    return fail({ wastePercent: "positive" });
  }
  if (!Number.isFinite(bundlesPerSquare) || bundlesPerSquare <= 0) {
    return fail({ bundlesPerSquare: "positive" });
  }

  const hasRoofArea = inputs.roofArea !== undefined && inputs.roofArea !== "";
  const hasFootprint = inputs.length !== undefined && inputs.width !== undefined;

  if (!hasRoofArea && !hasFootprint) {
    return fail({ roofArea: "required" });
  }

  let roofAreaFt2: number;
  let pitchFactor: number | undefined;

  if (hasRoofArea) {
    const area = resolveFootprintAreaFt2(inputs);
    if (area === null) return fail({ roofArea: "positive" });
    roofAreaFt2 = area;
  } else {
    const footprintFt2 = resolveFootprintAreaFt2(inputs);
    if (footprintFt2 === null) return fail({ length: "positive" });

    const resolvedPitch = resolvePitchFactor(inputs);
    if (resolvedPitch === null) return fail({ pitchFactor: "positive" });

    pitchFactor = resolvedPitch;
    roofAreaFt2 = footprintFt2 * resolvedPitch;
  }

  const roofAreaWithWasteFt2 = applyWaste(roofAreaFt2, wastePercent);
  const squares = roofAreaWithWasteFt2 / SQ_FT_PER_SQUARE;
  const squaresRounded = round(squares, 2);
  const bundlesNeeded = Math.ceil(squares * bundlesPerSquare);

  return ok(
    inputs,
    [
      {
        key: "squares",
        value: squaresRounded,
        unit: "squares",
        primary: true,
        format: "number",
      },
      {
        key: "bundles",
        value: bundlesNeeded,
        unit: "bundles",
        format: "integer",
      },
    ],
    [
      {
        key: "roofAreaFt2",
        value: round(roofAreaFt2, 2),
        unit: "ft²",
        format: "number",
      },
      {
        key: "roofAreaWithWasteFt2",
        value: round(roofAreaWithWasteFt2, 2),
        unit: "ft²",
        format: "number",
      },
    ],
    {
      pitchFactor: pitchFactor !== undefined ? round(pitchFactor, 4) : undefined,
      wastePercent,
      bundlesPerSquare,
    },
  );
}
