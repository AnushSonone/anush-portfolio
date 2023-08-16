/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "base-100": "#1c1e26",
        "base-200": "#1A1C21",
        white: "#d2d4de",
        primary: "#fab38e",
        secondary: "#b877db",
      },
      backgroundImage: {
        contours: "url('/contours.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
