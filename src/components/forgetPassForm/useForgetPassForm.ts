import { signOut } from "next-auth/react";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
const useForgetPassForm = () => {
  const [state, setState] = useState({ email: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState((s) => ({ ...s, [event.target.name]: event.target.value }));
  };
  const otp = Math.floor(100000 + Math.random() * 900000);
  const sendOTP = async (event: any) => {
    event.preventDefault();

    const data = {
      service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID || "",
      template_params: {
        to_email: state.email,
        to_name: state.email,
        from_name: "HR Management",
        user_email: state.email,
        otp: otp,
      },
    };

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      localStorage.setItem(
        "otpData",
        JSON.stringify({ email: state.email, otp })
      );
      router.push("/otp");
      console.log(res.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    setTimeout(function () {
      localStorage.removeItem("otpData");
    }, 60 * 1000);
  }, [otp]);

  return { loading, state, handleChange, sendOTP };
};

export default useForgetPassForm;
