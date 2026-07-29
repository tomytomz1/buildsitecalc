import { forwardRef, type ComponentProps } from "react";
import {
  type AreaUnit,
  type LengthUnit,
  type MassUnit,
  type VolumeUnit,
} from "@/lib/calculators/units";
import { Select, type SelectOption } from "./Select";

export type UnitKind = "length" | "area" | "volume" | "mass";
export type UnitLocale = "en" | "es";

const LENGTH_LABELS: Record<UnitLocale, Record<LengthUnit, string>> = {
  en: {
    ft: "Feet (ft)",
    in: "Inches (in)",
    yd: "Yards (yd)",
    m: "Meters (m)",
    cm: "Centimeters (cm)",
    mm: "Millimeters (mm)",
  },
  es: {
    ft: "Pies (ft)",
    in: "Pulgadas (in)",
    yd: "Yardas (yd)",
    m: "Metros (m)",
    cm: "Centímetros (cm)",
    mm: "Milímetros (mm)",
  },
};

const AREA_LABELS: Record<UnitLocale, Record<AreaUnit, string>> = {
  en: {
    ft2: "Square feet (ft²)",
    yd2: "Square yards (yd²)",
    m2: "Square meters (m²)",
    in2: "Square inches (in²)",
  },
  es: {
    ft2: "Pies cuadrados (ft²)",
    yd2: "Yardas cuadradas (yd²)",
    m2: "Metros cuadrados (m²)",
    in2: "Pulgadas cuadradas (in²)",
  },
};

const VOLUME_LABELS: Record<UnitLocale, Record<VolumeUnit, string>> = {
  en: {
    ft3: "Cubic feet (ft³)",
    yd3: "Cubic yards (yd³)",
    m3: "Cubic meters (m³)",
    L: "Liters (L)",
    gal: "Gallons (gal)",
  },
  es: {
    ft3: "Pies cúbicos (ft³)",
    yd3: "Yardas cúbicas (yd³)",
    m3: "Metros cúbicos (m³)",
    L: "Litros (L)",
    gal: "Galones (gal)",
  },
};

const MASS_LABELS: Record<UnitLocale, Record<MassUnit, string>> = {
  en: {
    lb: "Pounds (lb)",
    kg: "Kilograms (kg)",
    ton: "US tons",
    tonne: "Metric tonnes",
  },
  es: {
    lb: "Libras (lb)",
    kg: "Kilogramos (kg)",
    ton: "Toneladas US",
    tonne: "Toneladas métricas",
  },
};

export function unitOptionsForKind(
  kind: UnitKind,
  units?: string[],
  locale: UnitLocale = "en",
): SelectOption[] {
  switch (kind) {
    case "length": {
      const labels = LENGTH_LABELS[locale];
      const keys = (units as LengthUnit[] | undefined) ?? Object.keys(labels);
      return keys.map((unit) => ({
        value: unit,
        label: labels[unit as LengthUnit] ?? unit,
      }));
    }
    case "area": {
      const labels = AREA_LABELS[locale];
      const keys = (units as AreaUnit[] | undefined) ?? Object.keys(labels);
      return keys.map((unit) => ({
        value: unit,
        label: labels[unit as AreaUnit] ?? unit,
      }));
    }
    case "volume": {
      const labels = VOLUME_LABELS[locale];
      const keys = (units as VolumeUnit[] | undefined) ?? Object.keys(labels);
      return keys.map((unit) => ({
        value: unit,
        label: labels[unit as VolumeUnit] ?? unit,
      }));
    }
    case "mass": {
      const labels = MASS_LABELS[locale];
      const keys = (units as MassUnit[] | undefined) ?? Object.keys(labels);
      return keys.map((unit) => ({
        value: unit,
        label: labels[unit as MassUnit] ?? unit,
      }));
    }
  }
}

export type UnitSelectProps = Omit<ComponentProps<typeof Select>, "options"> & {
  kind?: UnitKind;
  units?: string[];
  options?: SelectOption[];
  /** Affects visible option labels only — values stay stable unit keys. */
  locale?: UnitLocale;
};

export const UnitSelect = forwardRef<HTMLSelectElement, UnitSelectProps>(
  function UnitSelect(
    { kind = "length", units, options, locale = "en", ...props },
    ref,
  ) {
    const resolvedOptions = options ?? unitOptionsForKind(kind, units, locale);

    return <Select ref={ref} options={resolvedOptions} {...props} />;
  },
);
