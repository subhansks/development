"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const SingleDealSlider = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [immediateActiveSlide, setImmediateActiveSlide] = useState(0);

  const category = [
    { name: "Presenter", image: "/assets/images/dealcard1.png" },
    { name: "Gratisprover", image: "/assets/images/dealcard1.png" },
    { name: "Elektronik", image: "/assets/images/dealcard1.png" },
    { name: "TV", image: "/assets/images/dealcard1.png" },
    // Add more items with images if necessary
  ];

  const scrollTo = (index: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      const targetPosition = index * container.clientWidth;
      setImmediateActiveSlide(index); // Set immediate active slide
      container.scrollTo({
        left: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, clientWidth } = container;
      const newActiveSlide = Math.round(scrollLeft / clientWidth);
      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide);
        setImmediateActiveSlide(newActiveSlide); // Sync immediate active slide
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleScroll = () => {
        requestAnimationFrame(checkScrollPosition);
      };

      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [activeSlide]);

  return (
    <div className="relative flex flex-col items-center bg-dealguru-white p-4 rounded-lg shadow-lg shadow-gray-200">
      <div className="relative flex justify-center items-center w-full">
        {activeSlide > 0 && (
          <button
            type="button"
            className="w-8 md:flex justify-center items-center hidden bg-dealguru-white rounded-lg h-8 border border-dealguru-black hover:text-dealguru-white hover:bg-dealguru-blue absolute left-0"
            onClick={() => scrollTo(activeSlide - 1)}
          >
            <Image
              src="/assets/svg/angle_right_slider.svg"
              width={20}
              height={20}
              alt="angle Icon"
              className="rotate-180"
            />
          </button>
        )}
        {activeSlide < category.length - 1 && (
          <button
            type="button"
            className="w-8 md:flex justify-center items-center hidden bg-dealguru-white rounded-lg h-8 border border-dealguru-black hover:text-dealguru-white hover:bg-dealguru-blue absolute right-0"
            onClick={() => scrollTo(activeSlide + 1)}
          >
            <Image
              src="/assets/svg/angle_right_slider.svg"
              width={20}
              height={20}
              alt="angle Icon"
            />
          </button>
        )}
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-scroll flex hide-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {category.map((d, index) => (
            <div
              className="flex-shrink-0 w-full flex justify-center items-center snap-center transition-transform duration-500 ease-in-out"
              key={index}
            >
              <div className="text-nowrap whitespace-nowrap w-full px-[12px] py-[8px]">
                <Image
                  src={d.image}
                  alt={d.name}
                  width={800}
                  height={450}
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-4 space-x-2">
        {category.map((d, index) => (
          <button
            key={index}
            className={`w-18 h-18 rounded-lg overflow-hidden ${
              index === immediateActiveSlide ? "border-2 border-dealguru-blue" : ""
            }`}
            onClick={() => scrollTo(index)}
          >
            <Image
              src={d.image}
              alt={d.name}
              width={60}
              height={60}
              className="object-cover"
            />
          </button>
        ))}
      </div>
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, and Opera */
        }
        .scroll-smooth {
          scroll-behavior: smooth;
        }
        .snap-mandatory {
          scroll-snap-type: x mandatory;
        }
        .snap-center {
          scroll-snap-align: center;
        }
        .transition-transform {
          transition: transform 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default SingleDealSlider;
