"use client";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar_right_button = () => {
  const val = useMediaQuery("(min-width: 768px)");
  console.log(val);

  return (
    <>
      {val ? (
        <div className="flex justify-between gap-5 items-center">
          <div className="flex items-center gap-3">
            <Image
              width={40}
              height={40}
              src="/blank_avatar_new.png"
              className="w-[40px]  h-[40px] rounded-full p-1"
              alt="Avatar"
            />
            <Link
              className="text-dealguru-black text-sm text-nowrap"
              href="/test"
            >
              Mitt konto
            </Link>
          </div>
          <Image
            width={28}
            height={28}
            src="/bell_icon.svg"
            alt="Notification Icon"
          />
          <div className="button h-[42px] flex  justify-center items-center px-5  text-sm leading-3">
            <Link className="font-bold" href="/test">
              +NY DEAL
            </Link>
          </div>
        </div>
      ) : (
        <h1>change</h1>
      )}
    </>
  );
};

export default Navbar_right_button;
