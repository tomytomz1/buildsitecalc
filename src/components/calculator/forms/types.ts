import type { CalculatorId } from "@/lib/calculators/types";

export type CalculatorLocale = "en" | "es";

export type CalculatorUiLabels = {
  calculate: string;
  reset: string;
  results: string;
  emptyResults?: string;
  addRow?: string;
  removeRow?: string;
  room?: string;
  wall?: string;
  lineItem?: string;
  material?: string;
  print?: string;
  copyResults?: string;
  copyLink?: string;
  share?: string;
  copied?: string;
  shareFailed?: string;
  parsedValue?: string;
  modeVolume?: string;
  modeDimensions?: string;
  modeArea?: string;
  modePerimeter?: string;
  modeWalls?: string;
  modeBedrooms?: string;
  modeCubicFeet?: string;
};

export type CalculatorLabels = {
  inputs: Record<string, string>;
  results: Record<string, string>;
  errors: Record<string, string>;
  ui: CalculatorUiLabels;
};

export type CalculatorFormProps = {
  calculatorId: CalculatorId;
  inputs: Record<string, unknown>;
  errors: Record<string, string>;
  labels: CalculatorLabels;
  locale: CalculatorLocale;
  setField: (key: string, value: unknown) => void;
  setInputs: (
    next:
      | Record<string, unknown>
      | ((prev: Record<string, unknown>) => Record<string, unknown>),
  ) => void;
};

export function resolveFieldError(
  fieldKey: string,
  errors: Record<string, string>,
  errorLabels: Record<string, string>,
): string | undefined {
  const code = errors[fieldKey];
  if (!code) return undefined;
  return errorLabels[`${fieldKey}.${code}`] ?? errorLabels[code] ?? code;
}

export function fieldLabel(labels: CalculatorLabels, key: string): string {
  return labels.inputs[key] ?? key;
}
