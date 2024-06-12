import { useState } from "react";

const useAddEmployee = () => {
  const [option, setOption] = useState<Number>(0);
  const handleClick = (num: Number) => {
    setOption(num);
  };
  return { handleClick, option };
};

export default useAddEmployee;
