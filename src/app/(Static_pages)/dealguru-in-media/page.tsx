import Image from 'next/image';
import React from 'react';
import '../static_pages.css';

export default function page() {
    return (
        <>
            <main>
                <div>
                    <section className='static-page-main'>
                        <div className='static-page-container relative w-full mt-26'>
                            <div className='bg-image-container'>
                                <Image src='/assets/images/page-header.jpg' alt='Image' layout='fill' objectFit='cover' className='bg-image' />
                            </div>
                            <h1 className='text-overlay'>DealGuru i media</h1>
                        </div>
                    </section>

                    <section className='space-y-10 max-w-screen-md_lg mx-auto px-10 md:px-20 my-14 md:my-20 content_sec'>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>DealGuru i media</h2>
                            <p className='text-gray-500 text-base'>Vi på DealGuru är stolta över att ha blivit uppmärksammade i media. Här kan du läsa mer om våra framträdanden och hur vi fått erkännanden för vårt arbete med att hjälpa konsumenter hitta de bästa erbjudandena.</p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>DealGuru vill bli störst i Sverige på deals – får in 10 miljoner (och sparprofilen Niklas Andersson)</h2>
                            <p className='text-gray-500 text-base pb-5'>I denna artikel från Breakit beskrivs hur Johan Selin grundade DealGuru i slutet av 2022 med målet att skapa Sveriges största community för shopping och deals. Med stöd av Niklas Andersson och 10 miljoner kronor i riskkapital från finska riskkapitalister och affärsänglar siktar DealGuru på att revolutionera hur svenskar hittar och delar erbjudanden. Artikeln belyser vår communitybaserade modell och våra framtidsplaner, inklusive utvecklingen av en app för enklare navigering bland våra tusentals erbjudanden.</p>

                            <span className='text-blue-600 underline cursor-pointer pb-5'>Läs hela artikeln här</span>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Rabattbolag från Lund redo för lansering</h2>
                            <p className='text-gray-500 text-base pb-5'>Rapidus skriver om vårt spännande nya projekt och vår resa mot att lansera en plattform som hjälper konsumenter att hitta de bästa rabatterna. Med stöd av riskkapital och vårt dedikerade team är vi redo att ta marknaden med storm.</p>

                            <span className='text-blue-600 underline cursor-pointer pb-5'>Läs hela artikeln här</span>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>DealGuru secures €900K in funding to develop Sweden’s largest community for shopping deals</h2>
                            <p className='text-gray-500 text-base pb-5'>ArcticStartup rapporterar om att DealGuru har säkrat 900 000 euro (10 miljoner SEK) i riskkapital från finska riskkapitalbolagen Gorilla Capital och Innovestor. DealGuru siktar på att bygga Sveriges största community för shopping deals och planerar att utveckla en app för att förenkla navigeringen bland de tusentals erbjudandena. Finansieringen kommer att användas för att förbättra plattformen och expandera användarbasen.</p>

                            <span className='text-blue-600 underline cursor-pointer pb-5'>Läs hela artikeln här</span>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Dealguru Raises €900K to Revolutionize Deals in Sweden</h2>
                            <p className='text-gray-500 text-base pb-5'>Øresund Startups rapporterar att DealGuru, grundat av Johan Selin i slutet av 2022, har säkrat 900 000 euro (10 miljoner SEK) i riskkapital från finska riskkapitalbolag. Plattformen betonar community-samarbete i att hitta och dela erbjudanden, och planerar att utveckla en app för att förenkla navigeringen bland sina tusentals erbjudanden.</p>

                            <span className='text-blue-600 underline cursor-pointer pb-5'>Läs hela artikeln här</span>

                            <p className='text-gray-500 text-base'>Tack för ditt intresse för DealGuru! Besök oss regelbundet för att ta del av våra senaste nyheter och framträdanden i media.</p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}