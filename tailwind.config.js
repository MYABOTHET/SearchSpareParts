/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,svg}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: "Nunito",
        roboto: "Roboto",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
