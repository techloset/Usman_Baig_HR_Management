import { Dispatch, SetStateAction } from "react";
import {
  EMPLOYEE_ACCOUNT_ACCESS_DATA,
  EMPLOYEE_DOCUMENTS_DATA,
  EMPLOYEE_PERSONAL_DATA,
  EMPLOYEE_PROFESSIONAL_DATA,
} from "./ProfileInformation";
export type EMPLOYEE_POST_DATA = {
  address: string;
  appointmentLetter: string;
  city: string;
  dateOfBirth: string;
  department: string;
  designation: string;
  email: string;
  emailAddress: string;
  employeeId: string;
  employmentType: string;
  experienceLetter: string;
  firstName: string;
  gender: string;
  githubId: string;
  joiningDate: string;
  lastName: string;
  maritalStatus: string;
  mobileNumber: string;
  nationality: string;
  officeLocation: string;
  photoURL: string;
  relivingLetter: string;
  salarySlips: string;
  skypeId: string;
  slackId: string;
  state: string;
  userName: string;
  workingDays: string;
  zipCode: string;
};
export type EMPLOYEE_PERSONAL_INFO_PROPS = {
  data?: EMPLOYEE_PERSONAL_DATA;
  setData: Dispatch<SetStateAction<EMPLOYEE_PERSONAL_DATA>>;
  option: number;
  handleClick: (num: number) => void;
};
export type EMPLOYEE_PROFESSIONAL_INFO_PROPS = {
  data?: EMPLOYEE_PROFESSIONAL_DATA;
  setData: Dispatch<SetStateAction<EMPLOYEE_PROFESSIONAL_DATA>>;
  option: number;
  handleClick: (num: number) => void;
};
export type EMPLOYEE_DOCUMENTS_PROPS = {
  data?: EMPLOYEE_DOCUMENTS_DATA;
  setData: Dispatch<SetStateAction<EMPLOYEE_DOCUMENTS_DATA>>;
  option: number;
  handleClick: (num: number) => void;
};
export type EMPLOYEE_ACCOUNT_ACCESS_PROPS = {
  data?: EMPLOYEE_ACCOUNT_ACCESS_DATA;
  setData: Dispatch<SetStateAction<EMPLOYEE_ACCOUNT_ACCESS_DATA>>;
  option: number;
  handleClick: (num: number) => void;
};
export type EMPLOYEE_DATA = {
  data: {
    address: string;
    appointmentLetter: string;
    city: string;
    dateOfBirth: string;
    department: string;
    designation: string;
    email: string;
    emailAddress: string;
    employeeId: string;
    employmentType: string;
    experienceLetter: string;
    firstName: string;
    gender: string;
    githubId: string;
    joiningDate: string;
    lastName: string;
    maritalStatus: string;
    mobileNumber: string;
    nationality: string;
    officeLocation: string;
    photoURL: string;
    relivingLetter: string;
    salarySlips: string;
    skypeId: string;
    slackId: string;
    state: string;
    userName: string;
    workingDays: string;
    zipCode: string;
  };
};
export type EMPLOYEES_TABLE_DATA = {
  firstName: string;
  lastName: string;
  employeeId: string;
  department: string;
  designation: string;
  employmentType: string;
  photoURL: string;
  id: string;
};
