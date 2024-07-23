import { cn } from "@/lib/utils";
import { WrapperFunctionType } from "@/types/AllTypes";
import React from "react";

const LayoutWrapper = ({
  className,
  children,
}: WrapperFunctionType): JSX.Element => {
  return (
    <div
      className={cn(
        className,
        "px-4  min-h-screen 2xl:px-x-pad md:px-8 w-full mt-28 3xl:w-[1900px] 3xl:m-auto 3xl:mt-28"
      )}
    >
      {children}
    </div>
  );
};

export default LayoutWrapper;
