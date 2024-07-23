"use client";

import React, { useEffect, useRef, useState } from "react";
import ScrollSlider from "../components/layout/custom_slider";
import HeadingTop from "../components/common/HeadingTop";
import AlphabetsSection from "../components/common/AlphabetsSection";
import SortingSection from "../components/common/SortingSection";
import StoresSection from "../components/common/StoresSection";
import "./brands.css";
import MainWrapperFunction from "@/lib/shared/WrapperFunctions/MainWrapperFunction";

export default function DiscoverExclusive() {
  const ItemData = [
    { id: 0, text: "0-9" },
    { id: 1, text: "A" },
    { id: 3, text: "B" },
    { id: 4, text: "C" },
    { id: 5, text: "D" },
    { id: 6, text: "E" },
    { id: 7, text: "F" },
    { id: 8, text: "G" },
    { id: 9, text: "H" },
    { id: 10, text: "I" },
    { id: 11, text: "J" },
    { id: 12, text: "K" },
    { id: 13, text: "L" },
    { id: 14, text: "M" },
    { id: 15, text: "N" },
    { id: 16, text: "O" },
    { id: 17, text: "P" },
    { id: 18, text: "Q" },
    { id: 19, text: "R" },
    { id: 20, text: "S" },
    { id: 21, text: "T" },
    { id: 22, text: "U" },
    { id: 23, text: "V" },
    { id: 24, text: "W" },
    { id: 25, text: "X" },
    { id: 26, text: "Y" },
    { id: 27, text: "Z" },
  ];

  const ShopData = [
    { id: 0, img: "/assets/images/apc.png", text: "APC" },
    { id: 1, img: "/assets/images/aarke.jpg", text: "Ark" },
    { id: 2, img: "/assets/images/ab&f.jpg", text: "Abercrombie & Flitch" },
    { id: 3, img: "/assets/images/ay.png", text: "About you" },
    { id: 4, img: "/assets/images/acer.webp", text: "Acer" },
    { id: 5, img: "/assets/images/acne.jpg", text: "Acne Studio" },
    { id: 6, img: "/assets/images/aco.png", text: "ACO" },
    { id: 7, img: "/assets/images/addnature.png", text: "Addnature" },
    { id: 8, img: "/assets/images/adelberg.jpg", text: "Adelberg" },
    { id: 9, img: "/assets/images/adidas.jpg", text: "Adidas" },
    { id: 10, img: "/assets/images/adoore.jpg", text: "Adore" },
    { id: 11, img: "/assets/images/afound.png", text: "Afound" },
    { id: 12, img: "/assets/images/aliexpress.jpg", text: "AliExpress" },
    { id: 13, img: "/assets/images/alessi.jpg", text: "Alessi" },
    { id: 14, img: "/assets/images/alcon.png", text: "Alcon" },
  ];

  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { rootMargin: "-100px 0px 0px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <MainWrapperFunction className=" bg-dealguru-white ">
      <section ref={sectionRef} className="border-b-2 border-gray-200 pb-4">
        <div className="flex flex-col gap-6">
          <HeadingTop />
          <div
            ref={stickyRef}
            className={`flex items-center gap-3 transition-all duration-150 -mt-1 ${
              isSticky
                ? "fixed top-24 overflow-x-auto whitespace-nowrap py-3 left-0 w-full border-b border-t border-gray-200 bg-white shadow-md z-50 px-8 transition-opacity duration-300 opacity-100 2xl:px-x-pad"
                : "opacity-1 flex-wrap"
            }`}
          >
            <AlphabetsSection />
          </div>
          <SortingSection />
        </div>
      </section>

      <StoresSection />
    </MainWrapperFunction>
  );
}
