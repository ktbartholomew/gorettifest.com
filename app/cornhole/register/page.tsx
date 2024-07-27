import { HeaderNav } from "@/components/header-nav";
import { PageSection } from "@/components/page-section";
import { Lilita_One } from "next/font/google";
const lilita = Lilita_One({ weight: ["400"], subsets: ["latin"] });

const CORNHOLE_PAY_LINK = "";

export default function CornholeRegister() {
  return (
    <>
      <HeaderNav logo />
      <PageSection>
        <div className="max-w-prose mx-auto">
          <h2 className={lilita.className + " text-balance"}>
            Sign Up for the GorettiFest Cornhole tournament!
          </h2>
          <p>
            Enter your team of one to two people in our annual Cornhole
            tournament! Registration is <strong>$50</strong> per team. The
            tournament is bracket-style, winner-take-all.
          </p>
          <div className="text-center mt-8">
            <button
              disabled
              className="bg-blue-300 hover:bg-blue-300 cursor-not-allowed text-white rounded-md px-8 py-2"
            >
              Registration Coming Soon
            </button>
          </div>
        </div>
      </PageSection>
    </>
  );
}
