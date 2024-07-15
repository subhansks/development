'use client';
import React, { useEffect, useRef, useState } from 'react';

const SortingSection = () => {
  return (
    
    <div className='flex flex-wrap items-center gap-4 -mt-2 pb-2'>
        <p className='text-gray-900 font-semibold text-xl'>Sortera på:</p>
        <div className='flex flex-wrap items-center gap-6'>
            <p className='text-gray-900 text-base cursor-pointer hover:text-blue-600'>Popularitet</p>
            <p className='text-gray-800 text-base cursor-pointer hover:text-blue-600'>Alfabetisk ordning</p>
            <p className='text-gray-800 text-base cursor-pointer hover:text-blue-600'>Senast tillagda</p>
        </div>
    </div>
  );
};

export default SortingSection;
