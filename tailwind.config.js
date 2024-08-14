/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#C2DFE3",
        secondary: "#9DB4C0",
        light: "#E0FBFC",
        secondaryDark: "#5C6B73",
        dark: "#253237",
      },
      fontFamily: { Barlow: ["Barlow Condensed"] },
    },
  },
  plugins: [],
};
