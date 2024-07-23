import ScrollSlider from "@/components/homepage/custom_slider";
import HomePageContent from "@/components/homepage/homePage";
import Responsive_profile_name from "@/components/homepage/responsive_profile_name";
import Sidebar from "@/components/sidebar/sidebar";
import React from "react";
import PageContent from "../components/layouts/PageContent";
import DealsSidebar from "../components/layouts/DealsSidebar";
import MainWrapperFunction from "@/lib/shared/WrapperFunctions/MainWrapperFunction";

const page = ({ params }: any) => {
  return (
    <MainWrapperFunction className="">
      <div className=" grid grid-cols-1  md:gap-5  md:grid-cols-7   w-full mt-5">
        <PageContent params={params} />

        <DealsSidebar />
      </div>
    </MainWrapperFunction>
  );
};

export default page;
