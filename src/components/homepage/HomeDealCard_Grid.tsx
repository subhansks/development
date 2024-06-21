import Image from "next/image";
import Link from "next/link";
import React from "react";
import HomepageMediaCard from "./homepage_card_media_items";
import LikeModule from "./like_module";
import Comment_Bookmark from "./comment_bookmark";

const HomeDealCard_Grid = () => {
    return (
        <div className=" overflow-hidden  w-full min-h-[250px]  bg-white rounded-xl shadow-lg shadow-gray-200 p-4 flex flex-col gap-3 items-center">
            <div className="  flex w-full  gap-4   items-start   ">
                <div className=" h-24 min-w-[80px]  flex items-start ">
                    <Image
                        src="/assets/images/dealcard1.png"
                        width={200}
                        height={0}
                        alt="placeholder"
                        className="   w-full  rounded-l-md object-scale-down object-center  h-[100px]"
                    />
                </div>
                <div className="  flex-col flex-grow  justify-between gap-4 h-full">
                    <div className="flex min-w-full items-start gap-2 flex-col  ">
                        <div className="flex flex-col gap-2  ">
                            {" "}
                            <Link href={"/"}>
                                <h1 className="text-dealguru-black md:text-xl text-sm  font-bold ">
                                    Sänk din elfaktura
                                </h1>
                            </Link>

                        </div>

                        {/* Like Module */}
                        <div className="flex flex-1 items-end h-fit  flex-col gap-2 max-md:items-start max-md:gap-2">
                            <p className=" text-xs font-bold self-start">Bra deal? Rösta här:</p>
                            <div className="flex md:gap-2 gap-1">
                                <div className="border border-dealguru-blue md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md  ">
                                    <span className="font-bold  text-sm">22</span>
                                </div>
                                <div className=" bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
                                    <Image
                                        alt="heart"
                                        width={16}
                                        height={16}
                                        src={"/assets/svg/heart.svg"}
                                    />
                                </div>
                                <div className=" bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
                                    <Image
                                        alt="heart"
                                        width={16}
                                        height={16}
                                        src={"/assets/svg/like.svg"}
                                    />
                                </div>
                                <div className=" bg-dealguru-grey md:w-[40px] md:h-[40px] w-[35px] h-[35px] flex p-2 items-center justify-center rounded-md cursor-pointer">
                                    <Image
                                        alt="heart"
                                        width={16}
                                        height={16}
                                        src={"/assets/svg/dislike.svg"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="  flex-col flex gap-2 w-full" >
                <HomepageMediaCard />
                <div className="flex justify-between flex-row-reverse gap-4">
                    <div className="flex justify-between ">
                        <Comment_Bookmark />
                    </div>
                    <Link
                        className="flex items-center justify-center flex-grow min-w-max bg-dealguru-blue text-white text-sm __className_01 text-center p-2 rounded-md px-4 py-2 text-nowrap"
                        href=""
                    >
                        {" "}
                        Gå direkt till dealen
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeDealCard_Grid;
