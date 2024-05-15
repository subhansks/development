import React from "react";
import FavDealCard from "./fav_deal_card_sidbar";

const Sidebar = () => {
  return (
    <div className="flex flex-col  border-white rounded-lg w-full  col-span-2">
      <h1 className="flex h-11 items-center font-bold text-[1.5rem] no-italic text-dealguru-black ">
        Utvalda favoriter
      </h1>
      <div className=" shadow-lg shadow-gray-200  bg-dealguru-white w-full rounded-lg  mt-4">
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
