"use client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../libs/AuthOptions";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const useDefaultLayout = () => {
  const [session, setSession] = useState<any>();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getServerSession(authOptions);
      if (!session?.user?.email) {
        redirect("/login");
      } else {
        setSession(session);
      }
    };

    checkSession();
  }, []);

  return { session };
};

export default useDefaultLayout;
