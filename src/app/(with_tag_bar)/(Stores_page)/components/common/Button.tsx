import React from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-[16px] leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300  w-full mb-4  text-center justify-center border-0 rounded-[8px] focus:outline-none bg-[#0367DD] text-white px-5 h-[38px] "
      id="GoDelete"
    >
      {children}
    </button>
  );
};

export default Button;
