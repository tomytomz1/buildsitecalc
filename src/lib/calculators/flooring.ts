import { parseFraction } from "./fractions";
import { fail, ok, type CalcOutput, type CalcResultField } from "./types";
import {
  applyWaste,
  fromSquareMeters,
  toMeters,
  toSquareMeters,
  type AreaUnit,
  type LengthUnit,
} from "./units";
import { round } from "../utils";

export interface FlooringInputs {
  area?: number | string;
  areaUnit?: AreaUnit;
  length?: number | string;
  width?: number | string;
  lengthUnit?: LengthUnit;
  widthUnit?: LengthUnit;
  wastePercent?: number;
  packCoverage?: number | string;
  packCoverageUnit?: AreaUnit;
}

export const defaultInputs: FlooringInputs = {
  length: 12,
  width: 10,
  lengthUnit: "ft",
  widthUnit: "ft",
  wastePercent: 10,
  packCoverage: 20,
  packCoverageUnit: "ft2",
};

function parsePositive(value: number | string): number | null {
  const parsed = typeof value === "number" ? value : parseFraction(value);
  if (parsed === null || !Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}

function resolveAreaFt2(inputs: FlooringInputs): number | null {
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

export function calculate(inputs: FlooringInputs): CalcOutput<FlooringInputs> {
  const wastePercent = inputs.wastePercent ?? 10;

  if (!Number.isFinite(wastePercent) || wastePercent < 0) {
    return fail({ wastePercent: "positive" });
  }

  const hasArea = inputs.area !== undefined && inputs.area !== "";
  const hasDims = inputs.length !== undefined && inputs.width !== undefined;

  if (!hasArea && !hasDims) {
    return fail({ area: "required" });
  }

  const baseAreaFt2 = resolveAreaFt2(inputs);
  if (baseAreaFt2 === null) {
    if (hasArea) return fail({ area: "positive" });
    return fail({ length: "positive" });
  }

  const areaWithWasteFt2 = applyWaste(baseAreaFt2, wastePercent);
  const areaWithWasteM2 = toSquareMeters(areaWithWasteFt2, "ft2");

  const primary: CalcResultField[] = [
    {
      key: "areaWithWasteFt2",
      value: round(areaWithWasteFt2, 2),
      unit: "ft²",
      primary: true,
      format: "number",
    },
    {
      key: "areaWithWasteM2",
      value: round(areaWithWasteM2, 2),
      unit: "m²",
      format: "number",
    },
  ];

  const secondary: CalcResultField[] = [
    {
      key: "baseAreaFt2",
      value: round(baseAreaFt2, 2),
      unit: "ft²",
      format: "number",
    },
  ];

  let packsNeeded: number | undefined;
  if (inputs.packCoverage !== undefined && inputs.packCoverage !== "") {
    const packCoverage = parsePositive(inputs.packCoverage);
    if (packCoverage === null) return fail({ packCoverage: "positive" });

    const packCoverageFt2 = fromSquareMeters(
      toSquareMeters(packCoverage, inputs.packCoverageUnit ?? "ft2"),
      "ft2",
    );
    packsNeeded = Math.ceil(areaWithWasteFt2 / packCoverageFt2);

    primary.push({
      key: "packsNeeded",
      value: packsNeeded,
      unit: "packs",
      format: "integer",
    });
  }

  return ok(inputs, primary, secondary, { wastePercent, packsNeeded });
}
