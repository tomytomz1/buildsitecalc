"use client";

import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import { Fieldset } from "@/components/ui/Fieldset";
import { FractionalInput } from "@/components/ui/FractionalInput";
import { Input } from "@/components/ui/Input";
import { PercentInput } from "@/components/ui/PercentInput";
import { UnitSelect } from "@/components/ui/UnitSelect";
import type { LengthUnit } from "@/lib/calculators/units";
import { cn } from "@/lib/utils";
import {
  fieldLabel,
  resolveFieldError,
  type CalculatorFormProps,
  type CalculatorLabels,
} from "./types";

export function FormGrid({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2", className)}>
      {children}
    </div>
  );
}

export function useFormHelpers(props: CalculatorFormProps) {
  const { inputs, errors, labels, locale, setField } = props;

  const lbl = (key: string) => fieldLabel(labels, key);
  const err = (key: string) => resolveFieldError(key, errors, labels.errors);

  const num = (key: string) => {
    const v = inputs[key];
    return v === undefined || v === null ? "" : String(v);
  };

  const setNum = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setField(key, raw === "" ? "" : Number(raw));
  };

  const setFrac = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setField(key, e.target.value);
  };

  const setStr = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setField(key, e.target.value);
  };

  const setSelect = (key: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    const raw = e.target.value;
    const def = props.inputs[key];
    if (typeof def === "number") {
      setField(key, Number(raw));
    } else {
      setField(key, raw);
    }
  };

  return {
    lbl,
    err,
    num,
    setNum,
    setFrac,
    setStr,
    setSelect,
    locale,
    setField,
    setInputs: props.setInputs,
    inputs,
    labels: props.labels,
  };
}

export function WasteField({
  labels,
  value,
  error,
  onChange,
}: {
  labels: CalculatorLabels;
  locale: "en" | "es";
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <PercentInput
      name="wastePercent"
      label={fieldLabel(labels, "wastePercent")}
      value={value}
      error={error}
      min={0}
      onChange={onChange}
    />
  );
}

export function LengthWidthFieldset({
  labels,
  locale,
  length,
  width,
  lengthUnit,
  widthUnit,
  lengthError,
  widthError,
  lengthUnitError,
  widthUnitError,
  onLength,
  onWidth,
  onLengthUnit,
  onWidthUnit,
}: {
  labels: CalculatorLabels;
  locale: "en" | "es";
  length: string;
  width: string;
  lengthUnit: string;
  widthUnit: string;
  lengthError?: string;
  widthError?: string;
  lengthUnitError?: string;
  widthUnitError?: string;
  onLength: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWidth: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLengthUnit: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onWidthUnit: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <Fieldset legend={fieldLabel(labels, "dimensions") || "Dimensions"}>
      <FormGrid>
        <FractionalInput
          name="length"
          label={fieldLabel(labels, "length")}
          value={length}
          error={lengthError}
          locale={locale}
          parsedHintLabel={labels.ui.parsedValue ?? "Parsed value"}
          onChange={onLength}
        />
        <UnitSelect
          locale={locale}
          name="lengthUnit"
          label={fieldLabel(labels, "lengthUnit")}
          value={lengthUnit}
          error={lengthUnitError}
          kind="length"
          onChange={onLengthUnit}
        />
        <FractionalInput
          name="width"
          label={fieldLabel(labels, "width")}
          value={width}
          error={widthError}
          locale={locale}
          parsedHintLabel={labels.ui.parsedValue ?? "Parsed value"}
          onChange={onWidth}
        />
        <UnitSelect
          locale={locale}
          name="widthUnit"
          label={fieldLabel(labels, "widthUnit")}
          value={widthUnit}
          error={widthUnitError}
          kind="length"
          onChange={onWidthUnit}
        />
      </FormGrid>
    </Fieldset>
  );
}

export function RoomDimensionsFieldset({
  labels,
  locale,
  length,
  width,
  height,
  lengthUnit,
  widthUnit,
  heightUnit,
  errors,
  onLength,
  onWidth,
  onHeight,
  onLengthUnit,
  onWidthUnit,
  onHeightUnit,
}: {
  labels: CalculatorLabels;
  locale: "en" | "es";
  length: string;
  width: string;
  height: string;
  lengthUnit: string;
  widthUnit: string;
  heightUnit: string;
  errors: Record<string, string>;
  onLength: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onWidth: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onHeight: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLengthUnit: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onWidthUnit: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onHeightUnit: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  const err = (key: string) => resolveFieldError(key, errors, labels.errors);

  return (
    <Fieldset legend={fieldLabel(labels, "dimensions") || "Dimensions"}>
      <FormGrid>
        <FractionalInput
          name="length"
          label={fieldLabel(labels, "length")}
          value={length}
          error={err("length")}
          locale={locale}
          parsedHintLabel={labels.ui.parsedValue ?? "Parsed value"}
          onChange={onLength}
        />
        <UnitSelect
          locale={locale}
          name="lengthUnit"
          label={fieldLabel(labels, "lengthUnit")}
          value={lengthUnit}
          error={err("lengthUnit")}
          kind="length"
          onChange={onLengthUnit}
        />
        <FractionalInput
          name="width"
          label={fieldLabel(labels, "width")}
          value={width}
          error={err("width")}
          locale={locale}
          parsedHintLabel={labels.ui.parsedValue ?? "Parsed value"}
          onChange={onWidth}
        />
        <UnitSelect
          locale={locale}
          name="widthUnit"
          label={fieldLabel(labels, "widthUnit")}
          value={widthUnit}
          error={err("widthUnit")}
          kind="length"
          onChange={onWidthUnit}
        />
        <FractionalInput
          name="height"
          label={fieldLabel(labels, "height")}
          value={height}
          error={err("height")}
          locale={locale}
          parsedHintLabel={labels.ui.parsedValue ?? "Parsed value"}
          onChange={onHeight}
        />
        <UnitSelect
          locale={locale}
          name="heightUnit"
          label={fieldLabel(labels, "heightUnit")}
          value={heightUnit}
          error={err("heightUnit")}
          kind="length"
          onChange={onHeightUnit}
        />
      </FormGrid>
    </Fieldset>
  );
}

export function AreaWithUnitFields({
  labels,
  locale,
  areaKey = "area",
  unitKey = "areaUnit",
  area,
  areaUnit,
  areaError,
  unitError,
  onArea,
  onUnit,
}: {
  labels: CalculatorLabels;
  locale: "en" | "es";
  areaKey?: string;
  unitKey?: string;
  area: string;
  areaUnit: string;
  areaError?: string;
  unitError?: string;
  onArea: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUnit: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <FormGrid>
      <FractionalInput
        name={areaKey}
        label={fieldLabel(labels, areaKey)}
        value={area}
        error={areaError}
        locale={locale}
        parsedHintLabel={labels.ui.parsedValue ?? "Parsed value"}
        onChange={onArea}
      />
      <UnitSelect
        locale={locale}
        name={unitKey}
        label={fieldLabel(labels, unitKey)}
        value={areaUnit}
        error={unitError}
        kind="area"
        onChange={onUnit}
      />
    </FormGrid>
  );
}

type RoomRow = {
  name?: string;
  length: number | string;
  width: number | string;
  lengthUnit: LengthUnit;
  widthUnit: LengthUnit;
};

export function RoomListEditor({
  labels,
  locale,
  rooms,
  errors,
  setInputs,
}: {
  labels: CalculatorLabels;
  locale: "en" | "es";
  rooms: RoomRow[];
  errors: Record<string, string>;
  setInputs: CalculatorFormProps["setInputs"];
}) {
  const err = (key: string) => resolveFieldError(key, errors, labels.errors);
  const addLabel = labels.ui.addRowRoom ?? labels.ui.addRow ?? "Add room";
  const removeLabel = labels.ui.removeRow ?? "Remove";
  const roomLabel = labels.ui.room ?? "Room";

  const updateRoom = (index: number, patch: Partial<RoomRow>) => {
    setInputs((prev) => {
      const list = [...((prev.rooms as RoomRow[]) ?? [])];
      list[index] = { ...list[index], ...patch };
      return { ...prev, rooms: list };
    });
  };

  const addRoom = () => {
    setInputs((prev) => {
      const list = [...((prev.rooms as RoomRow[]) ?? [])];
      list.push({
        name: `${roomLabel} ${list.length + 1}`,
        length: 10,
        width: 10,
        lengthUnit: "ft",
        widthUnit: "ft",
      });
      return { ...prev, rooms: list };
    });
  };

  const removeRoom = (index: number) => {
    setInputs((prev) => {
      const list = [...((prev.rooms as RoomRow[]) ?? [])];
      list.splice(index, 1);
      return {
        ...prev,
        rooms: list.length
          ? list
          : [
              {
                name: roomLabel,
                length: 10,
                width: 10,
                lengthUnit: "ft",
                widthUnit: "ft",
              },
            ],
      };
    });
  };

  return (
    <div className="space-y-4">
      {rooms.map((room, index) => (
        <Fieldset
          key={index}
          legend={`${roomLabel} ${index + 1}${room.name ? `: ${room.name}` : ""}`}
        >
          <FormGrid>
            <Input
              name={`rooms.${index}.name`}
              label={fieldLabel(labels, "roomName")}
              value={room.name ?? ""}
              onChange={(e) => updateRoom(index, { name: e.target.value })}
            />
            <FractionalInput
              name={`rooms.${index}.length`}
              label={fieldLabel(labels, "length")}
              value={String(room.length ?? "")}
              error={err(`rooms.${index}.length`)}
              locale={locale}
              parsedHintLabel={labels.ui.parsedValue ?? "Parsed value"}
              onChange={(e) => updateRoom(index, { length: e.target.value })}
            />
            <UnitSelect
              locale={locale}
              name={`rooms.${index}.lengthUnit`}
              label={fieldLabel(labels, "lengthUnit")}
              value={room.lengthUnit}
              kind="length"
              onChange={(e) =>
                updateRoom(index, { lengthUnit: e.target.value as LengthUnit })
              }
            />
            <FractionalInput
              name={`rooms.${index}.width`}
              label={fieldLabel(labels, "width")}
              value={String(room.width ?? "")}
              error={err(`rooms.${index}.width`)}
              locale={locale}
              parsedHintLabel={labels.ui.parsedValue ?? "Parsed value"}
              onChange={(e) => updateRoom(index, { width: e.target.value })}
            />
            <UnitSelect
              locale={locale}
              name={`rooms.${index}.widthUnit`}
              label={fieldLabel(labels, "widthUnit")}
              value={room.widthUnit}
              kind="length"
              onChange={(e) =>
                updateRoom(index, { widthUnit: e.target.value as LengthUnit })
              }
            />
          </FormGrid>
          {rooms.length > 1 ? (
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => removeRoom(index)}
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
              {removeLabel}
            </Button>
          ) : null}
        </Fieldset>
      ))}
      <Button type="button" variant="outline" size="sm" onClick={addRoom}>
        <Plus className="h-4 w-4" aria-hidden="true" />
        {addLabel}
      </Button>
    </div>
  );
}

type LineItemRow = {
  name: string;
  quantity: number | string;
  unitCost: number | string;
};

export function LineItemListEditor({
  labels,
  locale,
  lineItems,
  errors,
  setInputs,
}: {
  labels: CalculatorLabels;
  locale: "en" | "es";
  lineItems: LineItemRow[];
  errors: Record<string, string>;
  setInputs: CalculatorFormProps["setInputs"];
}) {
  const err = (key: string) => resolveFieldError(key, errors, labels.errors);
  const addLabel = labels.ui.addRowLineItem ?? labels.ui.addRow ?? "Add line item";
  const removeLabel = labels.ui.removeRow ?? "Remove";
  const itemLabel = labels.ui.lineItem ?? "Item";

  const updateItem = (index: number, patch: Partial<LineItemRow>) => {
    setInputs((prev) => {
      const list = [...((prev.lineItems as LineItemRow[]) ?? [])];
      list[index] = { ...list[index], ...patch };
      return { ...prev, lineItems: list };
    });
  };

  const addItem = () => {
    setInputs((prev) => {
      const list = [...((prev.lineItems as LineItemRow[]) ?? [])];
      list.push({ name: "", quantity: 1, unitCost: 0 });
      return { ...prev, lineItems: list };
    });
  };

  const removeItem = (index: number) => {
    setInputs((prev) => {
      const list = [...((prev.lineItems as LineItemRow[]) ?? [])];
      list.splice(index, 1);
      return {
        ...prev,
        lineItems: list.length ? list : [{ name: "", quantity: 1, unitCost: 0 }],
      };
    });
  };

  return (
    <div className="space-y-4">
      {lineItems.map((item, index) => (
        <Fieldset key={index} legend={`${itemLabel} ${index + 1}`}>
          <FormGrid>
            <Input
              name={`lineItems.${index}.name`}
              label={fieldLabel(labels, "itemName")}
              value={item.name}
              error={err(`lineItems.${index}.name`)}
              onChange={(e) => updateItem(index, { name: e.target.value })}
            />
            <FractionalInput
              name={`lineItems.${index}.quantity`}
              label={fieldLabel(labels, "quantity")}
              value={String(item.quantity ?? "")}
              error={err(`lineItems.${index}.quantity`)}
              locale={locale}
              parsedHintLabel={labels.ui.parsedValue ?? "Parsed value"}
              onChange={(e) => updateItem(index, { quantity: e.target.value })}
            />
            <CurrencyInput
              name={`lineItems.${index}.unitCost`}
              label={fieldLabel(labels, "unitCost")}
              value={String(item.unitCost ?? "")}
              error={err(`lineItems.${index}.unitCost`)}
              min={0}
              step="0.01"
              onChange={(e) =>
                updateItem(index, {
                  unitCost: e.target.value === "" ? "" : Number(e.target.value),
                })
              }
            />
          </FormGrid>
          {lineItems.length > 1 ? (
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => removeItem(index)}
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
              {removeLabel}
            </Button>
          ) : null}
        </Fieldset>
      ))}
      <Button type="button" variant="outline" size="sm" onClick={addItem}>
        <Plus className="h-4 w-4" aria-hidden="true" />
        {addLabel}
      </Button>
    </div>
  );
}

type MaterialRow = { name: string; amount: number };

export function MaterialListEditor({
  labels,
  materials,
  errors,
  setInputs,
}: {
  labels: CalculatorLabels;
  materials: MaterialRow[];
  errors: Record<string, string>;
  setInputs: CalculatorFormProps["setInputs"];
}) {
  const err = (key: string) => resolveFieldError(key, errors, labels.errors);
  const addLabel = labels.ui.addRowMaterial ?? labels.ui.addRow ?? "Add material";
  const removeLabel = labels.ui.removeRow ?? "Remove";
  const materialLabel = labels.ui.material ?? "Material";

  const updateMaterial = (index: number, patch: Partial<MaterialRow>) => {
    setInputs((prev) => {
      const list = [...((prev.materials as MaterialRow[]) ?? [])];
      list[index] = { ...list[index], ...patch };
      return { ...prev, materials: list };
    });
  };

  const addMaterial = () => {
    setInputs((prev) => {
      const list = [...((prev.materials as MaterialRow[]) ?? [])];
      list.push({ name: "", amount: 0 });
      return { ...prev, materials: list };
    });
  };

  const removeMaterial = (index: number) => {
    setInputs((prev) => {
      const list = [...((prev.materials as MaterialRow[]) ?? [])];
      list.splice(index, 1);
      return {
        ...prev,
        materials: list.length ? list : [{ name: "", amount: 0 }],
      };
    });
  };

  return (
    <div className="space-y-4">
      {materials.map((item, index) => (
        <Fieldset key={index} legend={`${materialLabel} ${index + 1}`}>
          <FormGrid>
            <Input
              name={`materials.${index}.name`}
              label={fieldLabel(labels, "materialName")}
              value={item.name}
              error={err(`materials.${index}.name`)}
              onChange={(e) => updateMaterial(index, { name: e.target.value })}
            />
            <CurrencyInput
              name={`materials.${index}.amount`}
              label={fieldLabel(labels, "amount")}
              value={String(item.amount ?? "")}
              error={err(`materials.${index}.amount`)}
              min={0}
              step="0.01"
              onChange={(e) =>
                updateMaterial(index, {
                  amount: e.target.value === "" ? 0 : Number(e.target.value),
                })
              }
            />
          </FormGrid>
          {materials.length > 1 ? (
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => removeMaterial(index)}
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
              {removeLabel}
            </Button>
          ) : null}
        </Fieldset>
      ))}
      <Button type="button" variant="outline" size="sm" onClick={addMaterial}>
        <Plus className="h-4 w-4" aria-hidden="true" />
        {addLabel}
      </Button>
    </div>
  );
}

type WallRow = { length: number };

export function WallListEditor({
  labels,
  walls,
  errors,
  setInputs,
}: {
  labels: CalculatorLabels;
  locale: "en" | "es";
  walls: WallRow[];
  errors: Record<string, string>;
  setInputs: CalculatorFormProps["setInputs"];
}) {
  const err = (key: string) => resolveFieldError(key, errors, labels.errors);
  const addLabel = labels.ui.addRowWall ?? labels.ui.addRow ?? "Add wall";
  const removeLabel = labels.ui.removeRow ?? "Remove";
  const wallLabel = labels.ui.wall ?? "Wall";

  const updateWall = (index: number, length: number) => {
    setInputs((prev) => {
      const list = [...((prev.walls as WallRow[]) ?? [])];
      list[index] = { length };
      return { ...prev, walls: list };
    });
  };

  const addWall = () => {
    setInputs((prev) => {
      const list = [...((prev.walls as WallRow[]) ?? [])];
      list.push({ length: 10 });
      return { ...prev, walls: list };
    });
  };

  const removeWall = (index: number) => {
    setInputs((prev) => {
      const list = [...((prev.walls as WallRow[]) ?? [])];
      list.splice(index, 1);
      return { ...prev, walls: list.length ? list : [{ length: 10 }] };
    });
  };

  return (
    <div className="space-y-4">
      {walls.map((wall, index) => (
        <Fieldset key={index} legend={`${wallLabel} ${index + 1}`}>
          <Input
            name={`walls.${index}.length`}
            type="number"
            label={fieldLabel(labels, "wallLength")}
            value={String(wall.length ?? "")}
            error={err(`walls.${index}.length`)}
            min={0}
            step="any"
            onChange={(e) =>
              updateWall(index, e.target.value === "" ? 0 : Number(e.target.value))
            }
          />
          {walls.length > 1 ? (
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => removeWall(index)}
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
              {removeLabel}
            </Button>
          ) : null}
        </Fieldset>
      ))}
      <Button type="button" variant="outline" size="sm" onClick={addWall}>
        <Plus className="h-4 w-4" aria-hidden="true" />
        {addLabel}
      </Button>
    </div>
  );
}

export function ThicknessFields({
  labels,
  locale,
  thickness,
  thicknessUnit,
  thicknessError,
  thicknessUnitError,
  onThickness,
  onThicknessUnit,
}: {
  labels: CalculatorLabels;
  locale: "en" | "es";
  thickness: string;
  thicknessUnit: string;
  thicknessError?: string;
  thicknessUnitError?: string;
  onThickness: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onThicknessUnit: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <FormGrid>
      <FractionalInput
        name="thickness"
        label={fieldLabel(labels, "thickness")}
        value={thickness}
        error={thicknessError}
        locale={locale}
        parsedHintLabel={labels.ui.parsedValue ?? "Parsed value"}
        onChange={onThickness}
      />
      <UnitSelect
        locale={locale}
        name="thicknessUnit"
        label={fieldLabel(labels, "thicknessUnit")}
        value={thicknessUnit}
        error={thicknessUnitError}
        kind="length"
        onChange={onThicknessUnit}
      />
    </FormGrid>
  );
}
