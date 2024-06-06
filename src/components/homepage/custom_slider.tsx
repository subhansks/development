"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const category = [
  "Presenter",
  "Gratisprover",
  "Elektronik",
  "TV",
  "Grillar",
  "Skor",
  "Robotdammsugare",
  "Kuponger",
  "Jackor",
  "Kläder",
  "Kroppsvård",
  "Trädgård",
  "Parfymer",
  "Resor",
  "Ekonomi",
  "Robotdammsugare",
  "Kuponger",
  "Jackor",
  "Kläder",
  "Kroppsvård",
  "Trädgård",
  "Parfymer",
  "Resor",
  "Ekonomi",
  // Add more categories as needed
];

export default function CustomSlider() {
  const [perMove, setPerMove] = useState(10);
  const splideRef = useRef<any>(null);

  useEffect(() => {
    const updatePerMove = () => {
      if (splideRef.current && splideRef.current.splide) {
        const splide = splideRef.current.splide;
        const slides = splide.Components.Elements.slides;
        const visibleSlides = slides.filter((slide: HTMLElement) =>
          slide.classList.contains("is-visible")
        ).length;
        setPerMove(visibleSlides);
      }
    };

    const splideInstance = splideRef.current && splideRef.current.splide;
    if (splideInstance) {
      splideInstance.on("moved", updatePerMove);
      splideInstance.on("resized", updatePerMove);
      updatePerMove();
    }

    return () => {
      if (splideInstance) {
        splideInstance.off("moved", updatePerMove);
        splideInstance.off("resized", updatePerMove);
      }
    };
  }, []);

  const splideOptions = {
    height: "3rem",
    focus: "start",
    autoWidth: true,
    wheel: true,
    pagination: false,
    arrows: true,
    speed: 500,
    perPage: 10,
    perMove: perMove,
    drag: true,
  };

  return (
    <div className="mt-3">
      <Splide
        ref={splideRef}
        options={splideOptions}
        aria-label="Category Slider"
        className="h-11 bg-dealguru-grey w-full"
      >
        {category.map((d, index) => (
          <SplideSlide
            key={index}
            className="flex justify-center items-center h-2"
          >
            <div className="gap-3 flex justify-center items-center mr-4">
              <div className="text-nowrap whitespace-nowrap w-fit px-[12px] py-[8px] rounded-lg bg-dealguru-white">
                <Link
                  className="text-sm text-dealguru-blue font-bold"
                  href={`/${d}`}
                >
                  {d}
                </Link>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
