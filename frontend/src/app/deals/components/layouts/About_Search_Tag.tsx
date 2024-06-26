"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const data = [
    'På denna sida hittar du de senaste och bästa erbjudandena inom hemelektronik här på DealGuru. Det finns något för alla, oavsett om du vill skaffa ett nytt hemmabiosystem, smarta hushållsapparater eller något helt annat. Här hittar du en mängd olika deals som låter dig köpa elektronik till rabatt. Det gör att du kan klicka hem allt från den senaste TV-apparaten till ett ljudsystem eller en gamingdator.',
    "På denna sida hittar du de senaste och bästa erbjudandena inom hemelektronik här på DealGuru. Det finns något för alla, oavsett om du vill skaffa ett nytt hemmabiosystem, smarta hushållsapparater eller något helt annat. Här hittar du en mängd olika deals som låter dig köpa elektronik till rabatt. Det gör att du kan klicka hem allt från den senaste TV-apparaten till ett ljudsystem eller en gamingdator.",
    "Vi lever i en värld där tekniken ständigt förändras och förbättras. Elektroniken har också blivit en viktig del av vår vardag och våra hem. Den underhåller oss genom TV-apparater och ljudsystem samt gör våra hem smartare och mer energieffektiva. Så hemelektroniken kan förbättra vår livskvalitet på flera olika sätt."
];

const About_Search_Tag = ({ name }: any) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className={`bg-dealguru-white  ${showMore ? 'h-fit' : ' h-32d '} p-4 rounded-md flex flex-col gap-4 overflow-hidden`} >
            <div className="flex gap-3">
                <div>
                    <Image src={'/assets/images/login-right-side.png'} alt="attribute" height={72} width={72} className="min-w-[72px] min-h-[72px]" />
                </div>

                <div className="flex flex-col gap-1">
                    <div>
                        <h3 className="sm:text-lg text-base font-bold">{name}</h3>
                    </div>
                    <div>
                        <div className="flex gap-1 ">
                            <Image src={'/assets/svg/tag.svg'} alt="" width={20} height={20} />
                            <p className="font-semibold text-xs sm:text-sm">155 deals just nu</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:gap-4 gap-2 text-wrap ">
                <div className={`flex  sm:gap-4 gap-2 text-wrap ${showMore ? 'flex-col' : 'showless'}`}>

                    {data.map((d, index) => (

                        <p className={` ${showMore ? " text-wrap" : 'truncate'} text-sm sm:text-base font-normal`}>
                            {d}
                        </p>
                    ))}

                    <div onClick={() => setShowMore(!showMore)} className='cursor-pointer text-nowrap '>
                        {showMore ? <p className='font-bold text-base text-dealguru-blue'>Show Less</p> : <p className='font-bold text-base text-dealguru-blue'>Show More</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About_Search_Tag;