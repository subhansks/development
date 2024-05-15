import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeFilters = () => {
  return (
    <div className="mobile-filters-heading gap-2 flex">
      <div className="flex gap-1 bg-dealguru-white p-[4px] rounded-lg">
        <Link
          className=" mr- button text-sm px-[14px] py-[4px] border-r bg-dealguru-grey text-dealguru-blue"
          href="/test"
        >
          Utvalda favoriter
        </Link>
        <Link
          className=" button px-[14px] text-sm py-[4px] border-r bg-dealguru-white text-[#5a5a5a]"
          href="/test"
        >
          Nya deals
        </Link>
        <Link
          className=" button px-[14px] text-sm py-[4px] border-r bg-dealguru-white text-[#5a5a5a]"
          href="/test"
        >
          Högst betyg
        </Link>
      </div>
      <div className="flex  bg-dealguru-white p-[4px] rounded-lg">
        <Link
          className=" mr- button px-[10px] py-[5px] border-r bg-dealguru-white text-dealguru-blue"
          href="/test"
        >
          <Image
            width={20}
            height={23}
            src="/grid_icon.svg"
            className=""
            alt="Avatar"
          />
        </Link>
        <Link
          className=" button px-[10px] py-[5px] border-r bg-dealguru-grey text-[#5a5a5a]"
          href="/test"
        >
          <Image
            width={20}
            height={23}
            src="/list_icon_blue.svg"
            className=""
            alt="Avatar"
          />
        </Link>
      </div>
    </div>
  );
};

export default HomeFilters;
