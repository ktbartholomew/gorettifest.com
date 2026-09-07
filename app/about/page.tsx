import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeaderNav } from "@/components/header-nav";
import festivalPhoto from "@/public/img/IMG03058.jpg";
import aerialPhoto from "./gorettifest-aerial.jpg";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About GorettiFest",
  description:
    "An Arlington tradition since 1964, GorettiFest brings families together in support of Saint Maria Goretti Catholic School. Explore the festival's 2025 highlights.",
};

// Figures and original vector icons from “2025 Infographic (02-2).pdf”.
// Keep the year explicit: these are past results, not the current event lineup.
const food = [
  { label: "Egg rolls", count: 1212, icon: "egg-rolls" },
  { label: "Lemonades", count: 1094, icon: "lemonade" },
  { label: "BBQ plates", count: 547, icon: "bbq" },
  { label: "Paletas", count: 519, icon: "paleta" },
  { label: "Corn dogs", count: 456, icon: "corn-dog" },
  { label: "Burgers", count: 434, icon: "burger" },
  { label: "Tacos", count: 364, icon: "taco" },
  { label: "Bratwursts", count: 341, icon: "bratwurst" },
  { label: "Beignets", count: 249, icon: "beignets" },
];

type Stat = { value: string; label: string; icon?: string };

const fun: Stat[] = [
  { value: "30+", label: "stage acts", icon: "music" },
  { value: "5", label: "live bands", icon: "music" },
  { value: "33", label: "vendors in our vendor hall", icon: "vendors" },
  { value: "18", label: "dunk tank participants", icon: "dunk-tank" },
  { value: "250+", label: "dunks", icon: "dunk-tank" },
  { value: "300+", label: "zip line rides", icon: "zip-line" },
  { value: "6", label: "fantasy character appearances", icon: "characters" },
  { value: "2", label: "helicopter landings", icon: "helicopter" },
  { value: "2,400+", label: "confetti eggs", icon: "confetti" },
  { value: "100+", label: "water rockets launched", icon: "rocket" },
  { value: "11", label: "food booths", icon: "burger" },
  { value: "2", label: "dogs adopted", icon: "dogs" },
];

function InfographicIcon({ name }: { name: string }) {
  return (
    <span
      aria-hidden="true"
      className={styles.icon}
      style={{ maskImage: `url(/img/about/${name}.svg)` }}
    />
  );
}

function StatGrid({
  stats,
  checkerboard = false,
}: {
  stats: Stat[];
  checkerboard?: boolean;
}) {
  return (
    <dl
      className={`${styles.statGrid} ${checkerboard ? styles.checkerboard : ""}`}
    >
      {stats.map(({ value, label, icon }) => (
        <div className={styles.stat} key={label}>
          <dt>{label}</dt>
          <dd>
            {icon && (
              <div className="mb-4">
                <InfographicIcon name={icon} />
              </div>
            )}
            <span
              className={`${styles.number} ${value.length > 6 ? styles.longNumber : ""}`}
            >
              {value}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <HeaderNav logo />
      <main>
        <section className="relative isolate overflow-hidden bg-slate-800 text-white" aria-labelledby="about-title">
          <Image
            src={aerialPhoto}
            alt=""
            fill
            sizes="100vw"
            quality={75}
            className="-z-20 object-cover object-center"
            placeholder="blur"
            preload
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-slate-800/80 mix-blend-multiply" />
          <div className={styles.container}>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <h1 id="about-title" className={styles.title}>
                  About GorettiFest
                </h1>
                <p className="mt-6 text-2xl leading-relaxed">
                  GorettiFest is an annual festival to raise money for{" "}
                  <a
                    href="https://smgschool.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    Saint Maria Goretti Catholic School
                  </a>
                  , the premier Catholic School in Arlington.
                </p>
              </div>
              <Image
                src={festivalPhoto}
                alt="GorettiFest visitors exploring a yellow helicopter on the Saint Maria Goretti school field"
                className="h-auto w-full rounded-3xl border-8 border-slate-200"
                sizes="(min-width: 1024px) 480px, (min-width: 768px) 80vw, 100vw"
                placeholder="blur"
                priority
              />
            </div>
            <div className="mt-10 grid gap-x-12 text-lg leading-relaxed md:grid-cols-2">
              <p>
                We&rsquo;ve been hosting this massive fall event for years! Since
                1964, GorettiFest has brought families throughout Arlington
                together for a weekend of fun and fellowship. The event has
                changed some over the years, but many of our traditions have been
                around for decades!
              </p>
              <p>
                Every dollar you spend at GorettiFest goes directly to helping
                Saint Maria Goretti provide a one-of-a-kind Catholic education to
                hundreds of students. We are excited to see you there!
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="how-big-title">
          <div className="bg-slate-800 text-white">
            <div className={styles.container}>
              <h2 id="how-big-title" className="max-w-3xl text-balance">
                How Big is GorettiFest?
              </h2>
              <p className="mb-10 max-w-2xl text-xl leading-relaxed">
                GorettiFest is a massive fall festival, and all of Arlington is
                invited! The families of Saint Maria Goretti Catholic school
                host this giant party to give back to the community and to raise
                money for our school.
              </p>
              <div className="grid gap-8 border-t border-slate-700 pt-10 sm:grid-cols-2">
                <div className="flex items-center gap-6">
                  <InfographicIcon name="attendees" />
                  <p className="m-0">
                    <span className={styles.number}>3,500+</span>
                    <span className="mt-3 block text-lg">attendees</span>
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <InfographicIcon name="tickets" />
                  <p className="m-0">
                    <span className={styles.number}>2,239</span>
                    <span className="mt-3 block text-lg">
                      ticket transactions
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-12 border-t border-slate-700 pt-10">
                <h3 className="mb-8 text-3xl md:text-4xl">
                  The fun is infectious.
                </h3>
                <StatGrid
                  stats={[
                    { value: "430,000+", label: "social media post views" },
                    { value: "12,900+", label: "website page views" },
                    { value: "4,000+", label: "email views" },
                    { value: "480+", label: "email clicks" },
                    {
                      value: "400%",
                      label: "higher than average email click rate",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
              <div>
                <h3 className="text-4xl md:text-5xl text-red-700">
                  A big festival for even bigger appetites.
                </h3>
                <p className="text-lg leading-relaxed">
                  Most of the food at GorettiFest is handmade by our
                  school&rsquo;s families, using unique recipes that have been
                  handed down (and closely guarded!) for years. From handmade
                  egg rolls to award-winning Texas-style brisket, there&rsquo;s
                  something for everyone to enjoy. Nobody leaves hungry!
                </p>
              </div>
              <div>
                <ul aria-label="Food and drinks served in 2025">
                  {food.map(({ label, count, icon }) => (
                    <li className={styles.foodRow} key={label}>
                      <InfographicIcon name={icon} />
                      <span className="font-bold">{label}</span>
                      <span className="text-xl font-bold tabular-nums">
                        {count.toLocaleString("en-US")}
                      </span>
                      <div className={styles.foodBar} aria-hidden="true">
                        <span style={{ width: `${(count / 1212) * 100}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.container}>
            <h3 className="mb-10 text-4xl md:text-5xl">
              We&rsquo;ve got fun around every corner.
            </h3>
            <StatGrid stats={fun} checkerboard />
          </div>

          <div className="bg-slate-200">
            <div className={styles.container}>
              <div className="mb-10 flex items-center gap-6">
                <InfographicIcon name="volunteers" />
                <div>
                  <h3 className="mb-0 text-4xl md:text-5xl">
                    GorettiFest is powered by donors and volunteers.
                  </h3>
                </div>
              </div>
              <div>
                <StatGrid
                  stats={[
                    { value: "300+", label: "volunteers" },
                    { value: "2,500+", label: "volunteer hours" },
                    { value: "700+", label: "volunteer shifts" },
                    { value: "32", label: "private donors" },
                    { value: "11", label: "major donors" },
                    { value: "19", label: "corporate sponsors" },
                  ]}
                />
              </div>
              <div className="my-10 flex items-center gap-5 rounded-xl bg-slate-800 p-6 text-white">
                <InfographicIcon name="zip-tie" />
                <p className="m-0 text-lg">
                  And a few behind-the-scenes essentials:{" "}
                  <strong>3,000+ zip ties</strong>,{" "}
                  <strong>150+ signs &amp; banners</strong>, and{" "}
                  <strong>4 billboards</strong>!
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex items-center gap-6">
                  <InfographicIcon name="blood-donation" />
                  <div>
                    <span className={styles.number}>140%</span>
                    <p className="mb-0">
                      of our blood donation goal achieved
                      <br />
                      <strong>40% new donors</strong>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <InfographicIcon name="dogs" />
                  <div>
                    <span className={styles.number}>2</span>
                    <p className="mb-0">dogs adopted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-red-700 text-white" aria-labelledby="help-title">
          <div className={`${styles.container} text-center`}>
            <h2 id="help-title">Be part of the tradition.</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed">
              Help us make GorettiFest a success! There are tons of ways to
              volunteer, or you can make a tax-deductible donation to help us
              gather the supplies we need to make GorettiFest an unforgettable
              experience for everyone!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/volunteer" className={styles.action}>
                I want to help!
              </Link>
              <Link
                href="/#visit"
                className="inline-block rounded-md bg-white px-8 py-3 font-bold text-slate-800 no-underline transition-colors hover:bg-slate-200"
              >
                Plan your visit
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-800 px-6 py-8 text-center text-sm text-white">
        <Link href="/" className="text-white">
          GorettiFest Home
        </Link>
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Saint Maria Goretti Catholic School
          |{" "}
          <a className="text-white" href="mailto:questions@gorettifest.com">
            Contact Us
          </a>
        </p>
      </footer>
    </div>
  );
}
