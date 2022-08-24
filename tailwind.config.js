const defaultTheme = require('tailwindcss/defaultTheme')
// const typography = require('@tailwindcss/typography')
const aspectRatio = require('@tailwindcss/aspect-ratio')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.astro'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        purple: '#d71dff',
        spring: '#a1ff00',
        mauve: '#fbc5ff',
        prelude: '#c49fcc',
      },
      backgroundImage: {
        banner: "url('/img/bg/banner-bg.jpg')",
        terrain: "url('/img/bg/terrain-graph.png')",
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        display: ['Lastica', 'system-ui'],
      },
      minWidth: {
        xs: '20rem',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
    backgroundOpacity: false,
    textOpacity: false,
  },
  plugins: [
    // typography,
    aspectRatio,
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
