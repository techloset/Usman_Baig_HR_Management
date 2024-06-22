import React from "react";
import Image from "next/image";
import Input from "../input/Input";
import Button from "../button/Button";
import { iconCamera } from "@/constants/Images";
import SelectMenu from "../selectMenu/SelectMenu";
import { UploadButton } from "@/utils/uploadthing";
import usePersonalInfomation from "./usePersonalInfomation";
import { EMPLOYEE_PERSONAL_INFO_PROPS } from "@/types/EmployeeInfoProps";

const PersonalInfomation = ({
  handleClick,
  option,
  data,
  setData,
}: EMPLOYEE_PERSONAL_INFO_PROPS) => {
  const { state, setProfileURL, handleChange, handleSubmit } =
    usePersonalInfomation();
  return (
    <form onSubmit={handleSubmit} className={`flex flex-col`}>
      <div className="flex ms-[10px] mb-[10px]">
        <UploadButton
          className="w-[40px] outline-none bg-greyShade"
          content={{
            allowedContent() {
              return `dsdsd`;
            },
            button(arg) {
              return (
                <div className="flex mt-auto outline-none focus:outline-none focus:border-none ">
                  <Image src={iconCamera} height={24} width={24} alt="Camera" />
                </div>
              );
            },
          }}
          appearance={{
            container:
              "rounded-[10px] border-[1px] border-borderGrey h-[100px] w-[100px] m-0 p-0",

            allowedContent: "text-transparent",
            button: {
              background: "transparent",
              //     color: "transparent",
              //     height: 0,
              // width: "40px",
              //     border: "none",
              //     cursor: "pointer",
            },
          }}
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            console.log("Files: ", res[0]?.url);
            setProfileURL(res[0]?.url);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
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
        <SelectMenu
          label={"Marital Status"}
          options={[
            { label: "Single", value: "single" },
            { label: "Married", value: "married" },
          ]}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-full">
        <SelectMenu
          label={!state.gender ? "Gender" : state.gender}
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          onChange={handleChange}
        />
        <SelectMenu
          label={"Nationality"}
          options={[
            { label: "Pakistan", value: "pakistan" },
            {
              label: "Saudi Arabia",
              value: "Saudi Arabia",
            },
          ]}
          onChange={handleChange}
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
        <SelectMenu
          label={"City"}
          options={[
            { label: "Faisalabad", value: "faisalabad" },
            { label: "Lahore", value: "lahore" },
          ]}
          onChange={handleChange}
        />
        <SelectMenu
          label={"State"}
          options={[{ label: "Faisalabad", value: "faisalabad" }]}
          onChange={handleChange}
        />
        <SelectMenu
          label={"Zip Code"}
          options={[{ label: "3000", value: "3000" }]}
          onChange={handleChange}
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

export default PersonalInfomation;
