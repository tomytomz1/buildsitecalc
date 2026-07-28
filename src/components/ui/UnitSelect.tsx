import { forwardRef, type ComponentProps } from "react";
import {
  type AreaUnit,
  type LengthUnit,
  type MassUnit,
  type VolumeUnit,
} from "@/lib/calculators/units";
import { Select, type SelectOption } from "./Select";

export type UnitKind = "length" | "area" | "volume" | "mass";

const LENGTH_LABELS: Record<LengthUnit, string> = {
  ft: "Feet (ft)",
  in: "Inches (in)",
  yd: "Yards (yd)",
  m: "Meters (m)",
  cm: "Centimeters (cm)",
  mm: "Millimeters (mm)",
};

const AREA_LABELS: Record<AreaUnit, string> = {
  ft2: "Square feet (ft²)",
  yd2: "Square yards (yd²)",
  m2: "Square meters (m²)",
  in2: "Square inches (in²)",
};

const VOLUME_LABELS: Record<VolumeUnit, string> = {
  ft3: "Cubic feet (ft³)",
  yd3: "Cubic yards (yd³)",
  m3: "Cubic meters (m³)",
  L: "Liters (L)",
  gal: "Gallons (gal)",
};

const MASS_LABELS: Record<MassUnit, string> = {
  lb: "Pounds (lb)",
  kg: "Kilograms (kg)",
  ton: "US tons",
  tonne: "Metric tonnes",
};

export function unitOptionsForKind(
  kind: UnitKind,
  units?: string[],
): SelectOption[] {
  switch (kind) {
    case "length": {
      const keys = (units as LengthUnit[] | undefined) ?? Object.keys(LENGTH_LABELS);
      return keys.map((unit) => ({
        value: unit,
        label: LENGTH_LABELS[unit as LengthUnit] ?? unit,
      }));
    }
    case "area": {
      const keys = (units as AreaUnit[] | undefined) ?? Object.keys(AREA_LABELS);
      return keys.map((unit) => ({
        value: unit,
        label: AREA_LABELS[unit as AreaUnit] ?? unit,
      }));
    }
    case "volume": {
      const keys =
        (units as VolumeUnit[] | undefined) ?? Object.keys(VOLUME_LABELS);
      return keys.map((unit) => ({
        value: unit,
        label: VOLUME_LABELS[unit as VolumeUnit] ?? unit,
      }));
    }
    case "mass": {
      const keys = (units as MassUnit[] | undefined) ?? Object.keys(MASS_LABELS);
      return keys.map((unit) => ({
        value: unit,
        label: MASS_LABELS[unit as MassUnit] ?? unit,
      }));
    }
  }
}

export type UnitSelectProps = Omit<ComponentProps<typeof Select>, "options"> & {
  kind?: UnitKind;
  units?: string[];
  options?: SelectOption[];
};

export const UnitSelect = forwardRef<HTMLSelectElement, UnitSelectProps>(
  function UnitSelect({ kind = "length", units, options, ...props }, ref) {
    const resolvedOptions =
      options ?? unitOptionsForKind(kind, units);

    return <Select ref={ref} options={resolvedOptions} {...props} />;
  },
);
