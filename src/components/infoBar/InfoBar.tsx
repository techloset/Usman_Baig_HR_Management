import {
  iconBriefcase,
  iconLock,
  iconNotepad,
  iconUser,
} from "@/constants/Images";
import Image from "next/image";
import React from "react";

const InfoBar = ({
  option,
  handleClick,
}: {
  option: Number;
  handleClick: (num: Number) => void;
}) => {
  console.log("option", option);
  return (
    <div className="border-b-[3px] flex mx-[10px] border-borderGrey mb-5">
      <button
        onClick={() => handleClick(0)}
        className={`mb-[-3px] pb-2 ease-in-out duration-300 font-semibold ${
          option === 0
            ? "text-customOrange border-customOrange"
            : "text-white border-borderGrey"
        } text-customOrange text-[16px] flex border-b-[3px] px-[10px]`}
      >
        <Image
          className="me-[10px]"
          src={iconUser}
          height={24}
          width={24}
          alt=""
        />
        Personal Information
      </button>
      <button
        onClick={() => {
          handleClick(1);
          console.log("option", option);
        }}
        className={`mb-[-3px] pb-2 ease-in-out duration-300 font-semibold ${
          option === 1
            ? "text-customOrange border-customOrange"
            : "text-white border-borderGrey"
        } text-customOrange text-[16px] flex border-b-[3px] px-[10px]`}
      >
        <Image
          className="me-[10px]"
          src={iconBriefcase}
          height={24}
          width={24}
          alt=""
        />
        Professional Information
      </button>
      <button
        onClick={() => handleClick(2)}
        className={`mb-[-3px] pb-2 ease-in-out duration-300 font-semibold ${
          option === 2
            ? "text-customOrange border-customOrange"
            : "text-white border-borderGrey"
        } text-customOrange text-[16px] flex border-b-[3px] px-[10px]`}
      >
        <Image
          className="me-[10px]"
          src={iconNotepad}
          height={24}
          width={24}
          alt=""
        />
        Documents
      </button>

      <button
        onClick={() => handleClick(3)}
        className={`mb-[-3px] pb-2 ease-in-out duration-300 font-semibold ${
          option === 3
            ? "text-customOrange border-customOrange"
            : "text-white border-borderGrey"
        } text-customOrange text-[16px] flex border-b-[3px] px-[10px]`}
      >
        <Image
          className="me-[10px]"
          src={iconLock}
          height={24}
          width={24}
          alt=""
        />
        Account Access
      </button>
    </div>
  );
};

export default InfoBar;
