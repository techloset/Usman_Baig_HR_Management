import { INITIAL_STATE_PROFESSIONAL_INFO } from "@/constants/IntialStates";
import { useState } from "react";

const useProfessionalInformation = () => {
  const [state, setState] = useState(INITIAL_STATE_PROFESSIONAL_INFO);
  const handleChange = (e: any) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  return { state, handleChange };
};

export default useProfessionalInformation;
