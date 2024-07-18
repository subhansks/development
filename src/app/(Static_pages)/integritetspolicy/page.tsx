import React from 'react';
import Image from 'next/image';
import '../static_pages.css';

export default function PrivacyPolicyPage() {
    return (
        <>
            <main className='integritetspolicy'>
                <div>
                    <section className='static-page-main'>
                        <div className='static-page-container relative w-full mt-26'>
                            <div className='bg-image-container'>
                                <Image src='/assets/images/page-header.jpg' alt='Image' layout='fill' objectFit='cover' className='bg-image' />
                            </div>
                            <h1 className='text-overlay'>Integritetspolicy</h1>
                        </div>
                    </section>

                    <section className='space-y-8 max-w-screen-md_lg mx-auto px-10 md:px-20 my-14 md:my-20 content_sec'>
                        
                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Integritetspolicy</h2>
                            <p className='text-gray-500 text-base'>
                                DealGuru är en svensk hemsida som erbjuder medlemmarna personligt anpassade erbjudanden. Vi värnar om din integritet och vi är angelägna om att skydda och säkerställa säkerheten för dina personuppgifter.
                            </p>
                            <p className='text-gray-500 text-base'>
                                Denna integritetspolicy beskriver hur vi samlar in, använder och skyddar dina personuppgifter när du besöker vår hemsida och när du blir medlem hos oss. Genom att besöka vår hemsida och/eller bli medlem accepterar du vår integritetspolicy och vår användning av dina personuppgifter enligt denna policy.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Information som samlas in</h2>
                            <p className='text-gray-500 text-base'>
                                När du blir medlem hos oss kommer vi att samla in viss personlig information från dig, såsom ditt namn, e-postadress, postadress och telefonnummer. Vi kommer också att samla in information om dina köp och preferenser för att kunna erbjuda dig personligt anpassade erbjudanden.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Användning av dina personuppgifter</h2>
                            <p className='text-gray-500 text-base'>
                                Vi använder dina personuppgifter för att kunna erbjuda dig personligt anpassade erbjudanden och för att kunna kontakta dig med relevant information och erbjudanden. Vi kan också använda dina personuppgifter för att förbättra vår hemsida och för att utföra marknadsföring och statistisk analys.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Delning av dina personuppgifter</h2>
                            <p className='text-gray-500 text-base'>
                                Vi kommer inte att sälja eller på annat sätt dela dina personuppgifter med tredje part utan ditt samtycke. Vi kan dock komma att dela dina personuppgifter med våra samarbetspartners i syfte att erbjuda dig personligt anpassade erbjudanden.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Säkerhet</h2>
                            <p className='text-gray-500 text-base'>
                                Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot obehörig åtkomst, förlust eller annan oegentlighet.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Dina rättigheter</h2>
                            <p className='text-gray-500 text-base'>
                                Du har rätt att få tillgång till och att rätta till dina personuppgifter när som helst. Du kan också välja att avsluta ditt medlemskap och begära att vi raderar dina personuppgifter.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Ändringar av policy</h2>
                            <p className='text-gray-500 text-base'>
                                Vi förbehåller oss rätten att göra ändringar i denna integritetspolicy. Eventuella ändringar kommer att publiceras på vår hemsida.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Kontakta oss</h2>
                            <p className='text-gray-500 text-base'>
                                Om du har några frågor eller oro för vår användning av din personliga information, vänligen kontakta oss för ytterligare information. <a href='/contact' className='text-blue-600 underline'>Kontakta oss här</a>.
                            </p>
                        </div>

                    </section>
                </div>
            </main>
        </>
    )
}
