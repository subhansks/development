import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Discussion_header = () => {
    return (
        <div className='pt-6 flex justify-between'>
            <div className='flex flex-col gap-3'>

                <h2 className='text-2xl font-bold'>
                    Diskussioner
                </h2>
                <div className='flex items-center gap-10'>
                    <div className='flex gap-2 items-center'>
                        <Image height={24} width={24} src={'/assets/svg/discussion_icon.svg'} alt='' />
                        <p className='text-sm font-normal'>{"46"} diskussioner</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <Image height={16} width={16} src={'/assets/svg/comments.svg'} alt='' />
                        <p className='text-sm font-normal'>{"107"} kommentarer</p>
                    </div>
                </div>
            </div>
            <div>
                <Link className='font-semibold py-3 px-8 text-sm font-open_sans text-dealguru-white bg-dealguru-blue rounded-md' href={''}>Lägg till diskussion</Link>
            </div>

        </div>
    );
};

export default Discussion_header;