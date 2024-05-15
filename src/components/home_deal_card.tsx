import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeDealCard = () => {
  return (
    <div className="  w-full h-[250px] bg-white rounded-xl shadow-lg shadow-gray-200 p-4 flex gap-4">
      <div className="w-fit h-[200px] flex  justify-start ">
        <Image
          src="/deal1.jpg"
          width={200}
          height={200}
          alt="placeholder"
          className=" w-auto h-full object-scale-down  "
        />
      </div>
      <div className="flex gap-4 w-full flex-col justify-between ">
        <div className="flex gap-4">
          <div className="flex-2 flex-col flex gap-4 h-fit">
            <h1 className="text-black text-[19px] font-semibold capitalize">
              SAS EuroBonus - 20% poängrabatt på bonusresor till/från Sverige,
              Norge, Danmark & Finland
            </h1>
          </div>
          <div className="flex flex-1 items-end h-fit min-w-fit flex-col gap-4">
            <p className=" text-xs font-semibold ">Bra deal? Rösta här:</p>
            <div className="flex gap-2">
              <div className="border border-dealguru-blue  w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md  ">
                <span>22</span>
              </div>
              <div className="border border-blue-950 w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
                <Image alt="heart" width={30} height={30} src={"/heart.svg"} />
              </div>
              <div className="border border-blue-950 w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
                <Image alt="heart" width={30} height={30} src={"/like.svg"} />
              </div>
              <div className="border border-blue-950 w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
                <Image
                  alt="heart"
                  width={30}
                  height={30}
                  src={"/dislike.svg"}
                />
              </div>
            </div>
          </div>
        </div>
        <Link
          className=" bg-dealguru-blue text-white text-base text-center p-2 rounded-md font-medium "
          href=""
        >
          {" "}
          Go to deal
        </Link>
      </div>
    </div>
  );
};

export default HomeDealCard;
