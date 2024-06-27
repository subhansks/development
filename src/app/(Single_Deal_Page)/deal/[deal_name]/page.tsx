import ScrollSlider from "@/components/homepage/custom_slider";
import React from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import LeftDealSection from "../components/layout/LeftDealSection";
import RightDealDetailSection from "../components/layout/RightDealDetailSection";

const page = ({ params }: any) => {
  return (
    <section className="min-h-screen z-0 px-4  2xl:px-x-pad md:px-8 w-full mt-28 3xl:w-[1900px] 3xl:m-auto 3xl:mt-28">
      <ScrollSlider />
      <div className="mt-3">
        <BreadCrumbs />
      </div>

      {/* Above large screens */}
      <div className="mt-3 lg:grid hidden lg:grid-cols-9 mb-14 gap-5 ">
        <LeftDealSection />
        <RightDealDetailSection />
      </div>
    </section>
  );
};

export default page;
