import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { HoverCardNavigate } from "./sidebar_menu_hover";

const nav = [
  {
    title: "Electronics",
    sub_content: [
      { sub_content_title: "iron" },
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
      { sub_content_title: "soil" },
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
];

export function SheetDemo() {
  // console.log(JSON.stringify(nav));
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className=" border flex justify-center items-center rounded-md w-[42px] h-[42px] border-gray-300">
          <span className="font-bold text-2xl text-gray-600 conte w-[42px] flex justify-center">
            ☰
          </span>
        </div>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className=" flex flex-col mt-10 h-fit w-[300px]">
          {nav.map((data, index) => (
            <HoverCardNavigate
              key={index}
              title={data.title}
              sub_content={data?.sub_content}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
