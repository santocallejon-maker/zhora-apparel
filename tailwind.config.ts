import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D62828", // ZHORA Red
        secondary: "#111111", // Deep Black
        accent: "#2C2C2C", // Dark Gray
      },
    },
  },
  plugins: [],
};
export default config;