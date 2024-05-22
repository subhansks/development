import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
const category = [
  "Presenter",
  "Gratisprover",
  "Elektronik",
  "TV",
  "Grillar",
  "Skor",
  "Smartphones & Mobiltelefoner",
  "Robotdammsugare",
  "Kuponger",
  "Jackor",
  "Kläder",
  "Kroppsvård",
  "Trädgård",
  "Parfymer",
  "Resor",
  "Ekonomi",
  "Jackor",
  "Kläder",
  "Kroppsvård",
  "Trädgård",
  "Parfymer",
  "Resor",
  "Ekonomi",
];
export default function Category_slider() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="mt-3 ml-12 mr-12"
    >
      <CarouselContent className="ml-0 flex gap-3 pl-4">
        {category.map((d, index) => (
          <CarouselItem className=" flex  w-fit  pl-0 " key={index}>
            <div className=" text-nowrap w-fit px-[12px] py-[8px] rounded-lg bg-dealguru-white">
              <Link
                className="text-sm text-dealguru-blue font-bold"
                href={`/${d}`}
              >
                {" "}
                {d}
              </Link>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="rounded-lg h-10 hover:text-dealguru-white hover:bg-dealguru-blue" />
      <CarouselNext className="rounded-lg h-10  hover:text-dealguru-white hover:bg-dealguru-blue" />
    </Carousel>
  );
}
