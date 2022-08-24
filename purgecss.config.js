const contents = require('./contents')

module.exports = {
  content: [...contents],
  css: ['./dist/assets/*.css'],
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
}
