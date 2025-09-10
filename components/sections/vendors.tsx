import { PageSection } from "../page-section";
import styles from "./sections.module.css";
import { Button } from "../button";
import { lilita } from "../font";
import { AutoplayVideo } from "../autoplay-video";

export function VendorSection() {
  return (
    <>
      <AutoplayVideo
        src="/img/vendor-reel-no-audio.mp4"
        className="md:hidden"
      />
      <PageSection id="vendors" className="bg-slate-200" grid={2}>
        <div>
          <h2 className={lilita.className}>Vendor Showcase</h2>
          <p className="text-2xl">
            Talented artisans, craftspeople, and other vendors gather at
            GorettiFest to show off their talents and give you the opportunity
            to view and purchase their goods. From jewelry to handmade toys to
            professional services, there&apos;s something for everyone!
          </p>
          <table className="table-auto border-separate border-spacing-4">
            <tbody>
              <tr>
                <td>BC 3D</td>
                <td>Allie Bear Crafts</td>
              </tr>
              <tr>
                <td>Bits and Baubles</td>
                <td>Little Ears by Sophie</td>
              </tr>
              <tr>
                <td>Elly Nelly Crochet Creations</td>
                <td>Deanna&apos;s Watercolors</td>
              </tr>
              <tr>
                <td>Maderas Bella Woodworking</td>
                <td>L &amp; S Creations</td>
              </tr>
              <tr>
                <td>Permanent Jewelry by Jacquie</td>
                <td>&zwnj;</td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4">
            <a
              href="https://forms.gle/GH9kLzA345z1qi87A"
              target="_blank"
              rel="noreferrer"
            >
              <Button>Join our vendor showcase</Button>
            </a>
          </div>
        </div>
        <div>
          <AutoplayVideo
            src="/img/vendor-reel-no-audio.mp4"
            className={[
              styles.photoWithBorder,
              "hidden md:block object-cover",
            ].join(" ")}
          />
        </div>
      </PageSection>
    </>
  );
}
