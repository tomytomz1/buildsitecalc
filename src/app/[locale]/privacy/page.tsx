import { createStaticPageHandlers } from "@/lib/static-page";

const { generateMetadata, default: PrivacyPage } = createStaticPageHandlers("privacy");

export { generateMetadata };
export default PrivacyPage;
