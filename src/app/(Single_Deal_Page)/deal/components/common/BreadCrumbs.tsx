import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import React from "react";

const BreadCrumbs = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="flex-nowrap">
        <BreadcrumbItem>
          <BreadcrumbLink className="text-base text-dealguru-blue " href="/">
            Hem
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="" />
        <BreadcrumbItem>
          <BreadcrumbLink
            className="text-base text-dealguru-blue "
            href="/deals/legoland"
          >
            Legoland
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem className="overflow-hidden">
          <BreadcrumbPage className="text-base text-gray-500 truncate ">
            50% rabatt på familjebiljett till LEGOLAND Billund
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
