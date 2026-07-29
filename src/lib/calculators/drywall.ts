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

export type DrywallSheetSize = "4x8" | "4x10" | "4x12";

const SHEET_AREAS_FT2: Record<DrywallSheetSize, number> = {
  "4x8": 32,
  "4x10": 40,
  "4x12": 48,
};

export interface DrywallInputs {
  area?: number | string;
  areaUnit?: AreaUnit;
  length?: number | string;
  width?: number | string;
  lengthUnit?: LengthUnit;
  widthUnit?: LengthUnit;
  sheetSize: DrywallSheetSize;
  wastePercent?: number;
}

export const defaultInputs: DrywallInputs = {
  area: 352,
  areaUnit: "ft2",
  sheetSize: "4x8",
  wastePercent: 10,
};

function parsePositive(value: number | string): number | null {
  const parsed = typeof value === "number" ? value : parseFraction(value);
  if (parsed === null || !Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}

function resolveAreaFt2(inputs: DrywallInputs): number | null {
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

export function calculate(inputs: DrywallInputs): CalcOutput<DrywallInputs> {
  const wastePercent = inputs.wastePercent ?? 10;

  if (!SHEET_AREAS_FT2[inputs.sheetSize]) {
    return fail({ sheetSize: "invalid" });
  }
  if (!Number.isFinite(wastePercent) || wastePercent < 0) {
    return fail({ wastePercent: "positive" });
  }

  const hasArea = inputs.area !== undefined && inputs.area !== "";
  const hasDims = inputs.length !== undefined && inputs.width !== undefined;

  if (!hasArea && !hasDims) {
    return fail({ area: "required" });
  }

  const areaFt2 = resolveAreaFt2(inputs);
  if (areaFt2 === null) {
    if (hasArea) return fail({ area: "positive" });
    return fail({ length: "positive" });
  }

  const sheetAreaFt2 = SHEET_AREAS_FT2[inputs.sheetSize];
  const areaWithWasteFt2 = applyWaste(areaFt2, wastePercent);
  const sheetsNeeded = Math.ceil(areaWithWasteFt2 / sheetAreaFt2);

  return ok(
    inputs,
    [
      {
        key: "sheetsNeeded",
        value: sheetsNeeded,
        unit: "sheets",
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
        key: "sheetAreaFt2",
        value: sheetAreaFt2,
        unit: "ft²",
        format: "number",
      },
    ],
    { sheetSize: inputs.sheetSize, wastePercent },
  );
}
