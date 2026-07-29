import { defineConfig, devices } from "@playwright/test";

/**
 * Run `npx playwright install chromium` if browsers are not installed yet.
 *
 * E2e uses a production server (`build && start`) instead of `next dev`.
 * Turbopack under parallel workers can race on JSON manifests and surface
 * "Unexpected end of JSON input", which replaces calculator pages with the
 * Next.js error overlay and makes the Calculate button never appear.
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 4,
  timeout: 45_000,
  reporter: "list",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npm run build && npm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 300_000,
  },
});
