// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/config/site", () => ({
  siteConfig: {
    domain: "https://buildsitecalc.com",
    analytics: { googleAnalyticsId: "G-TEST123" },
  },
}));

type W = Record<string, unknown> & { dataLayer?: unknown[]; gtag?: unknown };

async function load() {
  vi.resetModules();
  return import("@/lib/analytics");
}

function setHost(hostname: string) {
  Object.defineProperty(window, "location", {
    value: { ...window.location, hostname },
    writable: true,
    configurable: true,
  });
}

describe("analytics", () => {
  beforeEach(() => {
    vi.stubEnv("NODE_ENV", "production");
    localStorage.clear();
    document.head.innerHTML = "";
    delete (window as unknown as W).dataLayer;
    delete (window as unknown as W).gtag;
    delete (window as unknown as W)["ga-disable-G-TEST123"];
    setHost("buildsitecalc.com");
  });
  afterEach(() => vi.unstubAllEnvs());

  it("does nothing without consent", async () => {
    const a = await load();
    a.initAnalytics();
    expect(document.getElementById("buildsitecalc-ga4")).toBeNull();
    expect((window as unknown as W).dataLayer).toBeUndefined();
  });

  it("pushes Arguments objects (not arrays) so gtag.js processes them", async () => {
    const a = await load();
    a.setAnalyticsConsent(true);
    a.initAnalytics();
    const dl = (window as unknown as W).dataLayer!;
    expect(dl.length).toBeGreaterThan(0);
    for (const entry of dl) {
      expect(Array.isArray(entry)).toBe(false);
      expect(Object.prototype.toString.call(entry)).toBe("[object Arguments]");
    }
    const config = dl.find((e) => (e as IArguments)[0] === "config") as IArguments;
    expect(config[1]).toBe("G-TEST123");
    expect(document.querySelectorAll("#buildsitecalc-ga4")).toHaveLength(1);
  });

  it("loads the tag only once", async () => {
    const a = await load();
    a.setAnalyticsConsent(true);
    a.initAnalytics();
    a.initAnalytics();
    const configs = (window as unknown as W).dataLayer!.filter(
      (e) => (e as IArguments)[0] === "config",
    );
    expect(configs).toHaveLength(1);
    expect(document.querySelectorAll("#buildsitecalc-ga4")).toHaveLength(1);
  });

  it("never loads on preview hosts", async () => {
    setHost("buildsitecalc-git-feature-tomytomz1.vercel.app");
    const a = await load();
    a.setAnalyticsConsent(true);
    a.initAnalytics();
    expect(document.getElementById("buildsitecalc-ga4")).toBeNull();
  });

  it("disables GA when consent is revoked and re-enables on re-grant", async () => {
    const a = await load();
    a.setAnalyticsConsent(true);
    a.initAnalytics();
    a.setAnalyticsConsent(false);
    a.revokeAnalytics();
    expect((window as unknown as W)["ga-disable-G-TEST123"]).toBe(true);
    a.setAnalyticsConsent(true);
    a.initAnalytics();
    expect((window as unknown as W)["ga-disable-G-TEST123"]).toBe(false);
    expect(document.querySelectorAll("#buildsitecalc-ga4")).toHaveLength(1);
  });
});
