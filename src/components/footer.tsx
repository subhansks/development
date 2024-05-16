import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialIcons from "./social_icon";
import LogoSlider from "./logo_slider";

const Footer = () => {
  return (
    <>
      <LogoSlider />

      <div className="grid bg-dealguru-white w-full px-x-pad grid-cols-6 mt-4 items-start py-8 text-sm">
        <div className=" col-span-2">
          <Link href="/">
            <Image
              width={160}
              height={0}
              src="/logo.png"
              className="w-[160px]  h-full"
              alt="Logo"
            />
          </Link>
          <p className="w-2/3 mt-4 text-gray-600">
            Dealguru.se är ett community för dig som älskar bra erbjudanden och
            deals. Tillsammans hjälper vi varandra att göra bättre deals genom
            att hitta och dela de bästa erbjudandena genom att dela dem med
            varandra. Det är helt gratis att vara medlem på DealGuru, så om du
            vill göra bättre köpbeslut och spara både tid och pengar, bli en
            DealGuru du också!
          </p>
          <SocialIcons />
        </div>
        <div className=" col-span-1">
          <h4 className="text-xl font-bold mb-4">DealGuru</h4>
          <ul className="flex flex-col gap-4">
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
          </ul>
          <h4 className="text-xl font-bold mb-4 mt-4">Community</h4>
          <ul className="flex flex-col gap-4">
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
          </ul>
        </div>
        <div className=" col-span-1">
          <h4 className="text-xl font-bold mb-4">Kategorier</h4>
          <ul className="flex flex-col gap-4">
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
          </ul>
        </div>
        <div className=" col-span-1">
          <h4 className="text-xl font-bold mb-4">Varumärken</h4>
          <ul className="flex flex-col gap-4">
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
          </ul>
        </div>
        <div className=" col-span-1">
          <h4 className="text-xl font-bold mb-4">Butiker</h4>
          <ul className="flex flex-col gap-4">
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
            <li className="text-sm text-gray-600">
              <Link href="/">Deals </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex border-t border-gray-300 py-8 px-x-pad bg-dealguru-white justify-between ">
        <div className="text-sm text-gray-600">
          Copyright 2023-2024 DealGuru AB
        </div>
        <div className="flex gap-3">
          <Link className="text-sm text-gray-600" href="/">
            Privacy Policy
          </Link>
          <Link className="text-sm text-gray-600" href="/">
            Terms of Use
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
