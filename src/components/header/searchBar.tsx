"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

const category = [
  "Presenter",
  "Gratisprover",
  "Elektronik",
  "TV",
  "Grillar",
  "Trädgård",
  "Parfymer",
  "Resor",
  "Ekonomi",
  "Jackor",
  "Kläder",
  "Kroppsvård",
  "Trädgård",
  "Parfymer",
  "Resor",
  "Ekonomi",
];
const SearchBar = () => {
  const [searchBar, setSearchBar] = useState(false);
  const ref = useRef(null);
  const n = ref.current;
  //   console.log(n);

  return (
    <div style={{ all: "inherit" }}>
      <input
        onClick={() => setSearchBar(true)}
        className=" w-full px-4 h-full absolute border rounded-md border-gray-300 text-sm placeholder-slate-400 focus:outline-none focus:border-0 focus:ring-1 focus:ring-gray-300 z-10"
        type="text"
        placeholder="Skriv det du söker..."
        // value={"test"}
      />
      <Link
        className=" z-20 mr-1 button px-[14px] py-[6px] border-r text-sm"
        href="/test"
      >
        Sök
      </Link>{" "}
      {searchBar && (
        <>
          <div
            onClick={() => setSearchBar(false)}
            className="overlay bg-[rgba(0,0,0,.35)] fixed h-full w-full top-0 left-0"
          />
          <div className=" bg-dealguru-white flex flex-col gap-3 z-[9]  w-full absolute top-[38px] rounded-b-lg  p-[13px] shadow-2xl ">
            <p className="font-[600] text-sm text-dealguru-black">
              Vad folk letar efter ?
            </p>
            <div className=" flex gap-2 justify-start items-start flex-wrap">
              {category.map((d, index) => (
                <div
                  className=" text-nowrap w-fit px-[12px] py-[8px] rounded-lg bg-dealguru-grey"
                  key={index}
                >
                  <Link
                    className="text-sm text-dealguru-blue font-bold flex gap-2"
                    href={`/${d}`}
                  >
                    <Image
                      width={16}
                      height={0}
                      src="/assets/svg/search_icon_search_bar.svg"
                      className="max-w-[160px] max-md:w-[120px]  h-full"
                      alt="Search icon"
                    />
                    <span>{d}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBar;
