"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { getCalculatorEngine } from "@/lib/calculators/engine";
import type { CalcSuccess, CalculatorId } from "@/lib/calculators/types";
import {
  clearInputsFromUrl,
  mergeInputsFromSearchParams,
  syncInputsToUrl,
} from "@/lib/calculators/url-state";

export interface UseCalculatorStateOptions {
  /** Precomputed default success from the server so Googlebot sees results in HTML. */
  initialResult?: CalcSuccess | null;
}

export interface UseCalculatorStateResult {
  inputs: Record<string, unknown>;
  result: CalcSuccess | null;
  errors: Record<string, string>;
  calculate: () => void;
  reset: () => void;
  setField: (key: string, value: unknown) => void;
  setInputs: (
    next:
      | Record<string, unknown>
      | ((prev: Record<string, unknown>) => Record<string, unknown>),
  ) => void;
  hasCalculated: boolean;
}

function cloneDefaultInputs(defaults: Record<string, unknown>): Record<string, unknown> {
  return JSON.parse(JSON.stringify(defaults)) as Record<string, unknown>;
}

export function useCalculatorState(
  calculatorId: CalculatorId,
  options: UseCalculatorStateOptions = {},
): UseCalculatorStateResult {
  const { initialResult = null } = options;
  const engine = useMemo(() => getCalculatorEngine(calculatorId), [calculatorId]);
  const defaultInputs = useMemo(
    () => cloneDefaultInputs(engine.defaultInputs as Record<string, unknown>),
    [engine],
  );

  // Always seed with defaults so SSR and first client render match.
  // Seed result from initialResult (SSR default compute) so hydration matches.
  const [inputs, setInputsState] = useState<Record<string, unknown>>(defaultInputs);
  const [result, setResult] = useState<CalcSuccess | null>(initialResult);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasCalculated, setHasCalculated] = useState(Boolean(initialResult));

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if ([...params.keys()].length === 0) return;
    const merged = mergeInputsFromSearchParams(defaultInputs, params);
    const output = engine.calculate(merged as never);
    // Apply URL overrides synchronously so shareable links hydrate before paint
    // (startTransition can leave defaults visible under test / slow hydration).
    setInputsState(merged);
    setHasCalculated(true);
    if (!output.ok) {
      setErrors(output.errors);
      setResult(null);
      return;
    }
    setErrors({});
    setResult(output);
  }, [calculatorId, defaultInputs, engine]);

  const setInputs = useCallback(
    (
      next:
        | Record<string, unknown>
        | ((prev: Record<string, unknown>) => Record<string, unknown>),
    ) => {
      setInputsState((prev) => (typeof next === "function" ? next(prev) : next));
    },
    [],
  );

  const setField = useCallback((key: string, value: unknown) => {
    setInputsState((prev) => ({ ...prev, [key]: value }));
  }, []);

  const calculate = useCallback(() => {
    const output = engine.calculate(inputs as never);
    setHasCalculated(true);

    if (!output.ok) {
      setErrors(output.errors);
      setResult(null);
      return;
    }

    setErrors({});
    setResult(output);
    syncInputsToUrl(
      output.inputs as Record<string, unknown>,
      engine.defaultInputs as Record<string, unknown>,
    );
  }, [engine, inputs]);

  const reset = useCallback(() => {
    const nextDefaults = cloneDefaultInputs(
      engine.defaultInputs as Record<string, unknown>,
    );
    const output = engine.calculate(nextDefaults as never);
    setInputsState(nextDefaults);
    setErrors({});
    clearInputsFromUrl();
    if (!output.ok) {
      setResult(null);
      setHasCalculated(false);
      return;
    }
    // Restore SSR-style default result so reset does not flash the empty state.
    setResult(output);
    setHasCalculated(true);
  }, [engine]);

  return {
    inputs,
    result,
    errors,
    calculate,
    reset,
    setField,
    setInputs,
    hasCalculated,
  };
}
