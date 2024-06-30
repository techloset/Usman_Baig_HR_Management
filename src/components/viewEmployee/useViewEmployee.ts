import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../libs/hooks";
import { fetchEmployeeDetails } from "../../../libs/features/employees/employeesDetailsSlice";

const useViewEmployee = ({ id }: { id: string }) => {
  const [option, setOption] = useState<number>(0);
  const [menuOption, setMenuOption] = useState<number>(0);
  const dispatch = useAppDispatch();
  const employeeDetails = useAppSelector(
    (state) => state.employeeDetails.employeeDetails
  );
  console.log("employeeDetails", employeeDetails);
  useEffect(() => {
    dispatch(fetchEmployeeDetails(id));
  }, [dispatch]);
  const handleClick = (num: number) => {
    setOption(num);
  };
  const handleMenuClick = (num: number) => {
    setMenuOption(num);
  };
  return { handleClick, option, menuOption, handleMenuClick, employeeDetails };
};

export default useViewEmployee;
