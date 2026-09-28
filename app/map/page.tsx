import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import headerImage from "@/public/img/IMG_2256.webp";
import festivalMap from "@/public/img/GorettiFest-Map.png";

export const metadata: Metadata = {
  title: "GorettiFest Map",
  description:
    "Find your way around GorettiFest! Locate food booths, games, entertainment, shopping, restrooms, and ticket stations on the festival map.",
};

export default function MapPage() {
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
          <Link href="/map" aria-current="page">
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
            src={headerImage}
            alt="GorettiFest volunteer preparing food"
            priority
            placeholder="blur"
            sizes="100vw"
          />
        </div>
        <div className="absolute top-0 left-0 h-full w-full mix-blend-multiply bg-slate-800 md:bg-slate-900/70"></div>
        <div className="md:py-16">
          <div className="bg-white relative md:max-w-[67vw] lg:max-w-[50vw] mx-auto md:rounded-3xl p-8 md:drop-shadow-xl">
            <h2 className="text-balance mb-8">GorettiFest Map</h2>
            <Image
              src={festivalMap}
              alt="GorettiFest grounds map showing entertainment, dining, games, shopping, restrooms, ticket stations, and the shuttle drop-off"
              className="h-auto w-full"
              priority
              placeholder="blur"
              unoptimized
            />
          </div>
        </div>
      </div>
    </>
  );
}
