import { HeaderNav } from "@/components/header-nav";
import { Metadata } from "next";
import Image from "next/image";
import { lilita } from "@/components/font";
import headerImage from "@/public/img/IMG_2256.webp";
import parkingMap from "@/public/img/parking-map.png";
import React from "react";

export const metadata: Metadata = {
  title: "GorettiFest Parking Map",
  description:
    "Welcome to GorettiFest! Find parking on Benge Drive or Mitchell Street and take a short walk or shuttle ride to arrive at the GorettiFest front doors!",
};

export default function MenuPage() {
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
            <h2 className={lilita.className + " text-balance mb-8"}>
              Park at GorettiFest
            </h2>
            <Image
              src={parkingMap.src}
              alt="GorettiFest parking map"
              priority
              width={1800}
              height={1800}
              loading="eager"
              placeholder="blur"
              blurDataURL={parkingMap.blurDataURL}
            />
            <div className="columns-1 md:columns-2 gap-8">
              <div className="text-center mb-8">
                <h3 className="mb-4">Primary Parking</h3>
                <a
                  href="https://maps.app.goo.gl/cqx3drVKb1xtRaeN6"
                  target="_blank"
                >
                  <address>
                    Saint Maria Goretti Parking
                    <br />
                    1009 Benge Drive
                    <br />
                    Arlington, TX 76013
                  </address>
                </a>
              </div>
              <div className="text-center mb-8">
                <h3 className="mb-4">Overflow Parking</h3>
                <a
                  href="https://maps.app.goo.gl/yq1oQXLD37FGUJj76"
                  target="_blank"
                >
                  <address>
                    UTA Lot 26 <br />
                    9999 W Mitchell St <br />
                    Arlington, TX 76013
                  </address>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
