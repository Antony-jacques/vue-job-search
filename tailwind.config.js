/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      // extend tailwind functionality
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-gray-1": "#dadce0", // add custom class
        "brand-blue-1": "#1967d2", // add custom class
        "brand-green-1": "#137333", // add custom class
      },
    },
  },
  plugins: [],
};
