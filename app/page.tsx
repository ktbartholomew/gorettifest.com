import Image from "next/image";
import styles from "@/components/sections/sections.module.css";
import { HeaderNav } from "@/components/header-nav";
import { PageSection } from "@/components/page-section";
import { Button } from "@/components/button";
import Link from "next/link";
import { GamesSection } from "@/components/sections/games";
import { lilita } from "@/components/font";
import { EntertainmentSection } from "@/components/sections/entertainment";
import { FoodSection } from "@/components/sections/food";
import { VisitSection } from "@/components/sections/visit";
import { VendorSection } from "@/components/sections/vendors";
import { SponsorsSection } from "@/components/sections/sponsors";
import { RecapSection } from "@/components/sections/recap";

const SHOW_RECAP = false;
const HERO_VIDEO_URL =
  "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2026/GF_VIBES.mov";

const eventStructuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "GorettiFest 2026",
  startDate: "2026-10-03T10:00-05:00",
  endDate: "2026-10-04T15:00-05:00",
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
      <HeaderNav logo />
      <section className="relative aspect-video overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={HERO_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center">
          <h1
            className={`${lilita.className} flex flex-col gap-4 text-5xl text-white md:text-6xl lg:text-8xl`}
            style={{
              textShadow:
                "0 4px 18px rgba(0, 0, 0, 0.9), 0 1px 5px rgba(0, 0, 0, 0.95)",
            }}
          >
            <span className="block">Food. Fun. GorettiFest.</span>
            <span className="block text-4xl md:text-4xl lg:text-6xl">
              October 3-4, 2026
            </span>
          </h1>
        </div>
      </section>
      {SHOW_RECAP ? (
        <RecapSection />
      ) : (
        <>
          <VisitSection />
          <FoodSection />
          <GamesSection />
          <EntertainmentSection />
          <VendorSection />
        </>
      )}
      {/* TODO: Confirm sponsors first, then build out this section */}
      <SponsorsSection />
      <PageSection id="about-us" className="bg-red-700 text-white">
        <div className="flex justify-evenly justify-items-center">
          <div className="lg:max-w-[50vw]">
            <h2 className={lilita.className}>About GorettiFest</h2>
            <Image
              className={[styles.photoWithBorder].join(" ")}
              src="/img/IMG_3617.webp"
              alt="Saint Maria Goretti Catholic School students in the church sanctuary"
              width={900}
              height={900}
              loading="lazy"
            />
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
