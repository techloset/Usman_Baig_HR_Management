"use client";

import FormInput from "@/components/formInput/FormInput";
import useChangePassword from "./useChangePassword";

export default function page() {
  const { handleSubmit, handleChange } = useChangePassword();

  return (
    <section className="bg-primaryBlack  h-screen flex p-4 justify-center items-center text-white  ">
      <div className="flex flex-col md:w-[445px] w-full justify-center py-8 items-center bg-greyShade rounded-[10px]  lg:py-0">
        <div className="md:w-[445px] w-auto py-8 ">
          <p className="mb-8 text-lg flex font-semibold justify-center  ">
            Update Your Password
          </p>
          <form
            className="space-y-4 md:space-y-6 px-5 w-full"
            onSubmit={handleSubmit}
          >
            <FormInput
              label="New Password"
              type="password"
              onChange={handleChange}
              name="newPassword"
            />
            <FormInput
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-10 py-3 bg-customOrange w-full rounded-[10px] mt-5 text-center text-white disabled:opacity-70 cursor-pointer"
            >
              Password Update
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
