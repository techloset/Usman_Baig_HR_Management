import React, { useState } from "react";

const useInputDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return { toggleDropdown, isOpen };
};

export default useInputDropdown;
