"use client";
import React from "react";
import Button from "@/components/button/Button";
import InfoBar from "@/components/infoBar/InfoBar";
import Documents from "@/components/documents/Documents";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import AccountAccess from "@/components/accountAccess/AccountAccess";
import PersonalInfomation from "@/components/personalInfomation/PersonalInfomation";
import ProfessionalInformation from "@/components/professionalInformation/ProfessionalInformation";
import useAddEmployee from "./useAddEmployee";

const page = () => {
  const { option, handleClick } = useAddEmployee();
  return (
    <DefaultLayout
      heading={"Add New Employee"}
      description={`All Employee > add new employee`}
    >
      <div className="border-[1px] border-borderGrey items-center py-5 px-[10px] ms-[10px] me-[30px] rounded-[10px] ">
        <InfoBar option={option} handleClick={handleClick} />
        <PersonalInfomation display="hidden" />
        <ProfessionalInformation display="hidden" />
        <Documents display="hidden" />
        <AccountAccess display="hidden" />
        <div className="flex flex-row-reverse">
          <Button />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default page;
