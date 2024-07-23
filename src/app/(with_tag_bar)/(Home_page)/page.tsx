import ScrollSlider from "@/components/homepage/custom_slider";
import HomePageContent from "@/components/homepage/homePage";
import Responsive_profile_name from "@/components/homepage/responsive_profile_name";
import Sidebar from "@/components/sidebar/sidebar";
import { HomePageData } from "@/server/actions/HomePageData";
import { HomePageProps } from "@/types/AllTypes";
import { Suspense } from "react";
import Loading from "./components/layout/Loading";
import MainData from "./components/layout/MainData";
import MainWrapperFunction from "@/lib/shared/WrapperFunctions/MainWrapperFunction";

// export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <MainWrapperFunction className="z-0 ">
      <Responsive_profile_name />

      <div className=" grid grid-cols-1  gap-5 md:gap-14 md_lg:gap-7  md:grid-cols-7   w-full mt-5">
        <div className="md_lg:col-span-5 md:col-span-7 flex flex-col gap-5">
          <Suspense fallback={<Loading />}>
            <MainData />
          </Suspense>
        </div>

        <Sidebar />
      </div>
    </MainWrapperFunction>
  );
}
