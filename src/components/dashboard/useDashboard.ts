"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../libs/hooks";
import { fetchEmployees } from "../../../libs/features/employees/employeesSlice";

const useDashboard = () => {
  const dispatch = useAppDispatch();
  const allEmployees = useAppSelector((state) => state.employees.employeeData);
  const employeeArray = allEmployees.length;
  useEffect(() => {
    const fetchEmployeesData = async () => {
      await dispatch(fetchEmployees());
    };
    fetchEmployeesData();
  }, [dispatch]);
  return { employeeArray };
};

export default useDashboard;
