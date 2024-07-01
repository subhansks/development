import React from "react";
import Kopguider_Comment_Section_Structure from "../modules/Kopguider_Comment_Section_Structure";
import Comments_Add_Comments_Structure from "../modules/Comments_Add_Comments_Structure";

const Kopguider_Comment_Section = ({ details }: any | undefined) => {
  return (
    <div className="md_lg:col-span-5 xl:col-span-7 border-gray-300 rounded-lg">
      <Comments_Add_Comments_Structure />
      <Kopguider_Comment_Section_Structure details={details} />
    </div>
  );
};

export default Kopguider_Comment_Section;
