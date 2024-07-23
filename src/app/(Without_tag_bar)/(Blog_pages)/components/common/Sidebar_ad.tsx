import { ArrowBigUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Sidebar_ad = () => {
    return (
        <div>
            <Image src='/assets/images/ad.jpg' alt='Advertisement' width={400} height={400} className='rounded-md' />
        </div>
    );
};

export default Sidebar_ad;