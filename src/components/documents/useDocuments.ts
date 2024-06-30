import { INITIAL_STATE_DOCUMENTS_FILES } from "@/constants/IntialStates";
import { EMPLOYEE_DOCUMENTS_DATA } from "@/types/ProfileInformation";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

const useDocuments = ({
  data,
  setData,
}: {
  data: EMPLOYEE_DOCUMENTS_DATA | undefined;
  setData: Dispatch<SetStateAction<EMPLOYEE_DOCUMENTS_DATA>>;
}) => {
  const [state, setState] = useState(INITIAL_STATE_DOCUMENTS_FILES);

  const handleFileChange = (key: string, file: string) => {
    setData((prevState) => ({
      ...prevState,
      [key]: file,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitting documents:", state);
  };

  return {
    state,
    handleFileChange,
    handleSubmit,
  };
};

export default useDocuments;
