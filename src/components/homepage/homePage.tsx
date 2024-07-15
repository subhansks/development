"use client";
import React, { ReactNode, useContext } from "react";
import HomeFilters from "./filters_home";
import HomeDealCard from "./home_deal_card";
import CarouselSlider from "./slider";
import LogoSlider from "../footer/logo_slider";
import { Context } from "@/context/ContextAPI";
import HomeDealCard_Grid from "./HomeDealCard_Grid";
import { HomePageProps } from "@/types/HomePageTypes";
import { HomePageData } from "@/server/actions/HomePageData";

const HomePageContent = ({ topData, leastData }: any) => {
  const { isGrid, setIsGrid } = useContext(Context);

  return (
    <div
      className={`${
        isGrid ? "col-span-7" : "md_lg:col-span-5 md:col-span-7 "
      } border-gray-300 rounded-lg`}
    >
      <div className="flex md:items-end justify-between md:flex-row flex-col items-start  gap-2 md:mb-0  min-h-11 ">
        <div className=" ">
          <h1 className="text-[1.3rem] not-italic text-dealguru-black font-bold antialiased">
            Bästa dealsen just nu
          </h1>
        </div>
        <HomeFilters setIsGrid={setIsGrid} />
      </div>
      <div
        className={`${
          isGrid
            ? "grid md:grid-cols-3 mb-4 "
            : "grid grid-cols-1 md:grid-cols-1"
        } mt-3 gap-5`}
      >
        {/* This section of upper content is limited until carousel of contents maybe 6 - 10 feed components  */}
        {isGrid
          ? Array(15)
              .fill(1)
              .map((item, index) => <HomeDealCard_Grid />)
          : topData.map(
              (item: HomePageProps, index: number): ReactNode => (
                <HomeDealCard item={item} key={index} />
              )
            )}

        {/* This is carousel slider */}
        <div className={` gap-3 flex-col ${isGrid ? "hidden" : "flex "} `}>
          <h1 className="text-[1.3rem] not-italic text-dealguru-black font-bold">
            Bästa dealsen just nu
          </h1>
          <CarouselSlider />
        </div>

        {/* This section is then flow of feed section which is unlimited */}
        {!isGrid &&
          leastData.map(
            (item: any, index: number): ReactNode => (
              <HomeDealCard item={item} key={index} />
            )
          )}

        <button
          onClick={async () => {
            const d = await HomePageData();
            console.log(d);
          }}
          className="bg-dealguru-blue font-open_sans text-dealguru-white font-bold border border-gray-200 rounded-lg py-2 px-4"
        >
          Load More
        </button>
        <div className={`mb-3 ${isGrid && "hidden"}`}>
          <LogoSlider />
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
