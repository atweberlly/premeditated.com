const contents = require('./contents')

module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': process.env.NODE_ENV === 'production' && {
      content: [...contents],
      defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]+/g) || []
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]+/g) || []
        return broadMatches.concat(innerMatches)
      },
      safelist: {
        keyframes: ['gravity'],
      },
      keyframes: true,
      variables: true,
    },
    autoprefixer: {},
    'postcss-sort-media-queries': {},
    tailwindcss: {},
  },
}
