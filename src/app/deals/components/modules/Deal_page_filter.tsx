"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Deal_page_filter = () => {
    // const val = useMediaQuery("(min-width: 768px)");
    // console.log(val);

    return (
        <>
            <div className=" gap-2 hidden  md:flex ">
                <div className="flex gap-1 bg-dealguru-white px-1 rounded-md justify-center items-center h-11">
                    <Link
                        className="flex items-center justify-center rounded-md button text-sm  px-3  h-9  border-r bg-dealguru-grey text-dealguru-blue"
                        href="/test"
                    >
                        Utvalda favoriter
                    </Link>
                    <Link
                        className=" flex items-center justify-center rounded-md button px-3 h-9 text-sm  border-r bg-dealguru-white text-[#5a5a5a]"
                        href="/test"
                    >
                        Nya deals
                    </Link>
                    <Link
                        className=" flex items-center justify-center rounded-md button px-3 h-9 text-sm  border-r bg-dealguru-white text-[#5a5a5a]"
                        href="/test"
                    >
                        Högst betyg
                    </Link>
                </div>

            </div>

            <div className=" gap-2 flex md:hidden w-full">
                <div className="flex gap-1 bg-dealguru-white px-1 rounded-md justify-center items-center h-11 min-w-full">
                    <Link
                        className="flex  flex-grow items-center justify-center rounded-md button text-sm  px-3  h-9  border-r bg-dealguru-grey text-dealguru-blue"
                        href="/test"
                    >
                        Standard
                    </Link>
                    <Link
                        className=" flex flex-grow  items-center justify-center rounded-md button px-3 h-9 text-sm  border-r bg-dealguru-white text-[#5a5a5a]"
                        href="/test"
                    >
                        Nyast
                    </Link>
                    <Link
                        className=" flex flex-grow  items-center justify-center rounded-md button px-3 h-9 text-sm  border-r bg-dealguru-white text-[#5a5a5a]"
                        href="/test"
                    >
                        Popularitet
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Deal_page_filter;
