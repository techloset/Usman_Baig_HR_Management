import { INITIAL_STATE_PERSONAL_INFO } from "@/constants/IntialStates";
import { ChangeEvent, useRef, useState } from "react";

const usePersonalInfomation = () => {
  const [state, setState] = useState(INITIAL_STATE_PERSONAL_INFO);
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const handleChange = (e: any) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };
  const handleClick = () => {
    hiddenFileInput?.current?.click();
  };

  const handleFile = (event: ChangeEvent<HTMLInputElement>) => {
    const fileUploaded: File | undefined = event.target.files?.[0];
  };
  return { state, handleChange, handleFile, handleClick, hiddenFileInput };
};

export default usePersonalInfomation;
