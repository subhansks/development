import React from 'react';
import KopguiderSection from '../components/layout/KopguiderSection';
import Kopguider_sidebar from '../components/layout/Kopguider_sidebar';
import Kopguider_header from '../components/layout/Kopguider_header';

const page = () => {
    return (
        <section className='min-h-screen z-0 px-4  2xl:px-x-pad md:px-8 w-full mt-28 2xl:max-w-[1900px] 2xl:m-auto 2xl:mt-28'>
            <div className='py-5'>
                <Kopguider_header />
                <div className='flex gap-6 md:mt-10 mt-6 md:flex-row flex-col'>
                    <KopguiderSection />
                    <Kopguider_sidebar />
                </div>
            </div>
        </section>
    );
};

export default page;