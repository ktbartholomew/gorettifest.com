"use client";

import classes from "./calendar.module.css";
import Image from "next/image";
import headerImage from "@/public/img/IMG_2212.webp";

import { useSyncExternalStore } from "react";
import { Button } from "@/components/button";
import Link from "next/link";

enum ScheduleItemCategory {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  OTHER = "other",
}

type ScheduleItem = {
  startTime: Date;
  endTime: Date;
  title: string;
  description?: string;
  location?: string;
  category: ScheduleItemCategory;
  allDay?: boolean;
};

const allDayActivities: Pick<ScheduleItem, "title" | "location" | "description">[] = [
  {
    title: "Vendor Show",
    location: "Holy Family Life Center",
  },
  {
    title: "Cake Spin",
    location: "Cafetorium",
    description:
      "Spin the wheel, win baked goods!",
  },
  {
    title: "Dunk Tank",
    location: "Back Field",
  },
  {
    title: "Face Painting",
    location: "Holy Family Life Center",
  },
  {
    title: "Hospitality Tent",
    location: "Near the Main Stage",
  },
  {
    title: "Rummage Sale",
    location: "Cafetorium",
    description:
      "Find your next hidden gem in this expansive rummage sale curated by the SMG Women’s Guild.",
  },
  {
    title: "Ministry Tables",
    location: "Cafetorium",
  },
  {
    title: "Photo Booth",
    location: "Holy Family Life Center",
  },
];

const schedule: ScheduleItem[] = [
  {
    startTime: new Date("2026-10-03T10:00:00-05:00"),
    endTime: new Date("2026-10-03T10:15:00-05:00"),
    title: "Opening Ceremony",
    description:
      "Kick off GorettiFest with the national anthem and opening remarks from our organizers.",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2026-10-03T10:15:00-05:00"),
    endTime: new Date("2026-10-03T11:00:00-05:00"),
    title: "SMG & Nolan Ballet Folklorico",
    description:
      "Enjoy traditional Mexican dances from our very talented students!",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2026-10-03T11:30:00-05:00"),
    endTime: new Date("2026-10-03T13:30:00-05:00"),
    title: "Trinity River Ramblers",
    description:
      "Catch an eclectic mix of American country, Blues, and Rock'n Roll!",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2026-10-03T14:00:00-05:00"),
    endTime: new Date("2026-10-03T14:30:00-05:00"),
    title: "Miss Persis",
    description:
      "A cherished Arlington institution! Enjoy watching these graceful dancers share their talents on stage.",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2026-10-03T14:30:00-05:00"),
    endTime: new Date("2026-10-03T15:30:00-05:00"),
    title: "Mike Hines",
    description:
      "Clap, dance, or sing along to all your favorite classic roots-rock hits.",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2026-10-03T15:30:00-05:00"),
    endTime: new Date("2026-10-03T16:15:00-05:00"),
    title: "Historical Fencing Demonstration",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2026-10-03T16:30:00-05:00"),
    endTime: new Date("2026-10-03T17:30:00-05:00"),
    title: "Rage Against the Minivan / Maya Marie / Ceramic Bunnies",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2026-10-03T18:00:00-05:00"),
    endTime: new Date("2026-10-03T20:00:00-05:00"),
    title: "Abbey Brown & The Sound",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2026-10-03T10:00:00-05:00"),
    endTime: new Date("2026-10-03T13:00:00-05:00"),
    title: "Touch-a-Truck",
    description:
      "Get up close and personal with police, fire, and ambulance vehicles.",
    category: ScheduleItemCategory.SECONDARY,
  },
  {
    startTime: new Date("2026-10-03T13:00:00-05:00"),
    endTime: new Date("2026-10-03T17:00:00-05:00"),
    title: "Bingo",
    location: "Saint Maria Center",
    category: ScheduleItemCategory.SECONDARY,
  },
  {
    startTime: new Date("2026-10-03T14:00:00-05:00"),
    endTime: new Date("2026-10-03T18:00:00-05:00"),
    title: "Mechanical Bull",
    location: "Back Field",
    category: ScheduleItemCategory.SECONDARY,
  },
  {
    startTime: new Date("2026-10-03T10:00:00-05:00"),
    endTime: new Date("2026-10-03T18:00:00-05:00"),
    title: "Petting Zoo",
    location: "Back Field",
    category: ScheduleItemCategory.TERTIARY,
  },
  {
    startTime: new Date("2026-10-04T10:00:00-05:00"),
    endTime: new Date("2026-10-04T10:30:00-05:00"),
    title: "Checkers the Magician",
    description:
      "Be amazed and entertained by Checkers, every kid's favorite magician (and every adult's favorite comedian).",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2026-10-04T11:00:00-05:00"),
    endTime: new Date("2026-10-04T12:00:00-05:00"),
    title: "Symphony Arlington String Quartet",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2026-10-04T12:15:00-05:00"),
    endTime: new Date("2026-10-04T13:30:00-05:00"),
    title: "Bradley Banning",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2026-10-04T13:30:00-05:00"),
    endTime: new Date("2026-10-04T15:00:00-05:00"),
    title: "SMG Talent Show",
    description:
      "Catch our talented students showing off their many unique talents!",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2026-10-04T10:00:00-05:00"),
    endTime: new Date("2026-10-04T14:00:00-05:00"),
    title: "Bingo",
    location: "Saint Maria Center",
    category: ScheduleItemCategory.SECONDARY,
  },
  {
    startTime: new Date("2026-10-04T10:00:00-05:00"),
    endTime: new Date("2026-10-04T15:00:00-05:00"),
    title: "Blood Drive",
    category: ScheduleItemCategory.TERTIARY,
  },
  ...[
    { date: "2026-10-03", closingTime: "20:00" },
    { date: "2026-10-04", closingTime: "15:00" },
  ].flatMap(({ date, closingTime }) =>
    allDayActivities.map((activity) => ({
      ...activity,
      startTime: new Date(`${date}T10:00:00-05:00`),
      endTime: new Date(`${date}T${closingTime}:00-05:00`),
      category: ScheduleItemCategory.OTHER,
      allDay: true,
    })),
  ),
];

const SUNDAY = new Date("2026-10-04T00:00:00-0500");
const FESTIVAL_END = Math.max(...schedule.map((item) => item.endTime.getTime()));

const eventTimeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Chicago",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

function localTime(date: Date): string {
  return eventTimeFormatter.format(date);
}

// Snapshots must stay unchanged between clock updates, including hydration.
let currentTime = 0;

function getTimeSnapshot() {
  return currentTime;
}

function getServerTimeSnapshot() {
  return 0;
}

function subscribeToTime(onStoreChange: () => void) {
  const updateTime = () => {
    currentTime = Date.now();
    onStoreChange();
  };

  updateTime();
  const interval = window.setInterval(updateTime, 60_000);
  return () => window.clearInterval(interval);
}

function sortItems(a: ScheduleItem, b: ScheduleItem) {
  const priorityMap = {
    primary: 0,
    secondary: 1,
    tertiary: 2,
    other: 3,
  };

  // Earlier starts come first; break ties by priority, then earlier ends.
  return (
    a.startTime.getTime() - b.startTime.getTime() ||
    priorityMap[a.category] - priorityMap[b.category] ||
    a.endTime.getTime() - b.endTime.getTime()
  );
}

function renderItem(item: ScheduleItem) {
  return (
    <div
      key={item.title}
      className={`${classes.calendarItem} ${classes[item.category]}`}
    >
      <div className="flex flex-row">
        <div
          className={`py-2 text-center whitespace-nowrap pr-4 border-r ${classes.timeBlock}`}
        >
          {item.allDay ? (
            <div>All Day</div>
          ) : (
            <>
              <div>{localTime(item.startTime)}</div>
              <div className="mt-4">
                <em>{localTime(item.endTime)}</em>
              </div>
            </>
          )}
        </div>
        <div className={`py-2 pl-4 border-l ${classes.descriptionBlock}`}>
          <div className="mb-2">
            <strong className="mr-2">{item.title}</strong> {item.location}
          </div>
          <div>{item.description}</div>
        </div>
      </div>
    </div>
  );
}

export default function SchedulePage() {
  const now = useSyncExternalStore(
    subscribeToTime,
    getTimeSnapshot,
    getServerTimeSnapshot,
  );
  const festivalEnded = now >= FESTIVAL_END;

  const saturdayItems = schedule
    .filter((scheduleItem) => {
      return scheduleItem.startTime < SUNDAY && scheduleItem.endTime.getTime() > now;
    })
    .sort(sortItems);
  const sundayItems = schedule
    .filter((scheduleItem) => {
      return scheduleItem.startTime >= SUNDAY && scheduleItem.endTime.getTime() > now;
    })
    .sort(sortItems);

  return (
    <>
      <div className="z-10 relative flex flex-row mb-4 gap-4 px-4 pt-4 md:px-0 text-center items-center justify-center">
        <div>
          <Link href="/">
            <Image
              alt="GorettiFest"
              src="/img/gorettifest-logo-white-red-outline.svg"
              width={180}
              height={180}
              priority
              loading="eager"
              className="block relative h-[75%] w-auto object-contain p-4 md:p-0"
            />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/parking">
            <Button>Find Parking</Button>
          </Link>
          <Link href="/img/GorettiFest-Map.png">
            <Button>GorettiFest Map</Button>
          </Link>
          <Link href="/schedule">
            <Button>Schedule</Button>
          </Link>
        </div>
      </div>
      <div className="relative max-h-[90vh] md:h-[90vh]">
        <div className="hidden md:block absolute h-full w-full overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={headerImage.src}
            alt="PHI Helicopter landed at GorettiFest"
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
              <h2 className="text-balance">
                GorettiFest Schedule
              </h2>
            </div>

            {festivalEnded ? (
              <div className="max-w-prose mx-auto py-8 text-center" role="status">
                <h3 className="mb-4">GorettiFest is over!</h3>
                <p>Thanks for coming and celebrating with us!</p>
              </div>
            ) : (
              <>
                {saturdayItems.length > 0 && (
                  <div className="max-w-prose mx-auto">
                    <h3 className="text-center my-8">Saturday, October 3</h3>
                    {saturdayItems.map(renderItem)}
                  </div>
                )}

                {sundayItems.length > 0 && (
                  <div className="max-w-prose mx-auto">
                    <h3 className="text-center my-8">Sunday, October 4</h3>
                    {sundayItems.map(renderItem)}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
