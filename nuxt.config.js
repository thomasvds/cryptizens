const title = 'Cryptizens'
const description = 'A high-energy launchpad for psychedelic tech ventures, by Thomas Vanderstraeten'
const author = 'Thomas Vanderstraeten'
const url = 'https://cryptizens.io'
const img = `${url}/images/social.jpg`

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title,
    meta: [
      // TECHNICAL
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // GENERIC
      { hid: 'name', name: 'name', content: title },
      { hid: 'description', name: 'description', content: description },
      { hid: 'author', name: 'author', content: author },
      // GOOGLE
      { hid: 'g-image', itemprop: 'image', content: img },
      { hid: 'g-name', itemprop: 'name', content: title },
      { hid: 'g-description', itemprop: 'description', content: description },
      // TWITTER
      { hid: 't-site', name: 'twitter:site', content: url },
      { hid: 't-title', name: 'twitter:title', content: title },
      { hid: 't-description', name: 'twitter:description', content: description },
      { hid: 't-creator', name: 'twitter:creator', content: author },
      { hid: 't-image', name: 'twitter:image:src', content: img },
      // FACEBOOK
      { hid: 'og-title', property: 'og:title', content: title },
      { hid: 'og-type', property: 'og:type', content: 'article' },
      { hid: 'og-url', property: 'og:url', content: url },
      { hid: 'og-image', property: 'og:image', content: img },
      { hid: 'og-description', property: 'og:description', content: description }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
