"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import UserProfileLinksSlider from "@/components/homepage/UserProfile_mobile_links_slider";
import { navItems } from "@/constants/navItems";


// Define the props type
interface ProfilePageProps {
  children: ReactNode;
}

export default function ProfilePage({ children }: ProfilePageProps) {
  const pathname = usePathname();
  console.log("Current pathname:", pathname);

  return (
    <main className="grid grid-cols-1 lg:grid-cols-5 lg:gap-7 p-4 z-0 w-full mt-28 2xl:px-16 md:px-8 3xl:w-[1900px] 3xl:m-auto 3xl:mt-28 min-h-screen">
      <UserProfileLinksSlider />
      <div className="col-span-1 bg-gray-100 hidden md:block">
        <nav>
          <ul
            className="list-none p-0 m-0"
            role="navigation"
            aria-label="Profile Navigation"
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className={clsx(
                  "flex items-center min-w-[205px] bg-dealguru-white hover:bg-gray-300 mb-2.5 rounded-md transition-colors duration-300 ease-in-out",
                  {
                    "text-dealguru-blue bg-dealguru-blue":
                      pathname === item.href,
                  }
                )}
              >
                <Link
                  href={item.href}
                  className="flex items-center w-full px-5 py-[7px] no-underline text-sm text-nowrap"
                >
                  <Image
                    src={pathname === item.href ? item.activeIcon : item.icon}
                    alt={`${item.name} icon`}
                    width={20}
                    height={20}
                    loading="lazy"
                  />
                  <span className="ml-2.5">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="col-span-4">{children}</div>
    </main>
  );
}
