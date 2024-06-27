import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const Collaboration_Cards = () => {
    return (
        <div className=' border-gray-200 border  bg-dealguru-white shadow-md rounded-md p-2 flex flex-col justify-center shadow-gray-200 '>
            <div>
                <div className='flex gap-2 items-end'>
                    <Skeleton className='min-h-10 min-w-10' />
                    <div className='w-1/2 space-y-2'>

                        <Skeleton className='h-3 w-[20%]' />
                        <Skeleton className='h-3 w-[40%]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collaboration_Cards;