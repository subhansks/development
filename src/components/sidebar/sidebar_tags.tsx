import Image from "next/image";
import Link from "next/link";
import React from "react";

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
const Sidebar_tags = () => {
  return (
    <div className="">
      <h1 className="flex h-11 items-end font-bold text-[1.5rem] no-italic text-dealguru-black ">
        Populära kategorier just nu:
      </h1>
      <div className=" w-full rounded-lg mt-3">
        <div className=" flex gap-2 justify-start items-start flex-wrap">
          {category.map((d, index) => (
            <div
              className=" text-nowrap w-fit px-[12px] py-[8px] rounded-lg bg-dealguru-white"
              key={index}
            >
              <Link
                className="text-sm text-dealguru-blue font-bold"
                href={`/${d}`}
              >
                {d}
              </Link>
            </div>
          ))}
        </div>

        <hr className="mx-3 last_child_hr border-dealguru-grey" />
      </div>
    </div>
  );
};

export default Sidebar_tags;
