import { describe, expect, it } from "vitest";
import {
  calculateFlooring,
  calculateStair,
  paintCoverageForGallons,
  RISER_MAX_COMMERCIAL_IN,
  RISER_MAX_IN,
  TREAD_MIN_COMMERCIAL_IN,
  TREAD_MIN_IN,
} from "@/lib/calculators";
import type { CalculatorId } from "@/lib/calculators/types";
import { getDictionary } from "@/lib/i18n";
import type { QuickAnswer } from "@/lib/i18n/types";

const WITH_QUICK_ANSWERS: CalculatorId[] = [
  "paint",
  "stair",
  "mulch",
  "topsoil",
  "flooring",
];

function quickAnswers(locale: "en" | "es", id: CalculatorId): QuickAnswer[] {
  return getDictionary(locale).calculators[id].quickAnswers ?? [];
}

function allAnswerText(locale: "en" | "es", id: CalculatorId): string {
  return quickAnswers(locale, id)
    .map((item) => [item.answer, JSON.stringify(item.table ?? {})].join(" "))
    .join(" ");
}

/** Strip punctuation and case so a heading can be compared to a raw GSC query. */
function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function boldLead(answer: string): string {
  const match = /^\*\*([^*]+)\*\*/.exec(answer);
  return match ? match[1] : "";
}

describe("quickAnswers structure", () => {
  for (const id of WITH_QUICK_ANSWERS) {
    it(`${id} has answers in both locales, in matching order`, () => {
      const en = quickAnswers("en", id);
      const es = quickAnswers("es", id);

      expect(en.length).toBeGreaterThan(0);
      // Spanish outranks English on this site, so it is never allowed to lag.
      expect(es).toHaveLength(en.length);

      for (const [index, item] of en.entries()) {
        expect(item.question).not.toBe(es[index].question);
        expect(Boolean(item.table)).toBe(Boolean(es[index].table));
        if (item.table && es[index].table) {
          expect(es[index].table.columns).toHaveLength(item.table.columns.length);
          expect(es[index].table.rows).toHaveLength(item.table.rows.length);
        }
      }
    });

    for (const locale of ["en", "es"] as const) {
      it(`${id} ${locale} answers lead with a direct answer`, () => {
        for (const item of quickAnswers(locale, id)) {
          expect(item.question.endsWith("?")).toBe(true);

          // The answer has to open with the answer itself, bolded, before any
          // explanation -- that is what wins these SERPs.
          expect(item.answer.startsWith("**")).toBe(true);

          const lead = boldLead(item.answer);
          expect(lead.length).toBeGreaterThan(0);
          expect(lead.split(/\s+/).length).toBeLessThanOrEqual(30);
        }
      });
    }
  }

  it("has no duplicate questions within a calculator", () => {
    for (const locale of ["en", "es"] as const) {
      for (const id of WITH_QUICK_ANSWERS) {
        const questions = quickAnswers(locale, id).map((item) => item.question);
        expect(new Set(questions).size).toBe(questions.length);
      }
    }
  });
});

/**
 * Each of these is a real query string from the Search Console export that the
 * page received impressions for but could not answer. The assertion is that the
 * query still appears verbatim as a heading, so a rewrite cannot quietly drop
 * the target.
 */
describe("quickAnswers cover the targeted search queries", () => {
  const targets: { id: CalculatorId; query: string }[] = [
    { id: "paint", query: "how many square feet does a gallon of paint cover" },
    { id: "stair", query: "how many steps do you need for a 19 inch rise" },
    { id: "mulch", query: "how many bags of mulch are in a cubic yard" },
    { id: "topsoil", query: "how many cubic feet are in a yard of topsoil" },
    { id: "flooring", query: "how many boxes of flooring do i need" },
  ];

  for (const { id, query } of targets) {
    it(`${id} answers "${query}"`, () => {
      const headings = quickAnswers("en", id).map((item) => normalize(item.question));
      expect(headings).toContain(normalize(query));
    });
  }
});

/**
 * The figures quoted in the copy must equal what the engines compute. Without
 * this, a page could confidently state a coverage number that its own
 * calculator contradicts.
 */
describe("quickAnswers figures match the engines", () => {
  it("paint coverage figures come from paintCoverageForGallons", () => {
    const oneCoat = paintCoverageForGallons({ gallons: 1 });
    const fiveGal = paintCoverageForGallons({ gallons: 5 });
    const fiveGalTwoCoats = paintCoverageForGallons({ gallons: 5, coats: 2 });
    const quart = paintCoverageForGallons({ gallons: 0.25 });
    const pint = paintCoverageForGallons({ gallons: 0.125 });

    expect(oneCoat?.areaFt2).toBe(350);
    expect(fiveGal?.areaFt2).toBe(1750);
    expect(fiveGalTwoCoats?.areaFt2).toBe(875);
    expect(quart?.areaFt2).toBe(87.5);
    expect(pint?.areaFt2).toBe(43.8);

    const en = allAnswerText("en", "paint");
    expect(en).toContain("350 ft²");
    expect(en).toContain("1,750 ft²");
    expect(en).toContain("875 ft²");
    expect(en).toContain("87.5 ft²");
    expect(en).toContain("43.8 ft²");

    // Spanish uses a decimal comma and a thousands period.
    const es = allAnswerText("es", "paint");
    expect(es).toContain("350 ft²");
    expect(es).toContain("1.750 ft²");
    expect(es).toContain("875 ft²");
    expect(es).toContain("87,5 ft²");
    expect(es).toContain("43,8 ft²");
  });

  it("stair code figures come from the exported riser limits", () => {
    expect(RISER_MAX_IN).toBe(7.75);
    expect(RISER_MAX_COMMERCIAL_IN).toBe(7);
    expect(TREAD_MIN_IN).toBe(10);
    expect(TREAD_MIN_COMMERCIAL_IN).toBe(11);

    for (const locale of ["en", "es"] as const) {
      const text = allAnswerText(locale, "stair");
      // 7.75 in is written as the fraction tradespeople actually use.
      expect(text).toContain("7 3/4 in");
      expect(text).toContain("7 in");
      expect(text).toContain("10 in");
      expect(text).toContain("11 in");
      expect(text).toContain("3/8 in");
    }
  });

  it("the 19 inch rise answer comes from calculateStair", () => {
    const result = calculateStair({
      totalRise: 19,
      lengthUnit: "in",
      riserHeight: 7,
      treadDepth: 10,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    const risers = result.primary.find((f) => f.key === "numberOfRisers")?.value;
    const actual = result.primary.find((f) => f.key === "actualRiserHeight")?.value;

    expect(risers).toBe(3);
    expect(actual).toBe(6.33);
    // Two risers would exceed the residential maximum, which is the reason
    // three is the answer.
    expect(19 / 2).toBeGreaterThan(RISER_MAX_IN);

    expect(allAnswerText("en", "stair")).toContain("6.33 in");
    expect(allAnswerText("es", "stair")).toContain("6,33 in");
  });

  it("mulch bag counts follow 27 cubic feet per cubic yard", () => {
    const FT3_PER_YD3 = 27;
    expect(FT3_PER_YD3 / 2).toBe(13.5);
    expect(FT3_PER_YD3 / 3).toBe(9);
    expect(Math.ceil((3 * FT3_PER_YD3) / 2)).toBe(41);

    expect(allAnswerText("en", "mulch")).toContain("13.5");
    expect(allAnswerText("en", "mulch")).toContain("41");
    expect(allAnswerText("es", "mulch")).toContain("13,5");
    expect(allAnswerText("es", "mulch")).toContain("41");
  });

  it("mulch and topsoil coverage tables follow 27 divided by depth", () => {
    const coverage = (depthIn: number) => Math.round(27 / (depthIn / 12));

    expect(coverage(2)).toBe(162);
    expect(coverage(3)).toBe(108);
    expect(coverage(4)).toBe(81);
    expect(coverage(6)).toBe(54);
    expect(coverage(12)).toBe(27);

    for (const locale of ["en", "es"] as const) {
      const mulch = allAnswerText(locale, "mulch");
      expect(mulch).toContain("162 ft²");
      expect(mulch).toContain("108 ft²");
      expect(mulch).toContain("81 ft²");

      const topsoil = allAnswerText(locale, "topsoil");
      expect(topsoil).toContain("81 ft²");
      expect(topsoil).toContain("54 ft²");
      expect(topsoil).toContain("27 ft²");
    }
  });

  it("flooring carton counts come from calculateFlooring", () => {
    const cartons = (packCoverage: number) => {
      const result = calculateFlooring({
        length: 12,
        width: 10,
        lengthUnit: "ft",
        widthUnit: "ft",
        wastePercent: 10,
        packCoverage,
        packCoverageUnit: "ft2",
      });
      if (!result.ok) throw new Error("flooring calculation failed");
      return result.primary.find((f) => f.key === "packsNeeded")?.value;
    };

    // The table on the page quotes each of these for a 120 ft² room.
    expect(cartons(18)).toBe(8);
    expect(cartons(20)).toBe(7);
    expect(cartons(24)).toBe(6);
    expect(cartons(30)).toBe(5);

    for (const locale of ["en", "es"] as const) {
      const text = allAnswerText(locale, "flooring");
      expect(text).toContain("18 ft²");
      expect(text).toContain("20 ft²");
      expect(text).toContain("24 ft²");
      expect(text).toContain("30 ft²");
    }
  });
});
