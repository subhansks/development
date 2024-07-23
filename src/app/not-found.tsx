import ScrollSlider from "@/components/homepage/custom_slider";
import LayoutWrapper from "@/lib/shared/WrapperFunctions/LayoutWrapper";
import MainWrapperFunction from "@/lib/shared/WrapperFunctions/MainWrapperFunction";
import Image from "next/image";
import React from "react";

const not_found = () => {
  return (
    <LayoutWrapper className="">
      <ScrollSlider />
      <div className=" min-h-[80vh] flex md:flex-row flex-col-reverse items-center justify-between m-9 gap-12">
        <div className="basis-2/5 flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Sidan hittades inte</h2>
          <p className="text-gray-400 text-lg ">
            Vi hittade inte sidan du letade efter. Försök att söka eller se våra
            bästa erbjudanden
          </p>
          <div className="flex gap-1 mt-4">
            <input
              type="text"
              className="w-full border border-gray-300 px-3 rounded-md ring-0"
              placeholder="Skriv det du söker..."
            />
            <button className="bg-dealguru-black py-3 px-5 rounded-md text-white font-open_sans text-sm">
              Sök
            </button>
          </div>
        </div>
        <div className="basis-3/5">
          <Image
            width={800}
            height={0}
            className="w-full object-scale-down h-auto"
            alt="Not found image"
            src={"/assets/images/not-found.png"}
          />
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default not_found;
