import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#121212",
      primary: "#6157FF",
      secondary: "#9933FF",
      skyblue: { 100: "#01CAFF", 300: "#2D9FFF" },
      purple: { 100: "#cdaaf7", 300: "#9339FF" },
      gray: { 700: "#3E3E3E", 300: "rgb(166, 166, 166)" },
      red: { 300: "#EB4CA6" },
      orange: { 200: "#FC6272" },
      black: "#000",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
