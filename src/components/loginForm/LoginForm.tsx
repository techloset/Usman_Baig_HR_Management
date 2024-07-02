"use client";

import React from "react";
import FormInput from "@/components/formInput/FormInput";
import useLoginForm from "./useLoginForm";

export default function LoginForm() {
  const { loading, state, login, handleChange } = useLoginForm();
  return (
    <div className="flex flex-col items-center max-w-[445px] ">
      <FormInput
        label="Email"
        name={"email"}
        value={state?.email}
        onChange={handleChange}
        disabled={loading}
      />
      <FormInput
        label="Password"
        name={"password"}
        value={state?.password}
        onChange={handleChange}
        disabled={loading}
        type="password"
      />
      <div
        onClick={login}
        className="px-10 py-3 bg-customOrange w-full rounded-[10px] text-center text-white disabled:opacity-70 cursor-pointer"
      >
        Login
      </div>
    </div>
  );
}
