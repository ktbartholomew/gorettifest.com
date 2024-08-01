import { HeaderNav } from "@/components/header-nav";
import { PageSection } from "@/components/page-section";
import { Lilita_One } from "next/font/google";
import Image from "next/image";
const lilita = Lilita_One({ weight: ["400"], subsets: ["latin"] });
import headerImage from "@/public/img/IMG_1358.webp";
import { InfoTable } from "@/components/info-table";
import { CornholeInfoTable } from "@/components/cornhole-info-table";

const CORNHOLE_PAY_LINK = "https://square.link/u/6NCGlZTi";

export default function CornholeRegister() {
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
        <div className="py-16">
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
                prepare show it to our tournament coordinator when you arrive on{" "}
                <strong>October 5</strong>.
              </p>
              <CornholeInfoTable omitCost />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
