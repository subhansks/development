import ScrollSlider from "@/components/homepage/custom_slider";
import React from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import LeftDealSection from "../components/layout/LeftDealSection";
import RightDealDetailSection from "../components/layout/RightDealDetailSection";
import BelowLargeScreens from "../components/layout/BelowLargeScreens";
import MainWrapperFunction from "@/lib/shared/WrapperFunctions/MainWrapperFunction";

// function delay() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(void 0);
//     }, 15000);
//   });
// }

const page = async ({ params }: any) => {
  // await delay();
  return (
    <MainWrapperFunction className="">
      <div className="mt-3 ">
        <BreadCrumbs />
      </div>

      {/* Above large screens */}
      <div className="mt-3 lg:grid hidden lg:grid-cols-9 mb-14 gap-5 ">
        <LeftDealSection />
        <RightDealDetailSection />
      </div>

      {/* Below large screens */}
      <div className="mt-3 lg:hidden flex flex-col mb-14 gap-5 ">
        <BelowLargeScreens />
      </div>
    </MainWrapperFunction>
  );
};

export default page;
