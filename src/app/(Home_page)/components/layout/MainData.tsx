import HomePageContent from "@/components/homepage/homePage";
import { HomePageData } from "@/server/actions/HomePageData";
import { HomePageProps } from "@/types/HomePageTypes";
import React from "react";

const MainData = async () => {
  const [topRecommendationData, leastRecommendedData]: Array<HomePageProps> =
    await HomePageData();
  return (
    <>
      <HomePageContent
        topData={topRecommendationData}
        leastData={leastRecommendedData}
      />
    </>
  );
};

export default MainData;
