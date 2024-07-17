import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="relative h-[80vh]">
        <div className="absolute h-full overflow-hidden">
          <Image
            className="h-full object-cover"
            src="/img/IMG_1440.webp"
            alt="picture"
            width={1800}
            height={1800}
          />
        </div>
        <div
          className="absolute h-full w-full"
          style={{ background: "rgba(0,0,0,0.6)" }}
        ></div>
        <div className="flex h-full w-full absolute text-center items-center justify-center">
          <div>
            <Image
              src="/img/goretti-fest-logo.svg"
              alt="Goretti Fest Logo"
              width={500}
              height={500}
            />
            <div className="mt-8 inline-block flex-col bg-white text-2xl rounded-lg">
              <div className="bg-red-700 border-b-2 border-b-red-900 border-t border-t-red-400 text-white text-center py-4 px-8 rounded-t-lg">
                October
              </div>
              <div className="text-6xl py-4 px-8 tracking-tighter">5 - 6</div>
              <div className="py-2 px-8">2024</div>
            </div>
          </div>
        </div>
      </section>
      <nav className="z-10 text-lg bg-teal-800 font-bold w-full text-white">
        <ul className="flex justify-center">
          <li>
            <a
              className="block p-6 hover:bg-teal-600 transition-colors"
              href="#visit"
            >
              Plan Your Visit
            </a>
          </li>
          <li>
            <a
              className="block p-6 hover:bg-teal-600 transition-colors"
              href="#food-and-games"
            >
              Food &amp; Games
            </a>
          </li>
          <li>
            <a
              className="block p-6 hover:bg-teal-600 transition-colors"
              href="#vendors"
            >
              Vendors
            </a>
          </li>
          <li>
            <a
              className="block p-6 hover:bg-teal-600 transition-colors"
              href="#about-us"
            >
              About Us
            </a>
          </li>
        </ul>
      </nav>
      <section className="py-16 max-w-[80vw] mx-auto">
        <h2 id="visit">Plan Your Visit</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-2xl my-4">
              Join us for a weekend of fun and festivity at{" "}
              <strong>GorettiFest</strong>, a fall festival benefiting Saint
              Maria Goretti Catholic School!
            </p>
            <table>
              <tbody>
                <tr>
                  <th className="py-2 pr-8 align-top">When</th>
                  <td className="py-2">
                    Saturday, October 5 from 11am to 8pm <br />
                    Sunday, October October 6 from 8am to 3pm
                  </td>
                </tr>
                <tr>
                  <th className="py-2 pr-8 align-top">Where</th>
                  <td className="py-2">
                    <strong>Saint Maria Goretti Catholic School</strong>
                    <br />
                    <address>
                      1200 S Davis Dr <br />
                      Arlington, TX 76013
                    </address>
                  </td>
                </tr>
                <tr>
                  <th className="py-2 pr-8 align-top">Cost</th>
                  <td className="py-2">
                    Admission is <strong>FREE</strong>! <br />
                    Buy tickets for food &amp; games with cash or card after you
                    arrive.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-teal-800 p-8 rounded-2xl">
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
      </section>
      <section className="py-16 max-w-[80vw] mx-auto">
        <h2 id="food-and-games">Food &amp; Games</h2>
      </section>
    </main>
  );
}
