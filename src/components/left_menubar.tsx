import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { HoverCardNavigate } from "./sidebar_menu_hover";

export function SheetDemo() {
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
          <HoverCardNavigate />
          <HoverCardNavigate />
          <HoverCardNavigate />
          <HoverCardNavigate />
          <HoverCardNavigate />
          <HoverCardNavigate />
          <HoverCardNavigate />
          <HoverCardNavigate />
          <HoverCardNavigate />
          <HoverCardNavigate />
          <HoverCardNavigate />
          <HoverCardNavigate />
          <HoverCardNavigate />
        </div>
      </SheetContent>
    </Sheet>
  );
}
