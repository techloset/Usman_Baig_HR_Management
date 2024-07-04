"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import useOtp from "./useOtp";
import { iconArrow } from "@/constants/Images";

export default function page() {
  const { handleSubmit, handleChange } = useOtp();
  return (
    <section className="bg-black h-screen flex justify-center items-center w-full text-white ">
      <div className="flex flex-col bg-secondry items-center max-w-[445px] max-h-[561px] justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-fullrounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
          <Link href={"/resetPassword"}>
            <Image
              src={iconArrow}
              alt="Icon"
              width={67}
              height={24}
              className="ms-6"
            />
          </Link>
          <div className="p-6 sm:p-8">
            <h1 className="text-2xl font-bold mb-2 md:text-3xl dark:text-white">
              OTP
            </h1>
            <p className="text-base mb-4">
              Check Your email and Enter OTP in one Minute otherwise it will
              expire.
            </p>
            <form
              className="space-y-4 md:space-y-6 max-w-[445px]"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your OTP
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  name="otp"
                  id="otp"
                  className="border-2  text-black sm:text-sm rounded-lg block w-full p-2.5  focus:border-primary focus:outline-none "
                  placeholder="Your OTP here"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-prborder-primary dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
