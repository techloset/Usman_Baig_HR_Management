"use client";
import { fetchEmployees } from "@/redux/slices/employeesSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";

const useEmployees = () => {
  const dispatch = useAppDispatch();
  const allEmployees = useAppSelector((state) => state.employees.employeeData);

  useEffect(() => {
    const fetchEmployeesData = async () => {
      const data = await dispatch(fetchEmployees());
      console.log("data", data);
    };
    fetchEmployeesData();
  }, [dispatch]);
  console.log("allEmployees", allEmployees);
  return { allEmployees };
};

export default useEmployees;
