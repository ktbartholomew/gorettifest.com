import { HeaderNav } from "@/components/header-nav";
import { PageSection } from "@/components/page-section";
import { Lilita_One } from "next/font/google";
const lilita = Lilita_One({ weight: ["400"], subsets: ["latin"] });

const VENDOR_PAY_LINK = "https://square.link/u/XAu8gnpK";

export default function VendorRegister() {
  return (
    <>
      <HeaderNav logo />
      <PageSection>
        <div className="max-w-prose mx-auto">
          <h2 className={lilita.className + " text-balance"}>
            Sign Up to be an official vendor at GorettiFest!
          </h2>
          <p>
            Get a dedicated space to sell your crafts, goods, or services. Our
            air-conditioned vendor hall is always an attractive space at
            GorettiFest, providing a place for festival-goers to beat the heat.
          </p>
          <p>
            Each vendor gets a 10x10 space and two tables to furnish however
            they wish. Your registration is good for the entire weekend. The
            vendor hall is locked and secured overnight, so you don&apos;t have
            to worry about packing and unpacking in middle of the weekend.
          </p>
          <p>Space is limited&mdash;register now!</p>
          <div className="text-center mt-8">
            <a href={VENDOR_PAY_LINK} target="_blank" rel="noreferrer noopener">
              <button className="bg-blue-700 hover:bg-blue-600 text-white rounded-md px-8 py-2">
                Register Now
              </button>
            </a>
          </div>
        </div>
      </PageSection>
    </>
  );
}
