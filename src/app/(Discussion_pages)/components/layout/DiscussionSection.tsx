import React from "react";
import Discussion_Section_Structure from "../modules/Discussion_Section_Structure";

const DiscussionSection = ({ details }: any | undefined) => {
  return (
    <div className="md_lg:col-span-5 xl:col-span-7  border-gray-300 rounded-lg  ">
      <Discussion_Section_Structure details={details} />

      <button className="border-dealguru-blue border rounded-lg py-2 px-4 mt-8 w-full bg-transparent font-light text-dealguru-blue">
        Visa fler deals
      </button>
    </div>
  );
};

export default DiscussionSection;
