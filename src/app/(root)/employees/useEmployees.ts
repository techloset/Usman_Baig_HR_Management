"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../libs/hooks";
import { fetchEmployees } from "../../../../libs/features/employees/employeesSlice";

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
