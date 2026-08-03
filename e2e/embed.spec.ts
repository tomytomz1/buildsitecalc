import { test, expect, type Page } from "@playwright/test";

// 127.0.0.1 and localhost resolve to the same server but are distinct origins
// to the browser, which is what makes this a real cross-origin framing test
// rather than a same-origin one that SAMEORIGIN would also allow.
const THIRD_PARTY_ORIGIN = "http://127.0.0.1:3000";
const EMBED_URL = "http://localhost:3000/embed/en/paint";

/** Stands in for a host site: a document on another origin that frames the widget. */
async function openHostPage(page: Page) {
  await page.goto(`${THIRD_PARTY_ORIGIN}/en`);
  await page.evaluate((src) => {
    const frame = document.createElement("iframe");
    frame.src = src;
    frame.width = "900";
    frame.height = "900";
    document.body.appendChild(frame);
  }, EMBED_URL);
}

test.describe("embeddable widget", () => {
  test("embed route renders the bare calculator", async ({ page }) => {
    await page.goto("/embed/en/paint");

    await expect(page.locator("h1")).toBeVisible();
    await expect(page.getByRole("button", { name: /calculate/i })).toBeVisible();

    // Bare means no site chrome: nothing to navigate away with except the
    // attribution link.
    await expect(page.locator("header")).toHaveCount(0);
    await expect(page.locator('a[href*="/en/calculators/paint"]').first()).toBeVisible();
  });

  test("embed is excluded from indexing and points at the real page", async ({
    page,
  }) => {
    await page.goto("/embed/en/paint");

    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      /buildsitecalc\.com\/en\/calculators\/paint$/,
    );
  });

  test("embed serves the Spanish locale from its own path", async ({ page }) => {
    const response = await page.goto("/embed/es/pintura");
    expect(response?.status()).toBe(200);
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
  });

  test("embed is framable by any origin", async ({ request }) => {
    const response = await request.get("/embed/en/paint");
    const headers = response.headers();

    expect(headers["content-security-policy"]).toContain("frame-ancestors *");
    expect(headers["x-frame-options"]).toBeUndefined();
  });

  test("every other route still refuses cross-origin framing", async ({ request }) => {
    for (const path of ["/en", "/en/calculators/paint", "/en/projects/build-a-deck"]) {
      const headers = (await request.get(path)).headers();
      expect(headers["x-frame-options"], `${path} lost SAMEORIGIN`).toBe("SAMEORIGIN");
    }
  });

  test("embed actually loads inside a third-party iframe", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });

    await openHostPage(page);

    const frame = page.frameLocator("iframe");
    await expect(frame.getByRole("button", { name: /calculate/i })).toBeVisible();

    expect(errors.filter((text) => /frame|X-Frame-Options|refused/i.test(text))).toEqual(
      [],
    );
  });

  test("embed stays interactive inside the iframe", async ({ page }) => {
    await openHostPage(page);

    const frame = page.frameLocator("iframe");
    await frame.getByRole("button", { name: /calculate/i }).click();
    await expect(frame.getByText(/gallon/i).first()).toBeVisible();
  });

  test("locale middleware leaves embed URLs alone", async ({ request }) => {
    const response = await request.get("/embed/en/paint", { maxRedirects: 0 });
    expect(response.status()).toBe(200);
  });

  test("calculator page offers a copy-paste snippet with an attribution link", async ({
    page,
  }) => {
    await page.goto("/en/calculators/paint");

    const snippet = page
      .locator("section", {
        has: page.getByRole("heading", { name: "Put this calculator on your site" }),
      })
      .locator("pre code");
    await expect(snippet).toBeVisible();

    const text = (await snippet.textContent()) ?? "";
    expect(text).toContain('src="https://buildsitecalc.com/embed/en/paint"');
    expect(text).toContain('href="https://buildsitecalc.com/en/calculators/paint"');
    // The visible link outside the iframe is the only part a crawler can
    // follow, so it must survive into the snippet.
    expect(text).toMatch(/<a [^>]*>[^<]+<\/a>/);
  });
});
