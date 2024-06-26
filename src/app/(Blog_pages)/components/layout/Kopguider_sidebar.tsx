import React from "react";
import Sidebar_card from "../common/Sidebar_card";
import Sidebar_ad from "../common/Sidebar_ad";

const Kopguider_sidebar = () => {
  return (
    <section className='flex flex-col gap-4 mt-6'>
      <h3 className='text-2xl text-gray-800 font-bold'>Mest lästa guiderna just nu</h3>
      <div className='flex flex-col gap-6'>
          <Sidebar_card />
          <Sidebar_card />
          <Sidebar_card />
          <Sidebar_card />
          <Sidebar_card />
          <Sidebar_card />
      </div>
      <Sidebar_ad />
      <div className='flex flex-col gap-6'>
        <h3 className='text-2xl text-gray-800 font-bold'>Våra senaste köpguider och artiklar</h3>
        <Sidebar_card />
        <Sidebar_card />
        <Sidebar_card />
      </div>
    </section>
  );
};

export default Kopguider_sidebar;
