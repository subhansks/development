import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import HoverCardNavigate from "./sidebar_menu_hover";

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
];

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className=" border flex justify-center items-center rounded-md w-[42px] h-[42px] border-gray-300 cursor-pointer">
          <span className="font-bold text-2xl text-gray-600 conte w-[42px] flex justify-center">
            ☰
          </span>
        </div>
      </SheetTrigger>
      <SheetContent side={"left"} className="   ">
        <div className=" flex flex-col py-6 h-[100vh] w-[300px]   overflow-y-scroll no-scrollbar ">
          {nav.map((d, index) => (
            <>
              <HoverCardNavigate
                key={index}
                title={d.title}
                sub_content={d.sub_content}
              />
              <hr className="mx-3  last_child_hr border-gray-200" />
            </>
          ))}
        </div>
      </SheetContent>
      <SheetClose asChild className="hidden"></SheetClose>
    </Sheet>
  );
}
