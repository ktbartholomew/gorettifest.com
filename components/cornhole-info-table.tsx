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
      </tbody>
    </InfoTable>
  );
}
