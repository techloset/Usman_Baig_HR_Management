import React from "react";
import { InputProps } from "@/types/InputProps";

const Input = ({ value, name, type, placeholder, onChange }: InputProps) => {
  return (
    <div className="p-[10px] w-full">
      <input
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="focus:outline-none w-full p-4 h-14 rounded-[10px] bg-primaryBlack border-[1px] border-borderGrey text-white"
      />
    </div>
  );
};

export default Input;
