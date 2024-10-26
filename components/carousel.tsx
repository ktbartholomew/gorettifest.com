"use client";
import "./carousel.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Image from "next/image";
import { useEffect, useState } from "react";

const images: { src: string; alt: string }[] = [
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_1918.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_1928.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_1930.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_1935.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_1938.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_1955.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_1975.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_1978.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_1982.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_1988.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_1993.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_1996.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2000.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2007.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2011.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2012.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2019.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2031.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2062.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2106.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2116.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2145.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2149.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2152.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2154.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2161.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2165.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2166.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2178.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2179.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2188.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2194.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2199.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2206.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2212.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2224.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2228.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2248.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2256.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2258.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2264.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2278.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2292.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2293.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2298.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2316.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2319.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2331.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2333.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2335.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2341.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2343.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2346.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2348.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2352.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2356.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2363.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2368.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2372.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2376.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2387.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2390.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2392.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2396.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2400.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2403.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2408.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2413.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2429.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2450.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2457.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2463.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2493.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2602.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2651.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2662.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2672.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2682.jpg",
    alt: "",
  },
  {
    src: "https://kfpt3dd2rwiw8zff.public.blob.vercel-storage.com/IMG_2716.jpg",
    alt: "",
  },
];

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: true }),
    Fade({}),
  ]);

  const [slidesInView, setSlidesInView] = useState([0]);

  useEffect(() => {
    emblaApi?.on("slidesInView", (embla, event) => {
      setSlidesInView(embla.slidesInView());
    });
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container w-[320px] h-[214px] md:w-[700px] md:h-[469px] lg:h-[667px] lg:w-[1000px] xl:w-[1200px] xl:h-[804px] mx-auto">
        {images.map((i, idx) => (
          <div className="embla__slide" key={idx}>
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
