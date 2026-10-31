import { sponsors } from "@/content/sponsors";
import { PageSection } from "../page-section";
import Image from "next/image";

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
