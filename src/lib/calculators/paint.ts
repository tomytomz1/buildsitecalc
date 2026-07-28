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

export interface PaintInputs {
  /** Direct wall area mode */
  wallArea?: number | string;
  wallAreaUnit?: AreaUnit;
  /** Room dimension mode */
  length?: number | string;
  width?: number | string;
  height?: number | string;
  lengthUnit?: LengthUnit;
  widthUnit?: LengthUnit;
  heightUnit?: LengthUnit;
  /** Deductions in ft² */
  doorArea?: number | string;
  windowArea?: number | string;
  doors?: number | string;
  windows?: number | string;
  /** Default door 21 ft², window 15 ft² */
  defaultDoorAreaFt2?: number;
  defaultWindowAreaFt2?: number;
  coats?: number;
  coverageRate?: number;
  wastePercent?: number;
}

export const defaultInputs: PaintInputs = {
  length: 12,
  width: 10,
  height: 8,
  lengthUnit: "ft",
  widthUnit: "ft",
  heightUnit: "ft",
  doors: 1,
  windows: 2,
  coats: 2,
  coverageRate: 350,
  wastePercent: 10,
};

const DEFAULT_DOOR_FT2 = 21;
const DEFAULT_WINDOW_FT2 = 15;

function parsePositive(value: number | string): number | null {
  const parsed =
    typeof value === "number" ? value : parseFraction(value);
  if (parsed === null || !Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}

function parseNonNegative(value: number | string): number | null {
  const parsed =
    typeof value === "number" ? value : parseFraction(value);
  if (parsed === null || !Number.isFinite(parsed) || parsed < 0) return null;
  return parsed;
}

function ceilToQuarter(value: number): number {
  return Math.ceil(value * 4) / 4;
}

function resolveWallAreaFt2(inputs: PaintInputs): number | null {
  if (inputs.wallArea !== undefined && inputs.wallArea !== "") {
    const area = parsePositive(inputs.wallArea);
    if (area === null) return null;
    const unit = inputs.wallAreaUnit ?? "ft2";
    return fromSquareMeters(toSquareMeters(area, unit), "ft2");
  }

  const length = parsePositive(inputs.length ?? "");
  const width = parsePositive(inputs.width ?? "");
  const height = parsePositive(inputs.height ?? "");

  if (length === null || width === null || height === null) return null;

  const lengthFt = toMeters(length, inputs.lengthUnit ?? "ft") / 0.3048;
  const widthFt = toMeters(width, inputs.widthUnit ?? "ft") / 0.3048;
  const heightFt = toMeters(height, inputs.heightUnit ?? "ft") / 0.3048;

  const grossArea = 2 * (lengthFt + widthFt) * heightFt;

  let deductions = 0;
  if (inputs.doorArea !== undefined && inputs.doorArea !== "") {
    const doorArea = parseNonNegative(inputs.doorArea);
    if (doorArea === null) return null;
    deductions += doorArea;
  } else {
    const doors = parseNonNegative(inputs.doors ?? 0);
    if (doors === null) return null;
    deductions += doors * (inputs.defaultDoorAreaFt2 ?? DEFAULT_DOOR_FT2);
  }

  if (inputs.windowArea !== undefined && inputs.windowArea !== "") {
    const windowArea = parseNonNegative(inputs.windowArea);
    if (windowArea === null) return null;
    deductions += windowArea;
  } else {
    const windows = parseNonNegative(inputs.windows ?? 0);
    if (windows === null) return null;
    deductions += windows * (inputs.defaultWindowAreaFt2 ?? DEFAULT_WINDOW_FT2);
  }

  return Math.max(0, grossArea - deductions);
}

export function calculate(inputs: PaintInputs): CalcOutput<PaintInputs> {
  const coats = inputs.coats ?? 1;
  const coverageRate = inputs.coverageRate ?? 350;
  const wastePercent = inputs.wastePercent ?? 0;

  if (!Number.isFinite(coats) || coats <= 0) return fail({ coats: "positive" });
  if (!Number.isFinite(coverageRate) || coverageRate <= 0) {
    return fail({ coverageRate: "positive" });
  }
  if (!Number.isFinite(wastePercent) || wastePercent < 0) {
    return fail({ wastePercent: "positive" });
  }

  const hasArea = inputs.wallArea !== undefined && inputs.wallArea !== "";
  const hasDims =
    inputs.length !== undefined &&
    inputs.width !== undefined &&
    inputs.height !== undefined;

  if (!hasArea && !hasDims) {
    return fail({ wallArea: "required" });
  }

  const wallAreaFt2 = resolveWallAreaFt2(inputs);
  if (wallAreaFt2 === null) {
    if (hasArea) return fail({ wallArea: "positive" });
    return fail({ length: "positive" });
  }

  const paintableArea = applyWaste(wallAreaFt2 * coats, wastePercent);
  const gallonsExact = paintableArea / coverageRate;
  const gallonsRounded = ceilToQuarter(gallonsExact);

  return ok(
    inputs,
    [
      {
        key: "gallons",
        value: gallonsRounded,
        unit: "gal",
        primary: true,
        format: "number",
      },
      {
        key: "gallonsExact",
        value: round(gallonsExact, 2),
        unit: "gal",
        format: "number",
      },
    ],
    [
      {
        key: "wallAreaFt2",
        value: round(wallAreaFt2, 2),
        unit: "ft²",
        format: "number",
      },
      {
        key: "paintableAreaFt2",
        value: round(paintableArea, 2),
        unit: "ft²",
        format: "number",
      },
      {
        key: "coats",
        value: coats,
        format: "integer",
      },
    ],
    { coverageRate, wastePercent },
  );
}
