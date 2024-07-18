import React from 'react';
import Image from 'next/image';
import '../static_pages.css';

export default function page() {
    return (
        <>
            <main className='faq'>
                <div>
                    <section className='static-page-main'>
                        <div className='static-page-container relative w-full mt-26'>
                            <div className='bg-image-container'>
                                <Image src='/assets/images/page-header.jpg' alt='Image' layout='fill' objectFit='cover' className='bg-image' />
                            </div>
                            <h1 className='text-overlay'>FAQ</h1>
                        </div>
                    </section>

                    <section className='space-y-8 max-w-screen-md_lg mx-auto px-10 md:px-20 my-14 md:my-20 content_sec'>

                        <div className='space-y-2'>
                        <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>FAQ</h2>
                        <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Varför har min deal tagits bort?</h2>
                            <p className='text-gray-500 text-base'>
                                Det finns flera möjliga anledningar till varför din deal har tagits bort. Det kan vara så att erbjudandet redan fanns publicerat och vi har tagit bort din deal för att undvika dubbletter. Det kan också bero på att du angav en länk som inte är tillåten. Otillåtna länkar kan vara värvningslänkar eller egna affiliatelänkar.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Hur byter jag användarnamn?</h2>
                            <p className='text-gray-500 text-base'>
                                Gå in på dina inställningar när du är inloggad. Under “Användarnamn” anger du det användarnamn du vill ha.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Hur hittar jag mina egna deals?</h2>
                            <p className='text-gray-500 text-base'>
                                Alla deals du lagt upp hittar du på ditt medlemskonto. Klicka på “Mitt konto” och därefter “Mina deals”.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Mina deals syns inte på startsidan!</h2>
                            <p className='text-gray-500 text-base'>
                                Om du nyligen lagt upp en deal så syns den under “Nya deals”. På startsidan finns en knapp där du kan välja sortering. Välj mellan Standard, Popularitet, Snackisar, Nyast och Hetast. Välj nyast så ser du alla deals som nyligen lagts upp.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Jag har hittat en deal som inte fungerar eller är felaktig - vad gör jag?</h2>
                            <p className='text-gray-500 text-base'>
                                Om du har hittat en deal som inte fungerar, där informationen är felaktig eller om länken leder till fel webbsida så kan du anmäla den genom att klicka på den röda flaggan och därefter följa stegen.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Hur kan jag kontakta er?</h2>
                            <p className='text-gray-500 text-base'>
                                Om du behöver hjälp med att lägga upp en deal eller har andra funderingar så kan du skicka ett meddelande via formuläret på denna sida, så återkommer vi så snart vi kan!
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Hur raderar jag mitt konto?</h2>
                            <p className='text-gray-500 text-base'>
                                För att få ditt konto borttaget så kan du kontakta oss här eller skicka ett mail till <a href='mailto:info@dealguru.se' className='text-blue-600 underline'>info@dealguru.se</a>.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Är DealGuru gratis att använda?</h2>
                            <p className='text-gray-500 text-base'>
                                Självklart! DealGuru är helt gratis att använda.
                            </p>
                        </div>

                    </section>
                </div>
            </main>
        </>
    )
}
