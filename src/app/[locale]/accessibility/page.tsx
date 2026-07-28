import { createStaticPageHandlers } from "@/lib/static-page";

const { generateMetadata, default: AccessibilityPage } =
  createStaticPageHandlers("accessibility");

export { generateMetadata };
export default AccessibilityPage;
