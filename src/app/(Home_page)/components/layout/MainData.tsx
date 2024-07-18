import HomePageContent from "@/components/homepage/homePage";
// import { cookies } from "next/headers";
import React from "react";

const MainData = async () => {
  // const [topRecommendationData, leastRecommendedData]: Array<HomePageProps> =
  //   await HomePageData();
  // const cookie = cookies();
  // console.log(cookie);
  const response = await fetch("http://localhost:3000/api/home/", {
    next: { tags: ["data"], revalidate: 20 },
  });
  const res = await response.json();
  // console.log(res.message);
  const [topRecommendationData, leastRecommendedData] = res.message;

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
