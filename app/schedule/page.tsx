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

export default function VolunteerPage() {
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
              <div className="relative">
                <div className="absolute -z-10 w-full">
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
                <div className="flex gap-4">
                  <div className="text-sm">
                    <div className="h-32 ">11:00am</div>
                    <div className="h-32 ">12:00pm</div>
                    <div className="h-32 ">1:00pm</div>
                    <div className="h-32 ">2:00pm</div>
                    <div className="h-32 ">3:00pm</div>
                    <div className="h-32 ">4:00pm</div>
                    <div className="h-32 ">5:00pm</div>
                    <div className="h-32 ">6:00pm</div>
                    <div className="h-32 ">7:00pm</div>
                    <div className="h-32 ">8:00pm</div>
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
                              Nolan Cheerleaders &amp; Ballet Folklorico
                            </strong>
                          </div>
                        </div>
                        <div className={`${classes.calendarItem} h-[8rem]`}>
                          <div>
                            <strong>Helicopter Appearance</strong>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className={`${classes.calendarItem} h-[16rem]`}>
                          <div>
                            <strong>Touch-a-truck</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div>
                        <div
                          className={`${classes.calendarItem} mt-[8rem] h-[16rem]`}
                        >
                          <div>
                            <strong>School Talent Show</strong>
                          </div>
                        </div>
                        <div className={`${classes.calendarItem} h-[4rem]`}>
                          <div>
                            <strong>Live Music: Box Brains</strong>
                          </div>
                        </div>
                        <div className={`${classes.calendarItem} h-[4rem]`}>
                          <div>
                            <strong>Live Music: Bubble Gum Riot</strong>
                          </div>
                        </div>
                        <div
                          className={`${classes.calendarItem} mt-[4rem] h-[2rem]`}
                        >
                          <div>
                            <strong>Alumni Group Photo</strong>
                          </div>
                        </div>
                        <div
                          className={`${classes.calendarItem} mt-[2rem] h-[16rem]`}
                        >
                          <div>
                            <strong>Live Music: Trinity River Ramblers</strong>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className={`${classes.calendarItem} h-[32rem]`}>
                          <div>
                            <strong>Bingo</strong>
                          </div>
                        </div>
                        <div className={`${classes.calendarItem} h-[24rem]`}>
                          <div>
                            <strong>Homecoming Happy Hour</strong>
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
              <div className="relative">
                <div className="absolute -z-10 w-full">
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
                <div className="flex gap-4">
                  <div className="text-sm">
                    <div className="h-32 ">8:00am</div>
                    <div className="h-32 ">9:00am</div>
                    <div className="h-32 ">10:00am</div>
                    <div className="h-32 ">11:00am</div>
                    <div className="h-32 ">12:00pm</div>
                    <div className="h-32 ">1:00pm</div>
                    <div className="h-32 ">2:00pm</div>
                    <div className="h-32 ">3:00pm</div>
                  </div>
                  <div className="flex-grow">
                    <div className="grid grid-cols-1 gap-1">
                      <div>
                        <div className={`${classes.calendarItem} h-[8rem]`}>
                          <div>
                            <strong>Soul Core</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div>
                        <div
                          className={`${classes.calendarItem} mt-[8rem] h-[6rem]`}
                        >
                          <div>
                            <strong>Checkers the Magician</strong>
                          </div>
                        </div>
                        <div className={`${classes.calendarItem} h-[8rem]`}>
                          <div>
                            <strong>Helicopter Appearance</strong>
                          </div>
                        </div>

                        <div
                          className={`${classes.calendarItem} mt-[18rem] h-[8rem]`}
                        >
                          <div>
                            <strong>Live Music: BEHAN</strong>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div
                          className={`${classes.calendarItem} mt-[12rem] h-[32rem]`}
                        >
                          <div>
                            <strong>Bingo</strong>
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