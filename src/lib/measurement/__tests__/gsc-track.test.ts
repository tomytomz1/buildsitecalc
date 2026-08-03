import { describe, expect, it } from "vitest";
import {
  evaluateGates,
  metricsFrom,
  readMoneyPageSlugs,
} from "../../../../scripts/gsc-track.mjs";
import { MONEY_PAGE_IDS } from "@/lib/linking/graph";
import { CALCULATORS } from "@/lib/calculators/registry";

/**
 * The tracking script reads MONEY_PAGE_IDS and the registry slugs by regex,
 * because it has to run against a raw export outside the Next build. That makes
 * it silently breakable by a formatting change in either file - a regex that
 * matches nothing yields "no money pages", which reads as a missing metric
 * rather than an error. These tests fail loudly instead.
 */
describe("gsc-track money page resolution", () => {
  const { ids, slugs } = readMoneyPageSlugs() as {
    ids: string[];
    slugs: Set<string>;
  };

  it("recovers every money page id from the link graph", () => {
    expect(ids).toEqual([...MONEY_PAGE_IDS]);
  });

  it("resolves both locale slugs for every money page", () => {
    for (const id of MONEY_PAGE_IDS) {
      const calc = CALCULATORS.find((entry) => entry.id === id);
      expect(calc, `money page ${id} missing from registry`).toBeDefined();
      expect(slugs.has(calc!.slugEn), `${id} slugEn`).toBe(true);
      expect(slugs.has(calc!.slugEs), `${id} slugEs`).toBe(true);
    }
  });
});

describe("gsc-track metrics", () => {
  const paint = CALCULATORS.find((entry) => entry.id === "paint")!;
  // hvac-btu is the site's biggest impression source but is not a money page,
  // so it is exactly the page that must not pollute the tracked position.
  const hvac = CALCULATORS.find((entry) => entry.id === "hvac-btu")!;

  const fixture = {
    Queries: [
      { Query: "how many gallons of paint", Clicks: 0, Impressions: 40, Position: 62 },
      { Query: "mulch bags per yard", Clicks: 0, Impressions: 10, Position: 80 },
    ],
    Pages: [
      {
        "Top pages": `https://buildsitecalc.com/en/calculators/${paint.slugEn}`,
        Clicks: 0,
        Impressions: 60,
        Position: 70,
      },
      {
        "Top pages": `https://buildsitecalc.com/es/calculators/${paint.slugEs}`,
        Clicks: 0,
        Impressions: 40,
        Position: 20,
      },
      {
        "Top pages": `https://buildsitecalc.com/en/calculators/${hvac.slugEn}`,
        Clicks: 0,
        Impressions: 25,
        Position: 90,
      },
      {
        "Top pages": "https://buildsitecalc.com/en/about",
        Clicks: 0,
        Impressions: 0,
        Position: 95,
      },
    ],
    Devices: [
      { Device: "DESKTOP", Clicks: 1, Impressions: 90, Position: 55 },
      { Device: "MOBILE", Clicks: 0, Impressions: 35, Position: 71 },
    ],
  };

  const { slugs } = readMoneyPageSlugs() as { slugs: Set<string> };
  const metrics = metricsFrom(fixture, slugs);

  it("totals impressions from the Devices sheet, not the Queries sheet", () => {
    // Queries omit anonymized terms, so the device total is the truthful one.
    expect(metrics.impressions).toBe(125);
    expect(metrics.impressionsFromNamedQueries).toBe(50);
    expect(metrics.anonymizedImpressions).toBe(75);
  });

  it("counts only pages that actually surfaced", () => {
    expect(metrics.pagesWithImpressions).toBe(3);
  });

  it("weights money-page position by impressions and ignores other pages", () => {
    // (60*70 + 40*20) / 100 = 50; the hvac page must not dilute it.
    expect(metrics.moneyPageAvgPosition).toBe(50);
    expect(metrics.moneyPageImpressions).toBe(100);
  });

  it("reports clicks without letting them gate anything", () => {
    expect(metrics.clicks).toBe(1);
  });
});

describe("gsc-track day-60 gates", () => {
  const baseline = { impressions: 387, moneyPageAvgPosition: 71.81 };

  it("fires the kill criterion when neither gate is met", () => {
    const gates = evaluateGates(baseline, {
      impressions: 500,
      moneyPageAvgPosition: 65,
    });
    expect(gates.killCriterionMet).toBe(true);
  });

  it("spares the plan when impressions double alone", () => {
    const gates = evaluateGates(baseline, {
      impressions: 800,
      moneyPageAvgPosition: 71,
    });
    expect(gates.impressionsDoubled).toBe(true);
    expect(gates.killCriterionMet).toBe(false);
  });

  it("spares the plan when position gains 15+ alone", () => {
    const gates = evaluateGates(baseline, {
      impressions: 400,
      moneyPageAvgPosition: 56,
    });
    expect(gates.positionImproved).toBe(true);
    expect(gates.killCriterionMet).toBe(false);
  });

  it("treats a missing money-page position as no improvement", () => {
    const gates = evaluateGates(baseline, {
      impressions: 400,
      moneyPageAvgPosition: null,
    });
    expect(gates.positionGain).toBe(0);
    expect(gates.killCriterionMet).toBe(true);
  });
});
