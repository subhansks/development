import Category_slider from "@/components/homepage/category_slider";
import HomePageContent from "@/components/homepage/home_page_content";
import HomePageFilters from "@/components/homepage/home_page_content";
import Responsive_profile_name from "@/components/homepage/responsive_profile_name";
import Sidebar from "@/components/sidebar/sidebar";
import dynamic from "next/dynamic";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const CustomSlider = dynamic(
  () => import("@/components/homepage/custom_slider"),
  {
    suspense: true,
  }
);
export default function Home() {
  return (
    <main className="z-0 px-4  2xl:px-x-pad md:px-8 w-full mt-28 3xl:w-[1900px] 3xl:m-auto 3xl:mt-28">
      <Responsive_profile_name />
      {/* <Category_slider /> */}
      <Suspense
        fallback={<div className="bg-blue-400 text-yellow-300 z-50">test</div>}
      >
        <CustomSlider />
      </Suspense>

      <div className=" grid grid-cols-1  md:gap-5  md:grid-cols-7   w-full mt-5">
        <HomePageContent />

        <Sidebar />
      </div>
    </main>
  );
}
