const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#FFF",
      lightGray: "#e5e7eb",
      primary: "#0284c7",
      secondary: "#ea580c",
      accent: "#10b981",
      neutral: "#191D24",
      info: "#38bdf8",
      success: "#16a34a",
      warning: "#FBBD23",
      error: "#ef4444",
    },
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
