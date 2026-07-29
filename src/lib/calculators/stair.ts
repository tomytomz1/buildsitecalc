import { round } from "@/lib/utils";
import { convertLength, type LengthUnit } from "./units";
import { fail, ok, type CalcOutput } from "./types";
import { parseFraction } from "./fractions";

export interface StairInputs {
  /** Floor-to-floor vertical rise */
  totalRise: number | string;
  /** Shared length unit for rise, riser, tread, and derived lengths */
  lengthUnit: LengthUnit;
  /** Target / max riser height (uniform risers) */
  riserHeight: number | string;
  /** Tread depth (horizontal run per tread) */
  treadDepth: number | string;
  /** Optional stair width — informational; not used in geometry */
  stairWidth?: number | string;
}

export const defaultInputs: StairInputs = {
  totalRise: 108,
  lengthUnit: "in",
  riserHeight: 7,
  treadDepth: 10,
  stairWidth: "",
};

const RISER_MIN_IN = 4;
const RISER_MAX_IN = 7.75;

const BUILDING_CODE_DISCLAIMER =
  "This calculator provides basic stair geometry only. Local building codes and the IRC impose specific requirements for riser height, tread depth, headroom, handrails, and landings. Always verify with your local authority and a qualified professional — this is not a code-compliance tool.";

const UNIT_LABEL: Record<LengthUnit, string> = {
  ft: "ft",
  in: "in",
  yd: "yd",
  m: "m",
  cm: "cm",
  mm: "mm",
};

function parsePositiveValue(value: number | string): number | null {
  const parsed = typeof value === "number" ? value : parseFraction(String(value));
  if (parsed === null || !Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}

function parseOptionalNonNegative(value: number | string | undefined): number | null {
  if (value === undefined || value === "") return null;
  const parsed = typeof value === "number" ? value : parseFraction(String(value));
  if (parsed === null || !Number.isFinite(parsed) || parsed < 0) return null;
  return parsed;
}

/** Convert all stair length fields when the shared unit changes (preserve physical sizes). */
export function convertStairInputsOnUnitChange(
  inputs: StairInputs,
  from: LengthUnit,
  to: LengthUnit,
): StairInputs {
  if (from === to) return inputs;

  const convertField = (
    value: number | string | undefined,
  ): number | string | undefined => {
    if (value === undefined || value === "") return value;
    const parsed = typeof value === "number" ? value : parseFraction(String(value));
    if (parsed === null || !Number.isFinite(parsed)) return value;
    return round(convertLength(parsed, from, to), 4);
  };

  return {
    ...inputs,
    lengthUnit: to,
    totalRise: convertField(inputs.totalRise) as number | string,
    riserHeight: convertField(inputs.riserHeight) as number | string,
    treadDepth: convertField(inputs.treadDepth) as number | string,
    stairWidth: convertField(inputs.stairWidth),
  };
}

export function calculate(inputs: StairInputs): CalcOutput<StairInputs> {
  const errors: Record<string, string> = {};
  const unit = inputs.lengthUnit ?? "in";

  const totalRise = parsePositiveValue(inputs.totalRise);
  const riserHeight = parsePositiveValue(inputs.riserHeight);
  const treadDepth = parsePositiveValue(inputs.treadDepth);

  if (totalRise === null) errors.totalRise = "positive";
  if (riserHeight === null) errors.riserHeight = "positive";
  if (treadDepth === null) errors.treadDepth = "positive";

  if (inputs.stairWidth !== undefined && inputs.stairWidth !== "") {
    const width = parseOptionalNonNegative(inputs.stairWidth);
    if (width === null) errors.stairWidth = "positive";
  }

  if (Object.keys(errors).length > 0) {
    return fail(errors);
  }

  // Internal base: inches (never treat inches as feet — convertLength handles each unit)
  const totalRiseIn = convertLength(totalRise!, unit, "in");
  const targetRiserIn = convertLength(riserHeight!, unit, "in");
  const treadDepthIn = convertLength(treadDepth!, unit, "in");

  const numberOfRisers = Math.ceil(totalRiseIn / targetRiserIn);
  const numberOfTreads = Math.max(numberOfRisers - 1, 0);
  const actualRiserHeightIn = totalRiseIn / numberOfRisers;
  const totalRunIn = numberOfTreads * treadDepthIn;
  const stringerLengthIn = Math.sqrt(totalRiseIn * totalRiseIn + totalRunIn * totalRunIn);

  const unitLabel = UNIT_LABEL[unit];
  const toDisplay = (inches: number) => round(convertLength(inches, "in", unit), 2);

  const meta: Record<string, unknown> = {
    disclaimer: BUILDING_CODE_DISCLAIMER,
    lengthUnit: unit,
  };

  if (actualRiserHeightIn < RISER_MIN_IN || actualRiserHeightIn > RISER_MAX_IN) {
    meta.riserWarning = `Actual riser height (${toDisplay(actualRiserHeightIn)} ${unitLabel}) is outside the typical IRC range of ${round(convertLength(RISER_MIN_IN, "in", unit), 2)}–${round(convertLength(RISER_MAX_IN, "in", unit), 2)} ${unitLabel}. Adjust target riser height or verify with local code.`;
  }

  const secondary = [
    {
      key: "totalRiseIn",
      value: toDisplay(totalRiseIn),
      unit: unitLabel,
      format: "number" as const,
    },
    {
      key: "treadDepthIn",
      value: toDisplay(treadDepthIn),
      unit: unitLabel,
      format: "number" as const,
    },
    {
      key: "totalRunFt",
      value: round(convertLength(totalRunIn, "in", "ft"), 2),
      unit: "ft",
      format: "number" as const,
    },
    {
      key: "stringerLength",
      value: toDisplay(stringerLengthIn),
      unit: unitLabel,
      format: "number" as const,
    },
  ];

  const widthVal = parseOptionalNonNegative(inputs.stairWidth);
  if (widthVal !== null) {
    secondary.push({
      key: "stairWidth",
      value: round(widthVal, 2),
      unit: unitLabel,
      format: "number",
    });
  }

  return ok(
    inputs,
    [
      {
        key: "numberOfRisers",
        value: numberOfRisers,
        unit: "risers",
        primary: true,
        format: "integer",
      },
      {
        key: "numberOfTreads",
        value: numberOfTreads,
        unit: "treads",
        primary: true,
        format: "integer",
      },
      {
        key: "actualRiserHeight",
        value: toDisplay(actualRiserHeightIn),
        unit: unitLabel,
        primary: true,
        format: "number",
      },
      {
        key: "totalRun",
        value: toDisplay(totalRunIn),
        unit: unitLabel,
        primary: true,
        format: "number",
      },
    ],
    secondary,
    meta,
  );
}
