import { NotFoundContent } from "@/components/pages/NotFoundContent";

/**
 * Root 404 — avoid nesting <html>/<body> inside the root layout.
 */
export default function RootNotFound() {
  return <NotFoundContent />;
}
