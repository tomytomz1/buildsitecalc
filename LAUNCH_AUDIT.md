# Launch Audit — BuildSiteCalc

**Date:** 2026-07-29 (final pre-deployment remediation + independent re-verification + E2E stabilization)
**Auditor:** Independent launch audit + remediation pass + clean re-verification
**Repo:** https://github.com/tomytomz1/buildsitecalc
**Local project path:** `C:\Users\Tomas\Desktop\buildsitecalc\buildsitecalc`
**Production domain:** https://buildsitecalc.com
**Brand:** BuildSiteCalc
**Contact:** hello@buildsitecalc.com

## Launch recommendation: GO

Technical repository readiness is green. Ship to Vercel when DNS/domain attachment and any attorney review of legal pages are ready. Remaining work is operational/human — not product blockers in this repo.

### Readiness by lane

| Lane | Status | Notes |
|------|--------|-------|
| **Technical repo readiness** | **GO** | Lint, typecheck, 118 unit tests, 25/25 e2e (production server), production build (99 static pages), route crawl 97/97, production smoke 34/34, prod `npm audit --omit=dev` = 0 vulns |
| **Vercel / DNS** | Human | Import repo, attach buildsitecalc.com, wait for SSL — see VERCEL_DEPLOYMENT.md |
| **Legal review** | Human | Privacy / Terms / Cookies / Disclaimer attorney review for target jurisdictions |
| **AdSense** | Human | Keep ads off until approval; set publisher ID then enable |
| **Analytics** | Human | Optional GA/GTM IDs after consent copy is accepted |

**Human blocker (git):** Local `master` is **ahead of `origin/master`** with unpushed commits (E2E stability `cd585cf` plus this documentation sync). Push failed earlier with GitHub HTTPS auth rejection (`Invalid username or token`). Human must re-auth and run `git push origin master` (no force-push). Earlier remediation commit `cea01d5` was pushed successfully.

## Executive results

| Gate | Result |
|------|--------|
| Brand (BuildSiteCalc, domain, email) | Verified |
| npm ci / lockfile sync | Pass |
| Lint | Pass (0 errors) |
| Typecheck | Pass |
| Unit tests | **118 passed** |
| E2E | **25/25 passed** (after production-server stabilization; see below) |
| Production build | Pass — Next reports **99** static page generations |
| Route crawl | **97/97 OK** |
| Production smoke (`scripts/production-smoke.cjs`) | **34/34** against local production build (port **3001** when 3000 busy) |
| Prod dependency audit (`npm audit --omit=dev`) | **0 vulnerabilities** |
| Dev-only audit highs | brace-expansion via ESLint — non-blocking; see `docs/dependency-audit.md` |
| Ads without IDs | Inactive; ads.txt has no fake publisher line |
| Analytics without IDs | Inactive |

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

| Slice | Count |
|-------|------:|
| Root redirect `/` | 1 |
| Infra: `/robots.txt`, `/sitemap.xml`, `/ads.txt` | 3 |
| Intentional 404 probe | 1 |
| EN public pages (home + calc directory + 9 static + 10 categories + 25 calculators) | 46 |
| ES public pages (parity) | 46 |
| **Total** | **97** |

### Exact 2-page content explanation

Comparing bilingual **public HTML pages**:

- Crawl expects **92** locale URLs (46 × 2), including `/en/calculators` and `/es/calculators`.
- On-disk SSG HTML for locales is **90** pages (home + 9 static + 10 categories + 25 calculators × 2).

The **2 pages** are `/en/calculators` and `/es/calculators` — intentional **dynamic** routes (search/query directory), not missing public pages. Crawl verifies both return HTTP 200. They are simply not SSG-prerendered.

Headline **99 vs 97** is therefore not a missing-content bug; it is build inventory vs crawl checklist (plus the dynamic directory pages above).

## Independent re-verification (2026-07-29)

Clean re-run after remediation. Results:

| Step | Result |
|------|--------|
| `npm ci` | **PASS** |
| Lint | **PASS** |
| Typecheck | **PASS** |
| Unit tests | **118/118** |
| Initial E2E | **FAIL** — Playwright Chromium missing after `npm ci` |
| E2E after `npx playwright install` | **23/25** flaky under `next dev` |
| Production build | **PASS** — **99** static pages |
| Route crawl | **97/97** |
| Production smoke | **34/34** (used port **3001** when 3000 busy) |
| `npm audit --omit=dev` | **0 vulnerabilities** |

### E2E flake root cause (not selectors)

Remaining failures under `next dev` were caused by **parallel Playwright workers + Next.js Turbopack JSON race**, not bad selectors. Parallel workers racing Turbopack manifests surfaced `"Unexpected end of JSON input"`, which replaced calculator pages with the Next.js error overlay so the Calculate button never appeared.

### E2E stability fix

| Field | Value |
|-------|--------|
| Commit | `cd585cf08e107a07031a384c1f7f4fc7544f6e6a` (short `cd585cf`) |
| Message | Stabilize Playwright E2E against production build |
| Files | `playwright.config.ts`, `next.config.ts`, `e2e/helpers.ts` |

Changes:

- Playwright `webServer` uses `npm run build && npm run start` (production server instead of `next dev`).
- `turbopack.root` pinned to project `__dirname` in `next.config.ts` (avoids wrong workspace root during `next dev`).
- Calculator ready timeout **15s** in `e2e/helpers.ts`.

Review confirmed: **no weakened assertions, skips, or error suppression**; **no machine-specific paths**; turbopack.root only for path pin.

**After fix: E2E 25/25.**

### Push status (local ahead of origin)

**Push pending.** GitHub HTTPS auth previously rejected (`Invalid username or token`). Local branch `master` is **ahead of `origin/master`** with:

| Commit | Message |
|--------|---------|
| `cd585cf08e107a07031a384c1f7f4fc7544f6e6a` | Stabilize Playwright E2E against production build |
| (docs sync) | Update final launch documentation |

Human must re-authenticate and run:

```bash
git push origin master
```

Do **not** force-push. Remediation commit `cea01d5` was already pushed successfully to origin.

## Remaining human next actions (ordered)

1. **Fix GitHub credentials and push** — `git push origin master` (no force-push). Local `master` is ahead with E2E stability (`cd585cf`) and documentation sync commits.
2. **Vercel import + DNS** for buildsitecalc.com (see VERCEL_DEPLOYMENT.md). Do not invent DNS values.
3. **Attorney review** of Privacy / Terms / Cookies / Disclaimer.
4. **After DNS:** `BASE_URL=https://buildsitecalc.com npm run smoke`.
5. **Enable GA/GTM/AdSense only after** consent copy + approvals.
6. **Optional:** fill real social profile URLs in `siteConfig.social` (empty is safe).

## Notes for downstream instruction models

- **Project path (this machine):** `C:\Users\Tomas\Desktop\buildsitecalc\buildsitecalc`
- **Repo:** https://github.com/tomytomz1/buildsitecalc
- **Domain:** https://buildsitecalc.com
- **Brand:** BuildSiteCalc
- **Dependency audit path:** `docs/dependency-audit.md` (**not** `audit/dependency-audit.md`)
- **E2E stability commit:** `cd585cf08e107a07031a384c1f7f4fc7544f6e6a` — Stabilize Playwright E2E against production build
- **Documentation sync:** committed as `Update final launch documentation` (included on local master ahead of origin)
- **Remote sync:** local `master` ahead of `origin/master` — push pending after GitHub auth is fixed
- **BUILD_REPORT.md** and this audit are aligned on GO status, QA counts (118/118, 25/25, 34/34, 97/97, 99 pages, 0 prod vulns), repo URL, and push-pending git state

## Recommendation rationale

**GO** on technical repo readiness. Do not keep CONDITIONAL GO merely because DNS/deploy need humans — those are external attach steps, not unresolved product defects. The only immediate engineering follow-up for humans is pushing local commits (`cd585cf` + documentation sync) after fixing GitHub credentials.
