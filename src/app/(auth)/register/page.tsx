import React from "react";
import RegisterForm from "../../../components/registerForm/RegisterForm";
import Image from "next/image";
import { iconLoginLogo } from "@/constants/Images";

export default function page() {
  return (
    <>
      <div className="min-h-screen py-5 w-full flex items-center justify-center bg-primaryBlack">
        <div className="w-[445px] ">
          <Image
            src={iconLoginLogo}
            alt="Icon Logo"
            className="h-[166px] me-auto w-[409px] mb-10"
          />
          <div className="text-white font-semibold text-[30px]">Welcome</div>
          <div className="text-white font-light mb-5">Please Register here</div>
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
