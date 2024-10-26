import { Lilita_One } from "next/font/google";
import { PageSection } from "../page-section";
import { InfoTable } from "../info-table";
const lilita = Lilita_One({ weight: ["400"], subsets: ["latin"] });
import Image from "next/image";
import styles from "./sections.module.css";
import { Button } from "../button";

export function EntertainmentSection() {
  return (
    <PageSection id="entertainment" grid={2} className="bg-white">
      <div>
        <Image
          className={[
            styles.photoWithBorder,
            styles.photoWithBorder__right,
          ].join(" ")}
          src="/img/IMG_1433.webp"
          alt="children playing with confetti-filled eggs at GorettiFest festival"
          width={900}
          height={900}
        />
      </div>
      <div>
        <h2 className={lilita.className}>Entertainment</h2>
        <p className="text-2xl">
          Our school is proud to be a part of the City of Arlington and we are
          happy to showcase the incredible talents of both of our communities!
          The stage will be busy all weekend long, so don&apos;t miss a thing!
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
              <th>Used Book Sale</th>
              <td>
                Pick out your next read from a huge selection of used books.
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
