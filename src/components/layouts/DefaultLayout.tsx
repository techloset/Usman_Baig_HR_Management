import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";
import useDefaultLayout from "./useDefaultLayout";

export default function DefaultLayout({
  children,
  heading,
  description,
}: {
  children: React.ReactNode;
  heading: string;
  description: string;
}) {
  // const { session } = useDefaultLayout();

  return (
    <>
      <div className="flex min-h-screen bg-primaryBlack text-white">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header heading={heading} description={description} />
          <main>
            <div className="min-h-100vh mb-5">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
