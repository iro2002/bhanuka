/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto Condensed", "sans-serif"],
        lobster: ["Lobster Two", "cursive"],
        mono: ["Iosevka Charon Mono", "monospace"],
      },
    },
  },
  plugins: [],
};