/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      lg: { max: "1054px" },
      sm: { max: "479px" },
    },
    backgroundImage: {
      kubiFoto: "url('/src/images/fotoKubi.png')",
    },
  },
  plugins: [],
};
