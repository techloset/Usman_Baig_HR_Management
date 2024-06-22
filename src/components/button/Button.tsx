import React from "react";
import { BUTTON_PROPS } from "@/types/ButtonProps";

const Button = ({ handleSubmit, handleClick, option }: BUTTON_PROPS) => {
  // const value = () => {
  //   if (option === 3) {
  //   }
  // };
  return (
    <div className="mt-5">
      <button
        className={`ms-0 me-[20px] rounded-[10px] border-borderGrey py-[13px] px-[20px] border-[1px]`}
      >
        Cancel
      </button>
      <button
        onClick={() => {
          handleSubmit;
          handleClick(option + 1);
          console.log("option from button", option + 1);
        }}
        className={`ms-0 me-[10px] rounded-[10px] py-[13px] px-[27px] bg-customOrange border-customOrange border-[1px]`}
      >
        Next
      </button>
    </div>
  );
};

export default Button;
