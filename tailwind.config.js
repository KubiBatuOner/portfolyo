/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      lg: { max: "1023px" },
      sm: { max: "479px" },
    },
  },
  plugins: [],
};
