# IndexNow production integration

GitHub Actions workflow `.github/workflows/indexnow.yml` runs after a
successful Vercel **Production** deployment, not on preview deployments.

- Public ownership key: `/292f126a14eab46ad83ae0ec1c12a039.txt`.
- No user secrets are required. IndexNow keys are publicly verifiable.
- Once the ownership file is live, `scripts/indexnow-submit.mjs` reads the
  production `/sitemap.xml`, compares it against the last successful run,
  and submits newly added, updated, and deleted URLs.
- When content changes but lastmod does not, relevant source-file changes
  trigger notification too. Shared code changes can affect every page.
- The first run submits all 104 currently listed URLs once.
- Snapshot persistence uses GitHub Actions cache. If a cache is evicted,
  the next run safely re-announces the current URLs.
- HTTP 200 or 202 counts as accepted by IndexNow; it is not an indexing
  guarantee. Failures stop the workflow without updating the snapshot.
- Unit tests: `node --test scripts/indexnow-submit.test.mjs`.
- Manual runs: GitHub repository → Actions → IndexNow production URLs →
  Run workflow. Observe acceptance status in that action's logs, then
  in Bing Webmaster Tools → IndexNow.

If `deployment_status` events stop being delivered from the Vercel GitHub
integration, manually run the workflow and repair the deployment event
integration; do not silently assume it is notifying Bing.
