import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer_Menu = () => {
  return (
    <div className="px-4 md:px-8 fixed bottom-0 z-50 lg:hidden  md_lg:px-x-pad w-full flex bg-dealguru-white h-16 items-center justify-between">
      <Link href={"/"}>
        <Image
          width={20}
          height={20}
          alt="Footer Nav Button"
          src={"/footer_nav_button.svg"}
        />
      </Link>
      <Link href={"/"}>
        {" "}
        <Image
          width={20}
          height={20}
          alt="Footer Nav Button"
          src={"/footer_search_icon.svg"}
        />
      </Link>
      <Link href={"/"}>
        <Image
          width={20}
          height={20}
          alt="Footer Nav Button"
          src={"/footer_home_icon.svg"}
        />
      </Link>
      <Link href={"/"}>
        <Image
          width={20}
          height={20}
          alt="Footer Nav Button"
          src={"/footer_bookmark_icon.svg"}
        />
      </Link>
      <Link href={"/"}>
        <Image
          width={20}
          height={20}
          alt="Footer Nav Button"
          src={"/footer_profile_icon.svg"}
        />
      </Link>
    </div>
  );
};

export default Footer_Menu;
