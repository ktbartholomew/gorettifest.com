"use client";
import "./carousel.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";

const images: { src: string; alt: string }[] = [
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02459.jpg",
    alt: "Man wearing a wide-brim hat and red vest talking on a phone while standing in front of outdoor event booths and tents.",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02509.jpg",
    alt: "Children playing a colorful outdoor carnival game at a community festival with tents and activities in the background.",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02515.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02539.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02548.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02551.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02556.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02572.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02589.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02601.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02625.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02632.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02647.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02688.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02714.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02718.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02754.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02771.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02785.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02788.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02837.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02851.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02863.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02882.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02929.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02933.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02953.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02959.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02983.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02995.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG02997.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03009.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03016.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03023.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03041.jpg",
    alt: "Firefighter showing children the tools and equipment stored in a red fire truck at a community event.",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03048.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03058.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03065.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03078.jpg",
    alt: "Young musician singing into a microphone while playing a blue acoustic-electric guitar at an outdoor event.",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03084.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03086.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03088.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03105.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03118.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03129.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03166.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03170.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03174.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03191.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03205.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03209.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03219.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03230.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03237.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03249.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03260.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03279.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03295.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03333.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03342.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03347.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03356.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03361.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03370.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03381.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03401.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03423.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03470.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03531.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03543.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03564.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03601.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03610.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03714.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03720.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03731.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03745.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03753.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03950.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03960.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03984.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03986.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03990.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03995.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG03997.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04002.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04004.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04006.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04024.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04029.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04035.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04045.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04082.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04125.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04157.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04181.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04209.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04225.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04322.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04335.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04389.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04410.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04434.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/2025/event/stills/IMG04567.jpg",
    alt: "",
  },
];

// Fisher–Yates shuffle — returns a new shuffled array without mutating the original
function shuffle<T>(arr: T[]) {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// xmur3 string hash -> uint32
function xmur3(str: string) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}

// mulberry32 seeded RNG
function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// shuffle with deterministic seeded RNG
function shuffleWithSeed<T>(arr: T[], seed: string | number) {
  // Convert seed to uint32
  let seedNumber: number;
  if (typeof seed === "number") {
    seedNumber = seed >>> 0;
  } else {
    const h = xmur3(seed)();
    seedNumber = h >>> 0;
  }
  const rng = mulberry32(seedNumber);
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function Carousel({
  randomize = true,
  seed,
}: {
  randomize?: boolean;
  seed?: number | string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
    Fade({}),
  ]);

  const [slidesInView, setSlidesInView] = useState([0]);

  useEffect(() => {
    emblaApi?.on("slidesInView", (embla, event) => {
      setSlidesInView(embla.slidesInView());
    });
  }, [emblaApi]);

  // Shuffle once per mount (useMemo with empty deps) so order is randomized but stable across renders
  const shuffledImages = useMemo(() => {
    if (!randomize) return images.slice();
    if (seed !== undefined) return shuffleWithSeed(images, seed);
    return shuffle(images);
  }, [randomize, seed]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container w-[320px] h-[214px] md:w-[700px] md:h-[469px] lg:h-[667px] lg:w-[1000px] xl:w-[1200px] xl:h-[804px] mx-auto">
        {shuffledImages.map((i, idx) => (
          <div className="embla__slide" key={i.src}>
            <Image
              src={i.src}
              alt={i.alt}
              fill={true}
              loading={
                slidesInView.some((si) => {
                  return Math.abs(si - idx) < 2;
                })
                  ? "eager"
                  : "lazy"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
