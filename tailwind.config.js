/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#f25f3a",
        darkBlue: "#242d52",
        grayishDarkBlue: "#1d1e25",
        veryDarkBlue: "#1d1e25",
        lightGray: "#fafafa",
        lightRed: "#f25f3a2f",
      },
    },
  },
  plugins: [],
};
