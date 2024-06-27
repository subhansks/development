import React from "react";
import CommentSection from "../modules/CommentSection";

const RightDealDetailSection = () => {
  return (
    <section className="col-span-5 flex flex-col gap-5">
      <div className="bg-dealguru-white shadow-md shadow-gray-200 min-h-36 rounded-lg"></div>
      <div className="bg-dealguru-white shadow-md shadow-gray-200 min-h-dvh rounded-lg"></div>
      <div className="bg-dealguru-white shadow-md shadow-gray-200 min-h-96 rounded-lg"></div>
      <CommentSection />
    </section>
  );
};

export default RightDealDetailSection;
