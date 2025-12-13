import { Carousel } from "../carousel";
import { lilita } from "../font";

export function RecapSection() {
  // Pick a single, static "random" number. The slideshow will always be
  // shuffled but in one predictable order.
  const seed = Math.floor(0xf0e2b65c);
  return (
    <div id="recap" className="bg-slate-800 text-white py-0 md:py-16">
      <div className="flex items-center flex-col gap-8">
        <div className="text-center">
          <h2 className={`${lilita.className}`}>Until Next Year</h2>
          <p className="text-xl max-w-prose mx-auto">
            We’ve packed away the tents and rolled up the cables, but we’re
            already excited for what’s next. Until then, enjoy these highlights
            from the GorettiFest 2025.
          </p>
        </div>
        <div>
          <iframe
            className="max-w-[100vw] md:w-[900px] md:h-[506px]"
            width="900"
            height="506"
            src="https://www.youtube.com/embed/85zsHjPsGYE?si=Gy7NrVNJmL78_zDK"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <Carousel seed={seed} />
        </div>
      </div>
    </div>
  );
}
