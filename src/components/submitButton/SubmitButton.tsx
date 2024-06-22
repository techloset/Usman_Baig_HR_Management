import React, { MouseEvent } from "react";

const SubmitButton = ({
  handleSubmit,
}: {
  handleSubmit: (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div className="mt-5">
      <button
        className={`ms-0 me-[20px] rounded-[10px] border-borderGrey py-[13px] px-[20px] border-[1px]`}
      >
        Cancel
      </button>
      <button
        onClick={handleSubmit}
        className={`ms-0 me-[10px] rounded-[10px] py-[13px] px-[27px] duration-300 hover:bg-customOrange hover:text-white text-customOrange bg-primaryBlack  border-customOrange border-[1px]`}
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
