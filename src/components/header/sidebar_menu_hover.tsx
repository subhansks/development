"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function SecondNest({ title, sub_content }: any) {
  const [trigger_t, setTrigger_t] = useState(false);

  return (
    <div
      className="flex   min-h-10 justify-start items-center overflow-y-scroll no-scrollbar "
      onMouseOver={() => setTrigger_t(true)}
      onMouseOut={() => setTrigger_t(false)}
    >
      <Link
        href={"/"}
        className={`flex w-full justify-between pl-4 pr-4 h-full items-center ${
          trigger_t && "bg-gray-100"
        }  `}
      >
        {title}
        {sub_content && (
          <Image
            src="/angle_right_icon.svg"
            width={20}
            height={20}
            alt="angle Icon"
            className=" "
          />
        )}
      </Link>
      {trigger_t && sub_content && (
        <div className="py-6 absolute top-0 bottom-0 lg:left-[260px] left-[0px] bg-white flex flex-col w-[260px]  border-l border-l-[1px]">
          <div className="px-4 flex gap-4" onClick={() => setTrigger_t(false)}>
            <Image
              src="/menu_back_icon.svg"
              width={20}
              height={20}
              alt="angle Icon"
              className=" "
            />
            <h2 className="text-2xl font-bold capitalize ">{title}</h2>
          </div>
          {sub_content.map((item: any, index: number) => (
            <>
              <div
                key={index}
                className="flex  min-h-10 justify-start items-center overflow-y-scroll no-scrollbar "
              >
                <Link
                  href={"/"}
                  className={`flex w-full justify-between pl-4 pr-4 h-full items-center hover:bg-gray-100 `}
                >
                  {item.sub_content_SubContent_title}{" "}
                </Link>
              </div>
              {/* <hr className="mx-3  last_child_hr " /> */}
            </>
          ))}
        </div>
      )}
    </div>
  );
}

const HoverCardNavigate = ({ title, sub_content }: any) => {
  const [trigger, setTrigger] = useState(false);
  // console.log(trigger_t);
  return (
    <div
      className="flex  min-h-10 justify-start items-center gap-2 "
      onMouseOver={() => setTrigger(true)}
      onMouseOut={() => setTrigger(false)}
    >
      <Link
        href={`/${title}`}
        className={`flex w-[80%] justify-between pl-4 pr-4 h-full items-center  ${
          trigger && "bg-gray-100"
        }  `}
      >
        {title}
      </Link>
      <div className=" w-[20%] flex justify-end pr-4 h-full ">
        <Image
          src="/angle_right_icon.svg"
          width={20}
          height={20}
          alt="angle Icon"
          className=" "
        />
      </div>
      {trigger && sub_content && (
        <div className="py-6 absolute top-0 bottom-0 lg:left-[260px] left-[0px]  bg-white flex flex-col w-[260px]  border-l-[1px] ">
          <div className="px-4 flex gap-4" onClick={() => setTrigger(false)}>
            <Image
              src="/menu_back_icon.svg"
              width={20}
              height={20}
              alt="angle Icon"
              className=" "
            />
            <h2 className="text-2xl font-bold capitalize ">{title}</h2>
          </div>
          {sub_content.map((item: any, index: number) => (
            <>
              <SecondNest
                key={index}
                title={item?.sub_content_title}
                sub_content={item.sub_content_SubContent}
              />
              {/* <hr className="mx-3  last_child_hr " /> */}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default HoverCardNavigate;

{
  /* <div>
  {trigger_t &&
    item.sub_content_SubContent &&
    item.sub_content_SubContent.map((d: any, index: number) => (
      <div className="absolute top-0 bottom-0 left-[250px] bg-white flex flex-col w-[300px] border-l border-l-gray-400 ">
        {trigger_t && d.sub_content_SubContent_title && (
          <Link href={"/"}>{d.sub_content_SubContent_title}</Link>
        )}
      </div>
    ))}
</div>; */
}
