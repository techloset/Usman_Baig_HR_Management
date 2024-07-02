import React from "react";
import Link from "next/link";
import LoginForm from "../../../components/loginForm/LoginForm";
import Image from "next/image";
import { iconLoginLogo } from "@/constants/Images";

export default function LoginPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-primaryBlack">
      <div className="w-[445px] ">
        <Image
          src={iconLoginLogo}
          alt="Icon Logo"
          className="h-[166px] me-auto w-[409px] mb-10"
        />
        <div className="text-white font-semibold text-[30px]">Welcome</div>
        <div className="text-white font-light mb-5">Please login here</div>
        <LoginForm />
        <div className="text-sm text-center text-neutral-500 mt-5">
          Not have an accout?
          <Link href={"/register"} className="font-bold text-neutral-900">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
