import { signIn, signOut } from "next-auth/react";
import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";

const useLoginForm = () => {
  const [state, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    signOut({
      redirect: false,
    });
  }, []);

  const handleChange = (event: ChangeEvent) => {};

  const login = async () => {
    setLoading(true);

    const login = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (login?.ok) {
      toast.success("Correct login");
      window.location.assign("/");
    } else if (login?.error) {
      toast.error(login?.error);
    }

    setLoading(false);
  };

  return { login };
};

export default useLoginForm;
