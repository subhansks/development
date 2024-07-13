import React from "react";
import Kopguider_Section_Structure from "../modules/Kopguider_Section_Structure";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const KopguiderSection = ({ details }: any | undefined) => {
  return (
    <section className='w-[100%] mx-auto'>
      <div className='flex items-center flex-col gap-4 w-full'>
        <div className='flex sm:items-center justify-between w-full sm:flex-row flex-col gap-4 items-start'>
          <Tabs defaultValue="newest" className="flex flex-col w-full items-center justify-center gap-2 py-2 rounded-md">
            <div className='flex w-full justify-between'>
              <h3 className='text-2xl font-semibold text-gray-800 mobile-hidden pt-5'>Köpguider</h3>
              <TabsList className='bg-white mob-w-full dealguru-bottom-navigation-main'>
                <TabsTrigger value="newest">Nya</TabsTrigger>
                <TabsTrigger value="popular">Populära</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value='newest' className="w-full">
              <Kopguider_Section_Structure details={details} />
              <button className="border-dealguru-blue border rounded-lg py-2 px-4 mt-8 w-full bg-transparent font-light text-dealguru-blue">
                Visa fler
              </button>
            </TabsContent>

            <TabsContent value='popular' className="w-full">
              <Kopguider_Section_Structure details={details} />
              <button className="border-dealguru-blue border rounded-lg py-2 px-4 mt-8 w-full bg-transparent font-light text-dealguru-blue">
                Visa fler
              </button>
            </TabsContent>

          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default KopguiderSection;
