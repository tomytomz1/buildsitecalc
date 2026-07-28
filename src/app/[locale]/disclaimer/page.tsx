import { createStaticPageHandlers } from "@/lib/static-page";

const { generateMetadata, default: DisclaimerPage } =
  createStaticPageHandlers("disclaimer");

export { generateMetadata };
export default DisclaimerPage;
