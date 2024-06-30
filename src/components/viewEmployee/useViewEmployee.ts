import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../libs/hooks";
import { fetchEmployeeDetails } from "../../../libs/features/employees/employeesDetailsSlice";
import { EMPLOYEE_DETAILS_PROPS } from "@/types/employeeDetailsProps";

const useViewEmployee = ({ id, setName }: EMPLOYEE_DETAILS_PROPS) => {
  const [option, setOption] = useState<number>(0);
  const [menuOption, setMenuOption] = useState<number>(0);
  const dispatch = useAppDispatch();
  const employeeDetails = useAppSelector(
    (state) => state.employeeDetails.employeeDetails
  );

  const details = employeeDetails?.data;
  setName(details?.firstName + " " + details?.lastName);
  console.log("details", details);
  useEffect(() => {
    dispatch(fetchEmployeeDetails(id));
  }, [dispatch]);
  const handleClick = (num: number) => {
    setOption(num);
  };
  const handleMenuClick = (num: number) => {
    setMenuOption(num);
  };
  return { handleClick, option, menuOption, handleMenuClick, details };
};

export default useViewEmployee;
