import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loader = () => {
  return (
    <div className="bg-dealguru-white p-10 flex flex-col rounded-lg gap-4 shadow-md shadow-gray-200">
      <Skeleton className="w-1/2 h-5" />
      <Skeleton className="w-1/5 h-5" />
      <Skeleton className="w-1/3 h-5" />
    </div>
  );
};

export default Loader;
