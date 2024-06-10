import React from "react";
import StatsCard from "./StatsCard";
import {
  OrangeBriefcase,
  OrangeCalender,
  OrangeFile,
  iconGreenArrow,
  iconRedArrow,
  orangeUsers,
} from "@/constants/Images";

const StatsCardGroup = () => {
  return (
    <div className="flex flex-wrap">
      <StatsCard
        icon={orangeUsers}
        amount={666}
        heading={"All Employees"}
        date={"July 16, 2023"}
        percent={23}
        src={iconGreenArrow}
        BgColor={"#30BE821A"}
        textColor={"#30BE82"}
        iconAlt={"OrangeUser"}
        srcAlt={"iconUp"}
      />
      <StatsCard
        icon={OrangeBriefcase}
        amount={666}
        heading={"Total Applicant"}
        date={"July 16, 2023"}
        percent={12}
        src={iconRedArrow}
        BgColor={"#F45B691A"}
        textColor={"#F45B69"}
        iconAlt={"OrangeUser"}
        srcAlt={"iconDown"}
      />
      <StatsCard
        icon={OrangeCalender}
        amount={666}
        heading={"Today Attendance"}
        date={"July 16, 2023"}
        percent={23}
        src={iconGreenArrow}
        BgColor={"#30BE821A"}
        textColor={"#30BE82"}
        iconAlt={"OrangeUser"}
        srcAlt={"iconUp"}
      />
      <StatsCard
        icon={OrangeFile}
        amount={666}
        heading={"Total Projects"}
        date={"July 16, 2023"}
        percent={23}
        src={iconGreenArrow}
        BgColor={"#30BE821A"}
        textColor={"#30BE82"}
        iconAlt={"OrangeUser"}
        srcAlt={"iconUp"}
      />
    </div>
  );
};

export default StatsCardGroup;
