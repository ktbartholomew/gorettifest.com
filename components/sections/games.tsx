import { PageSection } from "../page-section";
import { InfoTable } from "../info-table";
import { ImageScrollLoader } from "../image-scroll-loader";
import Image from "next/image";
import styles from "./sections.module.css";
import { lilita } from "../font";

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
            src="/img/IMG_2152.webp"
            alt="festival attendees playing Cornhole in the Cornhole tournament at GorettiFest festival"
            width={900}
            height={900}
            loading="lazy"
          />
          <Image
            className={[styles.photoWithBorder].join(" ")}
            src="/img/IMG_2363.webp"
            alt="a young boy pitching a baseball in the GorettiFest games midway"
            width={900}
            height={900}
            loading="eager"
          />
        </ImageScrollLoader>
      </div>
      <div>
        <h2 className={lilita.className}>Games</h2>
        <p className="text-2xl">
          Throw your cares away at the axe-throwing booth!
          <br />
          Show your stuff at the games along the midway! <br />
          Win some cash in our Bingo Hall! <br />
          Set the little ones loose in our (supervised) bounce houses!
        </p>
        <InfoTable>
          <tbody>
            <tr>
              <th>Axe-Throwing</th>
              <td>
                Sharpen your aim! Hurl an axe with precision to take the top
                spot on our Lumberjack Leaderboard.
              </td>
            </tr>
            <tr>
              <th>Bingo</th>
              <td>Pay-per-card bingo with a real caller and cash prizes!</td>
            </tr>
            <tr>
              <th>Carnival Games</th>
              <td>
                Coin toss, Nerf shooting gallery, Marble races, Fastest pitch,
                and more!
              </td>
            </tr>
            <tr>
              <th>Cakewalk</th>
              <td>
                Easy as pie! A piece of cake! We sweeten the pot so
                everyone&apos;s a winner at this classic prize game featuring a
                variety of home-baked goods.
              </td>
            </tr>
          </tbody>
        </InfoTable>
      </div>
    </PageSection>
  );
}
