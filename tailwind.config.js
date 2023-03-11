/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      lg: { max: "1130px" },
      sm: { max: "479px" },
    },
  },
  plugins: [],
};
