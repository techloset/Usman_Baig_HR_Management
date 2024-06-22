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
import { useState } from "react";

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
  console.log(
    "States",
    personalInfo,
    professionalInfo,
    accountAccess,
    documents
  );

  const handleClick = (num: number) => {
    setOption(num);
  };
  return {
    handleClick,
    option,
    personalInfo,
    professionalInfo,
    accountAccess,
    documents,
    setAccountAccess,
    setDocuments,
    setPersonalInfo,
    setProfessionalInfo,
  };
};

export default useAddEmployee;
