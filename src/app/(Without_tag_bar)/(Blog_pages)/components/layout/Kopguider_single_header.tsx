import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Kopguider_single_header = () => {
    return (
        <Link href={`/kopguider`}>
            <div className='flex items-center cursor-pointer pb-3'>
                <Image src='/assets/svg/angle_left_icon.svg' alt='Advertisement' width={18} height={18} />
                <h4 className='ml-3 font-bold text-xl text-gray-800'>Gå tillbaka till alla köpguider</h4>
            </div>
        </Link>
    );
};

export default Kopguider_single_header;