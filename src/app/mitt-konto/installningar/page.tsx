import React from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "Mitt konto", icon: "/assets/svg/profile/1.svg" },
  { name: "Mina deals", icon: "/assets/svg/profile/2.svg" },
  { name: "Sparade erbjudanden", icon: "/assets/svg/profile/3.svg" },
  { name: "Mina diskussioner", icon: "/assets/svg/profile/4.svg" },
  { name: "Inställningar", icon: "/assets/svg/profile/5.svg" },
  { name: "Logga ut", icon: "/assets/svg/profile/6.svg" },
];

export default function ProfilePage() {
  return (
    <>
      <h2 className="mb-4 p-0 leading-[1.2] text-2xl">Inställningar</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="w-full flex flex-col pt-4 pb-4 px-4 mb-4 gap-3 bg-white rounded-lg">
            <p className="pb-2 border-b text-sm">Inlägg</p>
            <Link
              href="#"
              className="flex items-center cursor-pointer text-sm text-heading rounded "
            >
              <Image
                src="/assets/svg/profile/2.svg"
                alt="Postade deals icon"
                width={20}
                height={20}
                loading="lazy"
              />
              <span className="pl-2 font-bold">0</span>
              <span className="pl-1">Postade deals</span>
            </Link>
            <Link
              href="#"
              className="flex items-center cursor-pointer text-sm lg:text-base text-heading rounded"
            >
              <Image
                src="/assets/svg/profile/4.svg"
                alt="Diskussioner icon"
                width={20}
                height={20}
                loading="lazy"
              />
              <span className="pl-2 font-bold">0</span>
              <span className="pl-1">Diskussioner</span>
            </Link>
            <Link
              href="#"
              className="flex items-center cursor-pointer text-sm lg:text-base text-heading rounded"
            >
              <Image
                src="/assets/svg/profile/4.svg"
                alt="Kommentarer icon"
                width={20}
                height={20}
                loading="lazy"
              />
              <span className="pl-2 font-bold">0</span>
              <span className="pl-1">Kommentarer</span>
            </Link>
            <Link
              href="#"
              className="flex items-center cursor-pointer text-sm lg:text-base text-heading rounded"
            >
              <Image
                src="/assets/svg/profile/4.svg"
                alt="Diskussionskommentarer icon"
                width={20}
                height={20}
                loading="lazy"
              />
              <span className="pl-2 font-bold">0</span>
              <span className="pl-1">Diskussionskommentarer</span>
            </Link>
          </div>
          <div className="w-full flex flex-col pt-4 pb-4 px-3 mb-4 gap-3 bg-white rounded-lg">
            <p className="pb-2 border-b ">Gemenskap</p>
            <Link
              href="#"
              className="flex items-center cursor-pointer text-sm lg:text-base text-heading rounded mt-1"
            >
              <Image
                src="/assets/svg/profile/2.svg"
                alt="Postade deals icon"
                width={20}
                height={20}
                loading="lazy"
              />
              <span className="pl-2 font-bold">0</span>
              <span className="pl-1">Reaktioner</span>
            </Link>
            <Link
              href="#"
              className="flex items-center cursor-pointer text-sm lg:text-base text-heading rounded"
            >
              <Image
                src="/assets/svg/profile/4.svg"
                alt="Diskussioner icon"
                width={20}
                height={20}
                loading="lazy"
              />
              <span className="pl-2 font-bold">0</span>
              <span className="pl-1">Följare</span>
            </Link>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h2>Settings</h2>
          <p>This is the settings section.</p>
        </div>
      </div>
    </>
  );
}
