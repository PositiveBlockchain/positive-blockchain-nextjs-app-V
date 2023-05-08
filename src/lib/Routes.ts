import { config } from "@/configuration";

export default class Routes {
  // Forms
  static PARTNER_FORM = "https://bit.ly/PBpartner-form";
  static BECOME_A_CONTRIBUTOR = "https://bit.ly/applyPB";
  static ADD_NEW_PROJECT = "https://forms.gle/jZKsv7sbxJjRu7jFA";

  // WordPress pages
  static HOME = Routes.getExternalRoute("/");
  static ABOUT = Routes.getExternalRoute("/about");
  static BLOG = Routes.getExternalRoute("/blog");
  static NEWSLETTER = Routes.getExternalRoute("/newsletter");
  static RESOURCES = Routes.getExternalRoute("/resources");
  static UNIVERSITY_RESEARCH = Routes.getExternalRoute("/university-research");
  static DONATE = Routes.getExternalRoute("/donations");
  static CONTACT = Routes.getExternalRoute("/contact");
  static PRIVACY_POLICY = Routes.getExternalRoute("/privacy-policy");

  static getExternalRoute(path: string) {
    return `${config.constants.positiveBlockchain.HOST}${path}`;
  }

  static getPath(path: string) {
    return path;
  }

  static getBaseUrl() {
    const isProd = process.env.NODE_ENV === "production";

    return isProd
      ? `https://${process.env.VERCEL_URL}/nextjs-app`
      : `http://localhost:3000/nextjs-app`;
  }
}
