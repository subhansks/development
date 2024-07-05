"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import UserProfileLinksSlider from "@/components/homepage/UserProfile_mobile_links_slider";

// Define the props type
interface ProfilePageProps {
  children: ReactNode;
}

// Navigation items data
const navItems = [
  {
    name: "Mitt konto",
    icon: "/assets/svg/profile/1.svg",
    activeIcon: "/assets/svg/profile/active-1.svg",
    href: "/mitt-konto",
  },
  {
    name: "Mina deals",
    icon: "/assets/svg/profile/2.svg",
    activeIcon: "/assets/svg/profile/active-2.svg",
    href: "/mitt-konto/mina-deals",
  },
  {
    name: "Sparade erbjudanden",
    icon: "/assets/svg/profile/3.svg",
    activeIcon: "/assets/svg/profile/active-3.svg",
    href: "/mitt-konto/sparade-erbjudanden",
  },
  {
    name: "Mina diskussioner",
    icon: "/assets/svg/profile/4.svg",
    activeIcon: "/assets/svg/profile/active-4.svg",
    href: "/mitt-konto/mina-diskussioner",
  },
  {
    name: "Inställningar",
    icon: "/assets/svg/profile/5.svg",
    activeIcon: "/assets/svg/profile/active-5.svg",
    href: "/mitt-konto/installningar",
  },
  {
    name: "Logga ut",
    icon: "/assets/svg/profile/6.svg",
    activeIcon: "/assets/svg/profile/active-6.svg",
    href: "/logga-ut",
  },
];

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
