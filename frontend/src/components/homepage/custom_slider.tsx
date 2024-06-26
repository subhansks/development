"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const ScrollSlider = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPrevVisible, setIsPrevVisible] = useState(false);
  const [isNextVisible, setIsNextVisible] = useState(true);

  const scrollTo = (direction: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const containerWidth = container.clientWidth;
      container.scrollBy({
        left: direction * containerWidth,
        behavior: "smooth",
      });
      setTimeout(checkScrollPosition, 500); // Check position after scroll animation
    }
  };

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, clientWidth, scrollWidth } = container;
      setIsPrevVisible(scrollLeft > 0);
      setIsNextVisible(scrollLeft + clientWidth < scrollWidth - 1); // Adjusted to ensure accurate comparison
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleScroll = () => {
        requestAnimationFrame(checkScrollPosition);
      };

      container.addEventListener("scroll", handleScroll);
      checkScrollPosition(); // Initial check

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

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
    "Jackor",
    "Kläder",
    "Kroppsvård",
    "Trädgård",
    "Parfymer",
    "Resor",
    // Add more items if necessary
  ];

  return (
    <div className="relative flex justify-center items-center">
      {isPrevVisible && (
        <button
          id="prevButton"
          type="button"
          className="w-5 md:block hidden bg-dealguru-white rounded-l-lg h-10 hover:text-dealguru-white hover:bg-dealguru-blue absolute left-0"
          onClick={() => scrollTo(-1)}
        >
          <Image
            src="/assets/svg/angle_right_slider.svg"
            width={20}
            height={20}
            alt="angle Icon"
            className="rotate-180 "
          />
        </button>
      )}
      {isNextVisible && (
        <button
          id="nextButton"
          type="button"
          className="w-5 md:block hidden bg-dealguru-white rounded-r-lg h-10 hover:text-dealguru-white hover:bg-dealguru-blue absolute right-0"
          onClick={() => scrollTo(1)}
        >
          <Image
            src="/assets/svg/angle_right_slider.svg"
            width={20}
            height={20}
            alt="angle Icon"
            className=" "
          />
        </button>
      )}
      <div className="md:px-6 px-0 scrollBox-space--s-s scrollBox-space--fromW3-m-s scrollBox-space--fromMaxPageWidth-remove flex width--all-12 boxAlign-ai--all-c">
        <div
          id="scrollContainer"
          ref={scrollContainerRef}
          className="scrollBox-container overflow--avoid-vClip flex flex--grow-1 overflow--scrollX-raw hide-scrollbar carousel--isPrev carousel--isNext"
        >
          {category.map((d, index) => (
            <div className="scrollBox-item space--v-1" key={index}>
              <div className="text-nowrap whitespace-nowrap w-fit px-[12px] py-[8px] rounded-lg bg-dealguru-white">
                <Link
                  className="text-sm text-dealguru-blue font-bold"
                  href={`/deals/${d}`}
                >
                  {d}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSlider;
