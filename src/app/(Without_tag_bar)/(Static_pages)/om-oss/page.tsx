
import React from 'react';
import Image from 'next/image';
import '../static_pages.css';

export default function page() {
    return (
        <>
            <main className='om_oss'>
                <div>
                    <section className='static-page-main'>
                        <div className='static-page-container relative w-full mt-26'>
                            <div className='bg-image-container'>
                                <Image src='/assets/images/page-header.jpg' alt='Image' layout='fill' objectFit='cover' className='bg-image' />
                            </div>
                            <h1 className='text-overlay'>Om oss</h1>
                        </div>
                    </section>

                    <section className='space-y-8 max-w-screen-md_lg mx-auto px-10 md:px-20 my-14 md:my-20 content_sec'>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Om oss</h2>
                            <p className='text-gray-500 text-base'>På DealGuru brinner vi för att hjälpa dig spara pengar genom att samla de bästa erbjudandena, rabatterna och kampanjerna på ett ställe. Vi vet hur tidskrävande och frustrerande det kan vara att leta efter bra deals. Därför har vi skapat en plattform som gör det enkelt och smidigt att hitta de bästa priserna på allt från elektronik och kläder till resor och hushållsartiklar.</p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Vårt mål</h2>
                            <p className='text-gray-500 text-base'>Vårt mål är att göra ditt shoppande smartare och se till att du får mer valuta för dina pengar. Vi strävar efter att ge dig tillgång till exklusiva erbjudanden och att alltid hålla oss uppdaterade med de senaste rabatterna. Genom att använda DealGuru kan du vara säker på att du aldrig missar en bra deal igen.</p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Vår idé</h2>
                            <p className='text-gray-500 text-base'>DealGuru grundades med en enkel idé: att göra det enklare för konsumenter att hitta de bästa erbjudandena. Vi har växt från en liten grupp passionerade shoppare till att bli en av Sveriges ledande plattformar för deals och rabatter. Vårt team arbetar hårt för att säkerställa att varje deal är noggrant utvald och granskad, så att du kan vara säker på att den är aktuell.</p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Bli en del av vårt community</h2>
                            <p className='text-gray-500 text-base pb-5'>Gå med i Sveriges största shoppingcommunity och börja spara pengar idag. Genom att <span className='text-blue-600 underline cursor-pointer'>bli medlem</span> får du tillgång till exklusiva erbjudanden, personliga rekommendationer och mycket mer.</p>
                            <p className='text-gray-500 text-base'>Vi ser fram emot att hjälpa dig hitta ditt nästa fynd!</p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Hör av dig</h2>
                            <p className='text-gray-500 text-base pb-5'>Har du frågor eller förslag? Tveka inte att <span className='text-blue-600 underline cursor-pointer'>kontakta oss</span> via vårt kontaktformulär eller följ oss på sociala medier.</p>
                            <p className='text-gray-500 text-base'>Tack för att du väljer DealGuru – ett smartare sätt att shoppa!</p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}