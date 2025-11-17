/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        clash: ["Clash Display Medium", "sans-serif"],
        lexend: ["Lexend", "sans-serif"], // Add Lexend font family
        rubik: ["Rubik", "sans-serif"],
      },
      colors: {
        yellow: "#FFCC00",
      },
      backgroundColor: {
        yellow: "#130b1c",
      },
    },
  },
  plugins: [],
}