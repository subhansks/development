import ScrollSlider from "@/components/homepage/custom_slider";
import HomePageContent from "@/components/homepage/homePage";
import Responsive_profile_name from "@/components/homepage/responsive_profile_name";
import Sidebar from "@/components/sidebar/sidebar";
import { HomePageData } from "@/server/actions/HomePageData";
import { HomePageProps } from "@/types/HomePageTypes";

export default async function Home() {
  const [topRecommendationData, leastRecommendedData]: Array<HomePageProps> =
    await HomePageData();

  return (
    <main className="z-0 px-4  2xl:px-x-pad md:px-8 w-full mt-28 3xl:w-[1900px] 3xl:m-auto 3xl:mt-28">
      <Responsive_profile_name />

      <ScrollSlider />

      <div className=" grid grid-cols-1  gap-5 md:gap-14 md_lg:gap-7  md:grid-cols-7   w-full mt-5">
        <HomePageContent
          topData={topRecommendationData}
          leastData={leastRecommendedData}
        />

        <Sidebar />
      </div>
    </main>
  );
}
