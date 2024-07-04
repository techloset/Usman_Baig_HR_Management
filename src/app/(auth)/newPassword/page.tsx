"use client";

import { useAppDispatch } from "@/redux/store";
import instance from "@/utils/axiosInstance/axiosInstance";
import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Page() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState({ email: "", otp: "" });
  const dispatch = useAppDispatch();

  useEffect(() => {
    const otpValue = localStorage.getItem("otpData");

    if (otpValue !== null) {
      const parsedOtp = JSON.parse(otpValue);
      if (parsedOtp) {
        setOtp(parsedOtp);
      }
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "newPassword") setNewPassword(value);
    else if (name === "confirmPassword") setConfirmPassword(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match.");
      return;
    }

    try {
      await instance.put(`/forgetPassword`, {
        email: otp.email,
        hashedPassword: newPassword,
      });
      toast.success("Password changed successfully.");
    } catch (error: any) {
      console.error("Error updating User:", error);
      toast.error(error?.message || "Error updating User");
    }
  };

  return (
    <section className="bg-black  h-screen flex p-4 justify-center items-center text-white  ">
      <div className="flex flex-col md:w-[445px] w-full justify-center py-8 items-center  lg:py-0">
        <div className="w-full rounded-lg shadow ">
          <div className="md:w-[445px]  my-8 w-auto">
            <p className="my-5 text-lg">Update Your Password</p>
            <form
              className="space-y-4 md:space-y-6 w-full"
              onSubmit={handleSubmit}
            >
              <div className="w-auto border-[1px] border-primary rounded-lg p-2">
                <label className="block mb-2 text-sm font-medium text-primary dark:text-primary">
                  Your New Password
                </label>
                <input
                  type="password"
                  onChange={handleChange}
                  name="newPassword"
                  id="newPassword"
                  className="outline-none bg-transparent  text-white sm:text-sm block w-full p-2.5  focus:outline-none"
                  placeholder="Your New Password"
                  required
                />
              </div>
              <div className="w-auto border-[1px] border-primary rounded-lg p-2">
                <label className="block mb-2 text-sm font-medium text-primary dark:text-primary">
                  Conform Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="outline-none bg-transparent  text-white sm:text-sm block w-full p-2.5  focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-prborder-primary dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Password Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
