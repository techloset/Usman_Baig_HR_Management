import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex min-h-screen bg-primaryBlack text-white">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header heading={"Hello Lucifer"} description={"Good Morning"} />
          <main>
            <div className="min-h-100vh">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
