# Launch Audit — BuildSiteCalc

**Date:** 2026-07-28 (final pre-deployment remediation)
**Auditor:** Independent launch audit + remediation pass
**Repo:** https://github.com/tomytomz1/buildsitecalc
**Production domain:** https://buildsitecalc.com
**Contact:** hello@buildsitecalc.com

## Launch recommendation: GO

Technical repository readiness is green. Ship to Vercel when DNS/domain attachment and any attorney review of legal pages are ready. Remaining work is operational/human — not product blockers in this repo.

### Readiness by lane

| Lane | Status | Notes |
|------|--------|-------|
| **Technical repo readiness** | **GO** | Lint, typecheck, 118 unit tests, 25 e2e, production build, route crawl 97/97, production smoke 34/34, prod npm audit --omit=dev = 0 vulns |
| **Vercel / DNS** | Human | Import repo, attach buildsitecalc.com, wait for SSL — see VERCEL_DEPLOYMENT.md |
| **Legal review** | Human | Privacy / Terms / Cookies / Disclaimer attorney review for target jurisdictions |
| **AdSense** | Human | Keep ads off until approval; set publisher ID then enable |
| **Analytics** | Human | Optional GA/GTM IDs after consent copy is accepted |

## Executive results

| Gate | Result |
|------|--------|
| Brand (BuildSiteCalc, domain, email) | Verified |
| npm ci / lockfile sync | Pass |
| Lint | Pass (0 errors) |
| Typecheck | Pass |
| Unit tests | **118 passed** |
| E2E | **25 passed** |
| Production build | Pass — Next reports **99** static page generations |
| Route crawl | **97/97 OK** |
| Production smoke (scripts/production-smoke.cjs) | **34/34** against local production build |
| Prod dependency audit (npm audit --omit=dev) | **0 vulnerabilities** |
| Dev-only audit highs | 9 high (brace-expansion via ESLint) — non-blocking; see docs/dependency-audit.md |
| Ads without IDs | Inactive; ads.txt has no fake publisher line |
| Analytics without IDs | Inactive |

## Route count reconciliation (99 vs 97)

These numbers measure **different inventories**:

### Next.js build: 99 static page generations

Includes prerendered SSG/static shells reported by next build (locale SSG pages, root /, framework /_not-found / /_global-error, robots.txt, sitemap.xml, etc.).

### Route crawl: 97 URLs

Operational health checklist in scripts/route-crawl.cjs:

| Slice | Count |
|-------|------:|
| Root redirect / | 1 |
| Infra: /robots.txt, /sitemap.xml, /ads.txt | 3 |
| Intentional 404 probe | 1 |
| EN public pages (home + calc directory + 9 static + 10 categories + 25 calculators) | 46 |
| ES public pages (parity) | 46 |
| **Total** | **97** |

### Exact 2-page content explanation

Comparing bilingual **public HTML pages**:

- Crawl expects **92** locale URLs (46 x 2), including /en/calculators and /es/calculators.
- On-disk SSG HTML for locales is **90** pages (home + 9 static + 10 categories + 25 calculators x 2).

The **2 pages** are /en/calculators and /es/calculators — intentional **dynamic** routes (search/query directory), not missing public pages. Crawl verifies both return HTTP 200. They are simply not SSG-prerendered.

Headline **99 vs 97** is therefore not a missing-content bug; it is build inventory vs crawl checklist (plus the dynamic directory pages above).

## Remediations in this pass

1. **Paint metric consistency** — door/window/coverage area units; SI base math; coherent result units; URL restore; EN/ES labels; unit + Playwright tests.
2. **Stair unit handling** — shared length unit with conversion on switch; fractional entry; results in selected unit; stringer length; never treat inches as feet; URL restore; EN/ES copy; tests.
3. **Dependency security** — production highs cleared via safe overrides (postcss, sharp); documented in docs/dependency-audit.md.
4. **Social URL safety** — empty siteConfig.social values omit footer links and Organization sameAs; unit coverage.
5. **Production smoke script** — npm run smoke / BASE_URL=... node scripts/production-smoke.cjs.

## Remaining human next actions

1. Vercel dashboard deploy + DNS for buildsitecalc.com (see VERCEL_DEPLOYMENT.md). Do not invent DNS values.
2. Attorney review of Privacy / Terms / Cookies / Disclaimer.
3. After DNS: production smoke with BASE_URL=https://buildsitecalc.com npm run smoke.
4. Enable GA/GTM/AdSense only after consent + approvals.
5. Optional: fill real social profile URLs in siteConfig.social (empty is safe).

## Recommendation rationale

**GO** on technical repo readiness. Do not keep CONDITIONAL GO merely because DNS/deploy need humans — those are external attach steps, not unresolved product defects.