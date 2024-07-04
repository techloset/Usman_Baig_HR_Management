import instance from "@/utils/axiosInstance/axiosInstance";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

const useChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState({ email: "", otp: "" });
  const router = useRouter();
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
      toast.error("Password's don't match!");
      return;
    }
    try {
      await instance.put(`/forgetPassword`, {
        email: otp.email,
        hashedPassword: newPassword,
      });
      toast.success("Password changed successfully!");
      router.push("/login");
    } catch (error: any) {
      console.error("Error updating User:", error);
      toast.error(error?.message || "Error updating User");
    }
  };
  return { handleSubmit, handleChange };
};

export default useChangePassword;
