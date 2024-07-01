import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { INITIAL_STATE_PROFESSIONAL_INFO } from "@/constants/IntialStates";
import { CustomChangeEvent, EMPLOYEE_PROFESSIONAL_DATA } from "@/types/types";

const useProfessionalInformation = ({
  data,
  setData,
}: {
  data: EMPLOYEE_PROFESSIONAL_DATA | undefined;
  setData: Dispatch<SetStateAction<EMPLOYEE_PROFESSIONAL_DATA>>;
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
