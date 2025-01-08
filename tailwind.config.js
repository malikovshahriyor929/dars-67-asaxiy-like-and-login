/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        selago: "#f4f7fd",
        manatee: "#858997",
        ebony: "#0f172a",
        primary: "#006bff",
      },
    },
    plugins: [],
  },
};
