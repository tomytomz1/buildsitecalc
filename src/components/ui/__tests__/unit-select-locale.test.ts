import { describe, expect, it } from "vitest";
import { unitOptionsForKind } from "@/components/ui/UnitSelect";

describe("UnitSelect locale labels", () => {
  it("keeps English length labels on en", () => {
    const opts = unitOptionsForKind("length", ["ft", "in", "m"], "en");
    expect(opts.find((o) => o.value === "ft")?.label).toBe("Feet (ft)");
    expect(opts.find((o) => o.value === "in")?.label).toBe("Inches (in)");
  });

  it("uses Spanish length labels on es without changing values", () => {
    const opts = unitOptionsForKind("length", ["ft", "in", "m"], "es");
    expect(opts.map((o) => o.value)).toEqual(["ft", "in", "m"]);
    expect(opts.find((o) => o.value === "ft")?.label).toBe("Pies (ft)");
    expect(opts.find((o) => o.value === "in")?.label).toBe("Pulgadas (in)");
    expect(opts.find((o) => o.value === "m")?.label).toBe("Metros (m)");
  });

  it("localizes area and volume labels", () => {
    const area = unitOptionsForKind("area", ["ft2", "m2"], "es");
    expect(area.find((o) => o.value === "ft2")?.label).toMatch(/Pies cuadrados/);
    expect(area.find((o) => o.value === "m2")?.label).toMatch(/Metros cuadrados/);

    const vol = unitOptionsForKind("volume", ["yd3", "gal"], "es");
    expect(vol.find((o) => o.value === "yd3")?.label).toMatch(/Yardas cúbicas/);
    expect(vol.find((o) => o.value === "gal")?.label).toMatch(/Galones/);
  });

  it("defaults to English when locale omitted", () => {
    const opts = unitOptionsForKind("mass", ["lb", "kg"]);
    expect(opts.find((o) => o.value === "lb")?.label).toBe("Pounds (lb)");
  });
});
