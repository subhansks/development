"use client";
import React, { useContext, useEffect } from "react";
import HomeFilters from "./filters_home";
import HomeDealCard from "./home_deal_card";
import CarouselSlider from "./slider";
import LogoSlider from "../footer/logo_slider";
import { Context } from "@/context/ContextAPI";
import HomeDealCard_Grid from "./HomeDealCard_Grid";

const HomePageContent = () => {
  const { isGrid, setIsGrid } = useContext(Context);

  return (
    <div className={`${isGrid ? "col-span-7" : "md_lg:col-span-5 md:col-span-7 "} border-gray-300 rounded-lg`}>
      <div className="flex md:items-end justify-between md:flex-row flex-col items-start  gap-2 md:mb-0  min-h-11 ">
        <div className=" ">
          <h1 className="text-[1.3rem] not-italic text-dealguru-black font-bold antialiased">
            Bästa dealsen just nu
          </h1>
        </div>
        <HomeFilters setIsGrid={setIsGrid} />
      </div>
      <div className={`${isGrid ? "grid md:grid-cols-3 mb-4" : "grid grid-cols-1 md:grid-cols-1"} mt-3 gap-4`}>

        {/* This section of upper content is limited until carousel of contents maybe 6 - 10 feed components  */}
        {isGrid ? (
          Array(15).fill(1).map((item, index) => (
            <HomeDealCard_Grid />

          ))
        ) : (
          Array(3).fill(1).map((item, index) => (
            <HomeDealCard />
          ))
        )
        }

        {/* This is carousel slider */}
        <div className={` gap-3 flex-col ${isGrid ? 'hidden' : 'flex '} `}>
          <h1 className="text-[1.3rem] not-italic text-dealguru-black font-bold">
            Bästa dealsen just nu
          </h1>
          <CarouselSlider />
        </div>

        {/* This section is then flow of feed section which is unlimited */}
        {!isGrid && (

          Array(5).fill(1).map((item, index) => (
            <HomeDealCard />
          ))
        )
        }

        <div className={`mb-3 ${isGrid && 'hidden'}`}>
          <LogoSlider />
        </div>

      </div>
    </div>
  );
};

export default HomePageContent;
