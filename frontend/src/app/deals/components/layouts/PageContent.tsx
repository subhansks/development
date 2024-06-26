
import React from "react";

import HomeDealCard from "@/components/homepage/home_deal_card";
import LogoSlider from "@/components/footer/logo_slider";
import Deal_page_filter from "../modules/Deal_page_filter";
import Image from "next/image";
import Collaboration_module from "../modules/Collaboration_module";
import About_Search_Tag from "./About_Search_Tag";

const PageContent = ({ params }: any) => {
    const name = params.deals_name;
    const _name = name.split('%').join(' ');
    console.log(_name);

    return (
        <div className={`md_lg:col-span-5 md:col-span-7   border-gray-300 rounded-lg`}>
            <div className="flex flex-col gap-2">

                <About_Search_Tag name={_name} />
                <div className="flex md:items-end justify-end md:flex-row flex-col items-start  gap-2 md:mb-0  min-h-11 ">

                    <Deal_page_filter />
                </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-1 mt-3 gap-4`}>

                {/* This section of upper content is limited until carousel of contents maybe 6 - 10 feed components  */}
                {
                    Array(3).fill(1).map((item, index) => (
                        <HomeDealCard />
                    ))
                }

                <Collaboration_module />

                {

                    Array(5).fill(1).map((item, index) => (
                        <HomeDealCard />
                    ))

                }

                <div className={`mb-3 `}>
                    <LogoSlider />
                </div>

            </div>
        </div>
    );
};

export default PageContent;
