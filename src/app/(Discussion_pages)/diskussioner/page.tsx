import React from 'react';
import DiscussionSection from '../components/layout/DiscussionSection';
import Discussion_sidebar from '../components/layout/Discussion_sidebar';
import Discussion_header from '../components/layout/Discussion_header';

const page = () => {
    return (
        <section className='min-h-screen z-0 px-4  2xl:px-x-pad md:px-8 w-full mt-28 3xl:w-[1900px] 3xl:m-auto 3xl:mt-28'>
            <div>
                <Discussion_header />
                <div className='grid grid-cols-1 gap-5 md:gap-14 xl:gap-7 xl:grid-cols-7 2xl:grid-cols-9 mb-12 md:mb-14 xl:mb-7 pt-6'>
                    <DiscussionSection />
                    <Discussion_sidebar />
                </div>
            </div>
        </section>
    );
};

export default page;