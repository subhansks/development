import React from "react";
import Image from "next/image";

interface InputWithIconProps {
  name: string;
  placeholder: string;
  iconSrc: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: string;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
  name,
  placeholder,
  iconSrc,
  value,
  onChange,
  style = "",
}) => {
  return (
    <div className={`relative flex items-center ${style}`}>
      <Image
        src={iconSrc}
        alt="icon"
        width={20}
        height={20}
        className="absolute left-4"
      />
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="pl-10 pr-4 hidden py-4 w-full border rounded-lg"
      />
    </div>
  );
};

export default InputWithIcon;
