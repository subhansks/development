import React from "react";
import Fav_dealcard_component from "./fav_dealcard_component";

const FavDealCard = () => {
  return (
    <div className="">
      <h1 className="flex h-11 items-end font-bold text-[1.5rem] no-italic text-dealguru-black ">
        Utvalda favoriter
      </h1>
      <div className=" shadow-lg shadow-gray-200  bg-dealguru-white w-full rounded-lg  mt-3">
        <Fav_dealcard_component />
        <Fav_dealcard_component />
        <Fav_dealcard_component />
        <Fav_dealcard_component />
        <Fav_dealcard_component />
      </div>
    </div>
  );
};

export default FavDealCard;
