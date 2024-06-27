"use client";

import React from "react";
import FormInput from "@/components/formInput/FormInput";
import useRegisterForm from "./useRegisterForm";

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
      <div
        onClick={register}
        className="px-10 py-3 bg-neutral-900 rounded-full text-white disabled:opacity-70 cursor-pointer"
      >
        Register
      </div>
    </div>
  );
}
