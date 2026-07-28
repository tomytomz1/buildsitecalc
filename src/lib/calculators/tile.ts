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

export interface TileInputs {
  area?: number | string;
  areaUnit?: AreaUnit;
  length?: number | string;
  width?: number | string;
  lengthUnit?: LengthUnit;
  widthUnit?: LengthUnit;
  tileLength: number | string;
  tileWidth: number | string;
  tileLengthUnit: LengthUnit;
  tileWidthUnit: LengthUnit;
  wastePercent?: number;
  groutGap?: number | string;
  groutGapUnit?: LengthUnit;
}

export const defaultInputs: TileInputs = {
  length: 10,
  width: 8,
  lengthUnit: "ft",
  widthUnit: "ft",
  tileLength: 12,
  tileWidth: 12,
  tileLengthUnit: "in",
  tileWidthUnit: "in",
  wastePercent: 10,
  groutGap: 0.125,
  groutGapUnit: "in",
};

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

function resolveAreaFt2(inputs: TileInputs): number | null {
  if (inputs.area !== undefined && inputs.area !== "") {
    const area = parsePositive(inputs.area);
    if (area === null) return null;
    const unit = inputs.areaUnit ?? "ft2";
    return fromSquareMeters(toSquareMeters(area, unit), "ft2");
  }

  const length = parsePositive(inputs.length ?? "");
  const width = parsePositive(inputs.width ?? "");
  if (length === null || width === null) return null;

  const lengthM = toMeters(length, inputs.lengthUnit ?? "ft");
  const widthM = toMeters(width, inputs.widthUnit ?? "ft");
  return fromSquareMeters(lengthM * widthM, "ft2");
}

export function calculate(inputs: TileInputs): CalcOutput<TileInputs> {
  const wastePercent = inputs.wastePercent ?? 10;

  const tileLength = parsePositive(inputs.tileLength);
  const tileWidth = parsePositive(inputs.tileWidth);

  if (tileLength === null) return fail({ tileLength: "positive" });
  if (tileWidth === null) return fail({ tileWidth: "positive" });
  if (!Number.isFinite(wastePercent) || wastePercent < 0) {
    return fail({ wastePercent: "positive" });
  }

  const hasArea = inputs.area !== undefined && inputs.area !== "";
  const hasDims =
    inputs.length !== undefined && inputs.width !== undefined;

  if (!hasArea && !hasDims) {
    return fail({ area: "required" });
  }

  const areaFt2 = resolveAreaFt2(inputs);
  if (areaFt2 === null) {
    if (hasArea) return fail({ area: "positive" });
    return fail({ length: "positive" });
  }

  let groutGapFt = 0;
  if (inputs.groutGap !== undefined && inputs.groutGap !== "") {
    const groutGap = parseNonNegative(inputs.groutGap);
    if (groutGap === null) return fail({ groutGap: "positive" });
    groutGapFt = toMeters(groutGap, inputs.groutGapUnit ?? "in") / 0.3048;
  }

  const tileLengthFt = toMeters(tileLength, inputs.tileLengthUnit) / 0.3048;
  const tileWidthFt = toMeters(tileWidth, inputs.tileWidthUnit) / 0.3048;

  const effectiveTileLengthFt = tileLengthFt + groutGapFt;
  const effectiveTileWidthFt = tileWidthFt + groutGapFt;
  const tileAreaFt2 = effectiveTileLengthFt * effectiveTileWidthFt;

  const areaWithWasteFt2 = applyWaste(areaFt2, wastePercent);
  const tilesNeeded = Math.ceil(areaWithWasteFt2 / tileAreaFt2);

  return ok(
    inputs,
    [
      {
        key: "tilesNeeded",
        value: tilesNeeded,
        unit: "tiles",
        primary: true,
        format: "integer",
      },
    ],
    [
      {
        key: "areaFt2",
        value: round(areaFt2, 2),
        unit: "ft²",
        format: "number",
      },
      {
        key: "areaWithWasteFt2",
        value: round(areaWithWasteFt2, 2),
        unit: "ft²",
        format: "number",
      },
      {
        key: "tileAreaFt2",
        value: round(tileAreaFt2, 4),
        unit: "ft²",
        format: "number",
      },
    ],
    { wastePercent, groutGapFt: round(groutGapFt, 4) },
  );
}
