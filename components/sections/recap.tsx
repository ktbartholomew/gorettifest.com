import { Carousel } from "../carousel";
import { lilita } from "../font";

export function RecapSection() {
  return (
    <div id="recap" className="bg-slate-800 text-white py-0 md:py-16">
      <div className="flex justify-evenly justify-items-center">
        <div className="px-4 lg:max-w-[50vw]">
          <h2 className={`${lilita.className}`}>Thank You</h2>
          <p className="text-2xl">
            Thank you for making GorettiFest a success! Your generosity created
            countless smiles and memories, and we can&apos;t wait to see you
            again next year.
          </p>
        </div>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
}
