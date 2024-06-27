import React from "react";
import ImageCard from "../modules/ImageCard";
import RelatedDealCard from "../common/RelatedDealCard";

const LeftDealSection = () => {
  return (
    <section className="col-span-4 flex flex-col gap-5">
      <ImageCard />
      <div className="flex flex-col gap-5">
        <p className="font-bold text-lg -mb-2">
          Andra bra deals som vi tror att du kommer gilla
        </p>
        <RelatedDealCard />
        <RelatedDealCard />
      </div>
    </section>
  );
};

export default LeftDealSection;
