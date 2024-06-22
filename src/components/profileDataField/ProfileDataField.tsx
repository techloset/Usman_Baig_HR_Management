import React from "react";

const ProfileDataField = ({
  heading,
  value,
}: {
  heading: string;
  value: string;
}) => {
  return (
    <div className="flex flex-col w-[374px]  border-b-[1px] border-borderGrey pb-[10px] ">
      <div className="font-light text-customGrey text-[14px]">{heading}</div>
      <div className="mt-[5px] font-light">{value}</div>
    </div>
  );
};

export default ProfileDataField;
