import { StaticImageData } from "next/image";

export type StatsCardTypes = {
  src: StaticImageData;
  icon: StaticImageData;
  amount: number;
  heading: string;
  date: string;
  percent: number;
  BgColor: string;
  textColor: string;
  iconAlt: string;
  srcAlt: string;
};
