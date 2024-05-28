"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DropdownMenuDemo } from "./dropdown";

const Navbar_right_button = () => {
  return (
    <>
      <div className="hidden justify-between gap-4 items-center  md:flex ">
        <DropdownMenuDemo>
          <div className="flex items-center gap-3">
            <Image
              width={40}
              height={40}
              src="/blank_avatar_new.png"
              className="w-[40px]  h-[40px] rounded-full p-1"
              alt="Avatar"
            />
            <Link
              className="text-dealguru-black text-[15px] text-nowrap"
              href="/test"
            >
              Mitt konto
            </Link>

            <Image
              width={18}
              height={16}
              alt="DropDown"
              className="-rotate-90 cursor-pointer"
              src={"/angle.svg"}
            />
          </div>
        </DropdownMenuDemo>
        <Image
          width={28}
          height={28}
          src="/bell_icon.svg"
          alt="Notification Icon"
        />
        <div className="button h-[42px] flex  justify-center items-center px-5  text-sm leading-3">
          <Link className="font-bold text-nowrap" href="/test">
            +NY DEAL
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-3 md:hidden">
        <div>
          <Image
            width={28}
            height={28}
            src="/bell_icon.svg"
            alt="Notification Icon"
          />
        </div>
        <button className="bg-dealguru-blue text-white  h-6 rounded-full w-6 flex justify-center items-center">
          +
        </button>
        <DropdownMenuDemo>
          <div>
            <Image
              width={40}
              height={40}
              src="/blank_avatar_new.png"
              className="w-[40px]  h-[40px] rounded-full p-1"
              alt="Avatar"
            />
          </div>
        </DropdownMenuDemo>
      </div>
    </>
  );
};

export default Navbar_right_button;
