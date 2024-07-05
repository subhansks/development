
import { ArrowBigUp, Fullscreen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';


import React from 'react';

const Main_Kopguider_card = ({ details }: any | undefined) => {
    return (
        <>
        {!details ? (
    <Link href={`/kopguider/${'Bästa deal du hittat ? Som du är nöjd med ?'}`}>
        <div className='bg-white p-4 rounded-xl flex flex-col justify-between h-full'>
            <div>
                <Image src='/assets/images/deal1.jpg' alt='Advertisement' width={450} height={180} className='rounded-md h-[200px] self-center object-cover' />
                <h3 className='text-gray-800 text-xl font-semibold mt-3'>Allt du behöver veta innan du köper ett tyngdtäcke</h3>
                <p className='text-gray-500 text-sm mt-3'>Apple har precis släppt stora nyheter! Bland dessa nyheter har det släppts två nya p...</p>
                <Button variant={'outline'} size={'sm'} className='w-fit bg-gray-100 text-xs font-semibold h-auto py-1 px-2 mt-3'>health & beauty</Button>
            </div>
            <div className='flex items-center gap-4 mt-5'>
                <Image src='/assets/images/blank_avatar_new.png' alt='Advertisement' width={30} height={30} className='rounded-full object-scale-down' />
                <div>
                    <h4 className='text-gray-800 font-semibold text-xs'>Malin</h4>
                    <p className='text-gray-400 text-xs'>07/04/2023</p>
                </div>
            </div>
        </div>
    </Link>
) : (
    <div className='bg-white p-4 rounded-xl flex flex-col justify-between'>
        <div>
            <Image src='/assets/images/deal1.jpg' alt='Advertisement' width={450} height={180} className='rounded-md h-[200px] self-center object-cover' />
            <h3 className='text-gray-800 text-xl font-semibold'>Allt du behöver veta innan du köper ett tyngdtäcke</h3>
            <p className='text-gray-500 text-sm'>Apple har precis släppt stora nyheter! Bland dessa nyheter har det släppts två nya p...</p>
            <Button variant={'outline'} size={'sm'} className='w-fit bg-gray-100 text-xs font-semibold h-auto py-1 px-2'>health & beauty</Button>
        </div>
        <div className='flex items-center gap-4 mt-5'>
            <Image src='/assets/images/blank_avatar_new.png' alt='Advertisement' width={30} height={30} className='rounded-full object-scale-down' />
            <div>
                <h4 className='text-gray-800 font-semibold text-sm'>Malin</h4>
                <p className='text-gray-400 text-sm'>07/04/2023</p>
            </div>
        </div>
    </div>
)}

        </>
    );
};

export default Main_Kopguider_card;