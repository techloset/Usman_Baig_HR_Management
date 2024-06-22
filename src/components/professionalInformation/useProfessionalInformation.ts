import { INITIAL_STATE_PROFESSIONAL_INFO } from "@/constants/IntialStates";
import { CustomChangeEvent } from "@/types/InputDropDownProps";
import { ChangeEvent, FormEvent, useState } from "react";

const useProfessionalInformation = () => {
  const [state, setState] = useState(INITIAL_STATE_PROFESSIONAL_INFO);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement> | CustomChangeEvent
  ) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {
      employeeId,
      userName,
      emplopeeType,
      email,
      department,
      designation,
      workingDays,
      joiningDate,
      officeLocation,
    } = state;
    console.log("Professional State =>", state);
  };

  return { state, handleChange, handleSubmit };
};

export default useProfessionalInformation;
