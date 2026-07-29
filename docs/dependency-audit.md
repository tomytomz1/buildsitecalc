# Dependency security audit — BuildSiteCalc

**Date:** 2026-07-28  
**Scope:** `npm audit` (all deps) and `npm audit --omit=dev` (production)  
**Stack:** Next.js `16.2.12`, React `19.2.4`, npm lockfile

## Executive summary

| Scope                     | Before                               | After actions                                    |
| ------------------------- | ------------------------------------ | ------------------------------------------------ |
| Production (`--omit=dev`) | **3 high** (postcss, sharp via next) | **0 vulnerabilities**                            |
| Full tree (incl. dev)     | **12 high**                          | **9 high** (eslint / brace-expansion chain only) |
| Critical                  | 0                                    | 0                                                |

Production high/critical issues were cleared with **npm `overrides`** for nested `postcss` and `sharp` (verified with `next build`). Remaining highs are **dev-only** (lint toolchain).

`npm audit fix --force` was **not** used: it would install `next@9.3.3` (catastrophic downgrade) and/or `eslint@10.8.0` (breaking).

---

## Actions taken

1. Ran `npm audit` and `npm audit --omit=dev` (baseline).
2. Ran `npm audit fix` **without** `--force` — no meaningful resolution of high findings (advisory “fixes” require breaking majors).
3. Added package.json `overrides`:
   - `postcss`: `8.5.24` (fixed; advisory range `<=8.5.17`)
   - `sharp`: `0.35.3` (fixed; advisory range `<0.35.0`)
4. Ran `npm install`, re-audited both scopes, and verified `npm run build` succeeded on Next.js 16.2.12.

---

## High / critical findings

### Production (resolved)

| Package     | Severity                                                                   | Path                              | Prod vs dev                         | Fixed version              | Action / safety notes                                                                                                                                                           |
| ----------- | -------------------------------------------------------------------------- | --------------------------------- | ----------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **postcss** | high (XSS advisory listed moderate in GHSA; path-traversal/file-read high) | `next` → nested `postcss@8.4.31`  | **Production** (bundled with Next)  | `>=8.5.18` (used `8.5.24`) | **Fixed via override.** Do not use `npm audit fix --force` (suggests `next@9.3.3`). Next stable still pins `8.4.31`; override is compatible within PostCSS 8.x. Build verified. |
| **sharp**   | high                                                                       | `next` optionalDep `sharp@0.34.5` | **Production** (image optimization) | `>=0.35.0` (used `0.35.3`) | **Fixed via override.** Force-fix path also points at `next@9.3.3`. Next `16.3.0-preview` already depends on `sharp@^0.35.3`; override aligns with that. Build verified.        |

Advisories:

- PostCSS: [GHSA-qx2v-qp2m-jg93](https://github.com/advisories/GHSA-qx2v-qp2m-jg93), [GHSA-6g55-p6wh-862q](https://github.com/advisories/GHSA-6g55-p6wh-862q), [GHSA-r28c-9q8g-f849](https://github.com/advisories/GHSA-r28c-9q8g-f849)
- sharp / libvips: [GHSA-f88m-g3jw-g9cj](https://github.com/advisories/GHSA-f88m-g3jw-g9cj)

### Dev-only (remaining — accepted for launch)

| Package                                                                                                                     | Severity         | Path                                                                                 | Prod vs dev  | Fixed version                                                                 | Action / safety notes                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------ | ------------ | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **brace-expansion**                                                                                                         | high             | `eslint` / `eslint-config-next` plugins → `minimatch@3.x` → `brace-expansion@1.1.16` | **Dev-only** | `5.0.8` (1.x line has no fix; latest 1.x still in vulnerable range `<=5.0.7`) | **Not force-fixed.** `npm audit fix --force` would install `eslint@10.8.0` (breaking) or ancient `eslint-config-next@0.2.4`. Overriding to `5.0.8` risks breaking `minimatch@3` API. **Acceptable for launch:** lint runs in CI/dev only; DoS requires attacker-controlled glob patterns in the ESLint process, not the production app. |
| **minimatch** / **@eslint/config-array** / **@eslint/eslintrc** / **eslint** / **eslint-plugin-*** / **eslint-config-next** | high (inherited) | Same eslint ecosystem graph                                                          | **Dev-only** | Upstream: ESLint 10+ / updated plugins                                        | Track ESLint 10 + `eslint-config-next` when Next documents support; do not force major upgrade solely for audit score.                                                                                                                                                                                                                  |

Advisory: [GHSA-mh99-v99m-4gvg](https://github.com/advisories/GHSA-mh99-v99m-4gvg) (DoS via unbounded brace expansion).

---

## Moderate / other

- No separate moderate/low/critical counts in the final full audit beyond the high brace-expansion chain.
- Individual PostCSS XSS GHSA is scored **moderate** in the advisory metadata; npm rolls the nested package under **high** because of the other PostCSS CVEs. All PostCSS issues under Next were addressed by the override.

---

## Remaining risk (launch posture)

| Category                     | Status                                         | Rationale                                                                                                                              |
| ---------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Production high/critical** | **None remaining**                             | Cleared by overrides; `npm audit --omit=dev` → 0.                                                                                      |
| **Dev-only high**            | **9 reported** (brace-expansion → eslint tree) | Blocked without breaking ESLint 9 / Next eslint-config. Not shipped to end users. Revisit when upgrading ESLint / eslint-config-next.  |
| **Overrides maintenance**    | Monitor                                        | When Next stable ships fixed `postcss` / `sharp`, consider removing overrides to stay on Next’s pin. Re-run audit after Next upgrades. |

### Explicitly rejected

| Proposed fix                                    | Why rejected                                                                                                                |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `npm audit fix --force` for postcss/sharp       | Would install **next@9.3.3** (major downgrade, app-breaking).                                                               |
| `npm audit fix --force` for brace-expansion     | Would install **eslint@10.8.0** or broken ancient eslint-config-next; unvalidated against this repo.                        |
| Upgrade to Next canary/preview solely for sharp | Preview still had vulnerable postcss in checked versions; overrides already fix both on stable 16.2.12 with verified build. |

---

## Post-fix audit commands (results)

```text
npm audit --omit=dev
# found 0 vulnerabilities

npm audit
# 9 high severity vulnerabilities (brace-expansion / eslint toolchain only)
```

---

## Follow-ups

1. Watch Next.js stable releases that bump nested `postcss` ≥ `8.5.18` and `sharp` ≥ `0.35.0`, then drop overrides if redundant.
2. When ESLint 10 + compatible `eslint-config-next` are supported, upgrade the lint stack to clear remaining highs.
3. Re-run this audit before major releases (`npm audit` + `npm audit --omit=dev`).
