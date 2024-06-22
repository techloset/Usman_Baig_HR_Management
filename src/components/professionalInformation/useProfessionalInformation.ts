import { ChangeEvent, useState } from "react";
import { CustomChangeEvent } from "@/types/InputDropDownProps";
import { EMPLOYEE_PROFESSIONAL_DATA } from "@/types/ProfileInformation";
import { INITIAL_STATE_PROFESSIONAL_INFO } from "@/constants/IntialStates";

const useProfessionalInformation = ({
  data,
  setData,
}: {
  data: EMPLOYEE_PROFESSIONAL_DATA | undefined;
  setData: (data: EMPLOYEE_PROFESSIONAL_DATA) => void;
}) => {
  const [state, setState] = useState(INITIAL_STATE_PROFESSIONAL_INFO);
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

export default useProfessionalInformation;
