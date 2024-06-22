import {
  EMPLOYEE_ACCOUNT_ACCESS_DATA,
  EMPLOYEE_DOCUMENTS_DATA,
  EMPLOYEE_PERSONAL_DATA,
  EMPLOYEE_PROFESSIONAL_DATA,
} from "./ProfileInformation";

export type EMPLOYEE_PERSONAL_INFO_PROPS = {
  data?: EMPLOYEE_PERSONAL_DATA;
  setData: (data: EMPLOYEE_PERSONAL_DATA) => void;
  option: number;
  handleClick: (num: number) => void;
};
export type EMPLOYEE_PROFESSIONAL_INFO_PROPS = {
  data?: EMPLOYEE_PROFESSIONAL_DATA;
  setData: (data: EMPLOYEE_PROFESSIONAL_DATA) => void;
  option: number;
  handleClick: (num: number) => void;
};
export type EMPLOYEE_DOCUMENTS_PROPS = {
  data?: EMPLOYEE_DOCUMENTS_DATA;
  setData: (data: EMPLOYEE_DOCUMENTS_DATA) => void;
  option: number;
  handleClick: (num: number) => void;
};
export type EMPLOYEE_ACCOUNT_ACCESS_PROPS = {
  data?: EMPLOYEE_ACCOUNT_ACCESS_DATA;
  setData: (data: EMPLOYEE_ACCOUNT_ACCESS_DATA) => void;
  option: number;
  handleClick: (num: number) => void;
};
