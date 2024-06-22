import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { CustomChangeEvent } from "@/types/InputDropDownProps";
import { EMPLOYEE_PERSONAL_DATA } from "@/types/ProfileInformation";
import { INITIAL_STATE_PERSONAL_INFO } from "@/constants/IntialStates";

const usePersonalInfomation = ({
  data,
  setData,
}: {
  data: EMPLOYEE_PERSONAL_DATA | undefined;
  setData: Dispatch<SetStateAction<EMPLOYEE_PERSONAL_DATA>>;
}) => {
  const [state, setState] = useState(INITIAL_STATE_PERSONAL_INFO);
  const [profileURL, setProfileURL] = useState("");
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
  return {
    state,
    setProfileURL,
    handleChange,
  };
};

export default usePersonalInfomation;
