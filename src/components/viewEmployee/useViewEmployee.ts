import { useState } from "react";

const useViewEmployee = () => {
  const [option, setOption] = useState<number>(0);
  const [menuOption, setMenuOption] = useState<number>(0);
  const handleClick = (num: number) => {
    setOption(num);
  };
  const handleMenuClick = (num: number) => {
    setMenuOption(num);
  };
  return { handleClick, option, menuOption, handleMenuClick };
};

export default useViewEmployee;
