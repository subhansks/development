"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/(Discussion_pages)/components/common/Button";

const navItems = [
  { name: "Mitt konto", icon: "/assets/svg/profile/1.svg" },
  { name: "Mina deals", icon: "/assets/svg/profile/2.svg" },
  { name: "Sparade erbjudanden", icon: "/assets/svg/profile/3.svg" },
  { name: "Mina diskussioner", icon: "/assets/svg/profile/4.svg" },
  { name: "Inställningar", icon: "/assets/svg/profile/5.svg" },
  { name: "Logga ut", icon: "/assets/svg/profile/6.svg" },
];

export default function ProfilePage() {
  const handleSubmit = () => {
    console.log("Button clicked");
  };

  return (
    <>
      <h2 className="mb-4 p-0 leading-[1.2] text-2xl">Mitt konto</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        <div>
          <div className="w-full flex flex-col pt-4 pb-4 px-4 mb-4 gap-3 bg-white rounded-lg">
            <p className="pb-2 border-b text-sm">Inlägg</p>
            <Link
              href="#"
              className="flex items-center cursor-pointer text-sm text-heading rounded"
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
            <p className="pb-2 border-b">Gemenskap</p>
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
        <div className=" rounded-lg">
          <Button onClick={handleSubmit}>Kommer snart!</Button>
          <div className=" md:mt-0">
            <div className="opacity-50 grayscale pointer-events-none">
              <div className="w-full flex flex-col py-4 px-3 sm:px-2 md:px-4 lg:px-4 mb-4 bg-white rounded-lg">
                <p className="dshbrd_lbl_003 pb-3 border-b ">Utmärkelser</p>
                <div className="pt-3 flex">
                  <Image
                    src="/assets/svg/profile/question_mark.svg"
                    alt="Award icon"
                    width={63}
                    height={63}
                  />
                  <div className="w-full">
                    <span className="ps-2 deal_cn_txt_003 mb-3">2 nivå</span>
                    <div>
                      <p
                        className="dis_line_st_003 ms-2 mt-3 mb-3"
                        style={{
                          marginBottom: "10px",
                          background: "#E9EAED",
                          height: "8px",
                          borderRadius: "24px",
                        }}
                      ></p>
                      <p
                        className="ms-2"
                        style={{
                          marginBottom: "10px",
                          background: "#0367DD",
                          height: "8px",
                          borderRadius: "24px",
                          width: "50%",
                          marginTop: "-18px",
                        }}
                      ></p>
                    </div>
                    <div className="flex">
                      <span className="ms-2 deal_p_txt_003">25</span>
                      <span
                        className="deal_p_txt_003"
                        style={{ float: "right", margin: "0 0 0 auto" }}
                      >
                        60
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col py-4 px-2 sm:px-2 md:px-4 lg:px-4 mb-4 bg-white rounded-lg">
                <p className="dshbrd_lbl_003 pb-3 border-b ">
                  Utmärkelser mottagna
                </p>
                <div className="pt-3 flex">
                  <Image
                    src="/assets/svg/profile/tick_mark.svg"
                    alt="Award icon"
                    width={42}
                    height={42}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
