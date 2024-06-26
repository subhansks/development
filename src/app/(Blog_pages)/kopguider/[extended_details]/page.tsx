import React from 'react';
import Discussion_header from '../../components/layout/Discussion_header';
import Discussion_sidebar from '../../components/layout/Discussion_sidebar';
import Discussion_Comment_Section from '../../components/layout/Discussion_Comment_Section';

const page = ({ params }: any) => {
    const details = params.extended_details;
    return (
        <section className='min-h-screen z-0 px-4  2xl:px-x-pad md:px-8 w-full mt-28 2xl:max-w-[1900px] 2xl:m-auto 2xl:mt-28'>
            <div>
                <Discussion_header />
                <div className='grid grid-cols-1 gap-5 md:gap-14 md_lg:gap-7 md_lg:grid-cols-7 xl:grid-cols-9 mb-12 md:mb-14 md_lg:mb-7 pt-6'>
                    <Discussion_Comment_Section details={details} />
                    <Discussion_sidebar />
                </div>
            </div>
        </section>
    );
};

export default page;