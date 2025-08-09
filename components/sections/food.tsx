import { PageSection } from "../page-section";
import styles from "./sections.module.css";
import { Button } from "../button";
import { ImageScrollLoader } from "../image-scroll-loader";
import Image from "next/image";
import { lilita } from "../font";

export function FoodSection() {
  return (
    <>
      <div className="md:hidden">
        <video
          className="object-cover"
          src="/img/food-reel-no-audio.mp4"
          loop
          autoPlay
          muted
          playsInline
        ></video>
      </div>
      <PageSection id="food-and-drinks" className="bg-slate-200" grid={2}>
        <div>
          <h2 className={lilita.className}>Food &amp; Drinks</h2>
          <p className="text-2xl">
            For generations, our school&apos;s parents have shared delicious
            cuisine from around the world representing their heritage. Enjoy a
            beverage in our biergarten to wash down all these tasty treats!
          </p>
          <p className="text-lg">
            We have something for every palate, from legendary Texas BBQ to West
            African street food favorites to sweet treats of every shape and
            size!
          </p>

          <div className="mt-4">
            <a href="/menu">
              <Button>See the full menu</Button>
            </a>
          </div>
        </div>
        <div>
          <video
            className={[
              styles.photoWithBorder,
              "hidden md:block object-cover",
            ].join(" ")}
            src="/img/food-reel-no-audio.mp4"
            loop
            autoPlay
            muted
            playsInline
          ></video>
          {/* TODO: I would like to show photos AND the video, but it looks too busy. Needs some thought. */}
          {/* <ImageScrollLoader offScreenDirection="right" midPointOffset={0.4}>
            <Image
              className={[
                styles.photoWithBorder,
                styles.photoWithBorder__right,
              ].join(" ")}
              src="/img/IMG_2248.webp"
              alt="A young girl enjoying food at GorretiFest"
              width={900}
              height={900}
              loading="lazy"
            />
            <Image
              className={[
                styles.photoWithBorder,
                styles.photoWithBorder__left,
              ].join(" ")}
              src="/img/IMG_2194.webp"
              alt="a father enjoying food at GorettiFest"
              width={900}
              height={900}
              loading="eager"
            />
          </ImageScrollLoader> */}
        </div>
      </PageSection>
    </>
  );
}
