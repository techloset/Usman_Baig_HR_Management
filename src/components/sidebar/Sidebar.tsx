"use client";
import React from "react";
import Image from "next/image";
import { iconLogo } from "@/constants/Images";
import Link from "next/link";
import { SIDE_BAR_LINKS } from "@/constants/SideBarLinks";
import { usePathname } from "next/navigation";
import ModeSwitcher from "../modeSwitcher/ModeSwitcher";
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div
      className="bg-greyShade m-5 flex flex-col justify-between pt-[37px]
     rounded-[20px] w-[280px] px-[30px]"
    >
      <div className={`flex flex-col `}>
        <div className="flex justify-between">
          <Image src={iconLogo} alt="Logo" />
        </div>
        <div className="mt-[35px] flex flex-col">
          {SIDE_BAR_LINKS.map((link, i: number) => {
            return (
              <Link href={`${link.path}`} key={i}>
                <div
                  className={`${
                    pathname === link.path
                      ? "border-l-[3px] border-customOrange text-customOrange bg-[#E253190D]"
                      : ""
                  } h-[50px] my-[5px] flex`}
                >
                  <Image
                    src={link.icon}
                    alt={link.alt}
                    className="my-auto ms-4 me-4"
                  />
                  <div className="my-auto">{link.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <ModeSwitcher />
    </div>
  );
};

export default Sidebar;
