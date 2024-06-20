import React, { useState } from "react";

interface CustomButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

function CustomButton({
  text,
  onClick,
  className = "",
  type = "button",
}: CustomButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      type={type}
      className={`bg-dealguru-blue text-white py-2 px-4 rounded w-full transition-all duration-200 ease-in-out border-2 border-transparent hover:border-dealguru-blue hover:bg-white hover:text-dealguru-blue ${
        isPressed ? "scale-95" : "scale-100"
      } ${className}`}
      onClick={onClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
    >
      {text}
    </button>
  );
}

export default CustomButton;
