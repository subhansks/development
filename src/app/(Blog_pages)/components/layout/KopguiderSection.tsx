import React from "react";
import Kopguider_Section_Structure from "../modules/Kopguider_Section_Structure";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const KopguiderSection = ({ details }: any | undefined) => {
  return (
    <section className='md:w-[95%] lg:w-[90%] w-[100%] mx-auto'>
      <div className='flex items-center flex-col gap-4 w-full'>
        <div className='flex sm:items-center justify-between w-full sm:flex-row flex-col gap-4 items-start'>
          <Tabs defaultValue="newest" className="flex flex-col w-full items-center justify-center gap-4 py-2 px-4 rounded-md">
            <div className='flex w-full justify-between'>
              <h3 className='text-2xl font-semibold text-gray-800'>Articles</h3>
              <TabsList className='bg-gray-200'>
                <TabsTrigger value="newest">Newest</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value='newest'>
                <Kopguider_Section_Structure details={details} />
            </TabsContent>

            <TabsContent value='popular'>
              <Kopguider_Section_Structure details={details} />
            </TabsContent>

          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default KopguiderSection;
