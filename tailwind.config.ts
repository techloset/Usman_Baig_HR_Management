import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        danger: "#F45B69",
        success: "#3FC28A",
        warning: "#EFBE12",
        greenShade: "#F45B69",
        greenDark: "#F45B691A",
        redShade: "#F45B69",
        redDark: "#F45B691A",
        customGrey: "#A2A1A8",
        greyShade: "#A2A1A80D",
        orangeShade: "#E253190D",
        borderGrey: "#A2A1A833",
        primaryBlack: "#131313",
        customOrange: "#E25319",
        successLight: "#34C759",
        dangerBackground: "#F45B691A",
        warningBackground: "#EFBE121A",
        lightGreyShade: "#A2A1A81A",
        darkOrange: "#E253191A",
        successBackground: "#3FC28A1A",
      },
    },
  },
  plugins: [],
};
export default withUt(config);
