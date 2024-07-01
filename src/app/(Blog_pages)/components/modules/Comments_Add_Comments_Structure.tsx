import React from 'react';
import Image from "next/image";

const Comments_Add_Comments_Structure = () => {
    return (
        <div className='mt-8'>
            <p className='text-gray-500 text-base mt-6 mb-4'>Vad tycker du?</p>
            <div className='bg-white rounded-md flex items-center py-4 px-6 gap-3'>
                <Image src='/assets/images/blank_avatar_new.png' alt='' width={60} height={60} className='rounded-full border-[2px] border-gray-800' />
                <input type="text" placeholder='Log in or sign up to commit' className='border border-gray-100 rounded-xl py-2 px-4 w-full' />
            </div>
        </div>
    );
};

export default Comments_Add_Comments_Structure;