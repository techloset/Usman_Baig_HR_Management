import AttendanceTable from "@/components/attendanceTable/AttendanceTable";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import React from "react";

const page = () => {
  return (
    <DefaultLayout heading={"Hello Lucifer"} description={"Good Morning"}>
      <AttendanceTable display={"hidden"} SearchBarDisplay={"flex"} />
    </DefaultLayout>
  );
};

export default page;
