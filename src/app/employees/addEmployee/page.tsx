"use client";
import React, { useState } from "react";
import useAddEmployee from "./useAddEmployee";
import InfoBar from "@/components/infoBar/InfoBar";
import Documents from "@/components/documents/Documents";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import AccountAccess from "@/components/accountAccess/AccountAccess";
import PersonalInfomation from "@/components/personalInfomation/PersonalInfomation";
import ProfessionalInformation from "@/components/professionalInformation/ProfessionalInformation";
import {
  EMPLOYEE_ACCOUNT_ACCESS_DATA,
  EMPLOYEE_DOCUMENTS_DATA,
  EMPLOYEE_PERSONAL_DATA,
  EMPLOYEE_PROFESSIONAL_DATA,
} from "@/types/ProfileInformation";

const page = () => {
  const [personalInfo, setPersonalInfo] = useState<EMPLOYEE_PERSONAL_DATA>();
  const [professionalInfo, setProfessionalInfo] =
    useState<EMPLOYEE_PROFESSIONAL_DATA>();
  const [documents, setDocuments] = useState<EMPLOYEE_DOCUMENTS_DATA>();
  const [accountAccess, setAccountAccess] =
    useState<EMPLOYEE_ACCOUNT_ACCESS_DATA>();
  const { option, handleClick } = useAddEmployee();
  return (
    <DefaultLayout
      heading={"Add New Employee"}
      description={`All Employee > add new employee`}
    >
      <div className="border-[1px] border-borderGrey items-center py-5 px-[10px] ms-[10px] me-[30px] rounded-[10px] ">
        <InfoBar option={option} handleClick={handleClick} />
        {option === 0 && (
          <PersonalInfomation
            data={personalInfo}
            setData={setPersonalInfo}
            handleClick={handleClick}
            option={option}
          />
        )}
        {option === 1 && (
          <ProfessionalInformation
            data={professionalInfo}
            setData={setProfessionalInfo}
            handleClick={handleClick}
            option={option}
          />
        )}
        {option === 2 && (
          <Documents
            data={documents}
            setData={setDocuments}
            handleClick={handleClick}
            option={option}
          />
        )}
        {option === 3 && (
          <AccountAccess
            data={accountAccess}
            setData={setAccountAccess}
            handleClick={handleClick}
            option={option}
          />
        )}
      </div>
    </DefaultLayout>
  );
};

export default page;
