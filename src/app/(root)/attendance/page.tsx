import React from "react";
import AttendanceTable from "@/components/attendanceTable/AttendanceTable";
import DefaultLayout from "@/components/layouts/DefaultLayout";

const page = () => {
  return (
    <DefaultLayout heading={"Hello Lucifer"} description={"Good Morning"}>
      <AttendanceTable display={"hidden"} SearchBarDisplay={"flex"} />
    </DefaultLayout>
  );
};

export default page;
