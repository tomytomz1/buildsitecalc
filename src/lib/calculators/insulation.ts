import { round } from "@/lib/utils";
import {
  applyWaste,
  convertLength,
  fromSquareMeters,
  toSquareMeters,
  type AreaUnit,
  type LengthUnit,
} from "./units";
import { fail, ok, type CalcOutput } from "./types";

/** Default fiberglass wall batt length (48 in / 4 ft). */
export const DEFAULT_BATT_LENGTH_IN = 48;

export interface InsulationInputs {
  area: number;
  areaUnit: AreaUnit;
  /** Typical values: 15 or 23 inches. */
  battWidth: number;
  battWidthUnit: LengthUnit;
  /** Batt / roll length (default 48 in for wall batts). */
  battLength: number;
  battLengthUnit: LengthUnit;
  /** Informational R-value — does not affect quantity. */
  rValue?: number;
  wastePercent: number;
}

export const defaultInputs: InsulationInputs = {
  area: 500,
  areaUnit: "ft2",
  battWidth: 15,
  battWidthUnit: "in",
  battLength: 48,
  battLengthUnit: "in",
  rValue: 19,
  wastePercent: 10,
};

function positive(value: number, key: string, errors: Record<string, string>): void {
  if (!Number.isFinite(value)) {
    errors[key] = "required";
  } else if (value <= 0) {
    errors[key] = "positive";
  }
}

function nonNegativeFinite(
  value: number,
  key: string,
  errors: Record<string, string>,
): void {
  if (!Number.isFinite(value) || value < 0) {
    errors[key] = "invalid";
  }
}

export function calculate(inputs: InsulationInputs): CalcOutput<InsulationInputs> {
  const errors: Record<string, string> = {};

  positive(inputs.area, "area", errors);
  positive(inputs.battWidth, "battWidth", errors);

  const battLength = inputs.battLength ?? DEFAULT_BATT_LENGTH_IN;
  const battLengthUnit = inputs.battLengthUnit ?? "in";
  positive(battLength, "battLength", errors);
  nonNegativeFinite(inputs.wastePercent, "wastePercent", errors);

  if (Object.keys(errors).length > 0) {
    return fail(errors);
  }

  const areaM2 = toSquareMeters(inputs.area, inputs.areaUnit);
  const areaFt2 = fromSquareMeters(areaM2, "ft2");
  const areaWithWasteFt2 = applyWaste(areaFt2, inputs.wastePercent);
  const areaWithWasteM2 = applyWaste(areaM2, inputs.wastePercent);

  const battWidthFt = convertLength(inputs.battWidth, inputs.battWidthUnit, "ft");
  const battLengthFt = convertLength(battLength, battLengthUnit, "ft");

  const coveragePerBattFt2 = battWidthFt * battLengthFt;
  const battsNeeded = Math.ceil(areaWithWasteFt2 / coveragePerBattFt2 - 1e-9);

  const primary = [
    {
      key: "battsNeeded",
      value: battsNeeded,
      unit: "batts",
      primary: true,
      format: "integer" as const,
    },
    {
      key: "areaWithWaste",
      value: round(areaWithWasteFt2, 2),
      unit: "ft²",
      primary: true,
      format: "number" as const,
    },
  ];

  const secondary = [
    {
      key: "coveragePerBatt",
      value: round(coveragePerBattFt2, 2),
      unit: "ft²",
      format: "number" as const,
    },
    {
      key: "areaWithWasteM2",
      value: round(areaWithWasteM2, 2),
      unit: "m²",
      format: "number" as const,
    },
    {
      key: "netArea",
      value: round(areaFt2, 2),
      unit: "ft²",
      format: "number" as const,
    },
  ];

  if (inputs.rValue !== undefined && Number.isFinite(inputs.rValue)) {
    secondary.push({
      key: "rValue",
      value: inputs.rValue,
      unit: "R-value",
      format: "number" as const,
    });
  }

  return ok(inputs, primary, secondary);
}
