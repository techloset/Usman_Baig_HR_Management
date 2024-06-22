export type CustomChangeEvent = {
  target: {
    name: string;
    value: string;
  };
};
type Options = {
  label: string;
  value: string;
};

export type INPUT_DROPDOWN_PROPS = {
  label: string;
  options: Options[];
  onChange: (e: CustomChangeEvent) => void;
};
