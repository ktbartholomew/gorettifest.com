import Image from "next/image";
import styles from "./page.module.css";
import { Lilita_One } from "next/font/google";
const lilita = Lilita_One({ weight: ["400"], subsets: ["latin"] });

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
      <section className="relative h-[80vh]">
        <div className="absolute h-full w-full overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src="/img/IMG_1440.webp"
            alt="two students selling paletas from a rolling cart at GorettiFest festival"
            priority
            width={1800}
            height={1800}
            loading="eager"
          />
        </div>
        <div className="absolute h-full w-full mix-blend-multiply bg-amber-900/70"></div>
        <div className="flex h-full w-full absolute text-center items-center justify-center">
          <div>
            <Image
              src="/img/goretti-fest-logo.svg"
              alt="Goretti Fest Logo"
              width={500}
              height={500}
            />
            <div className="mt-8 inline-block flex-col bg-white text-2xl rounded-lg">
              <div className="bg-red-700 border-b-2 border-b-red-900 border-t border-t-red-400 text-white text-center py-4 px-8 rounded-t-lg">
                October
              </div>
              <div className="text-6xl py-4 px-8 tracking-tighter">5 - 6</div>
              <div className="py-2 px-8">2024</div>
            </div>
          </div>
        </div>
      </section>
      <nav className={styles.headerNav}>
        <ul className="md:flex justify-center">
          <li>
            <a className={styles.headerNav__link} href="#visit">
              Plan Your Visit
            </a>
          </li>
          <li>
            <a className={styles.headerNav__link} href="#food-and-games">
              Food &amp; Games
            </a>
          </li>
          <li>
            <a className={styles.headerNav__link} href="#entertainment">
              Entertainment
            </a>
          </li>
          <li>
            <a className={styles.headerNav__link} href="#vendors">
              Vendors
            </a>
          </li>
          <li>
            <a className={styles.headerNav__link} href="#about-us">
              About Us
            </a>
          </li>
        </ul>
      </nav>
      <section id="visit" className={styles.pageSection}>
        <div className={styles.pageSection__grid}>
          <div>
            <h2 className={lilita.className}>Plan Your Visit</h2>
            <p className="text-2xl my-4">
              Join us for a weekend of fun and festivity at{" "}
              <strong>GorettiFest</strong>, a fall festival benefiting Saint
              Maria Goretti Catholic School!
            </p>
            <table className={styles.infoTable}>
              <tbody>
                <tr>
                  <th>When</th>
                  <td>
                    <p className="mt-0">
                      Saturday, October 5<br />
                      11am to 8pm
                    </p>
                    <p>
                      Sunday, October 6 <br />
                      8am to 3pm
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
                    Admission is <strong>FREE</strong>! <br />
                    Buy tickets for food &amp; games with cash or card after you
                    arrive.
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
                    . It&apos;s just a &frac14; mile walk from the parking lot
                    to the school.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-teal-800 p-8 rounded-2xl">
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
      </section>
      <section id="food-and-games" className="bg-amber-100">
        <div className={styles.pageSection}>
          <div className={styles.pageSection__grid}>
            <div>
              <h2 className={lilita.className}>Food &amp; Games</h2>
              <p className="text-2xl">
                For generations, homemade cuisine from around the world has
                defined GorettiFest. Enjoy a break between snacks and games in
                our biergarten!
              </p>
              <p className="text-2xl"></p>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <th>American Food</th>
                    <td>Hamburgers, Nachos, French fries</td>
                  </tr>
                  <tr>
                    <th>German Food</th>
                    <td>
                      Bratwurst, Sausage on a stick, Sauerkraut, Fried potatoes
                    </td>
                  </tr>
                  <tr>
                    <th>Mexican Food</th>
                    <td>Fajitas, Nachos, Breakfast burritos (on Sunday)</td>
                  </tr>
                  <tr>
                    <th>Caribbean Food</th>
                    <td>
                      Beignets, Jerk chicken, Jollof rice (spiced fried rice)
                    </td>
                  </tr>
                  <tr>
                    <th>Asian Food</th>
                    <td>Chow mein, Egg rolls, Fried rice</td>
                  </tr>
                  <tr>
                    <th>Sweets &amp; Drinks</th>
                    <td>
                      Paletas (popsicles), Craft on draft biergarten, Soft
                      drinks, Water
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <Image
                className={[
                  styles.photoWithBorder,
                  styles.photoWithBorder__right,
                ].join(" ")}
                src="/img/IMG_1246.webp"
                alt="a young boy enjoying frozen treats at GorettiFest festival"
                width={900}
                height={900}
              />
            </div>

            <div>
              <Image
                className={[
                  styles.photoWithBorder,
                  styles.photoWithBorder__left,
                ].join(" ")}
                src="/img/IMG_1358.webp"
                alt="festival attendees playing Cornhole in in the Cornhole tournament at GorettiFest festival"
                width={900}
                height={900}
              />
            </div>
            <div>
              <p className="text-2xl">
                Test your skills at our annual Cornhole tournament, press your
                luck at our carnival games or bingo hall, or set the little ones
                loose in our (supervised) bounce houses!
              </p>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <th>Cornhole tournament</th>
                    <td>
                      <a href="">Register in advance</a> to enter. Cash prize
                      for the winning team!
                    </td>
                  </tr>
                  <tr>
                    <th>Raffle</th>
                    <td>Buy tickets at the festival to win a cash prize!</td>
                  </tr>
                  <tr>
                    <th>Bingo</th>
                    <td>
                      Real bingo with a professional caller and cash prizes
                    </td>
                  </tr>
                  <tr>
                    <th>Jail</th>
                    <td>
                      Buy a warrant to put your friends in jail, or pay a bounty
                      to incarcerate the Principal or Priest! (if you can catch
                      them)
                    </td>
                  </tr>
                  <tr>
                    <th>Carnival Games</th>
                    <td>Nerf shooting gallery, Marble races</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section id="entertainment" className={styles.pageSection}>
        <div className={styles.pageSection__grid}>
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
              Our main stage has exhibitions from our school band, &ldquo;Ballet
              Folklorico&rdquo; dance troupe, martial artists, and other live
              music!
            </p>
            <table className={styles.infoTable}>
              <tbody>
                <tr>
                  <th>Main Stage</th>
                  <td>
                    Live music, Ballet Folklorico, martial arts demonstration,
                    school talent show
                  </td>
                </tr>
                <tr>
                  <th>Vendor Hall</th>
                  <td>
                    Local vendors offer their goods and services in our
                    air-conditioned vendor hall.
                  </td>
                </tr>
                <tr>
                  <th>Used Book and Rummage Sale</th>
                  <td>
                    Find hidden gems in our expansive collection of used books!
                  </td>
                </tr>
                <tr>
                  <th>For Kids</th>
                  <td>
                    Petting zoo, &ldquo;Touch-a-Truck&rdquo;, Confetti eggs
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventStructuredData),
        }}
      ></script>
    </main>
  );
}
