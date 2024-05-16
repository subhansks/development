"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function LogoSlider() {
  return (
    <Marquee className="  py-4 bg-dealguru-white flex justify-between rounded-lg">
      <div className="w-fit">
        <Image
          width={100}
          height={0}
          className="h-auto  grayscale opacity-60 "
          alt="logos"
          src={"/logos/adidas.jpg"}
        />
      </div>
      <div className="w-fit">
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 mr-6"
          alt="logos"
          src={"/logos/Adlibris.png"}
        />
      </div>
      <div className="w-fit">
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 mr-6"
          alt="logos"
          src={"/logos/ahlens.png"}
        />
      </div>
      <div className="w-fit">
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 mr-6"
          alt="logos"
          src={"/logos/apotek.png"}
        />
      </div>
      <div className="w-fit">
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 mr-6"
          alt="logos"
          src={"/logos/apple.png"}
        />
      </div>
      <div className="w-fit">
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 mr-6"
          alt="logos"
          src={"/logos/xxl.jpg"}
        />
      </div>
      <div className="w-fit">
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 mr-6"
          alt="logos"
          src={"/logos/hotels.jpg"}
        />
      </div>
      <div className="w-fit">
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 mr-6"
          alt="logos"
          src={"/logos/ikea.png"}
        />
      </div>
      <div className="w-fit">
        <Image
          width={100}
          height={0}
          className="h-auto grayscale opacity-60 mr-6"
          alt="logos"
          src={"/logos/Lindex.png"}
        />
      </div>
    </Marquee>
  );
}
