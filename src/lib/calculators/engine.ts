import type { CalcOutput, CalculatorId } from "./types";
import {
  boardFootDefaultInputs,
  calculateBoardFoot,
  calculateConcreteBags,
  calculateConcreteSlab,
  calculateDeckBoard,
  calculateDrywall,
  calculateDumpsterSize,
  calculateFenceMaterial,
  calculateFlooring,
  calculateGravel,
  calculateHvacBtu,
  calculateInsulation,
  calculateLaborMarkup,
  calculateMaterialCost,
  calculateMovingTruckSize,
  calculateMulch,
  calculatePaint,
  calculateProjectBudget,
  calculateProjectWasteFactor,
  calculateRoofingShingle,
  calculateRoomVolume,
  calculateSquareFootage,
  calculateStair,
  calculateTile,
  calculateTopsoil,
  calculateWallpaper,
  concreteBagsDefaultInputs,
  concreteSlabDefaultInputs,
  deckBoardDefaultInputs,
  drywallDefaultInputs,
  dumpsterSizeDefaultInputs,
  fenceMaterialDefaultInputs,
  flooringDefaultInputs,
  gravelDefaultInputs,
  hvacBtuDefaultInputs,
  insulationDefaultInputs,
  laborMarkupDefaultInputs,
  materialCostDefaultInputs,
  movingTruckSizeDefaultInputs,
  mulchDefaultInputs,
  paintDefaultInputs,
  projectBudgetDefaultInputs,
  projectWasteFactorDefaultInputs,
  roofingShingleDefaultInputs,
  roomVolumeDefaultInputs,
  squareFootageDefaultInputs,
  stairDefaultInputs,
  tileDefaultInputs,
  topsoilDefaultInputs,
  wallpaperDefaultInputs,
} from "./index";

export interface CalculatorEngine<TInputs = Record<string, unknown>> {
  defaultInputs: TInputs;
  calculate: (inputs: TInputs) => CalcOutput<TInputs>;
}

type EngineRegistry = {
  [K in CalculatorId]: {
    defaultInputs: object;
    calculate: (inputs: never) => CalcOutput<object>;
  };
};

const ENGINES = {
  "concrete-slab": {
    defaultInputs: concreteSlabDefaultInputs,
    calculate: calculateConcreteSlab,
  },
  "concrete-bags": {
    defaultInputs: concreteBagsDefaultInputs,
    calculate: calculateConcreteBags,
  },
  paint: {
    defaultInputs: paintDefaultInputs,
    calculate: calculatePaint,
  },
  flooring: {
    defaultInputs: flooringDefaultInputs,
    calculate: calculateFlooring,
  },
  tile: {
    defaultInputs: tileDefaultInputs,
    calculate: calculateTile,
  },
  drywall: {
    defaultInputs: drywallDefaultInputs,
    calculate: calculateDrywall,
  },
  "roofing-shingle": {
    defaultInputs: roofingShingleDefaultInputs,
    calculate: calculateRoofingShingle,
  },
  mulch: {
    defaultInputs: mulchDefaultInputs,
    calculate: calculateMulch,
  },
  gravel: {
    defaultInputs: gravelDefaultInputs,
    calculate: calculateGravel,
  },
  topsoil: {
    defaultInputs: topsoilDefaultInputs,
    calculate: calculateTopsoil,
  },
  "fence-material": {
    defaultInputs: fenceMaterialDefaultInputs,
    calculate: calculateFenceMaterial,
  },
  "deck-board": {
    defaultInputs: deckBoardDefaultInputs,
    calculate: calculateDeckBoard,
  },
  stair: {
    defaultInputs: stairDefaultInputs,
    calculate: calculateStair,
  },
  wallpaper: {
    defaultInputs: wallpaperDefaultInputs,
    calculate: calculateWallpaper,
  },
  insulation: {
    defaultInputs: insulationDefaultInputs,
    calculate: calculateInsulation,
  },
  "hvac-btu": {
    defaultInputs: hvacBtuDefaultInputs,
    calculate: calculateHvacBtu,
  },
  "moving-truck-size": {
    defaultInputs: movingTruckSizeDefaultInputs,
    calculate: calculateMovingTruckSize,
  },
  "dumpster-size": {
    defaultInputs: dumpsterSizeDefaultInputs,
    calculate: calculateDumpsterSize,
  },
  "project-waste-factor": {
    defaultInputs: projectWasteFactorDefaultInputs,
    calculate: calculateProjectWasteFactor,
  },
  "board-foot": {
    defaultInputs: boardFootDefaultInputs,
    calculate: calculateBoardFoot,
  },
  "square-footage": {
    defaultInputs: squareFootageDefaultInputs,
    calculate: calculateSquareFootage,
  },
  "room-volume": {
    defaultInputs: roomVolumeDefaultInputs,
    calculate: calculateRoomVolume,
  },
  "labor-markup": {
    defaultInputs: laborMarkupDefaultInputs,
    calculate: calculateLaborMarkup,
  },
  "material-cost": {
    defaultInputs: materialCostDefaultInputs,
    calculate: calculateMaterialCost,
  },
  "project-budget": {
    defaultInputs: projectBudgetDefaultInputs,
    calculate: calculateProjectBudget,
  },
} as unknown as EngineRegistry;

export function getCalculatorEngine(
  id: CalculatorId,
): CalculatorEngine<Record<string, unknown>> {
  return ENGINES[id] as unknown as CalculatorEngine<Record<string, unknown>>;
}
