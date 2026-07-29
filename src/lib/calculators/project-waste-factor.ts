import { parseFraction } from "./fractions";
import { fail, ok, type CalcOutput } from "./types";
import { applyWaste } from "./units";
import { round } from "../utils";

export interface ProjectWasteFactorInputs {
  baseQuantity: number | string;
  wastePercent: number | string;
}

export const defaultInputs: ProjectWasteFactorInputs = {
  baseQuantity: 100,
  wastePercent: 10,
};

function parseNonNegative(value: number | string): number | null {
  const parsed = typeof value === "number" ? value : parseFraction(value);
  if (parsed === null || !Number.isFinite(parsed) || parsed < 0) return null;
  return parsed;
}

function parsePositive(value: number | string): number | null {
  const parsed = parseNonNegative(value);
  if (parsed === null || parsed <= 0) return null;
  return parsed;
}

export function calculate(
  inputs: ProjectWasteFactorInputs,
): CalcOutput<ProjectWasteFactorInputs> {
  const baseQuantity = parsePositive(inputs.baseQuantity);
  const wastePercent = parseNonNegative(inputs.wastePercent);

  if (baseQuantity === null) return fail({ baseQuantity: "positive" });
  if (wastePercent === null) return fail({ wastePercent: "positive" });

  const adjustedQuantity = applyWaste(baseQuantity, wastePercent);
  const wasteAmount = adjustedQuantity - baseQuantity;

  return ok(
    inputs,
    [
      {
        key: "adjustedQuantity",
        value: round(adjustedQuantity, 4),
        primary: true,
        format: "number",
      },
      {
        key: "wasteAmount",
        value: round(wasteAmount, 4),
        format: "number",
      },
    ],
    [
      {
        key: "baseQuantity",
        value: round(baseQuantity, 4),
        format: "number",
      },
      {
        key: "wastePercent",
        value: wastePercent,
        unit: "%",
        format: "percent",
      },
    ],
  );
}
