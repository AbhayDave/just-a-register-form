/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   blue: "5d5fef",
    //   red: "e74a3b",
    //   green: "3cbc81",
    //   yellow: "3cbc81",
    // },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
