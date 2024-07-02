"use client";
import { fetchEmployees } from "@/redux/slices/employeesSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";

const useEmployees = () => {
  const [searchtext, setSearchText] = useState("");
  const dispatch = useAppDispatch();
  const allEmployees = useAppSelector((state) => state.employees.employeeData);

  useEffect(() => {
    const fetchEmployeesData = async () => {
      await dispatch(fetchEmployees());
    };
    fetchEmployeesData();
  }, [dispatch]);
  return { allEmployees, searchtext, setSearchText };
};

export default useEmployees;
