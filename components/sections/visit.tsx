import { PageSection } from "../page-section";
import { InfoTable } from "../info-table";
import { Button } from "../button";
import { lilita } from "../font";

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
                  Saturday, October 4<br />
                  10am to 8pm
                </p>
                <p className="text-lg">
                  Sunday, October 5<br />
                  10am to 3pm
                </p>
                {/* TODO: uncomment when the schedule is mostly ready */}
                {/* <p>
                  <a href="/schedule">
                    <Button>See the full schedule</Button>
                  </a>
                </p> */}
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
                {/* TODO: uncomment close to event */}
                {/* <a href="/img/GorettiFest-Map.png">
                  <Button>View the GorettiFest Map</Button>
                </a> */}
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
      <div>
        <div className="bg-red-700 text-white p-4 rounded-2xl">
          <iframe
            className="w-full rounded-md"
            width="600"
            height="450"
            src="https://www.youtube.com/embed/yPmmsz8YlAw?si=lDQsIiCei3B6-QsR&controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p className="text-lg">
            Explore the sights and sounds of GorettiFest 2024, in our exclusive
            behind-the scenes video. Expect this and much more when you visit
            GorettiFest on October 4!
          </p>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.5415387098847!2d-97.12749252363562!3d32.72480818665103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d1a02bc13ef%3A0xc77ecf1dab906f16!2sSt%20Maria%20Goretti%20Catholic%20School!5e0!3m2!1sen!2sus!4v1721175085047!5m2!1sen!2sus"
            width="600"
            height="450"
            className="w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> */}
        </div>
      </div>
    </PageSection>
  );
}
