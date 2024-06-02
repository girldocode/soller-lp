import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-gray-600": "#475569",
        "blue-gray-900": "#0F172A",
        "amber-300": "#FCD34D",
        "amber-500": "#F59E0B",
        "amber-600": "#D97706",
        "amber-900": "#78350F",
        "blue-light-100": "#E0F2FE",
        "blue-light-200": "#BAE6FD",
        "blue-light-300": "#7DD3FC",
        "blue-light-700": "#0369A1",
        "purple-500": " #A855F7",
        "purple-900": "#581C87",
      },
    },
  },
  plugins: [],
};
export default config;
