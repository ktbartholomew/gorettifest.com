import { lilita } from "../font";
import { PageSection } from "../page-section";
import { InfoTable } from "../info-table";
import Image from "next/image";
import styles from "./sections.module.css";
import { Button } from "../button";
import { ImageScrollLoader } from "../image-scroll-loader";

export function EntertainmentSection() {
  return (
    <PageSection id="entertainment" grid={2} className="bg-white">
      <div>
        <ImageScrollLoader offScreenDirection="left" midPointOffset={0.4}>
          <Image
            className={[
              styles.photoWithBorder,
              styles.photoWithBorder__right,
            ].join(" ")}
            src="/img/IMG_2457.webp"
            alt="An alumni band playing rock music on stage at GorettiFest"
            width={900}
            height={900}
          />
          <Image
            className={[
              styles.photoWithBorder,
              styles.photoWithBorder__left,
            ].join(" ")}
            src="/img/IMG_2672.webp"
            alt="GorettiFest volunteers stand with helicopter crew in front of a helicopter at GorettiFest"
            width={900}
            height={900}
          />
        </ImageScrollLoader>
      </div>
      <div>
        <h2 className={lilita.className}>Entertainment</h2>
        <p className="text-2xl">
          Our school is proud to be a part of the City of Arlington and we are
          happy to showcase the incredible talents of the entire community! The
          stage will be busy all weekend long, so don&apos;t miss a thing!
        </p>
        <InfoTable>
          <tbody>
            <tr>
              <th>Main Stage</th>
              <td>
                Live band, martial arts demonstrations, magic show, dance
                troupes, ballet folklorico, our school talent show, and so much
                more!
              </td>
            </tr>
            <tr>
              <th>Vendor Hall</th>
              <td>
                <p className="mt-0">
                  Local vendors offer their goods and services in our
                  air-conditioned vendor hall.
                </p>
                <p>
                  <a
                    href="https://forms.gle/GH9kLzA345z1qi87A"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button>Register to be a vendor</Button>
                  </a>
                </p>
              </td>
            </tr>
            <tr>
              <th>Rummage Sale</th>
              <td>
                Find your next treasure in our collection of items from the
                community.
              </td>
            </tr>
            <tr>
              <th>Touch-a-Truck</th>
              <td>
                See the coolest vehicles up close and in person! Entries include
                police car, ambulance, fire truck, and more!
              </td>
            </tr>
            <tr>
              <th>For Kids</th>
              <td>Petting Zoo, confetti eggs, face paint, crazy makeover</td>
            </tr>
          </tbody>
        </InfoTable>
      </div>
    </PageSection>
  );
}
