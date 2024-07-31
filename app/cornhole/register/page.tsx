import { HeaderNav } from "@/components/header-nav";
import { PageSection } from "@/components/page-section";
import { Lilita_One } from "next/font/google";
import Image from "next/image";
const lilita = Lilita_One({ weight: ["400"], subsets: ["latin"] });
import headerImage from "@/public/img/IMG_1358.webp";
import { InfoTable } from "@/components/info-table";

const CORNHOLE_PAY_LINK = "";

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
                Sign Up for the GorettiFest Cornhole tournament!
              </h2>
              <p className="text-lg">
                Enter your team of one to two people in our annual Cornhole
                tournament! Registration is <strong>$50</strong> per team. The
                tournament is bracket-style, winner-take-all.
              </p>
              <InfoTable>
                <tbody>
                  <tr>
                    <th>When</th>
                    <td>
                      Saturday, October 5 from 10am to 6pm. The tournament will
                      last all day.
                    </td>
                  </tr>
                  <tr>
                    <th>Where</th>
                    <td>
                      <strong>Saint Maria Goretti Catholic School</strong>
                      <br />
                      <a
                        href="https://maps.app.goo.gl/qKE7DvAxQKcZ7Qyt9"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <address>
                          1200 S Davis Dr <br />
                          Arlington, TX 76013
                        </address>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Cost</th>
                    <td>
                      The entry fee is <strong>$50</strong> for a team of two
                      people.
                    </td>
                  </tr>
                  <tr>
                    <th>Equipment</th>
                    <td>
                      <strong>
                        Please help our tournament succeed by loaning us your
                        Cornhole set if you have one!
                      </strong>{" "}
                      Email{" "}
                      <a href="mailto:questions@gorettifest.com">
                        questions@gorettifest.com
                      </a>{" "}
                      if you would like to loan us a Cornhole set.
                    </td>
                  </tr>
                </tbody>
              </InfoTable>
              <div className="text-center mt-8">
                <button
                  disabled
                  className="bg-blue-300 hover:bg-blue-300 cursor-not-allowed text-white rounded-md px-8 py-2"
                >
                  Registration Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
