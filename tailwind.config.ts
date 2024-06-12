import type { Config } from "tailwindcss";

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
        greyShade: "#A2A1A80D",
        primaryBlack: "#131313",
        borderGrey: "#A2A1A833",
        customOrange: "#E25319",
        customGrey: "#A2A1A8",
        successLight: "#34C759",
        dangerBackground: "#F45B691A",
        successBackground: "#3FC28A1A",
      },
    },
  },
  plugins: [],
};
export default config;
