"use client";
import { useRef, useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

const UserProfileLinksSlider = () => {
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
  interface UserProfileLinksSliderProps {
    children: ReactNode;
  }
  const navItems = [
    {
      name: "Mitt konto",
      icon: "/assets/svg/profile/1.svg",
      activeIcon: "/assets/svg/profile/active-1.svg",
      href: "/mitt-konto",
    },
    {
      name: "Mina deals",
      icon: "/assets/svg/profile/2.svg",
      activeIcon: "/assets/svg/profile/active-2.svg",
      href: "/mitt-konto/mina-deals",
    },
    {
      name: "Sparade erbjudanden",
      icon: "/assets/svg/profile/3.svg",
      activeIcon: "/assets/svg/profile/active-3.svg",
      href: "/mitt-konto/sparade-erbjudanden",
    },
    {
      name: "Mina diskussioner",
      icon: "/assets/svg/profile/4.svg",
      activeIcon: "/assets/svg/profile/active-4.svg",
      href: "/mitt-konto/mina-diskussioner",
    },
    {
      name: "Inställningar",
      icon: "/assets/svg/profile/5.svg",
      activeIcon: "/assets/svg/profile/active-5.svg",
      href: "/mitt-konto/installningar",
    },
    {
      name: "Logga ut",
      icon: "/assets/svg/profile/6.svg",
      activeIcon: "/assets/svg/profile/active-6.svg",
      href: "/logga-ut",
    },
  ];

  return (
    <div className="relative flex justify-center items-center md:hidden">
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
          {navItems.map((item, index) => (
            <div className="scrollBox-item space--v-1" key={index}>
              <div className="text-nowrap whitespace-nowrap w-fit px-[12px] py-[8px] rounded-lg bg-dealguru-white">
                <Link
                  className="text-sm text-dealguru-blue font-bold"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfileLinksSlider;
