import Image from "next/image";
import Link from "next/link";
import React from "react";

// Define an array of image objects
const images = [
  {
    src: "/assets/images/sliderCard2.jpg",
    alt: "Bebeconfort Soko Compact Stroller 0-15kg Shadow",
    price: "95 kr",
    originalPrice: "95 kr",
    store: "Amazon",
    categories: ["Barnvagnar", "Barn"],
    likes: 23,
    link: "/",
  },
  {
    src: "/assets/images/sliderCard2.jpg",
    alt: "Bebeconfort Soko Compact Stroller 0-15kg Shadow",
    price: "95 kr",
    originalPrice: "95 kr",
    store: "Amazon",
    categories: ["Barnvagnar", "Barn"],
    likes: 23,
    link: "/",
  },
  {
    src: "/assets/images/sliderCard2.jpg",
    alt: "Bebeconfort Soko Compact Stroller 0-15kg Shadow",
    price: "95 kr",
    originalPrice: "95 kr",
    store: "Amazon",
    categories: ["Barnvagnar", "Barn"],
    likes: 23,
    link: "/",
  },
  {
    src: "/assets/images/sliderCard2.jpg",
    alt: "Bebeconfort Soko Compact Stroller 0-15kg Shadow",
    price: "95 kr",
    originalPrice: "95 kr",
    store: "Amazon",
    categories: ["Barnvagnar", "Barn"],
    likes: 23,
    link: "/",
  },
  {
    src: "/assets/images/sliderCard2.jpg",
    alt: "Bebeconfort Soko Compact Stroller 0-15kg Shadow",
    price: "95 kr",
    originalPrice: "95 kr",
    store: "Amazon",
    categories: ["Barnvagnar", "Barn"],
    likes: 23,
    link: "/",
  },
  {
    src: "/assets/images/sliderCard2.jpg",
    alt: "Bebeconfort Soko Compact Stroller 0-15kg Shadow",
    price: "95 kr",
    originalPrice: "95 kr",
    store: "Amazon",
    categories: ["Barnvagnar", "Barn"],
    likes: 23,
    link: "/",
  },
  {
    src: "/assets/images/sliderCard2.jpg",
    alt: "Bebeconfort Soko Compact Stroller 0-15kg Shadow",
    price: "95 kr",
    originalPrice: "95 kr",
    store: "Amazon",
    categories: ["Barnvagnar", "Barn"],
    likes: 23,
    link: "/",
  },
  {
    src: "/assets/images/sliderCard2.jpg",
    alt: "Bebeconfort Soko Compact Stroller 0-15kg Shadow",
    price: "95 kr",
    originalPrice: "95 kr",
    store: "Amazon",
    categories: ["Barnvagnar", "Barn"],
    likes: 23,
    link: "/",
  },
  {
    src: "/assets/images/sliderCard2.jpg",
    alt: "Bebeconfort Soko Compact Stroller 0-15kg Shadow",
    price: "95 kr",
    originalPrice: "95 kr",
    store: "Amazon",
    categories: ["Barnvagnar", "Barn"],
    likes: 23,
    link: "/",
  },
  {
    src: "/assets/images/sliderCard2.jpg",
    alt: "Bebeconfort Soko Compact Stroller 0-15kg Shadow",
    price: "95 kr",
    originalPrice: "95 kr",
    store: "Amazon",
    categories: ["Barnvagnar", "Barn"],
    likes: 23,
    link: "/",
  },
  {
    src: "/assets/images/sliderCard2.jpg",
    alt: "Bebeconfort Soko Compact Stroller 0-15kg Shadow",
    price: "95 kr",
    originalPrice: "95 kr",
    store: "Amazon",
    categories: ["Barnvagnar", "Barn"],
    likes: 23,
    link: "/",
  },
  // Add more objects as needed
];

const ScrollCard = () => {
  return (
    <div className="flex flex-wrap">
      {images.map((image, index) => (
        <div
          key={index}
          className="bg-dealguru-white mr-4 w-[220px] rounded-lg shadow-lg shadow-gray-190 p-[1rem] flex flex-col justify-center items-center"
        >
          <Link href={image.link}>
            <Image
              width={160}
              height={0}
              src={image.src}
              className="w-[auto] h-[200px]"
              alt={image.alt}
            />
          </Link>
          <Link
            className="text-sm line-clamp-2 font-bold mt-2 antialiased"
            href={image.link}
          >
            {image.alt}
          </Link>
          <div className="flex gap-3 self-start">
            <p className="text-sm text-dealguru-blue line-clamp-2 self-start font-bold">
              {image.price}
            </p>
            <p className="text-sm text-gray-400 line-through decoration-[2px] line-clamp-2 self-start font-bold">
              {image.originalPrice}
            </p>
          </div>
          <Link
            className="text-sm line-clamp-2 self-start font-bold"
            href={image.link}
          >
            {image.store}
          </Link>
          <div className="flex self-start gap-2 my-1">
            {image.categories.map((category, index) => (
              <React.Fragment key={index}>
                <Link
                  className="text-gray-400 capitalize text-sm"
                  href={image.link}
                >
                  {category}
                </Link>
                {index < image.categories.length - 1 && (
                  <div className="border-r border-gray-300 h-5" />
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex gap-4 justify-between items-center self-start">
            <div className="gap-2 bg-dealguru-grey min-w-[40px] max-w-fit min-h-[40px] flex p-2 items-center justify-center rounded-md cursor-pointer">
              <Image
                className="w-[18px]"
                alt="heart"
                width={20}
                height={20}
                src={"/assets/svg//heart.svg"}
              />
              <span className="text-sm text-gray-400">{image.likes}</span>
            </div>
            <Link
              className="bg-dealguru-blue text-white text-sm py-2 px-6 rounded-md font-semibold text-nowrap antialiased"
              href={image.link}
            >
              Visa Deal
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollCard;
