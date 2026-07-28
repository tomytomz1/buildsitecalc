import { parseFraction } from "./fractions";
import { fail, ok, type CalcOutput, type CalcResultField } from "./types";
import {
  applyWaste,
  fromSquareMeters,
  toMeters,
  type LengthUnit,
} from "./units";
import { round } from "../utils";

export interface RoomInput {
  name?: string;
  length: number | string;
  width: number | string;
  lengthUnit: LengthUnit;
  widthUnit: LengthUnit;
}

export interface SquareFootageInputs {
  rooms: RoomInput[];
  wastePercent?: number;
}

export const defaultInputs: SquareFootageInputs = {
  rooms: [
    {
      name: "Room 1",
      length: 12,
      width: 10,
      lengthUnit: "ft",
      widthUnit: "ft",
    },
  ],
  wastePercent: 0,
};

function parsePositive(value: number | string): number | null {
  const parsed =
    typeof value === "number" ? value : parseFraction(value);
  if (parsed === null) return null;
  if (!Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}

export function calculate(inputs: SquareFootageInputs): CalcOutput<SquareFootageInputs> {
  if (!inputs.rooms || inputs.rooms.length === 0) {
    return fail({ rooms: "required" });
  }

  const wastePercent = inputs.wastePercent ?? 0;
  if (!Number.isFinite(wastePercent) || wastePercent < 0) {
    return fail({ wastePercent: "positive" });
  }

  let totalM2 = 0;
  const roomAreas: { name?: string; areaFt2: number; areaM2: number }[] = [];

  for (let i = 0; i < inputs.rooms.length; i++) {
    const room = inputs.rooms[i];
    const length = parsePositive(room.length);
    const width = parsePositive(room.width);

    if (length === null) {
      return fail({ [`rooms.${i}.length`]: "positive" });
    }
    if (width === null) {
      return fail({ [`rooms.${i}.width`]: "positive" });
    }

    const lengthM = toMeters(length, room.lengthUnit);
    const widthM = toMeters(width, room.widthUnit);
    const areaM2 = lengthM * widthM;
    const areaFt2 = fromSquareMeters(areaM2, "ft2");

    totalM2 += areaM2;
    roomAreas.push({
      name: room.name,
      areaFt2: round(areaFt2, 2),
      areaM2: round(areaM2, 2),
    });
  }

  const totalFt2 = fromSquareMeters(totalM2, "ft2");
  const totalFt2WithWaste = applyWaste(totalFt2, wastePercent);
  const totalM2WithWaste = applyWaste(totalM2, wastePercent);

  const primary: CalcResultField[] = [
    {
      key: "totalAreaFt2",
      value: round(totalFt2WithWaste, 2),
      unit: "ft²",
      primary: true,
      format: "number",
    },
    {
      key: "totalAreaM2",
      value: round(totalM2WithWaste, 2),
      unit: "m²",
      format: "number",
    },
  ];

  const secondary: CalcResultField[] = [
    {
      key: "baseAreaFt2",
      value: round(totalFt2, 2),
      unit: "ft²",
      format: "number",
    },
    {
      key: "baseAreaM2",
      value: round(totalM2, 2),
      unit: "m²",
      format: "number",
    },
  ];

  if (wastePercent > 0) {
    secondary.push({
      key: "wastePercent",
      value: wastePercent,
      unit: "%",
      format: "percent" as const,
    });
  }

  return ok(inputs, primary, secondary, { roomAreas, roomCount: inputs.rooms.length });
}
