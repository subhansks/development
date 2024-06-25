import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SheetDemo } from "./left_menubar";
import Navbar_right_button from "./navbar_right_button";
import SearchBar from "./searchBar";

const Navbar = () => {
  return (
    <header id="top" className="flex w-full top-0 z-50 fixed flex-col">
      <p className="flex bg-dealguru-blue text-center font-bold h-[32px] text-[15px]  text-dealguru-white items-center justify-center">
        DealGuru - Just nu 10293 deals och rabatter
      </p>
      <div className=" 3xl:bg-dealguru-white 3xl:w-full 3xl:m-auto">
        <nav className="flex h-16 justify-between 2xl:px-x-pad md:px-8 px-4 py-2  3xl:w-[1900px] 3xl:m-auto 3xl bg-dealguru-white gap-4  ">
          <div className="w-[68%] gap-6 flex max-lg:justify-start max-lg:w-1/2 items-center justify-between">
            <div className="lg:block hidden">
              <SheetDemo />
            </div>

            <div>
              <Link href="/">
                <Image
                  width={160}
                  height={0}
                  src="/assets/images/logos/logo.png"
                  className="max-w-[160px] max-md:w-[120px]  h-full"
                  alt="Logo"
                />
              </Link>
            </div>

            <div className="max-w-[730px] w-[730px] min-w-[200px] h-[42px] max-lg:hidden flex-nowrap flex justify-end relative items-center">
              <SearchBar />
            </div>
          </div>

          <Navbar_right_button />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
