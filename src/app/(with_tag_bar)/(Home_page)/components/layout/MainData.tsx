import HomePageContent from "@/components/homepage/homePage";

// import { cookies } from "next/headers";
import React from "react";

const MainData = async () => {
  const response = await fetch("http://localhost:3000/api/home/", {
    next: { tags: ["data"], revalidate: 20 },
  });
  const res = await response.json();

  const [topRecommendationData, leastRecommendedData] = res.message;
  console.log(topRecommendationData);
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
