"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { CustomChangeEvent, EMPLOYEE_ATTENDANCE_DATA } from "@/types/types";

const useAttendanceTable = () => {
  const [inputEnabled, setInputEnabled] = useState(false);
  const [tableData, setTableData] = useState<EMPLOYEE_ATTENDANCE_DATA[]>([]);
  const allEmployees = useAppSelector((state) => state.employees.employeeData);
  useEffect(() => {
    if (allEmployees) {
      setTableData(allEmployees);
    }
  }, [!allEmployees]);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement> | CustomChangeEvent,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedTableData = [...tableData];
    updatedTableData[index] = { ...updatedTableData[index], [name]: value };
    setTableData(updatedTableData);
  };
  const handleUpdate = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    tableData;
  };
  return {
    tableData,
    handleChange,
    inputEnabled,
    setInputEnabled,
    handleUpdate,
  };
};

export default useAttendanceTable;
