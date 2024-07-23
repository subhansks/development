import React from "react";
import Discussion_Comment_Section_Structure from "../modules/Discussion_Comment_Section_Structure";

const Discussion_Comment_Section = ({ details }: any | undefined) => {
  return (
    <div className="md_lg:col-span-5 xl:col-span-7  border-gray-300 rounded-lg  ">
      <Discussion_Comment_Section_Structure details={details} />

      {/* <button className='border-dealguru-blue border rounded-lg py-2 px-4 mt-8 w-full bg-transparent font-light text-dealguru-blue'>Visa fler deals</button> */}
    </div>
  );
};

export default Discussion_Comment_Section;
