import { INITIAL_STATE_PERSONAL_INFO } from "@/constants/IntialStates";
import { CustomChangeEvent } from "@/types/InputDropDownProps";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

const usePersonalInfomation = () => {
  const [state, setState] = useState(INITIAL_STATE_PERSONAL_INFO);
  const [profileURL, setProfileURL] = useState("");
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement> | CustomChangeEvent
  ) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {
      firstName,
      lastName,
      number,
      email,
      dob,
      gender,
      nationality,
      address,
      city,
      zipCode,
    } = state;
    const data = {
      photoURL: profileURL,
      firstName: firstName,
      lastName: lastName,
      number: number,
      email: email,
      dob: dob,
      gender: gender,
      nationality: nationality,
      address: address,
      city: city,
      zipCode: zipCode,
    };
    console.log("state", data);
  };
  return {
    state,
    setProfileURL,
    handleChange,
    handleSubmit,
  };
};

export default usePersonalInfomation;
