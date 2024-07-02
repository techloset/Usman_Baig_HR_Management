"use client";
import toast from "react-hot-toast";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { CustomChangeEvent, EMPLOYEE_ATTENDANCE_DATA } from "@/types/types";
import { fetchEmployees } from "@/redux/slices/employeesSlice";
import { bulkUpdateAttendance } from "@/redux/slices/attendanceUpdateSlice";

const useAttendanceTable = () => {
  const [inputEnabled, setInputEnabled] = useState(false);
  const [tableData, setTableData] = useState<EMPLOYEE_ATTENDANCE_DATA[]>([]);
  const dispatch = useAppDispatch();
  const allEmployees = useAppSelector((state) => state.employees.employeeData);
  useEffect(() => {
    const fetchEmployeesData = async () => {
      const data = await dispatch(fetchEmployees());
      console.log("data", data);
      setTableData(data.payload);
    };
    fetchEmployeesData();
  }, [dispatch, !allEmployees]);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement> | CustomChangeEvent,
    index: number
  ) => {
    const { name, value } = e.target;
    const updatedTableData = [...tableData];
    updatedTableData[index] = { ...updatedTableData[index], [name]: value };
    setTableData(updatedTableData);
  };
  const handleUpdate = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("tableData", tableData);
    try {
      await dispatch(bulkUpdateAttendance(tableData));
      toast.success("Updated successfully in table data");
    } catch (error) {
      console.log("error", error);
    }
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
