import Image from "next/image";
import React from "react";

const Comment_Bookmark = () => {
  return (
    <div className="flex flex-1 items-end h-fit min-w-fit">
      <div className="flex gap-2 md:flex-row flex-row-reverse">
        <div className=" md:gap-2 gap-1 bg-dealguru-grey  min-w-[40px] max-w-fit  min-h-[40px] flex p-2 items-center justify-center rounded-md cursor-pointer">
          <Image
            className="w-[18px]"
            alt="heart"
            width={20}
            height={20}
            src={"/comment_icon.svg"}
          />
          <span className=" text-sm text-gray-400">23</span>
        </div>
        <div className=" bg-dealguru-grey  min-w-[40px] min-h-[40px] flex items-center justify-center rounded-md cursor-pointer p-2">
          <Image
            alt="heart"
            width={15}
            height={15}
            src={"/bookmark.svg"}
            className="h-[18px] w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Comment_Bookmark;
