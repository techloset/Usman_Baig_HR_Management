import { INITIAL_STATE_DOCUMENTS_FILES } from "@/constants/IntialStates";
import { FormEvent, useState } from "react";

const useDocuments = () => {
  const [state, setState] = useState(INITIAL_STATE_DOCUMENTS_FILES);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return {};
};

export default useDocuments;
