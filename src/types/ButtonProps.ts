import { FormEvent } from "react";

export type BUTTON_PROPS = {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleClick: (num: number) => void;
  option: number;
};
