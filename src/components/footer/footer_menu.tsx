"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { SheetDemo } from "../header/left_menubar";

const Footer_Menu = () => {
 

  return (
    <div className="2xl:px-x-pad md:px-8 px-4  fixed bottom-0 z-50 lg:hidden   w-full flex bg-dealguru-white h-16 items-center justify-between">
      <div>
        {/* <Image
          width={20}
          height={20}
          alt="Footer Nav Button"
          src={"/footer_nav_button.svg"}
        /> */}
        <SheetDemo />
      </div>
      <Link href={"/"}>
        {" "}
        <Image
          width={20}
          height={20}
          alt="Footer Nav Button"
          src={"/footer_search_icon.svg"}
        />
      </Link>
      <Link href={"/"}>
        <Image
          width={20}
          height={20}
          alt="Footer Nav Button"
          src={"/footer_home_icon.svg"}
        />
      </Link>
      <Link href={"/"}>
        <Image
          width={20}
          height={20}
          alt="Footer Nav Button"
          src={"/footer_bookmark_icon.svg"}
        />
      </Link>
      <Link href={"/"}>
        <Image
          width={20}
          height={20}
          alt="Footer Nav Button"
          src={"/footer_profile_icon.svg"}
        />
      </Link>
    </div>
  );
};

export default Footer_Menu;
