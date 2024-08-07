import React from "react";
import Kopguider_single_header from "../../components/layout/Kopguider_single_header";
import Kopguider_sidebar from "../../components/layout/Kopguider_sidebar";
import KopguiderLeftSection from "../../components/layout/KopguiderLeftSection";
import SingleBlogSlider from "../../components/common/Single_blog_slider";
import "../kopguider.css";
import MainWrapperFunction from "@/lib/shared/WrapperFunctions/MainWrapperFunction";

const page = ({ params }: any) => {
  const details = params.extended_details;
  return (
    <MainWrapperFunction className=" s-blog">
      <div className="py-1">
        <Kopguider_single_header />
        <div className="flex gap-8 md:mt-5 md:flex-row flex-col">
          <KopguiderLeftSection />
          <Kopguider_sidebar />
        </div>
        <div className={` gap-6 flex-col mt-5 mb-5 pb-5`}>
          <h3 className="text-2xl text-gray-800 font-bold mt-8 mb-3">
            Du kanske gillar dessa artiklar?
          </h3>
          <SingleBlogSlider />
        </div>
      </div>
    </MainWrapperFunction>
  );
};

export default page;
