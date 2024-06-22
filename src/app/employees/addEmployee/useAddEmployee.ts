import { useState } from "react";

const useAddEmployee = () => {
  const [option, setOption] = useState<number>(0);

  const handleClick = (num: number) => {
    setOption(num);
  };
  return { handleClick, option };
};

export default useAddEmployee;
