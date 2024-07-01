"use client";
import React from "react";
import Image from "next/image";
import { iconEdit, profilePhoto } from "@/constants/Images";
import SearchBar from "../searchBar/SearchBar";
import PaginationBar from "../paginationBar/PaginationBar";
import { EMPLOYEE_ATTENDACE_TABLE_HEADS } from "@/constants/Constants";
import useAttendanceTable from "./useAttendanceTable";
import {
  ATTENDANCE_TABLE_PROPS,
  EMPLOYEE_ATTENDANCE_DATA,
} from "@/types/types";

const AttendanceTable = ({
  display,
  SearchBarDisplay,
}: ATTENDANCE_TABLE_PROPS) => {
  const {
    tableData,
    handleChange,
    handleUpdate,
    inputEnabled,
    setInputEnabled,
  } = useAttendanceTable();
  return (
    <div className="ms-[10px] me-[30px] rounded-[10px] border-[1px] p-5 border-borderGrey mb-[30px] mt-5 shadow-md ">
      <div className={`mb-[30px] ${SearchBarDisplay}`}>
        <SearchBar width={330} />
        <div className="flex">
          {inputEnabled ? (
            <button
              className=" hover:border-[1px] me-5 hover:border-customOrange hover:bg-primaryBlack hover:text-customOrange flex mt-auto py-[13px] px-5 rounded-[10px] bg-customOrange"
              onClick={handleUpdate}
            >
              Update Data
            </button>
          ) : (
            <></>
          )}
          <button
            className="me-[52px] hover:border-[1px] hover:border-customOrange hover:bg-primaryBlack hover:text-customOrange flex mt-auto py-[13px] px-5 rounded-[10px] bg-customOrange"
            onClick={() => setInputEnabled(!inputEnabled)}
          >
            <Image src={iconEdit} alt="Edit Icon" />
            <div className="ms-[10px]">
              {!inputEnabled ? "Edit Profile" : "Cancel Edit"}
            </div>
          </button>
        </div>
      </div>

      <div className={` ${display} mb-[25px] items-center justify-between`}>
        <div className="text-[20px] font-semibold ">Attendance Overview</div>
        <div className="border-[1px] py-[9px] px-[10px] rounded-[10px] border-borderGrey">
          View All
        </div>
      </div>
      <table className="w-full font-light text-sm  text-left rtl:text-right ">
        <thead className="text-[16px] text-customGrey font-light">
          <tr>
            {EMPLOYEE_ATTENDACE_TABLE_HEADS.map((heading, i) => {
              return (
                <th scope="col" className="py-[10px]" key={i}>
                  {heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData.map((data: EMPLOYEE_ATTENDANCE_DATA, i: number) => {
              const time = data.checkIn;
              console.log("time", time);
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
                    <div className="text-[16px] ms-[10px] ">
                      {data?.firstName}
                    </div>
                  </th>
                  <td className="pt-[10px]">{data?.designation}</td>
                  <td className="pt-[10px]">
                    <input
                      className="bg-primaryBlack"
                      type="text"
                      name="type"
                      onChange={(e) => handleChange(e, i)}
                      value={data?.type}
                    />
                  </td>
                  <td className="pt-[10px]">
                    <input
                      name="checkIn"
                      onChange={(e) => handleChange(e, i)}
                      className="bg-primaryBlack"
                      type="time"
                      value={data?.checkIn}
                    />
                  </td>
                  <td className="pt-[10px]">
                    <div
                      className={` ${
                        data?.status === "On Time"
                          ? "bg-successBackground text-success"
                          : "bg-dangerBackground text-danger"
                      } w-fit text-[12px] rounded-[4px] px-[9px] py-[3px] font-light`}
                    >
                      {data?.status}
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
