import React from "react";
import Image from "next/image";
import { iconBell } from "@/constants/Images";
import DropDown from "../dropDown/DropDown";
import SearchBar from "../searchBar/SearchBar";
import { layoutProps } from "@/types/HeaderProps";
import Link from "next/link";

const Header = ({ heading, description }: layoutProps) => {
  return (
    <div className="h-[82px] pb-[10px] my-[15px] bg-primaryBlack sticky top-0 z-[99] flex items-center justify-between pe-[50px] ms-[10px]">
      <div className="flex flex-col ">
        <div className="text-[20px]">{heading}</div>
        <div className="text-[14px] text-customGrey">{description}</div>
      </div>
      <div className="flex">
        <SearchBar width={261} />
        <Link
          href={"/notifications"}
          className="bg-[#A2A1A81A] ms-5 w-[50px] h-[50px] flex items-center rounded-[10px] justify-center"
        >
          <Image src={iconBell} className="h-6 w-6" alt="IconBell" />
        </Link>

        <div className="w-[184px]">
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
