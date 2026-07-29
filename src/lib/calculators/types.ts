export type CalculatorCategoryId =
  | "concrete-masonry"
  | "painting-walls"
  | "flooring-tile"
  | "roofing"
  | "landscaping"
  | "fencing-decking"
  | "measurements"
  | "heating-insulation"
  | "moving-cleanup"
  | "project-costs";

export type CalculatorId =
  | "concrete-slab"
  | "concrete-bags"
  | "paint"
  | "flooring"
  | "tile"
  | "drywall"
  | "roofing-shingle"
  | "mulch"
  | "gravel"
  | "topsoil"
  | "fence-material"
  | "deck-board"
  | "stair"
  | "wallpaper"
  | "insulation"
  | "hvac-btu"
  | "moving-truck-size"
  | "dumpster-size"
  | "project-waste-factor"
  | "board-foot"
  | "square-footage"
  | "room-volume"
  | "labor-markup"
  | "material-cost"
  | "project-budget";

export interface CalcResultField {
  key: string;
  value: number | string;
  unit?: string;
  primary?: boolean;
  format?: "number" | "currency" | "percent" | "integer";
}

export interface CalcSuccess<TInputs = Record<string, unknown>> {
  ok: true;
  inputs: TInputs;
  primary: CalcResultField[];
  secondary: CalcResultField[];
  meta?: Record<string, unknown>;
}

export interface CalcFailure {
  ok: false;
  errors: Record<string, string>;
}

export type CalcOutput<TInputs = Record<string, unknown>> =
  CalcSuccess<TInputs> | CalcFailure;

export function fail(errors: Record<string, string>): CalcFailure {
  return { ok: false, errors };
}

export function ok<TInputs>(
  inputs: TInputs,
  primary: CalcResultField[],
  secondary: CalcResultField[] = [],
  meta?: Record<string, unknown>,
): CalcSuccess<TInputs> {
  return { ok: true, inputs, primary, secondary, meta };
}
