import { HeaderNav } from "@/components/header-nav";
import { Metadata } from "next";
import Image from "next/image";
import { lilita } from "@/components/font";
import headerImage from "@/public/img/IMG_2212.webp";
import classes from "./calendar.module.css";

export const metadata: Metadata = {
  title: "GorettiFest Schedule",
  description:
    "GorettiFest is packed with events including live bands, a talent show, magicians, games, and dancing!",
};

export default function SchedulePage() {
  return (
    <>
      <HeaderNav logo />
      <div className="relative max-h-[90vh] md:h-[90vh]">
        <div className="hidden md:block absolute h-full w-full overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={headerImage.src}
            alt="GorettiFest volunteer preparing food"
            priority
            width={1800}
            height={1800}
            loading="eager"
            placeholder="blur"
            blurDataURL={headerImage.blurDataURL}
          />
        </div>
        <div className="absolute top-0 left-0 h-full w-full mix-blend-multiply bg-slate-800 md:bg-slate-900/70"></div>
        <div className="md:py-16">
          <div className="bg-white relative md:max-w-[67vw] lg:max-w-[50vw] mx-auto md:rounded-3xl p-8 md:drop-shadow-xl">
            <div className="max-w-prose mx-auto">
              <h2 className={lilita.className + " text-balance"}>
                GorettiFest Schedule
              </h2>
              <h3 className="text-center my-8">Saturday, October 4</h3>
              <p className="text-sm">
                <strong>All Day:</strong> food booths, vendor hall, bingo,
                carnival games, bounce houses, rummage sale
              </p>
              <div className="relative z-0">
                <div className={classes.lineContainer}>
                  <div className={classes.hourLine}></div>
                  <div className={classes.halfHourLine}></div>
                  <div className={classes.hourLine}></div>
                  <div className={classes.halfHourLine}></div>
                  <div className={classes.hourLine}></div>
                  <div className={classes.halfHourLine}></div>
                  <div className={classes.hourLine}></div>
                  <div className={classes.halfHourLine}></div>
                  <div className={classes.hourLine}></div>
                  <div className={classes.halfHourLine}></div>
                  <div className={classes.hourLine}></div>
                  <div className={classes.halfHourLine}></div>
                  <div className={classes.hourLine}></div>
                  <div className={classes.halfHourLine}></div>
                  <div className={classes.hourLine}></div>
                  <div className={classes.halfHourLine}></div>
                  <div className={classes.hourLine}></div>
                  <div className={classes.halfHourLine}></div>
                  <div className={classes.hourLine}></div>
                </div>
                <div className="flex gap-2 md:gap-4 z-10">
                  <div className="text-xs">
                    <div className="h-32 ">
                      11<span className="hidden md:inline">:00am</span>
                    </div>
                    <div className="h-32 ">
                      12<span className="hidden md:inline">:00pm</span>
                    </div>
                    <div className="h-32 ">
                      1<span className="hidden md:inline">:00pm</span>
                    </div>
                    <div className="h-32 ">
                      2<span className="hidden md:inline">:00pm</span>
                    </div>
                    <div className="h-32 ">
                      3<span className="hidden md:inline">:00pm</span>
                    </div>
                    <div className="h-32 ">
                      4<span className="hidden md:inline">:00pm</span>
                    </div>
                    <div className="h-32 ">
                      5<span className="hidden md:inline">:00pm</span>
                    </div>
                    <div className="h-32 ">
                      6<span className="hidden md:inline">:00pm</span>
                    </div>
                    <div className="h-32 ">
                      7<span className="hidden md:inline">:00pm</span>
                    </div>
                    <div className="h-32 ">
                      8<span className="hidden md:inline">:00pm</span>
                    </div>
                  </div>
                  <div className="flex-grow"></div>
                </div>
              </div>
            </div>

            <div className="max-w-prose mx-auto">
              <h3 className="text-center my-8">Sunday, October 5</h3>
              <p className="text-sm">
                <strong>All Day:</strong> food booths, vendor hall, bingo,
                carnival games, bounce houses, rummage sale
              </p>
              <div className="relative z-0">
                <div className={classes.lineContainer}>
                  <div className={classes.hourLine}></div>
                  <div className={classes.halfHourLine}></div>
                  <div className={classes.hourLine}></div>
                  <div className={classes.halfHourLine}></div>
                  <div className={classes.hourLine}></div>
                  <div className={classes.halfHourLine}></div>
                  <div className={classes.hourLine}></div>
                  <div className={classes.halfHourLine}></div>
                  <div className={classes.hourLine}></div>
                  <div className={classes.halfHourLine}></div>
                  <div className={classes.hourLine}></div>
                  <div className={classes.halfHourLine}></div>
                  <div className={classes.hourLine}></div>
                  <div className={classes.halfHourLine}></div>
                  <div className={classes.hourLine}></div>
                </div>
                <div className="flex gap-2 md:gap-4">
                  <div className="text-xs">
                    <div className="h-32 ">
                      8<span className="hidden md:inline">:00am</span>
                    </div>
                    <div className="h-32 ">
                      9<span className="hidden md:inline">:00am</span>
                    </div>
                    <div className="h-32 ">
                      10<span className="hidden md:inline">:00am</span>
                    </div>
                    <div className="h-32 ">
                      11<span className="hidden md:inline">:00am</span>
                    </div>
                    <div className="h-32 ">
                      12<span className="hidden md:inline">:00pm</span>
                    </div>
                    <div className="h-32 ">
                      1<span className="hidden md:inline">:00pm</span>
                    </div>
                    <div className="h-32 ">
                      2<span className="hidden md:inline">:00pm</span>
                    </div>
                    <div className="h-32 ">
                      3<span className="hidden md:inline">:00pm</span>
                    </div>
                  </div>
                  <div className="flex-grow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
