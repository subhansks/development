import React from "react";
import CommentSection from "../modules/CommentSection";
import InfoSection from "../modules/InfoSection";
import CompleteDetail from "../modules/CompleteDetail";

const RightDealDetailSection = () => {
  return (
    <section className="col-span-5 flex flex-col gap-5">
      <InfoSection />
      <CompleteDetail />
      <CommentSection />
    </section>
  );
};

export default RightDealDetailSection;
