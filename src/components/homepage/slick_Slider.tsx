// carousel.tsx
"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  "Jackor",
  "Kläder",
  "Kroppsvård",
  "Trädgård",
  "Parfymer",
  "Resor",
  "Ekonomi",
];
function Slick_Slider() {
  const settings = {
    // dots: true,

    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,

    variableWidth: true,
    slidesToScroll: 3,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var number = 0;
  for (var i = 0; i < 1; i++) {
    number++;
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {category.map((d, index) => (
          <div className=" flex  w-fit  pl-0 " key={index}>
            <div className=" text-nowrap  whitespace-nowrap w-fit px-[12px] py-[8px] rounded-lg bg-dealguru-white">
              <Link
                className="text-sm text-dealguru-blue font-bold"
                href={`/${d}`}
              >
                {" "}
                {d}
                {number++}
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slick_Slider;
