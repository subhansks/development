import Image from "next/image";
import Link from "next/link";
import React from "react";
import LikeModule from "./like_module";
import Comment_Bookmark from "./comment_bookmark";
import HomepageMediaCard from "./homepage_card_media_items";

const HomeDealCard = () => {
  return (
    <div className="  w-full min-h-[250px]  bg-white rounded-xl shadow-lg shadow-gray-200 p-4 gap-3 max-md:items-start items-center">
      <div className="  flex  gap-2 md:gap-4  items-center ">
        <div className=" min-w-[100px] h-full  w-[25%] py-4 md:py-6 flex items-center">
          <Image
            src="/deal1.jpg"
            width={200}
            height={0}
            alt="placeholder"
            className=" h-full  w-auto rounded-l-md object-cover "
          />
        </div>
        <div className=" w-[75%]  flex-col flex justify-between gap-4 h-full">
          <div className="flex min-w-full gap-4  flex-col md:flex-row ">
            <div className="flex flex-col gap-2 ">
              {" "}
              <Link href={"/"}>
                <h1 className="text-dealguru-black md:text-xl text-base font-bold capitalize">
                  Sänk din elfaktura med Greenely Sänk din elfaktura med
                  Greenely
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
              className="w-1/3 min-w-max bg-dealguru-blue text-white text-base text-center md:py-2 md:px-6  rounded-md font-medium text-nowrap"
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
            className="flex-grow min-w-max bg-dealguru-blue text-white text-base text-center p-2 rounded-md font-medium px-4 py-2 text-nowrap"
            href=""
          >
            {" "}
            Gå direkt till dealen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeDealCard;
