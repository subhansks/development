import { cn } from "@/lib/utils";
import { WrapperFunctionType } from "@/types/AllTypes";
import React from "react";

const MainWrapperFunction = ({
  className,
  children,
}: WrapperFunctionType): JSX.Element => {
  return (
    <div
      className={cn(
        className,
        " z-0 min-h-screen  w-full 3xl:w-[1900px] 3xl:m-auto "
      )}
    >
      {children}
    </div>
  );
};

export default MainWrapperFunction;
