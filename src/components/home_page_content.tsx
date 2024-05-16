import React from "react";
import HomeFilters from "./filters_home";
import HomeDealCard from "./home_deal_card";

const HomePageContent = () => {
  return (
    <div className="xl:col-span-5 2xl:col-span-5  border-gray-300 rounded-lg">
      <div className="flex items-end justify-between    h-11">
        <div className=" ">
          <h1 className="text-[1.5rem] not-italic text-dealguru-black font-bold">
            Bästa dealsen just nu
          </h1>
        </div>
        <HomeFilters />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-1 mt-3 gap-4">
        <HomeDealCard />
        <HomeDealCard />
        <HomeDealCard />
        <HomeDealCard />
      </div>
    </div>
  );
};

export default HomePageContent;
