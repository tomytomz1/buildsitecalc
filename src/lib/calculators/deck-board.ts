import { round } from "@/lib/utils";
import { applyWaste, fromSquareMeters, toMeters, type LengthUnit } from "./units";
import { fail, ok, type CalcOutput } from "./types";

export interface DeckBoardInputs {
  deckLength: number;
  deckWidth: number;
  lengthUnit: LengthUnit;
  boardWidth: number;
  /** Unit for board face width (default inches). */
  boardWidthUnit: LengthUnit;
  boardLength: number;
  gap: number;
  /** Unit for gap between boards (default inches). */
  gapUnit: LengthUnit;
  wastePercent: number;
}

export const defaultInputs: DeckBoardInputs = {
  deckLength: 16,
  deckWidth: 12,
  lengthUnit: "ft",
  boardWidth: 5.5,
  boardWidthUnit: "in",
  boardLength: 12,
  gap: 0.125,
  gapUnit: "in",
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

export function calculate(inputs: DeckBoardInputs): CalcOutput<DeckBoardInputs> {
  const errors: Record<string, string> = {};

  positive(inputs.deckLength, "deckLength", errors);
  positive(inputs.deckWidth, "deckWidth", errors);
  positive(inputs.boardWidth, "boardWidth", errors);
  positive(inputs.boardLength, "boardLength", errors);
  nonNegativeFinite(inputs.gap, "gap", errors);
  nonNegativeFinite(inputs.wastePercent, "wastePercent", errors);

  if (Object.keys(errors).length > 0) {
    return fail(errors);
  }

  const boardWidthUnit = inputs.boardWidthUnit ?? "in";
  const gapUnit = inputs.gapUnit ?? "in";

  const deckLengthM = toMeters(inputs.deckLength, inputs.lengthUnit);
  const deckWidthM = toMeters(inputs.deckWidth, inputs.lengthUnit);
  const boardWidthM = toMeters(inputs.boardWidth, boardWidthUnit);
  const boardLengthM = toMeters(inputs.boardLength, inputs.lengthUnit);
  const gapM = toMeters(inputs.gap, gapUnit);

  const areaM2 = deckLengthM * deckWidthM;
  const effectiveBoardWidth = boardWidthM + gapM;
  const rows = Math.ceil(deckWidthM / effectiveBoardWidth);
  const boardsPerRow = Math.ceil(deckLengthM / boardLengthM);
  const boardsNeeded = Math.ceil(applyWaste(rows * boardsPerRow, inputs.wastePercent));

  const areaFt2 = fromSquareMeters(areaM2, "ft2");
  const areaYd2 = fromSquareMeters(areaM2, "yd2");

  return ok(
    inputs,
    [
      {
        key: "boardsNeeded",
        value: boardsNeeded,
        unit: "boards",
        primary: true,
        format: "integer",
      },
      {
        key: "deckAreaFt2",
        value: round(areaFt2, 2),
        unit: "ft²",
        primary: true,
        format: "number",
      },
    ],
    [
      { key: "deckAreaM2", value: round(areaM2, 2), unit: "m²", format: "number" },
      { key: "deckAreaYd2", value: round(areaYd2, 2), unit: "yd²", format: "number" },
      { key: "rows", value: rows, unit: "rows", format: "integer" },
      { key: "boardsPerRow", value: boardsPerRow, unit: "boards/row", format: "integer" },
    ],
  );
}
