import { deleteEmployee } from "@/redux/slices/employeesSlice";
import { useAppDispatch } from "@/redux/store";

const useEmployeeTable = () => {
  const dispatch = useAppDispatch();
  const handleDelete = async (id: string) => {
    await dispatch(deleteEmployee(id));
  };
  return { handleDelete };
};

export default useEmployeeTable;
