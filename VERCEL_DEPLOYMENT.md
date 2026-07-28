# Vercel Deployment Guide — BuildSiteCalc

Manual dashboard deploy only. Do not use Vercel CLI for this launch. Do not invent DNS record values — copy them from the Vercel project Domains UI after you add the domain.

## Prerequisites

- GitHub repo: https://github.com/tomytomz1/buildsitecalc
- Domain registrar access for buildsitecalc.com
- Vercel account with permission to create projects

## Steps

1. Confirm GitHub master contains the launch audit commit and builds locally (`npm run build`).
2. Import project in Vercel Dashboard → Add New → Project → Import tomytomz1/buildsitecalc.
3. Framework preset: Next.js. Root directory: `.` Build command: `npm run build`. Output: default.
4. Node version: 20+ (developed on Node 24; Vercel 20/22 fine if build passes).
5. Environment variables from `.env.example`. For ads/analytics off at launch:
   - NEXT_PUBLIC_SITE_URL=https://buildsitecalc.com
   - Leave GA/GTM/AdSense IDs empty
   - NEXT_PUBLIC_ADS_ENABLED=false
   - NEXT_PUBLIC_AFFILIATES_ENABLED=false
6. Deploy Production from the dashboard.
7. Verify the *.vercel.app URL: /en, /es, one calculator, /sitemap.xml, /robots.txt, /ads.txt.
8. Add custom domain buildsitecalc.com (and optional www) in Project → Settings → Domains.
9. Configure DNS at the registrar using only the A/CNAME/ALIAS records Vercel displays. Wait for propagation.
10. Wait for a valid SSL certificate on the custom domain.
11. Production smoke on https://buildsitecalc.com: root→/en, EN/ES home, calculator calculate, canonicals, sitemap/robots/ads.txt (no publisher line until AdSense ID set).
12. Optional analytics: set GA/GTM IDs after consent copy is acceptable; confirm scripts do not load when empty.
13. Optional AdSense: after approval set NEXT_PUBLIC_ADSENSE_* and NEXT_PUBLIC_ADS_ENABLED=true so /ads.txt emits the real record.
14. Post-launch: watch Vercel logs, add Search Console property, submit sitemap from Search Console.

## Rollback

Redeploy the previous Production deployment from the Vercel Deployments tab. DNS usually does not need changes for app rollbacks.