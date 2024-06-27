import React from "react";
import LikeModule_ from "../common/LikeModule_";
import Image from "next/image";
import ActionButtons from "../common/ActionButtons";

const InfoSection = () => {
  return (
    <div className="bg-dealguru-white shadow-md shadow-gray-200 min-h-36 rounded-lg p-4 gap-2 flex flex-col">
      <div className="flex gap-5">
        <h1 className="font-open_sans text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold">
          50% rabatt på familjebiljett till LEGOLAND Billund
        </h1>
        <LikeModule_ />
      </div>
      <div>
        <p className="text-lg font-bold">50 % rabatt</p>
      </div>
      <div className="flex gap-4 justify-between">
        <div className="flex gap-2 items-center">
          <Image
            width={35}
            height={35}
            src="/assets/images/blank_avatar_new.png"
            className="w-[35px]  h-[35px] rounded-full "
            alt="Avatar"
          />
          <div className="text-xs text-gray-500 ">
            Kontrollerad för 23 timmar sedan av Malin
          </div>
        </div>
        <div>
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
