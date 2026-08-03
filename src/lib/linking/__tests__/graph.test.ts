import { describe, expect, it } from "vitest";
import { CALCULATORS } from "@/lib/calculators/registry";
import type { CalculatorId } from "@/lib/calculators/types";
import {
  auditLinkGraph,
  getInboundLinks,
  getOutboundLinks,
  LINK_GRAPH,
  LINK_TARGETS,
  MONEY_PAGE_IDS,
} from "@/lib/linking/graph";

const ALL_IDS = new Set<CalculatorId>(CALCULATORS.map((calc) => calc.id));

describe("LINK_GRAPH integrity", () => {
  it("covers every calculator", () => {
    for (const calc of CALCULATORS) {
      expect(LINK_GRAPH[calc.id], `${calc.id} missing from LINK_GRAPH`).toBeDefined();
    }
    expect(Object.keys(LINK_GRAPH)).toHaveLength(CALCULATORS.length);
  });

  it("points only at real calculators and never at itself", () => {
    for (const [fromId, edges] of Object.entries(LINK_GRAPH)) {
      for (const edge of edges) {
        expect(ALL_IDS.has(edge.to), `${fromId} -> unknown ${edge.to}`).toBe(true);
        expect(edge.to, `${fromId} links to itself`).not.toBe(fromId);
      }
    }
  });

  it("has no duplicate targets from the same source", () => {
    for (const [fromId, edges] of Object.entries(LINK_GRAPH)) {
      const targets = edges.map((edge) => edge.to);
      expect(new Set(targets).size, `${fromId} has duplicate edges`).toBe(targets.length);
    }
  });

  it("has a bilingual, descriptive anchor on every edge", () => {
    for (const [fromId, edges] of Object.entries(LINK_GRAPH)) {
      for (const edge of edges) {
        expect(edge.anchorEn.trim().length, `${fromId} -> ${edge.to}`).toBeGreaterThan(0);
        expect(edge.anchorEs.trim().length, `${fromId} -> ${edge.to}`).toBeGreaterThan(0);

        // Anchors must not be bare titles. "Paint Calculator" as anchor text on
        // every inbound link is the exact problem this graph replaces.
        expect(
          edge.anchorEn.toLowerCase(),
          `${fromId} -> ${edge.to} uses a bare title anchor`,
        ).not.toMatch(/^[a-z- ]+ calculator$/);
      }
    }
  });
});

describe("no orphans", () => {
  it(`gives every calculator at least ${LINK_TARGETS.minInboundAnyPage} inbound links`, () => {
    const thin = auditLinkGraph()
      .filter((row) => row.inbound < LINK_TARGETS.minInboundAnyPage)
      .map((row) => `${row.id} (${row.inbound})`);

    expect(thin, `pages below the inbound floor: ${thin.join(", ")}`).toEqual([]);
  });

  it("gives every calculator at least one outbound link", () => {
    for (const calc of CALCULATORS) {
      expect(
        getOutboundLinks(calc.id).length,
        `${calc.id} is a dead end`,
      ).toBeGreaterThan(0);
    }
  });

  it("keeps the graph reciprocal enough to be crawlable in both directions", () => {
    // Every calculator must be reachable from at least two distinct source
    // kinds, so losing one surface (say the category hub) cannot orphan it.
    for (const calc of CALCULATORS) {
      const kinds = new Set(getInboundLinks(calc.id).map((link) => link.from.kind));
      expect(kinds.size, `${calc.id} depends on a single link surface`).toBeGreaterThan(
        1,
      );
    }
  });
});

describe("money pages carry the link budget", () => {
  for (const id of MONEY_PAGE_IDS) {
    it(`${id} has ${LINK_TARGETS.minInboundMoneyPage}+ inbound links`, () => {
      const inbound = getInboundLinks(id);
      expect(inbound.length).toBeGreaterThanOrEqual(LINK_TARGETS.minInboundMoneyPage);
    });

    it(`${id} has ${LINK_TARGETS.minDistinctAnchorsMoneyPage}+ distinct anchor strings`, () => {
      const anchorsEn = new Set(getInboundLinks(id).map((link) => link.anchorEn));
      const anchorsEs = new Set(getInboundLinks(id).map((link) => link.anchorEs));

      expect(anchorsEn.size).toBeGreaterThanOrEqual(
        LINK_TARGETS.minDistinctAnchorsMoneyPage,
      );
      expect(anchorsEs.size).toBeGreaterThanOrEqual(
        LINK_TARGETS.minDistinctAnchorsMoneyPage,
      );
    });
  }

  it("money pages are all real calculators", () => {
    for (const id of MONEY_PAGE_IDS) {
      expect(ALL_IDS.has(id)).toBe(true);
    }
  });

  it("anchor text is not repeated across inbound links to a money page", () => {
    for (const id of MONEY_PAGE_IDS) {
      const anchors = getInboundLinks(id)
        .filter((link) => link.from.kind === "calculator")
        .map((link) => link.anchorEn);

      // Calculator-to-calculator anchors are hand-authored and must all differ.
      expect(new Set(anchors).size, `${id} repeats an inbound anchor`).toBe(
        anchors.length,
      );
    }
  });
});
