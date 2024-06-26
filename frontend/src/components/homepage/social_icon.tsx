import Image from "next/image";
import Link from "next/link";
import React from "react";

const SocialIcons = () => {
  return (
    <div className="flex gap-2 my-6">
      <Link href={"/"}>
        {" "}
        <Image
          width={26}
          height={26}
          src="/assets/svg/social_icons/tiktok.svg"
          className="w-6  h-6 rounded-full"
          alt="Avatar"
        />
      </Link>
      <Link href={"/"}>
        {" "}
        <Image
          width={26}
          height={26}
          src="/assets/svg/social_icons/instagram.svg"
          className="w-6  h-6 rounded-full"
          alt="Avatar"
        />
      </Link>
      <Link href={"/"}>
        <Image
          width={26}
          height={26}
          src="/assets/svg/social_icons/facebook.svg"
          className="w-6  h-6 rounded-full"
          alt="Avatar"
        />
      </Link>
    </div>
  );
};

export default SocialIcons;
