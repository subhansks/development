import Image from "next/image";
import Link from "next/link";
import React from "react";
import Discount_code_card_component from "./discount_code_card_component";

const DiscountCodeCard = () => {
  return (
    <div className="">
      <h1 className="flex h-11 items-end font-bold text-[1.5rem] no-italic text-dealguru-black ">
        Utvalda rabattkoder & deals
      </h1>
      <div className=" shadow-lg shadow-gray-200  bg-dealguru-white w-full rounded-lg  mt-3">
        <Discount_code_card_component />
        <Discount_code_card_component />
        <Discount_code_card_component />
        <Discount_code_card_component />◘
        <Discount_code_card_component />◘
        <Discount_code_card_component />
      </div>
    </div>
  );
};

export default DiscountCodeCard;
