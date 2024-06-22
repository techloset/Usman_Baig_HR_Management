import React from "react";
import useAccountAccess from "./useAccountAccess";
import Input from "../input/Input";
import Button from "../button/Button";
import { EMPLOYEE_ACCOUNT_ACCESS_PROPS } from "@/types/EmployeeInfoProps";

const AccountAccess = ({
  handleClick,
  option,
}: EMPLOYEE_ACCOUNT_ACCESS_PROPS) => {
  const { state, handleChange, handleSubmit } = useAccountAccess();
  return (
    <form onSubmit={handleSubmit} className={`flex flex-col`}>
      <div className={`flex w-full`}>
        <Input
          value={state.email}
          name={"email"}
          type={"email"}
          onChange={handleChange}
          placeholder={"Email Address"}
        />
        <Input
          value={state.slackId}
          name={"slackId"}
          type={"text"}
          onChange={handleChange}
          placeholder={"Enter Slack Id"}
        />
      </div>
      <div className="flex w-full">
        <Input
          value={state.skypeId}
          name={"skypeId"}
          type={"text"}
          onChange={handleChange}
          placeholder={"Enter Skype Id"}
        />
        <Input
          value={state.githubId}
          name={"githubId"}
          type={"text"}
          onChange={handleChange}
          placeholder={"Enter Github Id"}
        />
      </div>
      <div className="flex flex-row-reverse">
        <Button
          handleSubmit={handleSubmit}
          handleClick={handleClick}
          option={option}
        />
      </div>
    </form>
  );
};

export default AccountAccess;
