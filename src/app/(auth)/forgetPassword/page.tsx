import ForgetPassForm from "@/components/forgetPassForm/ForgetPassForm";
import { iconArrow } from "@/constants/Images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center bg-primaryBlack">
        <div className="w-[445px]">
          <div className="py-5">
            <Link className="text-white flex " href={"/login"}>
              <Image src={iconArrow} alt="Icon Arrow" />
              <span className="ms-[5px]">Back</span>
            </Link>
          </div>
          <div className="text-white font-semibold text-[30px]">
            Forgot Password
          </div>
          <div className="text-white font-light text-[16px] mb-5">
            Enter your registered email address. we’ll send you a code to reset
            your password.
          </div>
          <ForgetPassForm />
        </div>
      </div>
    </>
  );
};

export default page;
