import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Loading = () => {
  return (
    <>
      {/* <Skeleton className="md_lg:col-span-5 md:col-span-7 h-36 w-full bg-slate-300 mt-14 rounded-xl" />
      <Skeleton className="md_lg:col-span-5 md:col-span-7 h-36 w-full bg-slate-300" />
      <Skeleton className="md_lg:col-span-5 md:col-span-7 h-36 w-full bg-slate-300" />
      <Skeleton className="md_lg:col-span-5 md:col-span-7 h-36 w-full bg-slate-300" /> */}
      <div className="w-full mx-auto mt-14 flex justify-center">
        <div className="border-t-4 border-b-4 border-dealguru-blue rounded-full h-20 w-20 animate-spin" />
      </div>
    </>
  );
};

export default Loading;
