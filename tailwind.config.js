const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
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
        purple: '#d71dff',
        spring: '#a1ff00',
        mauve: '#fbc5ff',
        prelude: '#c49fcc',
      },
      backgroundImage: {
        experience: "url('/img/join-the-experience.jpg')",
        footer: "url('/img/footer-bg.jpg')",
      },
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
        display: ['Lastica', 'system-ui'],
      },
      minWidth: {
        xs: '320px',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, addVariant }) => {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '0 2px 4px #d71dff',
        },
      })

      addVariant('supports-backdrop-blur', '@supports (backdrop-filter: blur(0))')
    }),
  ],
}
