import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-primaryBlack">
        <div className="bg-greyShade flex flex-col justify-center items-center text-white rounded-[10px] p-[30px]">
          <div className="text-[30px] font-semibold ">Password updated</div>
          <div className="text-[30px] font-semibold  ">Successfully</div>
          <div className="font-light text-[16px] text-customGrey mt-[5px]">
            Your password has been update successfully
          </div>
          <Link
            href={"/login"}
            className="px-10 py-3 bg-customOrange w-full rounded-[10px] mt-[40px] text-center text-white disabled:opacity-70 cursor-pointer"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
