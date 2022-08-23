module.exports = {
  plugins: {
    '@fullhuman/postcss-purgecss': {
      content: ['./src/**/*.astro', './src/**/*.js'],
      defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]+/g) || []
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]+/g) || []
        return broadMatches.concat(innerMatches)
      },
      keyframes: true,
      variables: true,
      safelist: {
        keyframes: ['gravity'],
      },
    },
    autoprefixer: {},
    'postcss-sort-media-queries': {},
    tailwindcss: {},
  },
}
