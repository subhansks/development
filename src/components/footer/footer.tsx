import Image from "next/image";
import Link from "next/link";
import React from "react";

import SocialIcons from "../homepage/social_icon";
import LogoSlider from "./logo_slider";
import ToTop from "./ToTop";

const Footer = () => {
  return (
    <>
      <div className="  bg-dealguru-white w-full   ">
        <div className="grid gap-4 3xl:w-[1900px] 3xl:m-auto lg:gap-2 grid-cols-2 md:grid-cols-3  lg:grid-cols-4 bg-dealguru-white w-full 2xl:px-x-pad md:px-8 px-4 md_lg:grid-cols-6 pt-12 items-start py-8 text-sm ">
          <div className=" col-span-2 w-full ">
            <Link href="/">
              <Image
                width={160}
                height={0}
                src="/assets/images/logos/logo.png"
                className="w-[160px]  h-full"
                alt="Logo"
              />
            </Link>
            <p className="md:w-2/3 w-full  mt-4 text-gray-600">
              Dealguru.se är ett community för dig som älskar bra erbjudanden
              och deals. Tillsammans hjälper vi varandra att göra bättre deals
              genom att hitta och dela de bästa erbjudandena genom att dela dem
              med varandra. Det är helt gratis att vara medlem på DealGuru, så
              om du vill göra bättre köpbeslut och spara både tid och pengar,
              bli en DealGuru du också!
            </p>
            <SocialIcons />
          </div>
          <div className=" col-span-1 ">
            <h4 className="text-xl font-bold mb-4">DealGuru</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-sm text-gray-600">
                <Link href="/">Deals </Link>
              </li>
              <li className="text-sm text-gray-600">
                <Link href="/kopguider">Blogg </Link>
              </li>
              <li className="text-sm text-gray-600">
                <Link href="/diskussioner">Diskussioner </Link>
              </li>
              <li className="text-sm text-gray-600">
                <Link href="/om-oss">Om oss </Link>
              </li>
              <li className="text-sm text-gray-600">
                <Link href="/kontakta-oss">Kontakta oss </Link>
              </li>
              <li className="text-sm text-gray-600">
                <Link href="/dealguru-in-media">DealGuru in media </Link>
              </li>
            </ul>
            <h4 className="text-xl font-bold mb-4 mt-4">Community</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-sm text-gray-600">
                <Link href="/">Kom igång </Link>
              </li>
              <li className="text-sm text-gray-600">
                <Link href="/fragor-och-svar">FAQ </Link>
              </li>
              <li className="text-sm text-gray-600">
                <Link href="/medlemsvillkor">Medlemsvillkor </Link>
              </li>
            </ul>
          </div>
          <div className=" col-span-1">
            <h4 className="text-xl font-bold mb-4">Kategorier</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-sm text-gray-600">
                <Link href="/">Presents </Link>
              </li>
              <li className="text-sm text-gray-600">
                <Link href="/">Free samples</Link>
              </li>
              <li className="text-sm text-gray-600">
                <Link href="/">Electronics </Link>
              </li>
              <li className="text-sm text-gray-600">
                <Link href="/">TV </Link>
              </li>
              <li className="text-sm text-gray-600">
                <Link href="/">Barbecues </Link>
              </li>
              <li className="text-sm text-gray-600">
                <Link href="/"> Smartphones & Mobile Phones </Link>
              </li>
              <li className="text-sm text-gray-600">
                <Link href="/">vacuum cleaner </Link>
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
      </div>
      <div className=" bg-dealguru-white border-t border-gray-300 ">
        <div className="flex md:flex-row flex-col 3xl:w-[1900px] 3xl:m-auto   py-8 md_lg:px-x-pad px-8 bg-dealguru-white gap-2 items-center md:justify-between ">
          <div className="text-sm text-gray-600">
            Copyright 2023-2024 DealGuru AB
          </div>
          <ToTop />
          <div className="flex gap-3">
            <Link className="text-sm text-gray-600" href="/integritetspolicy">
            Integritetspolicy
            </Link>

            <Link className="text-sm text-gray-600" href="/">
            Användarvillkor
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
