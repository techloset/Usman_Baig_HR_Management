import React from "react";
import Input from "../input/Input";
import usePersonalInfomation from "./usePersonalInfomation";
import Image from "next/image";
import { iconCamera } from "@/constants/Images";
import InputDropdown from "../inputDropdown/InputDropdown";

const PersonalInfomation = ({ display }: { display: string }) => {
  const { state, handleChange, handleFile, handleClick, hiddenFileInput } =
    usePersonalInfomation();

  return (
    <div className={`${display} flex-col`}>
      <div className="flex ms-[10px] mb-[10px]">
        <button
          className="p-[38px] rounded-[10px] border-[1px] border-borderGrey"
          onClick={handleClick}
        >
          <Image src={iconCamera} height={24} width={24} alt="Camera" />
        </button>
        <input
          type="file"
          onChange={handleFile}
          ref={hiddenFileInput}
          style={{ display: "none" }}
        />
      </div>
      <div className="flex w-full">
        <Input
          value={state.firstName}
          name={"firstName"}
          type={"text"}
          onChange={handleChange}
          placeholder={"First Name"}
        />
        <Input
          value={state.lastName}
          name={"lastName"}
          type={"text"}
          onChange={handleChange}
          placeholder={"Last Name"}
        />
      </div>
      <div className="flex w-full">
        <Input
          value={state.number}
          name={"number"}
          type={"tel"}
          onChange={handleChange}
          placeholder={"Mobile Number"}
        />
        <Input
          value={state.email}
          name={"email"}
          type={"text"}
          onChange={handleChange}
          placeholder={"Email Address"}
        />
      </div>
      <div className="flex w-full">
        <Input
          value={state.dob}
          name={"dob"}
          type={"date"}
          onChange={handleChange}
          placeholder={""}
        />
        <InputDropdown
          label={"Marital Status"}
          options={[
            { label: "Single", value: "single" },
            { label: "Married", value: "married" },
          ]}
        />
      </div>
      <div className="flex w-full">
        <InputDropdown
          label={"Gender"}
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
        />
        <InputDropdown
          label={"Nationality"}
          options={[
            { label: "Pakistan", value: "pakistan" },
            {
              label: "Saudi Arabia",
              value: "Saudi Arabia",
            },
          ]}
        />
      </div>
      <div className="flex w-full">
        <Input
          value={state.address}
          name={"address"}
          type={"text"}
          onChange={handleChange}
          placeholder={"Addrress"}
        />
      </div>
      <div className="flex w-full">
        <InputDropdown
          label={"City"}
          options={[
            { label: "Faisalabad", value: "faisalabad" },
            { label: "Lahore", value: "lahore" },
          ]}
        />
        <InputDropdown
          label={"State"}
          options={[{ label: "Faisalabad", value: "faisalabad" }]}
        />
        <InputDropdown
          label={"Zip Code"}
          options={[{ label: "3000", value: "3000" }]}
        />
      </div>
    </div>
  );
};

export default PersonalInfomation;
