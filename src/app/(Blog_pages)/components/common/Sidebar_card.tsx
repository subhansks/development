import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React from 'react';

const Sidebar_card = () => {
    return (
        <Link href={'/'} className='overflow-hidden flex flex-col gap-1'>
            <div className='bg-white rounded-md py-2 px-4 flex items-center gap-4'>
                <Image src='/assets/images/ad.jpg' alt='Advertisement' width={100} height={100} className='rounded-md' />
                <div>
                    <h4 className='text-lg md:text-base lg:text-xl text-gray-800 font-semibold mb-2'>Köpguide - hitta den perfekta resebarnvagnen!</h4>
                    <Button variant={'outline'} size={'sm'} className='!text-sm md:text-base mt-3'>Barn</Button>
                </div>
            </div>
        </Link>
    );
};

export default Sidebar_card;