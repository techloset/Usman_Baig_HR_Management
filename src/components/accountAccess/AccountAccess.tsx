import React from "react";
import useAccountAccess from "./useAccountAccess";
import Input from "../input/Input";

const AccountAccess = ({ display }: { display: string }) => {
  const { state, handleChange } = useAccountAccess();
  return (
    <div className={`${display} flex-col`}>
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
    </div>
  );
};

export default AccountAccess;
