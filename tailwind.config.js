const defaultTheme = require('tailwindcss/defaultTheme')
const typograhy = require('@tailwindcss/typography')
const aspectRatio = require('@tailwindcss/aspect-ratio')
const lineClamp = require('@tailwindcss/line-clamp')
const plugin = require('tailwindcss/plugin')
const contents = require('./contents')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...contents],
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
        grandis: '#ffbd69',
      },
      backgroundImage: {
        banner: "url('/img/bg/banner-bg.jpg')",
        terrain: "url('/img/bg/terrain-graph.png')",
        'shop-all': "url('/img/shop/shop-all-bg.jpg')",
        404: "url('/img/bg/404.jpg')",
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        display: ['Lastica', 'system-ui'],
      },
      minWidth: {
        xs: '20rem',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: [
            {
              h1: {
                fontWeight: 700,
                fontSize: '2.25rem',
                marginTop: false,
                marginBottom: theme('spacing.4'),
                lineHeight: '2.75rem',
                letterSpacing: theme('letterSpacing.tight'),
              },
              h2: {
                fontSize: '1.75rem',
                marginTop: theme('spacing.8'),
                marginBottom: theme('spacing.4'),
                lineHeight: '2rem',
                letterSpacing: theme('letterSpacing.tight'),
              },
              p: {
                marginTop: theme('spacing.5'),
                marginBottom: theme('spacing.5'),
              },
              ul: {
                marginTop: theme('spacing.5'),
                marginBottom: theme('spacing.5'),
                paddingLeft: theme('spacing.5'),
              },
              li: {
                marginTop: theme('spacing.2'),
                marginBottom: theme('spacing.2'),
              },
              'ul > li': {
                paddingLeft: '0.375rem',
              },
            },
          ],
        },
      }),
    },
  },
  corePlugins: {
    aspectRatio: false,
    backgroundOpacity: false,
    borderOpacity: false,
    textOpacity: false,
  },
  plugins: [
    typograhy,
    aspectRatio,
    lineClamp,
    plugin(({ addUtilities, addVariant }) => {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '0 2px 4px #d71dff',
        },
        '.writing-ltr': {
          'writing-mode': 'vertical-lr',
        },
      })

      addVariant('supports-backdrop-blur', '@supports (backdrop-filter: blur(0))')
    }),
  ],
}
