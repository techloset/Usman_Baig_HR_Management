"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchEmployees } from "@/redux/slices/employeesSlice";

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
