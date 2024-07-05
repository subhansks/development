import React from "react";
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

import Kopguider_Comment_Section from "./Kopguider_Comment_Section";

const KopguiderLeftSection = ({ details }: any | undefined) => {
  return (
    <>
      <section className='md:w-[95%] lg:[w-90%] w-[100%] mx-auto'>
        <div className='bg-white blog-contain py-5 px-8'>
          <Button variant={'outline'} size={'sm'} className='w-fit bg-gray-100 text-xs font-semibold h-auto py-1 px-2 mt-5'>health & beauty</Button>
          <div className='mt-6 flex flex-col gap-4'>
              <h3 className='text-2xl text-gray-800 font-bold'>ALLT DU BEHÖVER VETA INNAN DU KÖPER ETT TYNGDTÄCKE</h3>
          </div>
          <div className="blog-txt">
            <p><strong>Låt oss tala om sömn – den där flyktiga gästen som ibland verkar alltför svår att bjuda in. Visste du att var tredje svensk vaknar utan att känna sig riktigt utvilad? Oro och stress är vanliga orsaker till sömnproblem och det är cirka en miljon svenskar som medicinerar sig mot sina sömnbesvär. Det är en tankeställare, inte sant? Stress och oroliga tankar gör det ofta svårt för oss att slappna av. Och det är här tyngdtäcken kommer in i bilden!</strong></p>
            <h3>Vad är grejen med tyngdtäcken?</h3>
            <p>Ett tyngdtäcke är ett sovtäcke med insydda tyngder. Det är som en kram som varar hela natten och som ger dig en känsla av trygghet. Det är lite så ett tyngdtäcke fungerar. Det inte bara ett täcke utan det är ett sovhjälpmedel med extra vikt, designat för att omsluta dig i ett lugn. Täcket är tänkt att användas inte bara för att boosta din sömnkvalitet utan också som en terapeutisk kompis mot ångest och svårigheter att somna.</p>
            <p>Täckets tyngd varierar mellan 3-18 kg och skapar ett lätt och behagligt tryck mot kroppen, ungefär som om du får en massage. Det gör att hjärnan frigör må bra-hormoner som serotonin och oxytocin, samtidigt som det sänker nivån av stresshormonet kortisol. Blodtrycket sjunker, andningen blir lugnare och du känner dig trygg. När du sover under ett vikttäcke ökar även sömnhormonet melatonin, vilket gör dig sömnig.&nbsp;</p>
            <h3>Vad gör ett tyngdtäcke</h3>
            <ul>
            <li>Bidrar till en känsla av säkerhet</li>
            <li>Bidrar till avslappning</li>
            <li>Minskar ångest</li>
            <li>Minskar sömnstörningar</li>
            <li>Ökar sömnhormonet melatonin</li>
            <li>Minskar stress och oro</li>
            <li>Frigör må bra-hormoner som serotonin och oxytocin</li>
            </ul>
            <h3><strong>Viktigt att tänka på vid köp av tyngdtäcke</strong></h3>
            <p>När du väl bestämmer dig för att ge ett tyngdtäcke ett försök, finns det några saker att tänka på.</p>
            <p><strong>1. Vikt</strong></p>
            <p>Tyngdtäckets vikt bör vara tillräckligt tung för att ge den önskade känslan av tryck, men inte så tung att det känns obehagligt. Köper du däremot ett för lätt tyngdtäcke ger det ingen effekt. En tumregel som brukar följas är att du väljer ett tyngdtäcke som väger cirka 10% av din egna kroppsvikt. Så väger du 70 kg så kommer förmodligen ett tyngdtäcke på 7 kg fungera väldigt bra. Det finns dock undantag om du exempelvis har väldigt svåra sömnproblem. Då rekommenderas en tyngre modell, upp mot 15-20% av din kroppsvikt.</p>
            <p><strong>2. Pris</strong>&nbsp;</p>
            <p>Det är framförallt kvaliteten på täcket som styr priserna, du kan hitta täcken alltifrån 500-7000 kronor. Även vikten har en betydelse här - ju tyngre täcke du väljer, desto mer kommer det förmodligen att kosta. Det samma gäller med täcken som har ull som yttertyg, dessa är dyrare än täcken med polyester. Det allra dyraste tyngdtäckena är tillverkade av bambu.</p>
            <p><strong>3. Det finns olika typer av tyngdtäcken</strong></p>
            <p>Det finns tyngdtäcken med kedjor, bollar, kisel, sand eller glaspärlor som fyllning. De allra vanligaste varianterna är dock kiseltäcke, kedjetäcke/ringtäcke och bolltäcke.</p>
            <ul>
            <li><strong>Kiseltäcke</strong>: Är den vanligaste typen av tyngdtäcke. Fyllningen består av antingen kisel eller glaskulor. Dessa är sedan oftast inlindade i någon typ av polyester.</li>
            <li><strong>Kedjetäcke/ringtäcke:</strong> Ringtäcken och kedjetäcken är precis vad det låter som – täcken som använder sig av ringar eller kedjor som tyngder. Dessa är insydda i kanaler och består oftast av någon form av stål.</li>
            <li><strong>Bolltäcke</strong>: Ett bolltäcke är ett täcke med ihåliga bollar. Många liknar dessa täcken med känslan av att befinna sig i ett bollhav.</li>
            </ul>
            <h3>För och nackdelar med tyngdtäcke</h3>
            <p><strong>Fördelar med tyngdtäcke:</strong></p>
            <p>+ Främjar en bättre sömnkvalitet och sömnens längd.<br/>+ Ger en känsla av trygghet och säkerhet.<br/>+ Kan hjälpa mot sömnstörningar och ångest.<br/>+ Ökar kroppens produktion av sömnhormonet melatonin.<br/>+ Minskar stress och oro.</p>
            <p><strong>Nackdelar med tyngdtäcke:</strong></p>
            <p>- Kan vara för tungt för vissa människor.<br/>- Kanske inte passar alla sömnpositioner.<br/>- Kan bli för varmt under natten.<br/>- Många modeller är dyra.<br/>- Kan krävas lite tid för att man ska vänja sig vid känslan av trycket.</p>
            <h3>Vilket tyngdtäcke är bäst&nbsp;</h3>
            <p>Det bästa tyngdtäcket beror främst på ens egna individuella preferenser och behov. Det viktigaste är att det känns bekvämt, främjar en god sömnkvalitet och har rätt vikt för just dig och din kroppsvikt.&nbsp;</p>
            <p>Däremot finns det varumärken på marknaden som är högt rankade för att ha bra tyngdtäcken och är rekommenderade av många konsumenter och läkare.&nbsp;</p>
            <h3>Pearl Classic från Cura</h3>
            <p>Detta tyngdtäcke har varit den marknadsledande modellen i flera år. Detta är en modell med ett rimligt pris som även har fått fantastiska recensioner av både kunder och testpaneler. Modellen är den mest sålda på den nordiska marknaden och levererar en avslappnande känsla helt i sin egen klass. Vill du ha det bästa av det bästa så är Pearl Classic valet för dig!</p>
            <ul>
            <li>Modell som är helt tillverkad av bomull.</li>
            <li>Fyllningen består av glaspärlor och polyester-padding.</li>
            </ul>
            <h3>Emma Relax&nbsp;</h3>
            <p>En modell som kommer dra ner din stressnivå och få dig att somna lättare varje natt. Tack vare täckets utformning är det också perfekt i exempelvis soffan för att få en skön avslappning.</p>
            <ul>
            <li>Yttermaterialet består av 100% andbar bomull.</li>
            <li>Innehåller två lager av slitstark polyester som bidrar med en längre hållbarhet.</li>
            <li>Fyllningen består av glaspärlor och mikrofiber.</li>
            <li>Emma Sleep ger dig 100 dagars prova-på-garanti och kan lämnas tillbaka om du inte är nöjd.</li>
            </ul>
            <h3><strong>Heidi tyngdtäcke</strong></h3>
            <p>Ett prisvärt tyngdtäcke för dig som vill ha mycket täcke för pengarna. Täcket finns däremot enbart i 2 vikter (9-12 kilo). Kan man bortse från detta så är täcket Heidi en fantastisk kandidat som vi starkt rekommenderar!&nbsp;</p>
            <ul>
            <li>Fyllning: Polyester och insydda kiselpärlor i rektangulära formar</li>
            <li>Täcket är certifierat enligt STANDARD 100 från OEKO-TEX® - ett certifikat som intygar att produkten klarar tester och levererar en hög kvalitet.</li>
            </ul>
            <p><em>Att välja rätt tyngdtäcke kan kännas svårt, men huvudsaken är att hitta ett som får dig att känna dig lugn, trygg och bekväm. Oavsett vilken modell du landar på, så är du värd en bra nattsömn och att känna dig pigg och utvilad på morgnarna!</em></p>
            <h3>Vanliga frågor och svar om tyngdtäcken</h3>
            <p><strong>Hur många kilo ska man ha på tyngdtäcke?</strong></p>
            <p>När det kommer till att välja vikten på ditt tyngdtäcke, är huvudregeln ganska enkel: sikta på ett täcke som väger runt 10% av din kroppsvikt. Om du exempelvis väger 70 kg, kan ett täcke på 7 kg vara lagom. Lite som en kram, det ska kännas tryggt men inte som att du är fast under en bänkpress. Varje person är unik, så det kan vara värt att testa sig fram för att hitta vad som känns bäst för just dig.</p>
            <p><strong>När ska man inte ha tyngdtäcke?</strong></p>
            <p>Även om många svär vid sinnesron ett tyngdtäcke kan ge, så är de inte för alla. Om du kämpar med svår astma, känslig hud eller klaustrofobi, kanske du ska tänka om. Samma sak gäller för små barn och folk som har svårt att röra sig själva. I dessa fall kan tyngden bli mer av en belastning än en tröst. Lyssna på din kropp och tänk på din hälsa först.</p>
            <p><strong>Vad är tyngdtäcke bra för?</strong></p>
            <p>Har du någonsin lagt märke till hur en god kram får dig att känna dig lugn och trygg? Tyngdtäcken jobbar på samma princip. Genom att applicera ett jämnt tryck över din kropp, kan ett tyngdtäcke hjälpa till att minska ångest, förbättra din sömnkvalitet och till och med minska symtom av PTSD, ADHD och autism. Tänk på det som en kram på kommando som står redo att hjälpa dig slappna av efter en lång dag.</p>
            <p><strong>Kan man använda vanliga påslakan till tyngdtäcke?</strong></p>
            <p>Ja, du kan definitivt använda ett vanligt påslakan till ditt tyngdtäcke, så länge storleken matchar. Det kan faktiskt vara en smart idé, eftersom det lägger till ett lager som är enkelt att ta av och tvätta, vilket sparar dig besväret med att behöva tvätta själva tyngdtäcket för ofta.</p>
            <p><strong>Hur tvättar man ett tyngdtäcke?</strong></p>
            <p>Att tvätta ett tyngdtäcke behöver lite förberedelse. För det första, kolla alltid etiketten för specifika tvättråd! Om ditt täcke går att tvätta i tvättmaskin, använd ett skonsamt, parfymfritt tvättmedel och välj ett fintvättprogram. Låt det lufttorka om möjligt, eller använd en torktumlare på låg värme om täcket tillåter det.<br/><br/>Är ditt tyngdtäcke för tungt för din tvättmaskin så kan frysa in det i frysen för att eliminera bakterier och kvalster. Får det inte plats i frysen så kan du hänga ut det på vintern när det är minusgrader.</p>
          </div>

          <div className='border-t border-gray-300 flex items-center gap-4 mt-6' style={{ paddingBlockStart: '20px' }}>
              <Image src='/assets/images/dealcard1.png' alt='Advertisement' width={60} height={60} className='rounded-full border-[2px] border-gray-800' />
              <div className=''>
                  <h5 className='font-semibold text-gray-800'>Malin</h5>
                  <p className='text-gray-600 text-sm'>DealGuru-Malin</p>
              </div>
          </div>
        </div>

        <Kopguider_Comment_Section />
      </section>
    </>

  );
};

export default KopguiderLeftSection;
