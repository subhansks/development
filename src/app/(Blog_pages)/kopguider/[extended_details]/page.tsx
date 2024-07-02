import React from 'react';
import Kopguider_single_header from '../../components/layout/Kopguider_single_header';
import Kopguider_sidebar from '../../components/layout/Kopguider_sidebar';
import KopguiderLeftSection from '../../components/layout/KopguiderLeftSection';
import SingleBlogSlider from '../../components/common/Single_blog_slider';

const page = ({ params }: any) => {
    const details = params.extended_details;
    return (
        <section className='min-h-screen z-0 px-4  2xl:px-x-pad md:px-8 w-full mt-28 2xl:max-w-[1900px] 2xl:m-auto 2xl:mt-28'>
            <div className='py-5'>
                <Kopguider_single_header />
                <div className='flex gap-6 md:mt-10 mt-6 md:flex-row flex-col'>
                    <KopguiderLeftSection />
                    <Kopguider_sidebar />
                </div>
                <div className={` gap-6 flex-col `}>
                    <h3 className='text-2xl text-gray-800 font-bold mt-8 mb-3'>
                        Du kanske gillar dessa artiklar?
                    </h3>
                    <SingleBlogSlider />
                </div>
            </div>
        </section>
    );
};

export default page;