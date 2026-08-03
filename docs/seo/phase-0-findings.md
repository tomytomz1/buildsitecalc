# Phase 0 — Verification findings

Baseline date: 2026-08-03. GSC window: last 28 days, Web search.

Phase 0 exists to test the three assumptions the 90-day plan rests on before
any content work is done. Two of the three are now resolved. One needs your
Search Console login.

## Baseline numbers (from the GSC export)

| Metric                                     | Value                          |
| ------------------------------------------ | ------------------------------ |
| Impressions (Devices sheet, authoritative) | 387                            |
| Impressions (Queries sheet)                | 272                            |
| Anonymized / hidden impressions            | 115 (30%)                      |
| Queries                                    | 216                            |
| Clicks                                     | 1 (branded, `/en`, position 2) |
| URLs in sitemap                            | 94 (47 en, 47 es)              |
| URLs with at least one impression          | 34 (36% of sitemap)            |
| Weighted avg position, EN pages            | ~75                            |
| Weighted avg position, ES pages            | ~45                            |

The 115-impression gap matters: the two best-ranking pages on the site
(`es/calculators/factor-de-desperdicio` at position 5.75,
`es/calculators/tejas-asfalticas` at 8.25) have **no corresponding query** in
the export. Their page-one rankings come from queries GSC will not disclose.

## Assumption A - indexation: NOT RESOLVED, needs your login

Live checks passed: `/sitemap.xml` returns 200 and lists 94 URLs, `/robots.txt`
allows everything and points at the sitemap, and sampled EN and ES calculator
URLs all return 200. So nothing is blocking crawl at the HTTP level.

What that does not tell us is how many of the 94 are actually indexed. 34 of
94 have ever earned an impression, which is consistent either with a young
domain crawling slowly or with most pages stuck unindexed. These are very
different problems, and only the GSC report distinguishes them.

**Do this (5 minutes):** Search Console, then Indexing, then Pages. Record the
count next to each status, especially "Crawled - currently not indexed" and
"Discovered - currently not indexed". Then fill this in:

| Status                                    | URLs |
| ----------------------------------------- | ---- |
| Indexed                                   |      |
| Crawled - currently not indexed           |      |
| Discovered - currently not indexed        |      |
| Excluded by noindex                       |      |
| Alternate page with proper canonical tag  |      |
| Duplicate without user-selected canonical |      |

Interpretation: if indexed is 80+ of 94, the plan proceeds as written. If
"Discovered - currently not indexed" exceeds roughly 30 URLs, crawl trust is
the real constraint, content work should pause, and effort moves to the
authority workstream instead.

Note: a nonzero "Alternate page with proper canonical tag" count is expected
and healthy here, because that is the hreflang pair working as designed.

## Assumption B - are the long-tail queries winnable: RESOLVED, YES

Checked the live SERPs for three of the five target queries. The plan assumed
these were held by small sites rather than high-authority domains. Confirmed.

**"how many square feet does a gallon of paint cover"** - top results are
sherwin-williams.com (the one strong domain), then sdcustompainting.com (a
local painting contractor), calstack.pro, buildcalcpro.org, and
calculatdata.online. Four of the top five are small niche sites.

**"max rise for stairs" / "maximum stair rise"** - jaspector.com,
woodstairco.com (twice), and a viewrail.com PDF. No major publisher in the
result set. This is a code-reference SERP with no incumbent authority.

**"mulch bags to cubic yards"** - mulchcalculator.cc, activecalculator.com,
promulchcalculator.com, pinestrawking.com, buildmaterialcalc.com. Every single
result is a small single-purpose calculator site.

This is a green light for the `quickAnswers` approach. It also revealed the
format that wins these SERPs, which the implementation follows:

1. A direct numeric answer inside the first sentence, before any explanation.
2. A conversion or reference table covering the common variants (bag sizes,
   substrate types, code standards).
3. The question itself as a literal heading.

Worth noting: competitors serve these on dedicated URLs
(`promulchcalculator.com/yards-to-bags-mulch-converter/`,
`buildmaterialcalc.com/bags-of-mulch-in-a-yard`). The plan deliberately puts
them on existing calculator pages instead, because adding URLs to a
sub-2-month-old domain carries index-bloat risk that these sites have already
aged out of. Revisit after day 90 if `quickAnswers` blocks earn impressions but
stall outside the top 20.

## Assumption C - is the Spanish good enough to build on: RESOLVED, YES

This one was expected to be the problem. It is not. You described the Spanish
as unreviewed machine translation; the content does not read that way, and the
measurements do not support that characterization.

Automated scan of `scripts/i18n-data/es-calculators.mjs` (375 KB):

| Signal                                          | Result                                                              |
| ----------------------------------------------- | ------------------------------------------------------------------- |
| English leakage                                 | Effectively zero; the few hits are inside citation titles and URLs  |
| Decimal-comma numbers                           | 1,340 occurrences, the correct `es` numeric convention              |
| Usted-form imperatives (Mida, Aplique, Ingrese) | 147, a consistent formal register                                   |
| Latin American trade vocabulary                 | tablaroca 26, cumbrera 15, montantes 15, cuantificacion 11, merma 9 |

The vocabulary is the strongest evidence. `tablaroca` for drywall and `zoclo`
for baseboard are specifically Mexican and Latin American trade usage; a naive
translation produces `placa de yeso` and `rodapie`. Terms like `goteron`,
`lamina de valle`, `botas de tuberia`, `hilada de arranque` and `cuantificacion`
are genuine trade register, not dictionary output.

Read-through of `project-waste-factor`, `roofing-shingle` and `paint` confirms
technically correct content with real citations (EPA construction debris
tonnages, FEMA P-499), locale-adapted worked examples, and idiomatic phrasing
that is not calqued from English.

**Consequence for the plan:** the Spanish gate is cleared. Spanish is not a
liability to be contained, it is the strongest asset on the site and the ~45
average position versus ~75 for English says so. The hreflang fix in Phase 1 is
therefore the highest-value change in the entire plan, because it currently
points your best content at `es-ES` (Spain, 9 impressions) while your actual
audience is Latin America (Mexico 8, Chile 4, Ecuador 2, El Salvador 2,
Venezuela 2, Honduras 2, Bolivia 1, Argentina 1, Colombia 1).

One caveat stands: a native speaker read is still worth 30 minutes before you
scale ES further, because automated signals cannot catch tone problems. But
nothing found here justifies delaying the plan.

## Confirmed technical defects

Both were verified against production, not just read in source.

- **`/` returns 307 Temporary Redirect** (`curl -I https://buildsitecalc.com/`).
  Should be 308. Confirms T3.
- **Sitemap `lastmod` is a single identical timestamp across all 94 URLs**
  (`2026-07-30T05:41:49.165Z`). Confirms T2, because every page claims
  modification at build time, so the signal is worthless to Google.

`/sitemap.xml` initially appeared to return 500 through one fetch path but
returns 200 via direct HTTP. Not a bug.
