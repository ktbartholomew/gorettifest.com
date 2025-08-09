import Image from "next/image";
import styles from "@/components/sections/sections.module.css";
import headerImage from "@/public/img/IMG_2212.webp";
import { HeaderNav } from "@/components/header-nav";
import { PageSection } from "@/components/page-section";
import { InfoTable } from "@/components/info-table";
import { Button } from "@/components/button";
import Link from "next/link";
import { GamesSection } from "@/components/sections/games";
import { lilita } from "@/components/font";
import { EntertainmentSection } from "@/components/sections/entertainment";
import { FoodSection } from "@/components/sections/food";

const DONATION_LINK = "https://square.link/u/Ugurk7sW";

const eventStructuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "GorettiFest 2025",
  startDate: "2025-10-04T11:00-05:00",
  endDate: "2025-10-05T23:00-05:00",
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

type SponsorLogo = {
  size: "small" | "large";
  imageUrl: string;
  linkUrl?: string;
  name: string;
};

const sponsors: SponsorLogo[] = [
  {
    size: "large",
    name: "Barnes Video Group",
    imageUrl: "/img/sponsors/barnes-video-group-logo.png",
    linkUrl: "https://www.barnesvideogroup.com/",
  },
  {
    size: "large",
    name: "Rick and Ray's Auto Plaza",
    imageUrl: "/img/sponsors/rick-and-rays-logo.png",
    linkUrl: "https://rickandraysautoplaza.com/",
  },
  {
    size: "large",
    name: "The Keever Group Amerprise Wealth Advisors",
    imageUrl: "/img/sponsors/the-shelton-family.svg",
  },
  {
    size: "large",
    name: "The Keever Group Amerprise Wealth Advisors",
    imageUrl: "/img/sponsors/the-keever-group-logo.png",
    linkUrl: "https://www.ameripriseadvisors.com/team/the-keever-group/",
  },
  {
    size: "small",
    name: "Affalon Productions",
    imageUrl: "/img/sponsors/Affalon%20Productions.png",
  },
  {
    size: "small",
    name: "Behan Music",
    imageUrl: "/img/sponsors/Behan%20Music.png",
  },
  {
    size: "small",
    name: "Darby Day Staffing",
    imageUrl: "/img/sponsors/darby-day-new-logo-1.jpg",
  },
  {
    size: "small",
    name: "Drengr Axe Throwing",
    imageUrl: "/img/sponsors/Drengr%20Axe%20Throwing.png",
  },
  {
    size: "small",
    name: "Fischer's Meat Market",
    imageUrl: "/img/sponsors/Fischers%20Meat%20Market.png",
  },
  {
    size: "small",
    name: "Jump Around DFW",
    imageUrl: "/img/sponsors/JumpAroundDFW.webp",
  },
  {
    size: "small",
    name: "Knights of Columbus",
    imageUrl: "/img/sponsors/KOC.png",
  },
  {
    size: "small",
    name: "La Isla",
    imageUrl: "/img/sponsors/La%20Isla.webp",
  },
  {
    size: "small",
    name: "Little Germany",
    imageUrl: "/img/sponsors/Little%20Germany.png",
  },
  {
    size: "small",
    name: "Marquee Event Rentals",
    imageUrl: "/img/sponsors/MarqueeEventRentals.svg",
  },
  {
    size: "small",
    name: "Marquez Bakery",
    imageUrl: "/img/sponsors/marquez%20logo%202024.jpg",
  },
  {
    size: "small",
    name: "Moore Equipment Rental",
    imageUrl: "/img/sponsors/Moore%20Equipment%20Rental.png",
  },
  {
    size: "small",
    name: "North Arlington Little League",
    imageUrl: "/img/sponsors/NALL%20Logo.png",
  },
  {
    size: "small",
    name: "Nolan Catholic High School",
    imageUrl: "/img/sponsors/NCHS Viking.png",
  },
  {
    size: "small",
    name: "Pet Supermarket",
    imageUrl: "/img/sponsors/Pet%20Supermarket.svg",
  },
  {
    size: "small",
    name: "Propane Doctor",
    imageUrl: "/img/sponsors/Propane%20Doctor.jpg",
  },
  {
    size: "small",
    name: "Sigercon",
    imageUrl: "/img/sponsors/Sigercon_logoFINALcol.png",
  },
  {
    size: "small",
    name: "Trailer Park Chill",
    imageUrl: "/img/sponsors/Trailer%20Park%20Chill.png",
  },
  {
    size: "small",
    name: "Trinity River Ramblers",
    imageUrl: "/img/sponsors/Trinity%20River%20Ramblers.png",
  },

  {
    size: "small",
    name: "Watermill Express",
    imageUrl: "/img/sponsors/Watermill-logo-white.png",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative p-4 md:p-0 md:h-[80vh]">
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
            alt="GorettiFest October 4-5, 2025"
            src="/img/gorettifest-logo-white-red-outline-date.svg"
            width={760}
            height={760}
            priority
            loading="eager"
            className="block relative h-[75%] object-contain p-4 md:p-0"
          />
          {/* Link to the map and the schedule when close to the event */}
          {/* <a href="/img/GorettiFest-Map.png">
            <Button>View the GorettiFest Map</Button>
          </a> */}
        </div>
      </section>
      <HeaderNav />
      <PageSection id="visit" grid={2} className="bg-white">
        <div>
          <h2 className={lilita.className}>Plan Your Visit</h2>
          <p className="text-2xl my-4">
            Join us at <strong>GorettiFest</strong>, a fall festival benefiting
            Saint Maria Goretti Catholic School! GorettiFest is packed with
            food, games, music, and fun for the whole family!
          </p>
          <InfoTable>
            <tbody>
              <tr>
                <th>When</th>
                <td>
                  <p className="text-lg mt-0">
                    Saturday, October 4<br />
                    11am to 8pm
                  </p>
                  <p className="text-lg">
                    Sunday, October 5<br />
                    8am to 3pm
                  </p>
                  <p>
                    <a href="/schedule">
                      <Button>See the full schedule</Button>
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <th>Where</th>
                <td>
                  <strong>Saint Maria Goretti Catholic School</strong>
                  <br />
                  <a
                    href="https://maps.app.goo.gl/qKE7DvAxQKcZ7Qyt9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <address>
                      1200 S Davis Dr <br />
                      Arlington, TX 76013
                    </address>
                  </a>
                  <br />

                  <a href="/img/GorettiFest-Map.png">
                    <Button>View the GorettiFest Map</Button>
                  </a>
                </td>
              </tr>
              <tr>
                <th>Cost</th>
                <td>
                  <p className="mt-0">
                    Admission is <strong>FREE</strong>! <br />
                    Buy tickets for food &amp; games with cash or card after you
                    arrive.
                  </p>
                </td>
              </tr>
              <tr>
                <th>Parking</th>
                <td>
                  Free parking is available in our private{" "}
                  <a
                    href="https://maps.app.goo.gl/cqx3drVKb1xtRaeN6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    parking lot on Benge Drive
                  </a>{" "}
                  or in{" "}
                  <a href="https://maps.app.goo.gl/yq1oQXLD37FGUJj76">
                    UTA&nbsp;lot&nbsp;26
                  </a>{" "}
                  on Mitchell Street. Shuttles are available to transport you
                  from the parking lots to GorettiFest.
                </td>
              </tr>
            </tbody>
          </InfoTable>
        </div>
        <div className="hidden md:block">
          <div className="bg-slate-800 p-8 rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.5415387098847!2d-97.12749252363562!3d32.72480818665103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d1a02bc13ef%3A0xc77ecf1dab906f16!2sSt%20Maria%20Goretti%20Catholic%20School!5e0!3m2!1sen!2sus!4v1721175085047!5m2!1sen!2sus"
              width="600"
              height="450"
              className="w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </PageSection>
      <FoodSection />
      <GamesSection />
      <div className="md:hidden">
        <video src="/img/music-reel-no-audio.mp4" loop autoPlay muted></video>
      </div>
      <EntertainmentSection />
      {/* TODO: Confirm sponsors first, then build out this section */}
      {/* <SponsorsSection /> */}
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
