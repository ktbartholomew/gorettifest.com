"use client";

import { HeaderNav } from "@/components/header-nav";
import classes from "./calendar.module.css";
import Image from "next/image";
import { lilita } from "@/components/font";
import headerImage from "@/public/img/IMG_2212.webp";

import { useEffect, useState } from "react";
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
};

const schedule: ScheduleItem[] = [
  {
    startTime: new Date("2025-10-04T10:00:00-0500"),
    endTime: new Date("2025-10-04T10:15:00-0500"),
    title: "Opening Ceremony",
    description:
      "Kick off GorettiFest with the national anthem and opening remarks from our organizers.",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2025-10-04T10:00:00-0500"),
    endTime: new Date("2025-10-04T13:00:00-0500"),
    title: "Touch-a-Truck",
    description:
      "Get up close and personal with police, fire, and ambulance vehicles.",
    location: "South Fairgrounds",
    category: ScheduleItemCategory.TERTIARY,
  },

  {
    startTime: new Date("2025-10-04T12:00:00-0500"),
    endTime: new Date("2025-10-04T12:45:00-0500"),
    title: "Checkers the Magician",
    description:
      "Be amazed and entertained by Checkers, every kid's favorite magician (and every adult's favorite comedian).",
    location: "Main Stage",
    category: ScheduleItemCategory.SECONDARY,
  },
  {
    startTime: new Date("2025-10-04T13:00:00-0500"),
    endTime: new Date("2025-10-04T13:30:00-0500"),
    title: "Sentinel Martial Arts",
    description:
      "See daring feats of martial arts featuring aerial kicks and swordwork.",
    location: "Main Stage",
    category: ScheduleItemCategory.SECONDARY,
  },
  {
    startTime: new Date("2025-10-04T13:00:00-0500"),
    endTime: new Date("2025-10-04T17:00:00-0500"),
    title: "Bingo",
    location: "Saint Maria Center",
    category: ScheduleItemCategory.SECONDARY,
  },
  {
    startTime: new Date("2025-10-04T13:00:00-0500"),
    endTime: new Date("2025-10-04T17:00:00-0500"),
    title: "Petting Zoo",
    location: "Field",
    category: ScheduleItemCategory.TERTIARY,
  },
  {
    startTime: new Date("2025-10-04T14:30:00-0500"),
    endTime: new Date("2025-10-04T15:30:00-0500"),
    title: "The Blue Decade",
    description: "Our homegrown SMG community band perform modern hits!",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2025-10-04T16:00:00-0500"),
    endTime: new Date("2025-10-04T16:30:00-0500"),
    title: "Premier Martial Arts",
    location: "Main Stage",
    category: ScheduleItemCategory.SECONDARY,
  },
  {
    startTime: new Date("2025-10-04T17:00:00-0500"),
    endTime: new Date("2025-10-04T17:30:00-0500"),
    title: "SMG Teacher Performance",
    description:
      "It's a surprise. They won't even tell us. Rest assured, it'll be worth the wait.",
    location: "Main Stage",
    category: ScheduleItemCategory.SECONDARY,
  },
  {
    startTime: new Date("2025-10-04T17:30:00-0500"),
    endTime: new Date("2025-10-04T18:00:00-0500"),
    title: "Laura Dance Dynamics",
    location: "Main Stage",
    category: ScheduleItemCategory.SECONDARY,
  },
  {
    startTime: new Date("2025-10-04T18:00:00-0500"),
    endTime: new Date("2025-10-04T20:00:00-0500"),
    title: "Trinity River Ramblers",
    description:
      "Catch an eclectic mix of American country, Blues, and Rock'n Roll!",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2025-10-04T10:00:00-0500"),
    endTime: new Date("2025-10-04T12:00:00-0500"),
    title: "Character Photo Opportunities",
    description:
      "Meet fantasy characters as they roam GorettiFest—bring your little ones for a photo op!",
    location: "Fairgrounds",
    category: ScheduleItemCategory.TERTIARY,
  },
  {
    startTime: new Date("2025-10-04T10:15:00-0500"),
    endTime: new Date("2025-10-04T10:30:00-0500"),
    title: "SMG & Nolan Cheer Squads",
    description:
      "Get in the GorettiFest spirit with cheers from our school's squad, and our alumni from Nolan Catholic High School!",
    category: ScheduleItemCategory.SECONDARY,
    location: "Main Stage",
  },
  {
    startTime: new Date("2025-10-04T10:30:00-0500"),
    endTime: new Date("2025-10-04T11:30:00-0500"),
    title: "SMG & Nolan Ballet Folklorico",
    description:
      "Enjoy tradicional Mexican dances from our very talented students!",
    category: ScheduleItemCategory.SECONDARY,
    location: "Main Stage",
  },

  {
    startTime: new Date("2025-10-05T10:00:00-0500"),
    endTime: new Date("2025-10-05T11:30:00-0500"),
    title: "SMG School Talent Show",
    description:
      "Catch our talented students showing off their many unique talents!",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2025-10-05T11:30:00-0500"),
    endTime: new Date("2025-10-05T12:30:00-0500"),
    title: "Mike Hines",
    description:
      "Clap, dance, or sing along to all your favorite classic roots-rock hits.",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2025-10-05T12:30:00-0500"),
    endTime: new Date("2025-10-05T13:00:00-0500"),
    title: "Miss Persis Dance",
    description:
      "A cherished Arlington institution!  Enjoy watching these graceful dancers share their talents on stage.",
    location: "Main Stage",
    category: ScheduleItemCategory.SECONDARY,
  },
  {
    startTime: new Date("2025-10-05T13:30:00-0500"),
    endTime: new Date("2025-10-05T15:00:00-0500"),
    title: "Abbey Brown & the Sound",
    location: "Main Stage",
    category: ScheduleItemCategory.PRIMARY,
  },
  {
    startTime: new Date("2025-10-05T10:00:00-0500"),
    endTime: new Date("2025-10-05T14:00:00-0500"),
    title: "Bingo",
    location: "Saint Maria Center",
    category: ScheduleItemCategory.SECONDARY,
  },
  {
    startTime: new Date("2025-10-05T10:00:00-0500"),
    endTime: new Date("2025-10-05T15:00:00-0500"),
    title: "Carter Blood Drive",
    description:
      "Alway a good cause, give blood in the air-conditioned Carter BloodCare bus.",
    location: "South Fairgrounds",
    category: ScheduleItemCategory.TERTIARY,
  },
  {
    startTime: new Date("2025-10-04T10:00:00-0500"),
    endTime: new Date("2025-10-04T18:00:00-0500"),
    title: "Vendor Show",
    location: "Holy Family Life Center",
    category: ScheduleItemCategory.TERTIARY,
  },
  {
    startTime: new Date("2025-10-05T10:00:00-0500"),
    endTime: new Date("2025-10-05T15:00:00-0500"),
    title: "Cake Spin",
    description: "Spin the wheel, win baked goods!",
    location: "Cafetorium",
    category: ScheduleItemCategory.OTHER,
  },
  {
    startTime: new Date("2025-10-05T10:00:00-0500"),
    endTime: new Date("2025-10-05T15:00:00-0500"),
    title: "Rummage Sale",
    location: "Cafetorium",
    category: ScheduleItemCategory.OTHER,
  },
  {
    startTime: new Date("2025-10-05T10:00:00-0500"),
    endTime: new Date("2025-10-05T15:00:00-0500"),
    title: "Ministry Tables",
    location: "Cafetorium",
    category: ScheduleItemCategory.OTHER,
  },
  {
    startTime: new Date("2025-10-05T10:00:00-0500"),
    endTime: new Date("2025-10-05T15:00:00-0500"),
    title: "Face Painting",
    location: "Holy Family Life Center",
    category: ScheduleItemCategory.TERTIARY,
  },
  {
    startTime: new Date("2025-10-05T10:00:00-0500"),
    endTime: new Date("2025-10-05T15:00:00-0500"),
    title: "Caricatures",
    location: "Holy Family Life Center",
    category: ScheduleItemCategory.TERTIARY,
  },
  {
    startTime: new Date("2025-10-05T10:00:00-0500"),
    endTime: new Date("2025-10-05T15:00:00-0500"),
    title: "Dunk Tank",
    location: "Field",
    category: ScheduleItemCategory.TERTIARY,
  },
];

const SATURDAY = new Date("2025-10-04T00:00:00-0500");
const SUNDAY = new Date("2025-10-05T00:00:00-0500");

function localTime(date: Date): string {
  const meridian = date.getHours() >= 12 ? "PM" : "AM";
  const hour = date.getHours() % 12 === 0 ? 12 : date.getHours() % 12;

  return `${hour.toString()}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${meridian}`;
}

function sortItems(a: ScheduleItem, b: ScheduleItem) {
  // Case: one interval is entirely before the other
  if (a.endTime <= b.startTime) return -1;
  if (b.endTime <= a.startTime) return 1;

  // Otherwise, prioritize earlier endTime
  if (a.endTime < b.endTime) return -1;
  if (a.endTime > b.endTime) return 1;

  // If same endTime, break ties with startTime
  return a.startTime.getTime() - b.startTime.getTime();
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
          <div>{localTime(item.startTime)}</div>
          <div className="mt-4">
            <em>{localTime(item.endTime)}</em>
          </div>
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
  const [now, setNow] = useState(new Date(0));
  useEffect(() => {
    setNow(new Date());
  }, []);

  const saturdayItems = schedule
    .filter((scheduleItem) => {
      return scheduleItem.startTime < SUNDAY && scheduleItem.endTime > now;
    })
    .sort(sortItems);
  const sundayItems = schedule
    .filter((scheduleItem) => {
      return scheduleItem.startTime >= SUNDAY && scheduleItem.endTime > now;
    })
    .sort(sortItems);

  return (
    <>
      <div className="z-10 relative flex flex-row mb-4 gap-4 px-4 md:px-0 text-center items-center justify-center">
        <div>
          <Link href="/">
            <Image
              alt="GorettiFest October 4-5, 2025"
              src="/img/gorettifest-logo-white-red-outline-date.svg"
              width={180}
              height={180}
              priority
              loading="eager"
              className="block relative h-[75%] object-contain p-4 md:p-0"
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
              <h2 className={lilita.className + " text-balance"}>
                GorettiFest Schedule
              </h2>
            </div>

            <div className="max-w-prose mx-auto">
              <h3 className="text-center my-8">Saturday, October 4</h3>
              <p className="text-sm">
                <strong>All Day:</strong> food booths, vendor hall, bingo,
                carnival games, bounce houses, rummage sale
              </p>
              {saturdayItems.map(renderItem)}
            </div>

            <div className="max-w-prose mx-auto">
              <h3 className="text-center my-8">Sunday, October 5</h3>
              <p className="text-sm">
                <strong>All Day:</strong> food booths, vendor hall, bingo,
                carnival games, bounce houses, rummage sale
              </p>
              {sundayItems.map(renderItem)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
