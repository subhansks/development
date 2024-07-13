"use client";
import { useRef, useState, useEffect } from "react";

import Image from "next/image";
import SingleBlogSliderCard from "./Single_blog_slider_card";

const SingleBlogSlider = () => {
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

  return (
    <div className="relative flex justify-center items-center">
      {isPrevVisible && (
        <button
          id="prevButton"
          type="button"
          className="w-12 h-12  justify-center items-center md:flex hidden rounded-full  bg-gray-200/40 hover:text-dealguru-white hover:bg-dealguru-white/100 absolute left-2"
          onClick={() => scrollTo(-1)}
        >
          <Image
            src="/assets/svg/mediaCard_slider_arrow.svg"
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
          className="w-12 h-12  justify-center items-center md:flex hidden rounded-full  bg-gray-200/40 hover:text-dealguru-white hover:bg-dealguru-white/100 absolute right-2"
          onClick={() => scrollTo(1)}
        >
          <Image
            src="/assets/svg/mediaCard_slider_arrow.svg"
            width={20}
            height={20}
            alt="angle Icon"
            className=""
          />
        </button>
      )}
      <div className="scrollBox-space--s-s scrollBox-space--fromW3-m-s scrollBox-space--fromMaxPageWidth-remove flex width--all-12 boxAlign-ai--all-c">
        <div
          id="scrollContainer"
          ref={scrollContainerRef}
          className="scrollBox-container overflow--avoid-vClip flex flex--grow-1 overflow--scrollX-raw hide-scrollbar carousel--isPrev carousel--isNext"
        >
          <div className="scrollBox-item space--v-1">
            <SingleBlogSliderCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogSlider;
