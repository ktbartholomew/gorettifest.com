import Image from "next/image";
import styles from "./page.module.css";
import { Lilita_One } from "next/font/google";
const lilita = Lilita_One({ weight: ["400"], subsets: ["latin"] });
import headerImage from "@/public/img/IMG_1440.webp";
import { ImageScrollLoader } from "@/components/image-scroll-loader";
import { HeaderNav } from "@/components/header-nav";
import { PageSection } from "@/components/page-section";
import { InfoTable } from "@/components/info-table";
import { Button } from "@/components/button";
import Link from "next/link";

const DONATION_LINK = "https://square.link/u/Ugurk7sW";

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
    imageUrl: "/img/sponsors/the-keever-group-logo.png",
    linkUrl: "https://www.ameripriseadvisors.com/team/the-keever-group/",
  },
  {
    size: "small",
    name: "Knights of Columbus",
    imageUrl: "/img/sponsors/KOC.png",
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
    name: "Moore Equipment Rental",
    imageUrl: "/img/sponsors/Moore%20Equipment%20Rental.png",
  },
  {
    size: "small",
    name: "North Arlington Little League",
    imageUrl: "/img/sponsors/NALL%20Logo.png",
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
        <div className="absolute top-0 left-0 h-full w-full mix-blend-multiply bg-slate-800 md:bg-slate-900/70"></div>
        <div className="z-10 relative flex h-full w-full px-4 md:px-0 md:absolute text-center items-center justify-center">
          <Image
            alt="GorettiFest October 5-6, 2024"
            src="/img/gorettifest-logo-white-red-outline-date.svg"
            width={760}
            height={760}
            priority
            loading="eager"
            className="block relative h-full object-contain"
          />
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
                    Saturday, October 5<br />
                    11am to 8pm
                  </p>
                  <p className="text-lg">
                    Sunday, October 6 <br />
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
                  <p>
                    <a
                      href="https://square.link/u/FA3LEB9p"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button>Pre-purchase tickets</Button>
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <th>Parking</th>
                <td>
                  Free parking is available in our{" "}
                  <a
                    href="https://maps.app.goo.gl/cqx3drVKb1xtRaeN6"
                    target="_blank"
                    rel="noreferrer"
                  >
                    parking lot on Benge Drive
                  </a>
                  . It&apos;s just a &frac14; mile walk from the parking lot to
                  the school.
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
      <PageSection id="food-and-drinks" className="bg-slate-200" grid={2}>
        <div>
          <h2 className={lilita.className}>Food &amp; Drinks</h2>
          <p className="text-2xl">
            For generations, our school&apos;s parents have shared delicious
            cuisine from around the world representing their heritage. Enjoy a
            beverage in our biergarten to wash down all these tasty treats!
          </p>
          <p className="text-lg">
            We have something for every palate, from legendary Texas BBQ to West
            African street food favorites to sweet treats of every shape and
            size!
          </p>

          <div className="mt-4">
            <a href="/menu">
              <Button>See the full menu</Button>
            </a>
          </div>
        </div>
        <div>
          <ImageScrollLoader offScreenDirection="right" midPointOffset={0.4}>
            <Image
              className={[
                styles.photoWithBorder,
                styles.photoWithBorder__left,
              ].join(" ")}
              src="/img/IMG_1360.webp"
              alt="a young boy enjoying frozen treats at GorettiFest festival"
              width={900}
              height={900}
              loading="eager"
            />
            <Image
              className={[
                styles.photoWithBorder,
                styles.photoWithBorder__right,
              ].join(" ")}
              src="/img/IMG_1396.webp"
              alt="A parent serving food at GorretiFest"
              width={900}
              height={900}
              loading="lazy"
            />
          </ImageScrollLoader>
        </div>
      </PageSection>
      <PageSection id="games" grid={2} className="bg-slate-800 text-white">
        <div>
          <ImageScrollLoader offScreenDirection="left" midPointOffset={0.4}>
            <Image
              className={[
                styles.photoWithBorder,
                styles.photoWithBorder__left,
              ].join(" ")}
              src="/img/IMG_1358.webp"
              alt="festival attendees playing Cornhole in in the Cornhole tournament at GorettiFest festival"
              width={900}
              height={900}
              loading="lazy"
            />
            <Image
              className={[styles.photoWithBorder].join(" ")}
              src="/img/IMG_1189.webp"
              alt="a young boy playing in the Nerf shooting gallery at GorettiFest festival"
              width={900}
              height={900}
              loading="eager"
            />
          </ImageScrollLoader>
        </div>
        <div>
          <h2 className={lilita.className}>Games</h2>
          <p className="text-2xl">
            Test your skills at our annual Cornhole Tournament! <br />
            Show your stuff at the games along the midway! <br />
            Win some cash in our Bingo Hall! <br />
            Set the little ones loose in our (supervised) bounce houses!
          </p>
          <InfoTable>
            <tbody>
              <tr>
                <th>Cornhole tournament</th>
                <td>
                  <p className="mt-0">
                    $200 Cash prize for the winning team! Two-person teams only.
                  </p>
                  <div>
                    <a href="/cornhole/register">
                      <button className="bg-blue-600 hover:bg-blue-500 transition-colors text-white rounded-md px-8 py-2">
                        Register Now
                      </button>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <th>Bingo</th>
                <td>Pay-per-card bingo with a real caller and cash prizes!</td>
              </tr>
              <tr>
                <th>Jail</th>
                <td>
                  Buy a warrant to put your friends in jail, or pay a bounty to
                  incarcerate the Principal or Priest! (if you can catch them)
                </td>
              </tr>
              <tr>
                <th>Carnival Games</th>
                <td>
                  Coin toss, Nerf shooting gallery, Marble races, Fastest pitch,
                  and more!
                </td>
              </tr>
            </tbody>
          </InfoTable>
        </div>
      </PageSection>
      <PageSection id="entertainment" grid={2} className="bg-white">
        <div>
          <Image
            className={[
              styles.photoWithBorder,
              styles.photoWithBorder__right,
            ].join(" ")}
            src="/img/IMG_1433.webp"
            alt="children playing with confetti-filled eggs at GorettiFest festival"
            width={900}
            height={900}
          />
        </div>
        <div>
          <h2 className={lilita.className}>Entertainment</h2>
          <p className="text-2xl">
            Our school is proud to be a part of the City of Arlington and we are
            happy to showcase the incredible talents of both of our communities!
            The stage will be busy all weekend long, so don&apos;t miss a thing!
          </p>
          <InfoTable>
            <tbody>
              <tr>
                <th>Main Stage</th>
                <td>
                  Live band, martial arts demonstrations, magic show, dance
                  troupes, ballet folklorico, our school talent show, and so
                  much more!
                </td>
              </tr>
              <tr>
                <th>Vendor Hall</th>
                <td>
                  <p className="mt-0">
                    Local vendors offer their goods and services in our
                    air-conditioned vendor hall.
                  </p>
                  <p>
                    <a
                      href="https://forms.gle/GH9kLzA345z1qi87A"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button>Register to be a vendor</Button>
                    </a>
                  </p>
                </td>
              </tr>
              <tr>
                <th>Rummage Sale</th>
                <td>
                  Find your next treasure in our collection of items from the
                  community.
                </td>
              </tr>
              <tr>
                <th>Used Book Sale</th>
                <td>
                  Pick out your next read from a huge selection of used books.
                </td>
              </tr>
              <tr>
                <th>Touch-a-Truck</th>
                <td>
                  See the coolest vehicles up close and in person! Entries
                  include police car, ambulance, fire truck, and more!
                </td>
              </tr>
              <tr>
                <th>For Kids</th>
                <td>Petting Zoo, confetti eggs, face paint, crazy makeover</td>
              </tr>
            </tbody>
          </InfoTable>
        </div>
      </PageSection>
      <PageSection id="sponsors" className="bg-slate-800 text-white">
        <div>
          <h3 className={`${lilita.className} text-center mb-16`}>
            Thank you to our sponsors
          </h3>
          <div className="flex flex-wrap gap-8 justify-center">
            {sponsors
              .filter((s) => s.size === "large")
              .map((s) => (
                <div
                  key={s.imageUrl}
                  className="relative flex-[100%] shrink-0 md:shrink h-[180px] md:flex-[30%]"
                >
                  <a href={s.linkUrl} target="_blank">
                    <Image
                      src={s.imageUrl}
                      alt={s.name}
                      fill={true}
                      className="mx-auto object-contain"
                    />
                  </a>
                </div>
              ))}

            {sponsors
              .filter((s) => s.size === "small")
              .map((s) => (
                <div
                  key={s.imageUrl}
                  className="relative flex-[25%] shrink-0 md:shrink h-[90px] md:flex-[18%]"
                >
                  {s.linkUrl ? (
                    <a href={s.linkUrl} target="_blank" className="bg-white">
                      <Image
                        src={s.imageUrl}
                        alt={s.name}
                        fill={true}
                        className="mx-auto object-contain"
                      />
                    </a>
                  ) : (
                    <div className="bg-white">
                      <Image
                        src={s.imageUrl}
                        alt={s.name}
                        fill={true}
                        className="mx-auto object-contain"
                      />
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </PageSection>
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
