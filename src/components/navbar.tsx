import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex flex-col">
      <p className="flex bg-dealguru-blue text-center font-bold h-[32px] text-dealguru-white items-center justify-center">
        DealGuru - Just nu 10293 deals och rabatter
      </p>

      <nav className="flex h-16 justify-between px-x-pad py-2 bg-dealguru-white">
        <div className="w-[68%] gap-6 flex items-center justify-between">
          <div className=" border flex justify-center items-center rounded-md w-[42px] h-[42px] border-gray-300">
            <span className="font-bold conte w-[42px] flex justify-center">
              ☰
            </span>
          </div>

          <div className="">
            <Link href="/">
              <Image
                width={160}
                height={0}
                src="/logo.png"
                className="min-w-[160px]  h-full"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="max-w-[730px] w-[730px] min-w-[200px] h-[42px] flex-nowrap flex justify-end relative items-center">
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

        <div className="flex justify-between gap-7 items-center">
          <div className="flex items-center gap-3">
            <Image
              width={40}
              height={40}
              src="/blank_avatar_new.png"
              className="w-[40px]  h-[40px] rounded-full p-1"
              alt="Avatar"
            />
            <Link className="text-dealguru-black text-sm" href="/test">
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
      </nav>
    </header>
  );
};

export default Navbar;
