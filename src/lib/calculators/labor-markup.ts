import { round } from "@/lib/utils";
import {
  marginFromMarkup,
  markupFromMargin,
  priceFromMarkup,
} from "./units";
import { fail, ok, type CalcOutput } from "./types";

export type LaborMarkupMode = "markup" | "margin";

export interface LaborMarkupInputs {
  jobCost: number;
  mode: LaborMarkupMode;
  percent: number;
}

export const defaultInputs: LaborMarkupInputs = {
  jobCost: 1000,
  mode: "markup",
  percent: 25,
};

function positive(value: number, key: string, errors: Record<string, string>): void {
  if (!Number.isFinite(value)) {
    errors[key] = "required";
  } else if (value <= 0) {
    errors[key] = "positive";
  }
}

function validPercent(value: number, key: string, errors: Record<string, string>, mode: LaborMarkupMode): void {
  if (!Number.isFinite(value)) {
    errors[key] = "required";
    return;
  }
  if (value < 0) {
    errors[key] = "invalid";
    return;
  }
  if (mode === "margin" && value >= 100) {
    errors[key] = "invalid";
  }
}

export function calculate(inputs: LaborMarkupInputs): CalcOutput<LaborMarkupInputs> {
  const errors: Record<string, string> = {};

  positive(inputs.jobCost, "jobCost", errors);
  validPercent(inputs.percent, "percent", errors, inputs.mode);

  if (inputs.mode !== "markup" && inputs.mode !== "margin") {
    errors.mode = "invalid";
  }

  if (Object.keys(errors).length > 0) {
    return fail(errors);
  }

  let effectiveMarkup: number;
  let effectiveMargin: number;
  let sellingPrice: number;

  if (inputs.mode === "markup") {
    effectiveMarkup = inputs.percent;
    effectiveMargin = marginFromMarkup(inputs.percent);
    sellingPrice = priceFromMarkup(inputs.jobCost, inputs.percent);
  } else {
    effectiveMargin = inputs.percent;
    effectiveMarkup = markupFromMargin(inputs.percent);
    sellingPrice = priceFromMarkup(inputs.jobCost, effectiveMarkup);
  }

  const profit = sellingPrice - inputs.jobCost;

  return ok(
    inputs,
    [
      {
        key: "sellingPrice",
        value: round(sellingPrice, 2),
        primary: true,
        format: "currency",
      },
      {
        key: "profit",
        value: round(profit, 2),
        primary: true,
        format: "currency",
      },
    ],
    [
      {
        key: "effectiveMarkup",
        value: round(effectiveMarkup, 2),
        format: "percent",
      },
      {
        key: "effectiveMargin",
        value: round(effectiveMargin, 2),
        format: "percent",
      },
      {
        key: "jobCost",
        value: round(inputs.jobCost, 2),
        format: "currency",
      },
    ],
  );
}
