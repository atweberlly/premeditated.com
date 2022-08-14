const defaultTheme = require('tailwindcss/defaultTheme')
const contents = require('./contents')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...contents],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
      },
    },
    extend: {
      colors: {
        spring: '#a1ff00',
      },
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
      minWidth: {
        xs: '20rem',
      },
    },
  },
  plugins: [],
}
