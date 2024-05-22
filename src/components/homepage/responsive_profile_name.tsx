import Image from "next/image";
import React from "react";

const Responsive_profile_name = () => {
  return (
    <div className="md:hidden flex bg-dealguru-white rounded-lg p-3 gap-2">
      <Image
        width={40}
        height={40}
        src="/blank_avatar_new.png"
        className="w-[40px]  h-[40px] rounded-full p-1"
        alt="Avatar"
      />
      <div className="flex flex-col">
        <h1 className="font-bold text-xl text-dealguru-black">John</h1>
        <p className="text-[12px] text-gray-500">
          Kul att se dig! Sugen på att göra lite bra deals?
        </p>
      </div>
    </div>
  );
};

export default Responsive_profile_name;
