
import { ArrowBigUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';


import React from 'react';

const Main_Kopguider_card = ({ details }: any | undefined) => {

    return (
        <div className='bg-white py-3 px-5 rounded-md flex flex-col justify-center gap-4'>
            <Image src='/assets/images/deal1.jpg' alt='Advertisement' width={400} height={400} className='rounded-md self-center' />
            <h3 className='text-gray-800 text-2xl font-semibold'>What is the best idea?</h3>
            <p className='text-gray-500 text-base'>When it come to choosing the best sunscreen, it can be confusing.</p>
            <Button variant={'outline'} size={'sm'} className='mt-3 w-fit'>health & beauty</Button>
            <div className='flex items-center gap-4'>
                <Image src='/assets/images/deal1.jpg' alt='Advertisement' width={40} height={40} className='rounded-full' />
                <div>
                <h5 className='text-gray-800 font-semibold'>Malin</h5>
                <p className='text-gray-400 text-sm'>07/04/2023</p>
                </div>
            </div>
        </div>
    );
};

export default Main_Kopguider_card;