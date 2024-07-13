import React from 'react';
import Image from "next/image";

const Comments_Add_Comments_Structure = () => {
    return (
        <div className='mt-8'>
            <p className='text-gray-500 text-base mt-6 mb-4'>Vad tycker du?</p>
            <div className='bg-white rounded-md flex items-center py-3 px-4 gap-3'>
                <Image src='/assets/images/blank_avatar_new.png' alt='' width={48} height={48} className='rounded-full' />
                <input type="text" placeholder='Logga in eller bli medlem för att kommentera' className='border border-gray-100 comment-input py-2 px-4 w-full' />
            </div>
        </div>
    );
};

export default Comments_Add_Comments_Structure;