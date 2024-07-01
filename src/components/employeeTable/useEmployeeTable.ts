import { deleteEmployee } from "@/redux/slices/employeesSlice";
import { useAppDispatch } from "../../redux/hooks";

const useEmployeeTable = () => {
  const dispatch = useAppDispatch();
  const handleDelete = async (id: string) => {
    console.log("id for delete", id);
    await dispatch(deleteEmployee(id));
  };
  return { handleDelete };
};

export default useEmployeeTable;
