import React from "react";
import KopguiderSection from "../components/layout/KopguiderSection";
import Kopguider_sidebar from "../components/layout/Kopguider_sidebar";
import Kopguider_header from "../components/layout/Kopguider_header";
import "./kopguider.css";
import MainWrapperFunction from "@/lib/shared/WrapperFunctions/MainWrapperFunction";
const page = () => {
  return (
    <MainWrapperFunction className="z-0 mob-white">
      <div className="py-5">
        <Kopguider_header />
        <div className="flex gap-8 md:mt-5 mt-5 md:flex-row flex-col pt-5 cpt-0 cgap-0">
          <KopguiderSection />
          <div className="pt-6">
            <Kopguider_sidebar />
          </div>
        </div>
      </div>
    </MainWrapperFunction>
  );
};

export default page;
