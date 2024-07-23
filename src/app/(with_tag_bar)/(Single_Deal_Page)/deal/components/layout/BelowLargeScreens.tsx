import React from "react";
import ImageCard from "../modules/ImageCard";
import InfoSection from "../modules/InfoSection";
import CompleteDetail from "../modules/CompleteDetail";
import CommentSection from "../modules/CommentSection";
import RelatedDealCard from "../common/RelatedDealCard";

const BelowLargeScreens = () => {
  return (
    <section className="flex flex-col gap-5 ">
      <div>
        <ImageCard />
        <InfoSection />
      </div>
      <div className="flex flex-col gap-5">
        <CompleteDetail />
        <CommentSection />
      </div>
      <div className="flex md:flex-col gap-5 overflow-scroll flex-row w-full snap-mandatory snap-x">
        <RelatedDealCard />
        <RelatedDealCard />
        <RelatedDealCard />
      </div>
    </section>
  );
};

export default BelowLargeScreens;
