import Image from "next/image";
import React from "react";

const Comment_Bookmark = () => {
  return (
    <div className="flex flex-1 items-end h-fit min-w-fit flex-col gap-4">
      <div className="flex gap-2">
        <div className=" gap-1 bg-dealguru-grey  min-w-[40px]  h-[40px] flex p-2 items-center justify-center rounded-md cursor-pointer">
          <Image
            className="w-[18px]"
            alt="heart"
            width={20}
            height={20}
            src={"/comment_icon.svg"}
          />
          <span className="text-dealguru-black">23</span>
        </div>
        <div className=" bg-dealguru-grey  w-[40px] h-[40px] flex items-center justify-center rounded-md cursor-pointer">
          <Image alt="heart" width={15} height={15} src={"/bookmark.svg"} />
        </div>
      </div>
    </div>
  );
};

export default Comment_Bookmark;
