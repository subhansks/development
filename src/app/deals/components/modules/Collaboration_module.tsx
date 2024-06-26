import React from 'react';
import Collaboration_Cards from '../common/Collaboration_Cards';

const Collaboration_module = () => {
    return (
        <div className='min-h-20 bg-dealguru-white rounded-md p-2'>
            <div className='pb-1'>
                <p className='font-bold italic text-sm '>Best price on TV on Pricerunner right now</p>
            </div>
            <div className='bg-dealguru-white border-gray-200 border shadow-md rounded-md p-3 flex flex-col justify-center shadow-gray-200 '>
                <div className='flex justify-end p-1'>
                    <h4 className='font-bold text-4xl line-through'>BrandLogo</h4>
                </div>
                <div className='flex flex-col gap-1'>


                    <Collaboration_Cards />
                    <Collaboration_Cards />
                    <Collaboration_Cards />
                    <Collaboration_Cards />
                </div>

            </div>
            <div className='pt-1'>
                <p className='font-normal italic text-xs underline'>in collaboration with PriceRunner</p>
            </div>
        </div>
    );
};

export default Collaboration_module;