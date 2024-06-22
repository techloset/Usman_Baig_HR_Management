import { INITIAL_STATE_ACCOUNT_ACCESS } from "@/constants/IntialStates";
import { FormEvent, useState } from "react";

const useAccountAccess = () => {
  const [state, setState] = useState(INITIAL_STATE_ACCOUNT_ACCESS);
  const handleChange = (e: any) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, slackId, skypeId, githubId } = state;
    console.log("Professional State =>", state);
  };

  return { state, handleChange, handleSubmit };
};

export default useAccountAccess;
