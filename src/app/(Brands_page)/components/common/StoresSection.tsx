'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const StoresSection = () => {
  
  const ItemData = [
      { id: 0, text: "0-9" },
      { id: 1, text: "A" },
      { id: 3, text: "B" },
      { id: 4, text: "C" },
      { id: 5, text: "D" },
      { id: 6, text: "E" },
      { id: 7, text: "F" },
      { id: 8, text: "G" },
      { id: 9, text: "H" },
      { id: 10, text: "I" },
      { id: 11, text: "J" },
      { id: 12, text: "K" },
      { id: 13, text: "L" },
      { id: 14, text: "M" },
      { id: 15, text: "N" },
      { id: 16, text: "O" },
      { id: 17, text: "P" },
      { id: 18, text: "Q" },
      { id: 19, text: "R" },
      { id: 20, text: "S" },
      { id: 21, text: "T" },
      { id: 22, text: "U" },
      { id: 23, text: "V" },
      { id: 24, text: "W" },
      { id: 25, text: "X" },
      { id: 26, text: "Y" },
      { id: 27, text: "Z" }
  ];
  const ShopData = [
      { id: 0, img: '/assets/images/apc.png', text: 'APC' },
      { id: 1, img: '/assets/images/aarke.jpg', text: 'Ark' },
      { id: 2, img: '/assets/images/ab&f.jpg', text: 'Abercrombie & Flitch' },
      { id: 3, img: '/assets/images/ay.png', text: 'About you' },
      { id: 4, img: '/assets/images/acer.webp', text: 'Acer' },
      { id: 5, img: '/assets/images/acne.jpg', text: 'Acne Studio' },
      { id: 6, img: '/assets/images/aco.png', text: 'ACO' },
      { id: 7, img: '/assets/images/addnature.png', text: 'Addnature' },
      { id: 8, img: '/assets/images/adelberg.jpg', text: 'Adelberg' },
      { id: 9, img: '/assets/images/adidas.jpg', text: 'Adidas' },
      { id: 10, img: '/assets/images/adoore.jpg', text: 'Adore' },
      { id: 11, img: '/assets/images/afound.png', text: 'Afound' },
      { id: 12, img: '/assets/images/aliexpress.jpg', text: 'AliExpress' },
      { id: 13, img: '/assets/images/alessi.jpg', text: 'Alessi' },
      { id: 14, img: '/assets/images/alcon.png', text: 'Alcon' },
  ];
  return (    
    <section className='space-y-4'>
        {ItemData.map((e, i) => (
            <div key={i} className='border-b-2 border-gray-200 mt-6'>
                <h2 className='thisTag text-2xl md:text-4xl text-gray-500 font-semibold' id={e.text}>{e.text} </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full justify-center'>
                    {ShopData.map((item, index) => (
                        <Link href={`/deals/${item.text}`}>     
                            <div key={index} className='flex items-center flex-wrap gap-4 cursor-pointer h-24'>
                                <Image src={item.img} width={90} height={40} objectFit='contain' alt='Image' className='fit' />
                                <h3 className='text-gray-800 font-semibold text-lg'>{item.text}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        ))}
    </section>
  );
};

export default StoresSection;
