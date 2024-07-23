import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React from 'react';

const Sidebar_card = () => {
    return (
        <Link href={'/'} className='overflow-hidden flex flex-col gap-1'>
            <div className='bg-white rounded-xl py-3 px-3 flex items-center gap-4'>
                <Image src='/assets/images/ad.jpg' alt='Advertisement' width={98} height={98} className='rounded-md' />
                <div>
                    <h5 className='text-md md:text-base lg:text-md text-gray-800 font-semibold mb-2'>Köpguide - hitta den perfekta resebarnvagnen!</h5>
                    <Button variant={'outline'} size={'sm'} className='bg-gray-100 text-xs font-semibold h-auto py-1 px-2'>Barn</Button>
                </div>
            </div>
        </Link>
    );
};

export default Sidebar_card;