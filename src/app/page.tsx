import Category_slider from "@/components/category_slider";
import HomePageContent from "@/components/home_page_content";
import HomePageFilters from "@/components/home_page_content";
import Sidebar from "@/components/sidebar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-x-pad w-full">
      <Category_slider />

      <div className="mt-4 desktop_view"></div>

      <div className=" grid grid-cols-1 gap-5 md:gap-14 xl:gap-7 xl:grid-cols-7 2xl:grid-cols-7 mb-5 pt-2 w-full">
        <HomePageContent />

        <Sidebar />
      </div>
    </main>
  );
}
