import { INITIAL_STATE_ACCOUNT_ACCESS } from "@/constants/IntialStates";
import { useState } from "react";

const useAccountAccess = () => {
  const [state, setState] = useState(INITIAL_STATE_ACCOUNT_ACCESS);
  const handleChange = (e: any) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  return { state, handleChange };
};

export default useAccountAccess;
