import DefaultLayout from "@/components/layouts/DefaultLayout";
import ViewEmployee from "@/components/viewEmployee/ViewEmployee";
import React from "react";

const page = () => {
  return (
    <DefaultLayout
      heading={"Employee Name"}
      description={`All Employee > Employee Name`}
    >
      <ViewEmployee />
    </DefaultLayout>
  );
};

export default page;
