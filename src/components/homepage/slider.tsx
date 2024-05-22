import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ScrollCard from "./scrollCard";

export default function CarouselSize() {
  return (
    <div className="flex">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent className="ml-0">
          <CarouselItem className=" pl-0 md:basis-1/2 lg:basis-1/3">
            <ScrollCard />
          </CarouselItem>
          <CarouselItem className=" pl-0 md:basis-1/2 lg:basis-1/3">
            <ScrollCard />
          </CarouselItem>
          <CarouselItem className=" pl-0 md:basis-1/2 lg:basis-1/3">
            <ScrollCard />
          </CarouselItem>
          <CarouselItem className=" pl-0 md:basis-1/2 lg:basis-1/3">
            <ScrollCard />
          </CarouselItem>
          <CarouselItem className=" pl-0 md:basis-1/2 lg:basis-1/3">
            <ScrollCard />
          </CarouselItem>
          <CarouselItem className=" pl-0 md:basis-1/2 lg:basis-1/3">
            <ScrollCard />
          </CarouselItem>
          <CarouselItem className=" pl-0 md:basis-1/2 lg:basis-1/3">
            <ScrollCard />
          </CarouselItem>
          <CarouselItem className=" pl-0 md:basis-1/2 lg:basis-1/3">
            <ScrollCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 opacity-40 w-12 h-12 disabled:hidden" />
        <CarouselNext className="absolute right-2 opacity-40 w-12 h-12 " />
      </Carousel>
    </div>
  );
}
