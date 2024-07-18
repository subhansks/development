import React from 'react';
import Image from 'next/image';
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
                            <h1 className='text-overlay'>Medlemsvillkor</h1>
                        </div>
                    </section>

                    <section className='space-y-8 max-w-screen-md_lg mx-auto px-10 md:px-20 my-14 md:my-20 content_sec'>

                    <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Allmänt</h2>
                            <p className='text-gray-500 text-base'>Dealguru.se är en svensk webbplats som startades 2023 och är en plattform som erbjuder användare att dela och diskutera erbjudanden och rabatter på olika produkter och tjänster. Dealguru är öppen för allmänheten att använda utan kostnad. Men det finns några villkor som användare måste följa. Tjänsten, drivs och ägs av DealGuru AB (559408-1761), Vallkärratorn 503, 225 91 Lund.</p>
                            <p className="text-gray-500 text-base">Genom att bli medlem i Dealguru samt vid användande av tjänsten accepterar du villkoren i detta avtal i sin helhet.</p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Om tjänsten</h2>
                            <p className='text-gray-500 text-base'>
                                Dealguru.se är en kostnadsfri tjänst som erbjuder användare att dela och diskutera rabatter och erbjudanden på produkter och tjänster från en rad olika företag och butiker. Dealguru fungerar genom att användare kan lägga upp produkter med länkar till olika erbjudanden, tillsammans med beskrivningar, prisinformation och eventuella rabattkoder eller kuponger som är tillgängliga. Andra användare kan sedan rösta på erbjudandet och lämna kommentarer eller ytterligare information om erbjudandet.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Medlemskap</h2>
                            <p className='text-gray-500 text-base'>
                                För att kunna ta del av dealsen måste man vara medlem på tjänsten. Detta blir man enkelt på <a href='https://www.dealguru.se' className='text-blue-600 underline'>www.dealguru.se</a> genom att ange fullständigt namn samt emailadress och önskat lösenord alternativt genom att skapa ett konto genom att koppla sitt Facebook- eller Google-konto till tjänsten. Endast fysiska personer över 18 år med svenskt personnummer samt juridiska personer med svenskt organisationsnummer kan bli medlemmar.
                            </p>
                            <p className='text-gray-500 text-base'>
                                Genom att registrera dig på tjänsten godtar du att vi kan komma att skicka personligt anpassade erbjudanden baserat på intressen och/eller tidigare köp från Dealguru genom plattformen, nyhetsbrev, SMS-utskick och andra plattformar eller kommunikationsvägar. Skulle du inte önska att mottaga dessa erbjudanden längre kan du enkelt avregistrera dig från fler utskick genom länken som finns i dessa utskick, genom att ändra i inställningarna för ditt konto eller genom att kontakta vår kundtjänst.
                            </p>
                            <p className='text-gray-500 text-base'>
                                Informationen från Dealguru kan innehålla information i form av reklam, alkohol, spel, rabatter och erbjudanden samt andra budskap som ryms inom Dealgurus verksamhet.
                            </p>
                            <p className='text-gray-500 text-base'>
                                Det är förbjudet att skapa flera konton, konto i någon annans namn eller konton för påhittade identiteter eller att ange oriktiga eller ofullständiga uppgifter. Skulle detta ske förbehåller sig Dealguru.se rätten stänga samtliga konton utan förvarning.
                            </p>
                            <p className='text-gray-500 text-base'>
                                Personer som missbrukar, vilseleder eller på annat sätt fuskar kommer stängas av från tjänsten.
                            </p>
                            <p className='text-gray-500 text-base'>
                                Om man ej önskar att vara medlem på Dealguru.se längre kan man meddela detta till <a href='mailto:info@dealguru.se' className='text-blue-600 underline'>info@dealguru.se</a> så kommer kontot stängas.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Personuppgifter</h2>
                            <p className='text-gray-500 text-base'>
                                Genom att registrera sig och använda vår tjänst godkänner man vår integritetspolicy. Vidare garanterar man att man att de uppgifter man uppger är korrekta och aktuella.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Force majeure</h2>
                            <p className='text-gray-500 text-base'>
                                I händelse av situationer som är utanför vår kontroll förbehåller vi oss att åberopa force majeure. Detta skulle kunna vara, men ej begränsat till, situationer såsom arbetsmarknadskonflikt, strejk, lockout, krig, upplopp, eldsvåda, blixtnedslag, explosion, fel i kommunikationsutrustning eller myndighetsingripanden direkt eller indirekt relaterat till Dealguru.se eller dess partners. I händelse av force majeure är Dealguru.se ej skyldig att fullgöra sina skyldigheter och kan ej hållas ansvarig för eventuella problem relaterat till ovan nämnda situationer.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Cookies</h2>
                            <p className='text-gray-500 text-base'>
                                Vad är cookies och vad använder vi de till? En cookie är en liten, liten, textfil som sparas på din dator, surfplatta eller telefon när du besöker en hemsida, i det här fallet Dealguru.se. Cookies används för vissa funktioner som förbättrar vår tjänst för dig som användare samt ger oss statistik om ditt användande av sajten.
                            </p>
                            <p className='text-gray-500 text-base'>
                                Cookies används av oss på Dealguru.se för att ge dig som besökare tillgång till olika funktioner samt för att underlätta din användning och förbättra din upplevelse. En del av dessa cookies är nödvändiga för den grundläggande funktionaliteten på webbplatsen, såsom att vara inloggad på ditt konto, medan andra används för att förstärka användbarheten och din användarupplevelse.
                            </p>
                            <p className='text-gray-500 text-base'>
                                Ytterligare exempel på vad vi använder cookies till:
                                <ul className='list-disc list-inside ml-4'>
                                    <li>Se till att hålla dig inloggad på ditt konto.</li>
                                    <li>Samla in statistik över användandet av sajten för att förbättra tjänsten.</li>
                                    <li>Se till webbplatsens sidor ser konsekventa ut och ge dig en bättre användarupplevelse.</li>
                                </ul>
                            </p>
                            <p className='text-gray-500 text-base'>
                                Du behöver självklart inte acceptera att ta emot cookies om du inte vill och du kan närsomhelst stänga av och/eller radera cookies genom att använda verktygen i din webbläsare. Hur du ska gå tillväga beskrivs i din webbläsares hjälpavsnitt.
                            </p>
                            <p className='text-gray-500 text-base'>
                                Tänk dock på att vissa tjänster och/eller sidor helt eller delvis kan sluta att fungera om du stänger av cookies. Vi rekommenderar därför att du tillåter cookies när du använder vår tjänst.
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>Giltighet för avtalet</h2>
                            <p className='text-gray-500 text-base'>
                                Dealguru.se förbehåller sig rätten att närsomhelst ändra detta avtal. Eventuella ändringar kommer kommuniceras till medlemmarna före ändringarna träder i kraft. Vid ändring av avtalet tillämpas det nya avtalet automatiskt vid fortsatt användande av tjänsten. Om du inte vill acceptera ändringarna kommer du ha möjligheten att stänga ditt konto. Vi förbehåller oss rätten att helt eller delvis överlåta rättigheter och skyldigheter till ett annat företag som kan komma att driva/äga Dealguru.se i framtiden.
                            </p>
                            <p className='text-gray-500 text-base'>
                                Svensk lag ska tillämpas vid tolkning och tillämpning av detta avtal. Om någon del i avtalet visar sig vara ogiltig eller ej tillämpbar ska övriga delar i avtalet fortfarande gälla.
                            </p>
                        </div>
                        
                    </section>
                </div>
            </main>
        </>
    )
}
