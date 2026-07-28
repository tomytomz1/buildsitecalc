import { createStaticPageHandlers } from "@/lib/static-page";

const { generateMetadata, default: TermsPage } =
  createStaticPageHandlers("terms");

export { generateMetadata };
export default TermsPage;
