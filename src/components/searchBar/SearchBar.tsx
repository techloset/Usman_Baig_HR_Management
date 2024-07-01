import { iconSearch } from "@/constants/Images";
import { SEARCH_BAR_PROPS } from "@/types/types";
import Image from "next/image";
import React from "react";

const SearchBar = ({ width }: SEARCH_BAR_PROPS) => {
  return (
    <div
      className={`flex w-[${width}px] border-[#A2A1A81A] border-[1px] rounded-[10px] px-[16px] py-[13px]`}
    >
      <Image src={iconSearch} alt="iconSearch" />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent ms-[10px] focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
