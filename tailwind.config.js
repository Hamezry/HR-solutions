/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: "var(--display-font)",
    },
    extend: {
      colors: {
        bgColor: "#FFFFF",
        primaryBlue: "#4169E1",
        secondaryBlue: "#4169E1",
        primarySlate: "#64748b",
        secondarySlate: "#64748b",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};



