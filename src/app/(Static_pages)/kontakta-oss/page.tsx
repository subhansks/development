import Image from 'next/image';
import React from 'react';
import '../static_pages.css';

export default function page() {
  return (
    <>
      <main className='kontakta_oss'>
        <div>
          <section className='static-page-main'>
            <div className='static-page-container relative w-full mt-26'>
              <div className='bg-image-container'>
                <Image src='/assets/images/page-header.jpg' alt='Image' layout='fill' objectFit='cover' className='bg-image' />
              </div>
              <h1 className='text-overlay'>Kontakt</h1>
            </div>
          </section>

          <section className='space-y-8 max-w-screen-md_lg mx-auto px-10 md:px-20 my-14 md:my-20 content_sec'>

            <div className='space-y-2'>
              <h2 className='text-xl md:text-2xl 2xl:text-3xl font-bold text-gray-800'>Skicka ett meddelande till DealGuru-teamet</h2>
              <p className='text-gray-500 text-base'>Vi är här för att hjälpa dig! Oavsett om du har frågor, behöver support med en deal eller bara vill ge feedback. Fyll i formuläret nedan med ditt namn, e-post och ditt meddelande, så återkommer vi till dig så snart vi kan!</p>
            </div>

            <div className='w-full flex items-center justify-center flex-col gap-6'>
              <div className='flex flex-wrap w-full gap-4'>
                <input type="text" placeholder='Name' className='flex-grow min-w-[200px] py-3 px-3 rounded-md border-gray-300 border outline-1' />
                <input type="text" placeholder='Email' className='flex-grow min-w-[200px] py-3 px-3 rounded-md border-gray-300 border outline-1' />
              </div>
              <input type="text" placeholder='Amne' className='w-full py-3 px-3 rounded-md border-gray-300 border outline-1' />
              <textarea name="" id="" placeholder='Ditt meddelande' className='w-full border border-gray-300 py-3 px-3 rounded-md outline-1' rows={10}></textarea>
            </div>

            <button className='bg-blue-600 text-white py-4 px-3 w-28 font-semibold tracking-wider rounded-md'>Skicka</button>

          </section>
        </div>
      </main>
    </>
  )
}