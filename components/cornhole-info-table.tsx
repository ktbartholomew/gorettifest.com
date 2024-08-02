import { InfoTable } from "./info-table";

export function CornholeInfoTable({ omitCost }: { omitCost?: boolean }) {
  return (
    <InfoTable>
      <tbody>
        <tr>
          <th>When</th>
          <td>Saturday, October 5 from 1pm to 7pm.</td>
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
        {omitCost ? null : (
          <tr>
            <th>Cost</th>
            <td>
              The entry fee is <strong>$50</strong> for a team of two people.
            </td>
          </tr>
        )}
        <tr>
          <th>Equipment</th>
          <td>
            <strong>
              Please help our tournament succeed by loaning us your Cornhole set
              if you have one!
            </strong>{" "}
            Email{" "}
            <a href="mailto:questions@gorettifest.com">
              questions@gorettifest.com
            </a>{" "}
            if you would like to loan us a Cornhole set.
          </td>
        </tr>
        <tr>
          <th>Rules</th>
          <td>
            <ul className="list-disc pl-4">
              <li>Teams are randomly seeded in a double-elimination bracket</li>
              <li>
                You must be present and on time for each of your matches, or you
                forfeit!
              </li>
              <li>
                The final championship is winner-take-all.{" "}
                <em>If you ain&apos;t first, you&apos;re last!</em>
              </li>
              <ul className="list-disc pl-4">
                <li>Boards are 27 feet apart</li>
                <li>
                  4 bags per team, each team alternates throwing one bag at a
                  time.
                </li>
                <li>
                  Points are determined after each team has thrown all four bags
                  by calculating the difference between each teams&rsquo;
                  throws. 1 point for each bag that lands on the board, 3 points
                  for each bag that lands inside the hole.
                </li>
                <li>
                  First team to <strong>exactly 21 points</strong> wins!{" "}
                </li>
                <li>
                  If you go over 21 points, you go back to having 11 points.
                </li>
              </ul>
            </ul>
          </td>
        </tr>
      </tbody>
    </InfoTable>
  );
}
