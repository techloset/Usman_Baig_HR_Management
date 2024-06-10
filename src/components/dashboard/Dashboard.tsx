import React from "react";
import StatsCardGroup from "../statsCard/StatsCardGroup";
import AttendanceTable from "../attendanceTable/AttendanceTable";

function Dashboard() {
  return (
    <>
      <StatsCardGroup />
      <AttendanceTable display={"flex"} SearchBarDisplay={"hidden"} />
    </>
  );
}

export default Dashboard;
