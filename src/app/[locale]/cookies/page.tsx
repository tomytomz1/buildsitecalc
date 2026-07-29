import { createStaticPageHandlers } from "@/lib/static-page";

const { generateMetadata, default: CookiesPage } = createStaticPageHandlers("cookies");

export { generateMetadata };
export default CookiesPage;
