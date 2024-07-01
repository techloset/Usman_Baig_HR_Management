import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { CustomChangeEvent } from "@/types/InputDropDownProps";
import { EMPLOYEE_PERSONAL_DATA } from "@/types/ProfileInformation";

const usePersonalInfomation = ({
  data,
  setData,
}: {
  data: EMPLOYEE_PERSONAL_DATA | undefined;
  setData: Dispatch<SetStateAction<EMPLOYEE_PERSONAL_DATA>>;
}) => {
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
    setProfileURL,
    handleChange,
  };
};
export default usePersonalInfomation;
