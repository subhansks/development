import React from "react";
import FavDealCard from "./fav_deal_card_sidbar";

const Sidebar = () => {
  return (
    <div className="flex flex-col  border-white rounded-lg w-full mt-1 col-span-2">
      <h1 className="mogiles-filter-h3 text-lg  not-italic text-dealguru-black font-bold">
        Utvalda favoriter
      </h1>
      <div className=" bg-dealguru-white w-full rounded-lg mt-8">
        <FavDealCard />
        <FavDealCard />
        <FavDealCard />
        <FavDealCard />
        <FavDealCard />
        <FavDealCard />
        <FavDealCard />
        <FavDealCard />
        <FavDealCard />
        <FavDealCard />
        <FavDealCard />
        <FavDealCard />
        <FavDealCard />
        <FavDealCard />
        <FavDealCard />
      </div>
    </div>
  );
};

export default Sidebar;
