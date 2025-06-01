/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#179957",
        accentDark: "#184D47",
      },
      Container: {
        center: true,
        padding: "15px"
      }
    },
  },
  plugins: [],
}
