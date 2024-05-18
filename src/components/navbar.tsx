import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SheetDemo } from "./left_menubar";
import Navbar_right_button from "./navbar_right_button";

const Navbar = () => {
  return (
    <header id="top" className="flex w-full top-0 z-50 fixed flex-col">
      <p className="flex bg-dealguru-blue text-center font-bold h-[32px] max-md:text-sm text-dealguru-white items-center justify-center">
        DealGuru - Just nu 10293 deals och rabatter
      </p>

      <nav className="flex h-16 justify-between md:px-x-pad py-2 max-md:px-4 bg-dealguru-white gap-4">
        <div className="w-[68%] gap-6 flex max-lg:justify-start max-lg:w-1/2 items-center justify-between">
          <div className="md:block hidden">
            <SheetDemo />
          </div>

          <div>
            <Link href="/">
              <Image
                width={160}
                height={0}
                src="/logo.png"
                className="max-w-[160px] max-md:w-[120px]  h-full"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="max-w-[730px] w-[730px] min-w-[200px] h-[42px] max-lg:hidden flex-nowrap flex justify-end relative items-center">
            <input
              className=" w-full px-4 h-full absolute border rounded-md border-gray-300"
              type="text"
              placeholder="Skriv det du söker..."
            />
            <Link
              className=" z-20 mr-1 button px-[14px] py-[4px] border-r"
              href="/test"
            >
              Sök
            </Link>
          </div>
        </div>

        <Navbar_right_button />
      </nav>
    </header>
  );
};

export default Navbar;
