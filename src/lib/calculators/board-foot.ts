import { round } from "@/lib/utils";
import { convertLength, type LengthUnit } from "./units";
import { fail, ok, type CalcOutput } from "./types";

export interface BoardFootInputs {
  /** Nominal thickness in inches (traditional board-foot convention). */
  thickness: number;
  /** Nominal width in inches. */
  width: number;
  /** Length in inches. */
  length: number;
  /** Alternative: length unit when not using inches. */
  lengthUnit?: LengthUnit;
  quantity: number;
}

export const defaultInputs: BoardFootInputs = {
  thickness: 1,
  width: 6,
  length: 96,
  quantity: 10,
};

/** Board feet = T × W × L ÷ 12 × quantity (T, W, L in inches). */
function boardFeetFromInches(
  thicknessIn: number,
  widthIn: number,
  lengthIn: number,
  quantity: number,
): number {
  return ((thicknessIn * widthIn * lengthIn) / 12) * quantity;
}

function positive(value: number, key: string, errors: Record<string, string>): void {
  if (!Number.isFinite(value)) {
    errors[key] = "required";
  } else if (value <= 0) {
    errors[key] = "positive";
  }
}

export function calculate(inputs: BoardFootInputs): CalcOutput<BoardFootInputs> {
  const errors: Record<string, string> = {};

  positive(inputs.thickness, "thickness", errors);
  positive(inputs.width, "width", errors);
  positive(inputs.length, "length", errors);
  positive(inputs.quantity, "quantity", errors);

  if (Object.keys(errors).length > 0) {
    return fail(errors);
  }

  const lengthIn = inputs.lengthUnit
    ? convertLength(inputs.length, inputs.lengthUnit, "in")
    : inputs.length;

  const boardFeet = boardFeetFromInches(
    inputs.thickness,
    inputs.width,
    lengthIn,
    inputs.quantity,
  );

  const thicknessM = inputs.thickness * 0.0254;
  const widthM = inputs.width * 0.0254;
  const lengthM = lengthIn * 0.0254;
  const volumeM3 = thicknessM * widthM * lengthM * inputs.quantity;
  const volumeLiters = volumeM3 * 1000;

  return ok(
    inputs,
    [
      {
        key: "boardFeet",
        value: round(boardFeet, 2),
        unit: "BF",
        primary: true,
        format: "number",
      },
      {
        key: "volumeM3",
        value: round(volumeM3, 4),
        unit: "m³",
        primary: true,
        format: "number",
      },
    ],
    [
      {
        key: "lengthIn",
        value: round(lengthIn, 2),
        unit: "in",
        format: "number",
      },
      {
        key: "volumeLiters",
        value: round(volumeLiters, 2),
        unit: "L",
        format: "number",
      },
      {
        key: "boardFeetPerPiece",
        value: round(boardFeetFromInches(inputs.thickness, inputs.width, lengthIn, 1), 2),
        unit: "BF",
        format: "number",
      },
    ],
  );
}
