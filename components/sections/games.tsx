import { Lilita_One } from "next/font/google";
const lilita = Lilita_One({ weight: ["400"], subsets: ["latin"] });
import { PageSection } from "../page-section";
import { InfoTable } from "../info-table";
import { ImageScrollLoader } from "../image-scroll-loader";
import Image from "next/image";
import styles from "./sections.module.css";

export function GamesSection() {
  return (
    <PageSection id="games" grid={2} className="bg-slate-800 text-white">
      <div>
        <ImageScrollLoader offScreenDirection="left" midPointOffset={0.4}>
          <Image
            className={[
              styles.photoWithBorder,
              styles.photoWithBorder__left,
            ].join(" ")}
            src="/img/IMG_1358.webp"
            alt="festival attendees playing Cornhole in in the Cornhole tournament at GorettiFest festival"
            width={900}
            height={900}
            loading="lazy"
          />
          <Image
            className={[styles.photoWithBorder].join(" ")}
            src="/img/IMG_1189.webp"
            alt="a young boy playing in the Nerf shooting gallery at GorettiFest festival"
            width={900}
            height={900}
            loading="eager"
          />
        </ImageScrollLoader>
      </div>
      <div>
        <h2 className={lilita.className}>Games</h2>
        <p className="text-2xl">
          Test your skills at our annual Cornhole Tournament! <br />
          Show your stuff at the games along the midway! <br />
          Win some cash in our Bingo Hall! <br />
          Set the little ones loose in our (supervised) bounce houses!
        </p>
        <InfoTable>
          <tbody>
            <tr>
              <th>Cornhole tournament</th>
              <td>
                <p className="mt-0">
                  $200 Cash prize for the winning team! Two-person teams only.
                </p>
                <div>
                  <a href="/cornhole/register">
                    <button className="bg-blue-600 hover:bg-blue-500 transition-colors text-white rounded-md px-8 py-2">
                      Register Now
                    </button>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <th>Bingo</th>
              <td>Pay-per-card bingo with a real caller and cash prizes!</td>
            </tr>
            <tr>
              <th>Jail</th>
              <td>
                Buy a warrant to put your friends in jail, or pay a bounty to
                incarcerate the Principal or Priest! (if you can catch them)
              </td>
            </tr>
            <tr>
              <th>Carnival Games</th>
              <td>
                Coin toss, Nerf shooting gallery, Marble races, Fastest pitch,
                and more!
              </td>
            </tr>
          </tbody>
        </InfoTable>
      </div>
    </PageSection>
  );
}
