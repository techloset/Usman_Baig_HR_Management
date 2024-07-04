"use client";

import React from "react";
import FormInput from "@/components/formInput/FormInput";
import useForgetPassForm from "./useForgetPassForm";

export default function ForgetPassForm() {
  const { loading, state, sendOTP, handleChange } = useForgetPassForm();
  return (
    <div className="flex flex-col items-center max-w-[445px] ">
      <FormInput
        label="Email"
        name={"email"}
        value={state?.email}
        onChange={handleChange}
        disabled={loading}
      />
      <div
        onClick={() => sendOTP}
        className="px-10 py-3 bg-customOrange w-full rounded-[10px] mt-5 text-center text-white disabled:opacity-70 cursor-pointer"
      >
        Send OTP
      </div>
    </div>
  );
}
