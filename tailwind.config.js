/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        premier: {
          dark: "#070707",
          panel: "#111111",
          red: "#e11d2e",
          orange: "#ff6a00",
          gold: "#f5c542",
          silver: "#d4d4d8",
        },
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0,0,0,.45)",
      },
    },
  },
  plugins: [],
};