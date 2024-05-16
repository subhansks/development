import Category_slider from "@/components/category_slider";
import HomePageContent from "@/components/home_page_content";
import HomePageFilters from "@/components/home_page_content";
import Sidebar from "@/components/sidebar/sidebar";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-x-pad w-full">
      <Category_slider />

      <div className=" grid grid-cols-1 gap-5 md:gap-14 xl:gap-7 xl:grid-cols-7 2xl:grid-cols-7  w-full mt-5">
        <HomePageContent />

        <Sidebar />
      </div>
    </main>
  );
}
