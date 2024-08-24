/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,svg}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: "Nunito",
        roboto: "Roboto",
      },
      boxShadow: {
        "slate-300": "0 1px 0 0 #cbd5e1",
      },
      backgroundColor: {
        "blue-350": "#e3f0ff",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
