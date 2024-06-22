import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomepageMediaCard = () => {
  return (
    <div className=" flex flex-col  gap-1  mt-3 md:mt-0 ">
      <div className="flex gap-2 items-center w-fit ">
        <p className="font-bold pr-2 text-lg border-r max-md:text-base text-dealguru-blue border-gray-300">
          230 SEK
        </p>
        <Link href={"/"}>
          <p className="capitalize bord text-sm font-bold">greenely</p>
        </Link>
      </div>
      <div className="flex flex-col-reverse  ">
        <div className="flex gap-2   md:mt-0 mt-2 items-center  ">
          <Image
            width={32}
            height={32}
            src="/assets/images/blank_avatar_new.png"
            className="w-8  h-8 rounded-full"
            alt="Avatar"
          />
          <div className="flex  md:gap-2 flex-col-reverse md:flex-row items-start md:items-center">
            <p className="font-bold text-sm">John </p>
            <p className="text-sm text-[#637381]">
              Kontrollerad för 1 dag sedan
            </p>
          </div>
        </div>
        <Link className="font-bold text-sm  mt-1 md:mt-2" href={"/"}>
          Få full kontroll över ditt elpris och spara pengar
        </Link>
        <div className=" flex items-center gap-2 flex-wrap">
          <Link
            className="text-dealguru-blue capitalize bord text-sm font-bold text-nowrap"
            href={"/"}
          >
            greenely
          </Link>
          <div className="border-r border-gray-300 h-5" />
          <Link
            className="text-dealguru-blue capitalize bord text-sm font-bold text-nowrap"
            href={"/"}
          >
            Gratis & rabattkoder
          </Link>
          <div className="border-r border-gray-300 h-5" />
        </div>
      </div>
    </div>
  );
};

export default HomepageMediaCard;
