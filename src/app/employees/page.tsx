import React from "react";
import Image from "next/image";
import EmployeeTable from "@/components/employeeTable/EmployeeTable";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import PaginationBar from "@/components/paginationBar/PaginationBar";
import SearchBar from "@/components/searchBar/SearchBar";
import { iconAdd, iconFilter } from "@/constants/Images";
import Link from "next/link";

const page = () => {
  return (
    <DefaultLayout
      heading={"All Employees"}
      description={"All Employee Information"}
    >
      <div className="m-[30px] border-[1px] border-borderGrey rounded-[10px] p-5">
        <div className="flex justify-between items-center">
          <SearchBar width={261} />
          <div className="flex">
            <Link
              href={"/employees/addEmployee"}
              className="flex bg-customOrange ease-in-out hover:text-customOrange duration-300 hover:bg-primaryBlack border-customOrange border-[1px] hover:border-customOrange py-[11px] px-5 rounded-[10px] "
            >
              <Image src={iconAdd} alt="iconAdd" />
              <div className="ms-[10px] text-[16px]">Add New Employee</div>
            </Link>
            <button className="bg-customDark hover:border-customOrange ease-in-out duration-300 hover:text-customOrange border-[1px] flex items-center ms-5 rounded-[10px] px-[22.5px] border-borderGrey">
              <Image src={iconFilter} alt="iconAdd" />
              <div className="ms-[10px] text-[16px]">Filter</div>
            </button>
          </div>
        </div>
        <EmployeeTable />
        <PaginationBar />
      </div>
    </DefaultLayout>
  );
};

export default page;
