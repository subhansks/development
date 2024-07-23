import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Kopguider_header = () => {
    return (
        <div className='pt-1 flex justify-between md:flex-row flex-col gap-4 '>
            <div className='flex flex-col gap-3  dealguru-top'>
                <h2 className='font-bold md:text-4xl text-3xl text-gray-800'>Köpguider och bloggposter från DealGuru</h2>
            </div>
        </div>
    );
};

export default Kopguider_header;