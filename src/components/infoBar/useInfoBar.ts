import { useState } from "react";

const useInfoBar = () => {
  const [option, setOption] = useState<Number>(0);
  const handleClick = (num: Number) => {
    setOption(num);
  };
  return { option, handleClick };
};

export default useInfoBar;
