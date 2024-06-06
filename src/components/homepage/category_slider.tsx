"use client";
import React, { useRef } from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const categories = [
  "Presenter",
  "Gratisprover",
  "Elektronik",
  "TV",
  "Grillar",
  "Skor",
  "Smartphones & Mobiltelefoner",
  "Robotdammsugare",
  "Kuponger",
  "Jackor",
  "Kläder",
  "Kroppsvård",
  "Trädgård",
  "Parfymer",
  "Resor",
  "Ekonomi",
  "Jackor",
  "Kläder",
  "Kroppsvård",
  "Trädgård",
  "Parfymer",
  "Resor",
  "Ekonomi",
];

export default function CategorySlider() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <Carousel className="mt-3 ml-12 mr-12">
      <CarouselContent
        ref={carouselRef}
        className="ml-0 flex gap-3 overflow-hidden"
      >
        {categories.map((category, index) => (
          <CarouselItem className="flex w-fit pl-0" key={index}>
            <div className="text-nowrap whitespace-nowrap w-fit px-[12px] py-[8px] rounded-lg bg-dealguru-white">
              <Link
                className="text-sm text-dealguru-blue font-bold"
                href={`/${category}`}
              >
                {category}
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        onClick={handlePrevious}
        className="rounded-lg h-10 hover:text-dealguru-white hover:bg-dealguru-blue"
      >
        Previous
      </CarouselPrevious>
      <CarouselNext
        onClick={handleNext}
        className="rounded-lg h-10 hover:text-dealguru-white hover:bg-dealguru-blue"
      >
        Next
      </CarouselNext>
    </Carousel>
  );
}
