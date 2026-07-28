"use client";

import { useCallback, useEffect, useMemo, useState, startTransition } from "react";
import { getCalculatorEngine } from "@/lib/calculators/engine";
import type { CalcSuccess, CalculatorId } from "@/lib/calculators/types";
import {
  clearInputsFromUrl,
  mergeInputsFromSearchParams,
  syncInputsToUrl,
} from "@/lib/calculators/url-state";

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

export function useCalculatorState(calculatorId: CalculatorId): UseCalculatorStateResult {
  const engine = useMemo(() => getCalculatorEngine(calculatorId), [calculatorId]);
  const defaultInputs = useMemo(
    () => cloneDefaultInputs(engine.defaultInputs as Record<string, unknown>),
    [engine],
  );

  // Always seed with defaults so SSR and first client render match.
  const [inputs, setInputsState] = useState<Record<string, unknown>>(defaultInputs);
  const [result, setResult] = useState<CalcSuccess | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [hasCalculated, setHasCalculated] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if ([...params.keys()].length === 0) return;
    const merged = mergeInputsFromSearchParams(defaultInputs, params);
    startTransition(() => {
      setInputsState(merged);
    });
  }, [calculatorId, defaultInputs]);

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
    setInputsState(nextDefaults);
    setResult(null);
    setErrors({});
    setHasCalculated(false);
    clearInputsFromUrl();
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
