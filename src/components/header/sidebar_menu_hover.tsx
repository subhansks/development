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
          <Image src="/angle.svg" width={8} height={8} alt="angle logo" />
        )}
      </Link>
      {trigger_t && sub_content && (
        <div className="py-6 absolute top-0 bottom-0 left-[298px] bg-white flex flex-col w-[300px]  border-l border-l-gray-400">
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
              <hr className="mx-3  last_child_hr border-gray-200" />
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
      className="flex  min-h-10 justify-start items-center  "
      onMouseOver={() => setTrigger(true)}
      onMouseOut={() => setTrigger(false)}
    >
      <Link
        href={"/"}
        className={`flex w-full justify-between pl-4 pr-4 h-full items-center ${
          trigger && "bg-gray-100"
        }  `}
      >
        {title} <Image src="/angle.svg" width={8} height={8} alt="angle logo" />
      </Link>
      {trigger && sub_content && (
        <div className="py-6 absolute top-0 bottom-0 left-[300px]  bg-white flex flex-col w-[300px] border-l  border-l-gray-400   ">
          {sub_content.map((item: any, index: number) => (
            <>
              <SecondNest
                key={index}
                title={item?.sub_content_title}
                sub_content={item.sub_content_SubContent}
              />
              <hr className="mx-3  last_child_hr border-gray-200" />
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
