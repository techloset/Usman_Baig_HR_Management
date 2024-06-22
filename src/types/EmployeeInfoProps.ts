import { Dispatch, SetStateAction } from "react";
import {
  EMPLOYEE_ACCOUNT_ACCESS_DATA,
  EMPLOYEE_DOCUMENTS_DATA,
  EMPLOYEE_PERSONAL_DATA,
  EMPLOYEE_PROFESSIONAL_DATA,
} from "./ProfileInformation";

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
