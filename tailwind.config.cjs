/** @type {import('tailwindcss').Config} */
const theme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      default: ['Nunito Sans', ...theme.fontFamily.sans],
    },
    extend: {
      colors: {
        red: '#EE4957',
        brand: '#0794E3',
      },
    },
  },
  plugins: [],
}
