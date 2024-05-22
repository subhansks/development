import Category_slider from "@/components/category_slider";
import HomePageContent from "@/components/home_page_content";
import HomePageFilters from "@/components/home_page_content";
import Responsive_profile_name from "@/components/homepage/responsive_profile_name";
import Sidebar from "@/components/sidebar/sidebar";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="z-0 px-4 md:px-8  md_lg:px-x-pad w-full mt-28">
      <Responsive_profile_name />

      <Category_slider />

      <div className=" grid grid-cols-1  md:gap-5  md:grid-cols-7   w-full mt-5">
        <HomePageContent />

        <Sidebar />
      </div>
    </main>
  );
}
