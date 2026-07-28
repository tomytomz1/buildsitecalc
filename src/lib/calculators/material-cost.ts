import { parseFraction } from "./fractions";
import { fail, ok, type CalcOutput } from "./types";
import { round } from "../utils";

export interface MaterialCostLineItem {
  name: string;
  quantity: number | string;
  unitCost: number | string;
}

export interface MaterialCostInputs {
  lineItems: MaterialCostLineItem[];
  taxPercent?: number;
}

export const defaultInputs: MaterialCostInputs = {
  lineItems: [
    { name: "Lumber 2x4", quantity: 20, unitCost: 4.5 },
    { name: "Drywall screws (lb)", quantity: 5, unitCost: 8.99 },
  ],
  taxPercent: 0,
};

function parsePositive(value: number | string): number | null {
  const parsed =
    typeof value === "number" ? value : parseFraction(value);
  if (parsed === null || !Number.isFinite(parsed) || parsed <= 0) return null;
  return parsed;
}

function parseNonNegative(value: number | string): number | null {
  const parsed =
    typeof value === "number" ? value : parseFraction(value);
  if (parsed === null || !Number.isFinite(parsed) || parsed < 0) return null;
  return parsed;
}

export function calculate(inputs: MaterialCostInputs): CalcOutput<MaterialCostInputs> {
  if (!inputs.lineItems || inputs.lineItems.length === 0) {
    return fail({ lineItems: "required" });
  }

  const taxPercent = inputs.taxPercent ?? 0;
  if (!Number.isFinite(taxPercent) || taxPercent < 0) {
    return fail({ taxPercent: "positive" });
  }

  let subtotal = 0;
  const itemTotals: { name: string; lineTotal: number }[] = [];

  for (let i = 0; i < inputs.lineItems.length; i++) {
    const item = inputs.lineItems[i];
    const quantity = parsePositive(item.quantity);
    const unitCost = parseNonNegative(item.unitCost);

    if (!item.name?.trim()) {
      return fail({ [`lineItems.${i}.name`]: "required" });
    }
    if (quantity === null) {
      return fail({ [`lineItems.${i}.quantity`]: "positive" });
    }
    if (unitCost === null) {
      return fail({ [`lineItems.${i}.unitCost`]: "positive" });
    }

    const lineTotal = quantity * unitCost;
    subtotal += lineTotal;
    itemTotals.push({ name: item.name, lineTotal: round(lineTotal, 2) });
  }

  const tax = subtotal * (taxPercent / 100);
  const total = subtotal + tax;

  return ok(
    inputs,
    [
      {
        key: "total",
        value: round(total, 2),
        unit: "USD",
        primary: true,
        format: "currency",
      },
      {
        key: "subtotal",
        value: round(subtotal, 2),
        unit: "USD",
        format: "currency",
      },
    ],
    taxPercent > 0
      ? [
          {
            key: "tax",
            value: round(tax, 2),
            unit: "USD",
            format: "currency",
          },
          {
            key: "taxPercent",
            value: taxPercent,
            unit: "%",
            format: "percent",
          },
        ]
      : [],
    { itemTotals },
  );
}
