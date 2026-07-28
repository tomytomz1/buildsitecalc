import { createStaticPageHandlers } from "@/lib/static-page";

const { generateMetadata, default: AboutPage } =
  createStaticPageHandlers("about");

export { generateMetadata };
export default AboutPage;
