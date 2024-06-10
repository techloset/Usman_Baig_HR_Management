import React from "react";
import Image from "next/image";
import { profilePhoto } from "@/constants/Images";
import { AttendanceTableProps } from "@/types/AttendanceTableProps";
import SearchBar from "../searchBar/SearchBar";
import PaginationBar from "../paginationBar/PaginationBar";
import { ATTENDANCE_TABLE_DATA } from "@/constants/Constants";

const AttendanceTable = ({
  display,
  SearchBarDisplay,
}: AttendanceTableProps) => {
  return (
    <div className="ms-[10px] me-[30px] rounded-[10px] border-[1px] p-5 border-borderGrey mb-[30px] mt-5 shadow-md ">
      <div className={`mb-[30px] ${SearchBarDisplay}`}>
        <SearchBar width={330} />
      </div>
      <div className={` ${display} mb-[25px] items-center justify-between`}>
        <div className="text-[20px] font-semibold ">Attendance Overview</div>
        <div className="border-[1px] py-[9px] px-[10px] rounded-[10px] border-borderGrey ">
          View All
        </div>
      </div>
      <table className="w-full font-light text-sm  text-left rtl:text-right ">
        <thead className="text-[16px] text-customGrey font-light">
          <tr>
            <th scope="col" className="py-[10px]">
              Employee Name
            </th>
            <th scope="col" className="py-[10px]">
              Designation
            </th>
            <th scope="col" className="py-[10px]">
              Type
            </th>
            <th scope="col" className="py-[10px]">
              Check In Time
            </th>
            <th scope="col" className="py-[10px]">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {ATTENDANCE_TABLE_DATA.map((data, i: number) => {
            return (
              <tr className="border-t-[1px] border-borderGrey" key={i}>
                <th scope="row" className=" flex items-center pt-[10px] ">
                  <Image
                    src={profilePhoto}
                    height={36}
                    width={36}
                    className="rounded-[18px]"
                    alt="Photo"
                  />
                  <div className="text-[16px] ms-[10px] ">{data.name}</div>
                </th>
                <td className="pt-[10px]">{data.position}</td>
                <td className="pt-[10px]">{data.location}</td>
                <td className="pt-[10px]">{data.time}</td>
                <td className="pt-[10px]">
                  <div
                    className={` ${
                      data.status === "On Time"
                        ? "bg-successBackground text-success"
                        : "bg-dangerBackground text-danger"
                    } w-fit text-[12px] rounded-[4px] px-[9px] py-[3px] font-light`}
                  >
                    {data.status}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <PaginationBar />
    </div>
  );
};

export default AttendanceTable;
