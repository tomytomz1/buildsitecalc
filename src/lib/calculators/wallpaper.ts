import { round } from "@/lib/utils";
import {
  applyWaste,
  fromSquareMeters,
  toMeters,
  toSquareMeters,
  type AreaUnit,
  type LengthUnit,
} from "./units";
import { fail, ok, type CalcOutput } from "./types";

export interface WallpaperWall {
  length: number;
}

export interface WallpaperInputs {
  /** Total wall perimeter; used when individual walls are not provided. */
  wallPerimeter?: number;
  /** Individual wall lengths summed when perimeter is omitted. */
  walls?: WallpaperWall[];
  wallHeight: number;
  lengthUnit: LengthUnit;
  /** Total area of doors, windows, and other openings to subtract. */
  openingsArea: number;
  openingsAreaUnit: AreaUnit;
  /** Usable coverage per roll when roll dimensions are not provided. */
  rollCoverage?: number;
  rollCoverageUnit?: AreaUnit;
  rollWidth?: number;
  rollLength?: number;
  rollLengthUnit?: LengthUnit;
  /** Vertical pattern repeat adds waste per drop. */
  patternRepeat: number;
  patternRepeatUnit: LengthUnit;
  wastePercent: number;
}

export const defaultInputs: WallpaperInputs = {
  wallPerimeter: 48,
  wallHeight: 8,
  lengthUnit: "ft",
  openingsArea: 32,
  openingsAreaUnit: "ft2",
  rollCoverage: 56,
  rollCoverageUnit: "ft2",
  patternRepeat: 0,
  patternRepeatUnit: "in",
  wastePercent: 10,
};

function positive(value: number, key: string, errors: Record<string, string>): void {
  if (!Number.isFinite(value)) {
    errors[key] = "required";
  } else if (value <= 0) {
    errors[key] = "positive";
  }
}

function nonNegative(value: number, key: string, errors: Record<string, string>): void {
  if (!Number.isFinite(value)) {
    errors[key] = "required";
  } else if (value < 0) {
    errors[key] = "invalid";
  }
}

export function calculate(inputs: WallpaperInputs): CalcOutput<WallpaperInputs> {
  const errors: Record<string, string> = {};

  positive(inputs.wallHeight, "wallHeight", errors);
  nonNegative(inputs.openingsArea, "openingsArea", errors);
  nonNegative(inputs.patternRepeat, "patternRepeat", errors);

  if (!Number.isFinite(inputs.wastePercent) || inputs.wastePercent < 0) {
    errors.wastePercent = "invalid";
  }

  const hasWalls = inputs.walls && inputs.walls.length > 0;
  const hasPerimeter = Number.isFinite(inputs.wallPerimeter) && inputs.wallPerimeter! > 0;

  if (!hasWalls && !hasPerimeter) {
    errors.wallPerimeter = "required";
  }

  if (hasWalls) {
    for (let i = 0; i < inputs.walls!.length; i++) {
      const wall = inputs.walls![i];
      if (!Number.isFinite(wall.length) || wall.length <= 0) {
        errors[`walls.${i}.length`] = "positive";
      }
    }
  }

  const hasRollCoverage =
    Number.isFinite(inputs.rollCoverage) && inputs.rollCoverage! > 0;
  const hasRollDimensions =
    Number.isFinite(inputs.rollWidth) &&
    inputs.rollWidth! > 0 &&
    Number.isFinite(inputs.rollLength) &&
    inputs.rollLength! > 0;

  if (!hasRollCoverage && !hasRollDimensions) {
    errors.rollCoverage = "required";
  }

  if (Object.keys(errors).length > 0) {
    return fail(errors);
  }

  const perimeterLength = hasWalls
    ? inputs.walls!.reduce((sum, wall) => sum + wall.length, 0)
    : inputs.wallPerimeter!;

  const wallHeightM = toMeters(inputs.wallHeight, inputs.lengthUnit);
  const perimeterM = toMeters(perimeterLength, inputs.lengthUnit);

  const grossAreaM2 = perimeterM * wallHeightM;
  const openingsM2 = toSquareMeters(inputs.openingsArea, inputs.openingsAreaUnit);
  const netAreaM2 = Math.max(grossAreaM2 - openingsM2, 0);

  let rollCoverageM2: number;
  if (hasRollDimensions) {
    const rollUnit = inputs.rollLengthUnit ?? inputs.lengthUnit;
    rollCoverageM2 =
      toMeters(inputs.rollWidth!, rollUnit) * toMeters(inputs.rollLength!, rollUnit);
  } else {
    rollCoverageM2 = toSquareMeters(
      inputs.rollCoverage!,
      inputs.rollCoverageUnit ?? "ft2",
    );
  }

  const patternRepeatM = toMeters(inputs.patternRepeat, inputs.patternRepeatUnit);

  let patternWasteFactor = 1;
  if (patternRepeatM > 0 && wallHeightM > 0) {
    const stripWidthM = hasRollDimensions
      ? toMeters(inputs.rollWidth!, inputs.rollLengthUnit ?? inputs.lengthUnit)
      : toMeters(21, "in");
    const drops = Math.max(Math.ceil(perimeterM / stripWidthM), 1);
    patternWasteFactor = 1 + (drops * patternRepeatM) / Math.max(netAreaM2, 1e-9);
  }

  const areaWithWaste = applyWaste(netAreaM2 * patternWasteFactor, inputs.wastePercent);
  const rollsNeeded = Math.ceil(areaWithWaste / rollCoverageM2);

  const netAreaFt2 = fromSquareMeters(netAreaM2, "ft2");
  const rollCoverageFt2 = fromSquareMeters(rollCoverageM2, "ft2");

  return ok(
    inputs,
    [
      {
        key: "rollsNeeded",
        value: rollsNeeded,
        unit: "rolls",
        primary: true,
        format: "integer",
      },
      {
        key: "netWallArea",
        value: round(netAreaFt2, 2),
        unit: "ft²",
        primary: true,
        format: "number",
      },
    ],
    [
      { key: "netWallAreaM2", value: round(netAreaM2, 2), unit: "m²", format: "number" },
      {
        key: "rollCoverageFt2",
        value: round(rollCoverageFt2, 2),
        unit: "ft²",
        format: "number",
      },
      {
        key: "areaWithWasteFt2",
        value: round(fromSquareMeters(areaWithWaste, "ft2"), 2),
        unit: "ft²",
        format: "number",
      },
      {
        key: "perimeter",
        value: round(perimeterLength, 2),
        unit: inputs.lengthUnit,
        format: "number",
      },
    ],
  );
}
