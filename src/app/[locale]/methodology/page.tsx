import { createStaticPageHandlers } from "@/lib/static-page";

const { generateMetadata, default: MethodologyPage } =
  createStaticPageHandlers("methodology");

export { generateMetadata };
export default MethodologyPage;
