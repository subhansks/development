import React from "react";
import HomeFilters from "./filters_home";
import HomeDealCard from "./home_deal_card";

const HomePageContent = () => {
  return (
    <div className="xl:col-span-5 2xl:col-span-5  border-gray-300 rounded-lg">
      <div className="flex items-center justify-between mb-3  ">
        <div className="mobile-filters-heading  ">
          <h1 className="mogiles-filter-h3 text-[1.5rem] not-italic text-dealguru-black font-semibold">
            Bästa dealsen just nu
          </h1>
        </div>
        <HomeFilters />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-1 mt-6 ">
        <HomeDealCard />
      </div>
    </div>
  );
};

export default HomePageContent;
