// Types
export {
  fail,
  ok,
  type CalcFailure,
  type CalcOutput,
  type CalcResultField,
  type CalcSuccess,
  type CalculatorCategoryId,
  type CalculatorId,
} from "./types";

// Units & fractions
export {
  applyWaste,
  CONCRETE_BAG_VOLUMES_FT3,
  convertArea,
  convertLength,
  convertMass,
  convertVolume,
  fromCubicMeters,
  fromKilograms,
  fromMeters,
  fromSquareMeters,
  GRAVEL_DENSITIES_KG_M3,
  marginFromMarkup,
  markupFromMargin,
  priceFromMarkup,
  toCubicMeters,
  toKilograms,
  toMeters,
  toSquareMeters,
  type AreaUnit,
  type LengthUnit,
  type MassUnit,
  type VolumeUnit,
} from "./units";

export { parseFraction, toFractionString } from "./fractions";

// Calculators
export {
  calculate as calculateSquareFootage,
  defaultInputs as squareFootageDefaultInputs,
  type RoomInput,
  type SquareFootageInputs,
} from "./square-footage";

export {
  calculate as calculateRoomVolume,
  defaultInputs as roomVolumeDefaultInputs,
  type RoomVolumeInputs,
} from "./room-volume";

export {
  calculate as calculateProjectWasteFactor,
  defaultInputs as projectWasteFactorDefaultInputs,
  type ProjectWasteFactorInputs,
} from "./project-waste-factor";

export {
  calculate as calculateConcreteSlab,
  defaultInputs as concreteSlabDefaultInputs,
  type ConcreteSlabInputs,
} from "./concrete-slab";

export {
  calculate as calculateMaterialCost,
  defaultInputs as materialCostDefaultInputs,
  type MaterialCostInputs,
  type MaterialCostLineItem,
} from "./material-cost";

export {
  calculate as calculateConcreteBags,
  defaultInputs as concreteBagsDefaultInputs,
  type ConcreteBagsInputs,
} from "./concrete-bags";

export {
  calculate as calculatePaint,
  convertPaintAreaInput,
  defaultInputs as paintDefaultInputs,
  preferredPaintAreaUnit,
  type PaintInputs,
} from "./paint";

export {
  calculate as calculateFlooring,
  defaultInputs as flooringDefaultInputs,
  type FlooringInputs,
} from "./flooring";

export {
  calculate as calculateTile,
  defaultInputs as tileDefaultInputs,
  type TileInputs,
} from "./tile";

export {
  calculate as calculateDrywall,
  defaultInputs as drywallDefaultInputs,
  type DrywallInputs,
  type DrywallSheetSize,
} from "./drywall";

export {
  calculate as calculateRoofingShingle,
  defaultInputs as roofingShingleDefaultInputs,
  type RoofingShingleInputs,
} from "./roofing-shingle";

export {
  calculate as calculateMulch,
  defaultInputs as mulchDefaultInputs,
  type MulchInputs,
} from "./mulch";

export {
  calculate as calculateGravel,
  defaultInputs as gravelDefaultInputs,
  type GravelDensityKey,
  type GravelInputs,
} from "./gravel";

export {
  calculate as calculateTopsoil,
  defaultInputs as topsoilDefaultInputs,
  type TopsoilInputs,
} from "./topsoil";

export {
  calculate as calculateFenceMaterial,
  defaultInputs as fenceMaterialDefaultInputs,
  type FenceMaterialInputs,
} from "./fence-material";

export {
  calculate as calculateDeckBoard,
  defaultInputs as deckBoardDefaultInputs,
  type DeckBoardInputs,
} from "./deck-board";

export {
  calculate as calculateStair,
  convertStairInputsOnUnitChange,
  defaultInputs as stairDefaultInputs,
  type StairInputs,
} from "./stair";

export {
  calculate as calculateWallpaper,
  defaultInputs as wallpaperDefaultInputs,
  type WallpaperInputs,
  type WallpaperWall,
} from "./wallpaper";

export {
  calculate as calculateInsulation,
  defaultInputs as insulationDefaultInputs,
  type InsulationInputs,
} from "./insulation";

export {
  calculate as calculateHvacBtu,
  defaultInputs as hvacBtuDefaultInputs,
  type HvacBtuInputs,
} from "./hvac-btu";

export {
  calculate as calculateMovingTruckSize,
  defaultInputs as movingTruckSizeDefaultInputs,
  type MovingTruckSizeInputs,
} from "./moving-truck-size";

export {
  calculate as calculateDumpsterSize,
  defaultInputs as dumpsterSizeDefaultInputs,
  type DumpsterProjectType,
  type DumpsterSizeInputs,
} from "./dumpster-size";

export {
  calculate as calculateBoardFoot,
  defaultInputs as boardFootDefaultInputs,
  type BoardFootInputs,
} from "./board-foot";

export {
  calculate as calculateLaborMarkup,
  defaultInputs as laborMarkupDefaultInputs,
  type LaborMarkupInputs,
  type LaborMarkupMode,
} from "./labor-markup";

export {
  calculate as calculateProjectBudget,
  defaultInputs as projectBudgetDefaultInputs,
  type ProjectBudgetInputs,
  type ProjectBudgetMaterial,
} from "./project-budget";

export { getCalculatorEngine, type CalculatorEngine } from "./engine";
