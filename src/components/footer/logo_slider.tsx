"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Array of image objects
const images = [
  { src: "/assets/images/logos/adidas.jpg", alt: "Adidas" },
  { src: "/assets/images/logos/ahlens.png", alt: "Ahlens" },
  { src: "/assets/images/logos/apotek.png", alt: "Apotek" },
  { src: "/assets/images/logos/apple.png", alt: "Apple" },
  { src: "/assets/images/logos/xxl.jpg", alt: "XXL" },
  { src: "/assets/images/logos/hotels.jpg", alt: "Hotels" },
  { src: "/assets/images/logos/Ikea.png", alt: "Ikea" },
  { src: "/assets/images/logos/Lindex.png", alt: "Lindex" },
  { src: "/assets/imageslogos/xxl.jpg", alt: "XXL" },
  { src: "/assets/images/logos/hotels.jpg", alt: "Hotels" },
  { src: "/assets/images/logos/Ikea.png", alt: "Ikea" },
  { src: "/assets/images/logos/Lindex.png", alt: "Lindex" },
  { src: "/assets/images/logos/xxl.jpg", alt: "XXL" },
  { src: "/assets/images/logos/hotels.jpg", alt: "Hotels" },
  { src: "/assets/images/logos/Ikea.png", alt: "Ikea" },
  { src: "/assets/images/logos/Lindex.png", alt: "Lindex" },
  { src: "/assets/images/logos/xxl.jpg", alt: "XXL" },
  { src: "/assets/images/logos/hotels.jpg", alt: "Hotels" },
  { src: "/assets/images/logos/Ikea.png", alt: "Ikea" },
  { src: "/assets/images/logos/Lindex.png", alt: "Lindex" },
  { src: "/assets/images/logos/xxl.jpg", alt: "XXL" },
  { src: "/assets/images/logos/hotels.jpg", alt: "Hotels" },
  { src: "/assets/images/logos/Ikea.png", alt: "Ikea" },
  { src: "/assets/images/logos/Lindex.png", alt: "Lindex" },
];

function ImgGroup() {
  return (
    <>
      {images.map((image, index) => (
        <div className="scrollBox-item space--v-1" key={index}>
          <div className="text-nowrap max-w-24 max-h-9 whitespace-nowrap w-fit px-[12px] py-[8px] rounded-lg bg-dealguru-white flex justify-center items-center">
            <Link
              className="text-sm text-dealguru-blue font-bold"
              href={`/${image.src}`}
            >
              <Image
                width={100}
                height={0}
                className="h-auto grayscale opacity-60"
                alt={image.alt}
                src={image.src}
              />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default function LogoSlider() {
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
          className="z-10 w-5 md:block hidden bg-dealguru-white rounded-l-lg h-full hover:text-dealguru-white hover:bg-dealguru-blue absolute left-0"
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
          className=" z-10 w-5 md:block hidden bg-dealguru-white rounded-r-lg h-full hover:text-dealguru-white hover:bg-dealguru-blue absolute right-0"
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
      <div className=" scrollBox-space--s-s scrollBox-space--fromW3-m-s scrollBox-space--fromMaxPageWidth-remove flex width--all-12 boxAlign-ai--all-c">
        <div
          id="scrollContainer"
          ref={scrollContainerRef}
          className="py-5 bg-dealguru-white rounded-lg justify-center items-center scrollBox-container flex flex--grow-1 overflow--scrollX-raw hide-scrollbar carousel--isPrev carousel--isNext"
        >
          <ImgGroup />
        </div>
      </div>
    </div>
  );
}
