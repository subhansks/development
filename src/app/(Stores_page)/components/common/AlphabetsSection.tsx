'use client';
import React, { useEffect, useRef, useState } from 'react';

const AlphabetsSection = () => {
  
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

const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};


  return (
    <>
      <p className='text-gray-900 font-semibold text-xl hidden md:block'>Gå direkt till:</p>
      {ItemData.map((e, i) => (
          <div className='flex items-center gap-2 ' key={i}>
              <p
                  className='flex text-gray-800 font-semibold text-lg cursor-pointer ml-3 hover:text-blue-600'
                  onClick={() => handleScroll(e.text)}
              >
                  {e.text}
              </p>
          </div>
      ))}
    </>
  );
};

export default AlphabetsSection;
