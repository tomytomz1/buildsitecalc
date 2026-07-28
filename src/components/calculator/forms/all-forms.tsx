"use client";

import { Fieldset } from "@/components/ui/Fieldset";
import { FractionalInput } from "@/components/ui/FractionalInput";
import { Input } from "@/components/ui/Input";
import { PercentInput } from "@/components/ui/PercentInput";
import { Select } from "@/components/ui/Select";
import { UnitSelect } from "@/components/ui/UnitSelect";
import { CurrencyInput } from "@/components/ui/CurrencyInput";
import type { CalculatorId } from "@/lib/calculators/types";
import {
  AreaWithUnitFields,
  FormGrid,
  LengthWidthFieldset,
  LineItemListEditor,
  MaterialListEditor,
  RoomDimensionsFieldset,
  RoomListEditor,
  ThicknessFields,
  useFormHelpers,
  WallListEditor,
  WasteField,
} from "./shared";
import type { CalculatorFormProps } from "./types";

function ConcreteSlabForm(props: CalculatorFormProps) {
  const { lbl, err, num, setFrac, setSelect, locale, labels } = useFormHelpers(props);
  return (
    <div className="space-y-4">
      <LengthWidthFieldset
        labels={labels}
        locale={locale}
        length={num("length")}
        width={num("width")}
        lengthUnit={String(props.inputs.lengthUnit ?? "ft")}
        widthUnit={String(props.inputs.widthUnit ?? "ft")}
        lengthError={err("length")}
        widthError={err("width")}
        onLength={setFrac("length")}
        onWidth={setFrac("width")}
        onLengthUnit={setSelect("lengthUnit")}
        onWidthUnit={setSelect("widthUnit")}
      />
      <Fieldset legend={lbl("thickness")}>
        <ThicknessFields
          labels={labels}
          locale={locale}
          thickness={num("thickness")}
          thicknessUnit={String(props.inputs.thicknessUnit ?? "in")}
          thicknessError={err("thickness")}
          onThickness={setFrac("thickness")}
          onThicknessUnit={setSelect("thicknessUnit")}
        />
      </Fieldset>
      <WasteField
        labels={labels}
        locale={locale}
        value={num("wastePercent")}
        error={err("wastePercent")}
        onChange={(e) =>
          props.setField("wastePercent", e.target.value === "" ? "" : Number(e.target.value))
        }
      />
    </div>
  );
}

function ConcreteBagsForm(props: CalculatorFormProps) {
  const { lbl, err, num, setFrac, setSelect, locale, labels, setField } = useFormHelpers(props);
  const useVolume = props.inputs.volume !== undefined && props.inputs.volume !== "";

  return (
    <div className="space-y-4">
      <Select
        name="entryMode"
        label={lbl("entryMode")}
        value={useVolume ? "volume" : "dimensions"}
        options={[
          { value: "dimensions", label: labels.ui.modeDimensions ?? "Dimensions" },
          { value: "volume", label: labels.ui.modeVolume ?? "Volume" },
        ]}
        onChange={(e) => {
          if (e.target.value === "volume") {
            setField("volume", 1);
            setField("volumeUnit", "ft3");
          } else {
            setField("volume", undefined);
            setField("length", 10);
            setField("width", 10);
            setField("thickness", 4);
          }
        }}
      />
      {useVolume ? (
        <FormGrid>
          <FractionalInput
            name="volume"
            label={lbl("volume")}
            value={num("volume")}
            error={err("volume")}
            locale={locale}
            onChange={setFrac("volume")}
          />
          <UnitSelect
            name="volumeUnit"
            label={lbl("volumeUnit")}
            value={String(props.inputs.volumeUnit ?? "ft3")}
            kind="volume"
            onChange={setSelect("volumeUnit")}
          />
        </FormGrid>
      ) : (
        <>
          <LengthWidthFieldset
            labels={labels}
            locale={locale}
            length={num("length")}
            width={num("width")}
            lengthUnit={String(props.inputs.lengthUnit ?? "ft")}
            widthUnit={String(props.inputs.widthUnit ?? "ft")}
            lengthError={err("length")}
            widthError={err("width")}
            onLength={setFrac("length")}
            onWidth={setFrac("width")}
            onLengthUnit={setSelect("lengthUnit")}
            onWidthUnit={setSelect("widthUnit")}
          />
          <ThicknessFields
            labels={labels}
            locale={locale}
            thickness={num("thickness")}
            thicknessUnit={String(props.inputs.thicknessUnit ?? "in")}
            thicknessError={err("thickness")}
            onThickness={setFrac("thickness")}
            onThicknessUnit={setSelect("thicknessUnit")}
          />
        </>
      )}
      <FormGrid>
        <Select
          name="bagSize"
          label={lbl("bagSize")}
          value={String(props.inputs.bagSize ?? 60)}
          error={err("bagSize")}
          options={[
            { value: "40", label: "40 lb" },
            { value: "60", label: "60 lb" },
            { value: "80", label: "80 lb" },
          ]}
          onChange={setSelect("bagSize")}
        />
        <WasteField
          labels={labels}
          locale={locale}
          value={num("wastePercent")}
          error={err("wastePercent")}
          onChange={(e) =>
            setField("wastePercent", e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </FormGrid>
    </div>
  );
}

function PaintForm(props: CalculatorFormProps) {
  const { lbl, err, num, setFrac, setSelect, setNum, locale, labels, setField } =
    useFormHelpers(props);
  const useWallArea = props.inputs.wallArea !== undefined && props.inputs.wallArea !== "";

  return (
    <div className="space-y-4">
      <Select
        name="entryMode"
        label={lbl("entryMode")}
        value={useWallArea ? "area" : "room"}
        options={[
          { value: "room", label: labels.ui.modeDimensions ?? "Room dimensions" },
          { value: "area", label: labels.ui.modeArea ?? "Wall area" },
        ]}
        onChange={(e) => {
          if (e.target.value === "area") {
            setField("wallArea", 400);
            setField("wallAreaUnit", "ft2");
          } else {
            setField("wallArea", undefined);
            setField("length", 12);
            setField("width", 10);
            setField("height", 8);
          }
        }}
      />
      {useWallArea ? (
        <AreaWithUnitFields
          labels={labels}
          locale={locale}
          areaKey="wallArea"
          unitKey="wallAreaUnit"
          area={num("wallArea")}
          areaUnit={String(props.inputs.wallAreaUnit ?? "ft2")}
          areaError={err("wallArea")}
          onArea={setFrac("wallArea")}
          onUnit={setSelect("wallAreaUnit")}
        />
      ) : (
        <RoomDimensionsFieldset
          labels={labels}
          locale={locale}
          length={num("length")}
          width={num("width")}
          height={num("height")}
          lengthUnit={String(props.inputs.lengthUnit ?? "ft")}
          widthUnit={String(props.inputs.widthUnit ?? "ft")}
          heightUnit={String(props.inputs.heightUnit ?? "ft")}
          errors={props.errors}
          onLength={setFrac("length")}
          onWidth={setFrac("width")}
          onHeight={setFrac("height")}
          onLengthUnit={setSelect("lengthUnit")}
          onWidthUnit={setSelect("widthUnit")}
          onHeightUnit={setSelect("heightUnit")}
        />
      )}
      <Fieldset legend={lbl("openings") || "Openings"}>
        <FormGrid>
          <Input
            name="doors"
            type="number"
            label={lbl("doors")}
            value={num("doors")}
            error={err("doors")}
            min={0}
            onChange={setNum("doors")}
          />
          <Input
            name="windows"
            type="number"
            label={lbl("windows")}
            value={num("windows")}
            error={err("windows")}
            min={0}
            onChange={setNum("windows")}
          />
          <FractionalInput
            name="doorArea"
            label={lbl("doorArea")}
            value={num("doorArea")}
            error={err("doorArea")}
            locale={locale}
            onChange={setFrac("doorArea")}
          />
          <FractionalInput
            name="windowArea"
            label={lbl("windowArea")}
            value={num("windowArea")}
            error={err("windowArea")}
            locale={locale}
            onChange={setFrac("windowArea")}
          />
        </FormGrid>
      </Fieldset>
      <FormGrid>
        <Input
          name="coats"
          type="number"
          label={lbl("coats")}
          value={num("coats")}
          error={err("coats")}
          min={1}
          onChange={setNum("coats")}
        />
        <Input
          name="coverageRate"
          type="number"
          label={lbl("coverageRate")}
          value={num("coverageRate")}
          error={err("coverageRate")}
          min={1}
          onChange={setNum("coverageRate")}
        />
        <WasteField
          labels={labels}
          locale={locale}
          value={num("wastePercent")}
          error={err("wastePercent")}
          onChange={(e) =>
            setField("wastePercent", e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </FormGrid>
    </div>
  );
}

function FlooringForm(props: CalculatorFormProps) {
  const { lbl, err, num, setFrac, setSelect, locale, labels, setField } = useFormHelpers(props);
  const useArea = props.inputs.area !== undefined && props.inputs.area !== "";

  return (
    <div className="space-y-4">
      <Select
        name="entryMode"
        label={lbl("entryMode")}
        value={useArea ? "area" : "dimensions"}
        options={[
          { value: "dimensions", label: labels.ui.modeDimensions ?? "Dimensions" },
          { value: "area", label: labels.ui.modeArea ?? "Area" },
        ]}
        onChange={(e) => {
          if (e.target.value === "area") {
            setField("area", 120);
            setField("areaUnit", "ft2");
          } else {
            setField("area", undefined);
            setField("length", 12);
            setField("width", 10);
          }
        }}
      />
      {useArea ? (
        <AreaWithUnitFields
          labels={labels}
          locale={locale}
          area={num("area")}
          areaUnit={String(props.inputs.areaUnit ?? "ft2")}
          areaError={err("area")}
          onArea={setFrac("area")}
          onUnit={setSelect("areaUnit")}
        />
      ) : (
        <LengthWidthFieldset
          labels={labels}
          locale={locale}
          length={num("length")}
          width={num("width")}
          lengthUnit={String(props.inputs.lengthUnit ?? "ft")}
          widthUnit={String(props.inputs.widthUnit ?? "ft")}
          lengthError={err("length")}
          widthError={err("width")}
          onLength={setFrac("length")}
          onWidth={setFrac("width")}
          onLengthUnit={setSelect("lengthUnit")}
          onWidthUnit={setSelect("widthUnit")}
        />
      )}
      <Fieldset legend={lbl("packCoverage") || "Pack coverage"}>
        <FormGrid>
          <FractionalInput
            name="packCoverage"
            label={lbl("packCoverage")}
            value={num("packCoverage")}
            error={err("packCoverage")}
            locale={locale}
            onChange={setFrac("packCoverage")}
          />
          <UnitSelect
            name="packCoverageUnit"
            label={lbl("packCoverageUnit")}
            value={String(props.inputs.packCoverageUnit ?? "ft2")}
            kind="area"
            onChange={setSelect("packCoverageUnit")}
          />
        </FormGrid>
      </Fieldset>
      <WasteField
        labels={labels}
        locale={locale}
        value={num("wastePercent")}
        error={err("wastePercent")}
        onChange={(e) =>
          setField("wastePercent", e.target.value === "" ? "" : Number(e.target.value))
        }
      />
    </div>
  );
}

function TileForm(props: CalculatorFormProps) {
  const { lbl, err, num, setFrac, setSelect, locale, labels, setField } = useFormHelpers(props);
  const useArea = props.inputs.area !== undefined && props.inputs.area !== "";

  return (
    <div className="space-y-4">
      <Select
        name="entryMode"
        label={lbl("entryMode")}
        value={useArea ? "area" : "dimensions"}
        options={[
          { value: "dimensions", label: labels.ui.modeDimensions ?? "Dimensions" },
          { value: "area", label: labels.ui.modeArea ?? "Area" },
        ]}
        onChange={(e) => {
          if (e.target.value === "area") {
            setField("area", 80);
            setField("areaUnit", "ft2");
          } else {
            setField("area", undefined);
          }
        }}
      />
      {useArea ? (
        <AreaWithUnitFields
          labels={labels}
          locale={locale}
          area={num("area")}
          areaUnit={String(props.inputs.areaUnit ?? "ft2")}
          areaError={err("area")}
          onArea={setFrac("area")}
          onUnit={setSelect("areaUnit")}
        />
      ) : (
        <LengthWidthFieldset
          labels={labels}
          locale={locale}
          length={num("length")}
          width={num("width")}
          lengthUnit={String(props.inputs.lengthUnit ?? "ft")}
          widthUnit={String(props.inputs.widthUnit ?? "ft")}
          lengthError={err("length")}
          widthError={err("width")}
          onLength={setFrac("length")}
          onWidth={setFrac("width")}
          onLengthUnit={setSelect("lengthUnit")}
          onWidthUnit={setSelect("widthUnit")}
        />
      )}
      <Fieldset legend={lbl("tileSize") || "Tile size"}>
        <FormGrid>
          <FractionalInput
            name="tileLength"
            label={lbl("tileLength")}
            value={num("tileLength")}
            error={err("tileLength")}
            locale={locale}
            onChange={setFrac("tileLength")}
          />
          <UnitSelect
            name="tileLengthUnit"
            label={lbl("tileLengthUnit")}
            value={String(props.inputs.tileLengthUnit ?? "in")}
            kind="length"
            onChange={setSelect("tileLengthUnit")}
          />
          <FractionalInput
            name="tileWidth"
            label={lbl("tileWidth")}
            value={num("tileWidth")}
            error={err("tileWidth")}
            locale={locale}
            onChange={setFrac("tileWidth")}
          />
          <UnitSelect
            name="tileWidthUnit"
            label={lbl("tileWidthUnit")}
            value={String(props.inputs.tileWidthUnit ?? "in")}
            kind="length"
            onChange={setSelect("tileWidthUnit")}
          />
        </FormGrid>
      </Fieldset>
      <FormGrid>
        <FractionalInput
          name="groutGap"
          label={lbl("groutGap")}
          value={num("groutGap")}
          error={err("groutGap")}
          locale={locale}
          onChange={setFrac("groutGap")}
        />
        <UnitSelect
          name="groutGapUnit"
          label={lbl("groutGapUnit")}
          value={String(props.inputs.groutGapUnit ?? "in")}
          kind="length"
          onChange={setSelect("groutGapUnit")}
        />
        <WasteField
          labels={labels}
          locale={locale}
          value={num("wastePercent")}
          error={err("wastePercent")}
          onChange={(e) =>
            setField("wastePercent", e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </FormGrid>
    </div>
  );
}

function DrywallForm(props: CalculatorFormProps) {
  const { lbl, err, num, setFrac, setSelect, locale, labels, setField } = useFormHelpers(props);
  const useArea = props.inputs.area !== undefined && props.inputs.area !== "";

  return (
    <div className="space-y-4">
      <Select
        name="entryMode"
        label={lbl("entryMode")}
        value={useArea ? "area" : "dimensions"}
        options={[
          { value: "dimensions", label: labels.ui.modeDimensions ?? "Dimensions" },
          { value: "area", label: labels.ui.modeArea ?? "Area" },
        ]}
        onChange={(e) => {
          if (e.target.value === "area") {
            setField("area", 120);
            setField("areaUnit", "ft2");
          } else {
            setField("area", undefined);
          }
        }}
      />
      {useArea ? (
        <AreaWithUnitFields
          labels={labels}
          locale={locale}
          area={num("area")}
          areaUnit={String(props.inputs.areaUnit ?? "ft2")}
          areaError={err("area")}
          onArea={setFrac("area")}
          onUnit={setSelect("areaUnit")}
        />
      ) : (
        <LengthWidthFieldset
          labels={labels}
          locale={locale}
          length={num("length")}
          width={num("width")}
          lengthUnit={String(props.inputs.lengthUnit ?? "ft")}
          widthUnit={String(props.inputs.widthUnit ?? "ft")}
          lengthError={err("length")}
          widthError={err("width")}
          onLength={setFrac("length")}
          onWidth={setFrac("width")}
          onLengthUnit={setSelect("lengthUnit")}
          onWidthUnit={setSelect("widthUnit")}
        />
      )}
      <FormGrid>
        <Select
          name="sheetSize"
          label={lbl("sheetSize")}
          value={String(props.inputs.sheetSize ?? "4x8")}
          error={err("sheetSize")}
          options={[
            { value: "4x8", label: '4×8 (32 ft²)' },
            { value: "4x10", label: '4×10 (40 ft²)' },
            { value: "4x12", label: '4×12 (48 ft²)' },
          ]}
          onChange={setSelect("sheetSize")}
        />
        <WasteField
          labels={labels}
          locale={locale}
          value={num("wastePercent")}
          error={err("wastePercent")}
          onChange={(e) =>
            setField("wastePercent", e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </FormGrid>
    </div>
  );
}

function RoofingShingleForm(props: CalculatorFormProps) {
  const { lbl, err, num, setFrac, setSelect, setNum, locale, labels, setField } =
    useFormHelpers(props);
  const useRoofArea = props.inputs.roofArea !== undefined && props.inputs.roofArea !== "";

  return (
    <div className="space-y-4">
      <Select
        name="entryMode"
        label={lbl("entryMode")}
        value={useRoofArea ? "area" : "dimensions"}
        options={[
          { value: "dimensions", label: labels.ui.modeDimensions ?? "Footprint + pitch" },
          { value: "area", label: labels.ui.modeArea ?? "Roof area" },
        ]}
        onChange={(e) => {
          if (e.target.value === "area") {
            setField("roofArea", 1200);
            setField("roofAreaUnit", "ft2");
          } else {
            setField("roofArea", undefined);
          }
        }}
      />
      {useRoofArea ? (
        <AreaWithUnitFields
          labels={labels}
          locale={locale}
          areaKey="roofArea"
          unitKey="roofAreaUnit"
          area={num("roofArea")}
          areaUnit={String(props.inputs.roofAreaUnit ?? "ft2")}
          areaError={err("roofArea")}
          onArea={setFrac("roofArea")}
          onUnit={setSelect("roofAreaUnit")}
        />
      ) : (
        <>
          <LengthWidthFieldset
            labels={labels}
            locale={locale}
            length={num("length")}
            width={num("width")}
            lengthUnit={String(props.inputs.lengthUnit ?? "ft")}
            widthUnit={String(props.inputs.widthUnit ?? "ft")}
            lengthError={err("length")}
            widthError={err("width")}
            onLength={setFrac("length")}
            onWidth={setFrac("width")}
            onLengthUnit={setSelect("lengthUnit")}
            onWidthUnit={setSelect("widthUnit")}
          />
          <Fieldset legend={lbl("pitch") || "Pitch"}>
            <FormGrid>
              <FractionalInput
                name="pitchRise"
                label={lbl("pitchRise")}
                value={num("pitchRise")}
                error={err("pitchRise")}
                locale={locale}
                onChange={setFrac("pitchRise")}
              />
              <FractionalInput
                name="pitchRun"
                label={lbl("pitchRun")}
                value={num("pitchRun")}
                error={err("pitchRun")}
                locale={locale}
                onChange={setFrac("pitchRun")}
              />
              <FractionalInput
                name="pitchFactor"
                label={lbl("pitchFactor")}
                value={num("pitchFactor")}
                error={err("pitchFactor")}
                locale={locale}
                hint={lbl("pitchFactorHint")}
                onChange={setFrac("pitchFactor")}
              />
            </FormGrid>
          </Fieldset>
        </>
      )}
      <FormGrid>
        <Input
          name="bundlesPerSquare"
          type="number"
          label={lbl("bundlesPerSquare")}
          value={num("bundlesPerSquare")}
          error={err("bundlesPerSquare")}
          min={1}
          onChange={setNum("bundlesPerSquare")}
        />
        <WasteField
          labels={labels}
          locale={locale}
          value={num("wastePercent")}
          error={err("wastePercent")}
          onChange={(e) =>
            setField("wastePercent", e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </FormGrid>
    </div>
  );
}

function MulchForm(props: CalculatorFormProps) {
  const { lbl, err, num, setFrac, setSelect, locale, labels, setField } = useFormHelpers(props);
  return (
    <div className="space-y-4">
      <AreaWithUnitFields
        labels={labels}
        locale={locale}
        area={num("area")}
        areaUnit={String(props.inputs.areaUnit ?? "ft2")}
        areaError={err("area")}
        onArea={setFrac("area")}
        onUnit={setSelect("areaUnit")}
      />
      <FormGrid>
        <FractionalInput
          name="depth"
          label={lbl("depth")}
          value={num("depth")}
          error={err("depth")}
          locale={locale}
          onChange={setFrac("depth")}
        />
        <UnitSelect
          name="depthUnit"
          label={lbl("depthUnit")}
          value={String(props.inputs.depthUnit ?? "in")}
          kind="length"
          onChange={setSelect("depthUnit")}
        />
        <FractionalInput
          name="bagVolumeFt3"
          label={lbl("bagVolumeFt3")}
          value={num("bagVolumeFt3")}
          error={err("bagVolumeFt3")}
          locale={locale}
          onChange={setFrac("bagVolumeFt3")}
        />
        <WasteField
          labels={labels}
          locale={locale}
          value={num("wastePercent")}
          error={err("wastePercent")}
          onChange={(e) =>
            setField("wastePercent", e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </FormGrid>
    </div>
  );
}

function GravelForm(props: CalculatorFormProps) {
  const { lbl, err, num, setFrac, setSelect, setNum, locale, labels, setField } =
    useFormHelpers(props);
  return (
    <div className="space-y-4">
      <AreaWithUnitFields
        labels={labels}
        locale={locale}
        area={num("area")}
        areaUnit={String(props.inputs.areaUnit ?? "ft2")}
        areaError={err("area")}
        onArea={setFrac("area")}
        onUnit={setSelect("areaUnit")}
      />
      <FormGrid>
        <FractionalInput
          name="depth"
          label={lbl("depth")}
          value={num("depth")}
          error={err("depth")}
          locale={locale}
          onChange={setFrac("depth")}
        />
        <UnitSelect
          name="depthUnit"
          label={lbl("depthUnit")}
          value={String(props.inputs.depthUnit ?? "in")}
          kind="length"
          onChange={setSelect("depthUnit")}
        />
        <Select
          name="densityKey"
          label={lbl("densityKey")}
          value={String(props.inputs.densityKey ?? "crushed")}
          error={err("densityKey")}
          options={[
            { value: "loose", label: lbl("densityLoose") || "Loose" },
            { value: "compacted", label: lbl("densityCompacted") || "Compacted" },
            { value: "crushed", label: lbl("densityCrushed") || "Crushed stone" },
          ]}
          onChange={setSelect("densityKey")}
        />
        <FractionalInput
          name="customDensityKgM3"
          label={lbl("customDensityKgM3")}
          value={num("customDensityKgM3")}
          error={err("customDensityKgM3")}
          locale={locale}
          onChange={setFrac("customDensityKgM3")}
        />
        <WasteField
          labels={labels}
          locale={locale}
          value={num("wastePercent")}
          error={err("wastePercent")}
          onChange={(e) =>
            setField("wastePercent", e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </FormGrid>
    </div>
  );
}

function TopsoilForm(props: CalculatorFormProps) {
  const { lbl, err, num, setFrac, setSelect, setNum, locale, labels, setField } =
    useFormHelpers(props);
  return (
    <div className="space-y-4">
      <AreaWithUnitFields
        labels={labels}
        locale={locale}
        area={num("area")}
        areaUnit={String(props.inputs.areaUnit ?? "ft2")}
        areaError={err("area")}
        onArea={setFrac("area")}
        onUnit={setSelect("areaUnit")}
      />
      <FormGrid>
        <Input
          name="depth"
          type="number"
          label={lbl("depth")}
          value={num("depth")}
          error={err("depth")}
          min={0}
          step="any"
          onChange={setNum("depth")}
        />
        <UnitSelect
          name="depthUnit"
          label={lbl("depthUnit")}
          value={String(props.inputs.depthUnit ?? "in")}
          kind="length"
          onChange={setSelect("depthUnit")}
        />
        <WasteField
          labels={labels}
          locale={locale}
          value={num("wastePercent")}
          error={err("wastePercent")}
          onChange={(e) =>
            setField("wastePercent", e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </FormGrid>
    </div>
  );
}

function FenceMaterialForm(props: CalculatorFormProps) {
  const { lbl, err, num, setSelect, setNum, setStr, labels } = useFormHelpers(props);
  return (
    <div className="space-y-4">
      <FormGrid>
        <Input
          name="fenceLength"
          type="number"
          label={lbl("fenceLength")}
          value={num("fenceLength")}
          error={err("fenceLength")}
          min={0}
          step="any"
          onChange={setNum("fenceLength")}
        />
        <UnitSelect
          name="lengthUnit"
          label={lbl("lengthUnit")}
          value={String(props.inputs.lengthUnit ?? "ft")}
          kind="length"
          onChange={setSelect("lengthUnit")}
        />
        <Input
          name="postSpacing"
          type="number"
          label={lbl("postSpacing")}
          value={num("postSpacing")}
          error={err("postSpacing")}
          min={0}
          step="any"
          onChange={setNum("postSpacing")}
        />
        <Input
          name="railsPerSection"
          type="number"
          label={lbl("railsPerSection")}
          value={num("railsPerSection")}
          error={err("railsPerSection")}
          min={1}
          onChange={setNum("railsPerSection")}
        />
        <Input
          name="picketWidth"
          type="number"
          label={lbl("picketWidth")}
          value={num("picketWidth")}
          error={err("picketWidth")}
          min={0}
          step="any"
          onChange={setNum("picketWidth")}
        />
        <Input
          name="picketGap"
          type="number"
          label={lbl("picketGap")}
          value={num("picketGap")}
          error={err("picketGap")}
          min={0}
          step="any"
          onChange={setNum("picketGap")}
        />
        <Input
          name="postSizeNote"
          label={lbl("postSizeNote")}
          value={String(props.inputs.postSizeNote ?? "")}
          onChange={setStr("postSizeNote")}
        />
      </FormGrid>
    </div>
  );
}

function DeckBoardForm(props: CalculatorFormProps) {
  const { lbl, err, num, setSelect, setNum, labels, setField } = useFormHelpers(props);
  return (
    <div className="space-y-4">
      <FormGrid>
        <Input
          name="deckLength"
          type="number"
          label={lbl("deckLength")}
          value={num("deckLength")}
          error={err("deckLength")}
          min={0}
          step="any"
          onChange={setNum("deckLength")}
        />
        <Input
          name="deckWidth"
          type="number"
          label={lbl("deckWidth")}
          value={num("deckWidth")}
          error={err("deckWidth")}
          min={0}
          step="any"
          onChange={setNum("deckWidth")}
        />
        <UnitSelect
          name="lengthUnit"
          label={lbl("lengthUnit")}
          value={String(props.inputs.lengthUnit ?? "ft")}
          kind="length"
          onChange={setSelect("lengthUnit")}
        />
        <Input
          name="boardWidth"
          type="number"
          label={lbl("boardWidth")}
          value={num("boardWidth")}
          error={err("boardWidth")}
          min={0}
          step="any"
          onChange={setNum("boardWidth")}
        />
        <Input
          name="boardLength"
          type="number"
          label={lbl("boardLength")}
          value={num("boardLength")}
          error={err("boardLength")}
          min={0}
          step="any"
          onChange={setNum("boardLength")}
        />
        <Input
          name="gap"
          type="number"
          label={lbl("gap")}
          value={num("gap")}
          error={err("gap")}
          min={0}
          step="any"
          onChange={setNum("gap")}
        />
        <WasteField
          labels={labels}
          locale={props.locale}
          value={num("wastePercent")}
          error={err("wastePercent")}
          onChange={(e) =>
            setField("wastePercent", e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </FormGrid>
    </div>
  );
}

function StairForm(props: CalculatorFormProps) {
  const { lbl, err, num, setSelect, setNum, labels } = useFormHelpers(props);
  return (
    <FormGrid>
      <Input
        name="totalRise"
        type="number"
        label={lbl("totalRise")}
        value={num("totalRise")}
        error={err("totalRise")}
        min={0}
        step="any"
        onChange={setNum("totalRise")}
      />
      <UnitSelect
        name="lengthUnit"
        label={lbl("lengthUnit")}
        value={String(props.inputs.lengthUnit ?? "in")}
        kind="length"
        onChange={setSelect("lengthUnit")}
      />
      <Input
        name="riserHeight"
        type="number"
        label={lbl("riserHeight")}
        value={num("riserHeight")}
        error={err("riserHeight")}
        min={0}
        step="any"
        onChange={setNum("riserHeight")}
      />
      <Input
        name="treadDepth"
        type="number"
        label={lbl("treadDepth")}
        value={num("treadDepth")}
        error={err("treadDepth")}
        min={0}
        step="any"
        onChange={setNum("treadDepth")}
      />
    </FormGrid>
  );
}

function WallpaperForm(props: CalculatorFormProps) {
  const { lbl, err, num, setSelect, setNum, locale, labels, setField } = useFormHelpers(props);
  const { setInputs } = props;
  const useWalls = Array.isArray(props.inputs.walls) && props.inputs.walls.length > 0;

  return (
    <div className="space-y-4">
      <Select
        name="perimeterMode"
        label={lbl("perimeterMode")}
        value={useWalls ? "walls" : "perimeter"}
        options={[
          { value: "perimeter", label: labels.ui.modePerimeter ?? "Total perimeter" },
          { value: "walls", label: labels.ui.modeWalls ?? "Individual walls" },
        ]}
        onChange={(e) => {
          if (e.target.value === "walls") {
            setField("wallPerimeter", undefined);
            setField("walls", [{ length: 12 }, { length: 12 }]);
          } else {
            setField("walls", undefined);
            setField("wallPerimeter", 48);
          }
        }}
      />
      {useWalls ? (
        <WallListEditor
          labels={labels}
          locale={locale}
          walls={(props.inputs.walls as { length: number }[]) ?? []}
          errors={props.errors}
          setInputs={setInputs}
        />
      ) : (
        <Input
          name="wallPerimeter"
          type="number"
          label={lbl("wallPerimeter")}
          value={num("wallPerimeter")}
          error={err("wallPerimeter")}
          min={0}
          step="any"
          onChange={setNum("wallPerimeter")}
        />
      )}
      <FormGrid>
        <Input
          name="wallHeight"
          type="number"
          label={lbl("wallHeight")}
          value={num("wallHeight")}
          error={err("wallHeight")}
          min={0}
          step="any"
          onChange={setNum("wallHeight")}
        />
        <UnitSelect
          name="lengthUnit"
          label={lbl("lengthUnit")}
          value={String(props.inputs.lengthUnit ?? "ft")}
          kind="length"
          onChange={setSelect("lengthUnit")}
        />
      </FormGrid>
      <Fieldset legend={lbl("openings") || "Openings"}>
        <FormGrid>
          <Input
            name="openingsArea"
            type="number"
            label={lbl("openingsArea")}
            value={num("openingsArea")}
            error={err("openingsArea")}
            min={0}
            step="any"
            onChange={setNum("openingsArea")}
          />
          <UnitSelect
            name="openingsAreaUnit"
            label={lbl("openingsAreaUnit")}
            value={String(props.inputs.openingsAreaUnit ?? "ft2")}
            kind="area"
            onChange={setSelect("openingsAreaUnit")}
          />
        </FormGrid>
      </Fieldset>
      <Fieldset legend={lbl("roll") || "Roll"}>
        <FormGrid>
          <Input
            name="rollCoverage"
            type="number"
            label={lbl("rollCoverage")}
            value={num("rollCoverage")}
            error={err("rollCoverage")}
            min={0}
            step="any"
            onChange={setNum("rollCoverage")}
          />
          <UnitSelect
            name="rollCoverageUnit"
            label={lbl("rollCoverageUnit")}
            value={String(props.inputs.rollCoverageUnit ?? "ft2")}
            kind="area"
            onChange={setSelect("rollCoverageUnit")}
          />
          <Input
            name="rollWidth"
            type="number"
            label={lbl("rollWidth")}
            value={num("rollWidth")}
            error={err("rollWidth")}
            min={0}
            step="any"
            onChange={setNum("rollWidth")}
          />
          <Input
            name="rollLength"
            type="number"
            label={lbl("rollLength")}
            value={num("rollLength")}
            error={err("rollLength")}
            min={0}
            step="any"
            onChange={setNum("rollLength")}
          />
          <UnitSelect
            name="rollLengthUnit"
            label={lbl("rollLengthUnit")}
            value={String(props.inputs.rollLengthUnit ?? "ft")}
            kind="length"
            onChange={setSelect("rollLengthUnit")}
          />
        </FormGrid>
      </Fieldset>
      <FormGrid>
        <Input
          name="patternRepeat"
          type="number"
          label={lbl("patternRepeat")}
          value={num("patternRepeat")}
          error={err("patternRepeat")}
          min={0}
          step="any"
          onChange={setNum("patternRepeat")}
        />
        <UnitSelect
          name="patternRepeatUnit"
          label={lbl("patternRepeatUnit")}
          value={String(props.inputs.patternRepeatUnit ?? "in")}
          kind="length"
          onChange={setSelect("patternRepeatUnit")}
        />
        <WasteField
          labels={labels}
          locale={locale}
          value={num("wastePercent")}
          error={err("wastePercent")}
          onChange={(e) =>
            setField("wastePercent", e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </FormGrid>
    </div>
  );
}

function InsulationForm(props: CalculatorFormProps) {
  const { lbl, err, num, setSelect, setNum, labels, setField } = useFormHelpers(props);
  return (
    <div className="space-y-4">
      <AreaWithUnitFields
        labels={labels}
        locale={props.locale}
        area={num("area")}
        areaUnit={String(props.inputs.areaUnit ?? "ft2")}
        areaError={err("area")}
        onArea={(e) => setField("area", e.target.value === "" ? "" : Number(e.target.value))}
        onUnit={setSelect("areaUnit")}
      />
      <FormGrid>
        <Input
          name="battWidth"
          type="number"
          label={lbl("battWidth")}
          value={num("battWidth")}
          error={err("battWidth")}
          min={0}
          step="any"
          onChange={setNum("battWidth")}
        />
        <UnitSelect
          name="battWidthUnit"
          label={lbl("battWidthUnit")}
          value={String(props.inputs.battWidthUnit ?? "in")}
          kind="length"
          onChange={setSelect("battWidthUnit")}
        />
        <Input
          name="rValue"
          type="number"
          label={lbl("rValue")}
          value={num("rValue")}
          error={err("rValue")}
          min={0}
          step="any"
          onChange={setNum("rValue")}
        />
        <WasteField
          labels={labels}
          locale={props.locale}
          value={num("wastePercent")}
          error={err("wastePercent")}
          onChange={(e) =>
            setField("wastePercent", e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </FormGrid>
    </div>
  );
}

function HvacBtuForm(props: CalculatorFormProps) {
  const { lbl, err, num, setSelect, setNum, locale, labels } = useFormHelpers(props);
  return (
    <div className="space-y-4">
      <RoomDimensionsFieldset
        labels={labels}
        locale={locale}
        length={num("length")}
        width={num("width")}
        height={num("height")}
        lengthUnit={String(props.inputs.lengthUnit ?? "ft")}
        widthUnit={String(props.inputs.lengthUnit ?? "ft")}
        heightUnit={String(props.inputs.lengthUnit ?? "ft")}
        errors={props.errors}
        onLength={(e) => props.setField("length", e.target.value === "" ? "" : Number(e.target.value))}
        onWidth={(e) => props.setField("width", e.target.value === "" ? "" : Number(e.target.value))}
        onHeight={(e) => props.setField("height", e.target.value === "" ? "" : Number(e.target.value))}
        onLengthUnit={setSelect("lengthUnit")}
        onWidthUnit={setSelect("lengthUnit")}
        onHeightUnit={setSelect("lengthUnit")}
      />
      <FormGrid>
        <Input
          name="btuPerSqFt"
          type="number"
          label={lbl("btuPerSqFt")}
          value={num("btuPerSqFt")}
          error={err("btuPerSqFt")}
          min={0}
          step="any"
          onChange={setNum("btuPerSqFt")}
        />
        <Input
          name="climateFactor"
          type="number"
          label={lbl("climateFactor")}
          value={num("climateFactor")}
          error={err("climateFactor")}
          min={0}
          step="any"
          onChange={setNum("climateFactor")}
        />
        <Input
          name="insulationFactor"
          type="number"
          label={lbl("insulationFactor")}
          value={num("insulationFactor")}
          error={err("insulationFactor")}
          min={0}
          step="any"
          onChange={setNum("insulationFactor")}
        />
        <Input
          name="sunFactor"
          type="number"
          label={lbl("sunFactor")}
          value={num("sunFactor")}
          error={err("sunFactor")}
          min={0}
          step="any"
          onChange={setNum("sunFactor")}
        />
      </FormGrid>
    </div>
  );
}

function MovingTruckSizeForm(props: CalculatorFormProps) {
  const { lbl, err, num, setNum, labels, setField } = useFormHelpers(props);
  const useCubicFeet = props.inputs.cubicFeet !== undefined && props.inputs.cubicFeet !== "";

  return (
    <div className="space-y-4">
      <Select
        name="entryMode"
        label={lbl("entryMode")}
        value={useCubicFeet ? "volume" : "bedrooms"}
        options={[
          { value: "bedrooms", label: labels.ui.modeBedrooms ?? "Bedrooms" },
          { value: "volume", label: labels.ui.modeCubicFeet ?? "Cubic feet" },
        ]}
        onChange={(e) => {
          if (e.target.value === "volume") {
            setField("cubicFeet", 800);
            setField("bedrooms", undefined);
          } else {
            setField("cubicFeet", undefined);
            setField("bedrooms", 2);
          }
        }}
      />
      {useCubicFeet ? (
        <Input
          name="cubicFeet"
          type="number"
          label={lbl("cubicFeet")}
          value={num("cubicFeet")}
          error={err("cubicFeet")}
          min={0}
          step="any"
          onChange={setNum("cubicFeet")}
        />
      ) : (
        <Input
          name="bedrooms"
          type="number"
          label={lbl("bedrooms")}
          value={num("bedrooms")}
          error={err("bedrooms")}
          min={0}
          step={1}
          onChange={setNum("bedrooms")}
        />
      )}
    </div>
  );
}

function DumpsterSizeForm(props: CalculatorFormProps) {
  const { lbl, err, num, setSelect, setNum, labels } = useFormHelpers(props);
  const isCustom = props.inputs.projectType === "custom";

  return (
    <div className="space-y-4">
      <Select
        name="projectType"
        label={lbl("projectType")}
        value={String(props.inputs.projectType ?? "kitchenRemodel")}
        error={err("projectType")}
        options={[
          { value: "garageCleanout", label: lbl("garageCleanout") || "Garage cleanout" },
          { value: "bathroomRemodel", label: lbl("bathroomRemodel") || "Bathroom remodel" },
          { value: "kitchenRemodel", label: lbl("kitchenRemodel") || "Kitchen remodel" },
          { value: "deckRemoval", label: lbl("deckRemoval") || "Deck removal" },
          { value: "roofingShingles", label: lbl("roofingShingles") || "Roofing shingles" },
          { value: "wholeHouseCleanout", label: lbl("wholeHouseCleanout") || "Whole house cleanout" },
          { value: "custom", label: lbl("custom") || "Custom" },
        ]}
        onChange={setSelect("projectType")}
      />
      {isCustom ? (
        <Input
          name="cubicYards"
          type="number"
          label={lbl("cubicYards")}
          value={num("cubicYards")}
          error={err("cubicYards")}
          min={0}
          step="any"
          onChange={setNum("cubicYards")}
        />
      ) : null}
    </div>
  );
}

function ProjectWasteFactorForm(props: CalculatorFormProps) {
  const { lbl, err, num, setFrac, locale, labels, setField } = useFormHelpers(props);
  return (
    <FormGrid>
      <FractionalInput
        name="baseQuantity"
        label={lbl("baseQuantity")}
        value={num("baseQuantity")}
        error={err("baseQuantity")}
        locale={locale}
        onChange={setFrac("baseQuantity")}
      />
      <PercentInput
        name="wastePercent"
        label={lbl("wastePercent")}
        value={num("wastePercent")}
        error={err("wastePercent")}
        min={0}
        onChange={(e) =>
          setField("wastePercent", e.target.value === "" ? "" : Number(e.target.value))
        }
      />
    </FormGrid>
  );
}

function BoardFootForm(props: CalculatorFormProps) {
  const { lbl, err, num, setSelect, setNum, labels } = useFormHelpers(props);
  return (
    <FormGrid>
      <Input
        name="thickness"
        type="number"
        label={lbl("thickness")}
        value={num("thickness")}
        error={err("thickness")}
        min={0}
        step="any"
        onChange={setNum("thickness")}
      />
      <Input
        name="width"
        type="number"
        label={lbl("width")}
        value={num("width")}
        error={err("width")}
        min={0}
        step="any"
        onChange={setNum("width")}
      />
      <Input
        name="length"
        type="number"
        label={lbl("length")}
        value={num("length")}
        error={err("length")}
        min={0}
        step="any"
        onChange={setNum("length")}
      />
      <UnitSelect
        name="lengthUnit"
        label={lbl("lengthUnit")}
        value={String(props.inputs.lengthUnit ?? "in")}
        kind="length"
        onChange={setSelect("lengthUnit")}
      />
      <Input
        name="quantity"
        type="number"
        label={lbl("quantity")}
        value={num("quantity")}
        error={err("quantity")}
        min={1}
        step={1}
        onChange={setNum("quantity")}
      />
    </FormGrid>
  );
}

function SquareFootageForm(props: CalculatorFormProps) {
  const { lbl, err, num, locale, labels, setField, setInputs } = useFormHelpers(props);
  return (
    <div className="space-y-4">
      <RoomListEditor
        labels={labels}
        locale={locale}
        rooms={(props.inputs.rooms as never[]) ?? []}
        errors={props.errors}
        setInputs={setInputs}
      />
      <WasteField
        labels={labels}
        locale={locale}
        value={num("wastePercent")}
        error={err("wastePercent")}
        onChange={(e) =>
          setField("wastePercent", e.target.value === "" ? "" : Number(e.target.value))
        }
      />
    </div>
  );
}

function RoomVolumeForm(props: CalculatorFormProps) {
  const { num, setFrac, setSelect, locale, labels } = useFormHelpers(props);
  return (
    <RoomDimensionsFieldset
      labels={labels}
      locale={locale}
      length={num("length")}
      width={num("width")}
      height={num("height")}
      lengthUnit={String(props.inputs.lengthUnit ?? "ft")}
      widthUnit={String(props.inputs.widthUnit ?? "ft")}
      heightUnit={String(props.inputs.heightUnit ?? "ft")}
      errors={props.errors}
      onLength={setFrac("length")}
      onWidth={setFrac("width")}
      onHeight={setFrac("height")}
      onLengthUnit={setSelect("lengthUnit")}
      onWidthUnit={setSelect("widthUnit")}
      onHeightUnit={setSelect("heightUnit")}
    />
  );
}

function LaborMarkupForm(props: CalculatorFormProps) {
  const { lbl, err, num, setSelect, setNum, labels, setField } = useFormHelpers(props);
  return (
    <FormGrid>
      <CurrencyInput
        name="jobCost"
        label={lbl("jobCost")}
        value={num("jobCost")}
        error={err("jobCost")}
        min={0}
        step="0.01"
        onChange={setNum("jobCost")}
      />
      <Select
        name="mode"
        label={lbl("mode")}
        value={String(props.inputs.mode ?? "markup")}
        error={err("mode")}
        options={[
          { value: "markup", label: lbl("modeMarkup") || "Markup" },
          { value: "margin", label: lbl("modeMargin") || "Margin" },
        ]}
        onChange={setSelect("mode")}
      />
      <PercentInput
        name="percent"
        label={lbl("percent")}
        value={num("percent")}
        error={err("percent")}
        min={0}
        onChange={(e) =>
          setField("percent", e.target.value === "" ? "" : Number(e.target.value))
        }
      />
    </FormGrid>
  );
}

function MaterialCostForm(props: CalculatorFormProps) {
  const { lbl, err, num, locale, labels, setField, setInputs } = useFormHelpers(props);
  return (
    <div className="space-y-4">
      <LineItemListEditor
        labels={labels}
        locale={locale}
        lineItems={(props.inputs.lineItems as never[]) ?? []}
        errors={props.errors}
        setInputs={setInputs}
      />
      <PercentInput
        name="taxPercent"
        label={lbl("taxPercent")}
        value={num("taxPercent")}
        error={err("taxPercent")}
        min={0}
        onChange={(e) =>
          setField("taxPercent", e.target.value === "" ? "" : Number(e.target.value))
        }
      />
    </div>
  );
}

function ProjectBudgetForm(props: CalculatorFormProps) {
  const { lbl, err, num, labels, setField, setInputs, setNum } = useFormHelpers(props);
  return (
    <div className="space-y-4">
      <MaterialListEditor
        labels={labels}
        materials={(props.inputs.materials as never[]) ?? []}
        errors={props.errors}
        setInputs={setInputs}
      />
      <FormGrid>
        <CurrencyInput
          name="laborCost"
          label={lbl("laborCost")}
          value={num("laborCost")}
          error={err("laborCost")}
          min={0}
          step="0.01"
          onChange={setNum("laborCost")}
        />
        <CurrencyInput
          name="permitsCost"
          label={lbl("permitsCost")}
          value={num("permitsCost")}
          error={err("permitsCost")}
          min={0}
          step="0.01"
          onChange={setNum("permitsCost")}
        />
        <PercentInput
          name="contingencyPercent"
          label={lbl("contingencyPercent")}
          value={num("contingencyPercent")}
          error={err("contingencyPercent")}
          min={0}
          onChange={(e) =>
            setField("contingencyPercent", e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </FormGrid>
    </div>
  );
}

const FORM_REGISTRY: Record<CalculatorId, React.ComponentType<CalculatorFormProps>> = {
  "concrete-slab": ConcreteSlabForm,
  "concrete-bags": ConcreteBagsForm,
  paint: PaintForm,
  flooring: FlooringForm,
  tile: TileForm,
  drywall: DrywallForm,
  "roofing-shingle": RoofingShingleForm,
  mulch: MulchForm,
  gravel: GravelForm,
  topsoil: TopsoilForm,
  "fence-material": FenceMaterialForm,
  "deck-board": DeckBoardForm,
  stair: StairForm,
  wallpaper: WallpaperForm,
  insulation: InsulationForm,
  "hvac-btu": HvacBtuForm,
  "moving-truck-size": MovingTruckSizeForm,
  "dumpster-size": DumpsterSizeForm,
  "project-waste-factor": ProjectWasteFactorForm,
  "board-foot": BoardFootForm,
  "square-footage": SquareFootageForm,
  "room-volume": RoomVolumeForm,
  "labor-markup": LaborMarkupForm,
  "material-cost": MaterialCostForm,
  "project-budget": ProjectBudgetForm,
};

export function CalculatorForm(props: CalculatorFormProps) {
  const FormComponent = FORM_REGISTRY[props.calculatorId];
  return <FormComponent {...props} />;
}

export { FORM_REGISTRY };
