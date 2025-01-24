/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        blurIn: {
          "0%": { opacity: 0, filter: "blur(10px)" },
          "100%": { opacity: 1, filter: "blur(0)" },
        },
      },
    },
  },
  plugins: [],
};
