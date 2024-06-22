import { INITIAL_STATE_ACCOUNT_ACCESS } from "@/constants/IntialStates";
import { CustomChangeEvent } from "@/types/InputDropDownProps";
import { EMPLOYEE_ACCOUNT_ACCESS_DATA } from "@/types/ProfileInformation";
import { ChangeEvent, FormEvent, useState } from "react";

const useAccountAccess = ({
  data,
  setData,
}: {
  data: EMPLOYEE_ACCOUNT_ACCESS_DATA | undefined;
  setData: (data: EMPLOYEE_ACCOUNT_ACCESS_DATA) => void;
}) => {
  const [state, setState] = useState(INITIAL_STATE_ACCOUNT_ACCESS);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement> | CustomChangeEvent
  ) => {
    if (data) {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  return { state, handleChange };
};

export default useAccountAccess;
