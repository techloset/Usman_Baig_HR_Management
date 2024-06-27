import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../../../libs/AuthOptions";

interface ProtectedRootLayoutProps {
  children: React.ReactNode;
}

export default async function ProtectedRootLayout({
  children,
}: ProtectedRootLayoutProps) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect("/login");
  }

  return <main>{children}</main>;
}
