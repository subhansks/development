import Image from "next/image";
import Link from "next/link";
import React from "react";
import HomepageMediaCard from "./homepage_card_media_items";
import LikeModule from "./like_module";
import Comment_Bookmark from "./comment_bookmark";

const HomeDealCard = () => {
  return (
    <div className="  w-full min-h-[250px]  bg-white rounded-xl shadow-lg shadow-gray-200 p-4 gap-3 max-md:items-start items-center">
      <div className="  flex w-full  gap-2 md:gap-4  items-start md:h-full  ">
        <div className=" h-24  md:h-[230px] md:min-w-[230px] md:max-w-[230px] flex md:items-center items-start ">
          <Image
            src="/dealcard1.png"
            width={200}
            height={0}
            alt="placeholder"
            className="   md:h-auto  w-full  rounded-l-md object-cover h-[100px]"
          />
        </div>
        <div className="  flex-col flex-grow flex justify-between gap-4 h-full">
          <div className="flex min-w-full md:gap-2 gap-1 flex-col md:flex-row ">
            <div className="flex flex-col gap-2  ">
              {" "}
              <Link href={"/"}>
                <h1 className="text-dealguru-black md:text-xl text-sm  font-bold ">
                  Sänk din elfaktura
                </h1>
              </Link>
              <div className="max-md:hidden">
                <HomepageMediaCard />
              </div>
            </div>
            <LikeModule />
          </div>

          <div className="md:flex justify-between  hidden ">
            <div className="flex justify-between ">
              <Comment_Bookmark />
            </div>
            <Link
              className="w-1/3 min-w-max bg-dealguru-blue text-white text-base font-[sans-serif] text-center md:py-2 md:px-6  rounded-md font-semibold text-nowrap"
              href=""
            >
              {" "}
              Gå direkt till dealen
            </Link>
          </div>
        </div>
      </div>
      <div className=" md:hidden flex-col flex gap-2">
        <HomepageMediaCard />
        <div className="flex justify-between flex-row-reverse gap-4">
          <div className="flex justify-between ">
            <Comment_Bookmark />
          </div>
          <Link
            className="flex-grow min-w-max bg-dealguru-blue text-white text-base text-center p-2 rounded-md font-semibold px-4 py-2 text-nowrap"
            href=""
          >
            {" "}
            Gå direkt till dealen button
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeDealCard;
