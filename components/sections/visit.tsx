import { Lilita_One } from "next/font/google";
import { PageSection } from "../page-section";
import { InfoTable } from "../info-table";
import { Button } from "../button";
const lilita = Lilita_One({ weight: ["400"], subsets: ["latin"] });

export function VisitSection() {
  return (
    <PageSection id="visit" grid={2} className="bg-white">
      <div>
        <h2 className={lilita.className}>Plan Your Visit</h2>
        <p className="text-2xl my-4">
          Join us at <strong>GorettiFest</strong>, a fall festival benefiting
          Saint Maria Goretti Catholic School! GorettiFest is packed with food,
          games, music, and fun for the whole family!
        </p>
        <InfoTable>
          <tbody>
            <tr>
              <th>When</th>
              <td>
                <p className="text-lg mt-0">
                  Saturday, October 5<br />
                  11am to 8pm
                </p>
                <p className="text-lg">
                  Sunday, October 6 <br />
                  8am to 3pm
                </p>
                <p>
                  <a href="/schedule">
                    <Button>See the full schedule</Button>
                  </a>
                </p>
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
                <br />
                <a href="/img/GorettiFest-Map.png">
                  <Button>View the GorettiFest Map</Button>
                </a>
              </td>
            </tr>
            <tr>
              <th>Cost</th>
              <td>
                <p className="mt-0">
                  Admission is <strong>FREE</strong>! <br />
                  Buy tickets for food &amp; games with cash or card after you
                  arrive.
                </p>
              </td>
            </tr>
            <tr>
              <th>Parking</th>
              <td>
                Free parking is available in our private{" "}
                <a
                  href="https://maps.app.goo.gl/cqx3drVKb1xtRaeN6"
                  target="_blank"
                  rel="noreferrer"
                >
                  parking lot on Benge Drive
                </a>{" "}
                or in{" "}
                <a href="https://maps.app.goo.gl/yq1oQXLD37FGUJj76">
                  UTA&nbsp;lot&nbsp;26
                </a>{" "}
                on Mitchell Street. Shuttles are available to transport you from
                the parking lots to GorettiFest.
              </td>
            </tr>
          </tbody>
        </InfoTable>
      </div>
      <div className="hidden md:block">
        <div className="bg-slate-800 p-8 rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.5415387098847!2d-97.12749252363562!3d32.72480818665103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d1a02bc13ef%3A0xc77ecf1dab906f16!2sSt%20Maria%20Goretti%20Catholic%20School!5e0!3m2!1sen!2sus!4v1721175085047!5m2!1sen!2sus"
            width="600"
            height="450"
            className="w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </PageSection>
  );
}
