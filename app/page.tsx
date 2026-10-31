import type { Metadata } from "next";
import { FestivalHome } from "@/components/home/festival-home";
import { ThankYouHome } from "@/components/home/thank-you-home";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = siteConfig.homeMode === "thank-you"
  ? {
      title: `Thank You for GorettiFest ${siteConfig.recapYear} | Saint Maria Goretti`,
      description: "A weekend of food, fun, and community. Thank you to the families, volunteers, and sponsors who made GorettiFest possible. Explore the moments with us.",
    }
  : {};

export default async function Home() {
  if (process.env.NODE_ENV === "development" && siteConfig.homeMode === "thank-you") {
    const { DevHome } = await import("@/components/dev/dev-home");
    return <DevHome />;
  }
  return siteConfig.homeMode === "thank-you" ? <ThankYouHome /> : <FestivalHome />;
}
