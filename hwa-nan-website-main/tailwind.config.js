/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "title-purple-100": "#837099",
        "title-purple-500": "#4D01A3",
        "primary-purple-50": "#8366A9",
        "primary-purple-100": "#563C79",
        "primary-purple-500": "#5C2898",
        "gray-50": "#eeedfa"
      },
      fontFamily: {
        barlowcondensed: ["Barlow Condensed:wght@500", "sans-serif"],
        barlowcondensedthin: ["Barlow Condensed:wght@100", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        taprom: ["Taprom", "sans-serif"],
      },
      content: {
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};