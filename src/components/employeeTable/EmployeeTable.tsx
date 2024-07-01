import React from "react";
import Image from "next/image";
import { iconEdit, iconTrash, iconView } from "@/constants/Images";
import { EMPLOYEE_TABLE_HEAD } from "@/constants/Constants";
import Link from "next/link";
import useEmployeeTable from "./useEmployeeTable";
import { EMPLOYEES_TABLE_DATA } from "@/types/types";

const EmployeeTable = ({ data }: { data: EMPLOYEES_TABLE_DATA[] }) => {
  const { handleDelete } = useEmployeeTable();
  return (
    <div className="mt-[30px] shadow-md ">
      <table className="w-full font-light text-sm  text-left rtl:text-right ">
        <thead className="text-[16px] text-[#A2A1A8] font-light">
          <tr>
            {EMPLOYEE_TABLE_HEAD.map((item, i) => {
              return (
                <th
                  scope="col"
                  className="py-[10px] border-b-[1px] border-borderGrey"
                  key={i}
                >
                  {item.heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((data: EMPLOYEES_TABLE_DATA, i: number) => (
              <tr className="border-b-[1px] border-borderGrey" key={i}>
                <th scope="row" className="flex items-center pt-[10px]">
                  {/* <Image
                    src={data?.photoURL}
                    height={36}
                    width={36}
                    className="rounded-[18px]"
                    alt="Photo"
                  /> */}
                  <div className="text-[16px] ms-[10px]">
                    {data?.firstName + " " + data?.lastName}
                  </div>
                </th>
                <td className="pt-[10px]">{data?.employeeId}</td>
                <td className="pt-[10px]">{data.department}</td>
                <td className="pt-[10px]">{data.designation}</td>
                <td className="pt-[10px]">{data?.employmentType}</td>
                <td className="pt-[10px]">
                  <div className="w-fit text-[12px] bg-[#E253191A] text-customOrange rounded-[4px] px-[9px] py-[3px] font-light">
                    Permanent
                  </div>
                </td>
                <td className="pt-[10px] flex space-x-2">
                  <Link href={`/employees/${data.id}`}>
                    <Image src={iconView} alt="iconView" />
                  </Link>
                  <button>
                    <Image src={iconEdit} alt="iconEdit" />
                  </button>
                  <button onClick={() => handleDelete(data?.id)}>
                    <Image src={iconTrash} alt="iconTrash" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
