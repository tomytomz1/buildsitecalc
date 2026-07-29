# Launch Audit — BuildSiteCalc

**Date:** 2026-07-29 (SEO/i18n/OG/SSR release + prior launch remediation)
**Auditor:** Independent launch audit + remediation pass + SEO/i18n/SSR release
**Repo:** https://github.com/tomytomz1/buildsitecalc
**Local project path:** `C:\Users\Tomas\Desktop\buildsitecalc\buildsitecalc`
**Production domain:** https://buildsitecalc.com
**Brand:** BuildSiteCalc
**Contact:** hello@buildsitecalc.com

## Launch recommendation: GO

Technical repository readiness is green, including SEO/i18n/OG/SSR work below. Ship/redeploy on Vercel after push; confirm production with smoke + `verify:seo-i18n`. Remaining work is operational/human — not product blockers in this repo.

## SEO / i18n / SSR release commits

| Hash      | Message                                                  |
| --------- | -------------------------------------------------------- |
| `d50f8ff` | Fix SEO metadata, bilingual routing, and social previews |
| `b49c9da` | Render calculator default results during SSR             |
| `614f253` | Normalize repository formatting with Prettier            |

- **Spanish unit labels:** localized `UnitSelect` labels; forms wire `locale`; verify script flags English unit phrases on ES pages.
- **SSR:** default calculator results in initial HTML; crawlers see numbers (e.g. concrete-slab ~1.36 yd³).
- **Local gates:** format/lint/typecheck pass; **128** unit tests; build pass; local `verify:seo-i18n` **31/31**; `npm audit --omit=dev` = 0.
- **Production:** after `git push origin master`, run `BASE_URL=https://buildsitecalc.com npm run smoke` and `npm run verify:seo-i18n`. Do not claim Vercel deployed until those pass.

### Readiness by lane

| Lane                         | Status | Notes                                                                                                                                                                                |
| ---------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Technical repo readiness** | **GO** | Lint, typecheck, 118 unit tests, 25/25 e2e (production server), production build (99 static pages), route crawl 97/97, production smoke 34/34, prod `npm audit --omit=dev` = 0 vulns |
| **Vercel / DNS**             | Human  | Import repo, attach buildsitecalc.com, wait for SSL — see VERCEL_DEPLOYMENT.md                                                                                                       |
| **Legal review**             | Human  | Privacy / Terms / Cookies / Disclaimer attorney review for target jurisdictions                                                                                                      |
| **AdSense**                  | Human  | Keep ads off until approval; set publisher ID then enable                                                                                                                            |
| **Analytics**                | Human  | Optional GA/GTM IDs after consent copy is accepted                                                                                                                                   |

**Git:** Local `master` includes SEO/SSR/Prettier commits above plus this docs sync; push with `git push origin master` (no force-push).

## Executive results

| Gate                                              | Result                                                                    |
| ------------------------------------------------- | ------------------------------------------------------------------------- |
| Brand (BuildSiteCalc, domain, email)              | Verified                                                                  |
| npm ci / lockfile sync                            | Pass                                                                      |
| Lint                                              | Pass (0 errors)                                                           |
| Typecheck                                         | Pass                                                                      |
| Unit tests                                        | **118 passed**                                                            |
| E2E                                               | **25/25 passed** (after production-server stabilization; see below)       |
| Production build                                  | Pass — Next reports **99** static page generations                        |
| Route crawl                                       | **97/97 OK**                                                              |
| Production smoke (`scripts/production-smoke.cjs`) | **34/34** against local production build (port **3001** when 3000 busy)   |
| Prod dependency audit (`npm audit --omit=dev`)    | **0 vulnerabilities**                                                     |
| Dev-only audit highs                              | brace-expansion via ESLint — non-blocking; see `docs/dependency-audit.md` |
| Ads without IDs                                   | Inactive; ads.txt has no fake publisher line                              |
| Analytics without IDs                             | Inactive                                                                  |

## Remediations completed (original pass — `cea01d5`)

Commit: `cea01d5ef400b3ff0b85672a09d536d2d50a2d71` — **Resolve final pre-deployment audit items** (pushed to `origin/master`).

1. **Paint metric consistency** — door/window/coverage area units; SI base math; coherent result units; URL restore; EN/ES labels; unit + Playwright tests.
2. **Stair unit handling** — shared length unit with conversion on switch; fractional entry; results in selected unit; stringer length; never treat inches as feet; URL restore; EN/ES copy; tests.
3. **Dependency security** — production highs cleared via safe overrides (`postcss`, `sharp`); prod `npm audit --omit=dev` = **0 vulnerabilities**; remaining highs are **dev-only** (brace-expansion via ESLint) and accepted; documented in **`docs/dependency-audit.md`** (path is `docs/`, not `audit/`).
4. **Route count reconciliation** — documented 99 build vs 97 crawl (see section below); not a missing-content bug.
5. **Social URL safety** — empty `siteConfig.social` values omit footer links and Organization `sameAs`; unit coverage.
6. **Production smoke script** — `npm run smoke` / `BASE_URL=... node scripts/production-smoke.cjs`.

## Route count reconciliation (99 vs 97)

These numbers measure **different inventories**:

### Next.js build: 99 static page generations

Includes prerendered SSG/static shells reported by next build (locale SSG pages, root `/`, framework `/_not-found` / `/_global-error`, robots.txt, sitemap.xml, etc.).

### Route crawl: 97 URLs

Operational health checklist in `scripts/route-crawl.cjs`:

| Slice                                                                               |  Count |
| ----------------------------------------------------------------------------------- | -----: |
| Root redirect `/`                                                                   |      1 |
| Infra: `/robots.txt`, `/sitemap.xml`, `/ads.txt`                                    |      3 |
| Intentional 404 probe                                                               |      1 |
| EN public pages (home + calc directory + 9 static + 10 categories + 25 calculators) |     46 |
| ES public pages (parity)                                                            |     46 |
| **Total**                                                                           | **97** |

### Exact 2-page content explanation

Comparing bilingual **public HTML pages**:

- Crawl expects **92** locale URLs (46 × 2), including `/en/calculators` and `/es/calculators`.
- On-disk SSG HTML for locales is **90** pages (home + 9 static + 10 categories + 25 calculators × 2).

The **2 pages** are `/en/calculators` and `/es/calculators` — intentional **dynamic** routes (search/query directory), not missing public pages. Crawl verifies both return HTTP 200. They are simply not SSG-prerendered.

Headline **99 vs 97** is therefore not a missing-content bug; it is build inventory vs crawl checklist (plus the dynamic directory pages above).

## Independent re-verification (2026-07-29)

Clean re-run after remediation. Results:

| Step                               | Result                                                |
| ---------------------------------- | ----------------------------------------------------- |
| `npm ci`                           | **PASS**                                              |
| Lint                               | **PASS**                                              |
| Typecheck                          | **PASS**                                              |
| Unit tests                         | **118/118**                                           |
| Initial E2E                        | **FAIL** — Playwright Chromium missing after `npm ci` |
| E2E after `npx playwright install` | **23/25** flaky under `next dev`                      |
| Production build                   | **PASS** — **99** static pages                        |
| Route crawl                        | **97/97**                                             |
| Production smoke                   | **34/34** (used port **3001** when 3000 busy)         |
| `npm audit --omit=dev`             | **0 vulnerabilities**                                 |

### E2E flake root cause (not selectors)

Remaining failures under `next dev` were caused by **parallel Playwright workers + Next.js Turbopack JSON race**, not bad selectors. Parallel workers racing Turbopack manifests surfaced `"Unexpected end of JSON input"`, which replaced calculator pages with the Next.js error overlay so the Calculate button never appeared.

### E2E stability fix

| Field   | Value                                                        |
| ------- | ------------------------------------------------------------ |
| Commit  | `cd585cf08e107a07031a384c1f7f4fc7544f6e6a` (short `cd585cf`) |
| Message | Stabilize Playwright E2E against production build            |
| Files   | `playwright.config.ts`, `next.config.ts`, `e2e/helpers.ts`   |

Changes:

- Playwright `webServer` uses `npm run build && npm run start` (production server instead of `next dev`).
- `turbopack.root` pinned to project `__dirname` in `next.config.ts` (avoids wrong workspace root during `next dev`).
- Calculator ready timeout **15s** in `e2e/helpers.ts`.

Review confirmed: **no weakened assertions, skips, or error suppression**; **no machine-specific paths**; turbopack.root only for path pin.

**After fix: E2E 25/25.**

### Push / deploy status

Push SEO/SSR/Prettier + docs commits with `git push origin master` (no force-push). Confirm Vercel auto-deploy, then:

```bash
BASE_URL=https://buildsitecalc.com npm run smoke
BASE_URL=https://buildsitecalc.com npm run verify:seo-i18n
```

## Remaining human next actions (ordered)

1. **Push** — `git push origin master` (no force-push) if not already done.
2. **Confirm Vercel deploy** for buildsitecalc.com; run production smoke + `verify:seo-i18n`.
3. **Attorney review** of Privacy / Terms / Cookies / Disclaimer.
4. **Enable GA/GTM/AdSense only after** consent copy + approvals.
5. **Optional:** fill real social profile URLs in `siteConfig.social` (empty is safe).

## Notes for downstream instruction models

- **Project path (this machine):** `C:\Users\Tomas\Desktop\buildsitecalc\buildsitecalc`
- **Repo:** https://github.com/tomytomz1/buildsitecalc
- **Domain:** https://buildsitecalc.com
- **Brand:** BuildSiteCalc
- **Dependency audit path:** `docs/dependency-audit.md` (**not** `audit/dependency-audit.md`)
- **SEO/i18n:** `d50f8ff` · **SSR:** `b49c9da` · **Prettier:** `614f253`
- **Unit tests now:** 128 (includes unit-select locale + SSR default results)
- **BUILD_REPORT.md** and this audit aligned on GO + SEO/SSR release status

## Recommendation rationale

**GO** on technical repo readiness. After push, verify production with smoke + `verify:seo-i18n` before claiming the Vercel deploy is live with this release.
