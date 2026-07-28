import { round } from "@/lib/utils";
import { toMeters, type LengthUnit } from "./units";
import { fail, ok, type CalcOutput, type CalcResultField } from "./types";

export interface FenceMaterialInputs {
  fenceLength: number;
  lengthUnit: LengthUnit;
  postSpacing: number;
  railsPerSection: number;
  picketWidth: number;
  /** Unit for picket width (default inches — nominal lumber sizes). */
  picketWidthUnit: LengthUnit;
  picketGap?: number;
  /** Unit for picket gap (default inches). */
  picketGapUnit: LengthUnit;
  postSizeNote?: string;
}

export const defaultInputs: FenceMaterialInputs = {
  fenceLength: 100,
  lengthUnit: "ft",
  postSpacing: 8,
  railsPerSection: 3,
  picketWidth: 5.5,
  picketWidthUnit: "in",
  picketGap: 0.125,
  picketGapUnit: "in",
  postSizeNote: "4×4 post",
};

function positive(value: number, key: string, errors: Record<string, string>): void {
  if (!Number.isFinite(value)) {
    errors[key] = "required";
  } else if (value <= 0) {
    errors[key] = "positive";
  }
}

export function calculate(inputs: FenceMaterialInputs): CalcOutput<FenceMaterialInputs> {
  const errors: Record<string, string> = {};

  positive(inputs.fenceLength, "fenceLength", errors);
  positive(inputs.postSpacing, "postSpacing", errors);
  positive(inputs.railsPerSection, "railsPerSection", errors);
  positive(inputs.picketWidth, "picketWidth", errors);

  if (inputs.picketGap !== undefined && inputs.picketGap !== null) {
    if (!Number.isFinite(inputs.picketGap) || inputs.picketGap < 0) {
      errors.picketGap = "invalid";
    }
  }

  if (Object.keys(errors).length > 0) {
    return fail(errors);
  }

  const picketWidthUnit = inputs.picketWidthUnit ?? "in";
  const picketGapUnit = inputs.picketGapUnit ?? "in";

  const lengthM = toMeters(inputs.fenceLength, inputs.lengthUnit);
  const spacingM = toMeters(inputs.postSpacing, inputs.lengthUnit);
  const picketWidthM = toMeters(inputs.picketWidth, picketWidthUnit);
  const picketGapM =
    inputs.picketGap !== undefined && inputs.picketGap !== null
      ? toMeters(inputs.picketGap, picketGapUnit)
      : 0;

  const sections = Math.ceil(lengthM / spacingM);
  const posts = Math.ceil(lengthM / spacingM) + 1;
  const rails = sections * inputs.railsPerSection;

  const picketPitch = picketWidthM + picketGapM;
  const pickets =
    picketPitch > 0 ? Math.ceil(lengthM / picketPitch) : Math.ceil(lengthM / picketWidthM);

  const primary = [
    { key: "posts", value: posts, unit: "posts", primary: true, format: "integer" as const },
    { key: "rails", value: rails, unit: "rails", primary: true, format: "integer" as const },
    { key: "pickets", value: pickets, unit: "pickets", primary: true, format: "integer" as const },
  ];

  const secondary: CalcResultField[] = [
    { key: "sections", value: sections, unit: "sections", format: "integer" as const },
    { key: "fenceLengthM", value: round(lengthM, 2), unit: "m", format: "number" as const },
  ];

  if (inputs.postSizeNote) {
    secondary.push({
      key: "postSizeNote",
      value: inputs.postSizeNote,
    });
  }

  return ok(inputs, primary, secondary);
}
