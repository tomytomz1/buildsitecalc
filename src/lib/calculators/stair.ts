import { round } from "@/lib/utils";
import { convertLength, type LengthUnit } from "./units";
import { fail, ok, type CalcOutput } from "./types";

export interface StairInputs {
  totalRise: number;
  lengthUnit: LengthUnit;
  riserHeight: number;
  treadDepth: number;
}

export const defaultInputs: StairInputs = {
  totalRise: 108,
  lengthUnit: "in",
  riserHeight: 7,
  treadDepth: 10,
};

const RISER_MIN_IN = 4;
const RISER_MAX_IN = 7.75;

const BUILDING_CODE_DISCLAIMER =
  "This calculator provides basic stair geometry only. Local building codes and the IRC impose specific requirements for riser height, tread depth, headroom, handrails, and landings. Always verify with your local authority and a qualified professional — this is not a code-compliance tool.";

function positive(value: number, key: string, errors: Record<string, string>): void {
  if (!Number.isFinite(value)) {
    errors[key] = "required";
  } else if (value <= 0) {
    errors[key] = "positive";
  }
}

export function calculate(inputs: StairInputs): CalcOutput<StairInputs> {
  const errors: Record<string, string> = {};

  positive(inputs.totalRise, "totalRise", errors);
  positive(inputs.riserHeight, "riserHeight", errors);
  positive(inputs.treadDepth, "treadDepth", errors);

  if (Object.keys(errors).length > 0) {
    return fail(errors);
  }

  const totalRiseIn = convertLength(inputs.totalRise, inputs.lengthUnit, "in");
  const targetRiserIn = convertLength(inputs.riserHeight, inputs.lengthUnit, "in");
  const treadDepthIn = convertLength(inputs.treadDepth, inputs.lengthUnit, "in");

  const numberOfRisers = Math.ceil(totalRiseIn / targetRiserIn);
  const numberOfTreads = Math.max(numberOfRisers - 1, 0);
  const actualRiserHeightIn = totalRiseIn / numberOfRisers;
  const totalRunIn = numberOfTreads * treadDepthIn;

  const meta: Record<string, unknown> = {
    disclaimer: BUILDING_CODE_DISCLAIMER,
  };

  if (actualRiserHeightIn < RISER_MIN_IN || actualRiserHeightIn > RISER_MAX_IN) {
    meta.riserWarning =
      `Actual riser height (${round(actualRiserHeightIn, 2)} in) is outside the typical IRC range of ${RISER_MIN_IN}–${RISER_MAX_IN} in. Adjust target riser height or verify with local code.`;
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
        value: round(actualRiserHeightIn, 2),
        unit: "in",
        primary: true,
        format: "number",
      },
      {
        key: "totalRun",
        value: round(totalRunIn, 2),
        unit: "in",
        primary: true,
        format: "number",
      },
    ],
    [
      {
        key: "totalRiseIn",
        value: round(totalRiseIn, 2),
        unit: "in",
        format: "number",
      },
      {
        key: "treadDepthIn",
        value: round(treadDepthIn, 2),
        unit: "in",
        format: "number",
      },
      {
        key: "totalRunFt",
        value: round(convertLength(totalRunIn, "in", "ft"), 2),
        unit: "ft",
        format: "number",
      },
    ],
    meta,
  );
}
