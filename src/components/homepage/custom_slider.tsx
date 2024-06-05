"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const category = [
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
  "Robotdammsugare",
  "Kuponger",
  "Jackor",
  "Kläder",
  "Kroppsvård",
  "Trädgård",
  "Parfymer",
  "Resor",
  "Ekonomi",
  // Repeated items removed for brevity
];

export default function CustomSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [visibleItems, setVisibleItems] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const calculateItemWidth = () => {
      if (sliderRef.current) {
        const firstItem = sliderRef.current.querySelector("div > div");
        if (firstItem) {
          const itemWidthWithGap = firstItem.clientWidth + 12; // Add 12 for gap between items
          setItemWidth(itemWidthWithGap);
          const containerWidth = sliderRef.current.clientWidth;
          const visibleItemsCount = Math.floor(
            containerWidth / itemWidthWithGap
          );
          setVisibleItems(visibleItemsCount);
          console.log(`Number of visible items: ${visibleItemsCount}`);
          setAtStart(true);
          checkPosition();
        }
      }
    };

    setTimeout(calculateItemWidth, 0);
    window.addEventListener("resize", calculateItemWidth);

    return () => {
      window.removeEventListener("resize", calculateItemWidth);
    };
  }, []);

  const checkPosition = () => {
    if (sliderRef.current) {
      const maxScrollLeft =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      const currentScrollLeft = sliderRef.current.scrollLeft;
      setAtStart(currentScrollLeft === 0);
      setAtEnd(currentScrollLeft >= maxScrollLeft - 1); // Adjust condition to handle float precision issues
      logCutOffTags();
    }
  };

  const logCutOffTags = () => {
    if (sliderRef.current) {
      const currentScrollLeft = sliderRef.current.scrollLeft;
      const containerWidth = sliderRef.current.clientWidth;

      category.forEach((d, index) => {
        const tag = sliderRef.current!.querySelector(
          `div[data-index="${index}"]`
        ) as HTMLElement;
        if (tag) {
          const tagRect = tag.getBoundingClientRect();
          const sliderRect = sliderRef.current!.getBoundingClientRect();
          const tagLeft = tagRect.left - sliderRect.left;
          const tagRight = tagLeft + tagRect.width;

          if (
            tagLeft < currentScrollLeft ||
            tagRight > currentScrollLeft + containerWidth
          ) {
            console.log(`Tag "${d}-${index + 1}" is being cut off.`);
          }
        }
      });
    }
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      const newScrollPosition =
        sliderRef.current.scrollLeft + itemWidth * visibleItems;
      sliderRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
      // Immediate checkPosition to ensure correct button state
      setTimeout(checkPosition, 350);
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      const newScrollPosition =
        sliderRef.current.scrollLeft - itemWidth * visibleItems;
      sliderRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
      // Immediate checkPosition to ensure correct button state
      setTimeout(checkPosition, 350);
    }
  };

  return (
    <div className="relative mt-3">
      <div
        ref={sliderRef}
        className="overflow-x-scroll flex gap-3 pl-0 hide-scrollbar"
        style={{ scrollBehavior: "smooth" }}
        onScroll={checkPosition}
      >
        {category.map((d, index) => (
          <div className="flex w-fit pl-0" key={index} data-index={index}>
            <div
              className="text-nowrap whitespace-nowrap w-fit px-[12px] py-[8px] rounded-lg bg-dealguru-white"
              style={{ marginLeft: index === 0 ? "5px" : "0" }}
            >
              <Link
                className="text-sm text-dealguru-blue font-bold"
                href={`/${d}`}
              >
                {d}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={scrollPrev}
        disabled={atStart}
        className={`absolute left-0 z-10 bg-dealguru-blue hidden md:block h-full text-white px-2 py-1 rounded-lg ${
          atStart ? "opacity-0 cursor-not-allowed hidden " : ""
        }`}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        {"<"}
      </button>
      <button
        onClick={scrollNext}
        disabled={atEnd}
        className={`absolute right-0 z-10 bg-dealguru-blue hidden md:block h-full text-white px-2 py-1 rounded-lg ${
          atEnd ? "opacity-0 cursor-not-allowed hidden" : ""
        }`}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        {">"}
      </button>
    </div>
  );
}
