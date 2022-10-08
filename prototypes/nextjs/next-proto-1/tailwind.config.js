/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'asu-maroon': '#990033',
        'asu-gold': '#FFB310',
      }
    },
  },
  plugins: [],
}
