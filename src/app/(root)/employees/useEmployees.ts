"use client";
import { fetchEmployees } from "@/redux/slices/employeesSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { EMPLOYEES_TABLE_DATA } from "@/types/types";
import { useEffect, useState } from "react";

const useEmployees = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useAppDispatch();
  const allEmployees: EMPLOYEES_TABLE_DATA[] = useAppSelector(
    (state) => state.employees.employeeData
  );

  useEffect(() => {
    const fetchEmployeesData = async () => {
      await dispatch(fetchEmployees());
    };
    fetchEmployeesData();
  }, [dispatch]);
  const filteredEmployees = allEmployees.filter(
    (employee) =>
      employee?.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
      employee?.department.toLowerCase().includes(searchText.toLowerCase()) ||
      employee?.designation.toLowerCase().includes(searchText.toLowerCase())
  );

  return { allEmployees: filteredEmployees, searchText, setSearchText };
};

export default useEmployees;
