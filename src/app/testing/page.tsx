"use client";
import { useEffect, useState } from "react";

const testing = () => {
  const [isWidth700, setIsWidth700] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsWidth700(window.innerWidth === 700 || window.innerWidth > 700);
    };

    // Check initial screen width
    checkScreenWidth();
    console.log(isWidth700, "-----------333333333------------");

    // Add event listener to check screen width on resize
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const divStyle = {
    color: isWidth700 ? "red" : "blue",
    backgroundColor: isWidth700 ? "lightgrey" : "white",
    padding: isWidth700 ? "400px" : "10px",
    fontSize: isWidth700 ? "14px" : "16px",
    height: "600px",
  };

  return (
    <div style={divStyle}>
      This content changes style based on screen width. This content changes
      style based on screen width. This content changes style based on screen
      width. This content changes style based on screen width. This content
      changes style based on screen width. This content changes style based on
      screen width. This content changes style based on screen width. This
      content changes style based on screen width. This content changes style
      based on screen width. This content changes style based on screen width.
      This content changes style based on screen width. This content changes
      style based on screen width. This content changes style based on screen
      width. This content changes style based on screen width. This content
      changes style based on screen width.
    </div>
  );
};

export default testing;
