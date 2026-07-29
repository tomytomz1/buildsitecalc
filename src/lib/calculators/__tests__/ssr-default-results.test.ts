import { describe, expect, it } from "vitest";
import { getCalculatorEngine } from "@/lib/calculators/engine";
import type { CalculatorId } from "@/lib/calculators/types";
import { getAllCalculators } from "@/lib/calculators/registry";
import {
  clearInputsFromUrl,
  mergeInputsFromSearchParams,
} from "@/lib/calculators/url-state";

describe("SSR default calculator results", () => {
  it("covers all 25 calculators with success results from default inputs", () => {
    const all = getAllCalculators();
    expect(all).toHaveLength(25);

    const failures: string[] = [];
    for (const calc of all) {
      const engine = getCalculatorEngine(calc.id);
      const output = engine.calculate(engine.defaultInputs);
      if (!output.ok) {
        failures.push(`${calc.id}: ${JSON.stringify(output.errors)}`);
        continue;
      }
      expect(output.primary.length).toBeGreaterThan(0);
    }
    expect(failures).toEqual([]);
  });

  it("concrete-slab default matches known order volume", () => {
    const engine = getCalculatorEngine("concrete-slab");
    const output = engine.calculate(engine.defaultInputs);
    expect(output.ok).toBe(true);
    if (!output.ok) return;
    // Default 10×10×4 in with 10% waste → ~1.36 yd³ to order
    const order =
      output.primary.find((f) => f.key === "volumeYd3" || f.unit === "yd³") ??
      output.primary[0];
    expect(order.unit).toBe("yd³");
    expect(order.value).toBeCloseTo(1.36, 2);
  });

  it("URL merge overrides defaults then recalculates", () => {
    const engine = getCalculatorEngine("concrete-slab");
    const defaults = { ...(engine.defaultInputs as Record<string, unknown>) };
    const merged = mergeInputsFromSearchParams(
      defaults,
      new URLSearchParams("length=20&width=10&thickness=4&wastePercent=0"),
    );
    expect(merged.length).toBe(20);
    const output = engine.calculate(merged as never);
    expect(output.ok).toBe(true);
    if (!output.ok) return;
    // 20×10×4 in, no waste → ~2.47 yd³
    expect(output.primary[0].value).toBeCloseTo(2.47, 2);
  });

  it("invalid URL values fail safely without throwing", () => {
    const engine = getCalculatorEngine("paint");
    const defaults = { ...(engine.defaultInputs as Record<string, unknown>) };
    const merged = mergeInputsFromSearchParams(
      defaults,
      new URLSearchParams("length=-5&width=10&height=8"),
    );
    const output = engine.calculate(merged as never);
    expect(output.ok).toBe(false);
  });

  it("reset-equivalent defaults recompute successfully for all ids", () => {
    expect(getAllCalculators()).toHaveLength(25);
    for (const calc of getAllCalculators()) {
      const id = calc.id as CalculatorId;
      const engine = getCalculatorEngine(id);
      const cloned = JSON.parse(JSON.stringify(engine.defaultInputs)) as Record<
        string,
        unknown
      >;
      const output = engine.calculate(cloned as never);
      expect(output.ok, id).toBe(true);
      if (output.ok) expect(output.primary.length).toBeGreaterThan(0);
    }
  });
});

// Smoke: clearInputsFromUrl is importable for reset path (jsdom not required)
describe("url-state reset helper", () => {
  it("exports clearInputsFromUrl", () => {
    expect(typeof clearInputsFromUrl).toBe("function");
  });
});
