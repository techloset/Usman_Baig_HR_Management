"use client";
import {
  INITIAL_STATE_ACCOUNT_ACCESS,
  INITIAL_STATE_DOCUMENTS_FILES,
  INITIAL_STATE_PERSONAL_INFO,
  INITIAL_STATE_PROFESSIONAL_INFO,
} from "@/constants/IntialStates";
import {
  EMPLOYEE_ACCOUNT_ACCESS_DATA,
  EMPLOYEE_DOCUMENTS_DATA,
  EMPLOYEE_PERSONAL_DATA,
  EMPLOYEE_PROFESSIONAL_DATA,
} from "@/types/ProfileInformation";
import { MouseEvent, useState } from "react";

const useAddEmployee = () => {
  const [option, setOption] = useState<number>(0);
  const [personalInfo, setPersonalInfo] = useState<EMPLOYEE_PERSONAL_DATA>(
    INITIAL_STATE_PERSONAL_INFO
  );
  const [professionalInfo, setProfessionalInfo] =
    useState<EMPLOYEE_PROFESSIONAL_DATA>(INITIAL_STATE_PROFESSIONAL_INFO);
  const [documents, setDocuments] = useState<EMPLOYEE_DOCUMENTS_DATA>(
    INITIAL_STATE_DOCUMENTS_FILES
  );
  const [accountAccess, setAccountAccess] =
    useState<EMPLOYEE_ACCOUNT_ACCESS_DATA>(INITIAL_STATE_ACCOUNT_ACCESS);
  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const mergedData = {
      presonalInfo: personalInfo,
      professionalInfo: professionalInfo,
      documents: documents,
      accountAccess: accountAccess,
    };
    console.log("mergedData", mergedData);
  };

  const handleClick = (num: number) => {
    setOption(num);
  };
  return {
    option,
    personalInfo,
    professionalInfo,
    accountAccess,
    documents,
    handleClick,
    handleSubmit,
    setAccountAccess,
    setDocuments,
    setPersonalInfo,
    setProfessionalInfo,
  };
};

export default useAddEmployee;
