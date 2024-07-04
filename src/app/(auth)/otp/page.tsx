"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import useOtp from "./useOtp";
import { iconArrow } from "@/constants/Images";
import FormInput from "@/components/formInput/FormInput";

export default function page() {
  const { handleSubmit, handleChange } = useOtp();
  return (
    <section className="bg-primaryBlack h-screen flex justify-center items-center w-full text-white ">
      <div className="flex flex-col bg-greyShade items-center max-w-[445px] max-h-[561px] justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-fullrounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <Link href={"/forgetPassword"} className="flex">
            <Image src={iconArrow} alt="Icon" className="ms-6" />
            <span className="">Back</span>
          </Link>
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl font-bold mb-2 md:text-3xl dark:text-white">
              OTP
            </h1>
            <p className="text-[16px] font-light mb-4">
              Check Your email and Enter OTP. There is two minutes before your
              OTP expires.{" "}
            </p>
            <form
              className="space-y-4 md:space-y-6 max-w-[445px]"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block mb-4 text-sm font-medium text-gray-900 dark:text-white">
                  Type Your OTP here:
                </label>
                <FormInput label="OTP" name={"otp"} onChange={handleChange} />
              </div>
              <button
                type="submit"
                onClick={() => handleSubmit}
                className="px-10 py-3 bg-customOrange w-full rounded-[10px] mt-5 text-center text-white disabled:opacity-70 cursor-pointer"
              >
                Verify OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
