import { HeaderNav } from "@/components/header-nav";
import { Lilita_One } from "next/font/google";
import Image from "next/image";
const lilita = Lilita_One({ weight: ["400"], subsets: ["latin"] });
import headerImage from "@/public/img/IMG_1358.webp";
import { CornholeInfoTable } from "@/components/cornhole-info-table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Thank you for registering for the GorettiFest Cornhole tournament! Arlington GorettiFest October 5-6 - Fall Festival Hosted by Saint Maria Goretti Catholic School",
};

export default function CornholeRegisterCallback() {
  return (
    <>
      <HeaderNav logo />
      <div className="relative max-h-[90vh] md:h-[90vh]">
        <div className="hidden md:block absolute h-full w-full overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={headerImage.src}
            alt="GorettiFest Cornhole tournament participants"
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
          <div
            id="cornhole-signup"
            className="bg-white relative md:max-w-[67vw] lg:max-w-[50vw] mx-auto md:rounded-3xl p-8 md:drop-shadow-xl"
          >
            <div className="max-w-prose mx-auto">
              <h2 className={lilita.className + " text-balance"}>
                Thank you for registering for the GorettiFest Cornhole
                tournament!
              </h2>
              <p className="text-lg">
                You&apos;ll receive a receipt via email. Keep that receipt, and
                prepare to show it to our tournament coordinator when you arrive
                on <strong>October 5</strong>.
              </p>
              <CornholeInfoTable omitCost />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
