import Image from "next/image";
import { Lilita_One } from "next/font/google";
const lilita = Lilita_One({ weight: ["400"], subsets: ["latin"] });
import headerImage from "@/public/img/IMG_1440.webp";
import { PageSection } from "@/components/page-section";
import { Button } from "@/components/button";
import Link from "next/link";
import { RecapSection } from "@/components/sections/recap";
import { SponsorsSection } from "@/components/sections/sponsors";

const eventStructuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "GorettiFest 2024",
  startDate: "2024-10-05T11:00-05:00",
  endDate: "2024-10-06T23:00-05:00",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "Saint Maria Goretti Catholic School",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1200 S Davis Dr",
      addressLocality: "Arlington",
      postalCode: "76016",
      addressRegion: "TX",
      addressCountry: "US",
    },
  },
  description:
    "GorettiFest is a fall festival with delicious homemade food, carnival games, and entertainment. Hosted in the heart of Arlington, TX all proceeds benefit Saint Maria Goretti Catholic School.",

  organizer: {
    "@type": "Organization",
    name: "Saint Maria Goretti Catholic School",
    url: "https://smgschool.org/",
  },
};

export default function Home() {
  return (
    <main>
      <section className="relative p-4 md:p-0 md:h-[50vh]">
        <div className="hidden md:block absolute h-full w-full overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={headerImage.src}
            alt="two students selling paletas from a rolling cart at GorettiFest festival"
            priority
            width={1800}
            height={1800}
            loading="eager"
            placeholder="blur"
            blurDataURL={headerImage.blurDataURL}
          />
        </div>
        <div className="absolute top-0 left-0 h-full w-full md:mix-blend-multiply bg-slate-800 md:bg-slate-900/70"></div>
        <div className="z-10 relative flex flex-col h-full w-full px-4 md:px-0 md:absolute text-center items-center justify-center">
          <Image
            alt="GorettiFest October 5-6, 2024"
            src="/img/gorettifest-logo-white-red-outline-date.svg"
            width={760}
            height={760}
            priority
            loading="eager"
            className="block relative h-[75%] object-contain"
          />
        </div>
      </section>
      {/* <HeaderNav /> */}
      <RecapSection />
      <SponsorsSection />
      <PageSection id="about-us" className="bg-red-700 text-white">
        <div className="flex justify-evenly justify-items-center">
          <div className="lg:max-w-[50vw]">
            <h2 className={lilita.className}>About GorettiFest</h2>
            <p className="text-2xl">
              GorettiFest is an annual festival to raise money for{" "}
              <a
                className="text-white"
                href="https://smgschool.org/"
                target="_blank"
              >
                Saint Maria Goretti Catholic School
              </a>
              , the premier Catholic School in Arlington.
            </p>
            <p className="text-lg">
              We&apos;ve been hosting this massive fall event for years! Since
              1964, GorettiFest has brought families throughout Arlington
              together for a weekend of fun and fellowship. The event has
              changed some over the years, but many of our traditions have been
              around for decades!
            </p>
            <p className="text-lg">
              Every dollar you spend at GorettiFest goes directly to helping
              Saint Maria Goretti provide a one-of-kind Catholic education to
              hundreds of students. We are excited to see you there!
            </p>
            <div className="drop-shadow-lg rounded-xl my-8 p-4 bg-white text-black">
              <p className="text-lg">
                Help us make GorettiFest a success! There are tons of ways to
                volunteer, or you can make a tax-deductible donation to help us
                gather the supplies we need to make GorettiFest an unforgetable
                experience for everyone!
              </p>
              <p className="text-lg text-center">
                <Link href="/volunteer">
                  <Button>I want to help!</Button>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          &copy; {new Date().getFullYear()} Saint Maria Goretti Catholic School
          |{" "}
          <a className="text-white" href="mailto:questions@gorettifest.com">
            Contact Us
          </a>
        </div>
      </PageSection>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventStructuredData),
        }}
      ></script>
    </main>
  );
}
