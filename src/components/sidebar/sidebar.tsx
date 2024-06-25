"use client";
import React, { useContext } from "react";
import FavDealCard from "./sidebar_fav_dealcard";
import DiscountCodeCard from "./sidebar_discount_code_card";
import Ad_Section from "./sidebar_ad";
import Sidebar_tags from "./sidebar_tags";
import { Context } from "@/context/ContextAPI";


const Sidebar = () => {
  const { isGrid } = useContext(Context);
  return (
    <div className={`${isGrid ? 'hidden' : 'md_lg:flex'}  hidden flex-col gap-4 border-white rounded-lg w-full  col-span-2 `}>
      <FavDealCard />

      <DiscountCodeCard />
      <Ad_Section />
      <Sidebar_tags />
    </div>
  );
};

export default Sidebar;
