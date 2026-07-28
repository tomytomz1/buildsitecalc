import { expect } from "vitest";
import type { CalcFailure, CalcOutput, CalcSuccess } from "@/lib/calculators/types";

export function expectOk<T>(
  result: CalcOutput<T>,
): asserts result is CalcSuccess<T> {
  expect(result.ok).toBe(true);
}

export function expectFail<T>(
  result: CalcOutput<T>,
): asserts result is CalcFailure {
  expect(result.ok).toBe(false);
}

export function fieldValue<T>(
  result: CalcSuccess<T>,
  key: string,
  scope: "primary" | "secondary" = "primary",
): number | string {
  const fields = scope === "primary" ? result.primary : result.secondary;
  const field = fields.find((f) => f.key === key);
  if (!field) {
    throw new Error(`Field "${key}" not found in ${scope} results`);
  }
  return field.value;
}

export function expectClose(value: number, expected: number, precision = 2): void {
  expect(value).toBeCloseTo(expected, precision);
}
