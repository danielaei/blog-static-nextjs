import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        mobileS: "320px",
        mobileM: "375px",
        mobileL: "425px",
        tablet: "768px",
        laptop: "1024px",
        laptopL: "1440px",
        "4k": "2560px",
      },
      colors: {
        purple: {
          DEFAULT: "#6941C6",
          light: "#F9F5FF",
        },
        blue: {
          DEFAULT: "#3538CD",
          light: "#EEF4FF",
        },
        pink: {
          DEFAULT: "#C11574",
          light: "#FDF2FA",
        },
        dark: {
          DEFAULT: "#212121",
          light: "#090D1F",
        },
        slate: {
          DEFAULT: "#667085",
        },
        gray: {
          DEFAULT: "#C0C5D0",
        },
      },
      boxShadow: {
        v1: "rgba(7,65,210,0.1) 0px 9px 30px",
      },
    },
  },
  plugins: [],
  safelist: ["tag-pink", "tag-purple", "tag-blue"],
};
export default config;
