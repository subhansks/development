import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

const blogs = [
  {
    src: "/assets/images/deal1.jpg",
    title: "Hitta rätt skäggtrimmer för dig och ditt skägg med DealGuru",
    desc: "We put science into action by asking all the relevant why and how. We go beyond the buzz...",
    categories: ["Barnvagnar", "Barn"],
    user_img: "/assets/images/blank_avatar_new.png",
    user_name: "Malin",
    user_date: "02/04/2024",
    link: "/",
  },
  {
    src: "/assets/images/deal1.jpg",
    title: "Köpguide: bästa skäggoljan för män med olika hudtyper",
    desc: "We put science into action by asking all the relevant why and how. We go beyond the buzz...",
    categories: ["Barnvagnar", "Barn"],
    user_img: "/assets/images/blank_avatar_new.png",
    user_name: "Malin",
    user_date: "02/04/2024",
    link: "/",
  },
  {
    src: "/assets/images/deal1.jpg",
    title: "Hur ska man ta hand om sitt skägg?",
    desc: "We put science into action by asking all the relevant why and how. We go beyond the buzz...",
    categories: ["Barnvagnar", "Barn"],
    user_img: "/assets/images/blank_avatar_new.png",
    user_name: "Malin",
    user_date: "02/04/2024",
    link: "/",
  },
  {
    src: "/assets/images/deal1.jpg",
    title: "Hur använder man skäggolja och hur mycket är lagom?",
    desc: "We put science into action by asking all the relevant why and how. We go beyond the buzz...",
    categories: ["Barnvagnar", "Barn"],
    user_img: "/assets/images/blank_avatar_new.png",
    user_name: "Malin",
    user_date: "02/04/2024",
    link: "/",
  },
  {
    src: "/assets/images/deal1.jpg",
    title: "Hur använder man skäggolja och hur mycket är lagom?",
    desc: "We put science into action by asking all the relevant why and how. We go beyond the buzz...",
    categories: ["Barnvagnar", "Barn"],
    user_img: "/assets/images/blank_avatar_new.png",
    user_name: "Malin",
    user_date: "02/04/2024",
    link: "/kopguider/${'Bästa deal du hittat ? Som du är nöjd med ?'}",
  },
];

const SingleBlogSliderCard = () => {
  return (
    <div className="flex flex-wrap">
      {blogs.map((blog, index) => (
        // <div key={index} className="bg-dealguru-white mr-4 w-[350px] rounded-lg shadow-lg shadow-gray-190 p-[1rem] flex flex-col justify-center items-center gap-3">
        <div key={index} className="bg-dealguru-white mr-4 w-[350px] p-4  rounded-lg shadow-lg shadow-gray-190 flex flex-col justify-center gap-4">
          <Link href={blog.link}><Image src={blog.src} alt={blog.title} width={400} height={400} className='rounded-md h-[200px] self-center object-cover' /></Link>
          <Link href={blog.link}><h3 className='text-gray-800 text-xl font-semibold'>{blog.title}</h3></Link>
          <p className='text-gray-500 text-sm'>{blog.desc}</p>
          <Button variant={'outline'} size={'sm'} className='w-fit bg-gray-100 text-xs font-semibold h-auto py-1 px-2'>health & beauty</Button>
          <div className='flex items-center gap-4'>
              <Image src={blog.user_img} alt='' width={40} height={40} className='rounded-full object-scale-down' />
              <div>
                  <h4 className='text-gray-800 font-semibold text-sm'>DealGuru-{blog.user_name}</h4>
                  <p className='text-gray-400 text-sm'>{blog.user_date}</p>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleBlogSliderCard;
