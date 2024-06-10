export type InputProps = {
  name: string;
  value: string;
  placeholder: string;
  type: HTMLInputElement["type"];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
