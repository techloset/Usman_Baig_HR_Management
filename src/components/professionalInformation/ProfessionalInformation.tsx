import React from "react";
import Input from "../input/Input";
import useProfessionalInformation from "./useProfessionalInformation";
import InputDropdown from "../inputDropdown/InputDropdown";
import Button from "../button/Button";
import { EMPLOYEE_PROFESSIONAL_INFO_PROPS } from "@/types/EmployeeInfoProps";

const ProfessionalInformation = ({
  handleClick,
  option,
}: EMPLOYEE_PROFESSIONAL_INFO_PROPS) => {
  const { state, handleChange, handleSubmit } = useProfessionalInformation();
  return (
    <form onSubmit={handleSubmit} className={`flex flex-col`}>
      <div className="flex w-full">
        <Input
          value={state.employeeId}
          name={"employeeId"}
          type={"text"}
          onChange={handleChange}
          placeholder={"employeeId"}
        />
        <Input
          value={state.userName}
          name={"userName"}
          type={"text"}
          onChange={handleChange}
          placeholder={"userName"}
        />
      </div>
      <div className="flex w-full">
        <Input
          value={state.emplopeeType}
          name={"emplopeeType"}
          type={"text"}
          onChange={handleChange}
          placeholder={"emplopeeType"}
        />
        <Input
          value={state.email}
          name={"email"}
          type={"email"}
          onChange={handleChange}
          placeholder={"Email Address"}
        />
      </div>
      <div className="flex w-full">
        <Input
          value={state.department}
          name={"department"}
          type={"text"}
          onChange={handleChange}
          placeholder={"department"}
        />
        <Input
          value={state.designation}
          name={"designation"}
          type={"text"}
          onChange={handleChange}
          placeholder={"designation"}
        />
      </div>
      <div className="flex w-full">
        <InputDropdown
          onChange={handleChange}
          label={"Working Days"}
          options={[{ label: "Seven", value: "7" }]}
        />
        <Input
          value={state.joiningDate}
          name={"joiningDate"}
          type={"date"}
          onChange={handleChange}
          placeholder={"Joining Date"}
        />
      </div>
      <div className="flex w-full">
        <InputDropdown
          onChange={handleChange}
          label={"Office Location"}
          options={[{ label: "Faisalabad", value: "faisalabad" }]}
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

export default ProfessionalInformation;
