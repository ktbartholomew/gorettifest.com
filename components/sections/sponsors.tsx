import { Button } from "../button";
import { PageSection } from "../page-section";
import Image from "next/image";

type SponsorLogo = {
  size: "small" | "large";
  imageUrl: string;
  linkUrl?: string;
  name: string;
};

const sponsors: SponsorLogo[] = [
  {
    size: "large",
    name: "Sink or Swim Pools",
    imageUrl: "/img/sponsors/large/sinkorswimlogo.webp",
    linkUrl: "https://sinkorswimpool.com/",
  },
  {
    size: "large",
    name: "Rick and Ray's Auto Plaza",
    imageUrl: "/img/sponsors/large/rick-and-rays-logo.webp",
    linkUrl: "https://rickandraysautoplaza.com/",
  },
  {
    size: "large",
    name: "Legacy Stone Family Wealth",
    imageUrl: "/img/sponsors/large/legacy-stone-white.webp",
    linkUrl:
      "https://www.ameripriseadvisors.com/team/legacy-stone-family-wealth/",
  },
  {
    size: "large",
    name: "Duck AC and Heating",
    imageUrl: "/img/sponsors/large/DuckAC.webp",
    linkUrl: "https://www.duckacandheating.com/",
  },
  {
    size: "large",
    name: "Image Communication Technology",
    imageUrl: "/img/sponsors/large/ict-logo.webp",
    linkUrl: "https://www.ictcorp.net/",
  },
  {
    size: "large",
    name: "Wade Funeral Home",
    imageUrl: "/img/sponsors/large/wade-funeral-home-white.webp",
    linkUrl: "https://www.wadefamilyfuneralhome.com/",
  },
  {
    size: "large",
    name: "John Wade Roofing",
    imageUrl: "/img/sponsors/large/john-wade-roofing.webp",
    linkUrl: "https://johnwaderoofing.com/",
  },
  {
    size: "large",
    name: "mma",
    imageUrl: "/img/sponsors/large/mma.webp",
    linkUrl: "https://mmatexas.com/",
  },
  {
    size: "large",
    name: "Mr. Wilson's Garage Doors",
    imageUrl: "/img/sponsors/large/mr-wilsons-garage-doors.webp",
    linkUrl: "https://www.facebook.com/profile.php?id=61570984850348",
  },
  {
    size: "large",
    name: "Curnutt & Hafer, LLP",
    imageUrl: "/img/sponsors/large/c-and-h-attorneys.webp",
    linkUrl: "https://curnutthafer.com/",
  },
  {
    size: "small",
    name: "Abbey Brown and the Sound",
    imageUrl: "/img/sponsors/abbey-brown-and-the-sound.png",
  },
  {
    size: "small",
    name: "Camp Thurman",
    imageUrl: "/img/sponsors/camp-thurman.png",
    linkUrl: "https://campthurman.org/",
  },
  {
    size: "small",
    name: "Drengr Axe Throwing",
    imageUrl: "/img/sponsors/Drengr%20Axe%20Throwing.png",
  },
  {
    size: "small",
    name: "The Dove Firm",
    imageUrl: "/img/sponsors/the-dove-firm-2026.png",
    linkUrl: "https://www.thedovefirm.com/",
  },
  {
    size: "small",
    name: "Fischer's Meat Market",
    imageUrl: "/img/sponsors/Fischers%20Meat%20Market.png",
  },
  {
    size: "small",
    name: "Huckleberry's Arlington",
    imageUrl: "/img/sponsors/huckleberrys-arlington.png",
    linkUrl: "https://huckleberrys.com/locations/3582/",
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
    name: "Propane Doctor",
    imageUrl: "/img/sponsors/Propane%20Doctor.jpg",
  },
  {
    size: "small",
    name: "Symphony Arlington",
    imageUrl: "https://symphonyarlington.org/wp-content/uploads/2023/10/SA-Logo-wh.svg",
    linkUrl: "https://symphonyarlington.org/",
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
];

export function SponsorsSection() {
  return (
    <PageSection id="sponsors" className="bg-slate-800 text-white">
      <div>
        <h3 className="text-center mb-16">
          Thank you to our sponsors
        </h3>
        <div className="flex flex-wrap gap-8 mb-32 justify-center">
          {sponsors
            .filter((s) => s.size === "large")
            .map((s) => (
              <div
                key={s.imageUrl}
                className="relative flex-[100%] grow-0 shrink-0 md:grow-0 md:shrink aspect-[2/1] md:flex-[40%]"
              >
                <a
                  href={s.linkUrl}
                  target="_blank"
                  className="relative block h-full w-full"
                >
                  <Image
                    src={s.imageUrl}
                    alt={s.name}
                    fill={true}
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="mx-auto object-contain"
                  />
                </a>
              </div>
            ))}
        </div>
        <div className="flex flex-wrap gap-8 mb-32 justify-center">
          {sponsors
            .filter((s) => s.size === "small")
            .map((s) => (
              <div
                key={s.imageUrl}
                className="relative flex-[25%] grow-0 shrink-0 md:grow-0 md:shrink h-[80px] md:flex-[18%]"
              >
                {s.linkUrl ? (
                  <a
                    href={s.linkUrl}
                    target="_blank"
                    className="relative block h-full w-full"
                  >
                    <Image
                      src={s.imageUrl}
                      alt={s.name}
                      fill={true}
                      sizes="(min-width: 768px) 18vw, 25vw"
                      className="mx-auto object-contain"
                    />
                  </a>
                ) : (
                  <div className="relative h-full w-full">
                    <Image
                      src={s.imageUrl}
                      alt={s.name}
                      fill={true}
                      sizes="(min-width: 768px) 18vw, 25vw"
                      className="mx-auto object-contain"
                    />
                  </div>
                )}
              </div>
            ))}
        </div>
        <div className="flex flex-wrap justify-center">
          <a href="mailto:sponsor@gorettifest.com?subject=I%20want%20to%20sponsor!">
            <button className="bg-white hover:bg-slate-200 text-slate-800 transition-colors rounded-md px-8 py-2">
              I want to sponsor, too!
            </button>
          </a>
        </div>
      </div>
    </PageSection>
  );
}
