import { HeaderNav } from "@/components/header-nav";
import { Metadata } from "next";
import Image from "next/image";
import headerImage from "@/public/img/IMG_2256.webp";
import { Button } from "@/components/button";
import { lilita } from "@/components/font";

const VOLUNTEER_SIGNUP_LINK =
  "https://stmariagoretti.volunteerlocal.com/volunteer/?id=103729";
const DONATION_LINK = "https://square.link/u/Ugurk7sW";

export const metadata: Metadata = {
  title: "Volunteer at GorettiFest",
  description: "GorettiFest needs time and donations from volunteers like you",
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
                GorettiFest needs your help!
              </h2>
              <p className="text-lg">
                GorettiFest only exists because of your generous time and
                donations. Every year, our entire parish comes together to
                volunteer their time and resources to make GorettiFest an
                unforgettable event for the entire community.
              </p>
              <div className="grid lg:grid-cols-2 gap-8 mt-16">
                <div>
                  <h4>I want to help</h4>
                  <p>
                    GorettiFest can&apos;t happen without your help. Register to
                    volunteer so we know that everyone who visits will have a
                    great time. There are many ways you can help:
                  </p>
                  <ul className="list-disc pl-4">
                    <li>serving and preparing food</li>
                    <li>supervising game booths</li>
                    <li>setting up festival buildings and furniture</li>
                    <li>cleaning up during/after the festival</li>
                  </ul>
                  <p>
                    We&apos;re using <strong>Volunteer Local</strong> to
                    schedule volunteers so you know exactly when to show up and
                    what to do. Sign up and register for the shifts you&apos;re
                    available for on our Volunteer Local page.
                  </p>
                  <p className="text-center">
                    <a
                      href={VOLUNTEER_SIGNUP_LINK}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button>Sign up at Volunteer Local</Button>
                    </a>
                  </p>
                </div>
                <div>
                  <h4>I want to donate money &amp; supplies</h4>
                  <p>
                    Every donation you make helps our festival raise even more
                    for Saint Maria Goretti Catholic School! Whether you have
                    specific supplies to donate or would like to make a monetary
                    donation, we appreciate your support!
                  </p>
                  <p className="text-center">
                    <a href={DONATION_LINK} target="_blank" rel="noreferrer">
                      <Button>Donate money now</Button>
                    </a>
                  </p>
                  <p className="text-center">
                    <a href="mailto:questions@gorettifest.com?subject=GorettiFest%20Supplies%20Donation">
                      <Button>Donate supplies</Button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
