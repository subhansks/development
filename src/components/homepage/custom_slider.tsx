"use client";

import { useRef, useState, useEffect, useCallback } from "react";
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
  // Add more categories as needed
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
          setAtStart(true);
          checkPosition();
        }
      }
    };

    calculateItemWidth();
    window.addEventListener("resize", calculateItemWidth);

    return () => {
      window.removeEventListener("resize", calculateItemWidth);
    };
  }, []);

  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const checkPosition = useCallback(() => {
    if (sliderRef.current) {
      const maxScrollLeft =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      const currentScrollLeft = sliderRef.current.scrollLeft;
      setAtStart(currentScrollLeft === 0);
      setAtEnd(currentScrollLeft >= maxScrollLeft - 1); // Adjust condition to handle float precision issues
    }
  }, []);

  const ensureItemVisibility = useCallback(() => {
    if (sliderRef.current) {
      const currentScrollLeft = sliderRef.current.scrollLeft;
      for (let i = 0; i < category.length; i++) {
        const item = sliderRef.current.querySelector(`#category-${i}`);
        if (item) {
          const itemRect = item.getBoundingClientRect();
          const sliderRect = sliderRef.current.getBoundingClientRect();
          if (
            itemRect.left < sliderRect.left &&
            itemRect.right > sliderRect.left
          ) {
            const newScrollPosition =
              currentScrollLeft + itemRect.left - sliderRect.left;
            sliderRef.current.scrollTo({
              left: newScrollPosition,
              behavior: "smooth",
            });
            break;
          }
        }
      }
      checkPosition();
    }
  }, [checkPosition]);

  const scrollNext = () => {
    if (sliderRef.current) {
      const currentScrollLeft = sliderRef.current.scrollLeft;
      const maxScrollLeft =
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      const newScrollPosition = Math.min(
        currentScrollLeft + itemWidth * visibleItems,
        maxScrollLeft
      );
      sliderRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
      setTimeout(() => {
        ensureItemVisibility();
        checkPosition();
      }, 350);
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      const currentScrollLeft = sliderRef.current.scrollLeft;
      const newScrollPosition = Math.max(
        currentScrollLeft - itemWidth * visibleItems,
        0
      );
      sliderRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
      setTimeout(() => {
        ensureItemVisibility();
        checkPosition();
      }, 350);
    }
  };

  const handleScroll = debounce(() => {
    ensureItemVisibility();
    checkPosition();
  }, 200);

  return (
    <div className="relative mt-3">
      <div
        ref={sliderRef}
        className="overflow-x-scroll flex gap-3 pl-0 hide-scrollbar mx-8"
        style={{ scrollBehavior: "smooth" }}
        onScroll={handleScroll}
      >
        {category.map((d, index) => (
          <div
            className="flex w-fit pl-0"
            key={index}
            data-index={index}
            id={`category-${index}`}
          >
            <div
              className="text-nowrap whitespace-nowrap w-fit px-[12px] py-[8px] rounded-lg bg-dealguru-white"
              style={{ marginLeft: index === 0 ? "5px" : "0" }}
            >
              <Link
                className="text-sm text-dealguru-blue font-bold"
                href={`/${d}`}
              >
                {d}-{index}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={scrollPrev}
        disabled={atStart}
        className={`absolute left-0 z-10 bg-dealguru-blue hidden md:block h-full text-white px-2 py-1 rounded-lg ${
          atStart ? "opacity-0 cursor-not-allowed" : ""
        }`}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        {"<"}
      </button>
      <button
        onClick={scrollNext}
        disabled={atEnd}
        className={`absolute right-0 z-10 bg-dealguru-blue hidden md:block h-full text-white px-2 py-1 rounded-lg ${
          atEnd ? "opacity-0 cursor-not-allowed" : ""
        }`}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        {">"}
      </button>
    </div>
  );
}
