const websiteTitle = 'Premeditated Landing Page Demo'
const websiteDescription = 'Premeditated Landing Page Demo using Vue.js'
const websiteImage =
  'https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2300&q=80'
const websiteUrl = 'https://premeditated-demo.netlify.app'

const basic = [
  {
    injectTo: 'head',
    tag: 'meta',
    attrs: {
      name: 'author',
      content: 'Jonah Castro',
    },
  },
  {
    injectTo: 'head',
    tag: 'meta',
    attrs: {
      name: 'description',
      content: websiteDescription,
    },
  },
  {
    injectTo: 'head',
    tag: 'meta',
    attrs: {
      name: 'keywords',
      content: websiteDescription,
    },
  },
]

const twitter = [
  {
    injectTo: 'head',
    tag: 'meta',
    attrs: {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  },
  {
    injectTo: 'head',
    tag: 'meta',
    attrs: {
      name: 'twitter:title',
      content: websiteTitle,
    },
  },
  {
    injectTo: 'head',
    tag: 'meta',
    attrs: {
      name: 'twitter:description',
      content: websiteDescription,
    },
  },
  {
    injectTo: 'head',
    tag: 'meta',
    attrs: {
      name: 'twitter:site',
      content: '@',
    },
  },
  {
    injectTo: 'head',
    tag: 'meta',
    attrs: {
      name: 'twitter:creator',
      content: '@',
    },
  },
  {
    injectTo: 'head',
    tag: 'meta',
    attrs: {
      name: 'twitter:image',
      content: websiteImage,
    },
  },
]

const og = [
  {
    injectTo: 'head',
    tag: 'meta',
    attrs: {
      name: 'og:title',
      content: websiteTitle,
    },
  },
  {
    injectTo: 'head',
    tag: 'meta',
    attrs: {
      name: 'og:description',
      content: websiteDescription,
    },
  },
  {
    injectTo: 'head',
    tag: 'meta',
    attrs: {
      name: 'og:url',
      content: websiteUrl,
    },
  },
  {
    injectTo: 'head',
    tag: 'meta',
    attrs: {
      name: 'og:site_name',
      content: websiteUrl,
    },
  },
  {
    injectTo: 'head',
    tag: 'meta',
    attrs: {
      name: 'og:type',
      content: 'website',
    },
  },
  {
    injectTo: 'head',
    tag: 'meta',
    attrs: {
      name: 'og:image',
      content: websiteImage,
    },
  },
]

const metaTags = [...basic, ...twitter, ...og]

export default {
  minify: false,
  inject: {
    data: {
      title: websiteTitle,
      injectScript: '<script src="/src/index.js" type="module"></script>',
    },
    tags: [...metaTags],
  },
}
