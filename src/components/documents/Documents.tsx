"use client";
import React from "react";
import useDocuments from "./useDocuments";
import UploadFile from "../uploadFile/UploadFile";
import Button from "../button/Button";
import { EMPLOYEE_DOCUMENTS_PROPS } from "@/types/EmployeeInfoProps";

const Documents = ({ handleClick, option }: EMPLOYEE_DOCUMENTS_PROPS) => {
  const { handleSubmit } = useDocuments();
  return (
    <div className="p-[10px]">
      <div className="flex w-full">
        <UploadFile title={"Upload Appointment Letter"} />
        <UploadFile title={"Upload Salary Slips"} />
      </div>
      <div className="flex w-full">
        <UploadFile title={"Upload Reliving Letter"} />
        <UploadFile title={"Upload Experience Letter"} />
      </div>
      <div className="flex flex-row-reverse">
        <Button
          handleSubmit={handleSubmit}
          handleClick={handleClick}
          option={option}
        />
      </div>
    </div>
  );
};

export default Documents;
