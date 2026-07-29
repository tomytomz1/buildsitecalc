import { parseFraction } from "./fractions";
import { fail, ok, type CalcOutput } from "./types";
import {
  applyWaste,
  convertArea,
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
  /** Custom opening areas (optional overrides for door/window counts) */
  doorArea?: number | string;
  doorAreaUnit?: AreaUnit;
  windowArea?: number | string;
  windowAreaUnit?: AreaUnit;
  doors?: number | string;
  windows?: number | string;
  /** Defaults expressed in ft²; converted internally */
  defaultDoorAreaFt2?: number;
  defaultWindowAreaFt2?: number;
  coats?: number;
  /** Coverage area per gallon; unit via coverageRateUnit */
  coverageRate?: number;
  coverageRateUnit?: AreaUnit;
  wastePercent?: number;
}

export const defaultInputs: PaintInputs = {
  length: 12,
  width: 10,
  height: 8,
  lengthUnit: "ft",
  widthUnit: "ft",
  heightUnit: "ft",
  doorArea: "",
  doorAreaUnit: "ft2",
  windowArea: "",
  windowAreaUnit: "ft2",
  doors: 1,
  windows: 2,
  coats: 2,
  coverageRate: 350,
  coverageRateUnit: "ft2",
  wastePercent: 10,
};

const DEFAULT_DOOR_FT2 = 21;
const DEFAULT_WINDOW_FT2 = 15;
const DEFAULT_COVERAGE_FT2_PER_GAL = 350;

function parsePositive(value: number | string): number | null {
  const parsed = typeof value === "number" ? value : parseFraction(value);
  if (parsed === null || !Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}

function parseNonNegative(value: number | string): number | null {
  const parsed = typeof value === "number" ? value : parseFraction(value);
  if (parsed === null || !Number.isFinite(parsed) || parsed < 0) return null;
  return parsed;
}

function ceilToQuarter(value: number): number {
  return Math.ceil(value * 4) / 4;
}

function isMetricLength(unit: LengthUnit | undefined): boolean {
  return unit === "m" || unit === "cm" || unit === "mm";
}

function isMetricArea(unit: AreaUnit | undefined): boolean {
  return unit === "m2";
}

/** Prefer m² display when inputs are primarily metric. */
export function preferredPaintAreaUnit(inputs: PaintInputs): AreaUnit {
  if (inputs.wallArea !== undefined && inputs.wallArea !== "") {
    return inputs.wallAreaUnit ?? "ft2";
  }
  if (
    isMetricLength(inputs.lengthUnit) ||
    isMetricLength(inputs.widthUnit) ||
    isMetricLength(inputs.heightUnit)
  ) {
    return "m2";
  }
  if (
    isMetricArea(inputs.doorAreaUnit) ||
    isMetricArea(inputs.windowAreaUnit) ||
    isMetricArea(inputs.coverageRateUnit)
  ) {
    return "m2";
  }
  return "ft2";
}

function resolveWallAreaM2(inputs: PaintInputs): number | null {
  if (inputs.wallArea !== undefined && inputs.wallArea !== "") {
    const area = parsePositive(inputs.wallArea);
    if (area === null) return null;
    const unit = inputs.wallAreaUnit ?? "ft2";
    return toSquareMeters(area, unit);
  }

  const length = parsePositive(inputs.length ?? "");
  const width = parsePositive(inputs.width ?? "");
  const height = parsePositive(inputs.height ?? "");

  if (length === null || width === null || height === null) return null;

  const lengthM = toMeters(length, inputs.lengthUnit ?? "ft");
  const widthM = toMeters(width, inputs.widthUnit ?? "ft");
  const heightM = toMeters(height, inputs.heightUnit ?? "ft");

  const grossAreaM2 = 2 * (lengthM + widthM) * heightM;

  let deductionsM2 = 0;
  if (inputs.doorArea !== undefined && inputs.doorArea !== "") {
    const doorArea = parseNonNegative(inputs.doorArea);
    if (doorArea === null) return null;
    deductionsM2 += toSquareMeters(doorArea, inputs.doorAreaUnit ?? "ft2");
  } else {
    const doors = parseNonNegative(inputs.doors ?? 0);
    if (doors === null) return null;
    const doorFt2 = inputs.defaultDoorAreaFt2 ?? DEFAULT_DOOR_FT2;
    deductionsM2 += doors * toSquareMeters(doorFt2, "ft2");
  }

  if (inputs.windowArea !== undefined && inputs.windowArea !== "") {
    const windowArea = parseNonNegative(inputs.windowArea);
    if (windowArea === null) return null;
    deductionsM2 += toSquareMeters(windowArea, inputs.windowAreaUnit ?? "ft2");
  } else {
    const windows = parseNonNegative(inputs.windows ?? 0);
    if (windows === null) return null;
    const windowFt2 = inputs.defaultWindowAreaFt2 ?? DEFAULT_WINDOW_FT2;
    deductionsM2 += windows * toSquareMeters(windowFt2, "ft2");
  }

  return Math.max(0, grossAreaM2 - deductionsM2);
}

function coverageToM2PerGal(rate: number, unit: AreaUnit): number {
  return toSquareMeters(rate, unit);
}

export function calculate(inputs: PaintInputs): CalcOutput<PaintInputs> {
  const coats = inputs.coats ?? 1;
  const coverageRate = inputs.coverageRate ?? DEFAULT_COVERAGE_FT2_PER_GAL;
  const coverageRateUnit = inputs.coverageRateUnit ?? "ft2";
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

  const wallAreaM2 = resolveWallAreaM2(inputs);
  if (wallAreaM2 === null) {
    if (hasArea) return fail({ wallArea: "positive" });
    if (inputs.doorArea !== undefined && inputs.doorArea !== "") {
      const doorArea = parseNonNegative(inputs.doorArea);
      if (doorArea === null) return fail({ doorArea: "positive" });
    }
    if (inputs.windowArea !== undefined && inputs.windowArea !== "") {
      const windowArea = parseNonNegative(inputs.windowArea);
      if (windowArea === null) return fail({ windowArea: "positive" });
    }
    return fail({ length: "positive" });
  }

  const coverageM2PerGal = coverageToM2PerGal(coverageRate, coverageRateUnit);
  const paintableAreaM2 = applyWaste(wallAreaM2 * coats, wastePercent);
  const gallonsExact = paintableAreaM2 / coverageM2PerGal;
  const gallonsRounded = ceilToQuarter(gallonsExact);

  const displayUnit = preferredPaintAreaUnit(inputs);
  const wallAreaDisplay = fromSquareMeters(wallAreaM2, displayUnit);
  const paintableDisplay = fromSquareMeters(paintableAreaM2, displayUnit);
  const unitLabel = displayUnit === "m2" ? "m²" : "ft²";

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
        value: round(wallAreaDisplay, 2),
        unit: unitLabel,
        format: "number",
      },
      {
        key: "paintableAreaFt2",
        value: round(paintableDisplay, 2),
        unit: unitLabel,
        format: "number",
      },
      {
        key: "coats",
        value: coats,
        format: "integer",
      },
    ],
    {
      coverageRate,
      coverageRateUnit,
      wastePercent,
      displayAreaUnit: displayUnit,
      wallAreaM2: round(wallAreaM2, 4),
    },
  );
}

/** Convert a paint area field when the user changes its unit (preserve physical area). */
export function convertPaintAreaInput(
  value: number | string,
  from: AreaUnit,
  to: AreaUnit,
): number {
  const parsed = typeof value === "number" ? value : parseFraction(String(value));
  if (parsed === null || !Number.isFinite(parsed)) return 0;
  return round(convertArea(parsed, from, to), 4);
}
