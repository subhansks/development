import ScrollSlider from "@/components/homepage/custom_slider";
import HomePageContent from "@/components/homepage/homePage";
import Responsive_profile_name from "@/components/homepage/responsive_profile_name";
import Sidebar from "@/components/sidebar/sidebar";
import { HomePageData } from "@/server/actions/HomePageData";
import { HomePageProps } from "@/types/HomePageTypes";
import { Suspense } from "react";
import Loading from "./components/layout/Loading";
import MainData from "./components/layout/MainData";

// export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <main className="z-0 px-4  2xl:px-x-pad md:px-8 w-full mt-28 3xl:w-[1900px] 3xl:m-auto 3xl:mt-28">
      <Responsive_profile_name />

      <ScrollSlider />

      <div className=" grid grid-cols-1  gap-5 md:gap-14 md_lg:gap-7  md:grid-cols-7   w-full mt-5">
        <div className="md_lg:col-span-5 md:col-span-7 flex flex-col gap-5">
          <Suspense fallback={<Loading />}>
            <MainData />
          </Suspense>
        </div>

        <Sidebar />
      </div>
    </main>
  );
}
