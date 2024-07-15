import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/constants/navItems";

import { usePathname } from "next/navigation";
import clsx from "clsx";
export function DropdownMenuDemo({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {navItems.map((item, index) => (

            <Link href={item.href} key={index} className="flex" style={{ all: 'inherit' }}>
              <DropdownMenuItem
                className={clsx(
                  "cursor-pointer",
                  { "text-dealguru-blue ": pathname === item.href }
                )}

              >
                <Image
                  src={pathname === item.href ? item.activeIcon : item.icon}
                  alt={`${item.name} icon`}
                  width={20}
                  height={20}
                  className="mr-2 h-4 w-4"
                  loading="lazy"
                />
                <span>{item.name}</span>
                {/* Optional: Add shortcuts or other elements here */}
              </DropdownMenuItem>
            </Link>
          ))}
        </DropdownMenuGroup>

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
