import Image from "next/image";
import React from "react";

const LikeModule_ = () => {
  return (
    <div className="flex flex-1 items-end h-fit  flex-col gap-4 max-md:items-start max-md:gap-2">
      <div className="flex flex-col  gap-1">
        <div className="bg-dealguru-grey  w-full flex p-2 items-center justify-center rounded-md  ">
          <span className="font-bold  text-sm text-dealguru-blue">22</span>
        </div>
        <div className="flex gap-1">
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
    </div>
  );
};

export default LikeModule_;
