import React from "react";
import ImageCard from "../modules/ImageCard";
import RelatedDealCard from "../common/RelatedDealCard";

const LeftDealSection = () => {
  return (
    <section className="col-span-4 flex flex-col gap-5">
      <ImageCard />
      <RelatedDealCard />
      <RelatedDealCard />
    </section>
  );
};

export default LeftDealSection;
