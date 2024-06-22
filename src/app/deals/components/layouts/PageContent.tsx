
import React from "react";


import HomeDealCard_Grid from "@/components/homepage/HomeDealCard_Grid";
import HomeDealCard from "@/components/homepage/home_deal_card";
import LogoSlider from "@/components/footer/logo_slider";
import Deal_page_filter from "../modules/Deal_page_filter";
import Image from "next/image";


const PageContent = () => {
    const isGrid = false;
    return (
        <div className={`${isGrid ? "col-span-7" : "md_lg:col-span-5 md:col-span-7 "}  border-gray-300 rounded-lg`}>
            <div className="flex flex-col gap-2">

                <div className="bg-dealguru-white h-48 p-4 rounded-md" >
                    <div className="flex gap-2">
                        <div>
                            <Image src={'/assets/images/login-right-side.png'} alt="something" height={72} width={72} />
                        </div>

                        <div>
                            <div>
                                <h3>TV</h3>
                            </div>
                            <div>
                                <Image src={'/assets/svg/tag.svg'} alt="" width={20} height={20} />
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="flex md:items-end justify-end md:flex-row flex-col items-start  gap-2 md:mb-0  min-h-11 ">

                    <Deal_page_filter />
                </div>
            </div>
            <div className={`${isGrid ? "grid md:grid-cols-3 mb-4" : "grid grid-cols-1 md:grid-cols-1"} mt-3 gap-4`}>

                {/* This section of upper content is limited until carousel of contents maybe 6 - 10 feed components  */}
                {isGrid ? (
                    Array(15).fill(1).map((item, index) => (
                        <HomeDealCard_Grid />

                    ))
                ) : (
                    Array(3).fill(1).map((item, index) => (
                        <HomeDealCard />
                    ))
                )
                }


                {!isGrid && (

                    Array(5).fill(1).map((item, index) => (
                        <HomeDealCard />
                    ))
                )
                }

                <div className={`mb-3 ${isGrid && 'hidden'}`}>
                    <LogoSlider />
                </div>

            </div>
        </div>
    );
};

export default PageContent;
