import { deleteEmployee } from "../../../libs/features/employees/employeesSlice";
import { useAppDispatch } from "../../../libs/hooks";

const useEmployeeTable = () => {
  const dispatch = useAppDispatch();
  const handleDelete = async (id: string) => {
    console.log("id for delete", id);
    await dispatch(deleteEmployee(id));
  };
  return { handleDelete };
};

export default useEmployeeTable;
