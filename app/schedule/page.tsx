import { HeaderNav } from "@/components/header-nav";
import { Metadata } from "next";
import Image from "next/image";
import { Lilita_One } from "next/font/google";
const lilita = Lilita_One({ weight: ["400"], subsets: ["latin"] });
import headerImage from "@/public/img/IMG_1433.webp";
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
              <h3 className="text-center my-8">Saturday, October 5</h3>
              <p className="text-sm">
                <strong>All Day:</strong> food booths, vendor hall, bingo,
                carnival games, bounce houses, rummage sale, used book sale
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
                  <div className="flex-grow">
                    <div className="grid grid-cols-2 gap-1">
                      <div>
                        <div className={`${classes.calendarItem} h-[2rem]`}>
                          <div>
                            <strong>Opening Ceremony</strong>
                          </div>
                        </div>
                        <div className={`${classes.calendarItem} h-[6rem]`}>
                          <div>
                            <strong>
                              SMG Cheer
                              <br />
                              Ballet Folklorico
                            </strong>
                          </div>
                        </div>
                        <div className={`${classes.calendarItem} h-[4rem]`}>
                          <div>
                            <strong>Helicopter Appearance</strong>
                          </div>
                        </div>
                        <div className={`${classes.calendarItem} h-[4rem]`}>
                          <div>
                            <strong>DANCE: Leap of Faith</strong>
                          </div>
                        </div>
                        <div className={`${classes.calendarItem} h-[4rem]`}>
                          <div>
                            <strong>KARATE: Sentinel Martial Arts</strong>
                          </div>
                        </div>
                        <div className={`${classes.calendarItem} h-[4rem]`}>
                          <div>
                            <strong>DANCE: UPAC</strong>
                          </div>
                        </div>
                        <div
                          className={`${classes.calendarItem} mt-[4rem] h-[4rem]`}
                        >
                          <div>
                            <strong>DANCE: Laura&apos;s Dance Dynamics</strong>
                          </div>
                        </div>

                        <div className={`${classes.calendarItem}   h-[8rem]`}>
                          <div>
                            <strong>School Talent Show</strong>
                          </div>
                        </div>
                        <div className={`${classes.calendarItem} h-[4rem]`}>
                          <div>
                            <strong>BAND: Box Brains</strong>
                          </div>
                        </div>

                        <div
                          className={`${classes.calendarItem}  mt-[12rem] h-[16rem]`}
                        >
                          <div>
                            <strong>BAND: Trinity River Ramblers</strong>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          className={`${classes.calendarItem} ${classes.alternate} h-[16rem]`}
                        >
                          <div>
                            <strong>
                              Touch-a-truck (Police + Fire + Ambulance)
                            </strong>
                          </div>
                        </div>
                        <div
                          className={`${classes.calendarItem} ${classes.alternate} h-[32rem]`}
                        >
                          <div>
                            <strong>Bingo</strong>
                          </div>
                        </div>
                        <div
                          className={`${classes.calendarItem} ${classes.alternate} h-[24rem]`}
                        >
                          <div>
                            <strong>Homecoming Happy Hour</strong>
                            <br />
                            Group photo at 5:30pm
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-prose mx-auto">
              <h3 className="text-center my-8">Sunday, October 6</h3>
              <p className="text-sm">
                <strong>All Day:</strong> food booths, vendor hall, bingo,
                carnival games, bounce houses, rummage sale, used book sale
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
                  <div className="flex-grow">
                    <div className="grid grid-cols-1 gap-1">
                      <div>
                        <div className={`${classes.calendarItem} h-[8rem]`}>
                          <div>
                            <strong>SoulCore (Rosary + exercise)</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div>
                        <div
                          className={`${classes.calendarItem} mt-[8rem] h-[6rem]`}
                        >
                          <div>
                            <strong>Checkers the Magician</strong>
                          </div>
                        </div>
                        <div className={`${classes.calendarItem} h-[2rem]`}>
                          <div>
                            <strong>Helicopter</strong>
                          </div>
                        </div>
                        <div className={`${classes.calendarItem} h-[4rem]`}>
                          <div>
                            <strong>BAND: Box Brains</strong>
                          </div>
                        </div>
                        <div
                          className={`${classes.calendarItem} mt-[4rem] h-[4rem]`}
                        >
                          <div>
                            <strong>KARATE: USKDA</strong>
                          </div>
                        </div>
                        <div
                          className={`${classes.calendarItem} mt-[4rem] h-[4rem]`}
                        >
                          <div>
                            <strong>DANCE: Miss Persis</strong>
                          </div>
                        </div>

                        <div
                          className={`${classes.calendarItem} mt-[4rem] h-[8rem]`}
                        >
                          <div>
                            <strong>BAND: BEHAN</strong>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          className={`${classes.calendarItem} ${classes.alternate} mt-[12rem] h-[32rem]`}
                        >
                          <div>
                            <strong>Bingo</strong>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          className={`${classes.calendarItem} ${classes.alternate} mt-[24rem] h-[16rem]`}
                        >
                          <div>
                            <strong>Petting Zoo</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
