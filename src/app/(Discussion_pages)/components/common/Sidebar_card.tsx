import { ArrowBigUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Sidebar_card = () => {
    return (
        <Link href={'/'} className='overflow-hidden flex flex-col gap-1 border border-zinc-300 p-2 rounded-md'>
            <div className='flex gap-2 items-center'>
                <Image
                    width={40}
                    height={40}
                    src="/assets/images/blank_avatar_new.png"
                    className="w-[40px]  h-[40px] rounded-full "
                    alt="Avatar"
                />
                <p className='text-xs '>dealKentGöran</p>
            </div>
            <div className=' space-y-2'>
                <p className='truncate font-bold text-base'>Bästa deal du hittat ? Som du är nöjd med ?</p>
                <div className='flex gap-4'>
                    <div className='flex items-center gap-1'>

                        <ArrowBigUp strokeWidth={0.5} />
                        <p className='font-light text-sm'>0</p>
                    </div>
                    <div className='flex items-center gap-1'>

                        <Image height={16} width={16} src={'/assets/svg/comments.svg'} alt='' />
                        <p className='font-light text-sm flex items-center gap-1'>1 <span className='   p-[1px] bg-black'></span> 24/04/2024</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Sidebar_card;