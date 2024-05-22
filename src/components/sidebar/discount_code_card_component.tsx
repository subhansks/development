import Image from "next/image";
import Link from "next/link";
import React from "react";

const Discount_code_card_component = () => {
  return (
    <>
      <div className="p-3 flex gap-3 justify-start items-start">
        {/* Card Image */}
        <Link href={"#"}>
          <Image
            src="/deal1.jpg"
            width={65}
            height={65}
            alt=""
            className=" min-w-[65px]  min-h-[65px] rounded-xl "
          />
        </Link>
        <div className=" flex flex-col gap-2  justify-start  ">
          {/* title here */}
          <p className=" text-base text-wrap leading-4 text-dealguru-black">
            XXXLutz: Sign up for the newsletter and get a SEK 50 coupon!
          </p>

          {/* Card category */}
          <div className="flex  gap-3  items-center">
            <Link
              className="w-[180px] bg-dealguru-blue text-white text-sm font-bold text-center p-1 rounded-md relative discount-code-button"
              href=""
            >
              Visa rabattkod
            </Link>
          </div>
        </div>
      </div>
      <hr className="mx-3 last_child_hr border-dealguru-grey" />
    </>
  );
};

export default Discount_code_card_component;
