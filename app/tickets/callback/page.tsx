import { HeaderNav } from "@/components/header-nav";
import { lilita } from "@/components/font";
import Image from "next/image";
import headerImage from "@/public/img/IMG_1440.webp";

export default function Page() {
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
                Thank you for pre-ordering GorettiFest tickets!
              </h2>
              <p className="text-lg">
                You&apos;ll receive a receipt via email. Keep that receipt, and
                prepare to show it to our volunteers when you arrive.
                We&rsquo;ll have your tickets waiting for you! We can&rsquo;t
                wait to see you on <strong>October 5</strong>!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
