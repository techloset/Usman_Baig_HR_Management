"use client";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import ViewEmployee from "@/components/viewEmployee/ViewEmployee";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { id }: { id: string } = useParams();
  return (
    <DefaultLayout
      heading={"Employee Name"}
      description={`All Employee > Employee Name`}
    >
      <ViewEmployee id={id} />
    </DefaultLayout>
  );
};

export default page;
