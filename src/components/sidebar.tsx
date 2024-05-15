import React from "react";
import FavDealCard from "./fav_deal_card_sidbar";

const Sidebar = () => {
  return (
    <div className="flex flex-col  border-white rounded-lg w-full  col-span-2">
      <h1 className="flex h-12 items-center font-semibold text-[1.5rem] no-italic text-dealguru-black ">
        Utvalda favoriter
      </h1>
      <div className=" bg-dealguru-white w-full rounded-lg  mt-3">
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
