/**
 * Non-localized 404 fallback for multiple root layouts.
 * No imports: avoid importing styles from the global-not-found special route.
 */
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
        <h1>Page not found</h1>
        <p>The requested page does not exist.</p>
        <p>Start again at buildsitecalc.com/en.</p>
      </body>
    </html>
  );
}
