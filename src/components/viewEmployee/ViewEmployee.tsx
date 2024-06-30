"use client";
import {
  iconBriefcase,
  iconEdit,
  iconGamil,
  iconProfile,
} from "@/constants/Images";
import Image from "next/image";
import React from "react";
import ProfileMenu from "../profileMenu/ProfileMenu";
import InfoBar from "../infoBar/InfoBar";
import useViewEmployee from "./useViewEmployee";
import ProfileDataField from "../profileDataField/ProfileDataField";
import {
  PROFILE_ACCOUNT_ACCESS,
  PROFILE_PERSONAL_INFO,
  PROFILE_PROFESSIONAL_INFO,
} from "@/constants/EmployeeInfo";
import FileViewer from "../fileViewer/FileViewer";
import ProfileTable from "../profileTable/ProfileTable";
import {
  PROFILE_ATTENDANCE_TABLE_HEAD,
  PROFILE_LEAVE_TABLE_DATA,
  PROFILE_LEAVE_TABLE_HEADINGS,
  PROFILE_PROJECT_TABLE_DATA,
  PROFILE_PROJECT_TABLE_HEADINGS,
  PROFILE_TABLE_ATTENDANCE_DATA,
} from "@/constants/Constants";
import { EMPLOYEE_DETAILS_PROPS } from "@/types/employeeDetailsProps";

const ViewEmployee = ({ id, setName }: EMPLOYEE_DETAILS_PROPS) => {
  const { option, handleClick, menuOption, handleMenuClick, details } =
    useViewEmployee({
      id,
      setName,
    });
  if (!details) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-5 rounded-[10px] border-[1px] border-borderGrey">
      <div className="flex border-b-[1px] border-borderGrey pb-8 justify-between">
        <div className="flex">
          <div className="rounded-[10px]">
            <Image src={iconProfile} alt="" />
          </div>
          <div className="flex flex-col ms-4">
            <div className="font-semibold text-2xl">
              {details?.firstName + " " + details?.lastName}
            </div>
            <div className="flex my-2">
              <Image src={iconBriefcase} alt="Icon Gmail" />
              <div className="font-light ms-[10px] ">
                {details?.employmentType}
              </div>
            </div>
            <div className="flex ">
              <Image src={iconGamil} alt="Icon Gmail" />
              <div className="font-light ms-[10px]">
                {details?.emailAddress}
              </div>
            </div>
          </div>
        </div>
        <div className="me-[52px] flex mt-auto py-[13px] px-5 rounded-[10px] bg-customOrange">
          <Image src={iconEdit} alt="" />
          <button className=" ms-[10px]">Edit Profile</button>
        </div>
      </div>
      <div className="flex mt-[30px]">
        <ProfileMenu
          handleMenuClick={handleMenuClick}
          menuOption={menuOption}
        />
        <div className="flex flex-col ms-[20px]">
          {menuOption === 0 && (
            <>
              <InfoBar option={option} handleClick={handleClick} />
              <div className="flex flex-wrap ms-[10px] gap-4 ">
                {option === 0 &&
                  PROFILE_PERSONAL_INFO.map((heading, i) => {
                    return (
                      <ProfileDataField
                        heading={heading}
                        value={"John Deo"}
                        key={i}
                      />
                    );
                  })}
                {option === 1 &&
                  PROFILE_PROFESSIONAL_INFO.map((heading, i) => {
                    return (
                      <ProfileDataField
                        heading={heading}
                        value={"John Deo"}
                        key={i}
                      />
                    );
                  })}
                {option === 2 && (
                  <>
                    <FileViewer FileName="Salary Slip" />
                    <FileViewer FileName="Salary Slip" />
                    <FileViewer FileName="Salary Slip" />
                    <FileViewer FileName="Salary Slip" />
                  </>
                )}
                {option === 3 &&
                  PROFILE_ACCOUNT_ACCESS.map((heading, i) => {
                    return (
                      <ProfileDataField
                        heading={heading}
                        value={"John Deo"}
                        key={i}
                      />
                    );
                  })}
              </div>
            </>
          )}
          {menuOption === 1 && (
            <ProfileTable
              tableHeadings={PROFILE_ATTENDANCE_TABLE_HEAD}
              tableData={PROFILE_TABLE_ATTENDANCE_DATA}
            />
          )}
          {menuOption === 2 && (
            <ProfileTable
              tableHeadings={PROFILE_PROJECT_TABLE_HEADINGS}
              tableData={PROFILE_PROJECT_TABLE_DATA}
            />
          )}
          {menuOption === 3 && (
            <ProfileTable
              tableHeadings={PROFILE_LEAVE_TABLE_HEADINGS}
              tableData={PROFILE_LEAVE_TABLE_DATA}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
