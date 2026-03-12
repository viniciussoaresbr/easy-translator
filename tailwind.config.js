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
        // Modern palette extensions
        surface: "#F8FAFC",
        border: "#E2E8F0",
      },
      fontFamily: {
        Barlow: ["Barlow Condensed", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
};
