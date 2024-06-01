"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import HoverCardNavigate from "./sidebar_menu_hover";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  {
    title: "Electronics",
    sub_content: [
      { sub_content_title: "drill" },
      { sub_content_title: "bulbs" },
    ],
  },
  {
    title: "Clothes",
    sub_content: [
      {
        sub_content_title: "stitched",
        sub_content_SubContent: [
          { sub_content_SubContent_title: "silk" },
          { sub_content_SubContent_title: "cotton" },
        ],
      },
      { sub_content_title: "unstich" },
    ],
  },
  {
    title: "Clothes",
    sub_content: [
      {
        sub_content_title: "stitched",
        sub_content_SubContent: [
          { sub_content_SubContent_title: "silk" },
          { sub_content_SubContent_title: "cotton" },
        ],
      },
      { sub_content_title: "unstich" },
    ],
  },
  {
    title: "Clothes",
    sub_content: [
      {
        sub_content_title: "stitched",
        sub_content_SubContent: [
          { sub_content_SubContent_title: "silk" },
          { sub_content_SubContent_title: "cotton" },
        ],
      },
      { sub_content_title: "unstich" },
    ],
  },
  {
    title: "Children",
    sub_content: [
      { sub_content_title: "toys" },
      { sub_content_title: "stationary" },
    ],
  },
  {
    title: "Garden",
    sub_content: [
      {
        sub_content_title: "soil",
        sub_content_SubContent: [
          { sub_content_SubContent_title: "plastic" },
          { sub_content_SubContent_title: "mud" },
        ],
      },
      { sub_content_title: "pot" },
    ],
  },
  { title: "Tools", sub_content: [{ sub_content_title: "drill" }] },
  {
    title: "Furniture",
    sub_content: [
      { sub_content_title: "carpet" },
      { sub_content_title: "decor" },
    ],
  },
  {
    title: "Furniture",
    sub_content: [
      { sub_content_title: "carpet" },
      { sub_content_title: "decor" },
    ],
  },
  {
    title: "Furniture",
    sub_content: [
      { sub_content_title: "carpet" },
      { sub_content_title: "decor" },
    ],
  },
  {
    title: "Furniture",
    sub_content: [
      { sub_content_title: "carpet" },
      { sub_content_title: "decor" },
    ],
  },
  {
    title: "Furniture",
    sub_content: [
      { sub_content_title: "carpet" },
      { sub_content_title: "decor" },
    ],
  },
  {
    title: "Furniture",
    sub_content: [
      { sub_content_title: "carpet" },
      { sub_content_title: "decor" },
    ],
  },
  {
    title: "Furniture",
    sub_content: [
      { sub_content_title: "carpet" },
      { sub_content_title: "decor" },
    ],
  },
  {
    title: "Furniture",
    sub_content: [
      { sub_content_title: "carpet" },
      { sub_content_title: "decor" },
    ],
  },
  {
    title: "Furniture",
    sub_content: [
      { sub_content_title: "carpet" },
      { sub_content_title: "decor" },
    ],
  },
  {
    title: "Furniture",
    sub_content: [
      { sub_content_title: "carpet" },
      { sub_content_title: "decor" },
    ],
  },
  {
    title: "Furniture",
    sub_content: [
      { sub_content_title: "carpet" },
      { sub_content_title: "decor" },
    ],
  },
];

export function SheetDemo() {
  const [isWidth1024, setIsWidth1024] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsWidth1024(window.innerWidth === 1024 || window.innerWidth < 1024);
    };

    // Check initial screen width
    checkScreenWidth();

    // Add event listener to check screen width on resize
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  return (
    <Sheet>
      <SheetTrigger asChild>
        {isWidth1024 ? (
          <Image
            width={20}
            height={20}
            alt="Footer Nav Button"
            src={"/footer_nav_button.svg"}
            className="block lg:hidden"
          />
        ) : (
          <div className=" border hidden lg:flex items-center rounded-md w-[37px] h-[36px] border-gray-300 cursor-pointer">
            <span
              className="font-bold mt-1 text-2xl text-gray-600 conte w-[42px] flex justify-center items-center
            "
            >
              ☰
            </span>
          </div>
        )}
      </SheetTrigger>
      <SheetContent side={"left"} className="">
        <div className=" flex z-[90 ] flex-col pb-6 h-[100vh] w-[260px] stroke-none  overflow-y-scroll no-scrollbar ">
          <ul className="">
            <li>
              <Link href={"/4"} className="flex py-3 gap-2 px-4">
                <Image
                  alt="Notification Icon"
                  width="28"
                  height="28"
                  src="/left_menu_store_icon.svg"
                />
                <span>Brands </span>
              </Link>
            </li>
            <li>
              <Link href={"/3"} className="flex py-3 gap-2  px-4">
                <Image
                  alt="Notification Icon"
                  width="28"
                  height="28"
                  src="/left_menu_store_icon.svg"
                />
                <span>Stores </span>
              </Link>
            </li>
            <li>
              <Link href={"/2"} className="flex py-3 gap-2 px-4">
                <Image
                  alt="Notification Icon"
                  width="28"
                  height="28"
                  src="/left_menu_message_icon.svg"
                />
                <span>Diskussioner </span>
              </Link>
            </li>
            <li>
              <Link href={"/1"} className="flex py-3 gap-2 px-4">
                <Image
                  alt="Notification Icon"
                  width="28"
                  height="28"
                  src="/left_menu_chat_icon.svg"
                />
                <span>Köpguider </span>
              </Link>
            </li>
          </ul>

          <hr className="w-full last_child_hr  " />
          <ul className="flex text-base items-center justify-start sidemenu_heading">
            <li className="flex py-3 gap-1  px-4 justify-center items-center">
              <Image
                alt="Notification Icon"
                width="28"
                height="28"
                src="/left_menu_dot_box.svg"
              />
              <span className="font-bold block truncate  ps-3">
                Alla kategorier
              </span>
            </li>
          </ul>
          {nav.map((d, index) => (
            <>
              <HoverCardNavigate
                key={index}
                title={d.title}
                sub_content={d.sub_content}
              />

              {/* <hr className="mx-3  last_child_hr " /> */}
            </>
          ))}
        </div>
      </SheetContent>
      <SheetClose asChild className="hidden"></SheetClose>
    </Sheet>
  );
}
