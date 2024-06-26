"use client";
import React from "react";

const ToTop = () => {
  return (
    <div
      onClick={() => window.scrollTo(0, 0)}
      className="rounded-full py-3 px-5 text-dealguru-white bg-dealguru-black cursor-pointer md:block hidden "
    >
      Till toppen
    </div>
  );
};

export default ToTop;
