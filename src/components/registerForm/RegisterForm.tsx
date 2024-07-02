"use client";
import React from "react";
import FormInput from "@/components/formInput/FormInput";
import useRegisterForm from "./useRegisterForm";
import Link from "next/link";

export default function RegisterForm() {
  const { state, handleChange, loading, register } = useRegisterForm();
  return (
    <div className="space-y-5 flex flex-col items-center">
      <FormInput
        label="Email"
        name="email"
        value={state?.email}
        onChange={handleChange}
        disabled={loading}
      />
      <FormInput
        label="Password"
        name="password"
        value={state?.password}
        onChange={handleChange}
        disabled={loading}
        type="password"
      />
      <div className="text-sm text-center flex w-full justify-between text-neutral-500 mt-1.5 mb-[30px]">
        <div className="text-[16px] text-white flex ">
          <input
            id="orange-checkbox"
            type="checkbox"
            className="w-5 h-5 accent-customOrange"
          />
          <span className="ms-2.5"> Remember me</span>
        </div>
        <Link href={"/login"} className="font-light text-customOrange me-4">
          Already have an acount?
        </Link>
      </div>
      <div
        onClick={register}
        className="px-10 py-3 bg-customOrange w-full rounded-[10px] text-center text-white disabled:opacity-70 cursor-pointer"
      >
        Register
      </div>
    </div>
  );
}
