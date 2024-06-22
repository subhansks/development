import React from 'react';
import Sidebar_card from '../common/Sidebar_card';

const Discussion_sidebar = () => {
    return (
        <section className='col-span-full xl:col-span-2 row-span-full xl:row-auto hidden md:flex  min-h-screen'>
            <div className='w-full bg-dealguru-white p-3 rounded-lg flex flex-col gap-6'>
                <div className='bg-dealguru-grey rounded-lg px-3 py-3  w-full'>
                    <p className='font-open_sans text-sm font-medium text-gray-500'>Liknande till det här inlägget</p>
                </div>
                <div className='space-y-4'>

                    <Sidebar_card />
                    <hr />
                    <Sidebar_card />
                    <hr />
                    <Sidebar_card />
                    <hr />
                    <Sidebar_card />
                    <hr />
                    <Sidebar_card />
                    <hr />
                    <Sidebar_card />

                </div>
            </div>
        </section>
    );
};

export default Discussion_sidebar;