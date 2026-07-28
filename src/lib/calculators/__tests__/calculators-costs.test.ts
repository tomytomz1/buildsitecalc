import { describe, it } from "vitest";
import {
  calculateMaterialCost,
  calculateProjectBudget,
  materialCostDefaultInputs,
  projectBudgetDefaultInputs,
} from "@/lib/calculators";
import { expectClose, expectFail, expectOk, fieldValue } from "./helpers";

describe("calculateMaterialCost", () => {
  it("sums line items with tax", () => {
    const result = calculateMaterialCost(materialCostDefaultInputs);
    expectOk(result);
    expectClose(fieldValue(result, "subtotal") as number, 134.95, 2);
    expectClose(fieldValue(result, "total") as number, 134.95, 2);
  });

  it("applies tax percent", () => {
    const result = calculateMaterialCost({ ...materialCostDefaultInputs, taxPercent: 8 });
    expectOk(result);
    expectClose(fieldValue(result, "total") as number, 145.75, 1);
  });

  it("rejects empty line items", () => {
    expectFail(calculateMaterialCost({ lineItems: [] }));
  });

  it("rejects zero quantity", () => {
    expectFail(
      calculateMaterialCost({
        lineItems: [{ name: "Test", quantity: 0, unitCost: 5 }],
      }),
    );
  });
});

describe("calculateProjectBudget", () => {
  it("computes grand total with contingency", () => {
    const result = calculateProjectBudget(projectBudgetDefaultInputs);
    expectOk(result);
    // materials 3650 + labor 4000 + permits 250 = 7900; +10% = 8690
    expectClose(fieldValue(result, "grandTotal") as number, 8690, 0);
    expectClose(fieldValue(result, "subtotal") as number, 7900, 0);
  });

  it("rejects empty materials list", () => {
    expectFail(
      calculateProjectBudget({
        ...projectBudgetDefaultInputs,
        materials: [],
      }),
    );
  });

  it("rejects negative labor cost", () => {
    expectFail(
      calculateProjectBudget({
        ...projectBudgetDefaultInputs,
        laborCost: -100,
      }),
    );
  });
});
