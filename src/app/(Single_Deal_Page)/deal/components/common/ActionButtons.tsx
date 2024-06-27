import Image from "next/image";
import React from "react";

const ActionButtons = () => {
  return (
    <div className="flex gap-1">
      <div className=" bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
        <Image
          alt="heart"
          width={24}
          height={24}
          src={"/assets/svg/report_icon.svg"}
          className=""
        />
      </div>
      <div className=" bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
        <Image
          alt="heart"
          width={40}
          height={40}
          src={"/assets/svg/share_icon.svg"}
          className=" w-12 h-12"
        />
      </div>
      <div className=" bg-dealguru-grey md:min-w-[40px] md:min-h-[40px] min-w-[35px] min-h-[35px] flex p-2  items-center justify-center rounded-md cursor-pointer">
        <div className="flex gap-2">
          <Image
            alt="heart"
            width={18}
            height={18}
            src={"/assets/svg/comment_icon.svg"}
            className=""
          />
          <p>1</p>
        </div>
      </div>
      <div className=" bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
        <Image
          alt="heart"
          width={18}
          height={18}
          src={"/assets/svg/bookmark_fill.svg"}
          className=""
        />
      </div>
    </div>
  );
};

export default ActionButtons;
