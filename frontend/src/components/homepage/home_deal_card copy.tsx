import Image from "next/image";
import Link from "next/link";
import React from "react";
import LikeModule from "./like_module";
import Comment_Bookmark from "./comment_bookmark";

const HomeDealCard = () => {
  return (
    <div className="  w-full min-h-[250px] bg-white rounded-xl shadow-lg shadow-gray-200 p-4 flex gap-3 max-md:items-start items-center">
      <div className="w-[25%] h-[200px] flex justify-start items-center ">
        <Image
          src="/deal1.jpg"
          width={200}
          height={0}
          alt="placeholder"
          className=" h-full w-auto rounded-l-md  object-scale-down"
        />
      </div>
      <div className="flex gap-4 w-[75%] flex-col justify-between self-start h-full">
        <div className="flex gap-4 max-md:flex-col">
          <div className="flex-2 flex-col gap-2 flex h-fit">
            <Link href={"/"}>
              <h1 className="text-dealguru-black text-xl max-md:text-base font-bold capitalize">
                Sänk din elfaktura med Greenely Sänk din elfaktura med Greenely
              </h1>
            </Link>
            <div className="flex gap-2 items-center w-fit">
              <p className="font-bold pr-2 text-lg border-r max-md:text-base text-dealguru-blue border-gray-300">
                230 SEK
              </p>
              <Link href={"/"}>
                <p className="capitalize bord text-sm font-bold">greenely</p>
              </Link>
            </div>
            <div className="flex flex-col gap-[2px]">
              <div className="flex gap-2 items-center">
                <Image
                  width={32}
                  height={32}
                  src="/blank_avatar_new.png"
                  className="w-8  h-8 rounded-full"
                  alt="Avatar"
                />
                <p className="font-bold text-sm">DealGuru-teamet </p>
                <p className="text-sm text-gray-400">
                  Kontrollerad för 1 dag sedan
                </p>
              </div>
              <Link className="font-bold text-sm mt-2" href={"/"}>
                Få full kontroll över ditt elpris och spara pengar
              </Link>
              <div className=" flex items-center gap-2">
                <Link
                  className="text-dealguru-blue capitalize bord text-sm font-bold"
                  href={"/"}
                >
                  greenely
                </Link>
                <div className="border-r border-gray-300 h-5" />
                <Link
                  className="text-dealguru-blue capitalize bord text-sm font-bold"
                  href={"/"}
                >
                  Gratis & rabattkoder
                </Link>
                <div className="border-r border-gray-300 h-5" />

                <Link
                  className="text-dealguru-blue capitalize bord text-sm font-bold"
                  href={"/"}
                >
                  greenely
                </Link>
              </div>
            </div>
          </div>
          <LikeModule />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between ">
            <Comment_Bookmark />
          </div>
          <Link
            className="w-1/3 bg-dealguru-blue text-white text-base text-center p-2 rounded-md font-medium "
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
