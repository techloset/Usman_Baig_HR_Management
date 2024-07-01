"use client";
import React from "react";
import StatsCardGroup from "../statsCard/StatsCardGroup";
import AttendanceTable from "../attendanceTable/AttendanceTable";
import useDashboard from "./useDashboard";

function Dashboard() {
  const { employeeArray } = useDashboard();
  if (!employeeArray) return <div>Loading...</div>;
  return (
    <>
      <StatsCardGroup employeesArray={employeeArray} />
      <AttendanceTable display={"flex"} SearchBarDisplay={"hidden"} />
    </>
  );
}

export default Dashboard;
