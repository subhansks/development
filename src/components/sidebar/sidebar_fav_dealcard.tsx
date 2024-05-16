import Image from "next/image";
import Link from "next/link";
import React from "react";

const FavDealCard = () => {
  return (
    <div className="">
      <h1 className="flex h-11 items-end font-bold text-[1.5rem] no-italic text-dealguru-black ">
        Utvalda favoriter
      </h1>
      <div className=" shadow-lg shadow-gray-200  bg-dealguru-white w-full rounded-lg  mt-">
        <div className="p-3 flex gap-3 justify-start items-center">
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
          <div className=" flex flex-col gap-2  justify-start  overflow-hidden ">
            {/* title here */}
            <p className=" text-base  truncate">
              Rituals Skincare Quiz - get free sample more sample
            </p>

            {/* Card category */}
            <div className="flex  gap-3  items-center">
              <Link className="" href={"#"}>
                <p className="text-sm">Rituals</p>
              </Link>
              <div className="border-l h-5 border-gray-300" />
              <div className=" ">
                <div className="flex gap-1 ">
                  <Image
                    src="/like.svg"
                    width={18}
                    height={18}
                    alt="like"
                    className=""
                  />
                  <span className="font-bold text-gray-400 text-sm">234</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mx-3 last_child_hr border-dealguru-grey" />
      </div>
    </div>
  );
};

export default FavDealCard;
