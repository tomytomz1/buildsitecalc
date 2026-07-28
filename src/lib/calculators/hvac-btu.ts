import { round } from "@/lib/utils";
import { toMeters, type LengthUnit } from "./units";
import { fail, ok, type CalcOutput } from "./types";

export interface HvacBtuInputs {
  length: number;
  width: number;
  height: number;
  lengthUnit: LengthUnit;
  /** BTU per square foot of floor area (default ~20 for moderate climate). */
  btuPerSqFt: number;
  /** Optional climate multiplier (e.g. 1.1 for hot/humid). */
  climateFactor: number;
  /** Insulation quality multiplier (< 1 for well-insulated, > 1 for poor). */
  insulationFactor: number;
  /** Sun exposure multiplier (> 1 for high sun load). */
  sunFactor: number;
}

export const defaultInputs: HvacBtuInputs = {
  length: 20,
  width: 15,
  height: 8,
  lengthUnit: "ft",
  btuPerSqFt: 20,
  climateFactor: 1,
  insulationFactor: 1,
  sunFactor: 1,
};

const BTU_PER_TON = 12000;

const MANUAL_J_DISCLAIMER =
  "This is a simplified rule-of-thumb estimate only. It is NOT an ACCA Manual J load calculation. HVAC sizing requires a professional load calculation that accounts for climate zone, envelope details, ductwork, infiltration, internal gains, and local code. Do not use this result as the sole basis for equipment selection.";

function positive(value: number, key: string, errors: Record<string, string>): void {
  if (!Number.isFinite(value)) {
    errors[key] = "required";
  } else if (value <= 0) {
    errors[key] = "positive";
  }
}

function positiveMultiplier(value: number, key: string, errors: Record<string, string>): void {
  if (!Number.isFinite(value)) {
    errors[key] = "required";
  } else if (value <= 0) {
    errors[key] = "invalid";
  }
}

export function calculate(inputs: HvacBtuInputs): CalcOutput<HvacBtuInputs> {
  const errors: Record<string, string> = {};

  positive(inputs.length, "length", errors);
  positive(inputs.width, "width", errors);
  positive(inputs.height, "height", errors);
  positive(inputs.btuPerSqFt, "btuPerSqFt", errors);
  positiveMultiplier(inputs.climateFactor, "climateFactor", errors);
  positiveMultiplier(inputs.insulationFactor, "insulationFactor", errors);
  positiveMultiplier(inputs.sunFactor, "sunFactor", errors);

  if (Object.keys(errors).length > 0) {
    return fail(errors);
  }

  const lengthFt = toMeters(inputs.length, inputs.lengthUnit) / 0.3048;
  const widthFt = toMeters(inputs.width, inputs.lengthUnit) / 0.3048;
  const heightFt = toMeters(inputs.height, inputs.lengthUnit) / 0.3048;

  const floorAreaSqFt = lengthFt * widthFt;
  const volumeCuFt = floorAreaSqFt * heightFt;

  const baseBtu = floorAreaSqFt * inputs.btuPerSqFt;
  const estimatedBtu =
    baseBtu * inputs.climateFactor * inputs.insulationFactor * inputs.sunFactor;
  const tonnage = estimatedBtu / BTU_PER_TON;

  return ok(
    inputs,
    [
      {
        key: "estimatedBtu",
        value: round(estimatedBtu, 0),
        unit: "BTU/h",
        primary: true,
        format: "integer",
      },
      {
        key: "tonnage",
        value: round(tonnage, 2),
        unit: "tons",
        primary: true,
        format: "number",
      },
    ],
    [
      {
        key: "floorAreaSqFt",
        value: round(floorAreaSqFt, 2),
        unit: "ft²",
        format: "number",
      },
      {
        key: "volumeCuFt",
        value: round(volumeCuFt, 2),
        unit: "ft³",
        format: "number",
      },
      {
        key: "baseBtu",
        value: round(baseBtu, 0),
        unit: "BTU/h",
        format: "integer",
      },
    ],
    { manualJDisclaimer: MANUAL_J_DISCLAIMER },
  );
}
