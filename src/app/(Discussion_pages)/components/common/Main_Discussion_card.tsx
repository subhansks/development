import { ArrowBigUp } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Main_Discussion_card = () => {
    return (
        <div className='w-full  bg-dealguru-white shadow-md shadow-gray-200 rounded-md px-6 py-4 flex  gap-4'>

            <div className='flex flex-col justify-start items-center '>
                <ArrowBigUp strokeWidth={0.5} />
                <p className='font-bold text-sm'>0</p>
            </div>

            <div className='flex flex-col gap-2'>
                <p className='text-xs text-gray-500 '>Postad by <span className='font-bold'> dealKentGöran </span> 2 månader sedan</p>
                <h6 className='text-dealguru-blue font-bold text-lg'>Bästa deal du hittat ? Som du är nöjd med ?</h6>
                <div className=' mt-3 md:mt-5 flex items-center gap-2'>
                    <Image height={16} width={16} src={'/assets/svg/comments.svg'} alt='' />
                    <p className='font-bold text-gray-900 opacity-60 text-sm flex items-center gap-1  '>1 kommentar</p>
                </div>
            </div>
        </div>
    );
};

export default Main_Discussion_card;