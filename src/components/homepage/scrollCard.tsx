import Image from "next/image";
import Link from "next/link";
import React from "react";
import Comment_Bookmark from "./comment_bookmark";

const ScrollCard = () => {
  return (
    <div className="bg-dealguru-white mr-4 w-[220px] rounded-lg shadow-lg shadow-gray-190 p-[1rem] flex flex-col justify-center items-center">
      <Link href={"/"}>
        <Image
          width={160}
          height={0}
          src="/images/sliderCard2.jpg"
          className="w-[auto]  h-[200px]"
          alt="Logo"
        />
      </Link>
      <Link
        className="text-sm line-clamp-2 font-bold mt-2 antialiased"
        href={"/"}
      >
        Bebeconfort Soko Compact Stroller 0-15kg Shadow{" "}
      </Link>
      <div className="flex gap-3 self-start">
        <p className="text-sm text-dealguru-blue line-clamp-2 self-start font-bold ">
          95 kr
        </p>
        <p className="text-sm text-gray-400  line-through decoration-[2px] line-clamp-2 self-start font-bold ">
          95 kr
        </p>
      </div>
      <Link className="text-sm line-clamp-2 self-start font-bold " href={"/"}>
        Amazon
      </Link>
      <div className=" flex self-start gap-2 my-1">
        <Link className="text-gray-400 capitalize  text-sm  " href={"/"}>
          Barnvagnar
        </Link>
        <div className="border-r border-gray-300 h-5 " />
        <Link className="text-gray-400 capitalize  text-sm  " href={"/"}>
          Barn
        </Link>
      </div>

      <div className="flex gap-4 justify-between items-center self-start">
        <div className=" gap-2 bg-dealguru-grey  min-w-[40px] max-w-fit  min-h-[40px] flex p-2 items-center justify-center rounded-md cursor-pointer">
          <Image
            className="w-[18px]"
            alt="heart"
            width={20}
            height={20}
            src={"/heart.svg"}
          />
          <span className=" text-sm text-gray-400">23</span>
        </div>
        <Link
          className="  bg-dealguru-blue text-white text-sm py-2 px-6  rounded-md font-semibold text-nowrap"
          href=""
        >
          Visa Deal
        </Link>
      </div>
    </div>
  );
};

export default ScrollCard;
