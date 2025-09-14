import { Button } from "../button";
import { lilita } from "../font";
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
    name: "Barnes Video Group",
    imageUrl: "/img/sponsors/barnes-video-group-logo.png",
    linkUrl: "https://www.barnesvideogroup.com/",
  },
  {
    size: "large",
    name: "Legacy Stone Family Wealth",
    imageUrl: "/img/sponsors/legacy-stone-white.png",
    linkUrl:
      "https://www.ameripriseadvisors.com/team/legacy-stone-family-wealth/",
  },
  {
    size: "large",
    name: "Sink or Swim Pools",
    imageUrl: "/img/sponsors/sinkorswimlogo.png",
    linkUrl: "https://sinkorswimpool.com/",
  },
  {
    size: "small",
    name: "Abbey Brown and the Sound",
    imageUrl: "/img/sponsors/abbey-brown-and-the-sound.png",
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
        <h3 className={`${lilita.className} text-center mb-16`}>
          Thank you to our sponsors
        </h3>
        <div className="flex flex-wrap gap-8 mb-32 justify-center">
          {sponsors
            .filter((s) => s.size === "large")
            .map((s) => (
              <div
                key={s.imageUrl}
                className="relative flex-[100%] grow-0 shrink-0 md:grow-0 md:shrink h-[180px] md:flex-[40%]"
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
                  <a href={s.linkUrl} target="_blank">
                    <Image
                      src={s.imageUrl}
                      alt={s.name}
                      fill={true}
                      className="mx-auto object-contain"
                    />
                  </a>
                ) : (
                  <div>
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
