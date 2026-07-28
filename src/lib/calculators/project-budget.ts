import { round } from "@/lib/utils";
import { fail, ok, type CalcOutput } from "./types";

export interface ProjectBudgetMaterial {
  name: string;
  amount: number;
}

export interface ProjectBudgetInputs {
  materials: ProjectBudgetMaterial[];
  laborCost: number;
  permitsCost: number;
  contingencyPercent: number;
}

export const defaultInputs: ProjectBudgetInputs = {
  materials: [
    { name: "Lumber", amount: 2500 },
    { name: "Hardware", amount: 350 },
    { name: "Finish materials", amount: 800 },
  ],
  laborCost: 4000,
  permitsCost: 250,
  contingencyPercent: 10,
};

function nonNegative(value: number, key: string, errors: Record<string, string>): void {
  if (!Number.isFinite(value)) {
    errors[key] = "required";
  } else if (value < 0) {
    errors[key] = "invalid";
  }
}

function positive(value: number, key: string, errors: Record<string, string>): void {
  if (!Number.isFinite(value)) {
    errors[key] = "required";
  } else if (value <= 0) {
    errors[key] = "positive";
  }
}

export function calculate(inputs: ProjectBudgetInputs): CalcOutput<ProjectBudgetInputs> {
  const errors: Record<string, string> = {};

  nonNegative(inputs.laborCost, "laborCost", errors);
  nonNegative(inputs.permitsCost, "permitsCost", errors);

  if (Number.isFinite(inputs.contingencyPercent) && inputs.contingencyPercent < 0) {
    errors.contingencyPercent = "invalid";
  }

  if (!inputs.materials || inputs.materials.length === 0) {
    errors.materials = "required";
  } else {
    for (let i = 0; i < inputs.materials.length; i++) {
      const material = inputs.materials[i];
      if (!material.name?.trim()) {
        errors[`materials.${i}.name`] = "required";
      }
      positive(material.amount, `materials.${i}.amount`, errors);
    }
  }

  if (Object.keys(errors).length > 0) {
    return fail(errors);
  }

  const materialsSubtotal = inputs.materials.reduce((sum, m) => sum + m.amount, 0);
  const subtotal = materialsSubtotal + inputs.laborCost + inputs.permitsCost;
  const contingency = subtotal * (inputs.contingencyPercent / 100);
  const grandTotal = subtotal + contingency;

  return ok(
    inputs,
    [
      {
        key: "grandTotal",
        value: round(grandTotal, 2),
        primary: true,
        format: "currency",
      },
      {
        key: "subtotal",
        value: round(subtotal, 2),
        primary: true,
        format: "currency",
      },
    ],
    [
      {
        key: "materialsSubtotal",
        value: round(materialsSubtotal, 2),
        format: "currency",
      },
      {
        key: "laborCost",
        value: round(inputs.laborCost, 2),
        format: "currency",
      },
      {
        key: "permitsCost",
        value: round(inputs.permitsCost, 2),
        format: "currency",
      },
      {
        key: "contingency",
        value: round(contingency, 2),
        format: "currency",
      },
      {
        key: "contingencyPercent",
        value: round(inputs.contingencyPercent, 2),
        format: "percent",
      },
    ],
    {
      materialCount: inputs.materials.length,
    },
  );
}
