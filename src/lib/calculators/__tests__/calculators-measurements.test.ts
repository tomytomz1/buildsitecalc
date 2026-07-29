import { describe, expect, it } from "vitest";
import {
  applyWaste,
  calculateBoardFoot,
  calculateProjectWasteFactor,
  calculateRoomVolume,
  calculateSquareFootage,
  boardFootDefaultInputs,
  projectWasteFactorDefaultInputs,
  roomVolumeDefaultInputs,
  squareFootageDefaultInputs,
} from "@/lib/calculators";
import { expectClose, expectFail, expectOk, fieldValue } from "./helpers";

describe("calculateSquareFootage", () => {
  it("sums room areas", () => {
    const result = calculateSquareFootage(squareFootageDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "totalAreaFt2") as number).toBeCloseTo(120, 0);
  });

  it("rejects empty rooms", () => {
    expectFail(calculateSquareFootage({ rooms: [], wastePercent: 0 }));
  });
});

describe("calculateRoomVolume", () => {
  it("computes cubic feet for 12×10×8 ft room", () => {
    const result = calculateRoomVolume(roomVolumeDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "volumeFt3") as number).toBeCloseTo(960, 0);
  });

  it("rejects negative height", () => {
    expectFail(calculateRoomVolume({ ...roomVolumeDefaultInputs, height: -1 }));
  });
});

describe("calculateBoardFoot", () => {
  it("computes board feet from lumber dimensions", () => {
    const result = calculateBoardFoot(boardFootDefaultInputs);
    expectOk(result);
    expect(fieldValue(result, "boardFeet") as number).toBeCloseTo(480, 0);
  });
});

describe("calculateProjectWasteFactor", () => {
  it("applies waste to base quantity", () => {
    const result = calculateProjectWasteFactor(projectWasteFactorDefaultInputs);
    expectOk(result);
    expectClose(fieldValue(result, "adjustedQuantity") as number, 110, 2);
    expectClose(fieldValue(result, "wasteAmount") as number, 10, 2);
  });

  it("returns base when waste is zero", () => {
    const result = calculateProjectWasteFactor({ baseQuantity: 50, wastePercent: 0 });
    expectOk(result);
    expectClose(fieldValue(result, "adjustedQuantity") as number, 50, 2);
  });

  it("handles high waste", () => {
    const result = calculateProjectWasteFactor({ baseQuantity: 100, wastePercent: 50 });
    expectOk(result);
    expectClose(fieldValue(result, "adjustedQuantity") as number, applyWaste(100, 50), 2);
  });
});
