import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { getDictionary } from "@/lib/i18n";
import { buildCalculatorLabels } from "@/lib/page-helpers";
import {
  RoomListEditor,
  localizedRoomLegend,
  localizedRoomName,
} from "@/components/calculator/forms/shared";
import { fieldLabel } from "@/components/calculator/forms/types";

const formerlyMissing = [
  "amount",
  "dimensions",
  "itemName",
  "materialName",
  "roomName",
  "unitCost",
  "wallLength",
];

describe("localized calculator form controls", () => {
  it("never prints raw technical keys in EN and ES input labels", () => {
    for (const locale of ["en", "es"] as const) {
      const labels = buildCalculatorLabels(getDictionary(locale), "square-footage");
      for (const field of formerlyMissing) {
        expect(fieldLabel(labels, field), `${locale}: ${field}`).not.toBe(field);
      }
    }
  });

  it("translates only generic default room names, preserving custom names", () => {
    expect(localizedRoomName("Room 1", "Habitación", 0)).toBe("Habitación 1");
    expect(localizedRoomName("Habitación 1", "Habitación", 0)).toBe("Habitación 1");
    expect(localizedRoomName("Cocina", "Habitación", 0)).toBe("Cocina");
    expect(localizedRoomName("Kitchen", "Room", 0)).toBe("Kitchen");
    expect(localizedRoomName("Room 2", "Habitación", 1)).toBe("Habitación 2");
  });

  it("avoids repeated headings for automatically named rooms", () => {
    expect(localizedRoomLegend("Room 1", "Habitación", 0)).toBe("Habitación 1");
    expect(localizedRoomLegend("Habitación 1", "Habitación", 0)).toBe("Habitación 1");
    expect(localizedRoomLegend("Cocina", "Habitación", 0)).toBe("Habitación 1: Cocina");
  });

  it("renders Spanish labels and localized initial room input in HTML", () => {
    const labels = buildCalculatorLabels(getDictionary("es"), "square-footage");
    const html = renderToStaticMarkup(
      <RoomListEditor
        labels={labels}
        locale="es"
        rooms={[{ name: "Room 1", length: 12, width: 10, lengthUnit: "ft", widthUnit: "ft" }]}
        errors={{}}
        setInputs={() => {}}
      />,
    );
    expect(html).toContain("Nombre de la habitación");
    expect(html).toContain('value="Habitación 1"');
    expect(html).toContain("Habitación 1");
    expect(html).not.toContain("Room 1");
    expect(html).not.toContain("roomName");
  });
});
