import Image from "next/image";
import React from "react";

const LikeModule = () => {
  return (
    <div className="flex flex-1 items-end h-fit  flex-col gap-4 max-md:items-start max-md:gap-2">
      <p className=" text-xs font-bold ">Bra deal? Rösta här:</p>
      <div className="flex md:gap-2 gap-1">
        <div className="border border-dealguru-blue md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md  ">
          <span className="font-bold  text-sm">22</span>
        </div>
        <div className=" bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
          <Image
            alt="heart"
            width={16}
            height={16}
            src={"/assets/svg/heart.svg"}
          />
        </div>
        <div className=" bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
          <Image
            alt="heart"
            width={16}
            height={16}
            src={"/assets/svg/like.svg"}
          />
        </div>
        <div className=" bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
          <Image
            alt="heart"
            width={16}
            height={16}
            src={"/assets/svg/dislike.svg"}
          />
        </div>
      </div>
    </div>
  );
};

export default LikeModule;
